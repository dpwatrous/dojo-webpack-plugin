define(["dojo/request/default!"], function(request) {
	it("should load request/xhr", function() {
		"dojo/request/xhr".should.be.eql(request);
	});
});
