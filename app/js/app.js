var app = new Vue({
	el: "#main",
	data: {
		lengthA: document.querySelector('#length').value,
		widthB: document.querySelector('#width').value,
		areatile: 0,
		depth : document.querySelector('#depth').value,
		k : 35,
		scale : 1
	},
	computed: {
		areaC: function(){
			document.querySelector('#tiles').style.width = this.lengthA * this.k + 'px';
			document.querySelector('#tiles').style.height = this.widthB * this.k + 'px';
			output = this.lengthA * this.widthB;
			return output;
		},
		counts: function(){
			output = Math.ceil(this.areaC / this.areatile);
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
		},
		loadData: function(){
			this.areatile = document.querySelector('.tiles .active').dataset.areatile;
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