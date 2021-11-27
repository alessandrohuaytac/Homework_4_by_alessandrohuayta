import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../_services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit {
  pokemons:any[];

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void{
  }

  ionViewWillEnter(): void {
    this.pokemonService.getPokemons().subscribe(data =>{
      this.pokemons = data;
    })
  }
  
}
