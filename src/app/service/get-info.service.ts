import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

  httpOption: any;
  url: 'http://108.160.133.232:3000/api/courses';
  id: '2';
  constructor(private http: HttpClient) {
    this.httpOption = {
      header: new HttpHeaders({
        'x-rapidapi-host': 'free-football-soccer-videos.p.rapidapi.com',
        'x-rapidapi-key': '4ffed62733mshea18de11c1a5055p1a2f6fjsnd7b085be0676'
      })
    };
  }
  getInfor(): Observable<any> {
    return this.http.get<any>('http://108.160.133.232:3000/api/courses');
  }

  getPost(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getPostDetail(userID: string): Observable<any> {
    const params = new HttpParams().set('id', userID);
    return this.http.get('https://jsonplaceholder.typicode.com/posts/', {params});
  }
}
