import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListsComponent } from './members/member-lists/member-lists.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGaurd } from './auth/authgaurd';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGaurd],
    children: [
      {path: 'messages', component: MessagesComponent},
      {path: 'memberlists', component: MemberListsComponent},
      {path: 'lists', component: ListsComponent}
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
