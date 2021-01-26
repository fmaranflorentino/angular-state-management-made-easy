import { Injectable } from '@angular/core';
import { EntityServicesBase, EntityServicesElements } from '@ngrx/data';
import { DashboardEntityService } from './../../../dashboard/entities/services/dashboard-entity.service';

@Injectable()
export class AppEntityServices extends EntityServicesBase {
  constructor(
    entityServicesElements: EntityServicesElements,
    public readonly dashboardEntityService: DashboardEntityService
  ) {
    super(entityServicesElements);
    this.registerEntityCollectionServices([dashboardEntityService]);
  }
}
