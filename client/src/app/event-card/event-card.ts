import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CampusEvent } from '../campus-event';

@Component({
  imports: [DatePipe],
  selector: 'app-event-card',
  styleUrl: './event-card.css',
  templateUrl: './event-card.html',
})
export class EventCard {
  event = input.required<CampusEvent>();
  interested = output<CampusEvent>();
}