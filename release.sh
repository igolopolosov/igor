echo "⭐️ Clone igolopolosov.github.io"
cd ../
git clone https://github.com/igolopolosov/igolopolosov.github.io

git config --global user.email "igolopolosov@gmail.com"
git config --global user.name "Igor Golopolosov"

echo "⭐️ Clean old files"
cd ./igolopolosov.github.io
rm bundle*
rm index.html

echo "⭐️ Copying started"
cd ../igor
cp -R ./dist ../igolopolosov.github.io

echo "⭐️ Commit changes"
cd ../igolopolosov.github.io
git add .
git commit -m "Do release"

echo "⭐️ Push changes"
git push
