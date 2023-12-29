import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LineService } from 'src/services/line.service';
import { Subscription } from 'rxjs';
declare var LeaderLine: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements  OnDestroy, AfterViewInit {
  private leaderLines: any[] = [];
  private subscription: Subscription;

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
  linesCreated: boolean = false;

  constructor(private router: Router, private lineService: LineService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isSubPage = event.url !== '/';
        if (this.isSubPage) {
          this.destroyLeaderLines();
        } else {
          this.createLines();
        }
      }
    });
    this.subscription = this.lineService.createLines$.subscribe(() => {
      setTimeout(() => {
        this.createLines();
      }, 0);
    });
  }


  ngAfterViewInit() {
    this.createLines();
  }

  ngOnDestroy() {
    // Destroy LeaderLines when the component is destroyed
    this.destroyLeaderLines();
    this.subscription.unsubscribe();
  }

  navigateToCases() {
    this.router.navigate(['/cases']);
  }

  navigateToVictims() {
    this.router.navigate(['/victims']);
  }

  navigateToWitnesses() {
    this.router.navigate(['/witnesses']);
  }

  navigateToPolicemen() {
    this.router.navigate(['/policemen']);
  }

  navigateToSuspects() {
    this.router.navigate(['/suspects']);
  }

  navigateToClues(){
    this.router.navigate(['/clues']);
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

          this.leaderLines.push(line);
        }
      } catch (error) {
        console.error(`Error creating line ${index + 1}:`, error);
      }
    });
  }

  private destroyLeaderLines() {
    this.leaderLines.forEach((line) => {
      line.remove();
    });

    this.leaderLines = [];

    this.linesCreated = false;
  }
}
