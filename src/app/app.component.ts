import { User, IAPIResponse } from './model/model';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { DefultService } from './defult.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventMgt';

@ViewChild('model') model : ElementRef | undefined;
isLoginForm :boolean = false;
userobj :User = new User();

loginobj:any ={
  "Password":"",
  "ContactNo":""
}

constructor(private defultServise:DefultService) {
  let loggedData = localStorage.getItem('eventUser')
  if(loggedData != null){
    this.userobj =JSON.parse(loggedData)
  }
 }
  openPopUp(){    
    if(this.model){
      this.model.nativeElement.style.display ="block"
    }
  }
  closePopUp(){
    if(this.model){
      this.model.nativeElement.style.display ="none"
    }
  }
  onRegister(){
    this.defultServise.getregisterUser(this.userobj).subscribe((res:IAPIResponse)=>{
      if(res.result){
        alert('Register Done')
        this.closePopUp();
      }else{
        alert(res.message);
      }
    })
  }
  onLogin(){
    this.defultServise.getLoginUser(this.loginobj).subscribe((res:IAPIResponse)=>{
      if(res.result){
        alert('login Done')
        localStorage.setItem('eventUser', JSON.stringify(res.data))
        this.userobj = res.data;
        this.closePopUp();
      }else{
        alert(res.message);
      }
    })
  }
  logOff(){
    localStorage.removeItem('eventUser');
    this.userobj = new User()
  }
}
