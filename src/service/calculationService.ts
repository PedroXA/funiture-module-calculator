// TO-DO
// [] - CONTAR A QUANTIDADE DE MODULOS CRIADOS (FUNCIONALIDADE INDEPENDENTE)
// [] - MOSTRAR A QUANTIDADE DE MATERIAIS UTILIZADOS NO MÓDULO (SEPARADO POR MODULO)
// [] - MOSTRAR O VALOR DO MODULO JÁ PRONTO PARA VENDA (VALOR FINAL)




export const moduleProfit = (modulo: { largura: number; altura: number; profundidade: number; moduleDrawerQuantity: number; moduleShelfQuantity: number; moduleDoorQuantity: number; moduleDrawerType: string; moduleDoorType: string; }) => {

    // const moduleDrawerPrices = {
    //     ["interna"]: (60 + 70) * modulo.moduleDrawerQuantity,
    //     ["externa"]: (60 + 70) * modulo.moduleDrawerQuantity + (modulo.moduleDrawerQuantity * 5)
    // } as const;

    let valorGaveta, valorPorta;

    // Transformando CM em M
    let largura_m = modulo.largura / 100;
    let altura_m = modulo.altura / 100
    let profundidade_m = modulo.profundidade / 100

    // Calculando as áreas principais (em m²):
    let laterais = 2 * (altura_m * profundidade_m)
    let fundo = altura_m * largura_m
    let topo_base = 2 * (largura_m * profundidade_m)
    let porta = altura_m * largura_m  // Se houver porta

    // Soma total de área de madeira usada
    let area_total = laterais + fundo + topo_base + porta

    // Calculo - Portas
    if (modulo.moduleDoorType === "correr") {
        valorPorta = modulo.moduleDoorQuantity * 70;
    }
    else if (modulo.moduleDoorType === "basculante") {
        valorPorta = modulo.moduleDoorQuantity * 30;
    }
    else {
        valorPorta = 0;
    }

    // Calculo - Gavetas
    if (modulo.moduleDrawerType === "interna") {
        valorGaveta = (60 + 70) * modulo.moduleDrawerQuantity;
    }
    else if (modulo.moduleDrawerType === "externa") {
        valorGaveta = (60 + 70) * modulo.moduleDrawerQuantity + (modulo.moduleDrawerQuantity * 5);
    }
    else {
        valorGaveta = 0
    }

    // Preço final
    const preco = (area_total * 250) + valorGaveta + valorPorta;

    return preco;
}