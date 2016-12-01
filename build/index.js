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
    return function (target, name, descriptor) {
        if (!target.prototype.appRoutes) {
            target.prototype.appRoutes = {};
        }

        if (_.isFunction(target.prototype.appRoutes)) {
            throw new Error("The on decorator is not compatible with an appRoutes method");
        }

        if (!eventName) {
            throw new Error("The on decorator requires an appRoute argument");
        }

        target.prototype.appRoutes[eventName] = name;
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
        target[attribute] = value;
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
        for (let attribute in attributes) {
            target[attribute] = attributes[attribute];
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
        target.prototype.className = value;
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
        if (!target.prototype.events) {
            target.prototype.events = {};
        }

        if (_.isFunction(target.prototype.events)) {
            throw new Error("The on decorator is not compatible with an events method");
        }

        if (!eventName) {
            throw new Error("The on decorator requires an eventName argument");
        }

        target.prototype.events[eventName] = name;
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

/**
 * Based on the ui decorator from Backbone-decorators
 *
 * @param args {Array} Array of arguments.
 * @returns {Function} The ui decorator
 */
export function ui(...args) {

    /**
     * Return a decorator function
     */
    return function decorator(target) {
        let ui = target.prototype.ui || {};
        let [key, value] = args;

        if (_.isObject(key)) {
            _.extend(ui, args[0]);
        } else if (_.isString(key) && _.isString(value)) {
            ui[key] = value;
        } else {
            throw new Error("The ui decorator takes either a single object as an argument or a key and value string");
        }

        target.prototype.ui = ui;
    };
}