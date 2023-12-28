import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService: DbzService) { }

  public get characters(): Character[] {
    return this.dbzService.charactersMain;
  }

  public addCharacter(character: Character) {
    this.dbzService.onAddCharacter(character)
  }

  public deleteCharacter(id: string) {
    this.dbzService.onDeleteCharacter(id);
  }
}
