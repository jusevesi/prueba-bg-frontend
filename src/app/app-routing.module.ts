import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioPersonaComponent } from './components/formulario-persona/formulario-persona.component';
import { TablaPersonaComponent } from './components/tabla-persona/tabla-persona.component';

const routes: Routes = [
  {path:"agregarPersona",component:FormularioPersonaComponent},
  {path:"listarPersonas",component:TablaPersonaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }