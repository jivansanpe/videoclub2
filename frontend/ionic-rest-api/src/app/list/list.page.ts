import { Component, OnInit } from '@angular/core';
import { PeliculaCrudService } from './../services/pelicula-crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})

export class ListPage implements OnInit {

  Peliculas: any = [];

  constructor( 
    private peliculaCrudService: PeliculaCrudService) { }

  ngOnInit() {  }

  ionViewDidEnter() {
    this.peliculaCrudService.getPeliculas().subscribe((response) => {
      this.Peliculas = response;
      console.log(response)
    })
  }

  removePelicula(pelicula) {
    if (window.confirm('¿Estás seguro?')) {
      this.peliculaCrudService.deletePelicula(pelicula.id)
      .subscribe(() => {
          this.ionViewDidEnter();
          console.log('¡Película eliminada!')
        }
      )
    }
  }

}