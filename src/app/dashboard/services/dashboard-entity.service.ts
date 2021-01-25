import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
// import { Course } from "../model/course";

@Injectable()
export class DashboardEntityService extends EntityCollectionServiceBase<any> {
  constructor(
    serviceElementFactory: EntityCollectionServiceElementsFactory
  ) {
    super('Dashboard', serviceElementFactory)
  }
}
