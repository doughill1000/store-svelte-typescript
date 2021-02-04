<script lang="ts">
    import { myFormStore } from "../stores/myFormStore";

    const { firstname, lastname } = myFormStore;
</script>

<div>
    <form autocomplete="off">
        <div>
            <label class="label mt-4 is-inline-flex" for="last-name">
                First Name
            </label>

            <input id="last-name" bind:value={$firstname} />
        </div>
        <div>
            <label class="label" for="first-name"> Last Name </label>
            <input id="first-name" bind:value={$lastname} />
        </div>
    </form>
</div>
