import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    signinForm = {
        username: '',
        password: '',
        confirmPassword: ''
    };

    isChecked: boolean = false;
    formSubmitted: boolean = false;

    isPasswordEmpty: boolean = false;
    isUsernameEmpty: boolean = false;
    isConfirmPasswordEmpty: boolean = false;
    
    isPasswordInvalid: boolean = false;
    warningUsernameMessage: string = '';
    warningPasswordMessage: string = '';
    warningConfirmPasswordMessage: string = '';

    constructor(private router: Router) { }

    ngOnInit(): void {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (storedUsername && storedPassword) {
            this.signinForm.username = storedUsername;
            this.signinForm.password = storedPassword;
            this.isChecked = true;
        }
    }

    isPasswordValid(password: string): boolean {
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_. ,])[A-Za-z\d@$!%*?&_. ,]{6,}$/;
        return pattern.test(password);
    }

    validatePassword(): void {
        const password = this.signinForm.password;

        if (!password && this.formSubmitted) {
            this.warningPasswordMessage = 'Please enter your password';
            this.isPasswordInvalid = false;
        } else if (password && !this.isPasswordValid(password)) {
            this.warningPasswordMessage =
                'Password must be at least 6 characters, include uppercase, lowercase, number, and special character.';
            this.isPasswordInvalid = true;
        } else {
            this.warningPasswordMessage = '';
            this.isPasswordInvalid = false;
        }

        this.validateConfirmPassword();
    }

    validateConfirmPassword(): void {
        const { password, confirmPassword } = this.signinForm;

        if (!confirmPassword && this.formSubmitted) {
            this.warningConfirmPasswordMessage = 'Please confirm your password';
        } else if (password !== confirmPassword && confirmPassword) {
            this.warningConfirmPasswordMessage = 'Passwords do not match';
        } else {
            this.warningConfirmPasswordMessage = '';
        }
    }

    validateUsername(): void {
        const username = this.signinForm.username.trim();
        if (!username && this.formSubmitted) {
            this.warningUsernameMessage = 'Please enter your username';
        } else {
            this.warningUsernameMessage = '';
        }
    }

    validateAllFields(): void {
        this.validateUsername();
        this.validatePassword();
        this.validateConfirmPassword();
    }

    submitForm(): void {
        this.formSubmitted = true;
        this.validateAllFields();

        const isEmpty =
            !this.signinForm.username.trim() ||
            !this.signinForm.password ||
            !this.signinForm.confirmPassword;

        const hasError =
            isEmpty || this.isPasswordInvalid || this.warningConfirmPasswordMessage !== '';

        if (!hasError) {
            if (this.isChecked) {
                localStorage.setItem('username', this.signinForm.username);
                localStorage.setItem('password', this.signinForm.password);
            } else {
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }

            this.router.navigate(['/']);
        }
    }

    navigateToSignIn(): void {
        this.router.navigate(['/sign-in']);
    }
}
