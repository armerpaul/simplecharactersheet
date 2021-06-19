changed_files=`git diff-index --name-only HEAD --`
if [[ -n "$changed_files" ]]; then
  echo "There are active changes on this branch. Aborting."
	exit 1
fi

yarn build
git checkout public
git pull
mv CNAME build/CNAME
rm -rf `ls | grep -v public`
mv build/* .
git add .
git commit -am "Deploying to production on `date`"
git push
git checkout main
