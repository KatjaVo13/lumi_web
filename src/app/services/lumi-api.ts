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

export interface WeatherResponse {
  timezone: string | null;
  current: {
    time: string | null;
    temperature_2m: number | null;
    apparent_temperature: number | null;
    precipitation: number | null;
    rain: number | null;
    showers: number | null;
    snowfall: number | null;
    cloud_cover: number | null;
    wind_speed_10m: number | null;
  };
  sunrise: string | null;
  sunset: string | null;
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

  getWeather(lat: number, lon: number): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(
      `${this.baseUrl}/weather?lat=${lat}&lon=${lon}`
    );
  }
}