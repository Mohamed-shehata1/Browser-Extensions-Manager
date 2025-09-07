import { IExtension } from './models/extension';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ExtensionService {
  private url = "http://localhost:3000/extensions";
  constructor(private http: HttpClient) {}

  getAllExtensions(): Observable<IExtension[]> {
    return this.http.get<IExtension[]>(this.url);
  }
}
