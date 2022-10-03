import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { PeliculaCrudService } from './../services/pelicula-crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {

  peliculaForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private peliculaCrudService: PeliculaCrudService
  ) { }

  ngOnInit() {
    this.peliculaForm = this.formBuilder.group({
      titulo: [''],
      fecha: ['']
    })
  }

  onSubmit() {
    if (!this.peliculaForm.valid) {
      return false;
    } else {
      this.peliculaCrudService.createPelicula(this.peliculaForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.peliculaForm.reset();
            this.router.navigate(['/list']);
          })
        });
    }
  }

}