import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './@component/dashboard/dashboard.component';
import { NavigationComponent } from './@component/navigation/navigation.component';
import { LoginComponent } from './@component/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { JwtModule } from '@auth0/angular-jwt';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BackstageInterceptor } from './@interceptor/backstage.interceptor';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdConfComponent } from './@component/ad-conf/ad-conf.component';
import { AdSourceComponent } from './@component/ad-source/ad-source.component';
import { MatTableModule } from '@angular/material/table';
import { OneFocusComponent } from './@component/ad-conf/dialog/one-focus/one-focus.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableExporterModule } from 'mat-table-exporter';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    LoginComponent,
    AdConfComponent,
    AdSourceComponent,
    OneFocusComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    FormsModule,
    HttpClientModule,

    MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule,
    MatIconModule, MatTableModule, MatDialogModule, MatSnackBarModule,
    MatDatepickerModule, MatNativeDateModule, MatSelectModule,
    MatTableExporterModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        allowedDomains: environment.allowedDomains,
        headerName: 'Authorization',
        authScheme: 'Bearer ',
        throwNoTokenError: false,
        disallowedRoutes: [/\/login/g]
      }
    }),
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: HTTP_INTERCEPTORS, useClass: BackstageInterceptor, multi: true},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, disableClose: true}},
    {provide: MAT_DATE_LOCALE, useValue: 'zh-cn'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
