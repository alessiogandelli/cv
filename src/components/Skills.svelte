<h2>Skills</h2>
<div class="skills">
    
    <h3 class="spacer">SOFT SKILLS:</h3>
    <p class="spacer"> Critical thinking, Problem solving, Team work, Adaptability </p>

    <h3>PROGRAMMING LANGUAGES:</h3>
    <p> Python, Typescript, Javascript, R, Bash </p>

    <h3>DATA SCIENCE:</h3>
    <p> Pandas, networkx, openai,  NLTK, igraph, Spark, Kafka, Geopandas, Matplotlib  </p>

    <h3>DATABASES:</h3>
    <p> Postgres, MongoDB, SQLite </p>

    <h3>IT SOFTWARES:</h3>
    <p> Linux, Git, Docker </p>

    <h3>CLOUD INFRASTRUCTURE:</h3>
    <p> Google Cloud, Digital Ocean </p>


</div>


<script lang="ts">
</script>


<style lang="less">
    h3 {
        color: var(--theme);
        text-align: right;
    }
    p, h3 {
        font-size: 1.5em;
        margin: 0.5em 0;
    }

    .spacer {
        margin-bottom: 1.5em;
    }

    .skills {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        column-gap: 2em;
    }

    @media only screen and (max-width: 750px) {
        p, h3 {
            text-align: center;
        }
        h3 {
            margin-bottom: 0 !important;
        }
        .skills {
            grid-template-columns: auto;
        }

     }

</style>