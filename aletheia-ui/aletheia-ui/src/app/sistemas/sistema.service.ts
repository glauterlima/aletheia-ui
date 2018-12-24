import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SistemaService {

  sistemasUrl = 'http://localhost:8080/sistemas';

  constructor(private http: Http) { }

  listarTodos(): Promise<any> {
    const headers = new Headers();
    // tslint:disable-next-line:max-line-length
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTQ1NjcxMzg1LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9ERU1BTkRBIiwiUk9MRV9SRU1PVkVSX1NJU1RFTUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX0NBREFTVFJBUl9TSVNURU1BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0RFTUFOREEiLCJST0xFX1JFTU9WRVJfREVNQU5EQSIsIlJPTEVfUkVNT1ZFUl9MT1RFIiwiUk9MRV9DQURBU1RSQVJfUEVTU09BIiwiUk9MRV9QRVNRVUlTQVJfU0lTVEVNQSIsIlJPTEVfQ0FEQVNUUkFSX0xPVEUiLCJST0xFX1BFU1FVSVNBUl9MT1RFIl0sImp0aSI6IjU1YTZiOTQxLWMyMzItNGEwZS04NzIwLTE1ZGFlYTc2Zjc2ZCIsImNsaWVudF9pZCI6ImFuZ3VsYXIifQ.6xlayzRNv2Jb5riV9HyXyqRarqFnkNRRsQhMuaFj8dc');

    return this.http.get(this.sistemasUrl, { headers })
    .toPromise()
    .then(response => response.json());
  }

}
