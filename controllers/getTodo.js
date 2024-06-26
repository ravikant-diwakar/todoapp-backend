//import th model
const Todo = require("../models/Todo");

//define route handler

exports.getTodos = async (req, res) => {
  try {
    // fetch all todo items from database
    const todos = await Todo.find({});

    // Response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire Todo Data is Fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    // extract Todo items basis on id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    // Data for given id not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No Data Found with Given Id",
      });
    }

    // Data for given id found
    res.status(200).json({
      success: true,
      data: todo,
      message: "Success",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};
