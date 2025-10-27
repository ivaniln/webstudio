const body = document.querySelector('body')

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


class PortfolioList {
    async init() {
        this.itemsList = document.querySelector('.works');

        const items = await this.getItems();

        this.render(items);
    }

    render(items) {
        for (const item of items) {
            const id = item.id%9+1
            console.log(id)
            this.itemsList.insertAdjacentHTML(
                'beforeend', `
            <div class="works__item pages">
                <div class="works__item__image-container">
                    <img src="images/project${id}.png" alt="">
                </div>
                <div class="works__item__overlay">
                    <p class="works__item__overlay__text">${item.fullDesc}</p>
                </div>
                <div class="works__item__info">
                    <h3 class="works__item__info-title">${item.title}</h3>
                    <p class="works__item__info-text">${item.desc}</p>
                </div>
            </div>
        `)
        }
    }

    async getItems() {
        const response = await fetch("https://64d495f8b592423e46944ae0.mockapi.io/portfolio")
        const data = await response.json();
        return data;
    }
}

const portfolioList = new PortfolioList();
portfolioList.init()
