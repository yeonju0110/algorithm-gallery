class Modal {
    constructor(server, num) {
        this.server = server;
        this.num = num;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
    }

    async showPost() {
        const response = await fetch(
            `${this.server}/post/modal?postid=${this.num}`,
            this.requestOptions
        );
        const result = await response.json();
        return result.data[0];
    }

    async showComment() {
        const response = await fetch(
            `${this.server}/comment/order?postid=${this.num}`,
            this.requestOptions
        );
        const result = await response.json();
        return result.data;
    }

    async showLikes() {
        const response = await fetch(
            `${this.server}/likes/check?postid=${this.num}`,
            this.requestOptions
        );
        const result = await response.json();
        return result.data;
    }
}

export default Modal;