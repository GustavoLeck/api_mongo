import express from "express";

const router = express.Router();

router.get('/health',  (req, res)=>{
    res.send("Server is running on port 3000");
})

export default router;