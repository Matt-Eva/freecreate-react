import { useEffect, useState, useRef } from "react";
import EditorJS, {
  BlockToolConstructable,
  // OutputData,
} from "@editorjs/editorjs";
import Header from "@editorjs/header";
import "./Editor.css";
import styles from "./Editor.module.css";

function Editor({ font }: { font: string }) {
  const fontStyle = {
    fontFamily: font,
  };

  useEffect(() => {
    configureEditor();
  }, []);

  function configureEditor() {
    const editor = new EditorJS({
      onChange: saveData,
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
      <button onClick={handleFullScreen}>{"<>"}</button>
      <div id="editorjs" className={styles.editor} style={fontStyle}></div>
    </div>
  );
}

export default Editor;
