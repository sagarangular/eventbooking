import { IEvent, User, IAPIResponse } from './../model/model';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DefultService } from '../defult.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  @ViewChild('model') model : ElementRef | undefined;
  eventData$ : Observable<IEvent> = new Observable<IEvent>() ; 
  events$ : Observable<IEvent[]> = new Observable<IEvent[]>() ; 
userobj :any;

  member:any ={
      "Name": "",
      "Age": 0,
      "IdentityCard": "",
      "CardNo": "",
      "ContactNo": ""
  }
  bookingobj :any = {
    "BookingId": 0,
    "UserId": 0,
    "EventId": 0,
    "NoOfTickets": 0,
    "EventBookingMembers": []
  }
  constructor(private activeRoute : ActivatedRoute,private defaultService : DefultService){
    let loggedData = localStorage.getItem('eventUser')
    if(loggedData != null){
      this.userobj =JSON.parse(loggedData)
      this.bookingobj.UserId = this.userobj.userId;
    }
    this.activeRoute.params.subscribe((res:any)=>{
      debugger;
      this.bookingobj.EventId = res.id
      this.eventData$ = this.defaultService.getEventById(res.id);
      this.eventData$.subscribe((res:IEvent)=>{
      this.events$ = this.defaultService.getEventByOganizer(res.organizerId);
      })
    })
  }
  
  openModal(){    
    if(this.model){
      this.model.nativeElement.style.display ="block"
    }
  }
  closeModel(){
    if(this.model){
      this.model.nativeElement.style.display ="none"
    }
  }
  addMember(){
    let newobj = JSON.stringify(this.member);
    let obj = JSON.parse(newobj)
    this.bookingobj.EventBookingMembers.push(obj)
  }
  onBookingEvent(){
    debugger;
    this.bookingobj.NoOfTickets = this.bookingobj.EventBookingMembers.length;
    this.defaultService.book(this.bookingobj).subscribe((res:IAPIResponse)=>{
      if(res.result){
        alert('Booking Done')
        this.closeModel();
      }else{
        alert(res.message);
      }
    })
  }
}
