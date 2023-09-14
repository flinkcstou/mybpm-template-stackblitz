import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { API_NOTIFICATION_OUT, NotificationService } from '@ngx-kz/notifications';
import { ApiConfirmationEnum, ApiKanbanEnum, ApiNotificationEnum } from '@mybpm-api/mybpm-api';
import { API_CONFIRMATION_OUT, ConfirmFormService } from '@ngx-kz/confirm-form';
import { API_KANBAN_OUT } from '@mybpm-kanban/kanban-view';

@Component({
  selector: 'mybpm-configure-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: API_NOTIFICATION_OUT.getInjection(ApiNotificationEnum.NOTIFICATION_SERVICE),
      useExisting: NotificationService,
    },
    {
      provide: API_CONFIRMATION_OUT.getInjection(ApiConfirmationEnum.CONFIRMATION_SERVICE),
      useExisting: ConfirmFormService,
    },
    {
      provide: API_KANBAN_OUT.getInjection(ApiKanbanEnum.NOTIFICATION_SERVICE),
      useExisting: API_NOTIFICATION_OUT.getInjection(ApiNotificationEnum.NOTIFICATION_SERVICE),
    },
    {
      provide: API_KANBAN_OUT.getInjection(ApiKanbanEnum.CONFIRMATION_SERVICE),
      useExisting: API_CONFIRMATION_OUT.getInjection(ApiConfirmationEnum.CONFIRMATION_SERVICE),
    }
  ]
})
export class FolderComponent implements OnInit {


  ngOnInit(): void {

  }


}
