import { Editor } from '@monaco-editor/react'
import React from 'react'

const CodeEditor = () => {
    return (
        <Editor
            height="100%"
            defaultLanguage="javascript"
            defaultValue="// some comment"
            theme="vs-dark"
        />
    )
}

export default CodeEditor