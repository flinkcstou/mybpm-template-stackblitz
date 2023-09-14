import { NgModule } from '@angular/core';
import { FolderComponent } from './folder.component';
import { FolderRoutingModule } from './folder-routing.module';
import { CommonModule } from '@angular/common';
import { KanbanModule } from '@mybpm-kanban/kanban-view';


@NgModule({
  declarations: [FolderComponent],
  exports: [FolderComponent],
  imports: [
    CommonModule,
    FolderRoutingModule,
    KanbanModule,
  ],
  providers: []
})
export class FolderModule {

}
