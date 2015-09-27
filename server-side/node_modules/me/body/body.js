var arm = require('./arm/arm.js').arm,
	leg = require('./leg/leg').leg,
	belly = require('./belly/belly').belly;
var body = {
	run:function(){
		return leg.run();
	},
	digist:function(){
		return belly.digist();
	},
	arm:function(){
		return arm.coding();
	}
}
exports.body = body;