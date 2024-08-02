import { useEffect, useState, useRef } from "react";
import EditorJS, {
  BlockToolConstructable,
  // OutputData,
} from "@editorjs/editorjs";
import Header from "@editorjs/header";
import "./Editor.css";
import styles from "./Editor.module.css";

function Editor({
  font,
  readOnly,
  displayFullscreen,
  placeHolder,
}: {
  font: string;
  readOnly: boolean;
  displayFullscreen: boolean;
  placeHolder: string;
}) {
  const editorRef = useRef<EditorJS | null>(null);
  const fontStyle = {
    fontFamily: font,
  };

  useEffect(() => {
    configureEditor();
    if (editorRef === null) {
    }
  }, []);

  async function configureEditor() {
    const editor = new EditorJS({
      onChange: saveData,
      readOnly: readOnly,
      placeholder: placeHolder,
      tools: {
        header: {
          class: Header as unknown as BlockToolConstructable,
          inlineToolbar: true,
          config: {
            levels: [3],
            defaultLevel: 3,
          },
        },
      },
    });
    async function saveData() {
      await editor.isReady;
      const outPutData = await editor?.save();
      // setContent(outPutData);
      console.log(outPutData);
    }
    console.log("editorConfigured");
    await editor.isReady;
    editorRef.current = editor;
  }

  function handleFullScreen() {
    const container = document.getElementById("editor-container");
    if (document.fullscreenElement) {
      try {
        document.exitFullscreen();
      } catch (e) {
        console.error(e);
      }
    } else if (container?.requestFullscreen) {
      container.requestFullscreen();
    }
  }

  return (
    <div className={styles.wrapper} id="editor-container">
      {displayFullscreen ? <button onClick={handleFullScreen}></button> : null}
      <div id="editorjs" className={styles.editor} style={fontStyle}></div>
    </div>
  );
}

export default Editor;
