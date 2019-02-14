import { Component,OnInit } from '@angular/core';
import{JsonService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private clinicservice:JsonService){
  }
  names:string[]=['radhik','sreee','sresht'];
  childname:string;
  title = 'patientrecords';
  clincinfo:{};
  error:boolean=false;

  ngOnInit(){
    this.clinicservice.getclinics().subscribe(
      clinicData => {
        this.clincinfo = clinicData ;
        clinicData =null;
        if(clinicData == null){
          this.error = true;
        }
      }
    );
  }
  
  receiveEvent(message){
    this.childname = message;
  }

}
