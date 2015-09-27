#!/bin/bash

if [[ "$TRAVIS_PULL_REQUEST" == "true" ]]; then
    echo "This is a pull request. No deployment will be done."; exit 0
fi

if [[ "$TRAVIS_BRANCH" != "master" ]]; then
    echo "No deployment on BRANCH='$TRAVIS_BRANCH'"; exit 0
fi


echo "BUMP HELLO WORLD set up $GH_REPO [via travis] for $GIT_NAME <${GIT_EMAIL}>"
export REPO_URL="https://$GH_TOKEN@github.com/$GH_REPO.git"
git config user.name ${GIT_NAME}
git config user.email ${GIT_EMAIL}

# Git
git checkout --orphan gh-pages
lastCommit=$(git log --oneline | head -n 1)

echo "=STATUS="
git status

echo "=COMMIT="
echo "MESSAGE :" $lastCommit

git add . --verbose
git add -f all.json --verbose
git commit -m "Travis build $TRAVIS_BUILD_NUMBER"

echo "=PUSH STATUS="
git status
git push --force --quiet "$REPO_URL" gh-pages > /dev/null 2>&1
# back to master
git checkout master
git branch -D gh-pages