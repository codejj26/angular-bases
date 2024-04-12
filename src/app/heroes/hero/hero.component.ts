import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
 public name : string = "julian"
 public age:  number = 32;

 get capitalizedName() : string{
  return this.name.toUpperCase();
 }
 getHeroDescription():string{
  return `${this.name}- ${this.age}`;
 }
 changeHero():void{
  this.name='spiderman'
 }
 changeAge():void{
  this.age=53
 }
 resetForm():void{
  this.age=32
  this.name='julian'
 }
}
