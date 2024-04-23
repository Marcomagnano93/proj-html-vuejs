<script>
  import AppHeader from "./components/AppHeader.vue";
  import AppHero from "./components/AppHero.vue";
  import AppInfoSection from "./components/AppInfoSection.vue";

  export default{
    components: {
      AppHeader,
      AppHero,
      AppInfoSection,
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
    <!-- img + more info Section -->
    <!-- reviews Section -->
    <!-- subscribe card -->
  </main>

  <footer>
    
  </footer>
</template>

<style scoped>

</style>
