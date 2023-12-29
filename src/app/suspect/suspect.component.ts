import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { Suspect } from '../interfaces/Data';
import { Router } from '@angular/router';
import { PopupService } from 'src/services/popup.service';

@Component({
  selector: 'app-suspect',
  templateUrl: './suspect.component.html',
  styleUrls: ['./suspect.component.css']
})
export class SuspectComponent {
  suspects: any[] = [];
  selectedRow: any;
  searchText: string = '';
  filteredSuspects: any[] = [];

  constructor(private dataService: DataService, public dialog: MatDialog, private router: Router, private popupService: PopupService) {}

  ngOnInit(): void {
    this.getSuspects();
  }


  getSuspects(): void {
    this.dataService.getSuspects().subscribe((data) => {
      this.suspects = data;
      this.filteredSuspects = this.suspects
    });
  }

  search() {
    this.filteredSuspects = this.suspects.filter(currentSuspect => {
      return currentSuspect[0].toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
  
  isInsertDialogVisible: boolean = false;

  openInsertDialog() {
    this.isInsertDialogVisible = true;
  }

  closeInsertDialog() {
    this.isInsertDialogVisible = false;
  }

  deleteSuspect(suspectId: string): void {
    this.dataService.deleteSuspect(suspectId).subscribe({
        next: (response) => {
            console.log('Suspect successfully deleted:', response);
            this.dataService.getSuspects().subscribe((data) => {
                this.suspects = data;
                this.filteredSuspects = this.suspects;
                this.closeInsertDialog();
            });

        },
        error: (error) => {
            console.error('Error deleting suspect:', error);
        },
    });
}
  isPopupVisible = true;

  closePopup() {
    this.isPopupVisible = false;
  }

  onSuspectSaved(newSuspect: Suspect) {
    this.dataService.postSuspect(newSuspect).subscribe({
      next: (response) => {
        console.log('Suspect successfully added:', response);
    
        this.dataService.getSuspects().subscribe((data) => {
          this.suspects = data;
          this.filteredSuspects = this.suspects

          this.closeInsertDialog();
        });

      },
      error: (error) => {
        console.error('Error adding suspect:', error);
      },
    });
  }
  
}

