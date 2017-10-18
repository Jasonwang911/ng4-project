import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService, Comment } from './../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  comments: Comment[];

  constructor(
    private routeInfo: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    // 通过路由传参获取产品id
    let ProductId: number = this.routeInfo.snapshot.params['productId'];
    // 根据id通过服务查询对应id的商品详情
    this.product = this.productService.getProduct(ProductId);
    // 根据id通过服务查询对应id的评论列表
    this.comments = this.productService.getCommentsForProductId(ProductId);
  }

}
