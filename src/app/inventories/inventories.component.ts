import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-inventories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css'],
})
export class InventoriesComponent {
    newInventory: string = '';
    inventories: any[] = [];
    apiUrl: string = 'http://127.0.0.1:8000/product-types/';
    inventoryApiUrl: string = 'http://127.0.0.1:8000/inventories/';
    productTypes: any[] = [];

    name: string = '';
    productTypeSelect: string = '';
    serial: string = '';
    status: string = 'PENDING';
    date: string = '';

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

            console.log({
                name: this.name,
                product_type: this.productTypeSelect,
                serial: this.serial,
                date: this.date,
                status: this.status,
            });
            const response = await axios.post(this.inventoryApiUrl, {
                name: this.name,
                product_type: this.productTypeSelect,
                serial: this.serial,
                date: this.date,
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
