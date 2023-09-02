<template>
    <div class="v-list-notes">
        <v-item-note />
        <v-item-note />
        <v-item-note />
    </div>
</template>

<script>
import vItemNote from './v-item-note.vue';

export default {
    name: "v-list-notes",
    components: {
        vItemNote
    },
    props: {
        
    },
    data() {
        return {}
    },
    computed: {},
    methods: {
        
    },
    mounted() {

    }
}
</script>

<style scoped>
    .v-list-notes {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 50px;
    }
</style>