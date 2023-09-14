import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderPathComponent } from './folder-path.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FolderPathComponent],
  exports: [FolderPathComponent],
  imports: [CommonModule, FormsModule],
})
export class FolderPathModule {}
