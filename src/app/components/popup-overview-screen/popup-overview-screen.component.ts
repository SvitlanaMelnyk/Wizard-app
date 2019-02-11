import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Data} from '@angular/router';


@Component({
  selector: 'app-popup-overview-screen',
  templateUrl: './popup-overview-screen.component.html',
  styleUrls: ['./popup-overview-screen.component.css'],
})
export class PopupOverviewScreenComponent {
  @Input() dataForm: Data;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();

   onCloseModal(): void {
    this.closeModal.emit(false);
  }

  onSubmit(dataForm) {
    this.closeModal.emit(true);
  }
}
