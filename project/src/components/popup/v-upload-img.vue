<template>
    <div class="v-upload-img">
        <span class="v-upload-img__text">{{ text }}</span>
        <img
            :class="{'popupImg': popupImg, 'previewImg': !popupImg}"
            v-if="file"
            :src=" require('../../assets/images/' + file) "
            alt=""
        />
        <span
            v-else
            :class="{'popupImg': popupImg, 'previewImg': !popupImg, 'v-upload-img__empty-img': true}"
        />
        <label 
            class="v-upload-img__btn btn"
            id="file"
        >
            <svg width="24" height="24" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 17V10.5H2.5V17H24V10.5H26V17C26 18.1046 25.1046 19 24 19H2.5C1.39543 19 0.5 18.1046 0.5 17Z" fill="#003459"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14L12 8.74228e-08L14 0L14 14L12 14Z" fill="#003459"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99985 4.99985L11.9998 -0.000151038L13.4141 1.41406L8.41406 6.41406L6.99985 4.99985Z" fill="#003459"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0002 -0.000150951L19.0002 4.99985L17.5859 6.41406L12.5859 1.41406L14.0002 -0.000150951Z" fill="#003459"/>
            </svg>
            <span class="v-main-wrapper__btn-text">Загрузить</span>
            <input
                class="v-upload-img__file-input visually-hidden"
                id="file"
                name="file"
                type="file"
                value=""
                @change="uploadImg"
            />
        </label>
        <div
            v-if="selectedFileUrl"
            :class="{'popupImg': popupImg, 'previewImg': !popupImg, 'v-upload-img__new-img': true}"
        >
            <img
                :src="selectedFileUrl"
                alt="new preview img"
            >
        </div>
    </div>
</template>

<script>
export default {
        name: "v-upload-img",
        components: {
        },
        props: {
            text: {
                type: String,
                default() {
                    return ''
                }
            },
            img: {
                type: String,
                default() {
                    return ''
                }
            },
            popupImg: {
                type: Boolean,
                default() {
                    return false
                }
            }
        },
        data() {
            return {
                file: this.img,
                selectedFile: null,
                selectedFileUrl: null
            }
        },
        computed: {},
        methods: {
            uploadImg(event) {
                this.selectedFile = event.target.files[0];
                console.log(this.selectedFile);
                this.selectedFileUrl = URL.createObjectURL(this.selectedFile);
                console.log(this.selectedFileUrl);
            }
        },
        beforeUnmount() {
            if (this.selectedFileUrl) {
                URL.revokeObjectURL(this.selectedFileUrl);
            }
        }
    }
</script>
<style scoped lang="scss">
</style>