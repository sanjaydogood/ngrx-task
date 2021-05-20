import { DictTableComponent } from './components/dict-table/dict-table.component';
import { NgModule } from '@angular/core';
import { TableContainerComponent } from './components/table-container/table-container.component';
import { MainTemplateComponent } from './components/main-template/main-template.component';
import { AddDataFormComponent } from './components/add-data-form/add-data-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DictTableComponent,
    TableContainerComponent,
    MainTemplateComponent,
    AddDataFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    DictTableComponent,
    TableContainerComponent,
    MainTemplateComponent,
    AddDataFormComponent,
  ],
})
export class SharedModule {}
