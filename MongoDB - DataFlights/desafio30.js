use dataFlights;
const countAzul = db.voos.count({
  $and:
    [
      { 'empresa.nome': 'AZUL' },
      { 'natureza': 'Doméstica' }
    ]
});
db.resumoVoos.insertOne({ empresa: 'AZUL', totalVoosDomesticos: countAzul });
