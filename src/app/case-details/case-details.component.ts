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
  @Input() title: string = 'Case Details';
  @Input() isPopupVisible: boolean = true;
  @Output() closePopupEvent = new EventEmitter<void>();

  caseId: string = '';
  caseDetails: any; 

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  closeDetails() {
    this.isPopupVisible = false;
    this.closePopupEvent.emit();
  }

  ngOnInit(): void {
    this.getCaseDetails(this.selectedCase[0]); 
  }

  getCaseDetails(case_id: string): void {
    this.dataService.getCaseDetails(case_id).subscribe((data) => {
      this.caseDetails = data;
    });
  }

}
