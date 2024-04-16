import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
public characterList: Character[]=[{
  name:'Trunk',
  power:50
}]
onDeleteCharacter(id?:string):void{
  if(!id)return
this.onDelete.emit(id);
  console.log()
}
@Output()
onDelete: EventEmitter<string> = new EventEmitter();
}
