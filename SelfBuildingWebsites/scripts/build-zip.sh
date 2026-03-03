#!/usr/bin/env bash
# ============================================================
# BuildMySite — Zip Builder
# 1. Runs build-setup.js to inline all JS into setup.html
# 2. Creates buildmysite.zip with the self-contained file
# Usage: bash scripts/build-zip.sh
# ============================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
WEBSITE_DIR="$(cd "$ROOT/../website" && pwd)"
OUTPUT_DIR="$WEBSITE_DIR/downloads"
ZIP_NAME="buildmysite.zip"
STAGE_DIR=$(mktemp -d)
STAGE="$STAGE_DIR/buildmysite"

echo "Step 1: Building self-contained setup.html..."
node "$SCRIPT_DIR/build-setup.js"

echo "Step 2: Creating $ZIP_NAME..."

# Create staging directory
mkdir -p "$STAGE"

# Copy the built setup.html (self-contained, no external JS needed)
cp "$ROOT/dist/setup.html" "$STAGE/setup.html"

# Copy README
cp "$ROOT/README.txt" "$STAGE/README.txt"

# Create LICENSE (MIT)
cat > "$STAGE/LICENSE" << 'EOF'
MIT License

Copyright (c) 2026 EON Risk Services Ltd

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
EOF

# Create zip
mkdir -p "$OUTPUT_DIR"
cd "$STAGE_DIR"
zip -r "$OUTPUT_DIR/$ZIP_NAME" buildmysite/
cd -

# Cleanup
rm -rf "$STAGE_DIR"

SIZE=$(du -sh "$OUTPUT_DIR/$ZIP_NAME" | cut -f1)
echo "Created $OUTPUT_DIR/$ZIP_NAME ($SIZE)"
echo "Contents:"
unzip -l "$OUTPUT_DIR/$ZIP_NAME" | tail -n +4 | head -n -2
