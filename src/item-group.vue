<template>
    <div :class="{ 'open-category-menu' : isActive}" class="menu-category row flex-column no-gutters">
        <span
            :class="{ active: isActive }"
            class="menu-category-title py-3 px-4 d-flex justify-content-between align-items-center" 
            @click.prevent="toggleActive()"
        >
            {{ label }}
            <i class="fas" :class="`${arrowIcon}`" />
        </span>

        <div class="menu-category-links">
            <template v-for="(resource, index) in childs">
                <side-item
                    v-if="!resource[childName]|| resource[childName].length"
                    :key="`resource-${label}-${index}`"
                    :resource="resource"
                />
            </template>
        </div>
    </div>
</template>

<script>
import SideItem from "./item";

export default {
    components: {
        SideItem
    },
    filters: {
        firstLetter(value) {
            return value.charAt(0);
        }
    },
    props: {
        label: {
            type: String,
            required: true
        },
        childs: {
            type: Array,
            default() {
                return [];
            }
        },
        current: {
            type: String,
            required: true
        },
        menuId: {
            type: String,
            required: true
        },
        childName: {
            type: String, 
            default: "links"
        }
    },
    computed: {
        arrowIcon() {
            return "fa-chevron-right";
        },
        isActive() {
            return this.current == this.menuId;
        }
    },
    methods: {
        toggleActive() {
            this.$emit("toggle-active", this.menuId);
        }
    }
};
</script>

<style lang="scss" scoped>
.menu-item-group {
    cursor: pointer;
    border-top: 1px solid  var(--base-color);
    color: var(--base-color);
    
    .toggle, .icon-thumbnail i {
        color: var(--base-color) !important;
    }
}
</style>

<style lang="scss">
.menu-category {
    border-top: 1px solid rgba(255, 255, 255, .2);
    
    .menu-category-title {
        color: var(--base-color);
        padding-right: 30px !important;
        cursor: pointer;
        i {
            transition: transform .2s;
        }
    }
    
    .menu-category-links {
        max-height: 0;
        overflow-y: hidden;
        transition: all .5s;
    }

    &.open-category-menu {
        .menu-category-title {
            i {
                transform: rotate(90deg);
                transition: transform .2s;
            }
        }
        .menu-category-links {
            max-height: 600px;
            transition: all 1s;
        }
    }
}
</style>
