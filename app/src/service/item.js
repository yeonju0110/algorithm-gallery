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
            `${this.server}/post/sort/mainpage/recent`,
            this.requestOptions
        );
        const result = await response.json();
        return result.data;
    }
}

export default Item;