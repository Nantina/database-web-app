import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  credentials: any = {};

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        // Handle successful login
      },
      (error) => {
        // Handle login error
      }
    );
  }

//   this.dataService.postCase(newCase).subscribe({
//     next: (response) => {
//       // Handle the response if needed
//       console.log('Case successfully added:', response);
  
//       // Fetch the updated cases from the server after adding a new case
//       this.dataService.getCases().subscribe((data) => {
//         this.cases = data;
//         this.filteredCases = this.cases

//         this.closeInsertDialog();
//       });

//     },
//     error: (error) => {
//       console.error('Error adding case:', error);
//     },
//   });
// }

}
