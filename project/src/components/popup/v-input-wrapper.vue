<template>
    <div class="v-input-wrapper">
        <input
            class="v-input input-text"
            type="text"
            :value="value"
            :placeholder="placeholder"
            @change="changeInputVal($event.target.value)"
        />
    </div>
</template>

<script>
export default {
        name: "v-input-wrapper",
        components: {
        },
        props: {
            value: {
                type: String,
                default() {
                    return ''
                }
            },
            placeholder: {
                type: String,
                default() {
                    return ''
                }
            },
            inputName: {
                type: String,
                default() {
                    return ''
                }
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            changeInputVal(value) {
                this.$emit('changeInputVal', value, this.inputName);
            }
        },
    }
</script>
<style scoped>
</style>