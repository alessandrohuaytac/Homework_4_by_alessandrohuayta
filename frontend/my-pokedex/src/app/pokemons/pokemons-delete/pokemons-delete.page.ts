import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-pokemons-delete',
  templateUrl: './pokemons-delete.page.html',
  styleUrls: ['./pokemons-delete.page.scss'],
})
export class PokemonsDeletePage implements OnInit {
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.id = data.get('id');
      }
    );
  }

  deletePokemon(id:any){
    this.pokemonService.deletePokemon(id).subscribe(
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
