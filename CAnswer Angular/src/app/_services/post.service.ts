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
    return this.http.get<Article[]>(`${environment.apiUrl}/article`);
}

getById(id: number) {
    return this.http.get(`${environment.apiUrl}/article/${id}`);
}

addPost(article: Article) {
    return this.http.post(`${environment.apiUrl}/article/createPost`, article);
}

update(article: Article) {
    return this.http.put(`${environment.apiUrl}/article/${article.id}`, article);
}

delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/article/${id}`);
}
}
