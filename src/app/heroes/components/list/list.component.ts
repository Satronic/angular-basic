import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Superman', 'Mujer maravilla', 'Thor', 'Batman'];
  public deletedHero: string | undefined = undefined;

  deleteLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
