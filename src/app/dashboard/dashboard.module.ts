import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';
// import { StoreModule } from '@ngrx/store';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
// import { dashboardReducer } from './reducers/dashboard.reducers';
import { DashboardDataService } from './services/dashboard-data.service';
import { DashboardEntityService } from './services/dashboard-entity.service';

const entityMetaData: EntityMetadataMap = {
  Dashboard: {
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
  },
};

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  providers: [DashboardEntityService, DashboardDataService],
})
export class DashboardModule {
  constructor(
    private entityDefinitionService: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private coursesDataService: DashboardDataService
  ) {
    this.entityDefinitionService.registerMetadataMap(entityMetaData);

    this.entityDataService.registerService(
      'Dashboard',
      this.coursesDataService
    );
  }
}
