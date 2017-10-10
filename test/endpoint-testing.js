const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

const {app, runServer, closeServer} = require("../server");


chai.use(chaiHttp);

describe("Endpoints", function(){

    before(function(){
        return runServer();
    });

    after(function(){
        return closeServer();
    });

    describe("GET endpoint", function() {
        it("should return status 200 on root GET", function(){
            return chai.request(app).get("/").then(function(res){
                res.should.have.status(200);
            });
        });
    });
});