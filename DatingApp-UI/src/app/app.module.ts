import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
// import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { AlertifyService } from './services/alertify.service';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { MemberListsComponent } from './members/member-lists/member-lists.component';
import { routes } from './routes';
import { MemberCardsComponent } from './members/member-cards/member-cards.component';
import { UserService } from './services/user.service';
import { TokeninterceptorService } from './services/tokeninterceptor.service';

// export function tokenGetter() {
//    return localStorage.getItem('token');
// }

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MessagesComponent,
      ListsComponent,
      MemberListsComponent,
      MemberCardsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(routes),
      // JwtModule.forRoot({
      //    config: {
      //       tokenGetter,
      //       whitelistedDomains: ['localhost:5000'],
      //       blacklistedRoutes: ['localhost:5000/api/auth']
      //    }
      // })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      UserService,
      {
         provide: HTTP_INTERCEPTORS,
         useClass: TokeninterceptorService,
         multi: true
      }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
