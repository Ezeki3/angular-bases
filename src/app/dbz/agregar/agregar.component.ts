import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  // con el @Input le indicamos que vamos recibir elementos del componente padre

  @Input() nuevo: Personaje = {
    nombre: ' ',
    poder: 0
  }

  constructor(
    private dbzService: DbzService
  ) {}

  // con Output mandamos informacion del hijo al padre
  // este onNuevoPersonaje emite Personaje
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevo);

    // this.onNuevoPersonaje.emit(this.nuevo)

    // agregamos personajes que se reciben en nuevo con el push a personajes
    // this.personajes.push(this.nuevo);
    // inicializamos en 0 de nuevo los inputs 
    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

  onDelete(index:number){
    console.log('Eliminar:', index );
  }
  
}
