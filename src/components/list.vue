<script>
import { actions } from '../store';

export default {
    vuex: {
        actions: actions,
        getters: {
            sessions: ({ sessions, filterKey }) => {
                let result = sessions.filter(session => session.user.name.includes(filterKey));
                return result;
            },
            currentId: ({ currentSessionId }) => currentSessionId
        }
    }
};
</script>

<template>
<div class="list">
    <ul>
        <li v-for="item in sessions" :class="{ active: item.id === currentId }" @click="selectSession(item.id)">
            <img class="avatar"  width="30" height="30" :alt="item.user.name" :src="item.user.img">
            <p class="name">{{item.user.name}}</p>
        </li>
    </ul>
</div>
</template>

<style scoped lang="less">

::-webkit-scrollbar {
            width:5px;
        }
        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px #ffd55a;
            border-radius: 10px;
            
        }
        ::-webkit-scrollbar-thumb {
            background: #6dd47e;
            border-radius:10px ;
        }
        ::-webkit-scrollbar-thumb-hover {
            background: #b30000;
        }
.list {
    
    li {
        padding: 15px 15px;
        border-bottom: 1px solid #6dd47e;
        cursor: pointer;
        transition: background-color .7s;

        &:hover {
            background-color: #6dd47e;
        }
        &.active {
            background-color: #188eb3;
            .name {
        color: #293250;
    }
        }
    }
    .avatar, .name {
        vertical-align: middle;
    }
    .avatar {
        border-radius: 2px;
    }
    .name {
        display: inline-block;
        margin: 0 0 0 15px;
    }
}
</style>