<template>
    <div id="accordion">
        <div class="card"
        v-for="option in options" 
        @click="selectOption(option)" 
        :class="{'isActive': tab.isActive}">
            <header class="card-header">
                <a href="" data-toggle="collapse" data-target="#collapse11" aria-expanded="true" class="">
                    <div class="row">
                        <div class="col-sm-11">
                            <span class="title">{{ option.name }}</span>
                        </div>
                        <div class="col-sm-1">
                            <font-awesome-icon icon="chevron-down" class="icon-action"/>
                        </div>
                    </div>
                </a>
            </header>
            <div class="collapse show">
                <article class="card-body col-sm-10">
                    <slot></slot>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [],
            
        };
    },
    created() {
        this.options = this.$children;
    },
    methods: {
        selectOption(selectedOption) {
            this.options.forEach(option => {
                option.isActive = (option.name == selectedOption.name);
            });
        }
    }  
}
</script>