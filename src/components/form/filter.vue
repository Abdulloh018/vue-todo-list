<template>
  <div class="search-block">
    <span class="search-block__title">~ Search todo ~</span>
    <div class="search-block__btn-types">
      <div class="filter__item" data-sort-by="all">
        <input type="radio" class="filter-radio" name="sort" id="1" />
        <label for="1" class="filter-label">All</label>
      </div>
      <div class="filter__item" data-sort-by="completed">
        <input type="radio" class="filter-radio" name="sort" id="2"/>
        <label for="2" class="filter-label">Completed</label>
      </div>
      <div class="filter__item" data-sort-by="active">
        <input type="radio" class="filter-radio" name="sort" id="3"/>
        <label for="3" class="filter-label">Active</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'todoFilter'
}
</script>
<style scoped>
  
.search {
  width: 110px;
  background: rgb(18, 131, 18);
  display: block;
  margin: 20px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
}

.search-block {
  position: relative;
  background: rgb(77, 197, 77);
  padding: 25px;
  border-radius: 15px;
  width: 90%;
  margin: 25px auto;
}
.search-block {
  display: block;
  margin-bottom: 15px;
  text-align: center;
  font-size: 22px;
}
.search-block__btn-types {
  width: 100%;
  padding: 15px 0 0 0;
  display: flex;
  justify-content: center;
  gap: 15px;
}
.filter__item {
  position: relative;
}
.filter-radio {
  width: 20px;
  position: absolute;
  top: 8px;
  left: 5px;
  cursor: pointer;
}
.filter-label {
  font-family: 'Abel';
  font-weight: 700;
  background: #fe7345;
  padding: 5px 7px 7px 25px;
  border-radius: 10px;
  cursor: pointer;
}

</style>