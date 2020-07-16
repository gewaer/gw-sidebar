<template>
  <div class="menu-item-group">
    <a
        href="#"
        class="row no-gutters align-items-center justify-content-between py-3 px-4 toggle"
        target="_blank"
        :class="{ active: isActive }"
        @click.prevent="toggleActive"
    >
        <span class="col resource-name">
            {{ label }}
        </span>
        <span class="icon-thumbnail col-auto">
            <i class="fas" :class="`${arrowIcon}`" />
        </span>
    </a>

    <div
      class="menu-item-group__childs"
      :class="{ 'my-collapse': isActive, 'custom-accordion': true }"
    >
      <el-collapse-transition>
        <div class="child-container" v-show="isActive">
          <template v-for="(resource, index) in childs">
              <side-item :resource="resource"  v-if="!resource[childName]|| resource[childName].length" :key="`resource-${label}-${index}`">

              </side-item>
          </template>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
import SideItem from "./item";

export default {
  props: {
      label: {
          type: String,
          required: true
      },
      childs: {
        type: Array,
        default() {
          return []
        }
      },
      childName: {
        type: String, 
        default: "links"
      }
  },
  components: {
    SideItem
  },
  data() {
    return {
      active: true
    };
  },
  filters: {
      firstLetter(value) {
          return value.charAt(0);
      }
  },
  computed: {
    arrowIcon() {
      return this.active ? "fa-chevron-down" : "fa-chevron-right";
    },
    isActive() {
      return this.active;
    }
  },
  methods: {
    toggleActive() {
      this.active = !this.active;
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
.custom-accordion {
  animation: open 0.3s;
  overflow: hidden;
}

.custom-accordion.my-collapse {
  animation: open 0.3s reverse;
}

@keyframes open {
  0% {
    height: 0;
  }
  50% {
    height: 50%;
  }
  100% {
    max-height: auto;
  }
}
</style>
