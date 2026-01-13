JavaScript is:

* much higher-level than C/C++ or even Java
* interpreted (not compiled), but modern engines use Just-In-Time (JIT) compilation
* will often run with incorrect syntax, logic, or typing, but some errors will stop execution
* typing
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#dynamic_and_weak_typing
  * dynamically typed (types can be changed)
  * weakly typed (JS frequently does implicit type conversions)
  * duck-typed at runtime (type is determined by behavior, not explicit declaration)
* block-scoped (...when using `let` and `const`)
* case-sensitive
* single-threaded, but can use asynchronous operations (event loop, promises, async/await)
* runs in a JavaScript engine, which is only a component of the runtime environment
* will attempt to insert semicolons automatically
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion

JavaScript is not:

* _strictly_ object-oriented or class-based (but supports objects and classes)

Why use JavaScript?

* You have to: only language that runs natively in all major browsers
* Direct access to the DOM for real-time UI manipulation
* Asynchronous programming model built into the language (event loop, promises, async/await)
  * This is important! This is a huge reason as to why Node.js is worth considering at all
  * See https://dev.to/rahmanmajeed/javascript-the-runtime-environment-35a2
* Prototype-based inheritance for flexible object modeling
* Can be used for both client-side and server-side development with the same libraries and syntax (Node.js)
* Fast startup and execution due to JIT compilation and highly optimized engines (like V8)
* Seamless integration with browser APIs (Canvas, Web Audio, WebRTC, etc.)
* Easy deployment—no need for complex build or runtime environments

The MDN docs shouldn't be scary, they're incredibly helpful for learning!
https://developer.mozilla.org/en-US/docs/Web/JavaScript
