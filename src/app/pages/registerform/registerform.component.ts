import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/class/user';
import { DonorserviceService } from 'src/app/services/donorservice.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  registerform!: FormGroup;
  Donor!: any;
  donorss: User[] = [];
  
  constructor( private formBuilder : FormBuilder, private reguser : DonorserviceService) { }

  ngOnInit(): void {

    this.registerform= this.formBuilder.group({
      userid:[''],
      fullname:['', Validators.required,Validators.minLength(2),Validators.maxLength(25)],
      email:['', Validators.required, Validators.email],
      company:['', Validators.required],
      phone:['', Validators.required],
      typeofdonation:['', Validators.required],
      placedonation:['', Validators.required,],
      
      });
}
regUser(){

  console.log(this.registerform.value)
  this.registerform.valid
  this.reguser.postUserReg(this.registerform.value)
  .subscribe({
    next:(res)=>{
      alert('Registation donor   Succefully');
      
    },
    error:()=>{
      alert('Error occur ')
    }
  })
}



}

