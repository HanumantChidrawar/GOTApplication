import { Injectable } from '@angular/core';

//Importing the required files for http services.

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class GotService {

  private baseUrl:string[]=["https://www.anapioficeandfire.com/api/houses?page=","https://www.anapioficeandfire.com/api/books?page=","https://www.anapioficeandfire.com/api/characters?page="];
  private singleUrl:string[]=["https://www.anapioficeandfire.com/api/houses/","https://www.anapioficeandfire.com/api/books/","https://www.anapioficeandfire.com/api/characters/"];
  constructor(public _http:HttpClient) { }

  public myGet(url,pageNo):any{
    let data=this._http.get(this.baseUrl[url]+ pageNo+"&pageSize=50");
    return data;
  }

  public getSingle(url,id):any{
    let data= this._http.get(this.singleUrl[url] + id);
    return data;
  }

}
