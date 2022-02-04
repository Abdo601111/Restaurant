import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  constructor(private orderService: OrderServiceService,
    private router: Router) { }

ngOnInit(): void {
}

doSearch(value: string) {
// this.router.navigateByUrl('/orders/' + value)

}
}
