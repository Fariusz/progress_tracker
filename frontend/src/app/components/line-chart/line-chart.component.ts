import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivityDto} from "../../models/ActivityDto";
import {BehaviorSubject, Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {ContentDto} from "../../models/ContentDto";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input() data: ActivityDto;
  dataSet = [];

  ngOnInit(): void {
    this.data.content.forEach(data => {
      this.dataSet.push(data.content);
    });

    this.chartDatasets[0].label = this.data.activityName;
    this.chartDatasets[0].data = this.dataSet;

    this.data.content.forEach(data => {
      this.chartLabels.push(data.created);
    });
  }

  public chartDatasets: Array<any> = [{data: [], label: 'Entries'}];

  public chartType: string = 'line';

  public chartLabels: Array<any> = [];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }


}
