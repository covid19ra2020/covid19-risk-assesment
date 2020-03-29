import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-risk-table',
  templateUrl: './risk-table.component.html',
  styleUrls: ['./risk-table.component.css']
})
export class RiskTableComponent implements OnInit {

  @Input()riskLevel: string;

  currentRiskData: Array<{heading: string, level:string, colour:string, data: string[]}> = [];
  questionAnswered: boolean = false;
  tableToShow:number = 2;
  riskData = [
    {
      heading: 'Actions for people without symptoms consistent with COVID-19',
      riskLevels: [
        {
          level: "high",
          colour: "red",
          data: [
            'Remain under quarantine authority',
            'No public activities',
            'Daily active monitoring',
            'Controlled travel'
          ]
        },
        {
          level: 'medium',
          colour: "orange",
          data: [
            'Stay home',
            'Active monitoring or self-monitoring with public health supervision',
            'Recommened not to travel'
          ]
        },
        {
          level: 'low',
          colour: "green",
          data: [
            'Self observation'
          ]
        },
        {
          level: 'none',
          colour: "white",
          data: [
            'None'
          ]
        }
      ]
    },
    {
      heading: 'Actions for people with symptoms consistent with COVID-19',
      riskLevels: [
        {
          level: 'high',
          colour: "red",
          data: [
            'Immediate isolation',
            'Medical evaluation done by medical professional',
            'Pre-notify healthcare services',
            'Controlled travel'
          ]
        },
        {
          level: 'medium',
          colour: "orange",
          data: [
            'Immediate isolation',
            'Medical evaluation done by medical professional',
            'Pre-notify healthcare services',
            'Controlled travel'
          ]
        },
        {
          level: 'low',
          colour: "green",
          data: [
            'Stay home from work or school',
            'Avoid contact with others',
            'Don\'t travel',
            'Seek health advice'
          ]
        },
        {
          level: 'none',
          colour: "white",
          data: [
            'None',
            'Routine medical care'
          ]
        }
      ]
    }
  ]
  constructor() { 
    debugger;
    
  }

  ngOnInit(): void {
    this.riskData.forEach(element => {
      element.riskLevels.forEach(tempRiskData => {
        if (tempRiskData.level == this.riskLevel) {
          let tempData = {
            heading: element.heading,
            level: tempRiskData.level, 
            colour: tempRiskData.colour,
            data: tempRiskData.data
          }
          this.currentRiskData.push(tempData);
        }
      });
    });
  }

}
