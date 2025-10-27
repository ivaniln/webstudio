const body = document.querySelector('body')


const modal = document.querySelector('.modal-box')
const opneModal = document.querySelector('.open-modal')
const closeModal = document.querySelector('.close-modal')

opneModal.addEventListener("click", () => {
    modal.classList.remove('is-hidden')
    body.classList.add('fixed')
    window.scrollTo(0, 0)
})
closeModal.addEventListener("click", () => {
    modal.classList.add('is-hidden')
    body.classList.remove('fixed')
})


const navigation = document.querySelector('.mobile-navigation')
const opneNavigation = document.querySelector(".open-navigation")
const closeNavigation = document.querySelector('.close-navigation')

opneNavigation.addEventListener("click", () => {
    navigation.classList.remove('is-hidden')
    body.classList.add('fixed')
    window.scrollTo(0, 0)
})
closeNavigation.addEventListener("click", () => {
    navigation.classList.add('is-hidden')
    body.classList.remove('fixed')
})