import { Routes } from '@angular/router';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { InventoriesComponent } from './inventories/inventories.component';
import { ProductTypesComponent } from './productTypes/productTypes.component';

export const routes: Routes = [
    { path: 'inventory', component: InventoriesComponent },
    { path: 'deliveries', component: DeliveriesComponent },
    { path: 'product-types', component: ProductTypesComponent },
];
