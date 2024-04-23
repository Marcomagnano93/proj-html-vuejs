<script>
export default {
    props: {
        logo: String,
        title: String,
        description: String
    }
}
</script>

<template>
    <div class="service-card bg-caki">
        <div class="card-logo"><img :src="`../../public/img/${logo}`" alt=""></div>       
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <div class="round-btn bg-yellow"><img src="../../public/img/right.png" alt=""></div>

    </div>
</template>

<style scoped>
.service-card{
    width: 180px;
    height: 300px;
    border-radius: 999px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    cursor: pointer;
}

.card-logo{
    width: 60px;
}

.service-card:hover{
    background-color: var(--brand-sand);
}

.round-btn:hover{
    background-color: var(--brand-azure);
}

.round-btn img{
    width: 12px;
}
</style>