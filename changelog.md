 - resolvido bug em operações seguidas (a função não limpava o firstNumber quando entrava na condição firstNumber !== 0, logo se tentada uma operação seguida fazia a conta com o primeiro número da operação anterior e o resultado ao invés de operar com o resultado e um número a ser inserido) 
 - refatoração das operações no espaço de input para a função refreshInput
 - adicionando botão '0' 
 - adicionadas as funções de multiplicar e dividir
 - adicionado o botão '.'  

 TO-DO:
 - fazer o "0" ocupar 3 espaços ao invés de 4
 - fazer o "=" assumir o eespaço deixado pelo "0"
 - botão de apagar caracter