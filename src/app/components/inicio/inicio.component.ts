import { Component, OnInit } from '@angular/core';
import {ClientesService, Clientes} from '../../services/clientes.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

//variable
  ListarClientes: Clientes[] | undefined ;

  constructor(private ClientesService:ClientesService ,private router:Router) { }

 
  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes()
  {
    this.ClientesService.getClientes().subscribe(
      res=>{
        console.log(res);
        this.ListarClientes=<any>res;
      },
      err => console.log(err)
    );
  }

  eliminar(id?:string)
  {
    
    this.ClientesService.deleteClientes(id).subscribe(
      res=>{
        console.log('Cliente Eliminado Correctamente !!');
        this.listarClientes();
      },
      err=> console.log(err)
      );
  }

 
   
}
