import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SubscriberMeasurements} from "./SubscriberMeasurements";

@Injectable({
  providedIn: 'root'
})
export class SubscriberMeasurementService {

  private baseUrl = 'http://localhost:8080/gym/measurement';

  constructor(private http: HttpClient) { }

  createSubscriberMeasurement(subscriberMeasurements: SubscriberMeasurements) {
    return this.http.post(`${this.baseUrl}/create-measurement`, subscriberMeasurements);
  }
  getSubscribersMeasurements(subscriberId): Observable<any> {
    return this.http.get(`${this.baseUrl}/subscriberId?subscriberId=${subscriberId}`);
  }
}
