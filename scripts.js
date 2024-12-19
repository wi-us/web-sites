async function GET_Products() 
{
    const response = await fetch("https://fakestoreapi.com/products");
    const array = await response.json();
    console.log(array[0]);

    array.forEach(element => {
        CreateProductBox(element.image, element.title, element.rating.rate, element.rating.count, element.price)
    });
}
async function CreateProductBox(imageLink, title, rating, count, price) 
{
    //выбираем родительский блок
    let $products = document.querySelector('#body-box');
    let $frame = document.createElement('div')
    $frame.setAttribute("class", "product_frame")

    //создаем бокс для товара
    let $title = document.createElement('div')
    $title.setAttribute("class", "product_title")
    
    //создаем текстовый элемент для названия товара
    let $title_text = document.createElement('span')
    $title_text.setAttribute("class", "product_title_text")
    $title_text.textContent = title
    
    $title.append($title_text)

    //создаем бокс рейтинга товара
    let $rating = document.createElement('div')
    $rating.setAttribute("class", "product_rating")
    
    //создаем надпись "Рейтинг"
    let $rating_ctext = document.createElement('span')
    $rating_ctext.setAttribute("class", "product_rating_ctext")
    $rating_ctext.textContent = 'Рейтинг'

    //создаем текстовый элемент для рейтинга
    let $rating_text = document.createElement('span')
    $rating_text.setAttribute("class", "product_rating_text")
    $rating_text.textContent = rating + "/5 (" + count + ")"

    $rating.append($rating_ctext, $rating_text)

    //создаем бокс рейтинга товара
    let $price = document.createElement('div')
    $price.setAttribute("class", "product_price")

    //создаем надпись "Цена"
    let $price_ctext = document.createElement('span')
    $price_ctext.setAttribute("class", "product_price_ctext")
    $price_ctext.textContent = "Цена"

    //создаем текстовый элемент для цены
    let $price_text = document.createElement('span')
    $price_text.setAttribute("class", "product_price_text")
    $price_text.textContent = price + ' $'

    $price.append($price_ctext, $price_text)
    //создаем изображение товара

    let $image_box = document.createElement('div')
    $image_box.setAttribute("class", "product_image_box")

    let $image = document.createElement('img')
    $image.setAttribute("class", "product_image")
    $image.src=imageLink
    
    $image_box.append($image)

    //добавляем блоки на страницу
    $products.append($frame)
    $frame.append( $image_box, $title, $rating, $price)

}

GET_Products() 