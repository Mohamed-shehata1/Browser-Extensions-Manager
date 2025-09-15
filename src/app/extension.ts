import { IExtension } from './models/extension';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ExtensionService {
  private url = "/db.json";
  constructor(private http: HttpClient) {}

  getAllExtensions(): Observable<IExtension[]> {
    return this.http.get<{ extensions: IExtension[] }>(this.url).pipe(
      map(data => data.extensions)
    );
  }
}
