let meanderers = [{
        "name": "Jim",
        "photo": "http://m5.paperblog.com/i/55/552543/how-the-hell-does-jim-carrey-do-it-L-NgAvhp.jpeg",
        "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    },

    {
        "name": "Jack",
        "photo": "http://iconolo.gy/sites/default/files/jack37.jpg",
        "scores": [1, 3, 5, 4, 5, 1, 2, 5, 4, 1]
    },

    {
        "name": "Sally",
        "photo": "https://i.pinimg.com/236x/ed/8d/6d/ed8d6dfe49b5a67670aa3692d7c07e9c.jpg",
        "scores": [2, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    }
]

// ---------------------------------------
// constructor is exported to api route
// ---------------------------------------
function meandererConstructor(name, picture, survey) {
    //Holds json info in an object
    this.meandererObj = {
        "name": name,
        "photo": picture,
        "scores": survey
    }

    //pushes the meanderObj object meanders array
    this.newMeanderer = function() {
        meanderers.push(this.meandererObj);
        this.findMatch();
    }

    //variable to hold the match
    this.closestMatch;

    //used for api get function to display all meanderers
    this.showMeanderers = function() {
        console.log(meanderers)
        return meanderers;
    }

    //loops to find the match
    this.findMatch = function() {
        let currentBestMatch;
        let currentBestMatchScore = -1;

        for (let i in meanderers) {
            // so you don't dont match with yourself (that would be embarassing)
            if (meanderers[i] != this.meandererObj) {
                var newMeandererBestMatch = calcMeandererDifference(meanderers[i].scores, this.meandererObj.scores);

                if (currentBestMatchScore >= 0) {
                    if (newMeandererBestMatch < currentBestMatchScore) {
                        currentBestMatch = meanderers[i];
                        currentBestMatchScore = newMeandererBestMatch;
                    }
                }
                //drops first person in array to have baseline to compare
                else {
                    currentBestMatch = meanderers[i];
                    currentBestMatchScore = newMeandererBestMatch;
                }
            }
        }
        this.closestMatch = currentBestMatch;
    }
}

module.exports = meandererConstructor;

let calcMeandererDifference = function(arr1, arr2) {
    totalDifference = 0;
    for (let i in arr1) {
        totalDifference += Math.abs(arr1[i] - arr2[i]);
    }
    return totalDifference;
}