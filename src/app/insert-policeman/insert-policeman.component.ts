import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import { Policeman } from '../interfaces/Data';

@Component({
  selector: 'app-insert-policeman',
  templateUrl: './insert-policeman.component.html',
  styleUrls: ['./insert-policeman.component.css']
})
export class InsertPolicemanComponent {
  @Input() isVisible: boolean = false;
  @Output() savePoliceman = new EventEmitter<Policeman>();

  insertForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.insertForm = this.fb.group({
      policeman_id: ['', Validators.required],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      police_station_id: ['', Validators.required],
      specialty: ['', Validators.required]
    });


  }

  onSave() {
    if (this.insertForm.valid) {  
      const newPoliceman = {
        policeman_id: this.insertForm.value.policeman_id,
        name: this.insertForm.value.name,
        gender: this.insertForm.value.gender,
        phone: this.insertForm.value.phone,
        police_station_id: this.insertForm.value.police_station_id,
        specialty: this.insertForm.value.specialty
      };
        this.savePoliceman.emit(newPoliceman);
    }
  }
  
}



