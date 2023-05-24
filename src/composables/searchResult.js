
import axiosJWT from '@/utils/refreshToken';
import error404 from '@/assets/images/error-404.png'

export default {
    data() {
        const originalUrl = window.location.href;
        const urlFormat = originalUrl.split('?')[1].replace('q=', '').replaceAll('-', ' ').trim();
        return {
            urlFormat,
            listFood: [],
            isLoading: false,
            length: null,
            error404
        }
    },
    methods: {
        getFood(keyword) {
            this.isLoading = true;
            axiosJWT.get('http://localhost:3000/v1/api/search/result', {
                    params: {
                        keyword: keyword
                    }
                })
                .then(res => {
                    this.isLoading = false;
                    this.listFood = res.data.data;
                    this.length = res.data.data.length;
                })
                .catch(err => {
                    this.isLoading = false;
                    console.log(err)
                })
        },
        handleClickFood(foodName, shopName) {
            this.$router.push(`/@${shopName.replaceAll(' ', '-').trim()}/${foodName.replaceAll(' ', '-').trim()}`)
        },
        async handleClickLike(foodId, isLike) {
            try {
                await axiosJWT.patch(`http://localhost:3000/v1/api/food/like/${foodId}`, {
                    statusLike: isLike
                })

                this.getFood(this.urlFormat);
            } catch (error) {
                console.log(error);
            }
        },
        handleInputEnter(value) {
            this.urlFormat = value.replaceAll(' ', '-').trim();

            this.getFood(this.urlFormat);
        }
    },
    mounted() {
        this.getFood(this.urlFormat);
    }
}