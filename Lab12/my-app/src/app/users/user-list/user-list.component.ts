import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' },
  ];

  constructor(private router: Router) {}

  showDetails(user: any): void {
    console.log('Selected User:', user);

    if (user && user.id) {
      this.router.navigate(['/users', user.id], { state: { user } });
    } else {
      console.error('Invalid user or user id.');
    }
  }

  ngOnInit(): void {}
}
