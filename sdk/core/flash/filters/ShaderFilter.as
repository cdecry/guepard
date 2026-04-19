package flash.filters
{
  import flash.display.Shader;

  public class ShaderFilter extends BitmapFilter
  {
    private var _shader:Shader;

    public function ShaderFilter(shader:Shader = null)
    {
      super();
      this._shader = shader;
    }

    public function get shader():Shader
    {
      return this._shader;
    }

    public function set shader(value:Shader):void
    {
      this._shader = value;
    }

    override public function clone():BitmapFilter
    {
      return new ShaderFilter(this._shader);
    }

    protected function _toValue():String
    {
      return this._shader != null ? "[ShaderFilter]" : "[ShaderFilter null]";
    }
  }
}