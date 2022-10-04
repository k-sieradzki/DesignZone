const bar = document.querySelector('.bar');
const navItem = document.querySelectorAll('.nav-item')
const desktopBar = document.querySelector('.desktop_bar');

bar.addEventListener('click', () => {
	desktopBar.classList.toggle('show');
});

navItem.forEach((e) => {
    e.addEventListener('click', () => { desktopBar.classList.toggle('show')})
})

const scrollTop = document.querySelector('.scroll-top')
scrollTop.addEventListener('click', ()=>{
	window.scrollTo(0, 0);
})






const imgBox = document.querySelectorAll('.img-box')
const portfolioBtns = document.querySelector('.portfolio-btns')
const pBtn = document.querySelectorAll('.pBtn')

const checkClick = e => {
	let value = e.target.closest('button').textContent.toLowerCase()

	for(i=0; i<pBtn.length; i++){
		if(pBtn[i].innerText.toLowerCase() !== value){
			pBtn[i].classList.remove('active')
		}else{
			pBtn[i].classList.add('active')
		}
	}

	for(i=0; i<imgBox.length; i++){
		if(value === 'all'){
			imgBox[i].classList.remove('hide')
		}else if(imgBox[i].classList.contains(`${value}`)){
			imgBox[i].classList.remove('hide')
		}else{
			imgBox[i].classList.add('hide')
		}
	}
	
}

portfolioBtns.addEventListener('click', checkClick)


let myNav = document.querySelector('.navbar');
function checkNavColor() {
	if (window.scrollY !== 0) {
		myNav.classList.add('scrolled');
		desktopBar.classList.add('scrolled');
	} else {
		myNav.classList.remove('scrolled');
		desktopBar.classList.remove('scrolled');
	}
}

window.onscroll = function () {
	checkNavColor();
};
window.onload = function () {
	checkNavColor();
};


