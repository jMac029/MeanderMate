let meanders = require("../data/meanders")

module.exports = function(app) {

    app.get("/api/survey", function(req, res) {
        res.json(survey)
    })

    app.get("/api/meanders", function(req, res) {
        res.json(meanders)
    })

    app.post("/api/meanders", function(req, res) {
        let newMeander = req.body
        console.log(req.body)
    })

    app.post("/api/surveySubmit", function(req, res) {
        meanders.push(req.body)
        console.log(req.body)

        let newMeander = req.body
        let meandersArray = []

        for (let i = 0; i < meandersArray; i++) {
            var scoresDifference = 0

            for (let j = 0; j < newMeander.length; j++) {
                scoresDifference += (Math.abs(parseInt(meanders[i].scores[j]) - parseInt(newMeander[j])))
            }
            newMeander.push(scoresDifference)
        }
    })


}