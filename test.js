var test = require("tape");

// events.js doesn't export anything
require("./events");

// Hijack console to display output in document
var out = document.createElement("pre");
document.body.appendChild(out);
console._log = console.log;
console.log = function() {
    out.innerHTML += arguments[0] + "\n";
    console._log.apply(console, arguments);
};

test(function(t) {
    
    document.body.on("foo", function(event) {
        
        t.equal(event.type, "foo");
        t.equal(event.detail, 42);
        t.equal(event.target, document.body);
        
        t.end();
        
    });
    
    document.body.emit("foo", 42);
    
});