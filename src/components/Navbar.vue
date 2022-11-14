/* eslint-disable */
<template>
    <div id="navbar">
        <div class="logo">

        </div>
        <div class="info">
            <div class="row">
                <div class="a_block">
                    <router-link to="/about"> ABOUT ME
                        <div class="a_div"></div>
                    </router-link>

                </div>
                <div class="a_block">
                    <router-link to="/achievements"> MY ACHIEVEMENTS
                        <div class="a_div"></div>
                    </router-link>

                </div>
                <div class="a_block">
                    <router-link to="/contacts"> CONTACT
                        <div class="a_div"></div>
                    </router-link>

                </div>

                <!-- <a href=""> MY ACHIEVEMENTS</a>
                <a href=""> CONTACT</a> -->
            </div>
        </div>



    </div>
</template>


<script>
export default {
    name: 'Navbar'
}

</script>


<style lang="scss">
#navbar {
    position: fixed;
    display: flex;
    // justify-content: end;
    width: 100vw;
    height: 3.5rem;
    // color: aqua;
}

.a_block {
    margin-top: 20px;
    transition: all 0.5s ease;
    position: relative;

}

.logo {
    margin-top: 10px;
    margin-left: 50px;
    width: 80px;
    height: 55px;
    background-image: url('@/assets/Frame\ 1.png');
}


.a_div {
    position: absolute;
    bottom: -15px;
    right: 15%;
    width: 70%;
    box-shadow: 0px 0px 5px 0px #8d24ff;
    border-radius: 4px;
    height: 2.5px;
    opacity: 0;
    transition: all 0.5s ease;
    background-color: #8d24ff;
}

.a_block:hover .a_div {
    background-color: #615a68;
    box-shadow: none;
    bottom: -7px;
    opacity: 1;
}

a.router-link-exact-active .a_div {
    bottom: -7px;
    opacity: 1;
}

.a_block:hover a.router-link-exact-active .a_div {
    background-color: #8d24ff;
    bottom: -7px;
    opacity: 1;
}

.router-link-exact-active {
    .a_div {
        position: absolute;
        right: 15%;
        width: 70%;
        box-shadow: 0px 0px 5px 0px #8d24ff;
        border-radius: 4px;
        height: 2.5px;
        bottom: -7px;
        opacity: 1;
        transition: all 0.5s ease;
        background-color: #8d24ff;
    }

    // styles here
}



.info {
    position: absolute;
    right: 0%;
    display: flex;
    justify-content: end;
}

a {
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 20px;
    color: #ffffff;
    letter-spacing: 1.5px;
    text-decoration: none;
}

.row {
    display: flex;
    flex-direction: row;
}
</style>