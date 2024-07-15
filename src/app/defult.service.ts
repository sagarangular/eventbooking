import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IAPIResponse, IEvent, User } from './model/model';
import {map}from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DefultService {

  constructor(private http : HttpClient) { }

   APT_url ="https://freeapi.miniprojectideas.com/api/EventBooking/"

  getAllEventList(){
   return this.http.get<IAPIResponse>( `${this.APT_url}GetAllEvents`)
  }
  getEventById(eventId:number){
    return this.http.get<IEvent>(`${this.APT_url}GetEventById?id=${eventId}`).pipe(
      map((item:any)=>{
        return item.data
    }))
  }
  getEventByOganizer(eventId:number){
    return this.http.get<IEvent>(`${this.APT_url}GetEventsByOrganizer?organizerId=${eventId}`).pipe(
      map((item:any)=>{
        return item.data
    }))
  }
  getregisterUser(obj:User){
   return this.http.post<IAPIResponse>( `${this.APT_url}CreateUser`,obj)
  }
  getLoginUser(obj:any){
   return this.http.post<IAPIResponse>( `${this.APT_url}login`,obj)
  }
  book(obj:any){
   return this.http.post<IAPIResponse>( `${this.APT_url}bookevent`,obj)
  }
  getBookingsByCustomer(id:number){
    return this.http.get<IAPIResponse>( `${this.APT_url}GetBookingsByCustomer?customerId=${id}`)
   }
}
