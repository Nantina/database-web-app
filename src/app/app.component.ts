import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var LeaderLine: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements  OnDestroy {
  private leaderLines: any[] = [];

  @ViewChild('startingElement', { read: ElementRef })
  startingElement!: ElementRef;

  @ViewChild('endingVictim', { read: ElementRef })
  endingVictim!: ElementRef;

  @ViewChild('endingPoliceman', { read: ElementRef })
  endingPoliceman!: ElementRef;

  @ViewChild('endingClue', { read: ElementRef })
  endingClue!: ElementRef;

  @ViewChild('endingSuspect', { read: ElementRef })
  endingSuspect!: ElementRef;

  @ViewChild('endingWitness', { read: ElementRef })
  endingWitness!: ElementRef;

  isSubPage: boolean = false;

  constructor(private router: Router) {
    console.log('AppComponent constructor');
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is a subpage
        this.isSubPage = event.url !== '/';
        if (this.isSubPage) {
          this.destroyLeaderLines();
        } else {
          this.createLines();
        }
      }
    });
  }

  // ngAfterViewInit() {
  //   // Ensure that ViewChild elements are available
  //   if (this.startingElement && !this.isSubPage) {
  //     this.createLines();
  //   }
  // }

  ngOnDestroy() {
    // Destroy LeaderLines when the component is destroyed
    this.destroyLeaderLines();
  }

  navigateToCases() {
    this.router.navigate(['/cases']);
  }

  navigateToVictims() {
    this.router.navigate(['/victims']);
  }

  navigateToComponent1() {
    this.router.navigate(['/component1']);
  }

  navigateToComponent2() {
    this.router.navigate(['/component2']);
  }

  navigateToComponent3() {
    this.router.navigate(['/component3']);
  }

  private createLines() {
    const elements: ElementRef[] = [
      this.endingVictim,
      this.endingPoliceman,
      this.endingClue,
      this.endingSuspect,
      this.endingWitness,
    ];

    elements.forEach((endingElement, index) => {
      try {
        // Check if endingElement is defined before accessing its nativeElement property
        if (endingElement && endingElement.nativeElement) {
          const line = new LeaderLine(this.startingElement.nativeElement, endingElement.nativeElement);
          line.path = 'straight';
          line.setOptions({ startSocket: 'top', endSocket: 'top' });

          // Store the created line in the array
          this.leaderLines.push(line);

          console.log(`Line ${index + 1} created successfully.`);
        }
      } catch (error) {
        console.error(`Error creating line ${index + 1}:`, error);
      }
    });
  }

  private destroyLeaderLines() {
    this.leaderLines.forEach((line) => {
      // Explicitly remove the line
      line.remove();
    });

    this.leaderLines = [];
  }
}
