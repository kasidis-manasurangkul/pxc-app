import { Component, ViewChild, ElementRef} from '@angular/core';

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

  constructor() {
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
    console.log('Delete user clicked');
  }


  isTableVisible = true;

  @ViewChild('tableContainer') tableContainer!: ElementRef;
  @ViewChild('hideButton') hideButton!: ElementRef;
  @ViewChild('showButton') showButton!: ElementRef;

  toggleTable() {
    this.isTableVisible = !this.isTableVisible;

    if (this.tableContainer && this.hideButton && this.showButton) {
      this.tableContainer.nativeElement.style.display = this.isTableVisible ? 'block' : 'none';
      this.hideButton.nativeElement.style.display = this.isTableVisible ? 'flex' : 'none';
      this.showButton.nativeElement.style.display = this.isTableVisible ? 'none' : 'flex';
    }
  }
}

