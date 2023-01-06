import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms'
import { ServiceComponent } from '../employeeservice/service.component';
import { Employee } from '../model/employee';
import { Exp } from '../model/exp';
import {Rating} from '../rating';
import { Ctc } from '../model/ctc';
import { History } from '../model/history';
import { Joining } from '../model/joining';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  empDetail !:FormGroup;
  empObj : Employee = new Employee();
  empList : Employee[] = [];

  ratDetail !: FormGroup;
  ratObj: Rating = new Rating();
  RatingList: Rating[]=[];

  expDetail !:FormGroup;
  expObj: Exp = new Exp();
  expList:Exp[]=[];

  ctcDetail !: FormGroup;
  ctcObj: Ctc= new Ctc();
  ctcList: Ctc[]=[];

hisDetail !: FormGroup;
hisObj: History = new History();
hisList: History[] = [];

joiDetail !:FormGroup;
joiObj: Joining = new Joining();
joiList: Joining[]=[];
  

  constructor(private formBuilder : FormBuilder, private empService : ServiceComponent) {}

  ngOnInit(): void{

    this.getAllEmployee();
    
    this.empDetail = this.formBuilder.group({
    
      name: [''],
      contact:[''],
      email: [''],
      currentcompany: [''],
      location: [''],
      skill: [''],
      tower: [''],
      currentstatus: ['']
    });

    this.getAllRatings() 
    this.ratDetail = this.formBuilder.group({
    
      name: [''],
     rating:['']
     
    });

     this.getAllExp()
    this.expDetail =  this.formBuilder.group({
    
      totalexp: [''],
      relevantexp:[''],
      level: [''],
      prograde:[''],
      band:['']
    });

this.getAllCtc()
    this.ctcDetail =  this.formBuilder.group({
    
      current: [''],
      expected:[''],
      proctc: [''],
      words:[''],
      avg:[''],
      hike:[''],
      thresold:['']
    });

    this.getAllHistory()
    this.hisDetail =  this.formBuilder.group({
    
      offeredctc: [''],
      holdingoff:[''],
      createdBy: [''],
      date:['']
      
    });

    this.getAllJoining()
    this.joiDetail =  this.formBuilder.group({
    
      doj: [''],
      month:[''],
      period: [''],
      
      
    });
  }

  
  
  


  // addEmployee() {
  //   console.log(this.empDetail);
  //   this.empObj.id = this.empDetail.value.id;
  //   this.empObj.name = this.empDetail.value.name;
  //   this.empObj.contact = this.empDetail.value.contact;
  //   this.empObj.email = this.empDetail.value.email;
  //   this.empObj.currentcompany = this.empDetail.value.currentcompany;
  //   this.empObj.location = this.empDetail.value.location;
  //   this.empObj.skill = this.empDetail.value.skill;
  //   this.empObj.tower = this.empDetail.value.tower;

  //   this.empService.addEmployee(this.empObj).subscribe(res=>{
  //     console.log(res);
  //     this.getAllEmployee();
  //   }, err=>{
  //     console.log(err);
  //   });
    
  // }

  getAllEmployee() {
    this.empService.getAllEmployee().subscribe(res=>{
      this.empList = res;

    },err=>{
      console.log("error while fetching data.")
    } )
  }

  getAllRatings() {
    this.empService.getAllRatings().subscribe(res=>{
      this.RatingList = res;

    },err=>{
      console.log("error while fetching data.")
    } )
  }


  getAllExp() {
    this.empService.getAllExp().subscribe(res=>{
      this.expList = res;

    },err=>{
      console.log("error while fetching data.")
    } )
  }
  

  getAllCtc() {
    this.empService.getAllCtc().subscribe(res=>{
      this.ctcList = res;

    },err=>{
      console.log("error while fetching data.")
    } )
  }

  getAllHistory() {
    this.empService.getAllHistory().subscribe(res=>{
      this.hisList = res;

    },err=>{
      console.log("error while fetching data.")
    } )
  }

  getAllJoining() {
    this.empService.getAllJoining().subscribe(res=>{
      this.joiList = res;

    },err=>{
      console.log("error while fetching data.")
    } )
  }
}
