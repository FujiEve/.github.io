const MySidebar = {
  props: ["items", "current"],
  emits: ["change-page"],
  template: `
  <aside class="main-sidebar">
      <ul class="nav-list">
          <li v-for="item in items" 
              :key="item"
              class="nav-item"
              :class="{ active: item === current }"
              @click="$emit('change-page', item)">
              {{ item }}
          </li>
      </ul>
  </aside>
  `,
};
