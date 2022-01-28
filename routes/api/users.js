const router = require("express").Router();

const { auth, upload, ctrlWrapper } = require("../../middleware");
const { users: ctrl } = require("../../controllers");

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.get("/currentbalance", auth, ctrlWrapper(ctrl.getCurrentBalance));

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);
router.patch("/balance", auth, ctrlWrapper(ctrl.updateBalance));

module.exports = router;
