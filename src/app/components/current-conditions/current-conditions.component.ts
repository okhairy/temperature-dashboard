import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-current-conditions',
  template: `
    <div class="current-conditions">
      <div class="temperature">
        <h2>Température</h2>
        <span>{{ temperature }}°C</span>
      </div>
      <div class="humidity">
        <h2>Humidité</h2>
        <span>{{ humidity }}%</span>
      </div>
      <div class="daily-average">
        <h2>Moyenne quotidienne</h2>
        <span>{{ dailyAverage }}°C</span>
      </div>
    </div>
  `,
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {
  @Input() temperature!: number;
  @Input() humidity!: number;
  @Input() dailyAverage!: number;
}
