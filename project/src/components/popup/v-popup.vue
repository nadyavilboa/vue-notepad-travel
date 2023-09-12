<template>
    <div :class="{'v-popup-smart': smartPopup, 'v-popup-info': !smartPopup, 'v-popup': true}" ref="popup">
        <div class="v-popup__container card">
            <div class="v-popup__header">
                <span class="title">{{ title }}</span>
                <button class="v-popup__close-btn" @click="closePopup">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0003 19.0002L1.00034 2.00015L2.41455 0.585938L19.4145 17.5859L18.0003 19.0002Z" fill="#003459"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0002 2.00015L2.00015 19.0002L0.585938 17.5859L17.5859 0.585938L19.0002 2.00015Z" fill="#003459"/>
                    </svg>
                </button>
            </div>
            <div class="v-popup__content">
                <slot></slot>
            </div>
            <div v-if="smartPopup" class="v-popup__footer">
                <button
                    class="close_modal btn"
                    @click="leftBtnAction"
                >
                    {{ leftBtnName }}
                </button>
                <button
                    :class="[ 'submit_btn', 'btn', rightBtnClass ]"
                    @click="rightBtnAction"
                >
                    {{ rightBtnName }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "v-popup",
    props: {
        title: {
            type: String,
            default() {
                return 'Уведомление'
            }
        },
        smartPopup: {
            type: Boolean,
            default() {
                return true
            }
        },
        leftBtnName: {
            type: String,
            default() {
                return 'Отмена'
            }
        },
        rightBtnName: {
            type: String,
            default() {
                return 'submit'
            }
        },
        rightBtnClass: {
            type: String,
            default() {
                return ''
            }
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        closePopup() {
            this.$emit('closePopup');
        },
        leftBtnAction() {
            this.$emit('leftBtnAction');
        },
        rightBtnAction() {
            this.$emit('rightBtnAction');
        }
    },
    mounted() {
        let vm = this;
        document.addEventListener('click', (evt) =>{
            if (evt.target === vm.$refs['popup']) {
                vm.closePopup()
            }
        });
    }
}
</script>

<style scoped>
    .v-popup__close-btn {
        border: 0;
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s;
        cursor: pointer;
    }

    .v-popup__close-btn:hover {
        transform: rotate(360deg);
    }
</style>