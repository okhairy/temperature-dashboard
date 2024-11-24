import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'https://http://localhost:3002/api/';

  constructor() { }

  getCurrentConditions() {
    return axios.get(`${this.apiUrl}/current`)
      .then(response => response.data);
  }

  getDataForSpecificHours() {
    return axios.get(`${this.apiUrl}/specific-hours`)
      .then(response => response.data);
  }

  getDailyAverage() {
    return axios.get(`${this.apiUrl}/daily-average`)
      .then(response => response.data);
  }
}
