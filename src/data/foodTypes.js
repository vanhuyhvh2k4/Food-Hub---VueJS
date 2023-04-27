const foodTypes = [
    {
        id: 1,
        name: 'Burger',
        imageUrl: require('@/assets/images/burger.png'),
        active: true,
    },
    {
        id: 2,
        name: 'Donat',
        imageUrl: require('@/assets/images/donat.png')
    },
    {
        id: 3,
        name: 'Pizza',
        imageUrl: require('@/assets/images/pizza.png')
    },
    {
        id: 4,
        name: 'Hotdog',
        imageUrl: require('@/assets/images/hotdog.png')
    },
    {
        id: 5,
        name: 'Bread',
        imageUrl: require('@/assets/images/bread.png')
    },
    {
        id: 6,
        name: 'Icecream',
        imageUrl: require('@/assets/images/cream.png')
    },
];

    export const foodItems = [
        {
            shopName: 'McDonal',
            star: '3.0',
            numOfRating: '15',
            isTick: true,
            isLike: true,
        },
        {
            shopName: 'KFC',
            star: '4.0',
            numOfRating: '55',
            isTick: true,
            isLike: false,
        },
    ]

export default foodTypes;