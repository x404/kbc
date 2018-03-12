$(document).ready(function() {
	NProgress.start();
	var imagesCount = $('img').length,
		percent = 100 / imagesCount,
		progress  = 0, 
		loadedImg = 0,
		i = 0;

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

			(i <= 1) ? i = 1.5 * Math.ceil(progress)/100 : i =1 ;
			document.querySelector('.body').style.opacity = i;

			loadedImg++;
			console.log(loadedImg);
			NProgress.set(Math.ceil(progress)/100); 
			if (progress >= 100 || loadedImg == imagesCount) {
				NProgress.done();
			}
		}
	}
	else{
		NProgress.done();
	}
});
