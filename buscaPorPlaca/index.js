const Firestore = require('@google-cloud/firestore');
const PROJECTID = 'trabalhocarros';
const COLLECTION_NAME = 'carros';

const firestore = new Firestore({
  projectId: PROJECTID,
  timestampsInSnapshots: true,
});

exports.buscaPorPlaca = async (req, res) => {
  const placa = req.query.placa;

  if (!placa) {
    res.send("Informe a placa");
    throw new Error("Informe a placa");
  }

    const query = await firestore.collection(COLLECTION_NAME).where("placa", "==", placa).get();

  if (query.empty) {
    res.send("Nenhum carro foi encontrado com essa placa.");
    return;
  }

  query.forEach((doc) => {
    res.send(JSON.stringify(doc.data()));
  });
};