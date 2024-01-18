import { Component } from '@angular/core';
import { FirstService } from '../Service/first.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  nom: string = '';
  prenom: string = '';
  age: number = 0;
  isSubmit: boolean = false;
  message: Array<any> = [];

  constructor(private service:FirstService){
    this.message = service.getAllMessage();
    this.isSubmit = this.message.length > 0;
  }

  onSubmit():void{
    this.isSubmit = true;
    this.service.insert({
      'nom' : this.nom,
      'prenom': this.prenom,
      'age' : this.age
    });
    console.log(this.message);
  }

  deleteMessage(index: number):void{
    this.service.delete(index);
  }
}