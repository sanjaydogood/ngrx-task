import { DictTableComponent } from './components/dict-table/dict-table.component';
import { NgModule } from '@angular/core';
import { TableContainerComponent } from './components/table-container/table-container.component';
import { MainTemplateComponent } from './components/main-template/main-template.component';
import { AddDataFormComponent } from './components/add-data-form/add-data-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    DictTableComponent,
    TableContainerComponent,
    MainTemplateComponent,
    AddDataFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  exports: [
    DictTableComponent,
    TableContainerComponent,
    MainTemplateComponent,
    AddDataFormComponent,
    TranslateModule,
  ],
})
export class SharedModule {}
