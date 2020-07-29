<template>
    <div
        id="page-sidebar"
        :class="{ 'open' : sidebarState == 'opened' || showSidebar }"
        class="page-sidebar"
        data-pages="sidebar"
        @mouseenter="sidebarState == 'hover' && $emit('handle-sidebar', true)"
        @mouseleave="sidebarState == 'hover' && $emit('handle-sidebar', false)"
    >
        <div class="row no-gutters align-items-center px-4 py-3">
            <router-link :to="{ name: 'dashboard'}" class="col sidebar-app-logo">
                <slot name="app-logo" />
            </router-link>
            <div class="col-auto menu-icon d-none d-lg-flex">
                <img src="./assets/hamburguer-menu.png">
            </div>
        </div>
        <div id="sidebar-menu" class="sidebar-menu">
            <a href="#" class="row no-gutters align-items-center justify-content-between py-3 px-4">
                <span class="col">Change App</span>
                <span class="icon-thumbnail col-auto">
                    <i class="fa fa-box" />
                </span>
            </a>
            <router-link :to="{ name: 'dashboard'}" class="row no-gutters align-items-center justify-content-between py-3 px-4">
                <span class="col">Dashboard</span>
                <span class="icon-thumbnail col-auto">
                    <i class="fa fa-pie-chart" />
                </span>
            </router-link>

            <template v-if="resources">
                <template v-for="(resource, index) in resources">
                    <template v-if="!resource.is_published || +resource.is_published">
                        <side-item 
                            v-if="!resource.links || !resource.links.length"   
                            :resource="resource"  
                            :key="`resource-${index}`"
                        />

                        <side-item-group
                            v-else
                            :current="currentCategoryMenu"
                            :label="resource.title" 
                            :menu-id="resource.id || resource.title"
                            :childs="resource.links"
                            :key="`resource-${index}`"
                            @toggle-active="toggleActive"
                        />
                    </template>
                </template>
            </template>
        </div>
    </div>
</template>

<script>
import SideItem from "./item";
import SideItemGroup from "./item-group";
import uuid from "uuid/v4";

export default {
    name: "GwSidebar",
    components: {
        SideItem,
        SideItemGroup
    },
    props: {
        resources: {
            type: Array,
            default() {
                return [];
            }
        },
        showSidebar: {
            type: Boolean,
            default: false
        },
        sidebarState: {
            type: String,
            default: "hover"
        }
    },
    data() {
        return {
            currentCategoryMenu: ""
        }
    },
    watch: {
        resources: {
            handler(links) {
                this.currentCategoryMenu = links.length ? links.find(link => link.links).title : "";
            },
            immediate: true
        }
    },
    methods: {
        toggleActive(categoryName) {
            if (this.currentCategoryMenu == categoryName) {
                this.currentCategoryMenu = "";
            } else {
                this.currentCategoryMenu = categoryName;
            }
        }
    }
};
</script>

<style lang="scss">
.page-sidebar {
    width: 280px;
    background-color: var(--darken-base-color);
    z-index: 1049;
    left: -210px;
    position: fixed;
    bottom: 0;
    top: 0;
    right: auto;
    overflow: hidden;
    transition: transform .4s cubic-bezier(.05,.74,.27,.99);
    transform: translate3d(0px, 0px, 0px);

    &.open {
        transform: translate(210px, 0px);
    }

    .sidebar-app-logo {
        font-family: 'Lato', sans-serif;
        font-weight: 900;
        font-size: 24px;

        img {
            width: 100%;
        }
    }

    .menu-icon {
        align-items: center;
        justify-content: center;
        margin-left: 25px;
    }

    .sidebar-menu {
        padding-top: 30px;
        color: white;

        .router-link-exact-active {
            background-color: rgba(#000, 0.2);
            position: relative;

            &:before {
                content: "";
                width: 5px;
                height: 100%;
                position: absolute;
                left: 0;
                background-color: var(--base-color);
            }
        }

        .resource-name {
            i {
                font-size: 10px;
                vertical-align: middle;
            }
        }

        .icon-thumbnail {
            font-size: 22px !important;
            display: flex;
            align-items: center;
            justify-content: center;
            text-transform: uppercase;
            font-weight: 700;
            width: 20px;
            height: 20px;

            i {
                font-size: 18px !important;
                color: white;
            }
        }
    }

    a:visited,
    a:focus,
    button:visited,
    button:focus,
    a,
    button {
        color: white;
        text-decoration: none;
    }

}

@media (max-width: 991px) {
    .page-sidebar {
        width:250px;
        left: -250px !important;
        transform: translate3d(0,0,0) !important;
        transition: left 0.2s cubic-bezier(0.05, 0.74, 0.27, 0.99);

        &.open {
            left: 0 !important;
            + div {
                transform: translate3d(250px, 0, 0);
            }
        }
    }
}
</style>
