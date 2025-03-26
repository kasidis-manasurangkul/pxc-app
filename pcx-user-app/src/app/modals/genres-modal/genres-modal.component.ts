import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GenresModaService } from './genres-moda.service';

@Component({
    selector: 'app-genres-modal',
    templateUrl: './genres-modal.component.html',
    styleUrls: ['./genres-modal.component.css']
})
export class GenresModalComponent {
    constructor(
        public dialogRef: MatDialogRef<GenresModalComponent>,
        private genresModalServ: GenresModaService
    ) { }

    ngOnInit() {
    }

    genres = ['Fiction', 'Fantasy', 'Sci-Fi', 'Mystery', 'Romance', 'Non-fiction', 'Thriller', 'Horror', 'Drama', 'Fantasy'];
    selectedGenres: string[] = [];

    toggleGenre(genre: string) {
        const index = this.selectedGenres.indexOf(genre);
        if (index === -1) {
            this.selectedGenres.push(genre);
        } else {
            this.selectedGenres.splice(index, 1);
        }
    }


    /**
 * Function to handle the "Done" button click.
 * @return void
 */
    doneButtonFunction() {
        this.dialogRef.close(this.selectedGenres);

    }
}
