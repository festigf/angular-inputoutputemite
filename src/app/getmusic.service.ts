import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({  providedIn: 'root'})
export class GetMusicService {

  constructor(private http:HttpClient) { }

  getMusic(){
    return this.http.get('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json');//'   https://api.github.com/users/hadley/repos');//http://storage.googleapis.com/automotive-media/music.json')
  } 

}