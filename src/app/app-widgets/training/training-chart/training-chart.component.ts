import {Component, Inject, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-training-chart',
  templateUrl: './training-chart.component.html',
  styleUrls: ['./training-chart.component.css']
})
export class TrainingChartComponent implements OnInit {

  public option: any;

  constructor(
    @Inject(MAT_DIALOG_DATA)data: any,
    private dialogRef: MatDialogRef<TrainingChartComponent>,
  ) { }

  ngOnInit() {

  this.option = new Chart( {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Training Achievement, 2018'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Total percentage of completion'
      }

    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%'
        }
      }
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
      {
        name: "Trainings",
        colorByPoint: true,
        data: [
          {
            name: "D1",
            y: 20,


          },
          {
            name: "D2",
            y: 30,


          },
          {
            name: "D3",
            y: 25,


          },
          {
            name: "D4",
            y: 10,


          },
        ]
      }
    ],
    });

  }

}
