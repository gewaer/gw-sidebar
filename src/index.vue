<template>
    <div
        id="page-sidebar"
        :class="{ 'open' : showSidebar }"
        class="page-sidebar"
        data-pages="sidebar"
        @mouseenter="$emit('handle-sidebar', true)"
        @mouseleave="$emit('handle-sidebar', false)"
    >
        <div class="row no-gutters align-items-start">
            <router-link :to="{ name: 'dashboard'}" class="col sidebar-app-logo">
                <slot name="app-logo" />
            </router-link>
            <div class="col-auto menu-icon d-none d-lg-flex">
                <img src="./assets/hamburguer-menu.png">
            </div>
        </div>
        <div id="sidebar-menu" class="sidebar-menu">
            <ul class="menu-items">
                <li class="m-t-30">
                    <router-link id="dashboard-menu-link" :to="{ name: 'dashboard'}">
                        <span class="title">Dashboard</span>
                    </router-link>
                    <span class="icon-thumbnail">
                        <i class="fa fa-pie-chart" />
                    </span>
                </li>
                <template v-if="resources">
                    <li v-for="(resource, index) in resources" :key="index">
                        <router-link :to="{ name: 'browse', params: { resource: resource.slug }}">
                            <span class="title">{{ resource.name }}</span>
                        </router-link>
                        <span class="icon-thumbnail">
                            <img v-if="resource.icon" :src="resource.icon" width="50%">
                            <span v-else>{{ resource.slug | firstLetter }}</span>
                        </span>
                    </li>
                </template>
            </ul>
            <div class="clearfix" />
        </div>
    </div>
</template>

<script>
export default {
    name: "GwSidebar",
    filters: {
        firstLetter(value) {
            return value.charAt(0);
        }
    },
    props: {
        resources: {
            type: Array,
            default() {
                return [];
            },
            validator(options) {
                return options.every(option => option.name && option.slug);
            }
        },
        showSidebar: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
.icon-thumbnail {
    font-size: 22px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;

    i {
        font-size: 18px !important;
    }
}

.page-sidebar .sidebar-menu .menu-items>li>a>.title {
    float: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 75%;
    text-transform: capitalize;
}

.page-sidebar .sidebar-menu .menu-items li>a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 70%;
}

.page-sidebar {
    transform: translate3d(0px, 0px, 0px);
}

.page-sidebar.open {
    transform: translate(210px, 0px);
}

@media (max-width: 991px) {
    .page-sidebar.open {
        display: block;
    }

    .page-sidebar.open + .page-container {
        transform: translate3d(250px, 0, 0);
    }

    .page-sidebar .sidebar-menu .menu-items li > a {
        width: 75%;
    }
}
</style>

<style lang="scss">
.sidebar-app-logo {
    padding-top: 15px !important;
    padding-left: 30px !important;

    img {
        width: 100%;
    }
}

.menu-icon {
    width: 70px;
    min-height: 60px;
    align-items: center;
    justify-content: center;
}

.page-sidebar .sidebar-menu .menu-items > li ul.dealer-sub-menu > li > a {
    display: inline-block;
    padding: 5px 0px;
    font-size: 13px;
    font-family: Arial, sans-serif;
    white-space: normal;
}

.page-sidebar .sidebar-menu .menu-items > li ul.sub-menu > li > a,
.page-sidebar .sidebar-menu .menu-items > li ul.dealer-sub-menu > li > a {
    font-family: 'Roboto', sans-serif;
}

.page-sidebar .sidebar-menu .menu-items > li ul.sub-menu > li,
.page-sidebar .sidebar-menu .menu-items > li ul.dealer-sub-menu > li {
    padding: 10px 20px 0 40px;
}

.page-sidebar .sidebar-menu .menu-items > li ul.sub-menu > li:hover,
.page-sidebar .sidebar-menu .menu-items > li ul.dealer-sub-menu > li:hover {
    background:rgba(0,165,222,.5);
}

.icon-thumbnail,
.page-sidebar .sidebar-menu .menu-items>li ul.dealer-sub-menu>li .icon-thumbnail {
    background-color: transparent;
    color: #fff;
}

.page-sidebar .sidebar-menu .menu-items > li ul.dealer-sub-menu > li .icon-thumbnail {
    width: 30px;
    height: 30px;
    line-height: 30px;
    margin: 0;
    font-size: 14px;
}

.page-sidebar .sidebar-menu .menu-items > li ul.sub-menu i,
.page-sidebar .sidebar-menu .menu-items > li ul.dealer-sub-menu i {
    color:rgba(255,255,255, .8);
    font-size: 16px !important;
}

.page-sidebar .sidebar-header,
.page-sidebar .sidebar-menu .menu-items > li ul.sub-menu,
.page-sidebar .sidebar-menu .menu-items > li ul.dealer-sub-menu {
    background-color:rgba(27,117,188,0);
    border-bottom: 1px solid var(--base-color); }

    .page-sidebar .sidebar-menu .menu-items > li ul.dealer-sub-menu {
        display: block !important;
        list-style: none;
        clear: both;
        margin: 0 0 10px 0;
        padding: 18px 0 10px 0;
    }

    .page-sidebar .sidebar-menu .menu-items>li ul.dealer-sub-menu>li {
        padding: 10px 20px 0 40px;
        background: none;
        margin-top: 1px;
    }

    .icon-thumbnail,
    .page-sidebar .sidebar-menu .menu-items > li ul.sub-menu > li .icon-thumbnail,
    .page-sidebar .sidebar-menu .menu-items > li ul.dealer-sub-menu > li .icon-thumbnail {
        background-color:transparent;
        color: white;
    }

    .sidebar-visible .menu-icon, .menu-pin .menu-icon {
        display: none !important;
    }

    .page-sidebar {
        background-color: var(--base-color);
        z-index: 1049;
    }

    .page-sidebar .sidebar-menu .menu-items > li > a {
        font-family: 'Roboto', 'Roboto', sans-serif;
        padding-left: 30px;
        font-weight: bold;
    }

    .pace .pace-progress {
        background-color: #00a5de;
    }

    .pace .pace-activity {
        display: none;
    }

    .page-sidebar a:visited,
    .page-sidebar a:focus,
    .page-sidebar button:visited,
    .page-sidebar button:focus,
    .page-sidebar a,
    .page-sidebar button {
        color: white;
    }
</style>
