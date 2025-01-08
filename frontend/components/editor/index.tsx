"use client";

import { X } from "lucide-react";
import { Button } from "../ui/button";
import { ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import { Editor, OnMount } from "@monaco-editor/react";
import { useRef } from "react";
import monaco from "monaco-editor";

export default function CodeEditor() {
  const editorRef = useRef<null | monaco.editor.IStandaloneCodeEditor>(null);

  const handleEditorMound: OnMount = (editor, monaco) => {
    editorRef.current = editor;
  };
  return (
    <>
      <div className="h-full w-52"></div>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          maxSize={75}
          minSize={30}
          defaultSize={60}
          className="flex flex-col p-2"
        >
          <div className="h-10 w-full flex gap-2">
            <Button
              variant={"secondary"}
              size={"sm"}
              className="min-w-20 justify-between"
            >
              index.html
              <X className="w-3 h-3" />
            </Button>
            <Button
              variant={"secondary"}
              size={"sm"}
              className="min-w-20 justify-between"
            >
              style.css
              <X className="w-3 h-3" />
            </Button>
          </div>

          {/* editor */}
          <div className="grow w-full overflow-hidden rounded-lg">
            <Editor
              height={"100%"}
              defaultLanguage="typescript"
              theme="vs-dark"
              onMount={handleEditorMound}
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
