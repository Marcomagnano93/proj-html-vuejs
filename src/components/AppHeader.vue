<script>
 import AppSocialLinks from "../components/AppSocialLinks.vue";

export default{
  components: {
    AppSocialLinks,
  }
}
</script>

<template>
    <div class="container-100 bg-sand py-20">
        <div class="container">
            <div class="row center-align">
                <div class="contacts">
                   <p><font-awesome-icon icon="fa-solid fa-envelope" class="cl-caki"/><span>info@example.com</span> </p>
                   <p><font-awesome-icon icon="fa-solid fa-phone" class="cl-caki"/><span>+1(817)901 337</span></p>
                </div>
                <div>
                    <AppSocialLinks/>
                </div>
            </div>
        </div>
    </div>
    <div class="container py-20">
        <div class="row center-align gap-12">
            <div class="logo">
                <img src="../../public/logo.png" alt="">
            </div>
            <ul class="refereces cl-dark">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Training</a></li>
                <li><a href="#">Blogs</a></li>
            </ul>
            <div class="pill-btn bg-caki">
                <a href="#">Get in Toch!</a>
            </div>
        </div>
    </div>


    

</template>

<style scoped>
.contacts {
    display: flex;
    gap: 20px;
}

.contacts span {
    margin-left: 8px;
}

.refereces{
    display: flex;
    gap: 28px;
    font-size: 24px;
    font-weight: 500;
}

.refereces li:hover{
    color: var(--brand-caki)
}
.logo{
    flex-grow: 1;
}
</style>