<script>
import { actions } from '../store';

export default {
    vuex: {
        actions: actions,
        getters: {
            user: ({ user }) => user,
            filterKey: ({ filterKey }) => filterKey
        }
    },
    methods: {
        onKeyup (e) {
            this.search(e.target.value);
        }
    }
};
</script>

<template>
<div class="card">
    <header>
        <img class="avatar" width="40" height="40" :alt="user.name" :src="user.img">
        <p class="name">{{user.name}}</p>
    </header>
    <footer>
        <input class="search" type="text" placeholder="search user..." @keyup="onKeyup | debounce 150">
    </footer>
</div>
</template>

<style scoped lang="less">
.card {
    padding: 15px;
    border-bottom: solid 1px #295038;
    background-color: #293250;

    footer {
        margin-top: 15px;
    }

    .avatar, .name {
        vertical-align: middle;
    }
    .avatar {
        border-radius: 100px;
    }
    .name {
        color: #03fdfc;
        display: inline-block;
        margin: 0 0 0 15px;
        font-size: 20px;
    }
    .search {
        padding: 0 10px;
        width: 23%;
        font-size: 12px;
        color: #6dd47e;
        height: 30px;
        line-height: 30px;
        border: solid 1px #6dd47e;
        border-radius: 4px;
        outline: none;
        background-color: #293250;
    }
}
</style>