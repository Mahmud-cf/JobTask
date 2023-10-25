import React, { useEffect, useRef } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Syntaxt_highlite() {
  const codeString = `import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Syntaxt_highlite() {
  const codeString = '(num) => num + 1';
  return (
      <div>
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
        </SyntaxHighlighter>
      </div>
  )
}

export default Syntaxt_highlite`;

  const containerRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function handleMouseUp() {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    if (selectedText !== "") {
      const range = selection.getRangeAt(0);
      const selectedLines = getSelectedLines(range);

      if (selectedLines.length > 0) {
        const div = document.createElement("div");
        div.className = "highlighted-container";

        selectedLines.shift();

        selectedLines.forEach((line) => {
          const span = document.createElement("span");
          span.textContent = line;
          div.appendChild(span);
        });

        const fragment = range.extractContents();
        div.appendChild(fragment);

        range.insertNode(div);

        selection.removeAllRanges();
      }
    }
  }

  function handleClickOutside(event) {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      clearSelectionBorders();
    }
  }

  function clearSelectionBorders() {
    const highlightedContainers = document.querySelectorAll(
      ".highlighted-container"
    );
    highlightedContainers.forEach((container) => {
      const parent = container.parentNode;
      while (container.firstChild) {
        parent.insertBefore(container.firstChild, container);
      }
      parent.removeChild(container);
    });
  }

  function getSelectedLines(range) {
    const lines = [];
    let startNode = range.startContainer;
    let endNode = range.endContainer;

    if (startNode === endNode) {
      lines.push(
        startNode.textContent.substring(range.startOffset, range.endOffset)
      );
    } else {
      while (startNode && startNode !== endNode) {
        if (startNode.nodeType === 3) {
          if (startNode === range.startContainer) {
            lines.push(startNode.textContent.substring(range.startOffset));
          } else {
            lines.push(startNode.textContent);
          }
        }
        startNode = startNode.nextSibling;
      }

      if (endNode.nodeType === 3) {
        lines.push(endNode.textContent.substring(0, range.endOffset));
      }
    }
    lines.shift();
    return lines;
  }

  return (
    <div ref={containerRef}>
      <SyntaxHighlighter language="javascript" style={docco}>
        {codeString}
      </SyntaxHighlighter>
      
    </div>
  );
}

export default Syntaxt_highlite;
