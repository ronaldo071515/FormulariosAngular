import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Ronaldo',
    favoritos: [
      {
        id: 1,
        nombre: 'Halo'
      },
      {
        id: 2,
        nombre: 'Free Fire'
      },
    ]
  }

  guardar() {
    console.log('Post del formulario')
  }

  eliminar( index: number ) {
    this.persona.favoritos.splice(index, 1);
  }

  agregarJuego() {
    const juegoFav: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    };
    this.persona.favoritos.push( { ...juegoFav } );
    this.nuevoJuego = '';
  }

}
