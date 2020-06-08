<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="danger">
    <b-navbar-brand to="/">Ini website?</b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item to="/gallery">Galer(y)</b-nav-item>
        <b-nav-item to="/wishes">Wishes</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">Skratta du</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
  </b-navbar>
</div>
</template>