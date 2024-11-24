import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; // Importer le module MatCard
import { SpecificHoursComponent } from '/home/oumoul-khairy/Documents/arduino-api (1)/temperature-dashboard/src/app/components/specific-hours/specific-hours.component';

@NgModule({
  declarations: [
    SpecificHoursComponent
  ],
  imports: [
    CommonModule,
    MatCardModule // Ajouter MatCardModule ici
  ],
  exports: [
    SpecificHoursComponent
  ]
})
export class SpecificHoursModule { }
