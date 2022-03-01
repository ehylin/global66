<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="home text-center">
                    <img :src="require('../assets/pica.jpeg')" alt="imagen">
                    <h1>Welcome to Pokédex</h1>
                    <p>The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
                     <router-link class="btn btn-danger text-center" to="/listapokemones">Get started</router-link>
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>