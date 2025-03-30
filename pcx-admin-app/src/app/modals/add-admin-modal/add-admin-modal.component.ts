import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddAdminModalService } from './add-admin-modal.service';

@Component({
  selector: 'app-add-admin-modal',
  templateUrl: './add-admin-modal.component.html',
  styleUrls: ['./add-admin-modal.component.css']
})
export class AddAdminModalComponent {

  ngOnInit(): void {
    if (localStorage.getItem('username') != null && localStorage.getItem('password') != null) {
      this.signinForm.username = localStorage.getItem('username')!
      this.signinForm.password = localStorage.getItem('password')!
    }
  }

  signinForm = {
    username: '',
    password: '',
  }
  constructor(
    public dialogRef: MatDialogRef<AddAdminModalComponent>,
    private consentModalServ: AddAdminModalService
  ) { }

  addAdmin() {
    console.log("added");
    this.doneButtonFunction();
  }

  /**
* Function to handle the "Done" button click.
* @return void
*/
  doneButtonFunction() {
    this.dialogRef.close(this.signinForm.username);
  }
}

