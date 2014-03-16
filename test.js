var test = require("tape");

// events.js doesn't export anything
require("./events");

test(function(t) {
    
    document.body.on("foo", function(event) {
        
        t.equal(event.type, "foo");
        t.equal(event.detail, 42);
        t.equal(event.target, document.body);
        
        t.end();
        
    });
    
    document.body.emit("foo", 42);
    
});