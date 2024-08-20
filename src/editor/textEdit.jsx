// src/Tiptap.tsx
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Format from './Menu/format'

// define your extension array
const extensions = [StarterKit]

const content = '<p>Hello World!</p>'

const TextMenu = () => {
    const {editor} = useCurrentEditor()

    if(!editor){
        return null
    }
    return (
        <div className="control-group">
        <Format editor = {editor}/>
        </div>

    )
}

const Tiptap = () => {
  return (
    <EditorProvider slotBefore={<TextMenu/>} extensions={extensions} content={content}></EditorProvider>
  )
}

export default Tiptap
