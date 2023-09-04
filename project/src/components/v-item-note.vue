<template>
    <div class="v-item-note">
        <div class="v-item-note__container">
            <div class="v-item-note__left-part">
                <img class="v-item-note__img-preview" width="250" height="200" :src=" require('../assets/images/' + note_data.imgPreview) " :alt="note_data.imgPreview" />
            </div>
            <div class="v-item-note__right-part">
                <div class="v-item-note__controls">
                    <button class="v-item-note__btn v-item-note__btn-edit btn-icon" aria-label="edit note">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760063 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z" fill=""/>
                        </svg>
                    </button>
                    <button class="v-item-note__btn v-item-note__btn-delete btn-icon" aria-label="delete note">
                        <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.57143 2C8.23016 2 7.14286 3.08731 7.14286 4.42857V6.85714H18.8571V4.42857C18.8571 3.0873 17.7699 2 16.4286 2H9.57143ZM20.8571 6.85714V4.42857C20.8571 1.98275 18.8745 0 16.4286 0H9.57143C7.1256 0 5.14286 1.98274 5.14286 4.42857V6.85714H1C0.447715 6.85714 0 7.30486 0 7.85714C0 8.40943 0.447715 8.85714 1 8.85714H1.71429V26.7143C1.71429 29.1602 3.69703 31.1429 6.14286 31.1429H19.8571C22.303 31.1429 24.2857 29.1602 24.2857 26.7143V8.85714H25C25.5523 8.85714 26 8.40943 26 7.85714C26 7.30486 25.5523 6.85714 25 6.85714H20.8571ZM22.2857 8.85714H3.71429V26.7143C3.71429 28.0556 4.80158 29.1429 6.14286 29.1429H19.8571C21.1985 29.1429 22.2857 28.0556 22.2857 26.7143V8.85714ZM9.57143 13.7143C10.1237 13.7143 10.5714 14.162 10.5714 14.7143V23.2857C10.5714 23.838 10.1237 24.2857 9.57143 24.2857C9.01914 24.2857 8.57143 23.838 8.57143 23.2857V14.7143C8.57143 14.162 9.01914 13.7143 9.57143 13.7143ZM16.4286 13.7143C16.9809 13.7143 17.4286 14.162 17.4286 14.7143V23.2857C17.4286 23.838 16.9809 24.2857 16.4286 24.2857C15.8763 24.2857 15.4286 23.838 15.4286 23.2857V14.7143C15.4286 14.162 15.8763 13.7143 16.4286 13.7143Z" fill=""/>
                        </svg>
                    </button>  
                </div>
                <div class="v-item-note__info">
                    <p class="v-item-note__text subtitle">{{ note_data.location }}</p>
                    <p class="v-item-note__text subtitle">{{ note_data.price }} ₽</p>
                    <p class="v-item-note__text subtitle">{{ note_data.period }}</p>
                </div>
            </div>
        </div>
        <div class="v-item-note__description text">
            {{ note_data.description }}
        </div>
        <button class="v-item-note__btn-full btn">Подробнее</button>
    </div>
</template>

<script>
export default {
    name: "v-item-note",
    props: {
        note_data: {
            type: Object,
            default() {
                return {}
            }
        }
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
    .v-item-note {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 1rem;
        box-shadow: 0 5px 25px rgb(30 31 33 / 12%);
        max-width: 280px;
        border-radius: 20px;

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

    .v-item-note__controls,
    .v-item-note__info {
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
