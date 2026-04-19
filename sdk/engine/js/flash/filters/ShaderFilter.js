/*class flash.filters.ShaderFilter*/
(function () {
  "use strict";

  var d = {};

  d._shader = null;

  /*public*/
  d.get_shader = function () /*Shader*/
  {
    return this._shader;
  };

  /*public*/
  d.set_shader = function (value /*Shader*/ /*void*/) {
    this._shader = value;
  };

  /*public*/
  d.ShaderFilter = function (shader /*Shader*/) {
    this.BitmapFilter_constructor();

    if (shader == undefined) shader = null;

    this._shader = shader;
  };

  /*override*/
  /*public*/
  d.clone = function () /*BitmapFilter*/
  {
    return new flash.filters.ShaderFilter(this._shader);
  };

  /*private*/
  d._toValue = function () /*String*/
  {
    return this._shader != null ? "[ShaderFilter]" : "[ShaderFilter null]";
  };

  var s = {};

  s.__init__ = function () {
    /*super*/
    /*public*/
    this.prototype.BitmapFilter_constructor = this.__base__;
  };

  flash.addDescription(
    "flash.filters.ShaderFilter",
    d,
    "flash.filters.BitmapFilter",
    s,
    null,
  );
})();
