<h2>Personal Projects</h2>
<div class="somethings">
    {#each projects as prjs}
    <div class="something">
        <h3>{ prjs.name }</h3>
        <div class="list">
            { #each prjs.projects as p }
            <a href="{p.link}" target=”_blank” >
                <p class="name">{p.name}</p>
                <p class="description">{p.description}</p>
            </a>
            { /each }
        </div>
    </div>
    { /each }
</div>  
<div class="more-github">
    <a href="https://github.com/alessiogandelli" target="_blank">
        <p>And many more on my Github</p><Github size='32' />
    </a>
</div>


<script lang="ts">
    import Github from "svelte-material-icons/Github.svelte";

    type Project = { name: string, description: string, link: string }
    const projects: { name: string, projects: Project[] }[] = [
        { name: "Main", projects: [
            { name: "Topic modeling evaluation", link: "https://github.com/alessiogandelli/topic-modeling-eval", description: "Part of by internship and thesis work, here I set up an experiment to evalaute various topic modeling techniques" },
            { name : 'Tweets to Topic network', link : 'https://github.com/alessiogandelli/tweets-to-topic-network', description : 'I used topic modeling to create a temporal text network from a set of tweets' },
       ,

        ] },
       { name: "Data Science", projects: [
            { name: "Image clustering", link: "https://github.com/alessiogandelli/image-clustering", description: "Cluster a set of images using embeddings and HDBSCAN" },
            { name: "Covid dashboard", link: "https://github.com/alessiogandelli/covid-dashboard-unitn", description: "University project of big data technologies, implemented using Kafka, Postgres, Kafka and MongoDB" },
            { name: "Computer Vision: image retrieval",         link: "https://github.com/alessiogandelli/machine-learning-unitn",    description: "I implemented a siamese network to find the most similar image from a gallery" },
            { name: "Spotify network analysis",    link: "https://github.com/alessiogandelli/feat-network",           description: "Network analysis of spotify singers (in progress)" },
            { name: "Wikipedia Revert analysis",    link: "https://github.com/WikiCommunityHealth/wikimedia-revert", description: "Analysis of wikipedia revert" },
            { name: "Geospatial housing Uppsala ",                 link: "https://github.com/alessiogandelli/geospatial-uppsala-housing",        description: "use geospatial data to find the best house" },
            { name: "Attention analysis",          link: "https://github.com/alessiogandelli/attention-analysis",        description: "University project: use phone sensors data to study the attetion that students give to their phone " },
            { name: "Twitter analysis",          link: "https://github.com/alessiogandelli/tweet-musk-network",        description: "University project: Analyse the tweets of Elon Musk in the days of his twitter acquisition" },

        ] },
        { name: "Telegram Bots", projects: [
            { name: "Voice assistant for taxi drivers", link: "https://github.com/alessiogandelli/noi-hackaton-mooovex", description: "A Telegram bot that receive an unstructured voice message in input from a taxi driver and compute the cost of the route, winner project of NOI Hackaton 2024" },
            { name: "Chess, pgn to url",                link: "https://github.com/alessiogandelli/import-chess-game-bot",                 description: "A Telegram bot that given a game in pgn format returns a url where you can visualise the game " },
            { name: "Bottana translator",                      link: "https://github.com/alessiogandelli/bottana",                                description: "A Telegram bot that uses Deepl api to translate messages in a group chat or sent directly to the bot " },
        ] },
        { name: "node module", projects: [
            { name: "create-xml",       link: "https://github.com/alessiogandelli/create-xml-module", description: "Node module that collect data from ninox and generate a xml according to the format provided by the Italian financial ministry" },
            ,
        ] },
        
        
    ] 

</script>


<style lang="less">
    a {
        color: inherit;
    }
    .something {
        max-width: 780px;
        margin: auto;
        border-bottom: 1px solid var(--theme);
        padding: 1.5em;

        .list {

            a {
                display: grid;
                grid-template-columns: 1fr 3fr;
                grid-gap: 2em;
                border-radius: 5px;
                padding: 0.3em;

                &:hover {
                    background-color: var(--theme-background);
                }

                p {
                    margin: 0;
                }
                p.name {
                    color: var(--theme);
                    text-align: right;
                    text-decoration: underline;
                }
            }
        }

        &:last-child {
            border-bottom: none;
        }
        
        h3 {
            margin-top: 0;
            text-align: center;
            font-weight: bolder;
            color: var(--theme);
        }
    }

    .more-github {
        display: flex;
        justify-content: center;
        a {
            display: inline-block;
            text-transform: uppercase;
            font-size: 1.2em;
            margin-top: 2em;
            padding: 1em;
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
    :global(.more-github path) {
        fill: var(--color-bg) !important;
    }
</style>