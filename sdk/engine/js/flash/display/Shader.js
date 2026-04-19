// dummy shader impl
// TODO.
/*class flash.display.Shader*/
(function () {
  "use strict";

  var d = {};

  d._byteCode = null;
  d._data = null;
  d._precisionHint = null;

  d._normalizeData = function () {
    if (!this._data) {
      this._data = {};
    }

    for (var key in this._data) {
      if (!this._data.hasOwnProperty(key)) continue;

      var param = this._data[key];

      if (param == null || typeof param != "object") {
        this._data[key] = { value: param };
      } else if (param.value == undefined) {
        param.value = [];
      }
    }
  };

  /*public*/
  d.Shader = function (code /*Object*/) {
    if (code == undefined) code = null;

    this._precisionHint = null;
    this._data = {};
    this.set_byteCode(code);
  };

  /*public*/
  d.get_byteCode = function () /*Object*/ {
    return this._byteCode;
  };

  /*public*/
  d.set_byteCode = function (value /*Object*/) {
    this._byteCode = value;

    if (this._byteCode != null) {
      if (this._byteCode.data != null) {
        this._data = this._byteCode.data;
      } else {
        this._byteCode.data = this._data;
      }
    } else {
      this._data = {};
    }

    this._normalizeData();

    this._ensureParam("amount");
    this._ensureParam("center");

    if (this._byteCode != null) {
      this._byteCode.data = this._data;
    }

    return value;
  };

  /*public*/
  d.get_data = function () /*Object*/ {
    return this._data;
  };

  /*public*/
  d.set_data = function (value /*Object*/) {
    this._data = value != null ? value : {};
    this._normalizeData();

    if (this._byteCode != null) {
      this._byteCode.data = this._data;
    }

    return value;
  };

  /*public*/
  d.get_precisionHint = function () /*String*/ {
    return this._precisionHint;
  };

  /*public*/
  d.set_precisionHint = function (value /*String*/) {
    this._precisionHint = value;
    return value;
  };

  d._ensureParam = function (name) {
    if (!this._data) {
      this._data = {};
    }

    if (!this._data[name]) {
      this._data[name] = { value: [] };
    } else if (this._data[name].value == undefined) {
      this._data[name].value = [];
    }

    return this._data[name];
  };

  var s = {};

  s.__init__ = function () {};

  flash.addDescription("flash.display.Shader", d, null, s, null);
})();
