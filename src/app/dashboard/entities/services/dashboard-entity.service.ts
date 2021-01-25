import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class DashboardEntityService extends EntityCollectionServiceBase<any> {
  constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
    super('Dashboard', serviceElementFactory);
  }
}
