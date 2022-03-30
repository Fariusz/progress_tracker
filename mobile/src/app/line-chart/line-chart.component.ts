import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ChartsModule} from "angular-bootstrap-md";
import {formatDate} from "@angular/common";
import { ContentDto } from '../models/ContentDto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, OnChanges {

  @Input() data: ContentDto[];
  @Input() activityName: string;
  
  public chartDatasets: Array<any> = [{data: []}];
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
  @ViewChild('baseChart') private chart: ChartsModule;
  private dataSetContent = [];
  private dataSetLabel = [];

  ngOnInit(): void {
    this.setDataToChart();
  }

  setDataToChart() {
    this.dataSetContent = [];
    this.data.forEach(data => {
      this.dataSetContent.push(data.content);
    });

    this.dataSetLabel = [];
    this.data.forEach(data => {
      this.dataSetLabel.push(formatDate(new Date(data.created), 'dd-MM-yyyy', 'en-US'));
    });

    this.chartDatasets[0].label = 'Progress';
    this.chartDatasets[0].data = this.dataSetContent;
    this.chartLabels = this.dataSetLabel;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.reloadChart();
    }
  }

  reloadChart() {
    if (this.chart !== undefined) {
      this.setDataToChart();
    }
  }

  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }
}