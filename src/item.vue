<template>
    <router-link
        v-if="resource.slug"
        :to="{ name: 'browse', params: { resource: resource.slug }}"
        class="row no-gutters align-items-center justify-content-between py-3 px-4"
    >
        <span class="col">{{ resource.title }}</span>
        <span class="icon-thumbnail col-auto">
            <img v-if="resource.icon" :src="resource.icon" width="50%">
            <i v-else-if="resource.iconClass" :class="resource.iconClass" />
            <span v-else>{{ resource.slsug | firstLetter }}</span>
        </span>
    </router-link>

    <router-link
        v-else-if="resource.route"
        :to="resource.route"
        class="row no-gutters align-items-center justify-content-between py-3 px-4"
    >
        <span class="col">{{ resource.name }}</span>
        <span class="icon-thumbnail col-auto">
            <img v-if="resource.icon" :src="resource.icon" width="50%">
            <i v-else-if="resource.iconClass" :class="resource.iconClass" />
            <span v-else>{{ resource.title | firstLetter }}</span>
        </span>
    </router-link>
    
    <a
        v-else
        :href="resource.url"
        class="row no-gutters align-items-center justify-content-between py-3 px-4"
        target="_blank"
    >
        <span class="col resource-name">
            {{ resource.title }}
            <i class="fas fa-external-link-alt" />
        </span>
        <span class="icon-thumbnail col-auto">
            <img v-if="resource.icon" :src="resource.icon" width="50%">
            <i v-else-if="resource.iconClass" :class="resource.iconClass" />
            <span v-else>{{ resource.title | firstLetter }}</span>
        </span>
    </a>
</template>

<script>
export default {
    props: {
        resource: {
            type: Object,
            required: true
        }
    },
    filters: {
        firstLetter(value) {
            return value.charAt(0);
        }
    },
}
</script>

<style>

</style>