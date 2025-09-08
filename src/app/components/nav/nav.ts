import { Component, EventEmitter, Input, Output, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectOption, selectOptions } from '../../models/select-option'

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  @Input() theme!: 'day' | 'night';
  @Input() selected!: string;
  @Output() selectOptionReq = new EventEmitter<SelectOption>();
  selectOptions = selectOptions;

  selectOption(selection: SelectOption) {
    this.selectOptionReq.emit(selection);
  }
}
