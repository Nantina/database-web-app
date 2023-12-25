import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { InsertCaseDialogComponent } from '../insert-case-dialog/insert-case-dialog.component';
import { Case } from '../interfaces/Case';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent {
  cases: any[] = [];

  selectedRow: any;

  // Variable to hold the search text
  searchText: string = '';

  // Filtered cases based on the search text
  filteredCases: any[] = [];

  constructor(private dataService: DataService, public dialog: MatDialog) {}

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

  onRowClick(row: any): void {
    // Handle row click event
    this.selectedRow = row;

    // You can fetch additional information from another API based on row data
    // Example:
    // this.casesService.getAdditionalInfo(row.id).subscribe((additionalInfo) => {
    //   this.selectedRow.additionalInfo = additionalInfo;
    // });
  }

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


  onCaseSaved(newCase: Case) {
    // console.log('Attempting to save case:', newCase);
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
