import {Injectable} from "@angular/core";
import {Http,Response} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()


export class SpotfiyService{
  private searchUrl:string;

  constructor(private _http :Http){

  }

  GetData(str:any,type="artist"){
  	this.searchUrl="https://api.spotify.com/v1/search?q="+ str +"&type="+ type +"&offset=0&limit=20&market=US";
    return this._http.get(this.searchUrl).
     map((res:Response)=>res.json());

  }


}