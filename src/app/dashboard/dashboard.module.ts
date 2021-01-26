import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { DashboardComponent } from './components/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { entityMetaData, entityName } from './entities/config/entity.config';
import { DashboardDataService } from './entities/services/dashboard-data.service';
import { DashboardEntityService } from './entities/services/dashboard-entity.service';
import { moduleWithConfig } from './module.config';

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

  static config(config: any): ModuleWithProviders<DashboardModule> {
    return {
      ngModule: DashboardModule,
      providers: moduleWithConfig(config),
    }
  }
}
