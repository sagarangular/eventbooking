import { IEvent } from './../model/model';
import { DefultService } from './../defult.service';
import { Component } from '@angular/core';
import { IAPIResponse } from '../model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  eventList :IEvent [] =[]

  constructor(private eventAll :DefultService){}
  
  ngOnInit(){
this.getAllEvent();
  }

  getAllEvent(){
    this.eventAll.getAllEventList().subscribe((res:IAPIResponse)=>{
      this.eventList = res.data;    
    })
  }



}
