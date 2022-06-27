//Navigation
home = document.querySelector('#item-home')
let j = 0;
let i = document.getElementById('menu').childNodes;
let expan = document.querySelector('.toggle');
expan.addEventListener('click', expand)
function expand() {
    if (j==0){
        document.getElementById('add').style.transform='rotate(45deg)';
        document.getElementById('menu').style.transform='scale(1)';

        i[1].style.transform='translateY(-80px)';
        i[3].style.transform='translate(70px, -40px)';
        i[5].style.transform='translate(70px, 40px)';
        i[7].style.transform='translateY(75px)';
        // i[9].style.transform='translate(-70px, 40px)';
        // i[11].style.transform='translate(-70px, -40px)';
        j = 1;

    }
    else {
        document.getElementById('add').style.transform='rotate(0deg)';
        document.getElementById('menu').style.transform='scale(0.9)';
        i[1].style.transform='translateY(0)';
        i[3].style.transform='translate(0)';
        i[5].style.transform='translate(0)';
        i[7].style.transform='translateY(0)';
        // i[9].style.transform='translate(0)';
        // i[11].style.transform='translate(0)';
        j = 0;
    }
}
//Navigation^^
//Modal Button
const openModal = document.getElementById("open")
const modalContainer = document.getElementById("modal_container")
const closeModal = document.getElementById("close")

openModal.addEventListener('click', () => {
    modalContainer.classList.add('show')
});

closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('show')
});
//modal button^^