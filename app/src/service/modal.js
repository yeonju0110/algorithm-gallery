class Modal {
    constructor(server) {
        this.server = server;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
    }

    async showPost(num) {
        const response = await fetch(
            `${this.server}/post/modal?postid=${num}`,
            this.requestOptions
        );
        const result = await response.json();
        return result.data[0];
    }

    async showComment(num) {
        const response = await fetch(
            `${this.server}/comment/order?postid=${num}`,
            this.requestOptions
        );
        const result = await response.json();
        return result.data;
    }

    async showLikes(num) {
        const response = await fetch(
            `${this.server}/likes/check?postid=${num}`,
            this.requestOptions
        );
        const result = await response.json();
        return result.data;
    }
}

export default Modal;