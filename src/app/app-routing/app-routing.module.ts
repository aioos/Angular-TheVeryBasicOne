import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../@component/dashboard/dashboard.component';
import { LoginComponent } from '../@component/login/login.component';
import { AuthGuard } from '../@guard/auth.guard';
import { AdConfComponent } from '../@component/ad-conf/ad-conf.component';
import { AdSourceComponent } from '../@component/ad-source/ad-source.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'adConf', component: AdConfComponent, canActivate: [AuthGuard]},
  {path: 'adSource', component: AdSourceComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
