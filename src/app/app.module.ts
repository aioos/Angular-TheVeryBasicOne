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

    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        allowedDomains: ['localhost:3010', '13.125.235.191:8888', 'watermelonapi.com'],
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
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, disableClose: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
