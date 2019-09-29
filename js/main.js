"use strict";

class Main { // Create class Main
    constructor(name) {
        this.name = name;
    }

    get render() { // getter
        document.getElementById('name__site').innerHTML = this.name;
    }
}


// Calling function
(function () {

    // Create object class Main
    const app = new Main('BLOG');
    app.render;

})();
