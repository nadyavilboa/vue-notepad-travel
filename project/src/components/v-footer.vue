<template>
    <div class="v-footer amount-block footer">
        Total notes: {{ NOTES.length }}
    </div>
</template>

<script>
    import { mapGetters} from 'vuex';

    export default {
        name: "v-footer",
        components: {},
        props: {
        },
        data() {
            return {
                
            }
        },
        computed: {
            ...mapGetters([
                'NOTES'
            ]),
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