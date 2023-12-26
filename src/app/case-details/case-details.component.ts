// case-details.component.ts

import { Component, Input, OnInit, EventEmitter, Output  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.css']
})
export class CaseDetailsComponent implements OnInit {
  @Input() selectedCase: any;
  @Input() title: string = 'Popup Title';
  @Input() isPopupVisible: boolean = true;
  @Output() closePopupEvent = new EventEmitter<void>();

  caseId: string = '';
  caseDetails: any; // Adjust the type based on your data structure

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  closeDetails() {
    this.isPopupVisible = false;
    this.closePopupEvent.emit();
  }

  ngOnInit(): void {
    // this.caseId = this.selectedCase[0];
    console.log(this.selectedCase)
      this.getCaseDetails();
  }

  getCaseDetails(): void {
    this.dataService.getCaseDetails().subscribe((data) => {
      this.caseDetails = data;
    });
  }
}
