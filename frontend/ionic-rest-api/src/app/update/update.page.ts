import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { PeliculaCrudService } from './../services/pelicula-crud.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {

  updatePeliculaFg: FormGroup;
  id: any;

  constructor(
    private peliculaCrudService: PeliculaCrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchPelicula(this.id);
    this.updatePeliculaFg = this.formBuilder.group({
      titulo: [''],
      fecha: ['']
    })
  }

  fetchPelicula(id) {
    this.peliculaCrudService.getPelicula(id).subscribe((data) => {
      this.updatePeliculaFg.setValue({
        titulo: data['titulo'],
        fecha: data['fecha']
      });
    });
  }

  onSubmit() {
    if (!this.updatePeliculaFg.valid) {
      return false;
    } else {
      this.peliculaCrudService.updatePelicula(this.id, this.updatePeliculaFg.value)
        .subscribe(() => {
          this.updatePeliculaFg.reset();
          this.router.navigate(['/list']);
        })
    }
  }

}