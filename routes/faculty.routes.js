const controller = require("../controller/logic/faculty.controller");

module.exports = (app) => {
    app.get("/faculty", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/faculty/bycode/:code", (req, res, next) => {
        controller.getByCode(req, res, next);
    });

    app.post("/faculty", (req, res, next) => {
        controller.createFaculty(req, res, next);
    });

    app.put("/faculty", (req, res, next) => {
        controller.updateFaculty(req, res, next);
    });

    app.delete("/faculty", (req, res, next) => {
        controller.deleteFaculty(req, res, next);
    });
};