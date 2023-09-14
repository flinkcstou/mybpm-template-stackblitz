import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FolderMobileRoutingModule } from './folder-mobile-routing.module';
import { FolderMobileComponent } from './folder-mobile.component';

@NgModule({
  declarations: [FolderMobileComponent],
  imports: [CommonModule, FolderMobileRoutingModule],
})
export class FolderMobileModule {
}
