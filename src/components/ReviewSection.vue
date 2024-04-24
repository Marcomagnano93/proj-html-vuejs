<script>
import ReviewCard from "./ReviewCard.vue";


export default{
    data(){
        return {
            reviews: [
                {   
                    id: 1,
                    vote: 5,
                    title: 'Great Place!',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit amet consectetur adipisicing elit. Corrupti, at! Ab, atque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, quia.',
                    profile: {
                        name: 'Tobias May',
                        picture: 't1.png',
                        info: 'UI/UX Designer'
                    }
                },
                {   
                    id: 2,
                    vote: 5,
                    title: 'Nice!',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit amet consectetur adipisicing elit. Corrupti, at! Ab, atque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, quia.',
                    profile: {
                        name: 'Tobias May',
                        picture: 't1.png',
                        info: 'UI/UX Designer'
                    }
                }
            ]
        }
    },
components: {
    ReviewCard,
    }
}
</script>

<template>
 <div class="container">
        <ul class="row gap-50">
            <!-- main card -->
            <li class="review-card">
                <div class="d-flex-row align-center">
                    <img src="../../public/img/dog-icon.png" alt="">
                    <a class="cl-sand" href="#">Review & Rating</a>
                </div>
                <h2>Over 8000 Customers <br>With 5-star Review</h2>
                <p class="card-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in ipsa totam suscipit commodi cupiditate.</p>
                <ul class="stars">
                    <li
                    v-for="(star, i) in 5" :key="i">
                        <font-awesome-icon icon="fa-solid fa-star"/>
                    </li>
                </ul>
            </li>
            <!-- reviews cards -->
            <li
            v-for="(review, i) in reviews" :key="i"
            > 
                <ReviewCard
                    :id="review.id"
                    :vote="review.vote"
                    :title="review.title"
                    :text="review.text"
                    :profile="review.profile"
                />
            </li>
        </ul>
        <!-- arrows -->
        <div class="arrows">
            <div class="square-small-btn bg-caki"><img src="../../public/img/left-arrow.png" alt=""></div>
            <div class="square-small-btn bg-caki"><img src="../../public/img/next.png" alt=""></div>
        </div>
 </div>
</template>

<style scoped>
.arrows {
    display: flex;
    justify-content: flex-end;
    gap: 8px
}

.arrows img {
    padding: 8px;
}

.square-small-btn:hover{
    background-color: var(--brand-sand);
}
.container{
    padding-top: 70px;
    padding-bottom: 180px;
}

.row {
    margin-bottom: 18px;
}
</style>