"use strict";

var eventTarget = Element;
if("EventTarget" in window) {
    eventTarget = EventTarget
} else if("Node" in window) {
    eventTarget = Node;
}

eventTarget.prototype.on = eventTarget.prototype.addEventListener;
eventTarget.prototype.off = eventTarget.prototype.removeEventListener;

if("createEvent" in document) {
    
    eventTarget.prototype.emit = function emit(event, detail) {
        
        var ev = document.createEvent("CustomEvent");
        ev.initCustomEvent(event, true, true, detail);
        return this.dispatchEvent(ev);
        
    };
} else if("CustomEvent" in window) {
    
    eventTarget.prototype.emit = function emit(event, detail) {
        
        var ev = new CustomEvent(event, {
            detail: detail
        });
        return this.dispatchEvent(ev);
        
    };
    
}
