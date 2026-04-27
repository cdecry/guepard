/*class  XMLList*/
(function () {
  "use strict";

  var d = {};

  /*public*/
  d.XMLList = function (value /*Object*/) {
    var i = 0;

    if (value == undefined) value = null;

    if (value == null) {
      return;
    }

    if (typeof value.length == "number") {
      for (i = 0; i < value.length; i++) {
        this[i] = value[i];
      }
    } else {
      this[0] = value;
    }
  };

  /*public*/
  d.addNamespace = function (ns /*Object*/ /*XML*/) {};

  /*public*/
  d.appendChild = function (child /*Object*/ /*XML*/) {
    this[this.length()] = child;
    return this;
  };

  /*public*/
  d.attribute = function (arg /*Object*/ /*XMLList*/) {
    var list = new XMLList();
    var i = 0;
    var item = null;
    var value = null;
    var j = 0;

    for (i = 0; this[i] != undefined; i++) {
      item = this[i];
      if (item && item.attribute) {
        value = item.attribute(arg);
        if (value != null) {
          list[j++] = value;
        }
      }
    }

    return list;
  };

  /*public*/
  d.attributes = function () /*XMLList*/
  {
    var list = new XMLList();
    var i = 0;
    var j = 0;
    var item = null;
    var attrs = null;
    var k = 0;

    for (i = 0; this[i] != undefined; i++) {
      item = this[i];
      if (item && item.attributes) {
        attrs = item.attributes();
        for (k = 0; attrs && attrs[k] != undefined; k++) {
          list[j++] = attrs[k];
        }
      }
    }

    return list;
  };

  /*public*/
  d.child = function (propertyName /*Object*/ /*XMLList*/) {
    var list = new XMLList();
    var i = 0;
    var j = 0;
    var item = null;
    var children = null;
    var k = 0;

    for (i = 0; this[i] != undefined; i++) {
      item = this[i];
      if (item && item.child) {
        children = item.child(propertyName);
        for (k = 0; children && children[k] != undefined; k++) {
          list[j++] = children[k];
        }
      }
    }

    return list;
  };

  /*public*/
  d.childIndex = function () /*int*/
  {
    return 0;
  };

  /*public*/
  d.children = function () /*XMLList*/
  {
    var list = new XMLList();
    var i = 0;
    var j = 0;
    var item = null;
    var children = null;
    var k = 0;

    for (i = 0; this[i] != undefined; i++) {
      item = this[i];
      if (item && item.children) {
        children = item.children();
        for (k = 0; children && children[k] != undefined; k++) {
          list[j++] = children[k];
        }
      }
    }

    return list;
  };

  /*public*/
  d.comments = function () /*XMLList*/ {
    return new XMLList();
  };

  /*public*/
  d.contains = function (value /*Object*/ /*Boolean*/) {
    var i = 0;

    for (i = 0; this[i] != undefined; i++) {
      if (this[i] === value) {
        return true;
      }
    }

    return false;
  };

  /*public*/
  d.copy = function () /*XMLList*/
  {
    var list = new XMLList();
    var i = 0;
    var item = null;

    for (i = 0; this[i] != undefined; i++) {
      item = this[i];
      list[i] = item && item.copy ? item.copy() : item;
    }

    return list;
  };

  /*public*/
  d.descendants = function (name /*Object*/ /*XMLList*/) {
    var list = new XMLList();
    var i = 0;
    var j = 0;
    var item = null;
    var result = null;
    var k = 0;

    if (name == undefined) name = "*";

    for (i = 0; this[i] != undefined; i++) {
      item = this[i];
      if (item && item.descendants) {
        result = item.descendants(name);
        for (k = 0; result && result[k] != undefined; k++) {
          list[j++] = result[k];
        }
      }
    }

    return list;
  };

  /*public*/
  d.elements = function (name /*Object*/ /*XMLList*/) {
    if (name == undefined) name = "*";

    var list = new XMLList();
    var i = 0;
    var j = 0;
    var item = null;
    var children = null;
    var child = null;
    var k = 0;

    for (i = 0; this[i] != undefined; i++) {
      item = this[i];
      if (item && item.children) {
        children = item.children();
        for (k = 0; children && children[k] != undefined; k++) {
          child = children[k];
          if (name == "*" || (child && child.name && child.name() == name)) {
            list[j++] = child;
          }
        }
      }
    }

    return list;
  };

  /*public*/
  d.hasComplexContent = function () /*Boolean*/
  {
    return this.length() > 0;
  };

  /*public*/
  d.hasOwnProperty = function (P /*Object*/ /*Boolean*/) {
    if (P == undefined) P = null;
    return this[P] != undefined;
  };

  /*public*/
  d.hasSimpleContent = function () /*Boolean*/
  {
    return this.length() <= 1;
  };

  /*public*/
  d.inScopeNamespaces = function () /*Array*/
  {
    return [];
  };

  /*public*/
  d.insertChildAfter = function (
    child1 /*Object*/,
    child2 /*Object*/ /*Object*/,
  ) {};

  /*public*/
  d.insertChildBefore = function (
    child1 /*Object*/,
    child2 /*Object*/ /*Object*/,
  ) {};

  /*public*/
  d.length = function () /*int*/
  {
    var i = 0;

    while (this[i] != undefined) {
      i++;
    }

    return i;
  };

  /*public*/
  d.localName = function () /*Object*/
  {
    return this.length() > 0 && this[0] && this[0].localName
      ? this[0].localName()
      : null;
  };

  /*public*/
  d.name = function () /*Object*/
  {
    return this.length() > 0 && this[0] && this[0].name ? this[0].name() : null;
  };

  /*public*/
  d.namespace = function (prefix /*Object*/ /*Object*/) {
    if (prefix == undefined) prefix = null;
    return null;
  };

  /*public*/
  d.namespaceDeclarations = function () /*Array*/
  {
    return [];
  };

  /*public*/
  d.nodeKind = function () /*String*/
  {
    return "element";
  };

  /*public*/
  d.normalize = function () /*XMLList*/
  {
    return this;
  };

  /*public*/
  d.parent = function () /*Object*/
  {
    return null;
  };

  /*public*/
  d.prependChild = function (value /*Object*/ /*XML*/) {
    var len = this.length();
    var i = 0;

    for (i = len; i > 0; i--) {
      this[i] = this[i - 1];
    }

    this[0] = value;
    return this;
  };

  /*public*/
  d.processingInstructions = function (name /*Object*/ /*XMLList*/) {
    if (name == undefined) name = "*";
    return new XMLList();
  };

  /*public*/
  d.propertyIsEnumerable = function (P /*Object*/ /*Boolean*/) {
    if (P == undefined) P = null;
    return this[P] != undefined;
  };

  /*public*/
  d.removeNamespace = function (ns /*Object*/ /*XML*/) {
    return this;
  };

  /*public*/
  d.replace = function (propertyName /*Object*/, value /*Object*/ /*XML*/) {
    this[propertyName] = value;
    return this;
  };

  /*public*/
  d.setChildren = function (value /*Object*/ /*XML*/) {
    return this;
  };

  /*public*/
  d.setLocalName = function (name /*Object*/ /*void*/) {};

  /*public*/
  d.setName = function (name /*Object*/ /*void*/) {};

  /*public*/
  d.setNamespace = function (ns /*Object*/ /*void*/) {};

  /*public*/
  d.text = function () /*XMLList*/
  {
    return this.toString();
  };

  /*public*/
  d.toString = function () /*String*/
  {
    var result = "";
    var i = 0;
    var item = null;
    var s = null;

    for (i = 0; this[i] != undefined; i++) {
      item = this[i];

      if (item == null) {
        continue;
      }

      if (typeof item == "string") {
        s = item;
      } else if (item.toString) {
        s = item.toString();
      } else {
        s = String(item);
      }

      result += s;
    }

    return result;
  };

  /*public*/
  d.toXMLString = function () /*String*/
  {
    var result = "";
    var i = 0;
    var item = null;
    var s = null;

    for (i = 0; this[i] != undefined; i++) {
      item = this[i];

      if (item == null) {
        continue;
      }

      if (typeof item == "string") {
        s = item;
      } else if (item.toXMLString) {
        s = item.toXMLString();
      } else if (item.toString) {
        s = item.toString();
      } else {
        s = String(item);
      }

      result += s;
    }

    return result;
  };

  /*public*/
  d.valueOf = function () /*XMLList*/
  {
    return this;
  };

  flash.addDescription("XMLList", d, null, null, null, null);
})();
