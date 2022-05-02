let express = require('express')
let States = require('../models').States

let router = express.Router()

router.get('/states',function(req,res,next){
    States.findAll({order:['name']}).then(states => {
        return res.json(states)
    })
    .catch( err => next(err))
})
//Uses parameter :name in the route
//path to match any patch request to
// /state/anything
router.get('/state/:name',function(req,res,next){
    let stateName = req.params.name
    States.findOne({where:{name:stateName}})
        .then(state => {
            if (state) {
                return res.json(state)
            }else{
                return res.status(404).send('state not found')
            }

        })
        .catch(err => next(err))
})
//patch route to update state status to visited
router.patch('/states/:name', function(req,res,next){
    let stateName=req.params.name
    let stateVisited = req.body.visited

    States.update({visited:stateVisited},{where:{name:stateName}})
        .then(rowsUpdated=>{
            let numberofRowsUpdated = rowsUpdated[0]
            if (numberofRowsUpdated==1) {
                return res.send('ok')
            }
            return res.status(404).send('State not found')
    })
    // err handler defined by server.js
    .catch(err=>next(err))
})

module.exports = router