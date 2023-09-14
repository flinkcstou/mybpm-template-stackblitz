import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mybpm-template-folder-path',
  templateUrl: './folder-path.component.html',
  styleUrls: ['./folder-path.component.scss'],
})
export class FolderPathComponent {

  private router = inject(Router);
  boId = 'c7YHKIdP39a1mgsQ';
  fieldId = 'o3SXVcygh~S2l52u';


  goToKanban() {
    this.router
      .navigate([`/folder/fsdfsdfsd`], {
        queryParams: {
          boId: this.boId,
          fieldId: this.fieldId
        }
      })
      .then();
  }
}
