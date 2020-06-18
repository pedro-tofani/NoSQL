use commerce;
db.produtos.updateMany({ nome: 'Big Mac' }, { $inc: { 'vendasPorDia.3': 60 } });
