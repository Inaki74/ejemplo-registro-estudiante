import { Component } from '@angular/core';

import { EstudianteService } from './_services';
import { Estudiante } from './_models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  Estudiante: Estudiante;

  constructor(
    private estudianteService: EstudianteService,
    private http: HttpClient
  ) {
    this.estudianteService.Estudiante.subscribe((x) => (this.Estudiante = x));
  }

  ngOnInit() {
    this.getCandy();
  }
  getCandy() {
    this.http.get('http://localhost:5000/api/estudiante').subscribe((data) => {
      console.log(data);
    });
  }
}
