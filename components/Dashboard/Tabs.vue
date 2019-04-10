<template>
<div>
    <div class="tabs">
        <ul class="nav nav-tabs">
            <li class="nav-item"
            v-for="tab in tabs"
            :class="{'isActive': tab.isActive}">
            <button class="btn" v-bind:class="btn-success">
            <a :class="nav-link" :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
            </button>
            </li>
        </ul>
    </div>
    <div class="tabs-details">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [],
            
        };
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }  
}
</script>

<style>

</style>