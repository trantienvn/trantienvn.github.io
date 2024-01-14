@echo off
echo "                                     _                           ";
echo "    ___ __ _ _   _    ___ ___     __| | ___  _ __   __ _   _   _ ";
echo "   / __/ _` | | | |  / __/ _ \   / _` |/ _ \| '_ \ / _` | | | | |";
echo "  | (_| (_| | |_| | | (_| (_) | | (_| | (_) | | | | (_| | | |_| |";
echo "   \___\__,_|\__,_|  \___\___/   \__,_|\___/|_| |_|\__, |  \__, |";
echo "                                                   |___/   |___/ ";
echo "   _                                                  _          ";
echo "  | | __ _ _ __ ___    _ __   __ _ _   _  ___ _   _  | |_ ___    ";
echo "  | |/ _` | '_ ` _ \  | '_ \ / _` | | | |/ _ \ | | | | __/ _ \   ";
echo "  | | (_| | | | | | | | | | | (_| | |_| |  __/ |_| | | || (_) |  ";
echo "  |_|\__,_|_| |_| |_| |_| |_|\__, |\__, |\___|\__,_|  \__\___/   ";
echo "                             |___/ |___/                         ";
echo "                 _    _                                          ";
echo "                | | _| |__   ___  _ __   __ _                    ";
echo "                | |/ / '_ \ / _ \| '_ \ / _` |                   ";
echo "                |   <| | | | (_) | | | | (_| |                   ";
echo "                |_|\_\_| |_|\___/|_| |_|\__, |                   ";
echo "                                        |___/                    ";
echo (Tra loi CO hoac KHONG)
set /p answer=
if %answer%==CO goto accept
if %answer%==co goto accept

if not %answer%==CO goto virus

:accept
cls
color cf
echo " _                                                                      ";
echo "| |_ ___     ___ _   _ _ __   __ _   _   _  ___ _   _    ___ __ _ _   _ ";
echo "| __/ _ \   / __| | | | '_ \ / _` | | | | |/ _ \ | | |  / __/ _` | | | |";
echo "| || (_) | | (__| |_| | | | | (_| | | |_| |  __/ |_| | | (_| (_| | |_| |";
echo " \__\___/   \___|\__,_|_| |_|\__, |  \__, |\___|\__,_|  \___\__,_|\__,_|";
echo "                             |___/   |___/                              ";
pause
exit

:virus
cls
color 4f
echo may tinh cua cau da bi dinh virus vi khong dong y tinh cam cua to
echo may tinh cua ban se bi tat trong 10 giay
timeout 10
shutdown -s -t 1
