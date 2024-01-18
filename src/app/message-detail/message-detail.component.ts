import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrl: './message-detail.component.scss'
})
export class MessageDetailComponent {
  @Input()
  message:any = {};
  @Input()
  index:number =-1;

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  onDelete():void{
    this.delete.emit(this.index);
    console.log("just a message");
  }
}
