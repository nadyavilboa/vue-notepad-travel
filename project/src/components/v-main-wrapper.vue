<template>
    <div class="v-main-wrapper">
        <div class="v-main-wrapper__top-content">
            <h2 class="v-main-wrappper__title title">Блокнот путешественника</h2>
            <button class="v-main-wrapper__btn btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 13.7139H0V10.7139H24V13.7139Z" fill=""/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0L14 24H11L11 0H14Z" fill=""/>
                </svg>
                <span class="v-main-wrapper__btn-text">Добавить запись</span>
            </button>
        </div>
        <v-list-notes />
        <div class="v-main-wrapper__amount-block footer">Total notes: {{ NOTES.length }}</div>
    </div>
</template>

<script>
import vListNotes from './v-list-notes.vue';
import { mapGetters } from 'vuex';

export default {
    name: "v-main-wrapper",
    components: {
        vListNotes
    },
    props: {
        
    },
    data() {
        return {}
    },
    computed: {
        ...mapGetters([
            'NOTES',
        ]),
    },
    methods: {
        
    },
    mounted() {

    }
}
</script>

<style lang="scss">
    .v-main-wrapper__top-content {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        padding: 20px;

        @media (min-width: 768px) {
            justify-content: space-between;
        }
    }

    .v-main-wrapper__amount-block {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
        padding: 30px;
        font-size: 18px;
        font-weight: 500;
    }
</style>