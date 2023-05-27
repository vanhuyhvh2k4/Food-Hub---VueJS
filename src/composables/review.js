import axios from "axios"
import comment from '@/assets/images/comment.png'

export default {
    data() {
        const foodId = window.location.href.split('?')[1].replace('foodid=', '').trim();
        return {
            foodId,
            listReviews: [],
            isLoading: false,
            comment
        }
    },
    methods: {
        getReviews () {
            this.isLoading = true;
            axios.get(`http://localhost:3000/v1/api/rating/review/${this.foodId}`)
            .then(res => {
                this.isLoading = false;
                this.listReviews = res.data.data.list;
            })
            .catch(err => {
                this.isLoading = false;
                console.log(err);
            })
        }
    },
    mounted() {
        this.getReviews();
    },
}