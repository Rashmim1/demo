import { Component, EventEmitter, OnInit, Output } from '@angular/core';




@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  
  

  constructor() { }

  ngOnInit(): void {
  }
  
  searchvalue:string="";

  @Output() searchtextchanged : EventEmitter<any> =new EventEmitter<any>();

  onsearchtextchanged(){
    this.searchtextchanged.emit(this.searchvalue);
  }
}

