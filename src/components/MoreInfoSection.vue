<script>

</script>

<template>
<div class="conteiner-100">
    <div class="row">
        <div class="col-6 poster">
            <img src="../../public/img/why.png" alt="">
        </div>
        <div class="col-6 cards">
            <div class="d-flex-row align-center">
                <img src="../../public/img/dog-icon.png" alt="">
                <a class="cl-sand" href="#">Choose Us</a>
            </div>
            <h2>Why Choose Us?</h2>
            
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

.cards {
    padding: 50px 50px 0 0; 
}

.second{
    padding-left: 110px;
}

.third{
    padding-left: 260px;
}
.why-card{
    position: relative;
    display: flex;
    gap: 24px;
    margin-bottom: 32px;
}

h2{
    font-size: 32px;
    padding: 50px 0;
}

h3{
    font-size: 20px;
    font-weight: 300;
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
    padding-left: 130px;
}

p{
    font-size: 12px;
}
</style>