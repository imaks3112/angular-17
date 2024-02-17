import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-prop',
  standalone: true,
  imports: [],
  templateUrl: './signal-prop.component.html',
  styleUrl: './signal-prop.component.scss'
})
export class SignalPropComponent {
  firstName = signal('Akshay');
  lastName = signal('Lankeshwar');

  fullName = computed(() => this.firstName() + ' ' + this.lastName());

  changeFirstName(firstName: string): void {
    this.firstName.set(firstName);
  }

  changeLastName(lastName: string): void {
    this.lastName.set(lastName);
  }
}
