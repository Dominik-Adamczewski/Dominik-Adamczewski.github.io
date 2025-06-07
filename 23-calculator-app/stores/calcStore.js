import { defineStore } from 'pinia'

const isOperator = (char) => ['+', '-', 'x', '/'].includes(char);

export const calcStore = defineStore('calcStore', {
  state: () => {
    return {
      currentTheme: 1,
      expression: [],
      screenDisplay: '',
      themes: [
        {
          id: 1,
          backgroundClasses: {
            appBackground: 'proj-23-theme-1-very-dark-desaturated-blue-var-1',
            keypadBackground: 'proj-23-theme-1-very-dark-desaturated-blue-var-2',
            screenBackground: 'proj-23-theme-1-very-dark-desaturated-blue-var-3',
          },
          keysClasses: {
            actionKeysBackground: 'proj-23-theme-1-desaturated-dark-blue-var-1',
            actionKeysShadow: 'proj-23-theme-1-desaturated-dark-blue-var-2',
            mainKeyBackground: 'proj-23-theme-1-red',
            mainKeyShadow: 'proj-23-theme-1-dark-red',
            numericKeysBackground: 'proj-23-theme-1-light-grayish-orange',
            numericKeysShadow: 'proj-23-theme-1-grayish-orange',
          },
          textClasses: {
            keyText: 'proj-23-theme-1-very-dark-grayish-blue',
            screenText: 'white'
          }
        },
        {
          id: 2,
          backgroundClasses: {
            appBackground: 'proj-23-theme-2-light-gray',
            keypadBackground: 'proj-23-theme-2-grayish-red',
            screenBackground: 'proj-23-theme-2-very-light-gray'
          },
          keysClasses: {
            actionKeysBackground: 'proj-23-theme-2-dark-moderate-cyan',
            actionKeysShadow: 'proj-23-theme-2-very-dark-cyan',
            mainKeyBackground: 'proj-23-theme-2-orange',
            mainKeyShadow: 'proj-23-theme-2-dark-orange',
            numericKeysBackground: 'proj-23-theme-2-light-grayish-yellow',
            numericKeysShadow: 'proj-23-theme-2-dark-grayish-orange',
            text: 'proj-23-theme-2-very-dark-grayish-yellow',
          },
          textClasses: {
            keyText: 'proj-23-theme-2-very-dark-grayish-yellow',
            screenText: 'proj-23-theme-2-very-dark-grayish-yellow'
          }
        },
        {
          id: 3,
          backgroundClasses: {
            appBackground: 'proj-23-theme-3-very-dark-violet-var-1',
            keypadBackground: 'proj-23-theme-3-very-dark-violet-var-2',
            screenBackground: 'proj-23-theme-3-very-dark-violet-var-2'
          },
          keysClasses: {
            actionKeysBackground: 'proj-23-theme-3-dark-violet',
            actionKeysShadow: 'proj-23-theme-3-vivid-magenta',
            mainKeyBackground: 'proj-23-theme-3-pure-cyan',
            mainKeyShadow: 'proj-23-theme-3-soft-cyan',
            numericKeysBackground: 'proj-23-theme-3-very-dark-violet-var-3',
            numericKeysShadow: 'proj-23-theme-3-dark-magenta',
          },
          textClasses: {
            keyText: 'proj-23-theme-3-light-yellow',
            textSecondary: 'proj-23-theme-3-very-dark-blue',
            screenText: 'proj-23-theme-3-light-yellow'
          }
        },
      ],
      keyLabels: ['7', '8', '9', 'DEL', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', 'x', 'RESET', '='],
    }
  },
  getters: {
    getCurrentTheme() {
      return this.themes.find(item => item.id === this.currentTheme);
    },
  },
  actions: {
    changeCurrentTheme() {
      if (this.currentTheme === this.themes.length) {
        return this.currentTheme = 1;
      }

      this.currentTheme += 1;
    },
    addDigitToCurrentExpression(digit) {
      if (isOperator(digit) && !this.expression.length) {  // do not allow to type operator as first character
        return;
      }

      if (digit === 'RESET' || digit === 'DEL' || digit === '=') {
        return;
      }

      if (this.expression.length > 0) {
        const lastItem = this.expression[this.expression.length - 1];

        if (isOperator(digit)) {
          // do not allow two operators in a row
          if (isOperator(lastItem)) return;

          this.expression.push(digit);
          this.screenDisplay = this.expression.join(' ');
          console.log(this.expression);
          return;
        }

        if (isOperator(lastItem)) {
          this.expression.push(digit);  // push number as new element if last item is operator
        } else {
          this.expression[this.expression.length - 1] += digit; // only clicking an operator should add new item to array
        }

        this.screenDisplay = this.expression.join(' ');
        console.log(this.expression);
        return;
      }

      // First item, push digit directly
      this.expression.push(digit);
      this.screenDisplay = this.expression.join(' ');
    },
    calculateExpression() {
      this.evaluateOperators(['x', '/']);
      this.evaluateOperators(['+', '-']);
      this.screenDisplay = this.expression.join(' ');
    },
    resetCalculator() {
      this.expression = [];
      this.screenDisplay = '';
    },
    handleDelKey() {
      if (this.expression.length === 0) return;

      const lastItem = this.expression[this.expression.length - 1];

      if (lastItem.length === 1) {
        this.expression.pop();
      } else {
        this.expression[this.expression.length - 1] = lastItem.slice(0, -1);
      }

      this.screenDisplay = this.expression.join(' ');
    },
    add(num1, num2) {
      return num1 + num2;
    },
    subtract(num1, num2) {
      return num1 - num2;
    },
    multiply(num1, num2) {
      return num1 * num2;
    },
    divide(num1, num2) {
      return num1 / num2;
    },
    evaluateOperators(operators) {
      let index;

      while ((index = this.expression.findIndex(item => operators.includes(item))) !== -1) {
        const operator = this.expression[index];
        const num1 = parseFloat(this.expression[index - 1]);
        const num2 = parseFloat(this.expression[index + 1]);

        let result;
        switch (operator) {
          case 'x':
            result = this.multiply(num1, num2);
            break;
          case '/':
            result = this.divide(num1, num2);
            break;
          case '+':
            result = this.add(num1, num2);
            break;
          case '-':
            result = this.subtract(num1, num2);
            break;
          default:
            return;
        }

        // Replace num1, operator, num2 with result
        this.expression.splice(index - 1, 3, result.toString());
      }
    }
  }
})
