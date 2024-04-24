<script>

</script>

<template>
    <div class="container-100 pannel-wrapper">
        <div class="subscribe-pannel bg-caki">
            <div class="row">
                <div class="col-6 news-logo">
                    <img src="../../public/img/news.png" alt="">
                </div>
                <div class="col-6 pannel-body">
                    <h3>Subscribe to Our Newsletter</h3>
                    <div class="input-section">
                        <input id="subscribe" type="text" placeholder="Your email here">
                        <div class="square-small-btn icon">
                            <font-awesome-icon icon="fa-solid fa-at" />
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>
/* Layout */
.news-logo{
  position: relative;
}
.news-logo img{
    width: 340px;
    position: absolute;
    bottom: -11px;
    left: 38px
}

.subscribe-pannel{
    width: 880px;
    height: 200px;
    position: absolute;
    border-radius: 18px;
}

.pannel-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
}
.pannel-body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 12px;
}

#subscribe {
    width: 100%;
    height: 50px;
    padding: 18px 24px;
    margin: 16px 0;
    display: inline-block;
    box-sizing: border-box;
}

/* Input Style */
.input-section{
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
}

.icon{
    border: 4px solid white;
    width: 50px !important;
    height: 50px !important;
}

.icon:hover{
    background-color: var(--brand-ocean);
}

h3{
    font-size: 24px;
    font-weight: 700;
}

</style>