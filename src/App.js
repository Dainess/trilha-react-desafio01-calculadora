
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  function refreshInput(firstNumber, currentNumber, operation) {
    setFirstNumber(firstNumber);
    setCurrentNumber(currentNumber)
    setOperation(operation)
  }

  const handleOnClear = () => {
    refreshInput('0', '0', '')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
      refreshInput(String(currentNumber), '', '+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      refreshInput('0', String(sum), '')
    }

  }

  const handleMinusNumbers = () => {
    console.log("Minus")
    if(firstNumber === '0'){
      refreshInput(String(currentNumber), '', '-')
    }else {
      const subtract = Number(firstNumber) - Number(currentNumber);
      refreshInput('0', String(subtract), '')
    }

  }

  const handleMultiplyNumbers = () => {
    console.log("Multiply")
    if(firstNumber === '0'){
      refreshInput(String(currentNumber), '', '*')
    }else {
      const multiply = Number(firstNumber) * Number(currentNumber);
      refreshInput('0', String(multiply), '')
    }

  }

  const handleDivideNumbers = () => {

    if(firstNumber === '0'){
      refreshInput(String(currentNumber), '', '/')
    }else {
      const divide = Number(firstNumber) / Number(currentNumber);
      refreshInput('0', String(divide), '')
    }

  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '*':
            handleMultiplyNumbers();
            break;
          case '/':
            handleDivideNumbers();
            break;
          default: 
            break;
        }
    }

  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="*" onClick={handleMultiplyNumbers}/>
          <Button label="/" onClick={handleDivideNumbers}/>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
