import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  // constructor() {
  // }

  // para inicializar cosas: ejemplo, hacer una peticion a algun servicio y se trae la informacion
  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }

  heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk', 'Batman'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    // como en determinado momento devuelve undefined, con || le indicamos que devuelva un elemento vacio
    this.heroeBorrado = this.heroes.pop() || '';

  }

}
