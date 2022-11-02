import { Injectable } from '@angular/core';
import { SERVICES } from 'src/app/mock-service';
import { Service } from 'src/app/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  service : Service[]=SERVICES;
  constructor() { }
  getServiceById(id : number ) : Service 
   {
    const service = this.service.find(Service => Service.id == id)
    
    if (service == undefined) throw new Error('Service not found')
    return service 
  }
}
