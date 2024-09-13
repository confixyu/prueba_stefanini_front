import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import axios from 'axios';
import { apiHost } from '../../config';

@Component({
  selector: 'app-inventories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css'],
})
export class InventoriesComponent {
    inventories: any[] = [];
    apiUrl: string = `${apiHost}/product-types/`;
    inventoryApiUrl: string = `${apiHost}/inventories/`;
    productTypes: any[] = [];

    newInventoryName: string = '';
    newInventoryProduct: string = '';
    newInventorySerial: string = '';
    status: string = 'PENDING';
    newInventoryDate: string = '';

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
            const response = await axios.post(this.inventoryApiUrl, {
                name: this.newInventoryName,
                product_type: this.newInventoryProduct,
                serial: this.newInventoryProduct,
                date: this.newInventoryDate,
                status: this.status,
            });
    
          if (response.status === 201) {
            alert('Tipo de producto creado correctamente');
          }
        } catch (error) {
          console.error('Error al crear el tipo de producto:', error);
        }
        
    }
}
