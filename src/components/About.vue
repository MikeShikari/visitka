<template>
    <div class="container">
        <div class="main_form">
            <h1>Who am I?</h1>
            <div class="all_forms">
                <div class="info_block1">
                    <h2>Soft skills:</h2>
                    <ul class="a">
                        <li>Fast-learner</li>
                        <li>Confident</li>
                        <li>Leader</li>
                        <li>Responcibile</li>
                        <li>Open-minded</li>
                        <li>Creative</li>
                        <li>Organized</li>
                        <li>Detail oriented</li>
                        <li>Keen on automation and robust procceses</li>
                        <li>Communicable</li>
                        <li>Planning</li>
                        <li>Problem solving</li>
                        <li>Stress resistant</li>
                        <li>Self-taught</li>
                    </ul>
                </div>
                <div class="info_block2">
                    <h2>Hard skills:</h2>
                    <ul class="a">
                        <li>Senior Automation QA with Playwright/Cypress/Selenium(Python)</li>
                        <li>E2E tests</li>
                        <li>API tests</li>
                        <li>Git</li>
                        <li>Sublime Merge</li>
                        <li>Knowledge of basic Linux commands and structure (systemd commands, ssh connection, repo
                            commands)</li>
                        <li>Load tests with Locust</li>
                        <li>Middle Python developer</li>
                        <li>Middle JavaScript developer</li>
                        <li>SQL Querries</li>
                        <li>Middle Vue3 developer</li>
                        <li>Junior Web-designer</li>
                        <li>English language level B2</li>

                    </ul>
                </div>
                <div class="info_block3">
                    <h2>Experienced with:</h2>
                    <ul class="a">
                        <li>Playwright</li>
                        <li>Cypress</li>
                        <li>Locust</li>
                        <li>Selenium(Python)</li>
                        <li>GitLab</li>
                        <li>GitHub</li>
                        <li>Vue3</li>
                        <li>Django4</li>
                        <li>Socket.io</li>
                        <li>ZeroMQ</li>
                        <li>PostgreSQL</li>
                        <li>RESTful API</li>
                        <li>ChartJS</li>
                        <li>YouTrack</li>
                        <li>Jira</li>
                        <li>Jenkins</li>
                        <li>SCSS</li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
</template>


<script>
export default {
    name: 'about',


}
</script>

<style>
h1 {
    color: #00c4ff;
    font-size: 40px;
    letter-spacing: 3px;
}

h2 {
    color: #8d24ff;
    letter-spacing: 2px;
}

ul.a {
    list-style-type: disc;
    text-align: left;

}

li {
    font-size: 18px;
    margin-top: 7px;
    margin-bottom: 7px;
    letter-spacing: 1.5px;
}

.main_form {
    border-radius: 8px;
    background-color: none;
    height: 80vh;
    width: 90vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    /* position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%); */
}

.all_forms {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 70vh;
    /* transition: 1s ease-out 0s 1 slideInFromLeft; */
    width: 90vw;
}

@keyframes fadeInAnimation1 {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fadeInAnimation2 {
    0% {
        opacity: 0;
    }

    10% {
        opacity: 0
    }

    20% {
        opacity: 0
    }

    100% {
        opacity: 1;
    }
}

@keyframes fadeInAnimation3 {
    0% {
        opacity: 0;
    }

    10% {
        opacity: 0
    }

    20% {
        opacity: 0
    }

    30% {
        opacity: 0
    }

    40% {
        opacity: 0
    }

    100% {
        opacity: 1;
    }
}

.info_block1 {
    border-radius: 15px;
    background-color: #ffffff;
    height: 100%;
    width: 25%;
    /* transition: 1s ease-out 0s 1 slideInFromLeft; */
    animation: fadeInAnimation1 ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    margin: auto;
    display: flex;
    flex-direction: column;
}

.info_block2 {
    border-radius: 15px;
    background-color: #ffffff;
    height: 100%;
    width: 25%;
    /* transition: 1s ease-out 0s 1 slideInFromLeft; */
    animation: fadeInAnimation2 ease 3s;
    /* animation-delay: 2s; */
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    margin: auto;
    display: flex;
    flex-direction: column;
}

.info_block3 {
    border-radius: 15px;
    background-color: #ffffff;
    height: 100%;
    width: 25%;
    /* transition: 1s ease-out 0s 1 slideInFromLeft; */
    animation: fadeInAnimation3 ease 3s;
    animation-iteration-count: 1;
    /* animation-delay: 4s; */
    animation-fill-mode: forwards;
    margin: auto;
    display: flex;
    flex-direction: column;
}

.container {
    height: 100vh;
    display: flex;
    justify-content: center;
}
</style>