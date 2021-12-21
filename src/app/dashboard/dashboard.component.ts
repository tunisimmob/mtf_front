import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;
import { DataService } from "src/app/services/data.service";
// import * as Chart from 'chart.js'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  appartement: number;
  projet: number;
  video: number;
  message: number;



  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.DataService.countAppartement().subscribe(data => this.appartement = data);
    this.DataService.countProjet().subscribe(data => this.projet = data);
    this.DataService.countVideo().subscribe(data => this.video = data);
    this.DataService.countMessage().subscribe(data => this.message = data);
  }


  public pieChartLabels = ['Disponible', 'Loué', 'Vendu'];
  public pieChartData = [];
  public pieChartType = 'pie';
}
