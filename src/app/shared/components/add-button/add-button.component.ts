import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {
  @Output() clickEvent:EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.clickEvent.emit(null);
  }

}
