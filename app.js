const express = require("express");
const app = express();
const con = require("./config");
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  con.query("select * from classmates", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        success: true,
        message: " Users Fetched Successfully",
        result
      });
    }
  });
});

app.post("/", (req, res) => {
  const data = req.body;
  con.query("INSERT INTO classmates SET ?", data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        success: true,
        message: "User has been posted",
        result
      });
    }
  });
});

app.put("/:id", (req, res) => {
    const data = req.body
    const id = req.params.id
  con.query(
    "UPDATE classmates SET ? where id= "+id,
    data,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({
          success: true,
          message: "user updated",
          result
        });
      }
    }
  );
});

app.delete("/:id", (req, res) => {
  let classmates_id = req.params.id;
  con.query(
    "DELETE from classmates where id = " + classmates_id,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.send({
          success: true,
          message: "user deleted",
        });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
