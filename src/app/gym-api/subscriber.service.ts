import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  private baseUrl = 'http://localhost:8080/gym/subscriber';

  constructor(private http: HttpClient) { }

  getSubscriber(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getSubscriberBySubscriberId(subscriberId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/subscriberId?subscriberId=${subscriberId}`);
  }
  createSubscriber(subscriber: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create-subscriber`, subscriber);
  }

  updateSubscriber(id: number, value: any) {
    return this.http.put(`${this.baseUrl}/update-subscriber/${id}`, value);
  }

  deleteSubscriber(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-subscriber/${id}`, { responseType: 'text' });
  }

  getSubscribersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/subscribers`);
  }
}
