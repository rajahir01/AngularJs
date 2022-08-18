import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','Reactjs','NextJs']
  topichasError=true;

  constructor(private _enrolmentService: EnrollmentService){}

  userModel = new User('','will@test.com',666666222,'','morning',true);
validateTopic(value: string){
  if(value=='default'){
    this.topichasError=true;
  }else{
    this.topichasError=false;
  }
}

onSubmit(){
  this._enrolmentService.enroll(this.userModel).subscribe(
    data => console.log('Success', data)
    
    
    
  )
}
}


