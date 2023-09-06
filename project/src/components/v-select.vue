<template>
    <div class="v-select select">
        <p 
            class="v-select__title select__title subtitle"
            @click="areOptionsVisible = !areOptionsVisible"
        >
            {{ selected }}
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.06066" y1="1.93934" x2="10.0607" y2="10.9393" stroke="#003459" stroke-width="3"/>
                <line x1="7.93934" y1="10.9393" x2="16.9393" y2="1.93934" stroke="#003459" stroke-width="3"/>
            </svg>

        </p>
        <div
            v-if="areOptionsVisible"
            class="v-select__options select__options"
        >
            <p
                class="select__item text"
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
            >
                {{ option.name }}
        </p>
        </div>
    </div>
</template>

<script>

export default {
    name: "v-select",
    props: {
        options: {
            type: Array,
            default() {
                return []
            }
        },
        selected: {
            type: String,
            default() {
                return ''
            }
        }
    },
    data() {
        return {
            areOptionsVisible: false
        }
    },
    methods: {
        selectOption(option) {
            this.$emit('select', option);
            this.areOptionsVisible = false;
        },
        hideSelect() {
            this.areOptionsVisible = false;
        }
    },
    mounted() {
        document.addEventListener('click', this.hideSelect.bind(this), true);
    }, 
    beforeUnmount() {
        document.removeEventListener('click', this.hideSelect);
    },
}
</script>

<style scoped>

</style>