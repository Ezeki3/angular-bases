import { Component } from '@angular/core';
import { } from '../main-page/main-page.component'
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  // @Input()
  // personajes: any[] = [];

  get personajes() {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {

  }

  onDeleteCharacter(index:number):void{
    // TODO: Emitir el id del personaje
    console.log(index);
    
  }
}
