import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserDataFormComponent} from "./fumigo/components/user-data-form/user-data-form.component";
import {UserCreateFormComponent} from "./fumigo/components/user-create-form/user-create-form.component";
import {UserModifyFormComponent} from "./fumigo/components/user-modify-form/user-modify-form.component";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavBarComponent } from './public/components/nav-bar/app-nav-bar.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { ProfileCardComponent } from './public/components/profile-card/profile-card.component';
import { UserTagComponent } from './public/components/user-tag/user-tag.component';
import { StatusTagComponent } from './public/components/status-tag/status-tag.component';
import { CreateFormComponent } from './public/components/create-form/create-form.component';
import { ModifyFormComponent } from './public/components/modify-form/modify-form.component';
import { UserDataFormComponent } from './public/components/user-data-form/user-data-form.component';
import { NavigationContextBarComponent } from './public/components/navigation-context-bar/navigation-context-bar.component';
import { ItemCardComponent } from './public/components/item-card/item-card.component';
import { ThreeDViewerComponent } from './public/components/three-d-viewer/three-d-viewer.component';
import { VerticalItemCardComponent } from './public/components/vertical-item-card/vertical-item-card.component';
import { OfferCardComponent } from './public/components/offer-card/offer-card.component';
import { OrderDetailsComponent } from './public/components/order-details/order-details.component';
import { VerOfertasComponent } from './public/pages/client-view/ver-ofertas/ver-ofertas.component';
import { PerfilComponent } from './public/pages/client-view/perfil/perfil.component';
import { EditarPedidoComponent } from './public/pages/client-view/editar-pedido/editar-pedido.component';
import { NuevoPedidoComponent } from './public/pages/client-view/nuevo-pedido/nuevo-pedido.component';
import { MiPedidoComponent } from './public/pages/client-view/mi-pedido/mi-pedido.component';
import { MisPedidosComponent } from './public/pages/client-view/mis-pedidos/mis-pedidos.component';
import { PedidoComponent } from './public/pages/expert-view/pedido/pedido.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { OrdersComponent } from './public/pages/order/orders/orders.component';
import { OrderInfoComponent } from './public/pages/order/order-info/order-info.component';
import { NewOrderComponent } from './public/pages/order/new-order/new-order.component';
import { SearchOrderComponent } from './public/pages/order/search-order/search-order.component';
import { ProfileComponent } from './public/pages/me/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDataFormComponent,
    UserCreateFormComponent,
    UserModifyFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppNavBarComponent,
    ProfileCardComponent,
    UserTagComponent,
    StatusTagComponent,
    CreateFormComponent,
    ModifyFormComponent,
    UserDataFormComponent,
    NavigationContextBarComponent,
    ItemCardComponent,
    ThreeDViewerComponent,
    VerticalItemCardComponent,
    OfferCardComponent,
    OrderDetailsComponent,
    PageNotFoundComponent,
    OrdersComponent,
    OrderInfoComponent,
    NewOrderComponent,
    SearchOrderComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
