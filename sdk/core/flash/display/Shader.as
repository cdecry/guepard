// dummy shader impl.
// TODO.
package flash.display
{
  dynamic public class Shader
  {
  private var _byteCode:*;
  private var _data:Object;
  private var _precisionHint:String;

  public function Shader(code:* = null)
  {
    this._precisionHint = null;
    this._data = {};
    this.byteCode = code;
  }

  public function get byteCode():*
  {
    return this._byteCode;
  }

  public function set byteCode(value:*):void
  {
    var key:String = null;
    var param:Object = null;

    this._byteCode = value;

    if(this._byteCode != null)
    {
      if(this._byteCode.hasOwnProperty("data") && this._byteCode.data != null)
      {
        this._data = this._byteCode.data;
      }
      else
      {
        this._byteCode.data = this._data;
      }
    }
    else
    {
      this._data = {};
    }

    for(key in this._data)
    {
      param = this._data[key];
      if(param == null || typeof(param) != "object")
      {
        this._data[key] = { value: param };
      }
      else if(!param.hasOwnProperty("value"))
      {
        param.value = [];
      }
    }
  }

  public function get data():Object
  {
      return this._data;
  }

  public function set data(value:Object):void
  {
    var key:String = null;
    var param:Object = null;

    this._data = value != null ? value : {};

    for(key in this._data)
    {
      param = this._data[key];
      if(param == null || typeof(param) != "object")
      {
          this._data[key] = { value: param };
      }
      else if(!param.hasOwnProperty("value"))
      {
        param.value = [];
      }
    }

    if(this._byteCode != null)
    {
      this._byteCode.data = this._data;
    }
  }

  public function get precisionHint():String
  {
      return this._precisionHint;
  }

  public function set precisionHint(value:String):void
  {
      this._precisionHint = value;
  }
  }
}