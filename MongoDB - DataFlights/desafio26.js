use dataFlights;
db.voos.findOne({
  $nor:
    [
      { litrosCombustivel: { $exists: false } },
      { litrosCombustivel: { $gt: 600 } },
      { 'empresa.nome': { $in: ['GOL', 'AZUL'] } }
    ]
});
