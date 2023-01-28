import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {data} from './app.module'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Capsules-5A';
  data: data [] = [];
  objeto: any = {
    address: String,
    city: String,
    state: String,
    website: String,
    flickr: String,
    twitter: String,
    elon_twitter: String,
  };

  constructor(private http:HttpClient){
  }
  ngOnInit(){
    this.http.get('https://api.spacexdata.com/v4/capsules').subscribe((data:any)=>{this.data=data;});
    this.http.get('https://api.spacexdata.com/v4/company').subscribe((objeto:any)=>{this.objeto=objeto});
  }
}
