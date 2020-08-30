<script>
import { actions } from './store';

import Card from 'components/card';
import List from 'components/list';
import Text from 'components/text';
import Message from 'components/message';

export default {
    components: { Card, List, Text, Message },
    vuex: {
        actions: actions
    },
    created () {
        this.initData();
    }
}
</script>

<template>
<div id="app">
    <card></card>
    <div class="sidebar">
        
        <list></list>
    </div>
    <div class="main">
       
        <message></message>
        <text></text>
    </div>
</div>
</template>

<style lang="less" scoped>
#app {
    margin: 40px auto;
    width: 80%;
    height: 90%;

    overflow: hidden;
    border-radius: 3px;
    ::-webkit-scrollbar {
            width:3px;
            
        }
        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px rgba(128, 128, 128, 0);
            border-radius: 10px;
            
        }
        ::-webkit-scrollbar-thumb {
            background: #6dd47e;
            border-radius:10px ;
        }
        ::-webkit-scrollbar-thumb-hover {
            background: #b30000;
        }

    .sidebar, .main {
        height: 82.5%;
        position: relative;
    }
    .sidebar {
        float: left;
        width: 25%;
        color: #f4f4f4;
        background-color: #293250;
        overflow-y: scroll;
        
        
    }
    .main {
        position: relative;
        overflow: hidden;
        background-color: #188eb3;

        
    }
    
    .list {
        overflow-y: scroll;
    }
    .text {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }
    .message {
        height: ~'calc(100% - 40px)';
        
    }
}
</style>
