import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  ngOnInit(): void {
  }


  nuevo: Personaje = {
    nombre: 'roshi',
    poder: 100
  }

  constructor() {}

  onDeleteCharacter(nuevo:any){
    // this.nuevo.splice(nuevo)
  }
}
