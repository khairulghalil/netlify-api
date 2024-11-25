const templateService = require("./template.service");

module.exports = {
  saveData: (req, res) => {
    const body = req.body;
    templateService.saveData(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          status: "Error",
          success_message: null,
          error_message: err,
        });
      } else {
        return res.status(200).json({
          status: "Success",
          success_message: "Successful",
          error_message: null,
          // received_data: body,
          result: { data: results },
        });
      }
    });
  },

  getData: (req, res) => {
    const body = req.body;
    templateService.getData(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          status: "Error",
          success_message: null,
          error_message: err,
        });
      } else {
        return res.status(200).json({
          status: "Success",
          success_message: "Successful",
          error_message: null,
          // received_data: body,
          result: { data: results },
        });
      }
    });
  },

  deleteData: (req, res) => {
    const body = req.body;
    templateService.deleteData(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          status: "Error",
          success_message: null,
          error_message: err,
        });
      } else {
        return res.status(200).json({
          status: "Success",
          success_message: "Successful",
          error_message: null,
          // received_data: body,
          result: { data: results },
        });
      }
    });
  },

  testData: (req, res) => {
    const body = req.body;
    templateService.testData(body, (err, results) => {
      if (err) {
        return res.status(400).json({
          status: "Error",
          success_message: null,
          error_message: err,
        });
      } else {
        return res.status(200).json({
          status: "Success",
          success_message: "Successful",
          error_message: null,
          // received_data: body,
          result: { data: results },
        });
      }
    });
  },
};
