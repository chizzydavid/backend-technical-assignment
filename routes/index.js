import express from 'express';
const router = express.Router();


router.post("/test", function (req, res) {
  res.json({
    "message": "hello world"
  })
});

export default router;
