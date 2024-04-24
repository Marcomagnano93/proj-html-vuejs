<script>

</script>

<template>
<div class="conteiner-100">
    <div class="row">
        <div class="poster col-6">
            <img src="../../public/img/why.png" alt="">
        </div>
        <div class="cards col-6">
            <!-- icon & paragraph title -->
            <div class="d-flex-row align-center">
                <img src="../../public/img/dog-icon.png" alt="">
                <a class="cl-sand" href="#">Choose Us</a>
            </div>

            <h2>Why Choose Us?</h2>
            <!-- Info Cards -->
                <div class="why-card">
                    <div class="card-img"><img src="../../public/img/w-3.png" alt=""></div>
                    <div class="card-body">
                        <h3>Safety First</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, reiciendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis totam vitae corporis accusamus illum autem.</p>
                    </div>
                </div>
                <div class="why-card second">
                    <div class="card-img"><img src="../../public/img/w-2.png" alt=""></div>
                    <div class="card-body">
                        <h3>Play Yards</h3>
                        <p>Similique, reiciendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis totam vitae corporis accusamus illum autem.</p>
                    </div>
                </div>
                <div class="why-card third">
                    <div class="card-img"><img src="../../public/img/w-1.png" alt=""></div>
                    <div class="card-body">
                        <h3>Monitor Your Pets</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis totam vitae corporis accusamus illum autem.</p>
                    </div>
                </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.poster img{
    width: 100%;
}

/* Spacing cards */

.cards {
    padding: 50px 50px 0 50px; 
}

.second{
    margin-left: 110px;
}

.third{
    margin-left: 260px;
}

/* cards */

.why-card{
    position: relative;
    display: flex;
    margin-bottom: 32px;
}

.card-img  {
    width: 120px;
    position: absolute;
}

.card-body{
    display: flex;
    flex-direction: column;
    gap: 12px;
    line-height: 32px;
    margin-left: 130px;
}

/* Text style */

h2{
    font-size: 32px;
    padding: 50px 0;
}

h3{
    font-size: 20px;
    font-weight: 300;
}

p{
    font-size: 12px;
}
</style>