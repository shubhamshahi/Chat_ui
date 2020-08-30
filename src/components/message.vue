<script>
export default {
    vuex: {
        getters: {
            user: ({ user }) => user,
            session: ({ sessions, currentSessionId }) => sessions.find(session => session.id === currentSessionId)
        }
    },
    filters: {
        time (date) {
            if (typeof date === 'string') {
                date = new Date(date);
            }
            return date.getHours() + ':' + date.getMinutes();
        }
    },
    directives: {
        'scroll-bottom' () {
            this.vm.$nextTick(() => {
                this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight;
            });
        }
    }
};
</script>

<template>

<div class="message" v-scroll-bottom="session.messages">
    <ul v-if="session">
        <li v-for="item in session.messages">
            
            <div class="main" :class="{ self: item.self }">
                <img class="avatar" width="30" height="30" :src="item.self ? user.img : session.user.img" />
                <div class="text">{{ item.content }}</div>
                <p class="time">
                <span>{{ item.date | time }}</span>
            </p>
            </div>
            
        </li>
    </ul>
</div>
</template>

<style lang="less" scoped>
::-webkit-scrollbar {
            width:5px;
            
        }
        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px rgba(128, 128, 128, 0);
            border-radius: 10px;
            
        }
        ::-webkit-scrollbar-thumb {
            background: #293250;
            border-radius:10px ;
        }
        ::-webkit-scrollbar-thumb-hover {
            background: #b30000;
        }
.message {
    padding: 10px 15px;
    position: static;
    overflow-y: scroll;

    

    li {
        margin-bottom: 15px;
    }
    .time {
        margin: 0px 0;
        text-align: left ;

        > span {
            display: inline-block;
            padding: 0 40px;
            font-size: 12px;
            color: #293250;
            border-radius: 2px;
        }
    }
    .avatar {
        float: left;
        margin: 0 10px 0 0;
        border-radius: 100px;
    }
    .text {
        display: inline-block;
        position: relative;
        padding: 0 10px;
        max-width: ~'calc(75% - 40px)';
        min-height: 30px;
        line-height: 2.5;
        font-size: 14px;
        text-align: left;
        word-break: break-all;
        font-weight:bold;
        background-color: #293250;
        color: #6dd47e;
        border-radius: 4px;

        &:before {
            content: " ";
            position: absolute;
            top: 9px;
            right: 100%;
            border: 6px solid transparent;
            border-right-color: #293250;
        }
    }

    .self {
        text-align: right;

        .time {
        text-align: right ;
    }

        
        .avatar {
            float: right;
            margin: 0 0 0 10px;
        }
        .text {
            background-color: #6dd47e;
            color:#293520;
            font-weight: bold;

            &:before {
                right: inherit;
                left: 100%;
                border-right-color: transparent;
                border-left-color: #6dd47e;
            }
        }
        
    }
}
</style>