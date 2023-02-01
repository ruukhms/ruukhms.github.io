import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/class/user';
import { DonorserviceService } from 'src/app/services/donorservice.service';

@Component({
  selector: 'app-listofregister',
  templateUrl: './listofregister.component.html',
  styleUrls: ['./listofregister.component.css']
})
export class ListofregisterComponent implements OnInit {
  Donor!: any;
  donorss: User[] = [];
  constructor( private reguser : DonorserviceService) { }

  ngOnInit(): void {

      this.reguser.getAlldonor().subscribe ((Response)=>{
        this.donorss=Response;
        console.log(this.donorss);
      });
    }





}
