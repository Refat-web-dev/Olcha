let body = document.body
let wrapper = body.querySelector('.smartphone_wrapper')
luyout()
smartphones()
smartphones()
smartphones()
function luyout() {

    // create

    let header = document.createElement('div')

    let container = document.createElement('div')

    let bottom_header = document.createElement('div')
    let bottom_left = document.createElement('div')
    let bottom_left_img = document.createElement('img')

    let bottom_center = document.createElement('div')
    let bottom_center_button = document.createElement('button')
    let bottom_center_button_span = document.createElement('span')
    let search_parent = document.createElement('div')
    let search = document.createElement('input')
    let search_btn = document.createElement('a')
    let search_btn_img = document.createElement('img')

    let bottom_right = document.createElement('div')
    let bottom_right_item = document.createElement('a')
    let item_img = document.createElement('div')
    let item_text = document.createElement('div')
    let item_text_entrails = document.createElement('p')

    let bottom_right_item_two = document.createElement('a')
    let item_img_two = document.createElement('div')
    let item_img_two_xml = document.createElement('div')
    let item_text_two = document.createElement('div')
    let item_text_entrails_two = document.createElement('p')

    let bottom_right_item_three = document.createElement('a')
    let item_img_three = document.createElement('div')
    let item_text_three = document.createElement('div')
    let item_text_entrails_three = document.createElement('p')

    let bottom_right_item_fourth = document.createElement('a')
    let item_img_fourth = document.createElement('div')
    let item_text_fourth = document.createElement('div')
    let item_text_entrails_fourth = document.createElement('p')

    //styling

    header.classList.add('b_header')

    container.classList.add('container')

    bottom_header.classList.add('bottom_header')

    bottom_left.classList.add('bottom_left')
    bottom_left_img.src = "https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg"
    bottom_left_img.alt = "logo"

    bottom_center.classList.add('bottom_center')
    bottom_center_button.classList.add('burger_btn')
    bottom_center_button_span.classList.add('burger')
    bottom_center_button.innerHTML = 'Каталог'
    search_parent.classList.add('search_parent')
    search.classList.add('search')
    search.type = 'text'
    search.placeholder = 'Поиск по каталогу'
    search_btn.classList.add('search_btn')
    search_btn.href = '#'
    search_btn_img.src = "https://olcha.uz/_nuxt/search.2a234c15.svg"
    search_btn_img.alt = "btn"

    bottom_right.classList.add('bottom_right')

    bottom_right_item.classList.add('item')
    bottom_right_item.href = '#'
    item_img.classList.add('item_img')
    item_img.classList.add('statistic')
    item_text.classList.add('item_text')
    item_text_entrails.innerHTML = "Сравнение"

    bottom_right_item_two.classList.add('item')
    bottom_right_item_two.href = '#'
    item_img_two.classList.add('item_img')
    item_img_two.classList.add('heart')
    item_text_two.classList.add('item_text')
    item_text_entrails_two.innerHTML = "Избранные"


    bottom_right_item_three.classList.add('item')
    bottom_right_item_three.href = '#'
    item_img_three.classList.add('item_img')
    item_img_three.classList.add('cart')
    item_text_three.classList.add('item_text')
    item_text_entrails_three.innerHTML = "Корзина"


    bottom_right_item_fourth.classList.add('item')
    bottom_right_item_fourth.href = '#'
    item_img_fourth.classList.add('item_img')
    item_img_fourth.classList.add('user')
    item_text_fourth.classList.add('item_text')
    item_text_entrails_fourth.innerHTML = "Войти"

    // append

    header.append(container)
    container.append(bottom_header)
    bottom_header.append(bottom_left, bottom_center, bottom_right)

    bottom_left.append(bottom_left_img)

    bottom_center.append(bottom_center_button, search_parent)
    bottom_center_button.prepend(bottom_center_button_span)
    search_parent.append(search, search_btn)
    search_btn.append(search_btn_img)

    bottom_right.append(bottom_right_item, bottom_right_item_two, bottom_right_item_three, bottom_right_item_fourth)

    bottom_right_item.append(item_img, item_text)
    item_text.append(item_text_entrails)

    bottom_right_item_two.append(item_img_two, item_text_two)
    item_text_two.append(item_text_entrails_two)

    bottom_right_item_three.append(item_img_three, item_text_three)
    item_text_three.append(item_text_entrails_three)

    bottom_right_item_fourth.append(item_img_fourth, item_text_fourth)
    item_text_fourth.append(item_text_entrails_fourth)

    body.children[0].after(header)

}
function smartphones(params) {
    // create

    let smartphone = document.createElement('div')
    let smartphone_top = document.createElement('div')
    let card_sale = document.createElement('div')
    let card_sale_span = document.createElement('span')
    let card_actions = document.createElement('div')
    let btn_like = document.createElement('button')
    let btn_compare = document.createElement('button')
    let smartphone_text = document.createElement('div')
    let smartphone_text_h3 = document.createElement('h3')
    let smartphone_text_p_first_child = document.createElement('p')
    let smartphone_text_p_last_child = document.createElement('p')
    let smartphone_btns = document.createElement('div')
    let cart_btn = document.createElement('button')
    let installment_btn = document.createElement('button')

    // styling

    smartphone.classList.add('smartphone')
    smartphone_top.classList.add('smartphone_top')
    card_sale.classList.add('card_sale')
    card_sale_span.innerHTML = '0 | 0 | 6'
    card_actions.classList.add('card_actions')
    btn_like.classList.add('btn_like')
    btn_compare.classList.add('btn_compare')
    smartphone_text.classList.add('smartphone_text')
    smartphone_text_h3.innerHTML = 'Смартфон Xiaomi Redmi Note 11 Pro 128GB 8 GB Grey'
    smartphone_text_p_first_child.innerHTML = '3 804 000 сум'
    smartphone_text_p_last_child.innerHTML = '634 000 сум x 6 мес'
    smartphone_btns.classList.add('smartphone_btns')
    cart_btn.classList.add('cart_btn')
    installment_btn.classList.add('installment_btn')
    installment_btn.innerHTML = 'В рассрочку'

    // append

    smartphone.append(smartphone_top, smartphone_text, smartphone_btns)

    smartphone_top.append(card_sale, card_actions)
    card_sale.append(card_sale_span)
    card_actions.append(btn_like, btn_compare)

    smartphone_text.append(smartphone_text_h3, smartphone_text_p_first_child, smartphone_text_p_last_child)

    smartphone_btns.append(cart_btn, installment_btn)

    wrapper.append(smartphone)

}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//timer
const deadline = "2023-06-20 00:00"
function getTime(endTime) {

    const t = Date.parse(endTime) - Date.parse(new Date),
        hours = Math.floor((t / 1000) / 60 / 60 % 24),
        minutes = Math.floor((t / 1000) / 60 % 60),
        seconds = Math.floor((t / 1000) % 60);

    return {
        t,
        hours,
        minutes,
        seconds
    }
}
function showTime(endTime, selector) {
    const timer = document.querySelector(selector),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        interval = setInterval(setTime, 1000);

    function setTime() {
        const t = getTime(endTime)
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds
        if (t.t <= 0) {
            hours.innerHTML = '0'
            minutes.innerHTML = '0'
            seconds.innerHTML = '0'
            console.log(t.t);
            clearInterval(interval)
        }

    }
}
showTime(deadline, ".timer")
