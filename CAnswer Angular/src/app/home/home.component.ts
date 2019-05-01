import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
// import { Router, ActivatedRoute } from '@angular/router';

import { User } from '@app/_models';
// import { article } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import { Article } from '@app/_models/article';
import { PostService } from '@app/_services/post.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    posts: Article[] = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService, 
        private postService: PostService
        // private router: Router
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        this.loadAllUsers();
        this.loadAllposts();
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }

    private loadAllposts(){
        this.postService.getAll().pipe(first()).subscribe(posts =>{
            this.posts = posts;
        });
    }
    
}
