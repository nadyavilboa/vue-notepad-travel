<template>
    <div class="v-form">
        <div class="v-form__location-group v-form__group">
            <v-select
                :options="options"
                @select="optionSelect"
                :selected="selected"
            />
            <v-input-wrapper
                :value="note_data ? note_data.country : ''"
                :placeholder="'Страна'"
            />
            <v-input-wrapper
                :value="note_data ? note_data.city : ''"
                :placeholder="'Город'"
            />
        </div>
        <div class="v-form__info-group v-form__group">
            <v-input-wrapper
                :value="note_data ? note_data.period : ''"
                :placeholder="'Дата поездки'"
            />
            <v-input-wrapper
                :value="note_data ? note_data.price : ''"
                :placeholder="'Стоимость'"
            />
        </div>
        <div class="v-form__images-group v-form__group">
            <v-upload-img
                :text="'Preview image'"
                :img="note_data ? note_data.imgPreview : ''"
            />
            <v-upload-img
                :text="'Popup image'"
                :img="note_data ? note_data.imgPopup : ''"
                :popup-img="true"
            />
        </div>
        <textarea
            class="v-form__description input-text"
            placeholder="Ключевая информация..."
            rows="5"
            :value="note_data ? note_data.description : ''"
        ></textarea>
        <textarea
            class="v-form__description input-text"
            placeholder="Подробное описание..."
            rows="10"
            :value="note_data ? note_data.fullDescription : ''"
        ></textarea>
    </div>
</template>

<script>
import vSelect from '../v-select.vue';
import vInputWrapper from './v-input-wrapper.vue';
import vUploadImg from './v-upload-img.vue';
export default {
        name: "v-form",
        components: {
            vSelect,
            vInputWrapper,
            vUploadImg
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
                options: [
                    {name: 'Евразия', value: 'Евразия'},
                    {name: 'Африка', value: 'Африка'},
                    {name: 'Северная Америка', value: 'Северная Америка'},
                    {name: 'Южная Америка', value:'Южная Америка'},
                    {name: 'Австралия', value: 'Австралия'},
                    {name: 'Антарктида', value: 'Антарктида'},
                ],
                selected: 'Евразия',
            }
        },
        computed: {},
        methods: {
            optionSelect(option) {
                this.selected = option.name
            }
        },
    }
</script>
<style scoped lang="scss">
    .v-form {
        display: flex;
        flex-direction: column;
        gap: 20px;

        &__group {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        &__description {
            resize: vertical;

            &.input-text {
                width: 100%;
                font-weight: 400;
            }
        }
    }
</style>