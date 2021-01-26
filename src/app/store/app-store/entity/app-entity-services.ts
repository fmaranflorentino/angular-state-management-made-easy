import { Injectable } from '@angular/core';
import { EntityServicesElements, EntityServicesBase } from '@ngrx/data';

import { DashboardEntityService } from './../../../dashboard/entities/services/dashboard-entity.service';

@Injectable()
export class AppEntityServices extends EntityServicesBase {
  constructor(
    entityServicesElements: EntityServicesElements,
    // Inject custom services, register them with the EntityServices, and expose in API.
    public readonly dashboardEntityService: DashboardEntityService,
  ) {
    super(entityServicesElements);
    this.registerEntityCollectionServices([dashboardEntityService]);
  }

  // ... Additional convenience members
}
