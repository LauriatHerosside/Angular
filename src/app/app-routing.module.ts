import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailServiceComponent } from './core/components/detail-service/detail-service.component';
import { ListeServiceComponent } from './core/components/liste-service/liste-service.component';

const routes: Routes = [

      {path:'' , redirectTo: 'liste-service',pathMatch :'full'},
      { path : 'liste-service' , component :ListeServiceComponent},
      { path : 'detail-service/:id' , component :DetailServiceComponent},
      
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
