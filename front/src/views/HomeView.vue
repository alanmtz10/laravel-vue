<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="login">
                            <div class="row mb-3">
                                <div class="col-12">
                                    <label for="email" class="form-label d-block text-start">
                                        Correo:
                                    </label>
                                    <input type="text" id="email" name="email" class="form-control" required
                                           v-model="email">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-12">
                                    <label for="password" class="form-label d-block text-start">
                                        Contraseña:
                                    </label>
                                    <input type="text" id="password" name="password" class="form-control" minlength="8"
                                           required
                                           v-model="password">
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-success">
                                        Iniciar sesión
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {authenticatedUser, login} from "@/api/auth";
import {mapActions} from "vuex";

export default {
    name: 'HomeView',
    data() {
        return {
            email: 'alanmtz1009@hotmail.com',
            password: 'password'
        }
    },
    methods: {
        async login() {
            const responseLogin = await login({
                email: this.email,
                password: this.password
            });

            if (responseLogin != null && responseLogin.status === 204) {
                const responseUser = await authenticatedUser();

                if (responseUser != null && responseUser.status === 200 && Object.keys(responseUser.data).length !== 0) {
                    this.setAuthUserAction(responseUser.data);
                }
            }
        },
        ...mapActions(['setAuthUserAction'])
    }
}
</script>
