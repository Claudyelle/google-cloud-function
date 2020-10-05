const Firestore = require('@google-cloud/firestore');
const PROJECTID = 'trabalhocarros';
const COLLECTION_NAME = 'carros';

const firestore = new Firestore({
  projectId: PROJECTID,
  timestampsInSnapshots: true,
});

exports.cadastrarCarro = async (req, res) => {
      const { placa, cor, preco, modelo, marca } = req.query;
    return await firestore.collection(COLLECTION_NAME)
      .add({ placa, cor, preco, modelo, marca })
      .then(doc => {
        return res.status(200).send(doc);
      }).catch(err => {
        console.error(err);
        return res.status(404).send({ error: 'unable to store', err });
      });
}