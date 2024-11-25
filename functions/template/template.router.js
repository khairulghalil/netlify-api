const templateController = require("./template.controller");
const router = require("express").Router();

router.post("/saveData", templateController.saveData);
router.post("/getData", templateController.getData);
router.post("/deleteData", templateController.deleteData);
router.post("/testData", templateController.testData);

module.exports = router;
