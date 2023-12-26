import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { InsertCaseDialogComponent } from '../insert-case-dialog/insert-case-dialog.component';
import { Case } from '../interfaces/Case';
import { Router } from '@angular/router';
import { PopupService } from 'src/services/popup.service';
import { HttpHeaders } from '@angular/common/http';

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

  // onRowClick(row: any): void {
  //   // Handle row click event
  //   this.selectedRow = row;

  //   // You can fetch additional information from another API based on row data
  //   // Example:
  //   // this.casesService.getAdditionalInfo(row.id).subscribe((additionalInfo) => {
  //   //   this.selectedRow.additionalInfo = additionalInfo;
  //   // });
  // }

  search() {
    this.filteredCases = this.cases.filter(currentCase => {
      // Assuming 'case_id' is the property you want to search
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
    console.log(caseId)
    this.dataService.deleteCase(caseId).subscribe({
        next: (response) => {
            // Handle the response if needed
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

  moreDetails(row: any): void {
    console.log('Button clicked in row:', row);
    this.selectedRow = row;
    this.isPopupVisible = true;
  }

  isPopupVisible = true;

  closePopup() {

    this.isPopupVisible = false;
    // this.popupService.closePopup();
  }



  onCaseSaved(newCase: Case) {
    console.log(newCase);
    // Perform the POST request to your API with the newCase data
    this.dataService.postCase(newCase).subscribe({
      next: (response) => {
        // Handle the response if needed
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
