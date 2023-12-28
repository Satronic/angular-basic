import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output()
  public onAdd: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  public addCharacter(): void {
    if(this.character.name.length === 0 || this.character.power === 0) return;
    this.onAdd.emit(this.character);
    this.character = {
      name: '',
      power: 0
    }
  }
}
