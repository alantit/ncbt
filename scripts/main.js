var my_image = document.querySelector('img');

my_image.onclick = function change_img() {
	var myScr = my_image.getAttribute('src');
	if (myScr=== 'images/wireless.png') {
		my_image.setAttribute('src','images/wireless_2.png')
	} else {
		my_image.setAttribute('src','images/wireless.png')
	}
}