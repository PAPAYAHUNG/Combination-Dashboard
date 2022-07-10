import React from "react";
import Header from "../SmallComponent/Header";
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

function ColorPicker() {

  const changeColor = (args)=>{
    document.getElementById('preview').style.backgroundColor=args.currentValue.hex
  }
  return (
    <div>
      <Header page="Pages" title="Color Picker" />
      <div className="flex justify-center">
        <div id="preview" className=""></div>
      </div>
      <div className="flex justify-around">
        <div>
          <p className="text-center font-bold text-3xl">Inline Palete</p>
          <div className="mt-5 p-4">
          <ColorPickerComponent 
           mode='Palette'
            modeSwitcher={false} 
            inline={true}
             showButtons={false} 
             columns={10} 
            //  presetColors={this.presets} 
            //  beforeTileRender={this.tileRender}
              change={changeColor}
              />
          </div>
        </div>
        <div>
          <p className="text-center font-bold text-3xl">Picker Inline</p>
          <div className="mt-5 p-4">
          <ColorPickerComponent 
           mode='Picker'
            modeSwitcher={false} 
            inline={true}
             showButtons={false} 
             columns={10} 
            //  presetColors={this.presets} 
            //  beforeTileRender={this.tileRender}
              change={changeColor}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
