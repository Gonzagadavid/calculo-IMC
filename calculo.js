// função para o calculo de IMC com as condições para o feedback
function calcule () {
  const peso = document.informacao.peso.value
  if (peso < 20 || peso > 300) { return alert('Peso inválido\n Favor preencher o campo corretamente') }
  const altura = document.informacao.altura.value
  if (altura < 1 || altura > 2.1) { return alert('altura inválida\n Favor preencher o campo corretamente') }
  const resultado = peso / Math.pow(altura, 2)

  document.informacao.result.value = resultado.toFixed(2)

  if (resultado <= 18.5) {
    document.informacao.nivel.value = ` 18,5 ou menos

 Abaixo do normal

 Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.`
  } else if (resultado <= 24.9) {
    document.informacao.nivel.value = ` Entre 18,6 e 24,9
 
    Normal

 Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.`
  } else if (resultado <= 29.9) {
    document.informacao.nivel.value = `Entre 25,0 e 29,9
    
    Sobrepeso

    Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.`
  } else if (resultado <= 34.9) {
    document.informacao.nivel.value = `Entre 30,0 e 34,9
    
    Obesidade grau I
    
    Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista`
  } else if (resultado <= 39.9) {
    document.informacao.nivel.value = `Entre 35,0 e 39,9
    
    Obesidade grau II
    
    Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde`
  } else {
    document.informacao.nivel.value = `Acima de 40,0
    
    Obesidade grau III
    
    Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.`
  }
}
