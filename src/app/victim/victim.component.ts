import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { Victim } from '../interfaces/Data';
import { Router } from '@angular/router';
import { PopupService } from 'src/services/popup.service';

@Component({
  selector: 'app-victim',
  templateUrl: './victim.component.html',
  styleUrls: ['./victim.component.css']
})
export class VictimComponent {
  victims: any[] = [];
  selectedRow: any;
  searchText: string = '';

  filteredVictims: any[] = [];

  constructor(private dataService: DataService, public dialog: MatDialog, private router: Router, private popupService: PopupService) {}

  ngOnInit(): void {
    this.getVictims();
  }


  getVictims(): void {
    this.dataService.getVictims().subscribe((data) => {
      this.victims = data;
      this.filteredVictims = this.victims
    });
  }

  search() {
    this.filteredVictims = this.victims.filter(currentVictim => {
      return currentVictim[0].toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
  
  
  isInsertDialogVisible: boolean = false;

  openInsertDialog() {
    this.isInsertDialogVisible = true;
  }

  closeInsertDialog() {
    this.isInsertDialogVisible = false;
  }

  deleteVictim(victimId: string): void {
    this.dataService.deleteVictim(victimId).subscribe({
        next: (response) => {
            console.log('Victim successfully deleted:', response);
            this.dataService.getVictims().subscribe((data) => {
                this.victims = data;
                this.filteredVictims = this.victims;
                this.closeInsertDialog();
            });
        },
        error: (error) => {
            console.error('Error deleting Victim:', error);
        },
    });
}
  isPopupVisible = true;

  closePopup() {
    this.isPopupVisible = false;
  }

  onVictimSaved(newVictim: Victim) {
    this.dataService.postVictim(newVictim).subscribe({
      next: (response) => {
        console.log('Victim successfully added:', response);
            this.dataService.getVictims().subscribe((data) => {
          this.victims = data;
          this.filteredVictims = this.victims

          this.closeInsertDialog();
        });

      },
      error: (error) => {
        console.error('Error adding victim:', error);
      },
    });
  }
  
}


