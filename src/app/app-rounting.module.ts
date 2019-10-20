import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from './modules/login/sign-in/sign-in.component';
import { ProductsComponent } from './modules/admin/products/products.component';

const routes : Routes = [
    {
        path: 'login',
        component: SignInComponent
    },
    {
        path: 'admin',
        component: ProductsComponent
    },
    {
        path: 'admin/products/new',
        component: ProductsComponent
    },
    {
        path: 'admin/products/:id',
        component: ProductsComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'admin'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule{}