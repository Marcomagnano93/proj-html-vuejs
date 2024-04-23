<script>

</script>

<template>
    <div class="container-100 btm-spacing">
        <img class="hero-img absolute" src="../../public/img/hero.png" alt="">
        <div class="hero container">
            <!-- hero text -->
            <h1>Welcome to <br> <span>DogMilo</span> Pets</h1>
            <p>Lorem ipsum, dolor sit amet consectet adipis elit aliquam <br> and reprehenderit consequatur.</p>
            <!-- buttons -->
            <div class="d-flex-row">
                <div class="pill-btn bg-caki"><a href="#">Get Started</a></div>
                <div class="square-btn bg-azure"><a href="#"><img src="../../public/img/play.png" alt=""></a></div>
            </div>   
        </div>
    </div>


</template>

<style scoped>
.hero-img {
    object-fit: cover;
    width: 100%;
}

.hero {
    position: sticky;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

h1{
    font-size: 70px;
    font-weight: 600;
    padding-top: 10%;
}

h1 span {
    font-weight: 200;
}

p {
    font-size: 24px;
    line-height: 40px;
}

.square-btn img{
    width: 40px;
}
</style>