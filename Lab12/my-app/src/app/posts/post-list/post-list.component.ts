import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts = [
    {
      id: 1,
      title: 'Viaje a París',
      content: 'Descubriendo la Ciudad de la Luz',
    },
    {
      id: 2,
      title: 'Recetas de Cocina Saludable',
      content: 'Ideas deliciosas para comer bien',
    },
    {
      id: 3,
      title: 'Aventuras en la Montaña',
      content: 'Explorando la naturaleza y superando desafíos',
    },
  ];

  constructor(private router: Router) {}

  showPostDetails(postId: number): void {
    const post = this.posts.find((p) => p.id === postId);

    if (post) {
      this.router.navigate(['/posts', post.id], { state: { post } });
    } else {
      console.error('Invalid post or post id.');
    }
  }

  ngOnInit(): void {}
}
