#!/bin/bash
# deploy.sh — Push changes to GitHub → Vercel auto-builds and deploys
#
# Usage:
#   ./deploy.sh                          # auto commit message
#   ./deploy.sh "Add new blog post"      # custom commit message
#
# First-time setup:
#   1. Create a GitHub repo
#   2. git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
#   3. Connect repo to Vercel at vercel.com (import from GitHub)
#   4. Set your Porkbun domain in Vercel → Project → Domains
#   5. Run this script any time you want to deploy

set -e

MSG="${1:-Update site — $(date '+%b %d, %Y')}"

echo ""
echo "→ Staging changes..."
git add -A

if git diff --cached --quiet; then
  echo "✓ Nothing new to commit. Already up to date."
else
  echo "→ Committing: \"$MSG\""
  git commit -m "$MSG"
  echo "→ Pushing to GitHub..."
  git push origin main
  echo ""
  echo "✓ Deployed! Vercel is building now."
  echo "  Monitor: https://vercel.com/dashboard"
  echo ""
fi
