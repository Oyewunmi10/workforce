const express = require ('express');
const router = express.Router();
const {getGoals,setGoal,updateGoal,deleteGoal} = require ('../controller/goalsController')
router.get('/',getGoals);
router.post('/', setGoal);
router.put('/', updateGoal);
router.delete('/', deleteGoal)

module.exports = router