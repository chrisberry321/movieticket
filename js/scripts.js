function Ticket(movieName, showing, SeniorDiscount) {
	this.movieName = movieName;
	this.showing = showing;
	this.SeniorDiscount = SeniorDiscount;
}

Ticket.prototype.price = function() {


	var ticketPrice = 10;


	if (
		this.filmName === "Movie1" ||
		this.filmName === "Movie2" ||
		this.filmName === "Movie3" ||
		this.filmName === "Movie4"
		) {
		ticketPrice += 2;
	} else if (this.filmName === "Other") {
		ticketPrice += 0;
	}


	if (this.showing === "Main" ) {
		ticketPrice += 0;
	} else if (this.showing ==="Matinee") {
		ticketPrice -= 2;
	}

	if (this.SeniorDiscount === true) {
		ticketPrice -=4;
	} else if (this.SeniorDiscount === false) {
		ticketPrice += 0;
	}

	return ticketPrice;
};





$(document).ready(function() {

	$("form#ticket-information").submit(function(event) {

		event.preventDefault();

		var submittedMovie = $("select#movie").val();
		var stringAge = $("input#age").val();
		var integerAge = parseInt(stringAge);
		var SeniorDiscount;


		if (integerAge >= 65) {
			SeniorDiscount = true;
		} else if (integerAge < 64) {
			SeniorDiscount = false;
		}

		var submittedShowing = $("select#showing").val();

		newTicket = new Ticket(submittedMovie, submittedShowing, SeniorDiscount);
		newTicketPrice = newTicket.price();

		$("span#finalPrice").append(newTicketPrice);

	});
});
