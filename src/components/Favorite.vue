<template>
<div class="">
  <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        {{favoritesSelect.name}}
        <span class="badge start">
            <i class="fas fa-star"></i>
        </span>
      </li>
    </ul>
</div>
</template>

<script>
export default {
props: ["favoritesSelect", ],
}
</script>

<style scoped>
.start i{
    font-size: 31px;
    color: #ECA539;
}
</style>
