import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  private result: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  sum(num1: string, num2: string) {
    this.result = (parseInt(num1, 10) + parseInt(num2, 10)) + '';
  }

  divide(num1: string, num2: string) {
    if (num2 === '0') {
      this.result = 'Num2 phải lớn hơn 0';
    } else {
      this.result = parseInt(num1, 10) / parseInt(num2, 10) + '';
    }
  }

  multi(num1: string, num2: string) {
    this.result = parseInt(num1, 10) * parseInt(num2, 10) + '';
  }

  sub(num1: string, num2: string) {
    this.result = parseInt(num1, 10) - parseInt(num2, 10) + '';
  }
}
