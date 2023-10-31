import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-imagenes',
  templateUrl: './lista-imagenes.component.html',
  styleUrls: ['./lista-imagenes.component.css'],
})
export class ListaImagenesComponent implements OnInit {
  images: any[] = [
    {
      title: 'Titanic',
      description: 'Un épico romance y drama dirigido por James Cameron.',
      url: 'https://i.pinimg.com/564x/ab/2a/7d/ab2a7ddf9ecf2b7b7522605bf42ab7cb.jpg',
    },
    {
      title: 'Star Wars: Una Nueva Esperanza',
      description:
        'La película que comenzó la saga de Star Wars, dirigida por George Lucas.',
      url: 'https://sm.ign.com/ign_es/movie/s/star-wars-/star-wars-episodio-iv_y2kx.jpg',
    },
    {
      title: 'Barrenderos Espaciales',
      description:
        'Aventuras espaciales de valientes barrenderos luchando contra amenazas en la galaxia.',
      url: 'https://i.pinimg.com/564x/33/34/48/333448bdd42f1ecd97d63b45e6804b32.jpg',
    },
    {
      title: 'Avatar',
      description:
        'Una película de ciencia ficción dirigida por James Cameron.',
      url: 'https://i.pinimg.com/564x/4e/7f/67/4e7f6730c97ad17d59ec5273222810eb.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
