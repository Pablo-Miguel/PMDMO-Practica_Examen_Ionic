import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursesPageRoutingModule } from './courses-routing.module';

import { CoursesPage } from './courses.page';
import { FormComponent } from 'src/app/components/form/form.component';
import { MyModalComponent } from './my-modal/my-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursesPageRoutingModule,
  ],
  declarations: [
    CoursesPage,
    FormComponent,
    MyModalComponent
  ]
})
export class CoursesPageModule {}
