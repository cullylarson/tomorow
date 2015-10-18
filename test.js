var assert = require('assert')
var tomorow = require("./")

describe("Tomorow", function() {
    it("Should return tomorrow's date", function () {
        var today = new Date()
        var tomorrowDate = tomorow()

        var oneday = 86400000 // milli-seconds
        var twodays = oneday * 2

        // the difference might not be exactly 24 hours, since
        // the two dates were generates ms apart
        var diff = tomorrowDate.getTime() - today.getTime()

        console.log(diff)

        assert( diff < twodays, "Tomorrow is at least the next day." )
        assert( diff >= oneday, "Tomorrow could still be today!" )
    })
})