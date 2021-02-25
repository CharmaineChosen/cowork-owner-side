import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourSpacesPageRoutingModule } from './your-spaces-routing.module';

import { YourSpacesPage } from './your-spaces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourSpacesPageRoutingModule
  ],
  declarations: [YourSpacesPage]
})
export class YourSpacesPageModule {}
