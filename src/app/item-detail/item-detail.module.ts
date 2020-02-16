import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemDetailRoutingModule } from './item-detail-routing.module';
import { ItemDetailComponent } from './item-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ItemDetailComponent],
  imports: [
    CommonModule,
    ItemDetailRoutingModule,
    FontAwesomeModule
  ]
})
export class ItemDetailModule { }
