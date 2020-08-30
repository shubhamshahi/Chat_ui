
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
    state: {
        user: {
            name: 'Zomentum',
            img: 'https://api.adorable.io/avatars/1'
        },
        sessions: [
            {
                id:0,
                user: {
                    name: 'Welcome',
                    img: 'https://api.adorable.io/avatars/59'
                },
                messages: [
                    {
                        content: 'Hey Zomentum! Welcome!',
                        date: now
                    },
                    {
                        content: 'You may start chatting! Just type your message and press Enter!',
                        date: now
                    },
                    {
                        content: 'Happy Chatting!',
                        date: now
                    }
                ]
            },
            {
                id: 1,
                user: {
                    name: 'Shubham Shahi',
                    img: 'https://api.adorable.io/avatars/5'
                },
                messages: [
                    {
                        content: 'Hey Zomentum! How are You? Hope everything is great!',
                        date: now
                    }, {
                        content: 'See You Soon!',
                        date: now
                    }
                ]
            },
            {
                id: 2,
                user: {
                    name: 'Prashant',
                    img: 'https://api.adorable.io/avatars/3'
                },
                messages: []
            },
            {
                id: 3,
                user: {
                    name: 'Khushi',
                    img: 'https://api.adorable.io/avatars/50'
                },
                messages: []
            },
            {
                id: 4,
                user: {
                    name: 'Anika',
                    img: 'https://api.adorable.io/avatars/7'
                },
                messages: []
            },
            {
                id: 5,
                user: {
                    name: 'Kimaya',
                    img: 'https://api.adorable.io/avatars/51'
                },
                messages: []
            },
            {
                id: 6,
                user: {
                    name: 'Krisha',
                    img: 'https://api.adorable.io/avatars/9'
                },
                messages: []
            },
            {
                id: 7,
                user: {
                    name: 'Mayra',
                    img: 'https://api.adorable.io/avatars/10'
                },
                messages: []
            },
            {
                id: 8,
                user: {
                    name: 'Prince',
                    img: 'https://api.adorable.io/avatars/11'
                },
                messages: []
            },
            {
                id: 9,
                user: {
                    name: 'Payal',
                    img: 'https://api.adorable.io/avatars/12'
                },
                messages: []
            },
            {
                id: 10,
                user: {
                    name: 'Pulkit',
                    img: 'https://api.adorable.io/avatars/13'
                },
                messages: []
            },
            {
                id: 11,
                user: {
                    name: 'Harendra',
                    img: 'https://api.adorable.io/avatars/14'
                },
                messages: []
            },
            {
                id: 12,
                user: {
                    name: 'Neeti',
                    img: 'https://api.adorable.io/avatars/15'
                },
                messages: []
            },
            {
                id: 13,
                user: {
                    name: 'Kavya',
                    img: 'https://api.adorable.io/avatars/16'
                },
                messages: []
            },
            {
                id: 14,
                user: {
                    name: 'Latika',
                    img: 'https://api.adorable.io/avatars/17'
                },
                messages: []
            },
            {
                id: 15,
                user: {
                    name: 'Nayan',
                    img: 'https://api.adorable.io/avatars/18'
                },
                messages: []
            },
            {
                id: 16,
                user: {
                    name: 'Nahiya',
                    img: 'https://api.adorable.io/avatars/19'
                },
                messages: []
            },
            {
                id: 17,
                user: {
                    name: 'Ayush',
                    img: 'https://api.adorable.io/avatars/20'
                },
                messages: []
            },
            {
                id: 18,
                user: {
                    name: 'Shivam',
                    img: 'https://api.adorable.io/avatars/21'
                },
                messages: []
            },
            {
                id: 19,
                user: {
                    name: 'Zakir',
                    img: 'https://api.adorable.io/avatars/22'
                },
                messages: []
            },
            {
                id: 20,
                user: {
                    name: 'Khyati',
                    img: 'https://api.adorable.io/avatars/23'
                },
                messages: []
            }
        ],
        currentSessionId: 0,
        filterKey: ''
    },
    mutations: {
        INIT_DATA (state) {
            let data = localStorage.getItem('vue-chat-session');
            if (data) {
                state.sessions = JSON.parse(data);
            }
        },
        SEND_MESSAGE ({ sessions, currentSessionId }, content) {
            let session = sessions.find(item => item.id === currentSessionId);
            session.messages.push({
                content: content,
                date: new Date(),
                self: true
            });
        },
        SELECT_SESSION (state, id) {
            state.currentSessionId = id;
        } ,
        SET_FILTER_KEY (state, value) {
            state.filterKey = value;
        }
    }
});

store.watch(
    (state) => state.sessions,
    (val) => {
        console.log('CHANGE: ', val);
        localStorage.setItem('vue-chat-session', JSON.stringify(val));
    },
    {
        deep: true
    }
);

export default store;
export const actions = {
    initData: ({ dispatch }) => dispatch('INIT_DATA'),
    sendMessage: ({ dispatch }, content) => dispatch('SEND_MESSAGE', content),
    selectSession: ({ dispatch }, id) => dispatch('SELECT_SESSION', id),
    search: ({ dispatch }, value) => dispatch('SET_FILTER_KEY', value)
};
