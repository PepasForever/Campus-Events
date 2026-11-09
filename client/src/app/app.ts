import { Component } from '@angular/core';
import { EventList } from './event-list/event-list';

@Component({
  imports: [EventList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}