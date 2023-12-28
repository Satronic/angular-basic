import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public charactersMain: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8000
    },
  ];

  onAddCharacter(newCharacter: Character): void {
    this.charactersMain.push({id: uuid(), ...newCharacter});
  }

  onDeleteCharacter(id: string): void {
    this.charactersMain = this.charactersMain.filter((character: Character) => {
      return character.id !== id;
    })
  }
}
