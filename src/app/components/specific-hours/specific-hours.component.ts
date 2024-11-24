import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-specific-hours',
  template: `
    <div class="specific-hours">
      <mat-card class="hour-card">
        <mat-card-header>
          <mat-card-title>Données en Temps Réel</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Température: {{ currentData.temperature }}°C</p>
          <p>Humidité: {{ currentData.humidity }}%</p>
        </mat-card-content>
      </mat-card>

      <div class="hour-data">
        <h2>10h</h2>
        <p>Température: {{ data10h.temperature }}°C</p>
        <p>Humidité: {{ data10h.humidity }}%</p>
      </div>
      <div class="hour-data">
        <h2>14h</h2>
        <p>Température: {{ data14h.temperature }}°C</p>
        <p>Humidité: {{ data14h.humidity }}%</p>
      </div>
      <div class="hour-data">
        <h2>17h</h2>
        <p>Température: {{ data17h.temperature }}°C</p>
        <p>Humidité: {{ data17h.humidity }}%</p>
      </div>
    </div>
  `,
  styleUrls: ['./specific-hours.component.css']
})
export class SpecificHoursComponent {
  data10h: { temperature: number, humidity: number } = { temperature: 0, humidity: 0 };
  data14h: { temperature: number, humidity: number } = { temperature: 0, humidity: 0 };
  data17h: { temperature: number, humidity: number } = { temperature: 0, humidity: 0 };

  currentData: { temperature: number, humidity: number } = { temperature: 0, humidity: 0 };

  @Input() set data10hInput(data: { temperature: number, humidity: number }) {
    this.data10h = data;
  }

  @Input() set data14hInput(data: { temperature: number, humidity: number }) {
    this.data14h = data;
  }

  @Input() set data17hInput(data: { temperature: number, humidity: number }) {
    this.data17h = data;
  }

  @Input() set currentDataInput(data: { temperature: number, humidity: number }) {
    this.currentData = data;
  }
}
