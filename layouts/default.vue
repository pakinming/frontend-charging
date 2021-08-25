<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon>mdi-credit-card-settings-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="'Card'" />
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(item, index) in cardItem"
            :key="index"
            :to="item.to"
          >
            <v-list-item-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <template>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </template>
        </v-list-item>

        <!-- <v-list-item>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item> -->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-account-multiple',
          title: 'Member',
          to: '/member',
        },
        {
          icon: 'mdi-cash-multiple',
          title: 'Cash',
          to: '/cash',
        },
        {
          icon: 'mdi-monitor-eye',
          title: 'Monitor',
          to: '/monitor',
        },
        {
          icon: 'mdi-chat-alert',
          title: 'About',
          to: '/about',
        },
        {
          icon: 'mdi-account',
          title: 'Login',
          to: '/login',
        },
      ],
      cardItem: [
        {
          icon: 'mdi-plus-circle',
          title: 'Add',
          to: '/cardAdd',
        },
        {
          icon: 'mdi-card-search-outline',
          title: 'Find',
          to: '/cardFind',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Jinpao Charger',
    }
  },
}
</script>
