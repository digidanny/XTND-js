
  window.XTND = (function() {

    function XTND() {}

    XTND.extend = function(namespace, value, base) {
      var new_base, parts;
      base = base || window;
      parts = namespace.split('.');
      if (parts.length > 1) {
        base[parts[0]] = base[parts[0]] || {};
        new_base = base[parts[0]];
        parts.shift();
        return this.extend(parts.join('.'), value, new_base);
      } else {
        return base[parts[0]] = value;
      }
    };

    return XTND;

  })();
