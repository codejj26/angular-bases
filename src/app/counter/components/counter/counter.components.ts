import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  template:`
  <h3>Counter:{{counter}} </h3>
  <button (click)="increaBy(+1)">+</button>
  <button (click)="increaBy(-1)">-</button>
  <button (click)="resetCounter()">Reset</button>
  `
})

export class counterComponent{
  public counter: number = 10;

  increaBy(value: number):void{
    this.counter+=value;
  }
resetCounter():void{
  this.counter= 10;
}
}
