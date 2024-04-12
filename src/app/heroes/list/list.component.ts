import { Component } from '@angular/core';

@Component({
  selector: 'app-hereos-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
 public herosName: string[]= ['spiderman', 'batman' , 'hulk', 'deadpool']
 public deletedHero?: string;

 removeLastHeroe():void{
   this.deletedHero= this.herosName.pop();
 }

}

