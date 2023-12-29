import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { Witness } from '../interfaces/Data';
import { Router } from '@angular/router';
import { PopupService } from 'src/services/popup.service';

@Component({
  selector: 'app-witness',
  templateUrl: './witness.component.html',
  styleUrls: ['./witness.component.css']
})
export class WitnessComponent {
  witnesses: any[] = [];
  selectedRow: any;
  searchText: string = '';

  filteredWitnesses: any[] = [];

  constructor(private dataService: DataService, public dialog: MatDialog, private router: Router, private popupService: PopupService) {}

  ngOnInit(): void {
    this.getWitnesses();
  }

  getWitnesses(): void {
    this.dataService.getWitnesses().subscribe((data) => {
      this.witnesses = data;
      this.filteredWitnesses = this.witnesses
    });
  }

  search() {
    this.filteredWitnesses = this.witnesses.filter(currentWitness => {
      return currentWitness[0].toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
  
  isInsertDialogVisible: boolean = false;

  openInsertDialog() {
    this.isInsertDialogVisible = true;
  }

  closeInsertDialog() {
    this.isInsertDialogVisible = false;
  }

  deleteWitness(witnessId: string): void {
    this.dataService.deleteWitness(witnessId).subscribe({
        next: (response) => {
            console.log('witness successfully deleted:', response);
            this.dataService.getWitnesses().subscribe((data) => {
                this.witnesses = data;
                this.filteredWitnesses = this.witnesses;
                this.closeInsertDialog();
            });

        },
        error: (error) => {
            console.error('Error deleting witness:', error);
        },
    });
}
  isPopupVisible = true;

  closePopup() {
    this.isPopupVisible = false;
  }

  onWitnessSaved(newWitness: Witness) {
    this.dataService.postWitness(newWitness).subscribe({
      next: (response) => {
        console.log('Witness successfully added:', response);
    
        this.dataService.getWitnesses().subscribe((data) => {
          this.witnesses = data;
          this.filteredWitnesses = this.witnesses

          this.closeInsertDialog();
        });

      },
      error: (error) => {
        console.error('Error adding Witness:', error);
      },
    });
  }
  
}



