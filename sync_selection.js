// ==UserScript==
// @name         Sync Selection to DB
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Sync selected text
// @match        *://lms.ictu.edu.vn/*
// @grant        GM_xmlhttpRequest
// @connect      123.trantien.id.vn
// ==/UserScript==

(function() {
    const css = `
/* Chrome/Edge/Safari */
::selection { background: rgba(128,128,128,0.15); color: inherit; }
/* Firefox */
::-moz-selection { background: rgba(128,128,128,0.15); color: inherit; }
`;
    const s = document.getElementById('custom-selection-style') || document.createElement('style');
    s.id = 'custom-selection-style';
    s.textContent = css;
    document.documentElement.appendChild(s);
    document.addEventListener('mouseup', function() {
        let text = window.getSelection().toString().trim();
        if (text) {
            GM_xmlhttpRequest({
                method: "POST",
                url: "https://123.trantien.id.vn/save_selection.php",
                headers: { "Content-Type": "application/json" },
                data: JSON.stringify({
                    username: "Mật khẩu của bạn",
                    selected_text: text,
                    page_url: location.href,
                    page_title: document.title
                }),
                onload: function(response) {
                    console.log("Saved:", response.responseText);
                }
            });
        }
    });
})();
