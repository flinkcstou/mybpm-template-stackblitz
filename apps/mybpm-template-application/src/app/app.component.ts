import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageResolver } from '@ngx-kz/i18-language';
import { CommonIconRegisterService } from '@ngx-kz/icons';
import { MybpmLang } from '@ngx-kz/mybpm-models';

@Component({
  selector: 'mybpm-template-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // todo nabu refactor all library in @ngx_kz
  // remove peerDependencies date-fns ng-zorro-antd
  title = 'mybpm-template-application';

  /*
  * нужно полностью пересмотреть концепцию mybpm-configure удалить все peerDependencies  and dependencies
  * нужно продумать для всех library как собирать в кучку assets, styles, modules, components,
  * еще нужно нарисовать полностью diagrams сколько есть зависимостей и нужно зависимости
  * продумать еще сколько есть вариации как правильно использовать injection в нашем проекте
  * */

  constructor(
    private readonly translate: TranslateService,
    private readonly languageResolver: LanguageResolver,
    private readonly iconRegister: CommonIconRegisterService,
  ) {
    this.iconRegister.init();
    this.initLanguage(); // todo nabu move to library
  }

  private initLanguage() {
    // move to library service
    this.translate.addLangs(['ru', 'en', 'kk', 'qq']);
    this.languageResolver.changeUserInterfaceLanguage(MybpmLang.RUS);
  }
}
