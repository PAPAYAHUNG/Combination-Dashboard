import React from 'react'
import Header from '../SmallComponent/Header'
import { HtmlEditor, Inject, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { EditorData } from '../../data/data/dummy';
function Editor() {
  const toolbarSettings = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
          'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
          'LowerCase', 'UpperCase', '|',
          'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
          'Outdent', 'Indent', '|',
          'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
          'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']}
  return (
    <div>
      <Header page='Pages' title='Editor'/>
      <RichTextEditorComponent height={450} toolbarSettings={toolbarSettings}>
        <EditorData/>
  <Inject services={[Toolbar, HtmlEditor]} />
</RichTextEditorComponent>
    </div>
  )
}

export default Editor