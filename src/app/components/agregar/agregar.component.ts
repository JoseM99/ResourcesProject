import { Component, OnInit } from '@angular/core';
import {Clientes , ClientesService} from '../../services/clientes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  cliente : Clientes={
    id:'',
    fechaEmision:'',
    cliente: '',
    direccion: '',
    ruc:'',
    tipoMoneda:'',
  }

  constructor(private ClientesService:ClientesService , private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    delete this.cliente.id;
    this.ClientesService.addClientes(this.cliente).subscribe();
    this.router.navigate(['/inicio'])
  }
}
