import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  private products:Array<Product>;

  constructor() { }

  // 生命周期钩子
  ngOnInit() {

  	this.products = [
	  	new Product(1,"第一个商品",1.99,3.5,"这是第一个商品，angular4学习真麻烦，真麻烦，真麻烦",["商品","ng4","麻烦"]),
	  	new Product(2,"第二个商品",1.99,1,"这是第二个商品，angular4学习真麻烦，真麻烦，真麻烦",["商品","ng4","麻烦"]),
	  	new Product(3,"第三个商品",1.99,2.5,"这是第三个商品，angular4学习真麻烦，真麻烦，真麻烦",["商品","ng4","麻烦"]),
	  	new Product(4,"第四个商品",1.99,5,"这是第四个商品，angular4学习真麻烦，真麻烦，真麻烦",["商品","ng4","麻烦"]),
	  	new Product(5,"第五个商品",1.99,0,"这是第五个商品，angular4学习真麻烦，真麻烦，真麻烦",["商品","ng4","麻烦"]),
	  	new Product(6,"第六个商品",1.99,4,"这是第六个商品，angular4学习真麻烦，真麻烦，真麻烦",["商品","ng4","麻烦"])
	]
  }

}

// 商品信息的构造函数
export class Product {

	constructor(
		public id:number,
		public title:string,
		public price:number,
		public rating:number,
		public desc:string,
		public categories:Array<string>
	) {}
}
