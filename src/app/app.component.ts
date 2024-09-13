import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InventoriesComponent } from './inventories/inventories.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { ProductTypesComponent } from './productTypes/productTypes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InventoriesComponent, DeliveriesComponent, ProductTypesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba_stefanini_front';
}
