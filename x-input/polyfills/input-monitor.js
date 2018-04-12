//https://stackoverflow.com/questions/29263616/is-it-possible-to-polyfill-oninput-event
// create self-executing function wrapper so we have a private scope for
// things that we just want to define/execute once
(function() {
    var isIE = false;
    // conditional compilation which tells us if this is old IE
    // which is needed because old IE has a buggy `oninput` 
    // implementation that must be worked around (so we can't use feature detection)
    /*@cc_on
      isIE = true;
      @*/

    // Which events to monitor
    // the boolean value is whether we have to 
    // re-check after the event with a setTimeout()
    var events = [
       "keyup", false,
       "blur", true,
       "focus", true,
       "drop", true,
       "change", false,
       "input", false,
       "paste", true,
       "cut", true,
       "copy", true
    ];

    // Test if the input event is supported
    // It's too buggy in IE so we never rely on it in IE
    if (!isIE) {
        var el = document.createElement("input");
        var gotInput = ("oninput" in el);
        if  (!gotInput) {
            el.setAttribute("oninput", 'return;');
            gotInput = typeof el["oninput"] == 'function';
        }
        el = null;
        // if 'input' event is supported, then use a smaller
        // set of events
        if (gotInput) {
            events = [
                "input", false,
                "textInput", false
            ];
        }
    }

    // add event cross browser
    function addEvent(elem, event, fn) {
        if (elem.addEventListener) {
            elem.addEventListener(event, fn, false);
        } else {
            elem.attachEvent("on" + event, function() {
                // set the this pointer same as addEventListener when fn is called
                return(fn.call(elem, window.event));   
            });
        }
    }

    // simplified shallow copy of an object
    function copyObj(o) {
        var x = {};
        for (var i in o) {
            x[i] = o[i];
        }
        return(x);
    }

    // define global function
    window.onChange = function(elem, fn, data) {
        var priorValue = elem.value;

        function checkNotify(e, delay) {
            if (elem.value !== priorValue) {
                priorValue = elem.value;
                fn.call(elem, e, data);
            } else if (delay) {
                var eCopy = copyObj(e);
                // the actual data change happens aftersome events
                // so we queue a check for after
                setTimeout(function() {checkNotify(eCopy, false)}, 1);
            }
        }

        for (var i = 0; i < events.length; i+=2) {
            (function(i) {
                addEvent(elem, events[i], function(e) {
                    checkNotify(e, events[i+1]);
                });
            })(i);
        }
    }
})();

// sample usage
onChange(this, function(e) {

});