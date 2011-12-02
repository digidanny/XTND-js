XTND-js
=======
A tiny class (208 bytes) that allows you to store values in arbitrary nested objects within the window object. Useful for namespacing.

Usage
=====
    XTND.extend("path.separated.by.periods","some_value")

results in

    window.path.separated.by.periods == "some_value" => true
    
Testing
=======
    gem install jasmine
    rake jasmine
    browser => http://localhost:8888