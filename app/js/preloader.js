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

			(progress > 30 && document.querySelectorAll('.fade-1').length > 0) ? document.querySelector('.fade-1').style.opacity = 1 : '';
			(progress > 50 && document.querySelectorAll('.fade-2').length > 0) ? document.querySelector('.fade-2').style.opacity = 1 : '';
			(progress > 60 && document.querySelectorAll('.fade-3').length > 0) ? document.querySelector('.fade-3').style.opacity = 1 : '';
			(progress > 75 && document.querySelectorAll('.fade-4').length > 0) ? document.querySelector('.fade-4').style.opacity = 1 : '';
			(progress > 90 && document.querySelectorAll('.fade-5').length > 0) ? document.querySelector('.fade-5').style.opacity = 1 : '';
			NProgress.set(Math.ceil(progress)/120); 
			// if (progress >= 100 || loadedImg == imagesCount) {				
			// }
		}
	}
	else{
		// NProgress.done();
	}
});
