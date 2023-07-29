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

  guardar(): void {
    if (this.productoForm.baseForm.valid) {
      this.srvProductos.guardar(this.productoForm.baseForm.value).subscribe(
        (dato) => {
          alert('Se guardo correctamente');
        },
        (error) => {
          alert('Error al guardar');
        }
      );
    }
  }
}