<script setup>
    import Fiche from '@/components/Fiche.vue';
    import JSON from '@/assets/JSON.json'
</script>

<template>
    <Fiche :pays="JSON"></Fiche>
</template>

<style>
</style>