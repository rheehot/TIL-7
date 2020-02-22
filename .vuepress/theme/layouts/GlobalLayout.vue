<template>
    <div id="global-layout">
        <component :is="$page.path ? 'Layout' : 'NotFound'" />
        <Comment />
        <footer class="siteFooter">
            &copy; 개발자가 되고 싶은 은영이
        </footer>
    </div>
</template>