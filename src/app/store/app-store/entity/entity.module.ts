import { NgModule } from '@angular/core';
import {
  DefaultDataServiceConfig,
  EntityDataModule,
  EntityDataService,
  EntityServices,
} from '@ngrx/data';
import { DashboardDataService } from 'src/app/dashboard/entities/services/dashboard-data.service';
import { DashboardEntityService } from 'src/app/dashboard/entities/services/dashboard-entity.service';
import { AppEntityServices } from './app-entity-services';
import { entityMetadata } from './entity-metadata';

@NgModule({
  declarations: [],
  imports: [
    EntityDataModule.forRoot({
      entityMetadata: entityMetadata,
    }),
  ],
  providers: [
    AppEntityServices,
    { provide: EntityServices, useExisting: AppEntityServices },
    DashboardDataService,
    DashboardEntityService,
  ],
})
export class EntityModule {
  constructor(
    entityDataService: EntityDataService,
    dashboardDataService: DashboardDataService
  ) {
    entityDataService.registerService('Dashboard', dashboardDataService);
  }
}
