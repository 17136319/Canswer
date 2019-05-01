import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Article } from '@app/_models/article';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Article[]>(`${environment.apiUrl}/users`);
}

getById(id: number) {
    return this.http.get(`${environment.apiUrl}/users/${id}`);
}

addPost(article: Article) {
    return this.http.post(`${environment.apiUrl}/users/AddPost`, article);
}

update(article: Article) {
    return this.http.put(`${environment.apiUrl}/users/${article.id}`, article);
}

delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
}
}
