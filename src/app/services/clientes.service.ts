import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
 
  private url = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getClientes()
  {
    return this.http.get(this.url);
  }

  getUnCliente(id:string){
    return this.http.get(this.url+'/'+id)
  }

  addClientes(clientes:Clientes){
    return this.http.post(this.url, clientes);
  }

  deleteClientes(id?:string){
    return this.http.delete(this.url+'/'+id);
  }

  editClientes(id:string ,clientes:Clientes){
    return this.http.put(this.url+'/'+id,clientes);
  }
}

export interface Clientes {

  id?:string;
  fechaEmision?:string;
  cliente?: string;
  direccion?: string;
  ruc?:string;
  tipoMoneda?:string;
}
