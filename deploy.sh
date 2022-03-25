#!/usr/bin/env sh

# 當發生錯誤時停止編譯
set -e

npm run build

cd dist

# 部署到自訂網域
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Bearkern/HsiaoNingLee.git master:gh-pages

cd -