<template>
    <div class="logo-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
        <div class="logo">MOVIE</div>
    </div>

</template>
<style scoped>
    .logo-wrapper {
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between
    }
    .logo {
        color: #0c8599;
        font-weight: 800;
        font-size: 1.5rem;
    }
    .icon {
        color: #0c8599;
        max-width: 1.5rem;
        max-height: 1.5rem;
    }
</style>