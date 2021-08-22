import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  customerName: string = '';
  address: string = '';
  creditCardNumber: string = '';
  phoneNumber: string = '';
  email: string = '';

  constructor(
    private dataService: DataService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  submitForm(): void {
    let products = this.cartService.cart;
    this.dataService.sendOrder(products);

  }
}
