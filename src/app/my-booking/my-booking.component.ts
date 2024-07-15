import { IAPIResponse } from './../model/model';
import { Component,OnInit} from '@angular/core';
import { DefultService } from '../defult.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {
  constructor(private defaultService : DefultService){}
  userobj :any;
  bookingList :any []=[];
  ngOnInit(){
    let loggedData = localStorage.getItem('eventUser')
    if(loggedData != null){
      this.userobj =JSON.parse(loggedData)
      this.getBookingsById();
    }
  }

getBookingsById(){
this.defaultService.getBookingsByCustomer(this.userobj.userId).subscribe((res:IAPIResponse)=>{
this.bookingList = res.data
})
}

}
