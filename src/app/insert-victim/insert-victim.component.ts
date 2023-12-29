import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import { Victim } from '../interfaces/Data';

@Component({
  selector: 'app-insert-victim',
  templateUrl: './insert-victim.component.html',
  styleUrls: ['./insert-victim.component.css']
})
export class InsertVictimComponent {
  @Input() isVisible: boolean = false;
  @Output() saveVictim = new EventEmitter<Victim>();

  insertForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.insertForm = this.fb.group({
      victim_id: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      gender: ['', Validators.required],
      birth_date: ['', Validators.required],
      death_date: ['', Validators.required],
      description_of_death: ['', Validators.required],
      nationality: ['', Validators.required],
      Case_case_id: ['', Validators.required],
      Medical_Examiner_medical_examiner_id: ['', Validators.required],
      Lawyer_lawyer_id: ['', Validators.required]
    });
  }
  
  onSave() {
    if (this.insertForm.valid) {  
      const newVictim = {
        victim_id: this.insertForm.value.victim_id,
        first_name: this.insertForm.value.first_name,
        last_name: this.insertForm.value.last_name,
        gender: this.insertForm.value.gender,
        birth_date: this.insertForm.value.birth_date,
        death_date: this.insertForm.value.death_date,
        description_of_death: this.insertForm.value.description_of_death,
        nationality: this.insertForm.value.nationality,
        Case_case_id: this.insertForm.value.Case_case_id,
        Medical_Examiner_medical_examiner_id: this.insertForm.value.Medical_Examiner_medical_examiner_id,
        Lawyer_lawyer_id: this.insertForm.value.Lawyer_lawyer_id
      };
        this.saveVictim.emit(newVictim);
    }
  }
  
  
  
}




