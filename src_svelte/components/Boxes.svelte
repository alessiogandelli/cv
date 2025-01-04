<h2>{ titles[type] }</h2>
<div class="boxes">
    {#each boxes as b}
    <div class="{b.flipped ? 'box flipped' : 'box'}">
        <div class="box-img">
            { #if b.img }
            <img loading="lazy" src="{ b.img }" alt="">
            { /if }
        </div>
        <div class="box-title">
            <h3>
                { b.title }
            </h3>
            { #if b.subtitles }{#each b.subtitles as s}
                <div class="subtitle">
                    { #if s.flag } <img loading="lazy" src="./images/flags/{s.flag.toLowerCase()}.svg" alt="flag" class="flag" width="640" height="480"/> { /if }
                    <h4> 
                        { #if s.url }<a class="box-url" target="_blank" href="{s.url}">{ s.name }</a>{ :else }{ s.name }{ /if }{ s.text }
                    </h4>
                </div>
                { /each }{ /if }
        </div>
        <div class="box-description">
            <p>{@html b.description }</p>
            { #if b.more }
                { #if b.showMore } <p class="more">{@html b.more }</p> { /if }
                <p class="show-more" on:click={ () => { b.showMore = !b.showMore} }>{b.showMore ? 'Show less' : 'Show more'}</p>
            { /if }
            <span class="fi fi-gr"></span> <span class="fi fi-gr fis"></span>

        </div>
    </div>
    {/each}
</div>

<script lang="ts">
    import { It, Se, De, Es} from "svelte-flag-icons";
    export let type: string;

    const flagsComp = { It, Se, De, Es }

    type Box = {
        img?: string,
        title: string,
        subtitles?: { flag?: string, text: string, name: string, url?: string }[],
        description: string,
        more?: string,
        showMore?: boolean,
        flipped?: boolean
    };

    const titles = {
        Education: 'Education',
        Experience: 'Work Experiences',
        Projects: 'Other Experiences'
    };

    const infos: { [id: string]: Box[] } = {
        Education: [
            {
                img: "./images/unitn.png",
                title: " Master's in Data Science",
                subtitles: [
                    { flag: "It", name: "University of Trento", text: ", Trento, Italy | September 2021 - October 2023", url: "https://www.unitn.it/" },
                ],
                description: "\
                I attended a multidisciplinar Master's degree in Trento in Data Science, with a minor in Sociology.\
                 ",
                showMore: false,
                more: "The complete list of courses I have taken:\
                <ul>\
                <li>Big Data Technologies</li>\
                <li>Data Mining</li>\
                <li>Data visualization</li>\
                <li>Foundations of Social and Psychological Science</li>\
                <li>Information, Knowledge and Service Management</li>\
                <li>introduction to Machine Learning</li>\
                <li>Law and Data</li>\
                <li>Professional English for Data Science</li>\
                <li>Statistical Learning</li>\
                <li>Statistical Methods</li>\
                <li>Advanced social network analysisy</li>\
                <li>Digital social data</li>\
                <li>Geospatial analysis and representation for data science</li>\
                <li>Innovation and Entrepreneurship Basic</li>\
                <li>Social Dynamics Lab</li>\
                </ul>\
                <br />\
                internship:\
                <ul>\
                <li> Research activity at Uppsala Universitet</li>\
                </ul>\
                "
            },
            {
                img: "./images/unitn.png",
                title: "Bachelor's in Computer Science",
                subtitles: [
                    { flag: 'It', name: "University of Trento", text: ", Trento, Italy | September 2018 - July 2021", url: "https://www.unitn.it/" }
                ],
                description: "\
                I have taken courses in Software Engineering, Data Structures, Algorithms, Programming and Mathematics.\
                I graduated in July 2021.",
                showMore: false,
                more: "The complete list of courses I have taken:\
                <ul>\
                <li>Algorithms and Data Structures</li>\
                <li>Computer Programming 1</li>\
                <li>Programming Languages</li>\
                <li>Software Engineering 1 & 2</li>\
                <li>Formal Languages and Compilers</li>\
                <li>Geometry and Linear Algebra</li>\
                <li>Calculus 1</li>\
                <li>Probability and Statistics</li>\
                <li>Mathematical Foundations of Computer Science</li>\
                <li>Physics</li>\
                <li>Operating Systems</li>\
                <li>Logic</li>\
                <li>Databases</li>\
                <li>Networks</li>\
                <li>Computer Architectures</li>\
                <li>Human-Computer Interaction</li>\
                <li>Introduction to Computer and Network Security</li>\
                <li>Introduction to Web Programming</li>\
                <li>Social psychology</li>\
                <li>Introduction to Machine Learning</li>\
                </ul>\
                "
            },
        ],
        Experience: [
            {
                flipped: true,
                img: "./images/studybuddy.png",
                title: "Co-Founder",
                subtitles: [
                    { flag: 'IT', name: "StudyBuddy", text: ", Brescia, Italy | January 2023 - current", url: "https://studybuddy.it/" }
                ],
                description: "StudyBuddy is a platform that allows university students to plan and organize their study."

            },{
                flipped: true,
                img: "./images/uu.png",
                title: "Visiting Researcher",
                subtitles: [
                    { flag: 'SE', name: "Uppsala Universitet", text: ", Uppsala, Sweden | April - June 2024", url: "https://uuinfolab.github.io/" }
                ],
                description: "During my visit at the Infolab at Uppsala University, I conducted research on polarization in social media, focusing on climate change discussions during the COP conferences on Twitter. I developed a method to study polarization at the level of individual topics using topic modeling and multi-layer networks, identifying the most polarized topics and analyzing their evolution over time                       "

            },
            {
                flipped: true,
                img: "./images/uu.png",
                title: "Data Science Internship",
                subtitles: [
                    { flag: 'SE', name: "Uppsala Universitet", text: ", Uppsala, Sweden | March - June 2023", url: "https://uuinfolab.github.io/" }
                ],
                description: "Created a Python library that performs topic modeling on tweets and builds a multi-layer network with each layer corresponding to a distinct topic.                      "

            },
            {
                flipped: true,
                img: "./images/wiki.webp",
                title: "Data Science Internship",
                subtitles: [
                    { flag: 'Es', name: "Eurecat", text: ", Barcelona, Spain | January - June 2021", url: "https://www.eurecat.org/" }
                ],
                description: "Analysis of Reverts and edit wars on wikipedia.                                                                         "
            },
            {
                flipped: true,
                img: "./images/saf.jpg",
                title: "Computer consultant",
                subtitles: [
                    { flag: 'It', name: "SAF-GEST srl", text: ", Rodengo Saiano, Italy | June 2020 - current" }
                ],
                description: "I developed a system that allows companies to automatically generate electronic invoices for the revenue agency (Agenzia Delle Entrate). I also give general help regarding all computer activities of the company. Though, This is not a full time job."
            },
        ],
        Projects: [
            {
                img: "./images/soi.jpg",
                title: "School of Innovation",
                subtitles: [
                    { flag: 'It', name: "SOI", text: ", Trento, Italy | July 2022", url: "https://www.soi.unitn.it" }
                ],
                description: "Extracurricular program at Università di Trento focused on innovation and entrepreneurship, I'have attended the following the courses: Empathy and innovation, International Entrepreneurship. I also attend a challenge called \"Design your future\" in collaboration with Muse a Museum in Trento where the goal is design a game to let children engage with Synthetic biology."
            }
            // {
            //     // img: "./images/fal.webp",
            //     title: "Company websites",
            //     description: "Developed two websites to for local companies with php. I also took care of taking pictures and video to promote their products."
            // },
            // {
            //     // img: "./images/kent.webp",
            //     title: "Kent School of English",
            //     subtitles: [ { flag: 'Gb', text: "Kent, United Kingdom | Semptember 2016" } ],
            //     description: "I took a two week course in English at Kent School of English"
            // }
        ],
    };

    const boxes = infos?.[type] ?? [];

</script>


<style lang="less">
    h3 {
        font-size: 1.2em;
        margin: 3px 0;
    }
    .subtitle {
        display: flex;
        align-items: center;
        h4 {
            font-size: 1em;
            margin: 3px 0;
        }
        .flag {
            height: 1.3em;
            width: 1.8em;
            margin-top: 3px;
            margin-bottom: 3px;
            margin-right: 0.5em;
        }
    }
    .box {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto auto;
        padding: 1em 3em;
        column-gap: 3em;
        border-bottom: 1px solid var(--theme);

        @media screen and (max-width: 800px) {
            grid-template-columns: auto;
            grid-template-rows: auto auto;
            column-gap: 0;
            padding: 1em;

            .box-img {
                grid-row: auto !important;
                grid-column: auto !important;
                img {
                    margin-bottom: 1em;
                }
            }
        }

        &:last-child {
            border-bottom: none;
        }
        
        .box-img {
            align-self: flex-start;
            justify-self: center;
            grid-row: 1 / 3;
            img {
                border-radius: 25%;
                width: 120px;
                height: 120px;
            }
        }
        
        &.flipped {
            .box-img {
                grid-column: 2 / 3;
            }
        }

        .box-url {
            color: inherit;
            text-decoration: underline;
        }

    }
</style>