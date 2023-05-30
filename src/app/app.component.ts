import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-first-project';
  users:any;
  constructor(private _service:ServiceService){

  }
  ngOnInit(): void {
   //this.getAllUsers();
  }
  getAllUsers():any{
    this._service.getUsers().subscribe((res:any)=>{
    this.users=res;
    console.log(this.users)
    });
  }
  getusers(data:any){
    console.log(data)
    this._service.getnewUser(data).subscribe((res:any)=>{
    console.log(res)
    });
   
  }
}
