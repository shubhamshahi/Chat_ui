<script>
import { actions } from '../store';

export default {
    vuex: {
        actions: actions
    },
    data () {
        return {
            content: ''
        };
    },
    methods: {
        onKeyup (e) {
            if (e.keyCode === 13 && this.content.length) {
                
                this.sendMessage(this.content);
                
                this.content = '';
            }
            
        }
    }
};
</script>

<template>
<div class="text">
    <textarea placeholder="Type a message" v-model="content" @keyup="onKeyup"></textarea>
</div>
</template>

<style lang="less" scoped>
.text {
    height: 40px;
    
    border: solid 1px #293250;
    

    textarea {
        padding: 10px;
        height: 100%;
        width: 100%;
        border: none;
        outline: none;
        font-family: Arial, Helvetica, sans-serif;
        resize: none;
        background-color: rgb(226, 213, 213);
        
    }
}
</style>