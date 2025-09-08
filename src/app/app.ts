import { Component, signal, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Extension } from './components/extension/extension';
import { Header } from './components/header/header';
import { IExtension } from './models/extension';
import { ExtensionService } from './extension';
import { Nav } from './components/nav/nav';
import { SelectOption } from './models/select-option'

@Component({
  selector: 'app-root',
  imports: [CommonModule, Extension, Header, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {

  protected readonly title = signal('extensions-manager-app');

  selected = signal<SelectOption>('all');
  theme: 'day' | 'night' = 'day';
  extensionList = signal<IExtension[]>([]);

  filteredExtensions = computed(() => {
    const sel = this.selected();
    return this.extensionList().filter((ext) =>
      sel === 'all' ? true : sel === 'active' ? ext.isActive : !ext.isActive
    );
  });

  constructor(private extensionService: ExtensionService) {}

  ngOnInit() {
    this.extensionService.getAllExtensions().subscribe({
      next: (data) => {
        this.extensionList.set(data);
      },
      error: (err) => console.error(err),
    });
  }

  toggleTheme() {
    this.theme = this.theme === 'day' ? 'night' : 'day';
  }

  selectOption(option: SelectOption) {
    this.selected.set(option);
  }

  toggleActivation(ext: IExtension) {
    // create a new array so signal detects a change
    const updated = this.extensionList().map((e) =>
      e.name === ext.name ? { ...e, isActive: !e.isActive } : e
    );
    this.extensionList.set(updated);
  }
  removeExtension(ext: IExtension) {
    // create a new array so signal detects a change
    const updated = this.extensionList().filter((e) => e.name !== ext.name);
    this.extensionList.set(updated);
  }
}
