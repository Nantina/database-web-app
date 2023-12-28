import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { Clue } from '../interfaces/Data';
import { Router } from '@angular/router';
import { PopupService } from 'src/services/popup.service';


@Component({
  selector: 'app-clue',
  templateUrl: './clue.component.html',
  styleUrls: ['./clue.component.css']
})
export class ClueComponent {
  clues: any[] = [];
  selectedRow: any;
  // Variable to hold the search text
  searchText: string = '';
  // Filtered cases based on the search text
  filteredClues: any[] = [];

  constructor(private dataService: DataService, public dialog: MatDialog, private router: Router, private popupService: PopupService) {}

  ngOnInit(): void {
    this.getClues();
  }


  getClues(): void {
    this.dataService.getClues().subscribe((data) => {
      this.clues = data;
      this.filteredClues = this.clues
    });
  }

  search() {
    this.filteredClues = this.clues.filter(currentClue => {
      return currentClue[0].toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
  
  isInsertDialogVisible: boolean = false;

  openInsertDialog() {
    this.isInsertDialogVisible = true;
  }

  closeInsertDialog() {
    this.isInsertDialogVisible = false;
  }

  deleteClue(clueId: string): void {
    console.log(clueId)
    this.dataService.deleteClue(clueId).subscribe({
        next: (response) => {
            console.log('Clue successfully deleted:', response);
            // Fetch the updated clues from the server after deleting one
            this.dataService.getClues().subscribe((data) => {
                this.clues = data;
                this.filteredClues = this.clues;

                this.closeInsertDialog();
            });

        },
        error: (error) => {
            console.error('Error deleting clue:', error);
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
  }

  onClueSaved(newClue: Clue) {
    console.log(newClue);
    // Perform the POST request to the API with the newClue data
    this.dataService.postClue(newClue).subscribe({
      next: (response) => {
        console.log('Clue successfully added:', response);
        // Fetch the updated clues from the server after adding a new clue
        this.dataService.getClues().subscribe((data) => {
          this.clues = data;
          this.filteredClues = this.clues

          this.closeInsertDialog();
        });

      },
      error: (error) => {
        console.error('Error adding clue:', error);
      },
    });
  }
  
}

