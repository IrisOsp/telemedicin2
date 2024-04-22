<script>
    let username="";
    let password="";

    const login = async()=>{
        const result = await fetch('/api/login', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        const text = await result.text();
        if (result.status===200) {
            window.location='/home';
        } else {
            alert("forkert cpr eller kodeord");
        }
    };
</script>

<div style="display: flex; justify-content: center; align-items: center; margin-top:30px;">
    <img src="./src/routes/images/logo1.jpg" alt="HealingHub logo" style="max-width: 300px; max-height: 300px; border-radius: 5px;">
</div>

<div style="display: flex; justify-content: center; align-items: center; margin-top:60px;">
<h3>Login</h3>
</div>
<div style="display: flex; justify-content: center; align-items: center; margin-top:20px;">
    <input bind:value={username} type="text" placeholder="Indtast CPR"/></div>
<div style="display: flex; justify-content: center; align-items: center; margin-top:15px;">
    <input bind:value={password} type="password" placeholder="Kodeord"/>
</div>
<div style="display: flex; justify-content: center; align-items: center; margin-top:30px;">
    <button color="primary" on:click={login}>login</button>
</div>


<style>
    .logo {
    }

    .navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }

</style>