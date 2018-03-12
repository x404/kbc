$(document).ready(function() {
	NProgress.start();
	var imagesCount = $('img').length,
		percent = 100 / imagesCount,
		progress  = 0, 
		loadedImg = 0,
		o = 0;

		console.log (imagesCount);

	if(imagesCount > 0){
		NProgress.set(0.1); 
		
		for(var i = 0; i < imagesCount; i++){
			var img_copy = new Image();
			img_copy.src = document.images[i].src;
			img_copy.onload = img_load;
			img_copy.onerror = img_load;
		}

		function img_load () {
			progress += percent;
			(o <= 1) ? o = 1.5 * Math.ceil(progress)/100 : o = 1 ;
			document.querySelector('.body').style.opacity = o;

			loadedImg++;
			// console.log(Math.ceil(progress)/120);
			NProgress.set(Math.ceil(progress)/120); 
			// if (progress >= 100 || loadedImg == imagesCount) {				
			// }
		}
	}
	else{
		// NProgress.done();
	}
});
