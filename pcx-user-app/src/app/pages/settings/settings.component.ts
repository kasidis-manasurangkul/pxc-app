import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

    constructor(private router: Router) { }

    navigateToLibrary() {
        this.router.navigate(['/library'])
    }

    navigateToRecommend() {
        this.router.navigate(['/recommendation'])
    }

    navigateToBrowse() {

    }

    navigateToSignIn() {
        this.router.navigate(['/sign-in'])
    }

    onExport() {
        console.log('export user data');
    }

    onDelete() {
        console.log('delete user data');
    }

    onLogout() {
        this.navigateToSignIn();
    }
}
