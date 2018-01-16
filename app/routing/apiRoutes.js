const meandererMaker = require("../data/meanderers.js")
let meanderer = new meandererMaker()

module.exports = function(app) {

    app.get("/api/meanderers", function(req, res) {
        res.json(meanderer.showMeanderers())
    })

    app.post("/api/meanderers", function(req, res) {
        //console.log(req.body)
        let newRequest = req.body

        let newMeanderer = new meandererMaker(newRequest.name, newRequest.picture, newRequest.survey)

        newMeanderer.newMeanderer()

        //console.log(newMeanderer.closestMatch)
        res.send(newMeanderer.closestMatch)

    })


}