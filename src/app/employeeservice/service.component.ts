import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { Rating } from '../rating';
import { Exp } from '../model/exp';
import { Ctc } from '../model/ctc';
import { History } from '../model/history';
import { Joining } from '../model/joining';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
@Injectable({
  providedIn:'root'
})

export class ServiceComponent {


getEmpUrl : string;
getratingUrl: string;
getExpUrl: string;
getCtcUrl: string;
gethisUrl: string;
getjoiUrl:string;

  constructor(private http : HttpClient) {

    
    this.getEmpUrl= 'http://localhost:3300/users';
   // this.getEmpUrl='https://run.mocky.io/v3/14203662-7782-4ba2-9eee-c56c9444aa7a'
    this.getratingUrl='http://localhost:3300/rating';
    this.getExpUrl='http://localhost:3300/exp';
   this.getCtcUrl='http://localhost:3300/ctc';
   this.gethisUrl='http://localhost:3300/history';
   this.getjoiUrl='http://localhost:3300/joining';
   }

   

   getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.getEmpUrl);
   }

   getAllRatings():Observable<Rating[]>{
    return this.http.get<Rating[]>(this.getratingUrl);
   }

   getAllExp():Observable<Exp[]>{
    return this.http.get<Exp[]>(this.getExpUrl);
   }

   getAllCtc():Observable<Ctc[]>{
    return this.http.get<Ctc[]>(this.getCtcUrl);
   }

   getAllHistory():Observable<History[]>{
    return this.http.get<History[]>(this.gethisUrl);
   }

   getAllJoining():Observable<Joining[]>{
    return this.http.get<Joining[]>(this.getjoiUrl);
   }
}


