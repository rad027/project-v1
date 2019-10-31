<template>
    <div class="container-fluid">
        <div class="buttonsko">
            <a class="btn btn-app rounded-0 bg-success">
                <i class="fas fa-plus"></i> Add New
            </a>            
        </div>
    </div>
</template>

<script>
    export default {
        created(){
            window.app.reloader_pane = false
            window.app.content_header = "Customers";
        }
    }
</script>