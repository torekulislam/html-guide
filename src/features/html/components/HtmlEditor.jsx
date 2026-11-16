import React, { useEffect, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { lineNumbers } from "@codemirror/gutter";
import { defaultKeymap } from "@codemirror/commands";
import { html } from "@codemirror/lang-html";
import { oneDark } from "@codemirror/theme-one-dark";

export default function HtmlEditor({ code, setCode }) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const state = EditorState.create({
      doc: code,
      extensions: [
        lineNumbers(),
        keymap.of(defaultKeymap),
        html(),
        oneDark,
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            setCode(update.state.doc.toString());
          }
        }),
      ],
    });

    const view = new EditorView({
      state,
      parent: editorRef.current,
    });

    return () => view.destroy();
  }, []);

  return (
    <div
      ref={editorRef}
      className="border rounded-lg overflow-hidden"
      style={{ height: "400px" }}
    />
  );
}
