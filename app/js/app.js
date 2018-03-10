var app = new Vue({
	el: "#main",
	data: {
		lengthA: 20,
		widthB: 5,
		areatile: 0.16
	},
	computed: {
		areaC: function(){
			output = this.lengthA * this.widthB;
			return output;
		},
		counts: function(){
			output = this.areaC / this.areatile;
			return output;
		}
	}
})