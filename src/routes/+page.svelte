<script>
    import logo from './images/logo1.jpg'

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
            window.location='/menu';
        } else {
            alert("forkert cpr eller kodeord");
        }
    };
</script>

<div style="display: flex; justify-content: center; align-items: center; margin-top:30px;">
    <img src={logo} alt="HealingHub logo" style="max-width: 300px; max-height: 300px; border-radius: 5px;">
</div>
<br>

<div class="container ">

    <div class="input-group w-25 m-auto" style="display: flex; justify-content: center; align-items: center; margin-top:20px;">
        <input class="form-control " bind:value={username} type="text" placeholder="Indtast CPR"/></div>
        <div class="input-group w-25 m-auto mt-2" style="display: flex; justify-content: center; align-items: center; margin-top:20px;">
            <input class="form-control" bind:value={password} type="password" placeholder="Kodeord"/>
        </div>
        <div style="display: flex; justify-content: center; align-items: center;margin-top:10px;">
            <button class="btn custom-navy-btn btn-sm mt-2" on:click={login}>Login</button>
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
    }
    
    .custom-navy-btn:hover {
        background-color: darkblue;
        border-color: darkblue;
    }

</style>