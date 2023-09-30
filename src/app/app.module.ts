import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCreateFormComponent } from "./public/components/user-create-form/user-create-form.component";
import { UserModifyFormComponent } from "./public/components/user-modify-form/user-modify-form.component";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavBarComponent } from './public/components/nav-bar/app-nav-bar.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { ProfileCardComponent } from './public/components/profile-card/profile-card.component';
import {ProfileComponent} from "./public/pages/me/profile/profile.component";
import { UserTagComponent } from './public/components/user-tag/user-tag.component';
import { StatusTagComponent } from './public/components/status-tag/status-tag.component';
import { NavigationContextBarComponent } from './public/components/navigation-context-bar/navigation-context-bar.component';
import { ItemCardComponent } from './public/components/item-card/item-card.component';
import { ThreeDViewerComponent } from './public/components/three-d-viewer/three-d-viewer.component';
import { VerticalItemCardComponent } from './public/components/vertical-item-card/vertical-item-card.component';
import { OfferCardComponent } from './public/components/offer-card/offer-card.component';
import { OrderDetailsComponent } from './public/components/order-details/order-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { UserDataFormComponent} from "./public/components/user-data-form/user-data-form.component";

@NgModule({
  declarations: [
    AppComponent,
    UserCreateFormComponent,
    UserModifyFormComponent,
    AppNavBarComponent,
    ProfileCardComponent,
    ProfileComponent,
    UserDataFormComponent,
    UserTagComponent,
    StatusTagComponent,
    NavigationContextBarComponent,
    ItemCardComponent,
    ThreeDViewerComponent,
    VerticalItemCardComponent,
    OfferCardComponent,
    OrderDetailsComponent,
    PageNotFoundComponent,
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
    MatCardModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
