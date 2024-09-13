import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';

import { DeliveriesComponent } from './deliveries/deliveries.component';
import { InventoriesComponent } from './inventories/inventories.component';
import { ProductTypesComponent } from './productTypes/productTypes.component';
import { AppComponent } from './app.component';



export const routes: Routes = [
    { path: '', redirectTo: '/inventory', pathMatch: 'full' }, // Redirección a la ruta 'inventory'
    { path: 'deliveries', component: DeliveriesComponent },
    { path: 'inventory', component: InventoriesComponent },
    { path: 'product-types', component: ProductTypesComponent },
    { path: '**', redirectTo: '/inventory' } // Redirigir cualquier otra ruta a 'inventory'
];

bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
});