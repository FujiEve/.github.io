const MySidebar = {
  props: ["items", "current", "apiMenuItems"],
  template: `
    <aside class="main-sidebar">
        <div class="sidebar-section">
            <h2 class="category-title">Documents</h2>
            <ul>
                <li v-for="item in items"
                    :key="item" 
                    :class="{ active: item === current }"
                    @click="$emit('change-page', item)">
                    {{ item }}
                </li>
            </ul>
        </div>

        <div class="sidebar-section">
            <h2 class="category-title">API Reference</h2>
            <ul>
                <li v-for="api in apiMenuItems"
                    :key="api" 
                    :class="{ active: currentPage === api.id }"
                    @click="$emit('update-page', api)">
                    {{ api }}
                </li>
            </ul>
            {{ apiMenuItems }}
        </div>
    </aside>
    `,
};
