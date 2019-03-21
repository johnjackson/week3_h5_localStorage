let utils = {
    set: function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get: function(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    rm: function(key) {
        localStorage.removeItem(key);
    },
    clear: function() {
        localStorage.clear(key)
    },
    getByClass: function(selector) {
        return document.getElementsByClassName(selector)[0];
    },
    getById: function(id) {
        return document.getElementById(id);
    }
};
