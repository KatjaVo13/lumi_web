import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface WalkRequest {
  area: string;
  mood: string;
  time_available: number;
  transport: string;
  weather: string;
  user_lat: number;
  user_lon: number;
}

export interface Suggestion {
  name: string;
  category: string;
  area: string;
  description: string;
  latitude: number;
  longitude: number;
  address: string;
  score: number;
  reasoning: string[];
}

export interface WalkResponse {
  message: string;
  suggestions: Suggestion[];
}

@Injectable({
  providedIn: 'root'
})
export class LumiApi {
  private http = inject(HttpClient);
  private baseUrl = 'http://127.0.0.1:8000';

  getHealth(): Observable<unknown> {
    return this.http.get(`${this.baseUrl}/health`);
  }

  walk(request: WalkRequest): Observable<WalkResponse> {
    return this.http.post<WalkResponse>(`${this.baseUrl}/walk`, request);
  }
}