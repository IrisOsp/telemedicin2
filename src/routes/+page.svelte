<script>
    import { Button } from '@sveltestrap/sveltestrap';

    function search() {
        // Her kan du tilføje funktionalitet til søgning
    }
</script>

<div style="display: flex; justify-content: center; align-items: center; margin-top:30px;">
    <img src="./src/routes/images/logo1.jpg" alt="HealingHub logo" style="max-width: 300px; max-height: 300px; border-radius: 5px;">
</div>
<br>

<div class="navigation">
    <!-- Her er de fem knapper i navigationen -->
    <Button style="background-color: $blue-500; color: white; border-color: navy; margin-right:10px;" on:click={search}>Chat</Button>
    <Button style="background-color: navy; color: white; border-color: navy; margin-right:10px;" on:click={search}>Øvelser</Button>
    <Button style="background-color: navy; color: white; border-color: navy; margin-right:10px;" on:click={search}>Information</Button>
    <Button style="background-color: navy; color: white; border-color: navy; margin-right:10px;" on:click={search}>Spørgsmål</Button>
    <Button style="background-color: navy; color: white; border-color: navy; margin-right:10px;" on:click={search}>Kontakt</Button>
</div>

<style>
    .logo {
        /* Tilpasning af logo-styling */
    }

    .navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }

    /* Du kan tilpasse yderligere styling her */
</style>