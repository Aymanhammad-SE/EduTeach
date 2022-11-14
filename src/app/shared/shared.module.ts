import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    MatCardModule,
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    MatCardModule
  ]
})
export class SharedModule { }
