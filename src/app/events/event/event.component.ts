import {Component, OnInit} from '@angular/core';
import {Event} from "../../app.interface";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  public events: Event[] = [];

  ngOnInit(): void {
    this.events = [
      {
        day: 'Tuesday',
        type: 'facilities tour',
        description: 'Tour for prospective students.',
        timing: '1:00 PM - 2:00 PM',
        location: 'Main Campus'
      }, {
        day: 'Wednesday',
        type: 'financial aid q&a',
        description: 'A questions and answer account about available tuition assistance.',
        timing: '6:00 PM - 8:00 PM',
        location: 'Main Campus'
      }, {
        day: 'Saturday',
        type: 'STUDENT SHOWCASE',
        description: 'Visit our facilities and see the work of our students.',
        timing: '10:00 AM - 3:00 PM',
        location: 'Main Campus'
      }
    ]
  }

}
