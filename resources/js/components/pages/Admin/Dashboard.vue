<template>
    <div class="container">
        <div class="card card-default">
            <div class="card-header">Admin Dashboard</div>
            <div class="card-body">
                Bienvenue sur votre dashboard administrateur
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    created() {
      window.app.reloader_pane = false
      window.app.content_header = "Dashboard";
    }
  }
</script>