import { Component } from '@angular/core';
import { ProductosForm } from 'src/app/shared/formsModels/productosForms';
import { ProductosService } from 'src/app/shared/services/productos.service';

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.scss'],
})
export class AdminProductosComponent {
  titulo = 'Crear Producto';
  constructor(public productoForm: ProductosForm, private srvProductos: ProductosService) {}

guardar(){
  if(this.productoForm.baseForm.valid){

  }
}

}
