const router = require("express").Router();

const { auth, validation, ctrlWrapper } = require("../../middleware");
const { joiRegisterSchema, joiLoginSchema, joiGoogleSchema } = require("../../models/user");
const { auth: ctrl } = require("../../controllers");

router.post("/signup", validation(joiRegisterSchema), ctrlWrapper(ctrl.signup));

router.post("/signin", validation(joiLoginSchema), ctrlWrapper(ctrl.signin));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

router.get("/google", ctrlWrapper(ctrl.googleAuth));

router.get("/google-redirect", validation(joiGoogleSchema), ctrlWrapper(ctrl.googleRedirect));

module.exports = router;
