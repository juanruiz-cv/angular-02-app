import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../service/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes: Array<any> = [];
  termino: string;

  constructor( private activateRoute: ActivatedRoute, private _HEROESSERVICE: HeroesService) { }
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      this.termino =  params.termino;

      this.heroes = this._HEROESSERVICE.buscarHeroes( params.termino);
      console.log(this.heroes);
    });
  }

}
