import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';
import { apiHost } from '../../config';

@Component({
  selector: 'app-deliveries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css'],
})
export class DeliveriesComponent {
  products = [];
  apiUrl: string = `${apiHost}/inventories/`;
  inventoryApiUrl: string = `${apiHost}/inventories/`;
  productTypes: any[] = [];
  async ngOnInit() {
    await this.fetchInventories();
  }

  async fetchInventories() {
    try {
      const response = await axios.get(this.apiUrl);
      this.productTypes = response.data.data;
      console.log(this.productTypes)
    } catch (error) {
      console.error('Error al obtener los tipos de productos:', error);
    }
  }

  async onButtonClick(product: any) {
    console.log('Botón clicado!');
    console.log(product);
    const response = await axios.put(`${this.inventoryApiUrl}${product.serial}/`, {
      name: product.name,
      product_type: product.product_type,
      serial: product.serial,
      date: product.date,
      status: "FINISHED",
  });
  }
}
