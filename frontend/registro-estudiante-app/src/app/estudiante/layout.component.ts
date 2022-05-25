import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EstudianteService } from '@app/_services';

@Component({ templateUrl: 'layout.component.html' })
export class LayoutComponent {
    constructor(
        private router: Router,
        private estudianteService: EstudianteService
    ) {
        // redirect to home if already logged in
        if (this.estudianteService.userValue) {
            this.router.navigate(['/']);
        }
    }
}