import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/trustyx/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
searchtext:any;
  constructor() { }

  ngOnInit(): void {
  }
  onserachtextentered(searchValue: any) {
    this.searchtext = searchValue;
    console.log(this.searchtext);
  }
  
}
