import { Editor } from '@monaco-editor/react'
import { CODE_SNIPPETS, editorTheme } from 'content/constants'
import { useTheme } from 'context/ThemeProvider'
import { useRef } from 'react'
import { useLocation } from 'react-router'

const CodeEditor = () => {
    const editorRef = useRef();
    const {theme} = useTheme()
    const {language} = useLocation().state 

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
      };
    

    return (
        <Editor
            height="100%"
            defaultLanguage="javascript"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            theme={theme === "dark" ?editorTheme.dark[0]:editorTheme.light[0]}
            onMount={onMount}
        />
    )
}

export default CodeEditor