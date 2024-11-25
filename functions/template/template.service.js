const { db } = require("../../config/firebase-admin");
const { customAlphabet } = require("nanoid");
const alphabet =
  "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const nanoid = customAlphabet(alphabet, 14);

module.exports = {
  saveData: async (data, callBack) => {
    try {
      if (data.type == "save") {
        var res = [];
        for (const dt of data.data) {
          const userId = nanoid();
          const users = db.collection("users").doc(userId);
          await users.set(dt);
          res.push(userId);
        }
        return callBack(null, res);
      } else if (data.type == "update") {
        var res = [];
        for (const dt of data.data) {
          const userId = dt.uuid;
          const users = db.collection("users").doc(userId);
          const userData = await users.get();

          if (userData.exists) {
            await users.update(dt.data);
            res.push(userId + " [success]");
          } else {
            res.push(userId + " [failed]");
          }
        }
        return callBack(null, res);
      }
    } catch (error) {
      console.error("Error:", error);
      return callBack(error);
    }
  },

  getData: async (data, callBack) => {
    try {
      var res = [];
      for (const userId of data.uuid) {
        const users = await db.collection("users").doc(userId).get();

        if (users.exists) {
          res.push({
            id: users.id,
            ...users.data(),
          });
        }
      }

      return callBack(null, res);

      // var res = [];
      // const users = await db
      //   .collection("users")
      //   .where("name", "==", "Doe Foo")
      //   .where("age", "in", [30, 32])
      //   .get();

      // users.forEach((users) => {
      //   res.push({
      //     id: users.id,
      //     ...users.data(),
      //   });
      // });

      // return callBack(null, res);
    } catch (error) {
      console.error("Error:", error);
      return callBack(error);
    }
  },

  deleteData: async (data, callBack) => {
    try {
      var res = [];
      for (const userId of data.uuid) {
        const users = db.collection("users").doc(userId);
        const userData = await users.get();
        if (userData.exists) {
          await users.delete();
          res.push(userId + " [success]");
        } else {
          res.push(userId + " [failed]");
        }
      }
      return callBack(null, res);
    } catch (error) {
      console.error("Error:", error);
      return callBack(error);
    }
  },

  testData: async (data, callBack) => {
    try {
      return callBack(null, "testData Success");
    } catch (error) {
      console.error("Error:", error);
      return callBack(error);
    }
  },
};
