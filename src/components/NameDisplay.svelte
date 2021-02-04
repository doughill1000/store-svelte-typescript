<script lang="ts">
    import { myFormStore } from "../stores/myFormStore";

    const { fullname } = myFormStore;
</script>

<div>
    <div><u>My Name</u></div>
    {$fullname}
</div>
