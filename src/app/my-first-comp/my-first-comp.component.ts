import { Component } from '@angular/core';
import { MessageDetailComponent } from '../message-detail/message-detail.component';
import { FirstService } from '../Service/first.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.scss'
})
export class MyFirstCompComponent {
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
    this.deleteMessage(index);
  }
}