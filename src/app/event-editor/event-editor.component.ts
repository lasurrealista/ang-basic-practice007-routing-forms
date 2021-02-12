import { Component, OnInit } from '@angular/core';
import { Event } from '../model/event';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../service/event.service';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  event: Event = new Event();
  eventList$: BehaviorSubject<Event[]> =
    this.eventService.list$;

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    ) {
   }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      params =>
        this.eventService.get(parseInt(params.id)).forEach(
          event => {
            this.event = event || new Event();
          }
        )
    );
  }

  onFormSubmit(form: NgForm): void {

    this.eventService.update(this.event);
    console.log(form.value);
  }

}
