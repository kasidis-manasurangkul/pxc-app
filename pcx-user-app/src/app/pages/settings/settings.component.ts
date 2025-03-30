import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/http/auth/auth.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

    constructor(private router: Router, private authServ: AuthService) { }

    navigateToLibrary() {
        this.router.navigate(['/library'])
    }

    navigateToRecommend() {
        this.router.navigate(['/recommendation'])
    }

    navigateToBrowse() {
        this.router.navigate(['/browse'])
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
        this.authServ.signout().subscribe({
            next: (response: any) => {
                localStorage.removeItem('token');
                this.router.navigate(['/sign-in']);
            },
            error: (err: any) => {
                console.error('Logout error:', err);
            },
            complete: () => {
            }
        })
    }
}
