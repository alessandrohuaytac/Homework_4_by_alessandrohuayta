import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/_services/pokemons.service';


@Component({
  selector: 'app-pokemons-create',
  templateUrl: './pokemons-create.page.html',
  styleUrls: ['./pokemons-create.page.scss'],
})
export class PokemonsCreatePage implements OnInit {
  pokemonsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pokemonService: PokemonService,
    private router: Router
  ) {
    this.pokemonsForm = this.formBuilder.group({
      pokemon_name: [''],
      altura: [''],
      categoria: [''],
      peso: [''],
      habilidad:[''],
      tipo: [''],
      url:['']
    });
  }

  ngOnInit(){
  }

  addPokemon(values: any){
    this.pokemonService.insertPokemon(values).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/pokemons']);
      },
      error => {
        console.error(error);
      }
    );
  }

}
