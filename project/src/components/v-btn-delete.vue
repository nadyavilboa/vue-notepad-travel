<template>
    <button
        :class="{'btn btn-active': fullBtn, 'btn-icon': !fullBtn, 'v-btn-delete': true}"
        aria-label="delete-note"
    >
        <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.57143 2C8.23016 2 7.14286 3.08731 7.14286 4.42857V6.85714H18.8571V4.42857C18.8571 3.0873 17.7699 2 16.4286 2H9.57143ZM20.8571 6.85714V4.42857C20.8571 1.98275 18.8745 0 16.4286 0H9.57143C7.1256 0 5.14286 1.98274 5.14286 4.42857V6.85714H1C0.447715 6.85714 0 7.30486 0 7.85714C0 8.40943 0.447715 8.85714 1 8.85714H1.71429V26.7143C1.71429 29.1602 3.69703 31.1429 6.14286 31.1429H19.8571C22.303 31.1429 24.2857 29.1602 24.2857 26.7143V8.85714H25C25.5523 8.85714 26 8.40943 26 7.85714C26 7.30486 25.5523 6.85714 25 6.85714H20.8571ZM22.2857 8.85714H3.71429V26.7143C3.71429 28.0556 4.80158 29.1429 6.14286 29.1429H19.8571C21.1985 29.1429 22.2857 28.0556 22.2857 26.7143V8.85714ZM9.57143 13.7143C10.1237 13.7143 10.5714 14.162 10.5714 14.7143V23.2857C10.5714 23.838 10.1237 24.2857 9.57143 24.2857C9.01914 24.2857 8.57143 23.838 8.57143 23.2857V14.7143C8.57143 14.162 9.01914 13.7143 9.57143 13.7143ZM16.4286 13.7143C16.9809 13.7143 17.4286 14.162 17.4286 14.7143V23.2857C17.4286 23.838 16.9809 24.2857 16.4286 24.2857C15.8763 24.2857 15.4286 23.838 15.4286 23.2857V14.7143C15.4286 14.162 15.8763 13.7143 16.4286 13.7143Z" fill=""/>
        </svg>
        <span
            v-if="fullBtn"
            class="v-btn-delete__text"
        >
            Удалить
        </span>
    </button>
</template>

<script>
    export default {
        name: "v-btn-delete",
        components: {},
        props: {
            fullBtn: {
                type: Boolean,
                default() {
                    return false
                }
            }
        },
        data() {
            return {
                
            }
        },
        computed: {

        },
        methods: {
            
        },

    }
</script>

<style scoped>
    .v-footer.amount-block {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
        padding: 30px;
        font-size: 18px;
        font-weight: 500;
    }
</style>