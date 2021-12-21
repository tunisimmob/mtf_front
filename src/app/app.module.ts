import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { TitleComponent } from './layouts/admin/title/title.component';
import { BreadcrumbsComponent } from './layouts/admin/breadcrumbs/breadcrumbs.component';
import { AuthComponent } from './layouts/auth/auth.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpIntercpterService } from './services/http/http-intercpter.service';
import { LoaderInterceptorService } from './services/http/loader-interceptor.service';
import { DragDropDirective } from './drag-drop.directive';
import {ChartsModule} from 'ng2-charts';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxLoadingModule } from 'ngx-loading';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TitleComponent,
    BreadcrumbsComponent,
    AuthComponent,
    DragDropDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule, 
    ChartsModule,
    NgxSpinnerModule,
    NgxLoadingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntercpterService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
