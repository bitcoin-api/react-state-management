echo """
 , __                        _      
/|/  \        |             (_\  /  
 |___/  _   __|                \/   
 | \   |/  /  |  |   |  /\/    /\   
 |  \_/|__/\_/|_/ \_/|_/ /\_/_/  \_/🦖🦕
=---===---===---===---===---===---===---=
=---===---===---===---===---===---===---=
"""
# 🐲Swaggy logo with help from: http://patorjk.com/software/taag/#p=about&f=Impossible&t=ReduxX


rm -rf stoneAgeCompatibleReduxX
mkdir -p stoneAgeCompatibleReduxX

npx babel ./index.js --out-file ./stoneAgeCompatibleReduxX/index.js --presets=@babel/env
npx babel ./lib --out-dir ./stoneAgeCompatibleReduxX/lib --presets=@babel/env

node_modules/.bin/nyc node_modules/.bin/_mocha ./test/theOfficialReduxXTestSuite.js
