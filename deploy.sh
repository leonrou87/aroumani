#!/bin/bash
# Usage: ./deploy.sh [optional commit message]

set -e

MSG="${1:-Update — $(date '+%b %d, %Y %H:%M')}"

git add -A

if git diff --cached --quiet; then
  echo "Nothing new to commit — pushing existing commits..."
else
  git commit -m "$MSG"
fi

git push origin main
echo "✓ Pushed → Vercel is building: https://vercel.com/dashboard"
