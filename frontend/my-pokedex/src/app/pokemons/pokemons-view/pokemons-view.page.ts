import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-pokemons-view',
  templateUrl: './pokemons-view.page.html',
  styleUrls: ['./pokemons-view.page.scss'],
})
export class PokemonsViewPage implements OnInit {
pokemon:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private memberService: PokemonService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        const id = data.get('id');

        this.memberService.getPokermonById(id).subscribe(
          response => {
            console.log(response);
            this.pokemon = response
          },
          error => {
            console.error(error);
          }
        )
      }
    );
  }

}
