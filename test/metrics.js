var util = require('util')
var should = require('should')
var DataDog = require('../')


var ddog = new DataDog( process.env.DATADOG_API_KEY, process.env.DATADOG_APP_KEY)


describe('The node-datadog Metrics Series integration ', function() {

  before(function(done){
      
  })

  it('should be able to post a Counter', function(done) {

    var counters = {
      "series": [{
        "metric": "test.ddagent.series",
        "points": [
          [Date.now(), 1]
        ],
        "type": "counter",
        "tags": ["test", "test-series"]
      }]
    }

    ddog.postSeries(counters, function(error, response, body) {
      response.statusCode.should.be.within(200, 202)
      done()
    })

  })


  it('should be able to post a Gauge', function(done) {

    var gauge = {
      "series": [{
        "metric": "test.ddagent.series",
        "points": [
          [Date.now(), 1]
        ],
        "type": "gauge",
        "tags": ["test", "test-series"]
      }]
    }

    ddog.postSeries(gauge, function(error, response, body) {
      response.statusCode.should.be.within(200, 202)
      done()
    })

  })

})
