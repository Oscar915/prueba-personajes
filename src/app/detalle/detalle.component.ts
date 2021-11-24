import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { infoPerson } from '../models/personaje.model';
import { PersonajeService } from '../services/personaje.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id: number=0;

  personaje!: infoPerson;

  constructor(private rutaActiva: ActivatedRoute, private personajeService: PersonajeService) { }

  ngOnInit(): void {
    
    this.rutaActiva.params.subscribe(({ id }) => {
      this.id = id;
    })
    this.buscarPersonaje(this.id);
  }

  buscarPersonaje(iden:number){
    this.personajeService.traerUnPersonaje(iden).subscribe((data:any) => {
      this.personaje = data
    })
  }

}
