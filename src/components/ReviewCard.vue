<script>
export default {
    props: {
        id: Number,
        vote: Number,
        title: String,
        text: String,
        profile: Object
    }
}
</script>

<template>
<div class="review-card bg-cream">
    <ul class="stars">
        <li
        v-for="star in vote" :key="id"
        >
        <font-awesome-icon icon="fa-solid fa-star"/>
        </li>
    </ul>
    <h3>{{ title }}</h3>
    <p class="card-p">{{ text }}</p>
    <div class="d-flex-row gap-24">
        <div class="profile-picture">
            <img :src="`../../public/users/${profile.picture}`" alt="">
        </div>
        <div>
            <h4>{{ profile.name }}</h4>
            <p class="small-text">{{ profile.info }}</p>
        </div>
    </div>

</div>
</template>

<style scoped>
.profile-picture{
    width: 50px;
}

.profile-picture img {
    object-fit: cover;
    border-radius: 999px;
}

h3{
    font-size: 24px;
}

h4{
    padding-bottom: 8px;
}
</style>