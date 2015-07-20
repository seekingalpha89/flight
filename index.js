var number, origin, destination;

exports.setNumber = function (num) {
	number = num;
};

var number, origin, destination;

exports.setOrigin = function (o) {
	origin = o;
};

var number, origin, destination;

exports.setDestination = function (d) {
	destination = d;
};

exports.getInfo = function() {
	return {
		number:number,
		origin:origin,
		destination:destination,

	};


};