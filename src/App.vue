<script>
  import AppHeader from "./components/AppHeader.vue";
  import AppHero from "./components/AppHero.vue";
  import AppInfoSection from "./components/AppInfoSection.vue";
  import ServicesSection from "./components/ServicesSection.vue";
  import AppFooter from "./components/AppFooter.vue";
  import MoreInfoSection from "./components/MoreInfoSection.vue";
  import ReviewSection from "./components/ReviewSection.vue";

  export default{
    components: {
      AppHeader,
      AppHero,
      AppInfoSection,
      ServicesSection,
      AppFooter,
      MoreInfoSection,
      ReviewSection
    }
  }

</script>

<template>
  <header>
    <AppHeader/>
  </header>

  <main>
    <!-- Hero Section -->
    <section>
      <AppHero/>
    </section>
    <!-- Info Section -->
    <section>
      <AppInfoSection/>
    </section>
    <!-- Services Section -->
    <section>
      <ServicesSection/>
    </section>
    <!-- img + more info Section -->
    <section>
      <MoreInfoSection/>
    </section>
    <!-- reviews Section -->
    <section>
      <ReviewSection/>
    </section>
    <!-- subscribe card -->
  </main>

  <footer>
    <AppFooter/>
  </footer>
</template>

<style scoped>

</style>