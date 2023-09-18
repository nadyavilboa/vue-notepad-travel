<template>
    <div class="v-input-wrapper">
        <input
            class="v-input input-text"
            type="text"
            :value="value"
            :placeholder="placeholder"
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
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {

        },
    }
</script>
<style scoped>
</style>