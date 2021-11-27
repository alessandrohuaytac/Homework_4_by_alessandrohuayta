import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService{

  constructor(
    private http:HttpClient
  ) { }

  getPokemons(){
    return this.http.get<any>('http://localhost:3000/pokemons');
  }
  
  getPokermonById(id:any){
    return this.http.get<any>(`http://localhost:3000/pokemons/${id}`);
  }

  insertPokemon(pokemons:any){
    return this.http.post<any>('http://localhost:3000/pokemons/', pokemons);
  }

  updatePokemon(id:any, pokemons:any){
    return this.http.put<any>(`http://localhost:3000/pokemons/${id}`, pokemons);
  }

  deletePokemon(id:any){
    return this.http.delete<any>(`http://localhost:3000/pokemons/${id}`);
  }

}
