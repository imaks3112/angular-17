import { Component } from '@angular/core';

@Component({
  selector: 'app-normal-prop',
  standalone: true,
  imports: [],
  templateUrl: './normal-prop.component.html',
  styleUrl: './normal-prop.component.scss'
})
export class NormalPropComponent {
  firstName = 'Akshay';
  lastName = 'Lankeshwar';

  fullName = this.firstName + ' ' + this.lastName;

  changeFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  changeLastName(lastName: string): void {
    this.lastName = lastName;
  }
}
