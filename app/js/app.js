var app = new Vue({
	el: "#main",
	data: {
		lengthA: document.querySelector('#length').value,
		widthB: document.querySelector('#width').value,
		areatile: 0,
		depth : document.querySelector('#depth').value,

		countC: document.querySelector('#count').value, 

		// k : 35,
		k : 105,
		scale : 3,
		tile: '',
		active: true,
		lcb : 'gray',  //COLORS
		gray: 'gray',
		color: 'color'
	},
	computed: {
		areaC: function(){
			document.querySelector('#tiles').style.width = Math.ceil(this.lengthA * this.k / this.scale) + 'px';
			document.querySelector('#tiles').style.height = Math.ceil(this.widthB * this.k / this.scale) + 'px';
			output = this.lengthA * this.widthB;
			return output;
		},
		counts: function(){
			// output = Math.ceil(this.areaC / this.areatile);
			output = Math.ceil(this.areaC * this.countC);
			return output;
		},
		capacity: function(){
			output = this.areaC * this.depth;
			return +output.toFixed(10);
		}
	},
	methods:{
		changeTile: function(e){
			this.areatile = e.target.dataset.areatile;
			this.tile = e.target.hash.replace("#","");
		},
		loadData: function(){
			active = document.querySelector('.tiles .active');
			this.areatile = active.dataset.areatile;
			this.tile = active.hash.replace("#","");
			document.querySelector('#tiles').style.width = Math.ceil(this.lengthA * this.k / this.scale) + 'px';
			document.querySelector('#tiles').style.height = Math.ceil(this.widthB * this.k / this.scale) + 'px';
		}
	},
	mounted: function(){
		this.loadData()
	}
})



// function declOfNum(number, titles) {  
//     cases = [2, 0, 1, 1, 1, 2];  
//     return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
// }

// declOfNum(count, ['метр', 'метра', 'метров']);