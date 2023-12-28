import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'spiderman';
  public age: number = 10;

  public get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  public changeName(): void {
    this.name = 'Superman';
  }

  public changeAge() {
    this.age = 40;
  }

  reset(): void {
    this.name = 'spiderman';
    this.age = 10;
  }
}
