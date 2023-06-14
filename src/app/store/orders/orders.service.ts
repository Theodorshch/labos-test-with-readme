import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Order } from "../../shared/models/order.model";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  constructor(private http: HttpClient) {
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<{ order: Order[] }>("https://api.mocki.io/v2/79fb05cb").pipe(
      map(({order}) => order),
    );
  }
}
