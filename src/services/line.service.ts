// line.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LineService {
  private createLinesSource = new Subject<void>();
  createLines$ = this.createLinesSource.asObservable();

  createLines(): void {
    this.createLinesSource.next();
  }
}
