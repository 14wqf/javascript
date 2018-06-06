import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
      new Product(1, '第一个商品', 1.99, 1.5,  '这是第一个商品' , ['电子产品', '硬件设备']),
      new Product(2, '第二个商品', 2.99, 2.5,  '这是第一个商品' , ['图书']),
      new Product(3, '第三个商品', 3.99, 3.5,  '这是第一个商品' , ['硬件设备']),
      new Product(4, '第四个商品', 4.99, 4.5,  '这是第一个商品' , ['电子产品', '硬件设备']),
      new Product(5, '第五个商品', 5.99, 5.5,  '这是第一个商品' , ['电子产品']),
      new Product(6, '第六个商品', 6.99, 6.5,  '这是第一个商品' , ['图书']),
    ];

  private comments: Comment[] = [
    new Comment(1, 1,  '2017-02-02 22:22:22',  '张三', 3,  '东西不错'),
    new Comment(2, 1,  '2017-03-02 23:23:23',  '张四', 4,  '好评'),
    new Comment(3, 1,  '2017-04-02 24:24:24',  '张五', 2,  '满分哦'),
    new Comment(4, 2,  '2017-05-02 25:25:25',  '张六', 4,  '服务和质量都挺不错啊'),
  ]

  constructor() { }

  getAllCategories(): string [] {
    return ['电子产品', '硬件设备', '图书'];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
  return this.products.find((product) => product.id ==  id);
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }
}

export class Product {

  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}

export class Comment {
  constructor (public id: number,
               public productId: number,
               public timestamp: string,
               public user: string,
               public rating: number,
               public content: string
  ){

  }
}
