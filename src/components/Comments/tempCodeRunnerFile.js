let storage = {};

    storage.id = Date.now().toLocaleString();
    storage.name = values.name;
    storage.email = values.email;
    storage.comment = values.comment;
    storage.gameLocation = location.pathname;
    storage.date = new Date();