import {HttpClient} from '@angular/common/http';
import {Data} from '../model/data';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://www.server.com/data/save';

  constructor(private http: HttpClient) {
  }

  save(dataForm: Data) {
    alert('Your data has been successfully saved!');
    return this.http.post(`${this.url}`, dataForm);
  }
}
