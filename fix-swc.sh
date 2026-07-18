#!/bin/bash
# Rename native SWC binary to prevent SIGBUS crash on WSL2
SWC_DIR="node_modules/@next/swc-linux-x64-gnu"
if [ -f "$SWC_DIR/next-swc.linux-x64-gnu.node" ] && [ ! -f "$SWC_DIR/next-swc.linux-x64-gnu.node.bak" ]; then
  mv "$SWC_DIR/next-swc.linux-x64-gnu.node" "$SWC_DIR/next-swc.linux-x64-gnu.node.bak"
  echo "Disabled native SWC binary (renamed to .bak)"
fi
