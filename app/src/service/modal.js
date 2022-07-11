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
            `${this.server}/post/${this.num}`,
            this.requestOptions
        );
        console.log(response);
        const result = await response.json();
        return result;
    }

    async showComment() {
        const response = await fetch(
            `${this.server}/comment/${this.num}`,
            this.requestOptions
        );
        const result = await response.json();
        return result;
    }

    async showLikes() {
        const response = await fetch(
            `${this.server}/like/${this.num}`,
            this.requestOptions
        );
        const result = await response.json();
        return result;
    }
}

export default Modal;