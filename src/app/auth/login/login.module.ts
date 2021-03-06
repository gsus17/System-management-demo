import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { AuthApiModule } from 'src/api/auth/auth-api.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    TranslateModule,
    LoginRoutingModule,
    AngularMaterialModule,
    AuthApiModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
