import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import { Witness } from '../interfaces/Data';

@Component({
  selector: 'app-insert-witness',
  templateUrl: './insert-witness.component.html',
  styleUrls: ['./insert-witness.component.css']
})
export class InsertWitnessComponent {
  @Input() isVisible: boolean = false;
  @Output() saveWitness = new EventEmitter<Witness>();

  insertForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.insertForm = this.fb.group({
      witness_id: ['', Validators.required],
      name: ['', Validators.required],
      birth_date: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }
  
  onSave() {
    if (this.insertForm.valid) {  
      const newWitness = {
        witness_id: this.insertForm.value.witness_id,
        name: this.insertForm.value.name,
        birth_date: this.insertForm.value.birth_date,
        gender: this.insertForm.value.gender,
        phone: this.insertForm.value.phone,
      };
  
      this.saveWitness.emit(newWitness);
    }
  }
  
  
  
  
}





