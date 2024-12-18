interface IngridientObject {
    name: string;
    price: number;
    imageUrl: string;
    id:number;
}

export const ingridients:IngridientObject[] = [
    {
      name: 'Сырный бортик',
      price: 179,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
      id:0,
    },
    {
      name: 'Сливочная моцарелла',
      price: 79,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
        id:1
    },
    {
      name: 'Сыры чеддер и пармезан',
      price: 79,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
      id:2
    },
    {
      name: 'Острый перец халапеньо',
      price: 59,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
        id:3
    },
    {
      name: 'Нежный цыпленокк',
      price: 79,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
      id:4
    },
    {
      name: 'Шампиньоны',
      price: 59,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
      id:5
    },
    {
      name: 'Ветчина',
      price: 79,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
      id:6
    },
    {
      name: 'Пикантная пепперони',
      price: 79,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
      id:7
    },
    {
      name: 'Острая чоризо',
      price: 79,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
      id:8
    },
    {
      name: 'Маринованные огурчики',
      price: 59,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
      id:9
    },
    {
      name: 'Свежие томаты',
      price: 59,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
      id:10
    },
    {
      name: 'Красный лук',
      price: 59,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
      id:11
    },
    {
      name: 'Сочные ананасы',
      price: 59,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
      id:12
    },
    {
      name: 'Итальянские травы',
      price: 39,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
        id:13
    },
    {
      name: 'Сладкий перец',
      price: 59,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
      id:14
    },
    {
      name: 'Кубики брынзы',
      price: 79,
      imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
      id:15
    },
    {
      name: 'Митболы',
      price: 79,
      imageUrl:
        'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
        id:16
    },
  ]

  interface pizza{
    name:string,
    imageUrl:string,
    categoryId:number,
    ingridients:string,
    price:number,
  }

export const pizzas:pizza[] = [
    {
        name: 'Пепперони фреш',
        imageUrl:
          'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
        categoryId: 1,
        ingridients: Array.from(ingridients.slice(0,5).map(ingridient => ingridient.name)).join(', '),
        price: 550,
      },
      {
        name: 'Сырная',
        imageUrl:
          'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
        categoryId: 1,
        ingridients: Array.from(ingridients.slice(5,10).map(ingridient => ingridient.name)).join(', '),
        price: 550,
      },
      {
        name: 'Чоризо фреш',
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
        categoryId: 1,
        ingridients: Array.from(ingridients.slice(10,40).map(ingridient => ingridient.name)).join(', '),
        price: 550,
      },
      {
        name: 'Пепперони фреш',
        imageUrl:
          'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
        categoryId: 1,
        ingridients: Array.from(ingridients.slice(0,5).map(ingridient => ingridient.name)).join(', '),
        price: 550,
      },
      {
        name: 'Сырная',
        imageUrl:
          'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
        categoryId: 1,
        ingridients: Array.from(ingridients.slice(5,10).map(ingridient => ingridient.name)).join(', '),
        price: 550,
      },
      {
        name: 'Чоризо фреш',
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
        categoryId: 1,
        ingridients: Array.from(ingridients.slice(10,40).map(ingridient => ingridient.name)).join(', '),
        price: 550,
      },
      {
        name: 'Пепперони фреш',
        imageUrl:
          'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
        categoryId: 1,
        ingridients: Array.from(ingridients.slice(0,5).map(ingridient => ingridient.name)).join(', '),
        price: 550,
      },
      {
        name: 'Сырная',
        imageUrl:
          'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
        categoryId: 1,
        ingridients: Array.from(ingridients.slice(5,10).map(ingridient => ingridient.name)).join(', '),
        price: 550,
      },
      {
        name: 'Чоризо фреш',
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
        categoryId: 1,
        ingridients: Array.from(ingridients.slice(10,40).map(ingridient => ingridient.name)).join(', '),
        price: 550,
      },
      {
        name: 'Пепперони фреш',
        imageUrl:
          'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
        categoryId: 1,
        ingridients: Array.from(ingridients.slice(0,5).map(ingridient => ingridient.name)).join(', '),
        price: 550,
      },
      {
        name: 'Сырная',
        imageUrl:
          'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
        categoryId: 1,
        ingridients: Array.from(ingridients.slice(5,10).map(ingridient => ingridient.name)).join(', '),
        price: 550,
      },
      {
        name: 'Чоризо фреш',
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
        categoryId: 1,
        ingridients: Array.from(ingridients.slice(10,40).map(ingridient => ingridient.name)).join(', '),
        price: 550,
      },
]

interface products{
    name:string,
    imageUrl:string,
    categoryId:number,
    price:number,
  }

export interface allProducts{
    name:string,
    imageUrl:string,
    categoryId:number,
    ingridients?:string,
    price:number,
  }

export const combo:products[] = [
    {
      name: 'Омлет с ветчиной и грибами',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp',
      categoryId: 2,
      price:300,
    },
    {
      name: 'Омлет с пепперони',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp',
      categoryId: 2,
      price:300,
    },
    {
      name: 'Кофе Латте',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
      categoryId: 2,
      price:300,
    },]
    export const zakuski:products[] = [
    {
      name: 'Дэнвич ветчина и сыр',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp',
      categoryId: 3,
      price:300,
    },
    {
      name: 'Куриные наггетсы',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp',
      categoryId: 3,
      price:300,
    },
    {
      name: 'Картофель из печи с соусом 🌱',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp',
      categoryId: 3,
      price:300,
    },
    {
      name: 'Додстер',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp',
      categoryId: 3,
      price:300,
    },
    {
      name: 'Острый Додстер 🌶️🌶️',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp',
      categoryId: 3,
      price:300,
    },]
    export const coctails:products[] = [
    {
      name: 'Банановый молочный коктейль',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp',
      categoryId: 4,
      price:300,
    },
    {
      name: 'Карамельное яблоко молочный коктейль',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp',
      categoryId: 4,
      price:300,
    },
    {
      name: 'Молочный коктейль с печеньем Орео',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp',
      categoryId: 4,
      price:300,
    },
    {
      name: 'Классический молочный коктейль 👶',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp',
      categoryId: 4,
      price:300,
    },]
    export const cofe:products[] = [
    {
      name: 'Ирландский Капучино',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp',
      categoryId: 5,
      price:300,
    },
    {
      name: 'Кофе Карамельный капучино',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp',
      categoryId: 5,
      price:300,
    },
    {
      name: 'Кофе Кокосовый латте',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp',
      categoryId: 5,
      price:300,
    },
    {
      name: 'Кофе Американо',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp',
      categoryId: 5,
      price:300,
    },
    {
      name: 'Кофе Латте',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
      categoryId: 5,
      price:300,
    },
  ];
  export const driknkings:products[] = [
    {
      name: 'Банановый молочный коктейль',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp',
      categoryId: 6,
      price:300,
    },
    {
      name: 'Карамельное яблоко молочный коктейль',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp',
      categoryId: 6,
      price:300,
    },
    {
      name: 'Молочный коктейль с печеньем Орео',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp',
      categoryId: 6,
      price:300,
    },
    {
      name: 'Классический молочный коктейль 👶',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp',
      categoryId: 6,
      price:300,
    },
    {
      name: 'Ирландский Капучино',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp',
      categoryId: 6,
      price:300,
    },
    {
      name: 'Кофе Карамельный капучино',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp',
      categoryId: 6,
      price:300,
    },
    {
      name: 'Кофе Кокосовый латте',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp',
      categoryId: 6,
      price:300,
    },
    {
      name: 'Кофе Американо',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp',
      categoryId: 6,
      price:300,
    },
    {
      name: 'Кофе Латте',
      imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
      categoryId: 6,
      price:300,
    },
  ]


  
export const products:allProducts[] = [...pizzas, ...combo, ...combo, ...coctails, ...zakuski, ...cofe, ...driknkings]
