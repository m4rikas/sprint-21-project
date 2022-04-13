const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

const db = new sqlite3.Database(path.join(__dirname, "movies.db"), (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the chinook database.");
});

async function getAllByTable(tableName) {
  const result = [];
  return new Promise((resolve, reject) => {
    db.each(
      `SELECT * from ${tableName}`,
      (err, data) => {
        if (err) {
          reject(err);
        }
        result.push(data);
      },
      () => {
        resolve(result);
      }
    );
  });
}

app.get("/api/series", async (req, res) => {
  try {
    const series = await getAllByTable("series");
    res.json(series);
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/films", async (req, res) => {
  try {
    const films = await getAllByTable("films");
    res.json(films);
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/all", async (req, res) => {
  try {
    const films = await getAllByTable("films");
    const series = await getAllByTable("series");

    res.json({ films, series });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3030, () => console.log("Listening on port 3030"));
