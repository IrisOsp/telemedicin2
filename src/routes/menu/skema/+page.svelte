<script>
	import { Button, Label } from '@sveltestrap/sveltestrap';

	const logout = async () => {
		const result = await fetch('/api/logout', {
			method: 'GET',
			headers: {
				'Content-type': 'application/json'
			}
		});

		if (result.status === 200) {
			window.location = '/';
		} else {
			alert('Der opstod en fejl under logud.');
		}
	};
</script>

<div style="position: absolute; top: 0; right: 0; margin-right: 10px;">
	<div style="display: flex; justify-content: flex-end;">
		<button class="btn custom-navy-btn btn-sm mt-2" on:click={logout}>Logout</button>
	</div>
</div>

<div class="m-5">
	<div class="">
		<h1>Spørgeskema</h1>
        <br>
	</div>
	<div class="form-check">
		<ol class="list-group w-50">
			<h4>1. Har du følt dig trist til mode, ked af det?</h4>
			<li class="list-group-item d-flex justify-content-between align-items-start">
				<label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
					0. På intet tidspunkt
				</label>
				<span class="">
					<input class="form-check-input" type="radio" name="flexRadioDefault" id="zero" />
				</span>
			</li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
				<label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
					1. Lidt af tiden
				</label>
				<span class="">
					<input class="form-check-input" type="radio" name="flexRadioDefault" id="one" />
				</span>
			</li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
				<label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
					2. Lidt under halvdelen af tiden
				</label>
				<span class="">
					<input class="form-check-input" type="radio" name="flexRadioDefault" id="two" />
				</span>
			</li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
				<label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
					3. Lidt over halvdelen af tiden 
				</label>
				<span class="">
					<input class="form-check-input" type="radio" name="flexRadioDefault" id="three" />
				</span>
			</li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
				<label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
					4. Det meste af tiden
				</label>
				<span class="">
					<input class="form-check-input" type="radio" name="flexRadioDefault" id="four" />
				</span>
			</li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
				<label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
					5. Hele tiden
				</label>
				<span class="">
					<input class="form-check-input" type="radio" name="flexRadioDefault" id="five" />
				</span>
			</li>
		</ol>
	</div>
<br>
<div class="form-check">
    <ol class="list-group w-50">
        <h4>2. Har du manglet interesse for dine daglige gøremål?</h4>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                0. På intet tidspunkt
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="zero" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                1. Lidt af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="one" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                2. Lidt under halvdelen af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="two" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                3. Lidt over halvdelen af tiden 
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="three" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                4. Det meste af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="four" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                5. Hele tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="five" />
            </span>
        </li>
    </ol>
</div>
<br>
<div class="form-check">
    <ol class="list-group w-50">
        <h4>3. Har du følt at du manglede energi og kræfter?</h4>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                0. På intet tidspunkt
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="zero" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                1. Lidt af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="one" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                2. Lidt under halvdelen af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="two" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                3. Lidt over halvdelen af tiden 
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="three" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                4. Det meste af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="four" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                5. Hele tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="five" />
            </span>
        </li>
    </ol>
</div>
<br>
<div class="form-check">
    <ol class="list-group w-50">
        <h4>4. Har du haft mindre selvtillid?</h4>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                0. På intet tidspunkt
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="zero" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                1. Lidt af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="one" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                2. Lidt under halvdelen af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="two" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                3. Lidt over halvdelen af tiden 
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="three" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                4. Det meste af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="four" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                5. Hele tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="five" />
            </span>
        </li>
    </ol>
</div>
<br>
<div class="form-check">
    <ol class="list-group w-50">
        <h4>5. Har du haft dålig samvittighed eller skyldfølelse?</h4>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                0. På intet tidspunkt
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="zero" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                1. Lidt af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="one" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                2. Lidt under halvdelen af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="two" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                3. Lidt over halvdelen af tiden 
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="three" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                4. Det meste af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="four" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                5. Hele tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="five" />
            </span>
        </li>
    </ol>
</div>
<br>
<div class="form-check">
    <ol class="list-group w-50">
        <h4>6. Har du følt at livet ikke var værd at leve?</h4>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                0. På intet tidspunkt
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="zero" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                1. Lidt af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="one" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                2. Lidt under halvdelen af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="two" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                3. Lidt over halvdelen af tiden 
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="three" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                4. Det meste af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="four" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                5. Hele tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="five" />
            </span>
        </li>
    </ol>
</div>
<br>
<div class="form-check">
    <ol class="list-group w-50">
        <h4>7. Har du følt besvær med at koncentrere dig, f.eks. at læse avis eller følge med i fjernsynet?</h4>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                0. På intet tidspunkt
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="zero" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                1. Lidt af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="one" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                2. Lidt under halvdelen af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="two" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                3. Lidt over halvdelen af tiden 
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="three" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                4. Det meste af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="four" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                5. Hele tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="five" />
            </span>
        </li>
    </ol>
</div>
<br>
<div class="form-check">
    <ol class="list-group w-50">
        <h4>8a. Har du følt dig rastløs?</h4>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                0. På intet tidspunkt
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="zero" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                1. Lidt af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="one" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                2. Lidt under halvdelen af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="two" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                3. Lidt over halvdelen af tiden 
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="three" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                4. Det meste af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="four" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                5. Hele tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="five" />
            </span>
        </li>
    </ol>
</div>
<br>
<div class="form-check">
    <ol class="list-group w-50">
        <h4>8b. Har du følt dig mere stille?</h4>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                0. På intet tidspunkt
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="zero" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                1. Lidt af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="one" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                2. Lidt under halvdelen af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="two" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                3. Lidt over halvdelen af tiden 
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="three" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                4. Det meste af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="four" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                5. Hele tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="five" />
            </span>
        </li>
    </ol>
</div>
<br>
<div class="form-check">
    <ol class="list-group w-50">
        <h4>9. Har du haft besvær med at sove om natten?</h4>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                0. På intet tidspunkt
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="zero" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                1. Lidt af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="one" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                2. Lidt under halvdelen af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="two" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                3. Lidt over halvdelen af tiden 
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="three" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                4. Det meste af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="four" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                5. Hele tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="five" />
            </span>
        </li>
    </ol>
</div>
<br>
<div class="form-check">
    <ol class="list-group w-50">
        <h4>10a. Har du haft nedsat appetit?</h4>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                0. På intet tidspunkt
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="zero" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                1. Lidt af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="one" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                2. Lidt under halvdelen af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="two" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                3. Lidt over halvdelen af tiden 
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="three" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                4. Det meste af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="four" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                5. Hele tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="five" />
            </span>
        </li>
    </ol>
</div>
<br>
<div class="form-check">
    <ol class="list-group w-50">
        <h4>10b. Har du haft øget apetit?</h4>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                0. På intet tidspunkt
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="zero" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                1. Lidt af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="one" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                2. Lidt under halvdelen af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="two" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                3. Lidt over halvdelen af tiden 
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="three" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                4. Det meste af tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="four" />
            </span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <label class="ms-2 me-auto form-check-label" for="flexRadioDefault1">
                5. Hele tiden
            </label>
            <span class="">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="five" />
            </span>
        </li>
    </ol>
</div>
<br>
<button class="btn custom-navy-btn btn-sm" >Afslutte spørgeskema</button>
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
