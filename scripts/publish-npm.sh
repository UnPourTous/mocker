#!/bin/bash
function resultCheckPoint()
{
  result=$?
  echo "result: $result"
  if [ $result -eq 0 ];then
    echo "checkpoint successed"
  else
    echo $1
    exit
  fi
}

version=`npm version patch`
git tag $version
npm publish --access public --verbose
resultCheckPoint "NPM publish failed!"
git push --tag

