echo "⭐️ Clean old files"
cd ../usehotkey.github.io
rm bundle*
rm index.html

echo "⭐️ Build started"
cd ../my-personal-page
npm run build

echo "⭐️ Commit changes"
cd ../usehotkey.github.io
git add .
git commit -m "Do release"

echo "⭐️ Push changes"
git push
