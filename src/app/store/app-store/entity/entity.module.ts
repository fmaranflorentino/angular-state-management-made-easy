import { NgModule } from '@angular/core';
import { EntityDataModule, EntityServices, EntityDataService, DefaultDataServiceConfig } from '@ngrx/data'
import { entityMetadata } from './entity-metadata';
import { AppEntityServices } from './app-entity-services';
import { DashboardDataService } from 'src/app/dashboard/entities/services/dashboard-data.service';
import { DashboardEntityService } from 'src/app/dashboard/entities/services/dashboard-entity.service';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000/',
  entityHttpResourceUrls: {
    Dashboard: {
      entityResourceUrl: 'api/dashboard',
      collectionResourceUrl: 'api/dashboard'
    }
  },

  timeout: 3000,
};

@NgModule({
  declarations: [],
  imports: [
    EntityDataModule.forRoot({
      entityMetadata: entityMetadata,
    })
  ],
  providers: [
    AppEntityServices,
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    { provide: EntityServices, useExisting: AppEntityServices },
    DashboardDataService,
    DashboardEntityService,
  ]
})
export class EntityModule {
  constructor(
    entityDataService: EntityDataService,
    dashboardDataService: DashboardDataService,
  ) {
    entityDataService.registerService('Dashboard', dashboardDataService);
  }
}
