import { Component, OnInit } from '@angular/core';
import { infoPerson } from '../models/personaje.model';
import { PersonajeService } from '../services/personaje.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  personajes: infoPerson[]=[];

  constructor(private personajeService: PersonajeService) { }

  ngOnInit(): void {
    this.traerPersonajes();
  }

  traerPersonajes(){
    this.personajeService.traerPersonajes().subscribe((data:any) => {
      this.personajes=data.results;
     
    })
  }
}
