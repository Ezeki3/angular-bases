import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";
import { v4 as uuid} from 'uuid'

@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      // id: uuid(),
      nombre: 'Goku',
      poder: 15000
    },
    {
      id: uuid(),
      nombre: 'Vegeta',
      poder: 8000
    }
  ];
  

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() { }

  onNewCharacter(character:Personaje):void{
    const newCharacter:Personaje = {id:uuid(), ...character};

    this._personajes.push(newCharacter);
  }

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }

  onDelete(index:number){
    this._personajes.splice(index,1);
    console.log(index)
  }
  
  // deletePersonajeById(id:string){
  //   console.log(id)
  //   this._personajes = this._personajes.filter(personaje => personaje.id !== id)
  // }
  
  
}