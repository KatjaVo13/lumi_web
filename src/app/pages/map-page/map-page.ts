import { AfterViewInit, ChangeDetectorRef, Component, NgZone, OnInit, inject } from '@angular/core';
import * as L from 'leaflet';
import { LumiApi } from '../../services/lumi-api';

@Component({
  selector: 'app-map-page',
  imports: [],
  templateUrl: './map-page.html',
  styleUrl: './map-page.scss'
})
export class MapPage implements AfterViewInit, OnInit {
  private map!: L.Map;
  private marker: L.Marker | null = null;
  private lumiApi = inject(LumiApi);

  selectedCoordinates = 'Nothing selected yet';
  backendStatus = 'Backend not checked yet';

  constructor(
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.lumiApi.getHealth().subscribe({
      next: (response) => {
        this.backendStatus = `Backend connected: ${JSON.stringify(response)}`;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.backendStatus = `Backend error: ${error.message}`;
        this.cdr.detectChanges();
      }
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([60.1699, 24.9384], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.map.on('click', (event: L.LeafletMouseEvent) => {
      this.ngZone.run(() => {
        const lat = event.latlng.lat;
        const lng = event.latlng.lng;

        this.selectedCoordinates = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;

        if (this.marker) {
          this.map.removeLayer(this.marker);
        }

        this.marker = L.marker([lat, lng]).addTo(this.map);

        this.cdr.detectChanges();
      });
    });
  }
}