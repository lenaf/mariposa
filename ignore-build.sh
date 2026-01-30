#!/bin/bash

# Only build if there are changes to code files, not just content updates
if [[ "$VERCEL_GIT_COMMIT_MESSAGE" == *"[skip ci]"* ]]; then
  echo "🛑 - Build cancelled (skip ci)"
  exit 0
else
  echo "✅ - Build can proceed"
  exit 1
fi