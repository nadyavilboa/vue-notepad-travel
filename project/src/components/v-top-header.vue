<template>
    <div class="v-top-header header__part">

        <v-popup 
            v-if="isPopupShow"
            :title="'Добавьте новую запись'"
            :smartPopup="true"
            @closePopup="closePopup"
            @leftBtnAction="closePopup"
            @rightBtnAction="addNote"
        >
        </v-popup>

        <h2 class="v-main-wrappper__title title">Блокнот путешественника</h2>
        <button
            class="v-main-wrapper__btn btn btn-active"
            @click="showPopup"
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 13.7139H0V10.7139H24V13.7139Z" fill=""/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0L14 24H11L11 0H14Z" fill=""/>
            </svg>
            <span class="v-main-wrapper__btn-text">Добавить запись</span>
        </button>
    </div>
</template>

<script>
    import vPopup from './popup/v-popup.vue';
    export default {
        name: "v-top-header",
        components: {
            vPopup
        },
        props: {
        },
        data() {
            return {
                isPopupShow: false
            }
        },
        computed: {
        },
        methods: {
            showPopup() {
                this.isPopupShow = true;
            },
            closePopup() {
                this.isPopupShow = false;
            },
            addNote() {

            }
        },

    }
</script>

<style scoped>

</style>