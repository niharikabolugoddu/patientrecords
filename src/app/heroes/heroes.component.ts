import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Output() clicking:EventEmitter<string>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  btnClick(){
    this.clicking.emit("you entered heroes");
  }
}
