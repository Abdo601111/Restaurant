import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-catd-status',
  templateUrl: './catd-status.component.html',
  styleUrls: ['./catd-status.component.css']
})
export class CatdStatusComponent implements OnInit {

 

  orderSize: number = 0;
  orderPrice: number = 0;

  constructor(private cart: CartServiceService) { }

  ngOnInit(): void {
    this.getCartStatus()
  }

  getCartStatus(){
    this.cart.totalOrders.subscribe(
      data => {
        this.orderSize = data
      }
    )
    this.cart.totalPrice.subscribe(
      data => {
        this.orderPrice = data
      }
    )


  }


}
