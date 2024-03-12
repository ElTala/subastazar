<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      blue
    >
      <div class="d-flex align-center">
        <v-img
          alt="Judio Logo"
          class="shrink mr-2"
          contain
          src="https://upload.wikimedia.org/wikipedia/commons/7/74/URRS.png"
          transition="scale-transition"
          width="100"
        />

        <v-img
          alt="Subastazar logo"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="./assets/Subastazar.png"
          width="300"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://www.google.com/maps/place/Tacos+del+Ferrocarril+de+borrego/@32.6428362,-115.4687195,182m/data=!3m1!1e3!4m6!3m5!1s0x80d770775abbb5d1:0xb6e32a2a74f6863c!8m2!3d32.6442861!4d-115.4681874!16s%2Fg%2F11bxfyrwk7?entry=ttu"
        target="_blank"
        text
      >
        <span class="mr-2">Bazar</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
