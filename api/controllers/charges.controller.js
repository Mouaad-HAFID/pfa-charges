const charge = require("../models/charge.js");
const models = require("../models/index.js");
const professeur = models.professeur;
const Charge = models.charge;

//TODO: Fix confirmation messages

const getCharge = async (req, res, next) => {
  try {
    const charge = await Charge.findOne({ where: { profID: req.params.id } });
    return res.status(200).json({ charge });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createCharge = async (req, res, next) => {
  try {
    const charge = Charge.create(req.body);
    return res.status(200).json({ charge });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateCharge = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const [updated] = await Charge.update(req.body, {
      where: { profID: id },
    });
    if (updated) {
      const updatedCharge = await Charge.findOne({ where: { profID: id } });
      return res.status(200).json({ charge: updatedCharge });
    }
    throw new Error("Charge not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteCharge = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Charge.destroy({
      where: { profID: id },
    });
    if (deleted) {
      return res.status(204).send("Charge deleted");
    }
    throw new Error("Charge not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getCharge,
  createCharge,
  updateCharge,
  deleteCharge,
};
