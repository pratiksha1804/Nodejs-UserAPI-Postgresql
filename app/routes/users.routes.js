module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", users.create);
    router.get("/", users.findAll);
    router.put("/:id", users.update);
    router.delete("/:id", users.delete);
    
    app.use('/api/user', router);
  };
  