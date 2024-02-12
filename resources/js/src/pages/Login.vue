<template>
    <div class="login">
        <h2 class="title-h2 login--title">Авторизация</h2>
        <form class="form" method="POST">
            <div class="form-box form-box--add">
                <span class="form-box__caption">Логин</span>
                <input class="form-box__input-text" type="text" name="name">
            </div>
            <div class="form-box form-box--add">
                <span class="form-box__caption">Пароль</span>
                <input class="form-box__input-password" type="password" name="password">
            </div>
            <button class="form__button" id="btn_login" @click.prevent="this.login()">Войти</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Login",
    methods: {
        login() {
            const form = document.querySelector('form.form')
            axios.post('api/login', {
                'name': form.querySelector('input[name="name"]').value,
                'password': form.querySelector('input[name="password"]').value,
            }).then(() => {
                window.location.href = '/admin'
            })
        }
    },
}
</script>

<style lang="sass">
    .login--title,
    .feedback--title
        margin-bottom: 20px
</style>
