import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ServicioComponent } from './servicio/servicio.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'contacto', component: ContactoComponent},
{path: 'partners', component: PartnersComponent},
{path: 'portafolio', component: PortafolioComponent},
{path: 'servicio', component: ServicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
