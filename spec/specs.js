describe("Ticket", function() {

  it("takes the age of a movie-goer", function() {
    var testTicket = new Ticket(40);
    expect(testTicket.age).to.equal(40);
   });

  it("takes the time of day", function() {
    var testTicket = new Ticket("nightTime");
    expect(testTicket.time).to.equal("nightTime");
  });

  it("takes the newness of the movie into account", function() {
    var testTicket = new Ticket("firstRun");
    expect(testTicket.run).to.equal("firstRun");
  });
  //   // it ("if age is less than or equal to 0 expect it to return alert('HEY, try to get a little more positive!')", function() {
  	// 	expect(countUpTo(-3)).to.equal(true);


  // it("adds the full Name to a contact", function() {
  //   var testContact = new Contact("Bill","Clinton");
  //   expect(testContact.fullName()).to.equal("Bill Clinton");
  // });

});
