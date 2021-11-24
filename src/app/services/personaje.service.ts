import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private http:HttpClient) { }

  traerPersonajes(){
    return this.http.get('https://rickandmortyapi.com/api/character')
  }
  
  traerUnPersonaje(id:number){
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`)
  }
}
