const express = require("express");
const router = express.Router();
const { Todo } = require("../models");

router.post("/create", (req, res) => {
  const data = req.body;
  Todo.create(data);
  res.json("success");
});

router.get("/retrieve",async (req,res)=>{
const data = await Todo.findAll();
res.json(data);
});

module.exports = router;
