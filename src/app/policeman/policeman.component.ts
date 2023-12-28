import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { Policeman } from '../interfaces/Data';
import { Router } from '@angular/router';
import { PopupService } from 'src/services/popup.service';

@Component({
  selector: 'app-policeman',
  templateUrl: './policeman.component.html',
  styleUrls: ['./policeman.component.css']
})
export class PolicemanComponent {
  policemen: any[] = [];
  selectedRow: any;
  // Variable to hold the search text
  searchText: string = '';
  filteredPolicemen: any[] = [];

  constructor(private dataService: DataService, public dialog: MatDialog, private router: Router, private popupService: PopupService) {}

  ngOnInit(): void {
    this.getPolicemen();
  }

  getPolicemen(): void {
    this.dataService.getPolicemen().subscribe((data) => {
      this.policemen = data;
      this.filteredPolicemen = this.policemen
    });
  }

  search() {
    this.filteredPolicemen = this.policemen.filter(currentPolicemen => {
      return currentPolicemen[0].toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
  
  isInsertDialogVisible: boolean = false;

  openInsertDialog() {
    this.isInsertDialogVisible = true;
  }

  closeInsertDialog() {
    this.isInsertDialogVisible = false;
  }

  deletePoliceman(policemanId: string): void {
    console.log(policemanId)
    this.dataService.deletePoliceman(policemanId).subscribe({
        next: (response) => {
            console.log('Policeman successfully deleted:', response);

            this.dataService.getCases().subscribe((data) => {
                this.policemen = data;
                this.filteredPolicemen = this.policemen;
                this.closeInsertDialog();
            });

        },
        error: (error) => {
            console.error('Error deleting case:', error);
        },
    });
}
  isPopupVisible = true;

  closePopup() {
    this.isPopupVisible = false;
  }



  onPolicemanSaved(newPoliceman: Policeman) {
    console.log(newPoliceman);
    this.dataService.postPoliceman(newPoliceman).subscribe({
      next: (response) => {
        console.log('Policeman successfully added:', response);
    
        this.dataService.getPolicemen().subscribe((data) => {
          this.policemen = data;
          this.filteredPolicemen = this.policemen

          this.closeInsertDialog();
        });

      },
      error: (error) => {
        console.error('Error adding case:', error);
      },
    });
  }
  
}

