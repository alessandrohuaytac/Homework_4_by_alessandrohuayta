import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-pokemons-edit',
  templateUrl: './pokemons-edit.page.html',
  styleUrls: ['./pokemons-edit.page.scss'],
})
export class PokemonsEditPage implements OnInit {
  pokemonsForm: FormGroup;
  pokemon: any;
  id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.pokemonsForm = this.formBuilder.group({
      id: [''],
      pokemon_name: [''],
      altura: [''],
      categoria: [''],
      peso: [''],
      habilidad:[''],
      tipo: [''],
      url:['']
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.id = data.get('id');

        this.pokemonService.getPokermonById(this.id).subscribe(
          response => {
            console.log(response);
            this.pokemon = response
            this.pokemonsForm.patchValue(response);
          },
          error => {
            console.error(error);
          }
        )
      }
    );
  }

  savePokemon(pokemon: any) {
    this.pokemonService.updatePokemon(this.id, pokemon).subscribe(
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
