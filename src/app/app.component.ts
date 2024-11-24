import { Component } from '@angular/core';
import { SpecificHoursModule } from './specific-hours/specific-hours.module';
import { DashboardService } from './services/dashboard.service';
import { MatCardModule } from '@angular/material/card'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SpecificHoursModule
  ],
  template: `
    <div class="dashboard-container">
      <!-- ... -->
      <app-specific-hours
        [data10hInput]="data10h"
        [data14hInput]="data14h"
        [data17hInput]="data17h">
      </app-specific-hours>
    </div>
  `,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTemperature: number;
  currentHumidity: number;
  dailyAverage: number;
  data10h: { temperature: number, humidity: number };
  data14h: { temperature: number, humidity: number };
  data17h: { temperature: number, humidity: number };

  constructor(private dashboardService: DashboardService) {
    this.currentTemperature = 0;
    this.currentHumidity = 0;
    this.dailyAverage = 0;
    this.data10h = { temperature: 0, humidity: 0 };
    this.data14h = { temperature: 0, humidity: 0 };
    this.data17h = { temperature: 0, humidity: 0 };

    this.fetchData();
    this.fetchSpecificHoursData();
    this.calculateDailyAverage();
  }

  fetchData() {
    this.dashboardService.getCurrentConditions()
      .then(data => {
        this.currentTemperature = data.temperature;
        this.currentHumidity = data.humidity;
      });
  }

  fetchSpecificHoursData() {
    this.dashboardService.getDataForSpecificHours()
      .then(data => {
        this.data10h = data['10h'];
        this.data14h = data['14h'];
        this.data17h = data['17h'];
      });
  }

  calculateDailyAverage() {
    this.dashboardService.getDailyAverage()
      .then(average => {
        this.dailyAverage = average;
      });
  }
}
