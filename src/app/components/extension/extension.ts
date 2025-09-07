import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IExtension } from '../../models/extension';

@Component({
  selector: 'app-extension',
  imports: [CommonModule],
  templateUrl: './extension.html',
  styleUrl: './extension.css',
})
export class Extension {
  @Input() extension!: IExtension;
  @Input() theme: 'day' | 'night' = 'day';

  @Output() toggle = new EventEmitter<IExtension>();
  @Output() remove = new EventEmitter<IExtension>();

  onToggle() {
    this.toggle.emit(this.extension);
  }
  onRemove() {
    this.remove.emit(this.extension);
  }
}
