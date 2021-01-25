

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";


@Injectable()
export class DashboardHttpService {

    constructor(private http:HttpClient) {

    }

    findAllanys(): Observable<any[]> {
        return this.http.get('/api/courses')
            .pipe(
                map(res => res['payload'])
            );
    }

    findCourseByUrl(courseUrl: string): Observable<any> {
      return this.http.get<any>(`/api/courses/${courseUrl}`);
    }




    saveCourse(courseId: string | number, changes: Partial<any>) {
        return this.http.put('/api/course/' + courseId, changes);
    }


}
