import { style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homework',
  imports: [CommonModule],
  templateUrl: './homework.component.html',
  styleUrl: './homework.component.css'
})
export class HomeworkComponent {
  catName = 'Степан';
  condition = true;
  toggleCondition() {this.condition = !this.condition};

}
