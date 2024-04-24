<script>

</script>

<template>
    <div class="container-100 hero-background">
        <div class="hero container">
            <!-- hero text -->
            <h1>Welcome to <br> <span>DogMilo</span> Pets</h1>
            <p>Lorem ipsum, dolor sit amet and adipis elit aliquam <br> and reprehenderit consequatur.</p>
            <!-- buttons -->
            <div class="d-flex-row">
                <div class="pill-btn bg-caki"><a href="#">Get Started</a></div>
                <div class="square-btn bg-azure"><a href="#"><img src="../../public/img/play.png" alt=""></a></div>
            </div>   
        </div>
    </div>


</template>

<style scoped>
.hero-background{
    background-image: url(../../public/img/hero.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 150px;
    margin-bottom: 70px;
}

.hero {
    color: white;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

h1{
    font-size: 50px;
    font-weight: 600;
    padding-top: 10%;
}

h1 span {
    font-weight: 200;
}

p {
    font-size: 16px;
    line-height: 40px;
}

.square-btn img{
    width: 40px;
}
</style>