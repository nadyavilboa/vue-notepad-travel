<template>
    <div class="v-item-note card">

        <v-popup 
            v-if="isPopupShow"
            :title="'Запись о путешествии'"
            :smartPopup="false"
            @closePopup="closePopupInfo"
        >
            <div class="v-popup__content-card">
                <div class="v-popup__group">
                    <div class="v-popup__left-part">
                        <img
                            class="v-popup__img-popup"
                            width="600"
                            height="600"
                            :src=" require('../assets/images/' + note_data.imgPopup) "
                            :alt="note_data.city"
                        />
                    </div>
                    <v-note-info
                        :fullInfo="true"
                        :note_data="note_data"
                    />
                </div>
                <div class="v-popup__footer-center">
                    <v-btn-edit fullBtn />
                    <v-btn-delete
                        fullBtn
                        :note_data="note_data"
                    />  
                </div>
            </div>
        </v-popup>

        <div class="v-item-note__container">
            <div class="v-item-note__left-part">
                <img 
                    class="v-item-note__img-preview"
                    width="250"
                    height="200"
                    :src="
                    require('../assets/images/' + note_data.imgPreview) "
                    :alt="note_data.city"
                />
            </div>
            <div class="v-item-note__right-part">
                <div class="v-item-note__controls">
                    <v-btn-edit />
                    <v-btn-delete :note_data="note_data" />  
                </div>
                <v-note-info :note_data="note_data" />
            </div>
        </div>
        <div class="v-item-note__description text">
            {{ note_data.description }}
        </div>
        <button
            class="v-item-note__btn-full btn btn-active"
            @click="showPopupInfo"
        >
            Подробнее
        </button>
    </div>
</template>

<script>
import vPopup from './popup/v-popup.vue';
import vBtnEdit from './v-btn-edit.vue';
import vBtnDelete from './v-btn-delete.vue';
import vNoteInfo from './v-note-info.vue';
export default {
    name: "v-item-note",
    components: {
        vPopup,
        vBtnEdit,
        vBtnDelete,
        vNoteInfo
    },
    props: {
        note_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            isPopupShow: false,
        }
    },
    computed: {},
    methods: {
        showPopupInfo() {
            this.isPopupShow = true;
        },
        closePopupInfo() {
            this.isPopupShow = false;
        }
    },
    mounted() {

    }
}
</script>

<style scoped>
    .v-item-note {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 1rem;
        max-width: 280px;

        @media (min-width: 768px) {
            max-width: 480px;
        }
    }

    .v-item-note__container {
        display: flex;
        gap: 20px;
        flex-direction: column;

        @media (min-width: 768px) {
            flex-direction: row;
        }
    }

    .v-item-note__img-preview {
        border-radius: 20px;
        width: 250px;
        height: 167px;
    }

    .v-item-note__right-part {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    .v-item-note__controls {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    .v-item-note__info {
        flex-direction: column;
        gap: 30px;
    }

    .v-item-note__text {
        margin: 0;
    }

    .v-item-note__btn-full {
        align-self: center;
    }
</style>
