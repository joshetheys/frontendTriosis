<template>
  <div class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="bi bi-card-list"></i></div>

    <div class="offcanvas offcanvas-start offcanvas-show" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style="z-index: 4; background-color: black">
  
  <div class="offcanvas-body" style="padding-top: 5rem">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>

</template>

<script>
export default {
    name: 'Navbar',
    
}
</script>

<style scoped>
section{
    padding: 0;
}

#sideNav{
    
    color: red;
    z-index: 2;
    
}

#products{
    padding: 0;
}

a{
    color: white;
    text-decoration: none;
}
.btn{
    display: flex;
    justify-content: flex-start;
}

</style>