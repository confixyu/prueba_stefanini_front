import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import axios from 'axios';
import { apiHost } from '../../config';

@Component({
  selector: 'app-productTypes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './productTypes.component.html',
  styleUrls: ['./productTypes.component.css'],
})
export class ProductTypesComponent {
  newProductType: string = '';
  productTypes: any[] = [];
  apiUrl: string = `${apiHost}/product-types/`;

  async ngOnInit() {
    await this.fetchProductTypes();
  }

  async fetchProductTypes() {
    try {
      const response = await axios.get(this.apiUrl);
      this.productTypes = response.data.data;
    } catch (error) {
      console.error('Error al obtener los tipos de productos:', error);
    }
  }

  async onSubmit() {
    try {
      const response = await axios.post(this.apiUrl, {
        name: this.newProductType
      });

      if (response.status === 201) {
        alert('Tipo de producto creado correctamente');
        this.newProductType = '';
      }
    } catch (error) {
      console.error('Error al crear el tipo de producto:', error);
    }
  }
}
