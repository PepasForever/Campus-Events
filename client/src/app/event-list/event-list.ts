import { Component, computed, signal } from '@angular/core';
import { CampusEvent } from '../campus-event';
import { EventCard } from '../event-card/event-card';

@Component({
  imports: [EventCard],
  selector: 'app-event-list',
  styleUrl: './event-list.css',
  templateUrl: './event-list.html',
})
export class EventList {
  events = signal<CampusEvent[]>([
    {
      id: 1,
      title: 'Welcome party for Erasmus students',
      description: 'Meet the other exchange students, eat pizza and get your welcome pack.',
      date: '2026-10-15T18:00',
      location: 'Main hall, building A',
      capacity: 120,
    },
    {
      id: 2,
      title: 'Hackathon: apps for the city',
      description: 'Build an app that makes life in Kraków easier.',
      date: '2026-11-07T09:00',
      location: 'Lab 204',
      capacity: 40,
    },
    {
      id: 3,
      title: 'Board game night',
      description: '',
      date: '2026-10-22T19:00',
      location: 'Student club',
      capacity: 30,
    },
  ]);

  search = signal('');

  visibleEvents = computed(() => {
    const q = this.search().toLowerCase();
    return this.events().filter((e) => e.title.toLowerCase().includes(q));
  });

  lastInterest = signal<string | null>(null);

  onInterested(event: CampusEvent) {
    this.lastInterest.set(event.title);
  }
}