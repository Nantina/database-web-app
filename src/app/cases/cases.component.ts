import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { Case } from '../interfaces/Data';
import { Router } from '@angular/router';
import { PopupService } from 'src/services/popup.service';


@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent {
  cases: any[] = [];
  selectedRow: any;
  moreDetailsCase: any;
  // Variable to hold the search text
  searchText: string = '';

  // Filtered cases based on the search text
  filteredCases: any[] = [];

  constructor(private dataService: DataService, public dialog: MatDialog, private router: Router, private popupService: PopupService) {}

  ngOnInit(): void {
    this.getCases();
  }


  getCases(): void {
    this.dataService.getCases().subscribe((data) => {
      this.cases = data;
      this.filteredCases = this.cases
    });
  }

  getAdditionalInfo():void{
    
  }

  search() {
    this.filteredCases = this.cases.filter(currentCase => {
      return currentCase[0].toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
  
  isInsertDialogVisible: boolean = false;

  openInsertDialog() {
    this.isInsertDialogVisible = true;
  }

  closeInsertDialog() {
    this.isInsertDialogVisible = false;
  }

  deleteCase(caseId: string): void {
    this.dataService.deleteCase(caseId).subscribe({
        next: (response) => {
            console.log('Case successfully deleted:', response);
            // Fetch the updated cases from the server after deleting a case
            this.dataService.getCases().subscribe((data) => {
                this.cases = data;
                this.filteredCases = this.cases;

                this.closeInsertDialog();
            });

        },
        error: (error) => {
            console.error('Error deleting case:', error);
        },
    });
}

moreDetails(caseId: string): void {
  this.selectedRow = this.filteredCases.findIndex((c) => c[0] === caseId);
  this.isPopupVisible = true;
}
  

  isPopupVisible = true;

  closePopup(): void {
    this.selectedRow = null;
    this.isPopupVisible = false;
  }



  onCaseSaved(newCase: Case) {
    this.dataService.postCase(newCase).subscribe({
      next: (response) => {
        console.log('Case successfully added:', response);
    
        // Fetch the updated cases from the server after adding a new case
        this.dataService.getCases().subscribe((data) => {
          this.cases = data;
          this.filteredCases = this.cases

          this.closeInsertDialog();
        });

      },
      error: (error) => {
        console.error('Error adding case:', error);
      },
    });
  }
  
}
