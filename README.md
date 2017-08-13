# Example Web Application for JSFlow 

This is an example web application demonstrating use of [JSFlow for Spring Web MVC](https://github.com/szegedi/spring-web-jsflow)

To get started with it, clone this repository, make sure you have Maven installed, and then from command line issue:
```
mvn jetty:run
```
To launch the webapp in a Jetty web server instance at `localhost:8080`.

There are two examples. The first one is a sample checkout process at `http://localhost:8080/checkout.js` that gathers a shipping and billing address with server-side input validation. 
Address-gathering is implemented as a JavaScript function that simply loops until input data is valid. The main flow invokes the 
function twice for both billing and shipping address. This demonstrates how you can encapsulate flows as reusable functions and express them as normal algorithms, just as you would with any program.

The second one is a "tape calculator" at `http://localhost:8080/calculator.js` allowing you to perform the 4 basic arithmetic operations while keeping a history of the previous operations.

For extra fun, use a "duplicate page" (or "tab" or "window") functionality of your web browser midway through playing with any example and see how it seamlessly forks the execution of the flow!
After that, use the browser back button to go back in one of the executions, then do something in the other, and see how they remain entirely independent.

For a more exhaustive tutorial walking you through the mechanics of the calculator example and explaining advanced concepts, please see the [Tutorial](https://github.com/szegedi/spring-web-jsflow-example/wiki/Tutorial).
