import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  constructor() { }
  @Input() name:string;

  ngOnInit() {
  }

}
