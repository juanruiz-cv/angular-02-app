import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../service/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor( private _HEROESSERVICE: HeroesService, private router: Router ) {
      /* console.log('constructor'); */
   }

  ngOnInit(): void {
    this.heroes = this._HEROESSERVICE.getHeroes();
    /* console.log(this.heroes); */
  }
  // tslint:disable-next-line: typedef
  verHeroe( idx: number ){
    this.router.navigate( ['/heroe', idx] );
  }

}
