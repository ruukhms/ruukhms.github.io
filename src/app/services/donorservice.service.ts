import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DonorserviceService {
  urlpost="http://localhost:8090/donor/User/add";
  urlget="http://localhost:8090/donor/User/list"


  constructor(protected http: HttpClient) { }

  postUserReg(data : any){
    return this.http.post(this.urlpost,data);
  }
  getAlldonor():Observable<any>{
    return this.http.get(this.urlget);
  }
  
}
