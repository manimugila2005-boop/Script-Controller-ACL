const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

// Sample records
const records = [
  {
    id: 1,
    name: "Student Record 1",
    department: "CS",
    access: "allowed"
  },
  {
    id: 2,
    name: "Student Record 2",
    department: "BCA",
    access: "restricted"
  },
  {
    id: 3,
    name: "Student Record 3",
    department: "CS",
    access: "allowed"
  }
];

// Script-Controlled ACL
app.get("/records", (req, res) => {

    const department = req.query.department;

    const filteredRecords = records.filter(record => {
        return record.department === department &&
               record.access === "allowed";
    });

    res.json({
        message: "Accessible Records",
        records: filteredRecords
    });
});

// Home page
app.get("/", (req, res) => {
    res.send("Script-Controlled ACL is running");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});