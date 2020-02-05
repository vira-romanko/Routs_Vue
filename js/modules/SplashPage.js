export default {

    template:
    `<section>
    <h1>{{message}}</h1>
    <button @click="registerUser"> Register for Awesome Swag!</button>
    </section>`,

    data: function() {
        return {
            message: "Welcome to my Awesome App! " 
        }

    },

    methods: {
        registerUser(){
            console.log('clicked resgister button');
        }
    }
}