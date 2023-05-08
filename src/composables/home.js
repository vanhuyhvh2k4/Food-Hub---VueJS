
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
    import foodTypes, {
        foodItems
    } from '@/data/foodTypes';

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
            handleClickLike(id) {},
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
                        }
                        if (response.code === 'home/search.notFound') {
                            this.noResult = true;
                        } else {
                            console.log(response.message);
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
                like: false,
                foodItems,
                foodTypes,
                isFocus: false,
                searchResults: [],
                noResult: false,
                accessToken: Cookies.get('accessToken'),
            }
        },
        mounted() {
            this.$store.dispatch('getUser', this.accessToken)
        }
    }