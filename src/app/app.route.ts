import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';

let ROUTES: Routes = [
  { path: 'sign-up', component: SignUpComponent},
  { path: 'user', component: UserProfileComponent},
  { path: '', component: UserProfileComponent}
];

export { ROUTES };