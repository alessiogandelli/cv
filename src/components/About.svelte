<h2>ABOUT ME</h2>
<div class="my-info">
    <p><span class="info-name">Name:</span>Alessio Gandelli</p>
    <p><span class="info-name">From:</span>Italy</p>
    <p><span class="info-name">Now in:</span>Brescia (it) </p>
</div>
<div class="about">
    <div class="picture"></div>
    
    <p>
        I'm the co-founder of <a class = 'orange-text' href="https://www.studybuddy.it" target="_blank">StudyBuddy</a>   
        <br><br> Studybuddy is a all in one productivity platform that help university students with time management and productivity, in order to achieve more in less time and mantain an healthy lifestyle during academic years. <br>

        <br><br>
        I recently graduated in Data Science with a <a href='https://github.com/alessiogandelli/master-thesis/blob/main/AlessioGandelliThesisFinal.pdf' class= 'orange-text' target='_blank'> thesis </a> where I mixed topic modeling and multilayer network to study political polarization in the climate discussion. 
        <br>
    </p>
</div>
<div class="urls">
    <a href="https://www.github.com/alessiogandelli/"      aria-label="GitHub"   class="themed-icon" target="_blank"><Github   size='48' /> </a>
    <a href="https://www.linkedin.com/in/alessiogandelli/" aria-label="LinkedIn" class="themed-icon" target="_blank"><Linkedin size='48' /> </a>
    <a href="mailto:me@gandelli.dev"             aria-label="Email"    class="themed-icon" target="_blank"><Email    size='48' /> </a>
    <a href="https://www.t.me/d8eea/"            aria-label="Telegram" class="themed-icon" target="_blank"><Telegram size='48' /> </a>
</div>
<div class="download-as-pdf">
    <a href="./files/alessiogandelli_cv.pdf" target="_blank">
        <p>Download resume as PDF</p><PdfBox size='32' />
    </a>
</div>


<script lang="ts">
    import Github from "svelte-material-icons/Github.svelte";
    import Linkedin from "svelte-material-icons/Linkedin.svelte";
    import Email from "svelte-material-icons/Email.svelte";
    import Telegram from "svelte-material-icons/Telegram.svelte";
    import PdfBox from "svelte-material-icons/PdfBox.svelte";

    const age = Math.floor( (new Date().getTime() - new Date(1999, 9, 13).getTime()) / 3.15576e+10 );
</script>


<style lang="less">
    .orange-text {
    color: orange;
    
    }   
    .my-info {
        width: fit-content;
        margin: auto;
        display: grid;
        column-gap: 3em;
        grid-template-columns: 1fr 1fr;
        padding: 1.5em .5em;
        @media only screen and (max-width: 750px) {
            grid-template-columns: 1fr;
        }
    }
    .about {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 800px) {
            grid-template-columns: auto;
            align-items: center;
            justify-items: center;
        }
        .picture {
            width: 120px;
            height: 120px;
            background-image: url(../images/propic.jpeg);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 50%;
            margin: 1em;
            border: 4px solid var(--theme);
        }
    }

    .urls {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 0 auto 1em;
        padding: 0.5em 3em 0;
        border-top: 1px solid var(--theme);
        width: fit-content;

        a {
            padding: .5em 1em;
        }
    }
    p {
        margin: 0.3em 1em;
        font-size: 1.3em;
        .info-name {
            width: 90px;
            display: inline-block;
            color: var(--theme);
        }
    }

    .download-as-pdf {
        display: flex;
        justify-content: center;
        a {
            display: inline-block;
            text-transform: uppercase;
            font-size: 1em;
            padding: 0.5em 2em;
            border-radius: 5px;
            display: flex;
            align-items: center;
            background-color: var(--theme);
            color: var(--color-bg);

            p {
                margin: 0;
                margin-right: 1em;
            }
            &:hover {
                text-decoration: none;
                background-color: var(--theme-select);
            }
        }
    }
</style>