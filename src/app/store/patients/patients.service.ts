import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Patient } from "../../shared/models/patient.model";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PatientsService {
  constructor(private http: HttpClient) {
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<{ patient: Patient[] }>("https://api.mocki.io/v2/51597ef3").pipe(
      map(({patient}) => patient),
    );
  }
}
