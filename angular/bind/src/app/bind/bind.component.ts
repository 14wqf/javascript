import { Component, OnInit } from '@angular/core';
import {stringDistance} from 'codelyzer/util/utils';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  // name: string;
  //
  // constructor() {
  //   setInterval(() => {
  //     this.name = "Tom";
  //   },3000);
  // }

  birthday:Date = new Date();
  pi:number = 3.1415926
  size:number = 7;

  ngOnInit() {
  }

  // doOnInput(event) {
  //   this.name = event.target.value;
  // }

}
