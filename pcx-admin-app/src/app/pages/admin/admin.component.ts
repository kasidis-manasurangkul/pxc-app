import { Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  activeTab: string = 'book';
  searchQuery: string = '';
  selectedRow: any;

  // Book and User data
  books = [
    { id: 1, title: 'Harry Potter', author: 'J.K. Rowling' },
    { id: 2, title: 'Lord of the Rings', author: 'J.R.R. Tolkien' },
    { id: 3, title: '1984', author: 'George Orwell' }
  ];

  users = [
    { id: 1, username: 'johndoe'},
    { id: 2, username: 'janedoe'}
  ];

  // Change active tab
  setTab(tab: string): void {
    this.activeTab = tab;
    this.searchQuery = ''; // reset search when switching
  }

  onRowClick(book: any) {
    this.selectedRow = book;
    // Add your click handling logic here
    // Example: this.router.navigate(['/books', book.id]);
  }

  deleteUser() {
    // Add your delete user logic here
    console.log('Delete user clicked');
    // You might want to get the selected user from your table
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

