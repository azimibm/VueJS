const app = Vue.createApp({
    //template: '<h1>Hello {{firstName}}</h1>',
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://www.w3schools.com/html/img_girl.jpg'
        } 
    }, 
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            console.log(results)

            this.firstName = results[0].lastName
            this.lastName = results[0].email
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
            /*
            this.firstName = 'Sam'
            this.lastName = 'Smith'
            this.email = 'sam@gmail.com'
            this.gender = 'female'
            this.picture = 'https://www.w3schools.com/html/pic_trulli.jpg'
            //console.log(this.firstName)
            */
        },
    },
})

app.mount('#app')