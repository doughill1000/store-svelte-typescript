
import { derived, writable, Writable } from "svelte/store";

class MyFormStore {
    constructor(
        public firstname: Writable<string> = writable(''),
        public lastname: Writable<string> = writable(''),
    ) { }

    get fullname() {
        return derived(
            [this.firstname, this.lastname],
            ([$firstName, $lastName]) => {
                return $firstName + " " + $lastName
            }
        )
    }
}

export const myFormStore = new MyFormStore();