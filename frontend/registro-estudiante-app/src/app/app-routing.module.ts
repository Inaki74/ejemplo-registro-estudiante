import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const estudianteModule = () =>
  import('./estudiante/estudiante.module').then((x) => x.EstudianteModule);

  const routes: Routes = [
    { path: '', loadChildren: estudianteModule },
  
    // otherwise redirect to home
    { path: '**', redirectTo: '' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }