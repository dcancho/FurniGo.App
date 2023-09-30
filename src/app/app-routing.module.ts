import { ComponentRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { ClienteMisPedidosComponent } from './public/pages/client-view/cliente-mis-pedidos/cliente-mis-pedidos.component';
import { ClienteMiPedidoComponent } from './public/pages/client-view/cliente-mi-pedido/cliente-mi-pedido.component';
import { ClienteNuevoPedidoComponent } from './public/pages/client-view/cliente-nuevo-pedido/cliente-nuevo-pedido.component';
import { ClientePerfilComponent } from './public/pages/client-view/cliente-perfil/cliente-perfil.component';
import { ExpertoMisPedidosComponent } from './public/pages/expert-view/experto-mis-pedidos/experto-mis-pedidos.component';
import { ExpertoPedidoComponent } from './public/pages/expert-view/experto-pedido/experto-pedido.component';
import { ExpertoVerPedidosComponent } from './public/pages/expert-view/experto-ver-pedidos/experto-ver-pedidos.component';
import { ExpertoPerfilComponent } from './public/pages/expert-view/experto-perfil/experto-perfil.component';

const routes: Routes = [
    {path: '', redirectTo: 'client/order/list', pathMatch: 'full'},
    { path: "client/order/list", component: ClienteMisPedidosComponent },
    { path: "client/order/info", component: ClienteMiPedidoComponent },
    { path: "client/order/new", component: ClienteNuevoPedidoComponent },
    { path: "client/me", component: ClientePerfilComponent },

    { path: "expert/order/list", component: ExpertoMisPedidosComponent},
    { path: "expert/order/info", component: ExpertoPedidoComponent},
    { path: "expert/order/search", component: ExpertoVerPedidosComponent},
    { path: "expert/me", component: ExpertoPerfilComponent},
    { path: '**', component: PageNotFoundComponent },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
