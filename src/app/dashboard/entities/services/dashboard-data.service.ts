import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class DashboardDataService extends DefaultDataService<any> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Dashboard', http, httpUrlGenerator);
  }

  getAll() {
    return this.http
      .get(environment.dashboardApi)
      .pipe(map((res) => res['payload']));
  }
}
