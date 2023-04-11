const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')


// @desc get goals
// route get /api/goals
// access Private

const getGoals = asyncHandler(async(req, res, next) => {
    const goal = await Goal.Find()
    
    res.status(200).json(goals)
})

// desc set goal
// route set /api/goals
// access private
// const setGoal = asyncHandler(async(req, res) => {
//     const goal = await Goal.Find()
//     res.status(200).json(goals)
//     })

    // desc set goal
    // route set /api/goals
    // access private
    const setGoal = asyncHandler(async(req, res) => {
        if(!req.body.text){
            res.status(400)
            throw new Error('Please add a text field')
        }
        const goal = await Goal.Create({
            text: req.body.text
        })
        res.status(200).json(goal)
        
    })
    // desc update goals
    // route put /api/goals:Id
    // access Private

    const updateGoal = asyncHandler(async(req, res) => {
        const goal = await Goal.findById(req,params.id)

        if(!goal) {
            res.status(400)
            throw new Error('Goal not found')
        }
        const updateGoal = await Goal.findByIdAndUpdate(req,params.id, req.body, {new:  true
        })
        res.status(200).json(updateGoal)

    })


        // desc delete goals
        // route delete /api/goals:id
        // access private
        const deleteGoal = asyncHandler(async (req,res) => {
            const goal = await Goal.findbyId(req.params.id)

            if(!goal){
                res.status(400)
                throw new Error ('Goal not found')
            }
            await goal.remove()

            res.status(200).json({id: req.params.id})
        })

        module.exports = {
            getGoals,
            setGoal,
            updateGoal,
            deleteGoal,
        }
