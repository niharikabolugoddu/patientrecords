import{Injectable} from '@angular/core';
import{HttpClient}from '@angular/common/http';
import{Observable, of } from 'rxjs';
import {clinicData} from './clinic-info';
import{HeroService}from './list.service';

@Injectable({
    providedIn:'root',
})
export class JsonService{
    constructor(private backendcall: HttpClient,private newdata:HeroService){
    }
    clinic:String;
    error:boolean = false;

    getclinics(): Observable<{}>{
        if(this.newdata.getClinicData() == null || typeof this.newdata.getClinicData() == "undefined"){
            this.error = true;
        }
        this.newdata.setclinicData(clinicData);
     return  of(clinicData);
    
    }

   

}