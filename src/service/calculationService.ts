// TO-DO
// [] - CONTAR A QUANTIDADE DE MODULOS CRIADOS (FUNCIONALIDADE INDEPENDENTE)
// [] - MOSTRAR A QUANTIDADE DE MATERIAIS UTILIZADOS NO MÓDULO (SEPARADO POR MODULO)
// [] - MOSTRAR O VALOR DO MODULO JÁ PRONTO PARA VENDA (VALOR FINAL)


// Calculate the area of wood needed in square meters
const areaNeeded = ((module.width * module.height * 2) + (module.width * module.depth * 2) + (module.height * module.depth * 2)) / 10000; // cm² to m²
const woodCost = areaNeeded * module.woodType.price;

totalPrice += woodCost;
