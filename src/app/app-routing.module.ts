import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path:'' , redirectTo :'/inicio' , pathMatch:'full'},
  { path:'inicio' , component:InicioComponent},
  { path:'add' , component: AgregarComponent},
  { path:'edit', component: ModificarComponent},
  { path:'main', component: MainComponent} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
