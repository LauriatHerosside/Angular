import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-detail-service',
  templateUrl: './detail-service.component.html',
  styles: [
  ]
})
export class DetailServiceComponent implements OnInit {
   public id : number ;
   service1 : Service;
  
  constructor( private route: ActivatedRoute , private service : ServicesService) { 
  }
  ngOnInit(): void {
    const param = this.route.snapshot.params 
    this.id = +param["id"]
   
  this.service1 = this.service.getServiceById(this.id)
  }

}
