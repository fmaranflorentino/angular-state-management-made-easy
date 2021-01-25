import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Observable } from "rxjs";

@Injectable()
export class DashboardDataService extends DefaultDataService<any> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Dashboard', http, httpUrlGenerator);
  }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:3000/api/products/home/banner');
  }
}
