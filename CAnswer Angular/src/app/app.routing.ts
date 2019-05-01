import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { InfoCenterComponent } from './info-center/info-center.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import {PostUpdateComponent} from'./post-update/post-update.component'
import{ ForumComponent} from './forum/forum.component';
import { UpdatesComponent} from './updates/updates.component';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path : 'about', component : AboutComponent},
    {path: 'updates',component : UpdatesComponent},
    {path : 'treatments', component : TreatmentsComponent},
    {path: 'forum',component : ForumComponent},
    {path : 'InfoCentre', component : InfoCenterComponent},
    {path:"account",component: AccountComponent},
    {path:"register" , component: RegisterComponent},
    {path: "PostUpdate", component: PostUpdateComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);