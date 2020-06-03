use dataFlights;
const countGol = db.voos.count({
  $and:
    [
      { 'empresa.nome': 'GOL' },
      { 'natureza': 'Doméstica' }
    ]
});
db.resumoVoos.insertOne({ empresa: 'GOL', totalVoosDomesticos: countGol });
