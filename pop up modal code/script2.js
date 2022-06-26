const openModal = document.getElementById("open")
const modalContainer = document.getElementById("modal_container")
const closeModal = document.getElementById("close")

openModal.addEventListener('click', () => {
    modalContainer.classList.add('show')
});

closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('show')
});