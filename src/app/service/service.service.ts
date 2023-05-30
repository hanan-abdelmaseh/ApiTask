import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http:HttpClient) {

   }
   getUsers():any{
    return this._http.get('http://localhost:3000/users');
   }
   getnewUser(data:any){
    return this._http.post('http://localhost:3000/users',data);
   }
}
