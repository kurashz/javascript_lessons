
В папке прописываем (начало слежения):

git init

git config --local user.name "Vladisalv" / задаем имя пользователя

git config --local user.email example@gmai.com / задаем почту пользователя

git status /проверка статуса - 1 статус - файлы просто лежат в проекте

git add -A /перенос всех файлов в индекс - 2 статус - начало процесса отслеживания файлов системой контроля

git commit -a -m"First commit" / 3 статус - создание контрольной точки (коммит), где:
-a - все файлы папки
-m"***" - Комментарий к коммиту

/ Проверка всех коммитов, выглядит:

git log 


git log
commit 7286549aaa4e3feb6cfba90888e5cbfdd7fac2f3 (HEAD -> master)
Author: Vladisalv <example@gmai.com>
Date:   Sat May 7 19:36:32 2022 +0300

    Second commit

commit 16037cdbe4c8994970f29cd803a8de4ae7f085e5
Author: Vladisalv <example@gmai.com>
Date:   Sat May 7 19:33:55 2022 +0300

    First commit

123



…or create a new repository on the command line

echo "# javascript_lessons" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:kurashz/javascript_lessons.git
git push -u origin main

…or push an existing repository from the command line

git remote add origin git@github.com:kurashz/javascript_lessons.git
git branch -M main
git push -u origin main



