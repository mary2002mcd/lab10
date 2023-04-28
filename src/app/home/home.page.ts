import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  long:number = 0;
  lat:number = 0;
  time:number = 0;

  constructor() {}

  async getGPS(){
    const coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:', coordinates);

    this.long = coordinates.coords.longitude;
    this.lat = coordinates.coords.latitude;
   
  }
  
}
