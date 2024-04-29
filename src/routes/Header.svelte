<script>
          import {page} from '$app/stores'
          import logo from './images/logo1.jpg'

    const logout = async () => {
    const result = await fetch('/api/logout', {
        method: 'GET',
        headers: {
                "Content-type": "application/json"
            },
        
    });

    if (result.status === 200) {
        window.location = '/';
    } else {
        alert("Der opstod en fejl under logud.");
    }
};

</script>

<div style="display: flex; justify-content: center; align-items: center; margin-top:30px;">
    <img src={logo} alt="HealingHub logo" style="max-width: 300px; max-height: 300px; border-radius: 5px;">
</div>
<div style="position: absolute; top: 0; right: 0; margin-right: 10px;">
    <div style="display: flex; justify-content: flex-end;">
        <button class="btn custom-navy-btn btn-sm mt-2" on:click={logout}>Logout</button>
    </div>
</div>

<br>

<div class="navigation">
    <div aria-current={$page.url.pathname === "/menu/dairy" ? 'page' : undefined} style="display: flex; justify-content: flex-end;">
        <button class="btn custom-navy-btn btn-sm mt-2" on:click={() => window.location = '/menu/dairy'}>Dagbog</button>
    </div>
    <div aria-current={$page.url.pathname === "/menu/exercises" ? 'page' : undefined}  style="display: flex; justify-content: flex-end;">
        <button class="btn custom-navy-btn btn-sm mt-2" on:click={() => window.location = '/menu/exercises'} > Øvelser</button>
    </div>
    <div style="display: flex; justify-content: flex-end;">
        <button class="btn custom-navy-btn btn-sm mt-2" on:click={() => window.location = '/menu/chat'}> Chat</button>
    </div>
    <div style="display: flex; justify-content: flex-end;">
        <button class="btn custom-navy-btn btn-sm mt-2" on:click={() => window.location = '/menu/information'}> Information</button>
    </div>
    <div style="display: flex; justify-content: flex-end;">
        <button class="btn custom-navy-btn btn-sm mt-2" on:click={() => window.location = '/menu/questions'}>Hyppigt stillede spørgsmål</button>
    </div>  
    <div style="display: flex; justify-content: flex-end;">
        <button class="btn custom-navy-btn btn-sm mt-2" on:click={() => window.location = '/menu/kontakt'} >Kontakt</button>
    </div>
</div>


<style>
    .navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid navy; 
        padding: 10px; 
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