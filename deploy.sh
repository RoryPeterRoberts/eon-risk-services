#!/bin/bash
# Push to GitHub and deploy to Vercel
set -e

echo "Pushing to GitHub..."
git push origin main

echo "Deploying to Vercel..."
TMPDIR=$(mktemp -d)
mkdir -p "$TMPDIR/website"
cp -r /home/rory/EONRiskServices/website/* "$TMPDIR/website/"
cd "$TMPDIR"
vercel link --yes --project eon-risk-services > /dev/null 2>&1
vercel deploy --prod --yes 2>&1
rm -rf "$TMPDIR"
echo "Done."
