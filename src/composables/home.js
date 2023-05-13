
    import axiosJWT from '@/utils/refreshToken';
    import Cookies from 'js-cookie';
    import debounce from 'lodash/debounce';
    import * as homeService from '@/services/homeService.js';
    import Button from '@/components/Button/Button.vue';
    import FoodItem from '@/components/FoodItem/FoodItem.vue';
    import FoodType from '@/components/FoodType/FoodType.vue';
    import Popper from '@/components/Popper/Popper.vue';
    import SVGIcon from '@/components/SVGIcon/SVGIcon.vue'; 
    import Search from '@/components/Search/Search.vue';
    import Star from '@/components/Star/Star.vue';
    import MenuItem from '@/components/MenuItem/MenuItem.vue';
    import foodTypes from '@/data/foodTypes';

    export default {
        components: {
            Search,
            Button,
            SVGIcon,
            SVGIcon,
            FoodType,
            Star,
            FoodItem,
            Popper,
            MenuItem
        },
        methods: { 
            handleClickItem (name) {
                this.$router.push(`/@${name.replaceAll(' ', '-')}`)
            },
            handleClickLike(id) {},
            handleClickFoodType (id, name) {
                this.id = id;
                axiosJWT.get('http://localhost:3000/v1/api/home/getShop', {
                    headers: {
                        token: `Bearer ${this.accessToken}`
                    },
                    params: {
                        foodType: name
                    }
                })
                .then(response => {
                    this.shops = response.data.data.shopList;
                })
                .catch(err => console.log(err))

                axiosJWT.get('http://localhost:3000/v1/api/home/getFood', {
                    headers: {
                        token: `Bearer ${this.accessToken}`
                    },
                    params: {
                        foodType: name
                    }
                })
                .then(response => {
                    this.foods = response.data.data.foodList;
                })
                .catch(err => console.log(err))
            },
            handleInputChange: debounce(function (value) {
                this.noResult = false;
                if (!value.trim()) {
                    this.searchResults = [];
                    return;
                } else {
                    const fetchApi = async () => {
                        const response = await homeService.search({
                            foodName: value.trim()
                        });

                        if (response.code === 'home/search.success') {
                            if (response.data.length > 0) {
                                this.searchResults = response.data;
                            }
                        } else if (response.code === 'home/search.notFound') {
                                    this.noResult = true;
                            } else {
                                console.log(response);
                            }
                    }

                    fetchApi();
                }
            }, 800),
            handleInputFocus() {
                this.isFocus = true;
            },
            handleInputBlur() {
                this.isFocus = false;
            },
        },
        data() {
            return {
                id: 1,
                like: false,
                foodTypes,
                isFocus: false,
                searchResults: [],
                noResult: false,
                accessToken: Cookies.get('accessToken'),
                shops: [],
                foods: [],
            }
        },
        mounted() {
            this.$store.dispatch('getUser', this.accessToken);

            axiosJWT.get('http://localhost:3000/v1/api/home/getShop', {
                headers: {
                    token: `Bearer ${this.accessToken}`
                },
                params: {
                    foodType: foodTypes[0].name
                }
            })
            .then(response => {
                this.shops = response.data.data.shopList;
            })
            .catch(error => {
                console.log(error);
            })

            axiosJWT.get('http://localhost:3000/v1/api/home/getFood', {
                headers: {
                    token: `Bearer ${this.accessToken}`
                },
                params: {
                    foodType: foodTypes[0].name
                }
            })
            .then(response => {
                this.foods = response.data.data.foodList;
            })
            .catch(error => {
                console.log(error);
            })
        },
    }