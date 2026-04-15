#!/bin/bash
# EON Risk Sentinel — daily scan cron wrapper
# Runs run_sentinel.py, commits updated sentinel.json, deploys to Vercel.
# Logs to sentinel/output/cron.log (rotated manually when large).

set -euo pipefail

export PATH="/home/rory/.npm-global/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
export HOME=/home/rory

LOG=/home/rory/EONRiskServices/sentinel/output/cron.log
mkdir -p "$(dirname "$LOG")"
exec >> "$LOG" 2>&1

echo ""
echo "=== $(date -u '+%Y-%m-%dT%H:%M:%SZ') sentinel cron start ==="

cd /home/rory/EONRiskServices

# Activate conda (contains anthropic + feedparser)
# shellcheck disable=SC1091
source /home/rory/miniconda/bin/activate

cd /home/rory/EONRiskServices/sentinel
python run_sentinel.py

cd /home/rory/EONRiskServices

if git diff --quiet website/data/sentinel.json; then
  echo "no changes to website/data/sentinel.json — skipping deploy"
else
  git add website/data/sentinel.json
  git \
    -c user.name="EON Sentinel" \
    -c user.email="sentinel@eonriskservices.com" \
    commit -m "chore(sentinel): daily scan $(date -u '+%Y-%m-%d')"
  echo "pushing to github..."
  git push origin main
  echo "deploying to vercel (non-interactive)..."
  DEPLOY_TMP=$(mktemp -d)
  mkdir -p "$DEPLOY_TMP/website"
  cp -r /home/rory/EONRiskServices/website/* "$DEPLOY_TMP/website/"
  cd "$DEPLOY_TMP"
  vercel link --yes --project eon-risk-services --scope rory-roberts-projects > /dev/null
  vercel deploy --prod --yes --scope rory-roberts-projects
  cd /home/rory/EONRiskServices
  rm -rf "$DEPLOY_TMP"
  echo "deploy complete"
fi

echo "=== $(date -u '+%Y-%m-%dT%H:%M:%SZ') sentinel cron done ==="
