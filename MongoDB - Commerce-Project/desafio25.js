use commerce;
db.produtos.updateMany({ nome: 'Big Mac' }, { $unset: { valorUnitario: "" } });
