export interface IAPIResponse{
    message : string;
    result : boolean;
    data : any;
}
export interface IEvent {
    eventId: number;
    eventName: string;
    startDate: string;
    startTime: string;
    endDate: string;
    organizerName: string;
    userId: number;
    price: number;
    organizerId :number;
    location: string;
    imageUrl: string;
  }
  export class User {
    UserId: number;
    Name: string;
    Email: string;
    Password: string;
    ContactNo: string;
    Role: string;
    constructor(){
        this.Name = '';
        this.Email = '';
        this.Password = '';
        this.ContactNo = '';
        this.UserId = 0;
        this.Role = 'Customer';
    }
  }
  