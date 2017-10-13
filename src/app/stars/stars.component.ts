import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()    // input装饰器
  private rating:number = 0;

  private stars:boolean[];

  constructor() { }

  ngOnInit() {
  	this.stars = [];
  	for(let i = 1; i <= 5; i++) {
  		this.stars.push(i > this.rating);
  	}
  	// 整理后 this.stars = [false, false, true, true, true];

  }

}
