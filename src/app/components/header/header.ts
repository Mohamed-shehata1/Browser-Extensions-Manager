import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Input() theme!: 'day' | 'night';
  @Output() toggleThemeReq = new EventEmitter<void>();

  toggleTheme() {
    this.toggleThemeReq.emit();
  }
}
