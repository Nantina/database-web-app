import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-insert-case-dialog',
  templateUrl: './insert-case-dialog.component.html',
  styleUrls: ['./insert-case-dialog.component.css']
})

export class InsertCaseDialogComponent {
  @Input() isVisible: boolean = false;
  @Output() saveCase = new EventEmitter<any>();

  insertForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.insertForm = this.fb.group({
      case_id: ['', Validators.required],
      location: ['', Validators.required],
      time: ['', Validators.required],
      description: ['', Validators.required],
      is_active: [true, Validators.required], 
    });


  }

  onSave() {
    if (this.insertForm.valid) {  
      const newCase = {
        case_id: this.insertForm.value.case_id,
        location: this.insertForm.value.location,
        time: this.insertForm.value.time,
        description: this.insertForm.value.description,
        is_active: this.insertForm.value.is_active,
      };
      // Emit the new case to the parent component
      this.saveCase.emit(newCase);
    }
  }
  
}

