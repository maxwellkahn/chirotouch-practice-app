const Patient = require("../models/patient");

module.exports = {
  index,
};

async function index(req, res) {
  try {
    const foundPatients = await Patient.find({});
    res.render("patients/index", {
      patients: foundPatients,
    });
  } catch (err) {
    res.status(404);
  }
}
