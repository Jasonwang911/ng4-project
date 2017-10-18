import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1,"第一个商品",1.99,3.5,"这是第一个商品，angular4学习真麻烦，真麻烦，真麻烦",["商品","ng4","麻烦"]),
    new Product(2,"第二个商品",1.99,1,"这是第二个商品，angular4学习真麻烦，真麻烦，真麻烦",["商品","ng4","麻烦"]),
    new Product(3,"第三个商品",1.99,2.5,"这是第三个商品，angular4学习真麻烦，真麻烦，真麻烦",["商品","ng4","麻烦"]),
    new Product(4,"第四个商品",1.99,5,"这是第四个商品，angular4学习真麻烦，真麻烦，真麻烦",["商品","ng4","麻烦"]),
    new Product(5,"第五个商品",1.99,0,"这是第五个商品，angular4学习真麻烦，真麻烦，真麻烦",["商品","ng4","麻烦"]),
    new Product(6,"第六个商品",1.99,4,"这是第六个商品，angular4学习真麻烦，真麻烦，真麻烦",["商品","ng4","麻烦"])
  ];

  private comments: Comment[] = [
    new Comment(1, 1, 4, "2017-02-02 22:22:22", "里克尔梅", "不赖不赖"),
    new Comment(2, 1, 5, "2016-02-02 22:22:22", "c罗", "不赖不赖"),
    new Comment(3, 1, 2, "2015-02-02 22:22:22", "大罗", "不赖不赖"),
    new Comment(4, 1, 1, "2014-02-02 22:22:22", "小罗", "不赖不赖"),
    new Comment(5, 1, 0, "2013-02-02 22:22:22", "齐达内", "不赖不赖"),
    new Comment(1, 2, 4, "2017-02-02 22:22:22", "里克尔梅", "不赖不赖"),
    new Comment(2, 3, 5, "2016-02-02 22:22:22", "c罗", "不赖不赖"),
    new Comment(3, 4, 2, "2015-02-02 22:22:22", "大罗", "不赖不赖"),
    new Comment(4, 5, 1, "2014-02-02 22:22:22", "小罗", "不赖不赖"),
  ]

  constructor() { }

  // 获取所有的商品信息
  getProducts(): Product[] {
    return this.products;
  }

  // 根据id返回商品信息
  getProduct(id: number): Product{
    return this.products.find( (product) => product.id == id);
  }

  // 获取商品品论的信息
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter( (comment: Comment) => comment.productId == id);
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

export class Comment {
  
  constructor(
    public id: number,
    public productId: number,
    public rating: number,
    public timestamp: string,
    public user: string,
    public content: string
  ) {}

}
