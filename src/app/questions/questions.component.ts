import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  @Input() currentQuestion: number = 0;

  stillLooking:boolean = true;
  
  
  questions = [
    {
      "questionNumber": 0,
      "question": "Did you travel from any COVID-19 affected area?",
      "yesRoute": 9,
      "noRoute": 3
    },
    {
      "questionNumber": 1,
      "question": "Did you travel from Hubei, China specifically?",
      "yesRoute": 9,
      "noRoute": 2
    },
    {
      "questionNumber": 2,
      "question": `Did you have contact with a person with confirmed COVID-19 in the context of living with, being an intimate partner of, or caring for the person, outside a healthcare facility?`,
      "yesRoute": 6,
      "noRoute": 10
    },
    {
      "questionNumber": 3,
      "question": "Did you have any contact with a laboratory-confirmed case of COVID-19 or a case diagnosed clinically with COVID-19 infection who did not have laboratory testing?",
      "yesRoute": 4,
      "noRoute": 12
    },
    {
      "questionNumber": 4,
      "question": "Are you a healthcare worker in a healthcare setting?",
      "yesRoute": 13,
      "noRoute": 5
    },
    {
      "questionNumber": 5,
      "question": `Was contact within the context of living with, being
      an intimate partner of, or caring for a person with
      confirmed COVID-19 outside a healthcare facility?`,
      "yesRoute": 6,
      "noRoute": 7
    },
    {
      "questionNumber": 6,
      "question": "Were all recommended precautions for home care and isolation followed consistently?",
      "yesRoute": 10,
      "noRoute": 9
    },
    {
      "questionNumber": 7,
      "question": "Did you contact respiratory secretions or were you withing 6 feet (1.82 meters) of a case for a prolonged period?",
      "yesRoute": 10,
      "noRoute": 8
    },
    {
      "questionNumber": 8,
      "question": `Was the person in the same indoor
      environment as a case for a prolonged
      period but did not meet the definition of
      close contact (e.g., in the same classroom
      or same hospital waiting room)?`,
      "yesRoute": 11,
      "noRoute": 12
    },
    {
      "questionNumber": 9,
      "question": "high",
      "yesRoute": 13,
      "noRoute": 14
    },
    {
      "questionNumber": 10,
      "question": "medium",
      "yesRoute": 13,
      "noRoute": 14
    },
    {
      "questionNumber": 11,
      "question": "low",
      "yesRoute": 13,
      "noRoute": 14
    },
    {
      "questionNumber": 12,
      "question": "none",
      "yesRoute": 13,
      "noRoute": 14
    },
    {
      "questionNumber": 13,
      "question": `Refer to Guidance for Risk Assessment
      and Public Health Management of Persons
      with Potential COVID-19 Exposure**
      `,
      "yesRoute": 13,
      "noRoute": 14
    }
  ];

  questionIdentifier = ['high', 'medium', 'low', 'none']

  ngOnInit(): void {
  }

}
