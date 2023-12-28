import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})

export class CounterComponent implements OnInit {
  public title: string = 'Mi primera app en Angular';
  public counter: number = 10;

  constructor() { }

  ngOnInit() { }

  public increaseBy(): void {
    this.counter += 1;
  }

  public decreaseBy(): void {
    if (this.counter > 0) {
      this.counter -= 1;
    }
  }

  public resetCounter() {
    this.counter = 10;
  }
}
