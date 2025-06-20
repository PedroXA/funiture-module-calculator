// TO-DO
// [] - CONTAR A QUANTIDADE DE MODULOS CRIADOS (FUNCIONALIDADE INDEPENDENTE)
// [] - MOSTRAR A QUANTIDADE DE MATERIAIS UTILIZADOS NO MÓDULO (SEPARADO POR MODULO)
// [] - MOSTRAR O VALOR DO MODULO JÁ PRONTO PARA VENDA (VALOR FINAL)


export const moduleProfit = () => {
    const largura_m = largura_formulário / 100;
    const altura_m = altura_formulário / 100
    const profundidade_m = profundidade_formulário / 100

    // Calculando as áreas principais (em m²):
    const laterais = 2 * (altura_m * profundidade_m)
    const fundo = altura_m * largura_m
    const topo_base = 2 * (largura_m * profundidade_m)
    const porta = altura_m * largura_m  // Se houver porta

    // Soma total de área de madeira usada
    const area_total = laterais + fundo + topo_base + porta

    // Preço final
    const preco = area_total * 250

}