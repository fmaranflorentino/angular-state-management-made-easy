import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { DashboardComponent } from './components/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { entityMetaData, entityName } from './entities/config/entity.config';
import { DashboardDataService } from './entities/services/dashboard-data.service';
import { DashboardEntityService } from './entities/services/dashboard-entity.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule],
  providers: [DashboardEntityService, DashboardDataService],
})
export class DashboardModule {
  constructor(
    private entityDefinitionService: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private dashboardDataService: DashboardDataService
  ) {
    this.entityDefinitionService.registerMetadataMap(entityMetaData);

    this.entityDataService.registerService(
      entityName,
      this.dashboardDataService
    );
  }
}
