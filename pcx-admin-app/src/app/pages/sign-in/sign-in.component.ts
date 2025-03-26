import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
    
  constructor() { }
  text1: any = 'hi In';

    ngOnInit(): void {
        this.text1 = 'hi In';
    }

}
