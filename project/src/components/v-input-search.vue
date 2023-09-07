<template>
    <div class="v-input-search search">
        <input
            class="search__input"
            type="search"
            id="search"
            name="search"
            value=""
            placeholder="Найти..."
            @change="changeSearch($event.target.value)"
        />
        <button
            class="v-input-search__btn search__btn"
            aria-label="search"
            @click="search(searchVal)"
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.267 3.0665C6.29055 3.0665 3.06699 6.29006 3.06699 10.2665C3.06699 14.243 6.29054 17.4665 10.267 17.4665C14.2434 17.4665 17.467 14.243 17.467 10.2665C17.467 6.29006 14.2434 3.0665 10.267 3.0665ZM0.666992 10.2665C0.666992 4.96457 4.96506 0.666504 10.267 0.666504C15.5689 0.666504 19.867 4.96458 19.867 10.2665C19.867 12.485 19.1145 14.5277 17.8508 16.1533L24.3155 22.618C24.7841 23.0866 24.7841 23.8464 24.3155 24.315C23.8469 24.7837 23.0871 24.7837 22.6185 24.315L16.1538 17.8503C14.5281 19.114 12.4854 19.8665 10.267 19.8665C4.96506 19.8665 0.666992 15.5684 0.666992 10.2665Z" fill="#003459"/>
            </svg>
        </button>
    </div>
</template>

<script>
    import { mapActions} from 'vuex';

    export default {
        name: "v-list-notes",
        components: {},
        props: {
        },
        data() {
            return {
                searchVal: ''
            }
        },
        computed: {},
        methods: {
            ...mapActions([
                'SEARCH_VALUE',
            ]),
            changeSearch(searchVal) {
                this.searchVal = searchVal
            },
            search(searchVal) {
                this.SEARCH_VALUE(searchVal)
            }
        },
        mounted() {
            
        }
    }
</script>

<style scoped>
</style>