#!/bin/bash

basedir="`pwd`"
spec_path_noextension="$basedir/spec/specification"
spec_extension="odt"

echo "converting to pdf..."
unoconv -f pdf "$spec_path_noextension.$spec_extension"
if [ $? -ne 0 ]; then
    echo "error"
    exit 1
fi

echo "git add..."
git add "$spec_path_noextension.$spec_extension" "$spec_path_noextension.pdf"
if [ $? -ne 0 ]; then
    echo "error"
    exit 1
fi

echo "git commit..."
git commit -m "[update-spec] Updating specification"
if [ $? -ne 0 ]; then
    echo "error"
    exit 1
fi

echo "git push..."
git push
if [ $? -ne 0 ]; then
    echo "error"
    exit 1
fi
