const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 1
    },
    {
      pergunta: "Qual operador é usado para comparar valores e tipos em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 0
    },
    {
      pergunta: "Como você acessa o último elemento de um array chamado 'arr' em JavaScript?",
      respostas: [
        "arr[last]",
        "arr[arr.length - 1]",
        "arr[-1]",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'console.log()' faz em JavaScript?",
      respostas: [
        "Exibe uma mensagem de erro no console",
        "Exibe um alerta na tela",
        "Exibe mensagens no console do navegador",
      ],
      correta: 1
    },
    {
      pergunta: "Qual dos seguintes é um tipo de dado em JavaScript?",
      respostas: [
        "Boolean",
        "Stringify",
        "Float",
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "função minhaFuncao() {}",
        "function: minhaFuncao() {}",
        "function minhaFuncao() {}",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '&&' representa em JavaScript?",
      respostas: [
        "OU lógico",
        "E lógico",
        "OU exclusivo",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de comentar uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "# Este é um comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "toFloat()",
        "toInteger()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para agendar uma função para ser executada após um intervalo de tempo em JavaScript?",
      respostas: [
        "setTimeout()",
        "setInterval()",
        "setDelay()",
      ],
      correta: 0
    },
  ];
  
  constuiz = document.querySelector('#quiz')
  const template = document.querySelector ('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('H3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
    
    corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)
      
    } 
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
  
  
  
  
  quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  
  }
