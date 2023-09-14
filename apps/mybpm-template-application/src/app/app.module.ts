import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { appRoutes } from "./app.routes";
import { NxWelcomeComponent } from "./nx-welcome.component";
import { LoginModule } from '@mybpm-security/login';
import { AUTH_SERVICE, AuthModule, ENVIRONMENT_CONFIG_SERVICE, MybpmModuleModule } from '@mybpm-security/auth';
import { CommonModule } from '@angular/common';
import { EnvironmentConfig } from '@ngx-kz/mybpm-models';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ENVIRONMENT_CONFIG, EnvironmentConfigModule } from '@ngx-kz/environment-config';
import { I18LanguageModule } from '@ngx-kz/i18-language';
import { MatIconModule } from '@angular/material/icon';
import { NotificationsModule } from '@ngx-kz/notifications';
import { PopoverModule } from '@ngx-kz/popover';
import { ConfirmFormModule } from '@ngx-kz/confirm-form';
import { environment } from '../environments/environment';
import { FolderPathModule } from './pages/folder-path/folder-path.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    CommonModule,
    EnvironmentConfigModule.forRoot(environment),
    MybpmModuleModule.forRoot(),
    AuthModule.forRoot({
      services: {
        fakeProviders: {
          environmentConfig: {
            provide: ENVIRONMENT_CONFIG_SERVICE,
            useFactory: (config: EnvironmentConfig) => {
              return config;
            },
            deps: [ENVIRONMENT_CONFIG],
          },
        },
      }
    }),
    I18LanguageModule.forRoot(AUTH_SERVICE),
    AppRoutingModule,
    MatIconModule,
    LoginModule,
    TranslateModule,
    BrowserAnimationsModule,
    NotificationsModule,
    ConfirmFormModule,
    PopoverModule,
    LoginModule,
    FolderPathModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
