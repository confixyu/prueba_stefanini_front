import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-deliveries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css'],
})
export class DeliveriesComponent {
  products = [];
  apiUrl: string = 'http://127.0.0.1:8000/inventories/';
    productTypes: any[] = [];
  async ngOnInit() {
    await this.fetchProductTypes();
  }

  async fetchProductTypes() {
    try {
      const response = await axios.get(this.apiUrl);
      this.productTypes = response.data.data;
      console.log(this.productTypes)
    } catch (error) {
      console.error('Error al obtener los tipos de productos:', error);
    }
  }

  onButtonClick() {
    console.log('Botón clicado!');
    alert('¡Botón clicado!');
  }
}
