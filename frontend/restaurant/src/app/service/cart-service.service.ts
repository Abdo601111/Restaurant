import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartOrder } from '../model/cart-order';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  orders: CartOrder[]=[];
  totalOrders: Subject<number>=new BehaviorSubject<number>(0);
  totalPrice: Subject<number>=new BehaviorSubject<number>(0);

  constructor() { }

  
  addOrderToCard(order: CartOrder){

    let isExist=false;
    let existOrder: CartOrder=undefined;
    if(this.orders.length >0){
    //   for(let temp of this.orders){
    //     if(temp.id===order.id){
    //       existOrder=temp;
    //          break;
    //     }
    //   }
    existOrder= this.orders.find(temp => temp.id === order.id);
    }
    isExist =(existOrder != undefined);
    if(isExist){
       existOrder.quantity++;
    }else{
      this.orders.push(order);
    }
    this.calculateTotals();

  }

  calculateTotals(){
    let totalElementSizeOrder: number=0;
    let totalPriceOrders: number=0;

    for(let temp of this.orders){
      totalElementSizeOrder += temp.quantity;
      totalPriceOrders+= temp.quantity*temp.price;
    }

    this.totalOrders.next(totalElementSizeOrder);
    this.totalPrice.next(totalPriceOrders);
  }

  removeOrder(order: CartOrder){
    order.quantity--;
    if(order.quantity===0){
         this.remove(order);
    }else{
      this.calculateTotals();
    }

  }
  remove(order: CartOrder) {
    const index =this.orders.findIndex(temp => temp.id===order.id);
    if(index > -1){
      this.orders.splice(index,1);
      this.calculateTotals();
    }
  }
}
