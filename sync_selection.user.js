// ==UserScript==
// @name         Sync Selection to DB (Custom Username Required)
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Sync selected text với username bắt buộc
// @author       Trần Tiến
// @match        https://lms.ictu.edu.vn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ictu.edu.vn
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @connect      123.trantien.id.vn
// ==/UserScript==

(function() {
    // CSS selection
    const css = `
    ::selection { background: rgba(128,128,128,0.15); color: inherit; }
    ::-moz-selection { background: rgba(128,128,128,0.15); color: inherit; }
    `;
    const s = document.getElementById('custom-selection-style') || document.createElement('style');
    s.id = 'custom-selection-style';
    s.textContent = css;
    document.documentElement.appendChild(s);

    // Kiểm tra username lần đầu
    let username = GM_getValue("username", null);
    if (!username) {
        while (!username) {
            username = prompt("Lần đầu tiên sử dụng, vui lòng nhập mật khẩu:");
            if (username) {
                GM_setValue("username", username.trim());
                alert("Đã lưu mật khẩu: " + username);
            } else {
                alert("Bạn phải nhập mật khẩu để tiếp tục!");
            }
        }
    }

    // Cho phép đổi username qua menu
    GM_registerMenuCommand("Đặt lại mật khẩu", () => {
        const newUser = prompt("Nhập mật khẩu mới (Sẽ mất dữ liệu selection):", username);
        if (newUser) {
            GM_setValue("username", newUser.trim());
            username = newUser.trim();
            alert("Đã lưu mật khẩu mới: " + username);
        }
    });

    // Bắt sự kiện chọn text
    document.addEventListener('mouseup', function() {
        let text = window.getSelection().toString().trim();
        if (text) {
            GM_xmlhttpRequest({
                method: "POST",
                url: "https://123.trantien.id.vn/save_selection.php",
                headers: { "Content-Type": "application/json" },
                data: JSON.stringify({
                    username: GM_getValue("username"),
                    selected_text: text,
                    page_url: location.href,
                    page_title: document.title,
                    timestamp: new Date().toISOString()
                }),
                onload: function(response) {
                    console.log("Saved:", response.responseText);
                }
            });
        }
    });
})();
