import {Component, OnInit} from '@angular/core';
import {DayCareTimings} from "../../app.interface";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public weekDay: number = 0;
  public showAllDays: boolean = false;
  public dayArray: DayCareTimings[] = [];

  ngOnInit(): void {
    this.weekDay = new Date().getDay();
    console.log(this.weekDay);
    this.dayArray = [
      {
        dayStr: 'Mon',
        timing: '09:00 am – 05:00 pm'
      }, {
        dayStr: 'Tue',
        timing: '09:00 am – 05:00 pm'
      }, {
        dayStr: 'Wed',
        timing: '09:00 am – 05:00 pm'
      }, {
        dayStr: 'Thu',
        timing: '09:00 am – 05:00 pm'
      }, {
        dayStr: 'Fri',
        timing: '09:00 am – 05:00 pm'
      }, {
        dayStr: 'Sat',
        timing: 'Closed'
      }, {
        dayStr: 'Sun',
        timing: 'Closed'
      }
    ]
  }

  public shrinkAllDays(i: number): void {
    if (i === 0) {
      this.showAllDays = false;
    }
  }
}
