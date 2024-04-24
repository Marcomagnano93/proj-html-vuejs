<script>
import ServiceCard from "./ServiceCard.vue";

export default{
    data() {
        return {
            services: [
                {
                    logo: 'd-1.png',
                    title: 'Pet Sitting',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quod.'
                },
                {
                    logo: 'd-2.png',
                    title: 'Puppy Sitting',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quod.'
                },
                {
                    logo: 'd-3.png',
                    title: 'Dog Walking',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quod.'
                },
                {
                    logo: 'd-4.png',
                    title: 'Night Care',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quod.'
                },
                {
                    logo: 'd-5.png',
                    title: 'Pet Sitting',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quod.'
                },
            ]
        }
    },
    components: {
        ServiceCard,
    }
}
</script>

<template>
<div class="container-100 bg-cream py-40">
    <!-- background decoration -->
    <img class="dog-head-right" src="../../public/img/dog-logo.png" alt="">
    <img class="dog-head-left" src="../../public/img/dog-left.png" alt="">
    <!-- services cards -->
    <div class="container py-20">
        <div class="row column centered text-center gap-40">
            <a class="link cl-sand" href="#">Services</a>
            <h2>DogMilo Pet Care Services <br> For Youe Best Friends.</h2>
            <ul class="service-list">
                <li
                v-for="(card, i) in services" :key="i">
                    <ServiceCard
                    :logo="card.logo"
                    :title="card.title"
                    :description="card.description"
                    />
                </li>
            </ul>
        </div>

    </div>

</div>
</template>

<style scoped>
.service-list {
    display: flex;
    gap: 38px;
}

h2{
    line-height: 40px;
    padding: 12px 0;
    font-size: 40px;
    font-weight: 400;
}

.link{
    font-size: 18px;
    font-weight: 600;
}

.link:hover{
    color: var(--brand-ocean);
}
</style>