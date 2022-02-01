import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ContentDto} from "../../models/ContentDto";
import {BaseChartDirective, ChartsModule} from "angular-bootstrap-md";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, OnChanges {
  @ViewChild('baseChart') private chart: ChartsModule;

  @Input() data: ContentDto[];

  dataSetContent = [];
  dataSetLabel = [];

  ngOnInit() : void {
    this.setDataToChart();
  }

  setDataToChart(){
    this.dataSetContent = [];
    this.data.forEach(data => {
      this.dataSetContent.push(data.content);
    });

    this.dataSetLabel = [];
    this.data.forEach(data => {
      this.dataSetLabel.push(data.created);
    });

    this.chartDatasets[0].label = "TEST";
    this.chartDatasets[0].data = this.dataSetContent;
    this.chartLabels = this.dataSetLabel;
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.data){
      this.reloadChart();
    }
  }

  reloadChart() {
    if (this.chart !== undefined) {
      this.setDataToChart();
    }
  }

  public chartDatasets: Array<any> = [{data: [], label: 'Wykres'}];

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
