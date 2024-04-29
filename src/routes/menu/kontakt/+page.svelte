<script>
    import { Button } from '@sveltestrap/sveltestrap';

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


<div style="position: absolute; top: 0; right: 0; margin-right: 10px;">
    <div style="display: flex; justify-content: flex-end;">
        <button class="btn custom-navy-btn btn-sm mt-2" on:click={logout}>Logout</button>
    </div>
</div>

<div class="navigation">
<br>    
Dit lægehus
<br>
Læge: Hans Hansen & Birgitte Hjortensen
<br>
Telefon: 29 78 91 05
<br>
Adresse: Myrevej 59, 3650 Ølstykke 
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