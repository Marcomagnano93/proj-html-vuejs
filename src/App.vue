<script>
  import AppHeader from "./components/AppHeader.vue";
  import AppHero from "./components/AppHero.vue";
  import AppInfoSection from "./components/AppInfoSection.vue";
  import ServicesSection from "./components/ServicesSection.vue";

  export default{
    components: {
      AppHeader,
      AppHero,
      AppInfoSection,
      ServicesSection
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
    <!-- reviews Section -->
    <!-- subscribe card -->
  </main>

  <footer>
    
  </footer>
</template>

<style scoped>

</style>