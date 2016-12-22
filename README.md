# Marionette Decorators [![npm version](https://badge.fury.io/js/marionette-decorators.svg)](https://badge.fury.io/js/marionette-decorators)

## Table of contents
- [Requirements](#requirements)
- [Examples](#examples)
    - [appRoute](#approute)
    - [attribute](#attribute)
    - [attributes](#attributes)
    - [className](#classname)
    - [controller](#controller)
    - [tagName](#tagname)
    - [on](#on)
    - [ui](#ui)


## Requirements
You will require babel's [syntax-decorators](https://babeljs.io/docs/plugins/syntax-decorators/) babel to use decorators


## Examples
Example usages (If you need more info on what they're referring to, look at marionette documentation on those functions/objects)

### appRoute
Set an appRoute for marionette router **example**
```javascript
import { appRoute } from "marionette-decorators";
import { AppRouter } from "marionette";

class MyRoute extends AppRouter {
    
    @appRoute("myRoute(/)")
    onMyRoute (params) {
        /** Show the page **/
    }
    
}

export default MyRoute;
```

### attribute
Set an any attribute before app is initialized **example**
```javascript
import { attribute } from "marionette-decorators";
import { View } from "marionette";

@attribute("isValid", true)
class MyView extends View {
    
    initialize (params) {
        /** Set is valid to false **/
        this.isValid = false;
    }
    
}

export default MyView;
```

### attributes
Setup any number of attributes before app is initialized **example**
```javascript
import { attributes } from "marionette-decorators";
import { View } from "marionette";

@attributes({
    isValid: true,
    model: new Backbone.Model()
})
class MyView extends View {
    
    initialize (params) {
        /** Set is valid to false **/
        this.isValid = false;
        this.model.set("Hello", "World");
    }
    
}

export default MyView;
```

### className
Pass in a string to set the className attribute before initialization **example**
```javascript
import { className } from "marionette-decorators";
import { View } from "marionette";

@className("my-view")
class MyView extends View { }

export default MyView;
```

### controller
Set the controller for marionette the route **example**
```javascript
import { controller } from "marionette-decorators";
import { AppRouter } from "marionette";
import MyRouteController from "./controller";

@controller(new MyRouteController)
class MyRoute extends AppRouter { }

export default MyRoute;
```

### tagName
Pass in a string to set the tagName attribute before initialization **example**
```javascript
import { tagName } from "marionette-decorators";
import { View } from "marionette";

@tagName("ul")
class MyView extends View { }

export default MyView;
```

### on
Add an event listener into your marionette view **example**
```javascript
import { tagName, on } from "marionette-decorators";
import { View } from "marionette";

@tagName("li")
class MyView extends View {
    
    @on("click li")
    onListItemClick (event) {
        console.log(event);
    }
    
}

export default MyView;
```

### ui
Set your UI object in the view **example**
```javascript
import { className, on, ui } from "marionette-decorators";
import { View } from "marionette";

@ui({
    listItem: "li"
})
class MyView extends View {
    
    @on("click @ui.listItem")
    onListItemClick (event) {
        console.log(event);
    }
    
}

export default MyView;
```
