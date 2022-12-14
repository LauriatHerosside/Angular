import { Component, OnInit } from '@angular/core';
import { SERVICES } from 'src/app/mock-service';
import { Service } from 'src/app/service';


@Component({
  selector: 'app-liste-service',
  templateUrl: './liste-service.component.html',
  styles: [
  ]
})
export class ListeServiceComponent implements OnInit {

  // pour utilser les élements de la classe service
  //Forcer le typage
  service : Service[]=SERVICES;
  
  serviceSelected : Service| undefined;
  //la methode associe à l'interface OnInit 
  ngOnInit ():void{console.table(this.service)
    }
  
  //creation de la méthode selectService
  //Faire passer le directement la classe service
  selectService(serviceId : string){
    //Une logique de js permetant de recupérer l'index 
    //event/target recupère les élements rentrer dans le DOM 
    //+ Nous permet de changer le type 
    const id =+ serviceId
    const service:Service | undefined = this.service.find(service => service.id == +serviceId) 
    //Service devient un objet qui à plusieurs propriéte
    //pour faire une précision en ts il faut faire service.nomDeLaPropriéte
    if ( service)
    {
      console.log(`Vous avez choisit le service ${service.name}`)
      this.serviceSelected = service
    } else { console.log("Ce service n'existe pas !!");
     this.serviceSelected = service;
    }
  }
}
