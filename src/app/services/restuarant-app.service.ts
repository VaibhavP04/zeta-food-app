import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestuarantAppService {

  constructor(private http: HttpClient) { }

  getCategoryAndRecipeList(): Observable<any> {
    return this.http.get('http://temp.dash.zeta.in/food.php');
  }

}
