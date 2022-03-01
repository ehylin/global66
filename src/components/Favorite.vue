<template>
  <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        {{favoritesSelect.name}}
        <span class="badge bg-primary rounded-pill">
            <i class="fas fa-star"></i>
        </span>
      </li>
    </ul>
</template>

<script>
export default {
props: ["favoritesSelect", ],
}
</script>
