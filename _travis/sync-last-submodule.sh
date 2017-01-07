#!/usr/bin/env bash
declare currentDir=$(cd $(dirname $0);pwd)
declare parentDir=$(dirname "${currentDir}")
# main
cd "${parentDir}/prh"
git pull origin master
declare latestCommitMessage=$(git log --no-merges -1 --pretty=%B | cat)
declare latestCommitHash=$(git log --no-merges -1 --pretty=%H | cat)
declare commitMessage=$(cat <<-END
${latestCommitMessage}

Sync with https://github.com/azu/prh.yml/commit/${latestCommitHash}
END
)
cd "${parentDir}"
git status
git add prh
git commit -m "${commitMessage}"
git push