<template>
    <div class="v-main-wrapper">
        <div class="v-main-wrapper__header header">
            <div class="v-main-wrapper__top-content">
                <h2 class="v-main-wrappper__title title">Блокнот путешественника</h2>
                <button class="v-main-wrapper__btn btn btn-active">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 13.7139H0V10.7139H24V13.7139Z" fill=""/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0L14 24H11L11 0H14Z" fill=""/>
                    </svg>
                    <span class="v-main-wrapper__btn-text">Добавить запись</span>
                </button>
            </div>
            <div class="v-main-wrapper__filter-block">
                <div class="v-main-wrapper__select">
                    <v-select
                        :options="options"
                        @select="optionSelect"
                        :selected="selected"
                    />
                </div>
                <div class="v-main-wrapper__search">
                    <v-input-search />
                </div>
            </div>
        </div>
        <v-list-notes />
        <div class="v-main-wrapper__amount-block footer">Total notes: {{ NOTES.length }}</div>
    </div>
</template>

<script>
import vListNotes from './v-list-notes.vue';
import vSelect from './v-select.vue';
import vInputSearch from './v-input-search.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "v-main-wrapper",
    components: {
        vListNotes,
        vSelect,
        vInputSearch
    },
    props: {
        
    },
    data() {
        return {
            options: [
                {name: 'Все континеты', value: 'Все континенты'},
                {name: 'Евразия', value: 'Евразия'},
                {name: 'Африка', value: 'Африка'},
                {name: 'Северная Америка', value: 'Северная Америка'},
                {name: 'Южная Америка', value:'Южная Америка'},
                {name: 'Австралия', value: 'Австралия'},
                {name: 'Антарктида', value: 'Антарктида'},
            ],
            selected: 'Все континенты'
        }
    },
    computed: {
        ...mapGetters([
            'NOTES',
        ]),
    },
    methods: {
        ...mapActions([
            'FILTER_NOTES',
        ]),
        optionSelect(option) {
            this.selected = option.name
            this.FILTER_NOTES(option.value)
        }
    },
    mounted() {

    }
}
</script>

<style lang="scss">
    .v-main-wrapper__header {
        position: fixed;
        width: 100%;
    }

    .v-main-wrapper__top-content,
    .v-main-wrapper__filter-block {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        padding: 10px 20px;

        @media (min-width: 768px) {
            justify-content: space-between;
        }
    }

    .v-main-wrapper__amount-block {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
        padding: 30px;
        font-size: 18px;
        font-weight: 500;
    }
</style>