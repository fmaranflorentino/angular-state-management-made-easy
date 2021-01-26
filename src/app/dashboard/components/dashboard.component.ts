import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DashboardEntityService } from '../entities/services/dashboard-entity.service';
import { AppEntityServices } from 'src/app/store/app-store/entity/app-entity-services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  dashboardService: DashboardEntityService;
  constructor(appEntityServices: AppEntityServices) {
    this.dashboardService = appEntityServices.dashboardEntityService
  }


  ngOnInit(): void {
    this.dashboardService.getAll();
  }

  ngAfterViewInit() {
    this.dashboardService.entities$.subscribe(r => console.log('state', r));
  }

}
