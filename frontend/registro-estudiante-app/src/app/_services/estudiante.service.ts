import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { Estudiante } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class EstudianteService {
  private userSubject: BehaviorSubject<Estudiante>;
  public Estudiante: Observable<Estudiante>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<Estudiante>(
      JSON.parse(localStorage.getItem('Estudiante'))
    );
    this.Estudiante = this.userSubject.asObservable();
  }

  public get userValue(): Estudiante {
    return this.userSubject.value;
  }

  register(Estudiante: Estudiante) {
    return this.http.post(`${environment.apiUrl}/estudiante`, Estudiante);
  }

}