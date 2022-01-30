import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ActivityDto} from "../../models/ActivityDto";
import {ContentDto} from "../../models/ContentDto";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, OnChanges {

  @Input() data: ContentDto[];
  dataSet = [];

  ngOnInit(): void {
    this.data.forEach(data => {
      this.dataSet.push(data.content);
    });

/*
    this.chartDatasets[0].label = this.data.activityName;
*/
    this.chartDatasets[0].data = this.dataSet;

    this.data.forEach(data => {
      this.chartLabels.push(data.created);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.data){
      console.log("Nastąpiła zmiana!");
    }
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
