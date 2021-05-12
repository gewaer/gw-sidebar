<template>
    <router-link
        v-if="resource.slug"
        :to="{ name: 'browse', params: { resource: resource.slug }}"
        class="row no-gutters align-items-center justify-content-between py-3 px-4"
    >
        <span class="col">{{ resource.title }}</span>
        <icon :resource="resource" />
    </router-link>

    <router-link
        v-else-if="resource.route"
        :to="resource.route"
        class="row no-gutters align-items-center justify-content-between py-3 px-4"
    >
        <span class="col">{{ resource.name }}</span>
        <icon :resource="resource" />
    </router-link>

    <a
        v-else-if="resource.url"
        :href="resource.url"
        class="row no-gutters align-items-center justify-content-between py-3 px-4"
        target="_blank"
    >
        <span class="col resource-name">
            {{ resource.title }}
            <i class="fas fa-external-link-alt" />
        </span>
        <icon :resource="resource" />
    </a>
</template>

<script>
import Icon from "./icon";

export default {
    components: {
        Icon
    },
    props: {
        resource: {
            type: Object,
            required: true
        }
    }
}
</script>
