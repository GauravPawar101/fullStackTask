const router = require("express").Router();
const Student = require("../models/Student");

router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.render("index", { students });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/students", async (req, res) => {
  try {
    const { name, rollNumber, branch, marks } = req.body || {};
    await Student.create({ name, rollNumber, branch, marks });
    res.redirect("/");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/students/:id/update", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, rollNumber, branch, marks } = req.body || {};
    await Student.findByIdAndUpdate(id, { name, rollNumber, branch, marks });
    res.redirect("/");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/students/:id/delete", async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;