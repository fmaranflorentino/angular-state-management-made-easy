import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DashboardEntityService } from '../entities/services/dashboard-entity.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private dashboardService: DashboardEntityService) {}


  ngOnInit(): void {
    this.dashboardService.getAll();
  }

  ngAfterViewInit() {
    this.dashboardService.entities$.subscribe(r => console.log('state', r));
  }

}
