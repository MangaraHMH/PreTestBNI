<script>
export default {
  name: 'SideBar'
}
</script>

<template>
  <nav class="d-md-block bg-light sidebar collapse" id="sidebar-menu">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <img src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png" alt="" width="125">
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  padding: 70px 10px 10px 10px;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}
</style>
