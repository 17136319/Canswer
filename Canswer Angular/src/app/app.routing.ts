﻿import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import{ForumComponent} from './forum/forum.component';
import {UpdatesComponent} from './updates/updates.component';
import { AuthGuard } from './_guards';
import { PostUpdateComponent } from './post-update/post-update.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path : 'about', component : AboutComponent},
    {path: 'updates',component : UpdatesComponent},
    {path: 'forum',component : ForumComponent},
    {path:"account",component: AccountComponent},
    {path:"register" , component: RegisterComponent},
    {path: "postUpdate", component: PostUpdateComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);