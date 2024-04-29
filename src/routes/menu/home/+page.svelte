        <script>
          

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
            <img src="./src/routes/images/logo1.jpg" alt="HealingHub logo" style="max-width: 300px; max-height: 300px; border-radius: 5px;">
        </div>
        <div style="position: absolute; top: 0; right: 0; margin-right: 10px;">
            <div style="display: flex; justify-content: flex-end;">
                <button class="btn custom-navy-btn btn-sm mt-2" on:click={logout}>Logout</button>
            </div>
        </div>

        <br>

        <div class="navigation">
            <div aria-current="" style="display: flex; justify-content: flex-end;">
               <a href="/dairy" > Dagbog </a>
            </div>
            <div style="display: flex; justify-content: flex-end;">
                <button class="btn custom-navy-btn btn-sm mt-2" on:click={() =>  window.location='/exercises'}>Øvelser</button>
            </div>
            <div style="display: flex; justify-content: flex-end;">
                <button class="btn custom-navy-btn btn-sm mt-2" on:click={() =>  window.location='/chat'}>Chat</button>
            </div>
            <div style="display: flex; justify-content: flex-end;">
                <button class="btn custom-navy-btn btn-sm mt-2" on:click={() =>  window.location='/information'}>Information</button>
            </div>
            <div style="display: flex; justify-content: flex-end;">
                <button class="btn custom-navy-btn btn-sm mt-2" on:click={() =>  window.location='/questions'}>Hyppigt stillede spørgsmål</button>
            </div>
            <div style="display: flex; justify-content: flex-end;">
                <button class="btn custom-navy-btn btn-sm mt-2" on:click={() =>  window.location='/kontakt'}>Kontakt</button>
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