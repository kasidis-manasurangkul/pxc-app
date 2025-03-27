import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {
    constructor(private router: Router) { }
    bookList = [
      { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', wishList: true, stars: 4, image: 'assets/icons/main-icon.svg' },
      { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien', wishList: true, stars: 5, image: 'assets/icons/main-icon.svg' },
      { id: 3, title: 'The Da Vinci Code', author: 'Dan Brown', wishList: true, stars: 3, image: 'assets/icons/main-icon.svg' },
      { id: 4, title: 'The Alchemist', author: 'Paulo Coelho', wishList: true, stars: 4, image: 'assets/icons/main-icon.svg' },
      { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', wishList: true, stars: 2, image: 'assets/icons/main-icon.svg' },
      { id: 6, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', wishList: true, stars: 5, image: 'assets/icons/main-icon.svg' },
    ]
    backup = [
      { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', wishList: true, stars: 4, image: 'assets/icons/main-icon.svg' },
      { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien', wishList: true, stars: 5, image: 'assets/icons/main-icon.svg' },
      { id: 3, title: 'The Da Vinci Code', author: 'Dan Brown', wishList: true, stars: 3, image: 'assets/icons/main-icon.svg' },
      { id: 4, title: 'The Alchemist', author: 'Paulo Coelho', wishList: true, stars: 4, image: 'assets/icons/main-icon.svg' },
      { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', wishList: true, stars: 2, image: 'assets/icons/main-icon.svg' },
      { id: 6, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', wishList: true, stars: 5, image: 'assets/icons/main-icon.svg' },
    ]
  bookSearch: String = ''
 
 
     addToWishlist(bookId: number) {
         // seach for book with id
         const book = this.bookList.find(book => book.id === bookId)
         if (book) {
             book.wishList = !book.wishList
         }
         
     }
 
     rateBook(bookId: number, stars: number) {
         const book = this.bookList.find(book => book.id === bookId);
         if (book) {
             book.stars = stars;
         }
     }

     navigateToLibrary() {
         // navigate to library page
         this.router.navigate(['/library'])
     }
 
     navigateToRecommend() {
         this.router.navigate(['/recommendation'])
     }
 
     navigateToSettings() {
         // navigate to library page
         this.router.navigate(['/settings'])
    }

    searchBook() {
        // filter out books that don't match search
        this.bookList = this.
        
        backup.filter(book => book.title.toLowerCase().includes(this.bookSearch.toLowerCase()))
    }

    selectedSort: string = '';

    onSortChange(event: any) {
        const value = event.target.value;
        console.log('Sort changed:', value);

        // Call sort function here
        this.sortBooks(value);
    }

    sortBooks(criteria: string) {
        switch (criteria) {
            case 'az':
                this.bookList.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'za':
                this.bookList.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'popularity':
                break;
            case 'rating':
                this.bookList.sort((a, b) => b.stars - a.stars);
                break;
        }
    }



  
 





    
    
    

    

    

    
}
