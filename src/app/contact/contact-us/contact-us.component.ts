import {Component, OnInit} from '@angular/core';
import {DayCareTiming} from "../../app.interface";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public weekDay: number = 0;
  public showAllDays: boolean = false;
  public dayArray: DayCareTiming[] = [];
  public dayName: string = '';
  public canShowGetInTouchDialog: boolean = false;
  private dayNames: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  ngOnInit(): void {
    this.weekDay = new Date().getDay();
    this.dayName = this.dayNames[this.weekDay];
    this.dayArray = [
      {
        dayStr: 'Mon',
        timing: '09:00 am – 05:00 pm',
        className: 'cursor-pointer f-c-r span-width'
      }, {
        dayStr: 'Tue',
        timing: '09:00 am – 05:00 pm',
        className: 'span-width'
      }, {
        dayStr: 'Wed',
        timing: '09:00 am – 05:00 pm',
        className: 'span-width'
      }, {
        dayStr: 'Thu',
        timing: '09:00 am – 05:00 pm',
        className: 'span-width'
      }, {
        dayStr: 'Fri',
        timing: '09:00 am – 05:00 pm',
        className: 'span-width'
      }, {
        dayStr: 'Sat',
        timing: 'Closed',
        className: 'span-width'
      }, {
        dayStr: 'Sun',
        timing: 'Closed',
        className: 'span-width'
      }
    ];

    this.setClassName();
  }

  public shrinkAllDays(i: number): void {
    if (i === 0) {
      this.showAllDays = false;
    }
  }

  public sendFormData(): void {
    this.canShowGetInTouchDialog = false;
  }

  private setClassName(): void {
    const item: DayCareTiming | undefined = this.dayArray.find(d => d.dayStr === this.dayName);
    if (item) {
      item.className += ' font-bold';
    }
  }
}
