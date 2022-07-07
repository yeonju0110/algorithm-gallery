class Item {
    constructor(server) {
        this.server = server;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
    }

    async showLatest() {
        const response = await fetch(
            `${this.server}/post`,
            this.requestOptions
        );
        console.log(response);
        const result = await response.json();
        return result;
    }
}

export default Item;