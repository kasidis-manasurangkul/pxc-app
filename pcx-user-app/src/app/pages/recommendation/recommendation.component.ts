import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GenresModaService } from 'src/app/modals/genres-modal/genres-moda.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent {

    constructor(private router: Router, private genresService: GenresModaService) {}
    bookList = [
        { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', wishList: false, stars: 4, image: 'assets/icons/main-icon.svg'},
        { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien', wishList: false, stars: 5, image: 'assets/icons/main-icon.svg'},
        { id: 3, title: 'The Da Vinci Code', author: 'Dan Brown', wishList: false, stars: 3, image: 'assets/icons/main-icon.svg'},
        { id: 4, title: 'The Alchemist', author: 'Paulo Coelho', wishList: false, stars: 4, image: 'assets/icons/main-icon.svg'},
        { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', wishList: false, stars: 2, image: 'assets/icons/main-icon.svg'},
        { id: 6, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', wishList: false, stars: 5, image: 'assets/icons/main-icon.svg'},
    ]

    ngOnInit() {
        this.openGenresModal();
    }

    openGenresModal() {
        this.genresService.openModal().subscribe({
            next: (data: any) => {
                if (data) {
                    console.log(data)
                }
            }
        });
    }

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
}
