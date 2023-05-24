
    import axiosJWT from '@/utils/refreshToken';
    import Cookies from 'js-cookie';
    import debounce from 'lodash/debounce';
    import * as homeService from '@/services/homeService.js';
    import foodTypes from '@/data/foodTypes';
    import defaultAvatar from '@/assets/images/default_avatar.jpg';
    import store from '@/Vuex/store';

    export default {
        methods: { 
            handleClickItem (name) {
                this.$router.push(`/@${name.replaceAll(' ', '-')}`)
            },
            handleClickFoodItem (foodName, shopName) {
                this.$router.push(`/@${shopName.replaceAll(' ', '-')}/${foodName.replaceAll(' ', '-')}`)
            },
            async handleClickLikeShop(id, isLike) {
                try {
                    await axiosJWT.patch(`http://localhost:3000/v1/api/shop/like/${id}`, {
                        statusLike: isLike
                    })
                    this.getShop(foodTypes[this.id - 1].name);
                } catch (error) {
                    console.log(error);
                }
            },
            async handleClickLikeFood (id, isLike) {
                try {
                    await axiosJWT.patch(`http://localhost:3000/v1/api/food/like/${id}`, {
                        statusLike: isLike
                    })                   
                    this.getFood(foodTypes[this.id - 1].name);
                } catch (error) {
                    console.log(error);
                }
            },
            handleClickFoodType (id, name) {
                this.id = id;

                this.getShop(name)

                this.getFood(name);
            },
            handleInputChange: debounce(function (value) {
                this.noResult = false;
                if (!value.trim()) {
                    this.searchResults = [];
                    return;
                } else {
                    const fetchApi = async () => {
                        const response = await homeService.search({
                            params: {
                                foodName: value.trim()
                            }
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
            }, 400),
            handleInputFocus() {
                this.isFocus = true;
            },
            handleInputBlur() {
                // this.isFocus = false;
            },
            getUser () {
                axiosJWT.get('http://localhost:3000/v1/api/home/user')
                .then(res => {
                    if (res.data.data.currentUser.avatar === null) {
                        res.data.data.currentUser.avatar = this.defaultAvatar;
                    }
                    store.commit('setCurrentUser', res.data.data.currentUser);
                })
                .catch(err => console.log(err))
            },
            getShop (name) {
                axiosJWT.get('http://localhost:3000/v1/api/home/shop', {
                    params: {
                        foodType: name
                    }
                })
                .then(response => {
                    this.shops = response.data.data.shopList;
                })
                .catch(error => {
                    console.log(error);
                })
            },
            getFood (name) {
                axiosJWT.get('http://localhost:3000/v1/api/home/food', {
                    params: {
                        foodType: name
                    }
                })
                .then(response => {
                    this.foods = response.data.data.foodList;
                })
                .catch(error => {
                    console.log(error);
                })
            },
            handleClickSearchResult (value) {
                this.$router.push(`/search?q=${value.replaceAll(' ', '-')}`)
            },
            handleInputEnter (value) {
                this.$router.push(`/search?q=${value.trim().replaceAll(' ', '-')}`)
            }
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
                defaultAvatar: defaultAvatar
            }
        },
        mounted() {
            this.getUser();
            this.getFood(foodTypes[0].name);
            this.getShop(foodTypes[0].name);
        },
    }