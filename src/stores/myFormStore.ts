import { derived, writable, Writable } from "svelte/store";

class MyFormStore {
    constructor(
        public firstname: Writable<string> = writable(''),
        public lastname: Writable<string> = writable(''),
    ) { }

    get fullname() {
        // Use derived to access writable values and export as readonly
        return derived(
            [this.firstname, this.lastname],
            ([$firstName, $lastName]) => {
                return $firstName + " " + $lastName
            }
        )
    }
}

// Export a singleton
export const myFormStore = new MyFormStore();

// Allow for multiple stores (good for contexts)
// export const createMyFormStore = () => new MyFormStore();
