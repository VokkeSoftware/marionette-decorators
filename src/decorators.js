/**
 * Decorator.js
 *
 * This provides common decorators for Marionette/Backbone to clean up the code.
 */

/**
 * AppRoute decorator
 *
 * @param eventName {String} The app route you want to assign (EG/ @appRoute("home(/)") )
 * @returns {Function} The appRoute decorator
 */
export function appRoute(eventName) {

    /**
     * Return a decorator function
     */
    return function decorator(target, name, descriptor) {
        target.appRoutes = target.appRoutes || {};

        if (_.isFunction(target.appRoutes)) {
            throw new Error("The on decorator is not compatible with an appRoutes method");
        }

        if (!eventName) {
            throw new Error("The on decorator requires an appRoute argument");
        }

        target.appRoutes[eventName] = name;
        return descriptor;
    };
}

/**
 * Attribute decorator
 *
 * This provides a decorator for the any module to add in properties/attributes on the root.
 *
 * @param attribute {String} The attribute/property you wish to apply.
 * @param value {String} The initial value of the property/attribute.
 * @returns {Function} The active decorator
 */
export function attribute(attribute, value) {
    /**
     * Return a decorator function
     */
    return function decorator(target) {
        target.prototype[attribute] = value;
    };
}

/**
 * Attributes decorator
 *
 * This provides a decorator for the any module to add in properties/attributes on the root.
 *
 * @param attributes {String} The attributes/properties you wish to apply.
 * @returns {Function} The active decorator
 */
export function attributes(attributes) {
    /**
     * Return a decorator function
     */
    return function decorator(target) {
        for (var attribute in attributes) {
            target.prototype[attribute] = attributes[attribute];
        }
    };
}

/**
 * Class name decorator
 *
 * @param value {String} The class you wish to apply to the element
 * @returns {Function} The clasName decorator
 */
export function className(value) {

    /**
     * Return a decorator function
     */
    return function decorator(target) {
        target.className = value;
    };
}

/**
 * Controller decorator
 *
 * @param value {Function} The construct of the controller ( @controller(new ConstructedObject) )
 * @returns {Function} The controller decorator
 */
export function controller(value) {
    /**
     * Return a decorator function
     */
    return function decorator(target) {
        target.prototype.controller = value;
    };
}

/**
 * Event decorator
 *
 * This provides a much more declarative way to assign event listeners via decorators.
 *
 * @param eventName {String} The event you want to bind (EG/ "click div")
 * @returns {Function} The "on" decorator (@on)
 */
export function on(eventName) {
    /**
     * Return a decorator function
     */
    return function (target, name, descriptor) {
        target.events = target.events || {};

        if (_.isFunction(target.events)) {
            throw new Error("The on decorator is not compatible with an events method");
        }

        if (!eventName) {
            throw new Error("The on decorator requires an eventName argument");
        }

        target.events[eventName] = name;
        return descriptor;
    };
}

/**
 * Region decorator
 * 
 * This provides a simpler way of setting a region.
 * 
 * @param {string|Getter} regionName - Must be a getter, variable declarations occur *AFTER* constructor/initialize whereas this does not.
 */
export function region(regionName) {
    /**
     * Return a decorator function
     */
    return function (target, name, descriptor) {
        target.regions = target.regions || {};

        if (_.isFunction(target.regions)) {
            throw new Error("The region decorator is not compatible with a regions method");
        }

        if (!regionName) {
            throw new Error("The on decorator requires an regionName argument");
        }

        if (target[name] == null) {
            throw new Error("You either haven't set the region value, or set it to a value that is not visible before the constructor has run (Try using a getter!)")
        }

        target.regions[regionName] = target[name];
        return descriptor;
    };
}

/**
 * Radio request decorator
 *
 * This provides a much more declarative way to assign event listeners via decorators.
 *
 * @param request {String} The radio event you're listening to (EG/ "show:modal")
 * @returns {Function} The "radioRequest" decorator (@radioRequest)
 * @requires {Backbone.Radio} Requires backbone radio (MN 3+)
 */
export function radioRequest(request) {
    /**
     * Return a decorator function
     */
    return function (target, name, descriptor) {
        target.radioRequests = target.radioRequests || {};

        if (_.isFunction(target.radioRequests)) {
            throw new Error("The radioRequest decorator is not compatible with an events method");
        }

        if (!request) {
            throw new Error("The radioRequest decorator requires a request argument (String value)");
        }

        target.radioRequests[request] = name;
        return descriptor;
    };
}

/**
 * Tag name decorator
 *
 * @param value {String} The tag name of the element. (div/li etc)
 * @returns {Function} The tagName decorator
 */
export function tagName(value) {

    /**
     * Return a decorator function
     */
    return function decorator(target) {
        target.prototype.tagName = value;
    };
}

/**
 * Template decorator
 *
 * @param value {String|HTMLElement} The template you want to get rendered, It gets passed through _.template
 * @param model {Object} Backbone Model
 * @returns {Function} The template decorator
 */
export function template(value, model) {
    if (undefined === model) {
        model = {};
    }

    /**
     * Return a decorator function
     */
    return function decorator(target) {
        target.prototype.template = _.template(value, model);
    };
}