<script>
    import { onMount } from 'svelte';

    let dairy = [];
    let content = '';
    let showDairy = false;

    onMount(async () => {
        await fetchDairy();
    });

    const fetchDairy = async () => {
        const res = await fetch('api/dairy/self');
        dairy = await res.json();
    };

    const saveDiary = async () => {
        const result = await fetch('api/dairy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: content
            })
        });
        await fetchDairy(); 
        content = ''; 
    };

    function toggleDairy() {
        showDairy = !showDairy;
        if (showDairy) {
            fetchDairy(); 
        }
    }
</script>

<br />

<div class="m-auto">
    <div class="row">
        <div class="col text-center">
            <input bind:value={content} type="text" placeholder="Skriv noget i din dagbog" />
            <br>
            <br>
            <button class="btn custom-navy-btn btn-sm" on:click={saveDiary}>Send</button>
        </div>
        <div class="col text-center">
            <button class="btn custom-navy-btn btn-sm" on:click={toggleDairy}>
                {showDairy ? "Skjul dagbogsindhold" : "Vis tidligere dagbøger"}
            </button>
            <br>
            <br>

            {#if showDairy}
            {#each dairy.reverse() as item}
                <div>
                    <p>{ new Date(item.createdAt).toLocaleString() }</p>
                    <p>{item.content}</p>
                </div>
            {/each}
            {/if}
        </div>
    </div>
</div>


<style>
    .navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
    .custom-navy-btn {
        background-color: navy;
        color: white;
        border-color: navy;
        margin-left: 15px;
    }

    .custom-navy-btn:hover {
        background-color: darkblue;
        border-color: darkblue;
    }

</style>