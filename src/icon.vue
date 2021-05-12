<template>
    <span class="icon-thumbnail col-auto">
        <img v-if="resource.icon_url" :src="resource.icon_url" width="50%">
        <i v-else-if="resource.icon_class" :class="resource.icon_class" />
        <span v-else>{{ firstLetter }}</span>
    </span>
</template>

<script>
export default {
    name: "Icon",
    props: {
        resource: {
            type: Object,
            required: true
        }
    },
    computed: {
        firstLetter() {
            const itemText = this.resource.title || this.resource.slug || "";

            return itemText.charAt(0);
        }
    }
}
</script>
