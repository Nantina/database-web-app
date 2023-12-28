import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import { Suspect } from '../interfaces/Data';

@Component({
  selector: 'app-insert-suspect',
  templateUrl: './insert-suspect.component.html',
  styleUrls: ['./insert-suspect.component.css']
})
export class InsertSuspectComponent {
  @Input() isVisible: boolean = false;
  @Output() saveSuspect = new EventEmitter<Suspect>();

  insertForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.insertForm = this.fb.group({
      suspect_id: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      address_street: ['', Validators.required],
      address_number: ['', Validators.required],
      birth_date: ['', Validators.required],
      Lawyer_lawyer_id: ['', Validators.required],
      status: ['', Validators.required]
    });
  }
  
  onSave() {
    if (this.insertForm.valid) {  
      const newSuspect = {
        suspect_id: this.insertForm.value.suspect_id,
        name: this.insertForm.value.name,
        phone: this.insertForm.value.phone,
        gender: this.insertForm.value.gender,
        address_street: this.insertForm.value.address_street,
        address_number: this.insertForm.value.address_number,
        birth_date: this.insertForm.value.birth_date,
        Lawyer_lawyer_id: this.insertForm.value.Lawyer_lawyer_id,
        status: this.insertForm.value.status
      };
  
      this.saveSuspect.emit(newSuspect);
    }
  }
  
  
}



