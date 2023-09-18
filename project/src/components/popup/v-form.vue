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
                :inputName="'country'"
                @changeInputVal="changeInputVal"
            />
            <v-input-wrapper
                :value="note_data ? note_data.city : ''"
                :placeholder="'Город'"
                :inputName="'city'"
                @changeInputVal="changeInputVal"
            />
        </div>
        <div class="v-form__info-group v-form__group">
            <v-input-wrapper
                :value="note_data ? note_data.period : ''"
                :placeholder="'Дата поездки'"
                :inputName="'period'"
                @changeInputVal="changeInputVal"
            />
            <v-input-wrapper
                :value="note_data ? note_data.price : ''"
                :placeholder="'Стоимость'"
                :inputName="'price'"
                @changeInputVal="changeInputVal"
            />
        </div>
        <div class="v-form__images-group v-form__group">
            <v-upload-img
                :text="'Preview image'"
                :img="note_data ? note_data.imgPreview : ''"
                @uploadImg="uploadImg"
            />
            <v-upload-img
                :text="'Popup image'"
                :img="note_data ? note_data.imgPopup : ''"
                :popup-img="true"
                @uploadImg="uploadImg"
            />
        </div>
        <textarea
            class="v-form__description input-text"
            placeholder="Ключевая информация..."
            rows="5"
            :value="note_data ? note_data.description : ''"
            @change="changeInputVal($event.target.value, 'description')"
        ></textarea>
        <textarea
            class="v-form__description input-text"
            placeholder="Подробное описание..."
            rows="10"
            :value="note_data ? note_data.fullDescription : ''"
            @change="changeInputVal($event.target.value, 'fullDescription')"
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
                data_object: { ...this.note_data }
            }
        },
        computed: {},
        methods: {
            optionSelect(option) {
                this.selected = option.name;
                this.data_object.continent = this.selected;
                console.log('Object change', this.data_object);
            },
            changeInputVal(value, inputName) {
                this.data_object[inputName] = value;
                console.log('Object change', this.data_object);
            },
            uploadImg(fileObject, popupImg) {
                console.log(fileObject, fileObject.name);

                if (popupImg) {
                    this.data_object.imgPopup = fileObject.name;
                } else {
                    this.data_object.imgPreview = fileObject.name;
                }

                console.log('Object change', this.data_object);
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