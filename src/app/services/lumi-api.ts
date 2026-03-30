import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LumiApi {
  private http = inject(HttpClient);

  // Change this to your real FastAPI URL later
  private baseUrl = 'http://127.0.0.1:8000';

  getHealth(): Observable<unknown> {
    return this.http.get(`${this.baseUrl}/health`);
  }
}