import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LineService } from 'src/services/line.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private router: Router, private lineService: LineService) {}

  navigateToHome(): void {
    this.router.navigate(['/']);
    this.lineService.createLines();
  }
}


