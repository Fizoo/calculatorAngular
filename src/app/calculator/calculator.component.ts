import {Component, HostListener} from '@angular/core';
import {calcObject, RootObject} from "../../assets/data";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  value: string = ''
  operator: string[] = ['+', '-', '*', '/']
  calc: RootObject = calcObject
  calcKey:string[]=[...this.calc.map(el=>el.btn)]

  constructor() {
  }
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.changeEvent(event.key)
  }

  changeEvent(btn: string) {
    let result: any
    switch (btn) {
      case 'c':
      case 'Backspace':{
        this.value = ''
        break
      }
      case '=':
      case 'Enter':{
        this.value = eval(this.value).toString()
        break
      }
      default: {
        if(this.calcKey.includes(btn)) {
          result = [...this.value]
          let x: any
          if (result.length > 0) {
            x = result.pop().toString()
          }
          if (!this.operator.includes(btn)) {
            this.value += btn
          }
          if (this.operator.includes(btn) && !this.operator.includes(x)) {
            this.value += btn
          }
        }
      }
    }

  }
}
