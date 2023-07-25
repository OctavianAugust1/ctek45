<template>
<div>
    {{ username }}
</div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
    components: {},
    setup() {
        return {
            username: 'name'
        }
    }
})
</script>

<style scoped>

</style>
