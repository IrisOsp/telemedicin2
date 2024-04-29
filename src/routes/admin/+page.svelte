
<script> 
    let user ='';
    let cpr='';
    let pass='';

    const addUser= async()=> {
    fetch('api/user',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: user,
            cpr: cpr,
            pass:pass
        })
    });
};
</script>

<h1 style="display: flex; justify-content: center; align-items: center; margin-top:30px;">Admin side</h1>
<div style="display: flex; justify-content: center; align-items: center; margin-top:10px;"><input bind:value={user} placeholder="Username"/></div>
<div style="display: flex; justify-content: center; align-items: center; margin-top:10px;"><input bind:value={cpr} placeholder="CPR"/></div>
<div style="display: flex; justify-content: center; align-items: center; margin-top:10px;"><input bind:value={pass} placeholder="Password"/></div>

<div style="display: flex; justify-content: center; align-items: center; margin-top:10px;">
    <button on:click={addUser}>Opret ny bruger</button>
</div>


