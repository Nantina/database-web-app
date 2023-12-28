import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import { Clue } from '../interfaces/Data';

@Component({
  selector: 'app-insert-clue',
  templateUrl: './insert-clue.component.html',
  styleUrls: ['./insert-clue.component.css']
})
export class InsertClueComponent {
  @Input() isVisible: boolean = false;
  @Output() saveClue = new EventEmitter<Clue>();

  insertForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.insertForm = this.fb.group({
      clue_id: ['', Validators.required],
      is_murder_weapon: ['', Validators.required],
      date: ['', Validators.required],
      place: ['', Validators.required],
      description: ['', Validators.required],
      Case_case_id: ['', Validators.required],
      type: [true, Validators.required]
    });
  }

  onSave() {
    if (this.insertForm.valid) {  
      const newClue = {
        clue_id: this.insertForm.value.clue_id,
        is_murder_weapon: this.insertForm.value.is_murder_weapon,
        date: this.insertForm.value.date,
        place: this.insertForm.value.place,
        description: this.insertForm.value.description,
        Case_case_id: this.insertForm.value.Case_case_id,
        type: this.insertForm.value.type
      };
        this.saveClue.emit(newClue);
    }
  }
  
}


