// import { Search } from '../search';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  searchOption=[];
  // public searchbar: Search[] = [];
  constructor(private http: HttpClient) { }

  serviceCall(){
    return this.http.get('https://public-api.solscan.io/account/EoBNrJmNCG5T8bmrPso3fobhPtRzUDAZabFjg86vyptR');
  }

  getapi(searchValue:any){
    return this.http.get(`https://public-api.solscan.io/account/${searchValue}`);
  }

 
}


