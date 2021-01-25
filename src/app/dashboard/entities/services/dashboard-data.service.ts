import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { entityName, entityRoot } from '../config/entity.config';

@Injectable()
export class DashboardDataService extends DefaultDataService<any> {
  requestUrl;

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super(entityName, http, httpUrlGenerator);

    this.requestUrl = httpUrlGenerator.entityResource(entityName, entityRoot);
  }

  getAll(): Observable<any> {
    return this.http.get(this.requestUrl);
  }
}
