const questions = [
  { 
      question: "1.	Qual das seguintes estratégias é uma forma avançada de prática comercial antiética?",
      options: ["a)	Publicidade enganosa ocasional", "b)	Manipulação de informações para influenciar ações de mercado de longo prazo"],
      answer: "b)	Manipulação de informações para influenciar ações de mercado de longo prazo" 
  },
  { 
      question: "2.	Em que circunstância uma empresa pode se envolver em dumping como parte de suas práticas comerciais?",
      options: ["a)	Quando busca expandir sua base de clientes diminuindo os preços com promoções", "b)	Quando visa prejudicar os concorrentes reduzindo artificialmente os preços"],
      answer: "b)	Quando visa prejudicar os concorrentes reduzindo artificialmente os preços"
  },
  { 
      question: "3.	O que pode resultar em uma empresa sendo multada por práticas comerciais desleais?",
      options: ["a)	Violação das leis antitruste", "b)	Fixação de preços"],
      answer: "a)	Violação das leis antitruste"
  },
  { 
    question: "4.	Qual das seguintes práticas comerciais é considerada uma violação direta das leis de propriedade intelectual?",
    options: ["a)	Pirataria de software", "b)	Fixação de preços"],
    answer: "a)	Pirataria de software"
},
{ 
  question: "5.	Qual das seguintes práticas é geralmente considerada uma estratégia comercial justa?",
  options: ["a)	Conluio de empresas", "b)	Competição empresarial"],
  answer: "b)	Competição empresarial"
},
{ 
  question: "6.	Qual das seguintes práticas comerciais é considerada uma estratégia agressiva de marketing que visa influenciar os consumidores por meio de técnicas emocionais e persuasivas?",
  options: ["a) Publicidade chamativa", "b) Publicidade manipulativa"],
  answer: "b) Publicidade manipulativa"
},
{ 
  question: '7.	Por que a prática comercial conhecida como "bait-and-switch" é considerada antiética?',
  options: ["a) Porque envolve a venda de produtos de baixa qualidade", "b) Porque envolve atrair os consumidores com uma oferta promocional específica e, em seguida, tentar vender um produto diferente a um preço mais alto"],
  answer: "b) Porque envolve atrair os consumidores com uma oferta promocional específica e, em seguida, tentar vender um produto diferente a um preço mais alto"
},
{ 
  question: "8.	Qual é uma prática antiética que uma empresa pode adotar em suas práticas comerciais relacionadas à sustentabilidade?",
  options: ["a) Reduzir os preços de produtos para torná-los mais acessíveis.", "b) Exagerar ou fazer afirmações falsas sobre a eco-amigabilidade de seus produtos para atrair consumidores, sem fazer esforços reais para reduzir seu impacto ambiental."],
  answer: "b) Exagerar ou fazer afirmações falsas sobre a eco-amigabilidade de seus produtos para atrair consumidores, sem fazer esforços reais para reduzir seu impacto ambiental."
},
{ 
  question: "9.	Qual dos seguintes fatores é mais provável de afetar a elasticidade da oferta de um produto?",
  options: ["a) Tempo necessário para ajustar a produção em resposta a mudanças no preço", "b) Preço do bem substituto"],
  answer: "a) Tempo necessário para ajustar a produção em resposta a mudanças no preço"
},
{ 
  question: "10.	Como a entrada de novas empresas em um mercado competitivo pode afetar a oferta total de um produto?",
  options: ["a) Aumentando a oferta e potencialmente diminuindo os preços", "b) Tornando o mercado amador e o produto realmente bom escasso"],
  answer: "a) Aumentando a oferta e potencialmente diminuindo os preços"
},
{ 
  question: "11.	Por que a oferta de alguns produtos pode ser mais inelástica a curto prazo do que a longo prazo?",
  options: ["a) Porque os produtores têm mais tempo para ajustar a produção a longo prazo", "b) Porque alguns fatores de produção são fixos a curto prazo, tornando difícil aumentar a oferta rapidamente"],
  answer: "b) Porque alguns fatores de produção são fixos a curto prazo, tornando difícil aumentar a oferta rapidamente"
},
{ 
  question: "12.	O que pode causar um deslocamento da curva de oferta de um bem para a direita? (Quando a curva de oferta de um bem se desloca para a direita, significa que os produtores estão dispostos a oferecer mais desse bem a todos os preços possíveis)",
  options: ["a) Aumento do preço do bem complementar", "b) Avanços tecnológicos que reduzem os custos de produção"],
  answer: "b) Avanços tecnológicos que reduzem os custos de produção"
},
{ 
  question: "13.	Como as expectativas dos produtores sobre o futuro podem afetar a oferta de um bem hoje?",
  options: ["a) Expectativas de preços mais altos no futuro podem levar os produtores a aumentar a oferta hoje, antecipando maiores lucros", "b) Expectativas de preços mais altos no futuro geralmente levam os produtores a reduzir a oferta hoje"],
  answer: "a) Expectativas de preços mais altos no futuro podem levar os produtores a aumentar a oferta hoje, antecipando maiores lucros"
},
{ 
  question: "14.	Como a mudança nas expectativas dos consumidores sobre sua renda futura pode afetar a procura de um bem hoje?",
  options: ["a) Expectativas de renda futura mais alta podem aumentar a procura hoje, enquanto expectativas de renda mais baixa podem diminuí-la", "b) Mudanças nas expectativas de renda futura mais alta têm pouco ou nenhum impacto na procura atual, apenas expectativa de renda mais baixa possui impacto"],
  answer: "a) Expectativas de renda futura mais alta podem aumentar a procura hoje, enquanto expectativas de renda mais baixa podem diminuí-la"
},
{ 
  question: "15.	O que poderia causar um deslocamento da curva de procura de um bem para a esquerda? (Um deslocamento da curva de procura de um bem para a esquerda significa que, em geral, as pessoas querem menos desse bem)14.	Como a mudança nas expectativas dos consumidores sobre sua renda futura pode afetar a procura de um bem hoje?",
  options: ["a) Aumento da renda dos consumidores", "b) Uma mudança nas preferências dos consumidores contra o bem"],
  answer: "b) Uma mudança nas preferências dos consumidores contra o bem"
},
];

let currentQuestion = 0;

document.addEventListener('DOMContentLoaded', function() {
  loadQuestion();
});

function loadQuestion() {
  const question = questions[currentQuestion];
  document.getElementById('question').innerText = question.question;
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  question.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.innerText = option;
      button.addEventListener('click', function() {
          checkAnswer(option);
      });
      optionsContainer.appendChild(button);
  });
}

function checkAnswer(userAnswer) {
  const correctAnswer = questions[currentQuestion].answer;

  if (userAnswer === correctAnswer) {
      if (currentQuestion < questions.length - 1) {
          currentQuestion++;
          loadQuestion();
          clearResult();
      } else {
          document.getElementById('result').innerHTML = '<p>Parabéns! Você completou o quiz!</p>';
      }
  } else {
      document.getElementById('result').innerHTML = '<p>Resposta incorreta. Reiniciando o jogo...</p>';
      currentQuestion = 0; // Reinicia para a primeira pergunta
      loadQuestion();
      clearResult();
  }
}

function clearResult() {
  document.getElementById('result').innerHTML = '';
}