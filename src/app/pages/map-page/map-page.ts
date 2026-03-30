import { AfterViewInit, ChangeDetectorRef, Component, NgZone, OnInit, inject } from '@angular/core';
import * as L from 'leaflet';
import { LumiApi, Suggestion } from '../../services/lumi-api';

@Component({
  selector: 'app-map-page',
  imports: [],
  templateUrl: './map-page.html',
  styleUrl: './map-page.scss'
})
export class MapPage implements AfterViewInit, OnInit {
  private map!: L.Map;
  private selectedMarker: L.Marker | null = null;
  private recommendationMarkers: L.Marker[] = [];
  private lumiApi = inject(LumiApi);

  selectedCoordinates = 'Nothing selected yet';
  backendStatus = 'Backend not checked yet';
  recommendations: Suggestion[] = [];
  isLoading = false;

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

        if (this.selectedMarker) {
          this.map.removeLayer(this.selectedMarker);
        }

        this.selectedMarker = L.marker([lat, lng]).addTo(this.map);

        this.loadRecommendations(lat, lng);
        this.cdr.detectChanges();
      });
    });
  }

  private loadRecommendations(lat: number, lng: number): void {
    this.isLoading = true;
    this.recommendations = [];
    this.clearRecommendationMarkers();

    this.lumiApi.walk({
      area: '',
      mood: 'calm',
      time_available: 30,
      transport: 'walk',
      weather: 'dry',
      user_lat: lat,
      user_lon: lng
    }).subscribe({
      next: (response) => {
        this.recommendations = response.suggestions ?? [];
        this.addRecommendationMarkers();
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Walk request failed:', error);
        this.backendStatus = `Walk request error: ${error.message}`;
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  private addRecommendationMarkers(): void {
    for (const item of this.recommendations) {
      const marker = L.marker([item.latitude, item.longitude])
        .addTo(this.map)
        .bindPopup(`
          <strong>${item.name}</strong><br>
          ${item.category}<br>
          ${item.address ?? ''}
        `);

      this.recommendationMarkers.push(marker);
    }
  }

  private clearRecommendationMarkers(): void {
    for (const marker of this.recommendationMarkers) {
      this.map.removeLayer(marker);
    }

    this.recommendationMarkers = [];
  }
}