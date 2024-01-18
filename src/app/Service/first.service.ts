import { Injectable } from '@angular/core';

@Injectable()
export class FirstService {

  messages: Array<any> = [];
  constructor() {
    this.init();
   }

  init():void{
    this.insert({
      nom:"mohanned",
      prenom:"zayoud",
      age:21
    });
    this.insert({
      nom:"mohammed",
      prenom:"zayoud",
      age:28
    });
    this.insert({
      nom:"montadhar",
      prenom:"zayoud",
      age:24
    });
    this.insert({
      nom:"nermine",
      prenom:"elghoul",
      age:21
    });
  }

  insert(message:{nom:string,prenom:string,age:number}):void{
    this.messages.push(message);
  }

  getAllMessage():any[]{
    return this.messages;
  }

  delete(index: number):void{
    this.messages.splice(index,1);
  }
}
