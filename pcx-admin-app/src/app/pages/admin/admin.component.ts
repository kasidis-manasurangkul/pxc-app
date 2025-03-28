import { Component, ViewChild, ElementRef,} from '@angular/core';
import { Router } from '@angular/router';
import { AddAdminModalService } from 'src/app/modals/add-admin-modal/add-admin-modal.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  
  activeTab: string = 'book';
  searchQuery: string = '';
  selectedBook: any = null;
  selectedUser: any = null;
  filteredBooks: any[] = [];
  filteredUsers: any[] = [];

  // Book and User data
  books = [
    { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', status: 'Hidden'},
    { id: 2, title: 'Lord of the Rings', author: 'J.R.R. Tolkien', status: 'Active'},
    { id: 3, title: '1984', author: 'George Orwell',status: 'Active' }
  ];

  users = [
    { id: 1, username: 'johndoe' },
    { id: 2, username: 'janedoe' }
  ];

  logout() {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      // Clear login/session state (example)
      localStorage.removeItem('authToken');
      sessionStorage.clear();

      // Navigate to login page
      this.navigateToLogin();

      console.log('Logout successful.');
    } else {
      console.log('Logout canceled.');
    }
  }

  navigateToLogin() {
    this.router.navigate(['/sign-in'])
  }
  
  constructor(private router: Router, private addAdminModalServe: AddAdminModalService) {
    this.filteredBooks = [...this.books];
    this.filteredUsers = [...this.users];
  }

  onBookRowClick(book: any) {
    this.selectedBook = book;
    console.log('Book selected:', book);
  }

  onUserRowClick(user: any) {
    this.selectedUser = user;
    console.log('User selected:', user);
  }

  // Change active tab
  setTab(tab: string): void {
    this.activeTab = tab;
    this.searchQuery = ''; 
  }

  onSearch(): void {
    const query = this.searchQuery.toLowerCase().trim();

    if (this.activeTab === 'book') {
      this.filteredBooks = this.books.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
      );
    } else {
      this.filteredUsers = this.users.filter(user =>
        user.username.toLowerCase().includes(query) 
      );
    }
  }

  deleteUser() {
    if (this.selectedUser) {
      const confirmDelete = window.confirm(`Are you sure you want to delete user "${this.selectedUser.username}"?`);

      if (confirmDelete) {
        this.users = this.users.filter(user => user.id !== this.selectedUser.id);
        this.filteredUsers = [...this.users];
        this.selectedUser = null;
        console.log('User deleted.');
      } else {
        console.log('User deletion canceled.');
      }
    }
  }

  addAdmin() {
    this.addAdminModalServe.openModal().subscribe({
      next: (data: any) => {
        this.router.navigate(['/'])
        if (data) {
          this.users.push({ id: this.users.length + 1, username: data });
          this.filteredUsers = [...this.users];
          console.log('Admin added:', data);
        }
      },
      error: (err: any) => {
        alert("Failed to sign up")
      }
    })
  }

  

  


  isTableVisible = true;

  @ViewChild('tableContainer') tableContainer!: ElementRef;
  @ViewChild('hideButton') hideButton!: ElementRef;
  @ViewChild('showButton') showButton!: ElementRef;

  get isSelectedBookHidden(): boolean {
    return this.selectedBook?.status === 'Hidden';
  }

  toggleBookStatus() {
    if (this.selectedBook) {
      this.selectedBook.status = this.selectedBook.status === 'Active' ? 'Hidden' : 'Active';

      const index = this.books.findIndex(b => b.id === this.selectedBook.id);
      if (index !== -1) {
        this.books[index].status = this.selectedBook.status;
      }

      this.onSearch();
    }
  }

}

