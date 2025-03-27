import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {

    constructor(private router: Router) {}
    bookList = [
        { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', wishList: true, stars: 4, image: 'assets/icons/main-icon.svg'},
        { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien', wishList: true, stars: 5, image: 'assets/icons/main-icon.svg'},
        { id: 3, title: 'The Da Vinci Code', author: 'Dan Brown', wishList: true, stars: 3, image: 'assets/icons/main-icon.svg'},
        { id: 4, title: 'The Alchemist', author: 'Paulo Coelho', wishList: true, stars: 4, image: 'assets/icons/main-icon.svg'},
        { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', wishList: true, stars: 2, image: 'assets/icons/main-icon.svg'},
        { id: 6, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', wishList: true, stars: 5, image: 'assets/icons/main-icon.svg'},
    ]
    backup = [
        { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', wishList: true, stars: 4, image: 'assets/icons/main-icon.svg'},
        { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien', wishList: true, stars: 5, image: 'assets/icons/main-icon.svg'},
        { id: 3, title: 'The Da Vinci Code', author: 'Dan Brown', wishList: true, stars: 3, image: 'assets/icons/main-icon.svg'},
        { id: 4, title: 'The Alchemist', author: 'Paulo Coelho', wishList: true, stars: 4, image: 'assets/icons/main-icon.svg'},
        { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', wishList: true, stars: 2, image: 'assets/icons/main-icon.svg'},
        { id: 6, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', wishList: true, stars: 5, image: 'assets/icons/main-icon.svg'},
    ]
    page: String = 'rating'
    bookSearch: String = ''
    

    changePage(page: String) {
        if (page === 'wishlist') {
            this.page = 'wishlist'
        }
        else {
            this.page = 'rating'
        }
    }

    searchBook() {
        // filter out books that don't match search
        this.bookList = this.backup.filter(book => book.title.toLowerCase().includes(this.bookSearch.toLowerCase()))
    }

    rateBook(bookId: number, stars: number) {
        const book = this.bookList.find(book => book.id === bookId);
        if (book) {
            book.stars = stars;
        }
    }

    addToWishlist(bookId: number) {
        // seach for book with id
        const book = this.bookList.find(book => book.id === bookId)
        if (book) {
            book.wishList = !book.wishList
        }

        // filter out wishlist books
        this.bookList = this.bookList.filter(book => book.wishList === true)
        
    }

    navigateToRecommend() {
        // navigate to Recommend page
        this.router.navigate(['/recommendation'])
    }

    navigateToBrowse() {
        // navigate to Browse page
        this.router.navigate(['/browse'])
    }

    navigateToSettings() {
        // navigate to Settings page
        this.router.navigate(['/settings'])
    }

    
}
