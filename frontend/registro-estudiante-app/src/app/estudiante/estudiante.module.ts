import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { LayoutComponent } from './layout.component';
import { EstudianteComponent } from './estudiante.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, EstudianteRoutingModule],
  declarations: [LayoutComponent, EstudianteComponent],
})
export class EstudianteModule {}
