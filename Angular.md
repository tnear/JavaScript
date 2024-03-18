# Angular
Angular is a single-web application framework developed by Google.

https://www.w3schools.com/angular/angular_intro.asp

## Including Angular
Angular is distributed as a single JavaScript file which can be included using the `script` tag:

```js
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
```

## Advantages over JavaScript
**Built-in tools**: Angular is a framework for building web apps, including tools for routing, forms management, client-server communication.

**Two-Way Data Binding**: Synchronizes data between the model and the view components. Any changes to the model are immediately reflected in the view, and vice versa, without requiring additional code for these updates.

**TypeScript**: Angular is built on TypeScript, a superset of JavaScript that adds static types.

**Built-in Solutions for Common Tasks**: Angular provides built-in solutions for common tasks such as form validation, routing, and state management.

## Components
Angular components are TypeScript classes that are decorated with @Component. This decorator allows you to specify metadata about the component, including its selector, template, and styles.

```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // The selector is used in HTML to instantiate this component
  template: `<h1>{{ title }}</h1>`, // The template contains the HTML for this component
  styleUrls: ['./app.component.css'] // The styles specific to this component
})
export class AppComponent {
  title = 'Hello, Angular!';
}
```

## Expressions
Angular expressions are written in double braces: **{{ expression }}**.
```js
<p>My first expression: {{ 5 + 5 }}</p>
```

## Data binding
The `ng-model` directive binds the value of an input field to a variable created in Angular.

```js
<div ng-app="myApp" ng-controller="myCtrl">
    Name: <input ng-model="name">
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.name = "John Doe";
});
</script>
```

## Validate user input
The `ng-model` directive can provide type validation such as number, email, etc.

```js
<form ng-app="" name="myForm">
  Email:
  <input type="email" name="myAddress" ng-model="text">
  <span ng-show="myForm.myAddress.$error.email">Not a valid e-mail address</span>
</form>
```

## Reading data from remote servers
The `$http` service is used to read data from remote servers.

```js
<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("welcome.htm")
    .then(function(response) {
        $scope.myWelcome = response.data;
    });
});
</script>
```