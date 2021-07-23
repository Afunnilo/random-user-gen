const app = Vue.createApp({
    data() {
        return {
            firstName: 'Bruce',
            lastName: 'Wayne',
            email : 'iamnotbatman@gotham.com',
            username :'notbatman',
            gender: 'male',
            picture: 'https://i.pinimg.com/originals/bb/d3/f1/bbd3f101733f1a7d8bdc9c6b5aed7776.png'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.username = results[0].login.username
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large

        },
    },
})

app.mount('#app')