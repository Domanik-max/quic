import { Component, OnInit } from '@angular/core';
import {IUniversity} from '../../interfaces/IUniversity'
import {IMajor} from '../../interfaces/IMajor';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {


  ngOnInit() {
    
  }

  uni:IUniversity[] = [
    {value: 'IUP', viewValue: "Indiana University of Pennsylvania"},
    {value: 'SRU', viewValue: "Slippery Rock University"},
    {value: 'WCCC', viewValue: "Westmoreland County Community College"},
    {value: 'King College', viewValue: "Kings College"},
    {value: 'SFU', viewValue: "South Florida University"},
    {value: 'IUB', viewValue: "Indiana University of Bloomington"},
    {value: 'USC', viewValue: "University of Southern California"},
    {value: 'UCLA', viewValue: "University of California Los Angeles"},
];

majors:IMajor[] = [
  {value:"Computer Science", viewValue: "Computer Science"},
  {value:"Communications", viewValue: "Communications"},
  {value:"Business", viewValue: "Business"},
  {value:"Government/Political Science", viewValue: "Government/Political Science"},
  {value:"Economics", viewValue: "Economics"},
  {value:"Psychology", viewValue: "Psychology"},
  {value:"Nursing", viewValue: "Nursing"},
  {value:"Chemical Engineering", viewValue:"Chemical Engineering"}
];
}
