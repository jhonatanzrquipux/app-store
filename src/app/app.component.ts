import { Component } from '@angular/core';
import { exampleProducts } from '../../../../libs/products/src/lib/products';


@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'store';
  products = exampleProducts;
}
