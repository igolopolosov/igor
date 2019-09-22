echo "⭐️ Clean old files"
cd ../igolopolosov.github.io
rm bundle*
rm index.html

echo "⭐️ Build started"
cd ../igor
npm run build
cp -R ./dist ../igolopolosov.github.io

echo "⭐️ Commit changes"
cd ../igolopolosov.github.io
git add .
git commit -m "Do release"

echo "⭐️ Push changes"
git push
