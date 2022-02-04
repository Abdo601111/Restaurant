
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartOrder } from 'src/app/model/cart-order';
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  orders: CartOrder[]=[];
  totalOrder: number=0;
  totalPrice: number=0;
  constructor(private cart: CartServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getallOrders();
    this.getTotal();
    this.cart.calculateTotals();
  }


getTotal(){
  this.cart.totalOrders.subscribe(
    date =>{
      this.totalOrder=date
    }
  )

  this.cart.totalPrice.subscribe(
    date =>{
      this.totalPrice=date
    }
  )
}

  getallOrders() {

    this.orders=this.cart.orders;
  }

  addOrder(temp: CartOrder){
    this.cart.addOrderToCard(temp);
  }

  removeOrder(temp: CartOrder){
    this.cart.removeOrder(temp);
  }

  remove(temp: CartOrder){
    this.cart.remove(temp);

  }

  checkOut(){
    this.router.navigateByUrl("/checkout")
  }

}
