## REFERENCE
[resource](https://www.atlassian.com/git/tutorials/using-branches/git-merge)

## IMPORTANT TO READ
come into this git-test directory
and do `git init` inside git-test directory

make any file first and commit,
branch out for feature b
do some commit, e.g. create another file for feature b
come back to master and create other files for feature c

merge feature b so that when you do `git log --graph`

it would show something like this

*   commit 811aa2ca8295a5b66d8951e2487babdd85c44b6d (HEAD -> master)
|\  Merge: b09ecf5 368b792
| | Author: Johnny <johnnykoo84@gmail.com>
| | Date:   Mon Oct 22 20:53:00 2018 +0900
| |
| |     Merge branch 'feature-b'
| |
| * commit 368b792fdfeade7ef4f6ea0cddb573b2ae8c8648 (feature-b)
| | Author: Johnny <johnnykoo84@gmail.com>
| | Date:   Mon Oct 22 20:52:54 2018 +0900
| |
| |     add feature b
| |
* | commit b09ecf5e063947f81087a568758ce6d0687fa483
|/  Author: Johnny <johnnykoo84@gmail.com>
|   Date:   Mon Oct 22 20:52:29 2018 +0900
|
|       feature-c
|
* commit dcd1530685782cba6ac172120cdf116f401f2114
  Author: Johnny <johnnykoo84@gmail.com>
  Date:   Mon Oct 22 20:52:03 2018 +0900

      intial commit
(END)
