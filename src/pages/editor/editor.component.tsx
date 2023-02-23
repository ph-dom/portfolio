import React from 'react'
import { Editor as DraftEditor, EditorState } from 'draft-js'
import './editor.styles.scss'

function Editor (): JSX.Element {
  const [editorState, setEditorState] = React.useState<EditorState>(EditorState.createEmpty())
  return (
    <DraftEditor editorState={editorState} onChange={setEditorState} />
  )
}

export default Editor
