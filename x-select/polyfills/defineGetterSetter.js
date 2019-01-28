var proto = Object.prototype;

proto.__defineGetter__ = proto.__defineGetter__ || function(name, func) {
    var descriptor = Object.getOwnPropertyDescriptor(this, name);
    var new_descriptor = { get: func, configurable: true};
    if (descriptor) {
        console.assert(descriptor.configurable, "Cannot set getter");
        if (descriptor.set) new_descriptor.set = descriptor.set; // COPY OLD SETTER
    }
    Object.defineProperty(this, name, new_descriptor);
};

proto.__defineSetter__ = proto.__defineSetter__ || function(name, func) {
    var descriptor = Object.getOwnPropertyDescriptor(this, name);
    var new_descriptor = { set: func, configurable: true};
    if (descriptor) {
        console.assert(descriptor.configurable, "Cannot set setter");
        if (descriptor.get) new_descriptor.get = descriptor.get; // COPY OLD GETTER
    }
    Object.defineProperty(this, name, new_descriptor);
};