import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { 
      console.log("creted dsjg !!4")
 }
private clinicInfo:{};

 getClinicData():{}{
return this.clinicInfo;
 }
 setclinicData(clinicsddd:{}){

this.clinicInfo=clinicsddd;

 }
}
