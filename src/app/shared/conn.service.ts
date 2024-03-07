import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BooleanService} from "./boolean.service";

@Injectable({
  providedIn: 'root',
})
export class ConnService {

  constructor(private http: HttpClient, private boolService: BooleanService) { }

  login() {}

  logout() {}
}
