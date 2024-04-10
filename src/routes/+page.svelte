<script>
    import {Input,Button} from '@sveltestrap/sveltestrap'
    let input="";
    let json= [];
    const search= async () =>{
        const res = await fetch('https://api.dataforsyningen.dk/adgangsadresser?vejnavn=' + input)
        json = await res.json();

    }

</script>
<h1>Telemedicin </h1>
<Input bind:value={input} type="text" placeholder="Søg efter adresse" />
<Button color="primary" on:click={search}>Søg</Button>
<div>
{input}
</div>
<h3>Fundne adresser</h3>

<ul>
{#each json as adress}
<li>
    {adress.adressebetegnelse}
</li>
{/each}
</ul>
