<script>
 import AppSocialLinks from "./AppSocialLinks.vue";

export default{
    data() {
        return {
            support: ['Contact Us', 'Online Chat', 'Whatsapp', 'Telegram', 'Snapchat'],
            about: ['About Us', 'Blog', 'Career', 'Job', 'In press'],
            faq: ['Account', 'Order', 'Delivery', 'Payment', 'Return']
            }
        },
  components: {
    AppSocialLinks,
  }
}
</script>

<template>
    <div class="container-100 main-footer bg-black">
        <div class="container">
            <ul class="footer-menu">
                <li><h3>Get in Touch</h3>
                    <ul class="menu">
                        <li>
                            <p>Have a question for us?</p>
                            <p>we'll answer your problem here</p>
                        </li>
                        <li><!-- socials component -->
                            <AppSocialLinks/>
                        </li>
                    </ul>
                </li>

                <li><h3>Support</h3>
                    <ul class="menu">
                        <li
                        v-for="link in support"
                        >
                            <a href="#">{{ link }}</a>
                        </li>
                    </ul>
                </li>

                <li><h3>About</h3>
                    <ul class="menu">
                        <li
                        v-for="link in about"
                        >
                            <a href="#">{{ link }}</a>
                        </li>
                    </ul>
                </li>

                <li><h3>Faq</h3>
                    <ul class="menu">
                        <li
                        v-for="link in faq"
                        >
                            <a href="#">{{ link }}</a>
                        </li>
                    </ul>
                </li>

                <li><h3>Contact Me</h3>
                    <ul class="contacts menu">
                        <li>
                            <font-awesome-icon icon="fa-solid fa-location-arrow" class="cl-caki" />
                            <p>4500 Mercantile, Plaza, suite <br>300, fort worth,TX,76137,USA</p>
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-phone" class="cl-caki"/>
                            <p>+1(817)901 3377</p>
                        </li>
                        <li>
                            <font-awesome-icon icon="fa-solid fa-envelope" class="cl-caki"/>
                            <p>info@example.com</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <div class="container-100 bg-black text-center py-40">
        <p class="copy">Copyright 2022 by AttDogMilo.com</p>
    </div>

</template>

<style scoped>
.main-footer{
    border-bottom: 1px solid var(--brand-cream);
    padding: 150px 0 40px 0;
}

.main-footer p {
    line-height: 24px;
}

.main-footer p,
.main-footer a {
    font-weight: 200;
    color: var(--brand-cream);
}
.footer-menu {
    display: flex;
    justify-content: space-between;
}

h3 {
    color: var(--brand-caki);
    padding: 24px 0;
}

.menu {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.menu a:hover{
    color: var(--brand-sand);
}

.contacts li{
    display: flex;
    gap: 12px;
    align-items: center;
}

.copy{
    font-size: 12px;
    font-weight: 600;
}
</style>