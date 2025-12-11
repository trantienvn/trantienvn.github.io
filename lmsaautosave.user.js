// ==UserScript==
// @name         ICTU LMS Save Quiz Data
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Bắt request đề thi và gửi về server bằng Fetch API
// @author       TranTien
// @match        https://lms.ictu.edu.vn/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Cấu hình Endpoint
    const TARGET_UPLOAD_URL = "https://trantien.id.vn/lms/upload-data";
    const API_KEYWORD = "/ionline/api/";

    console.log("🔥 Script ICTU LMS Saver (Fetch Mode) đã khởi động...");

    // Hàm gửi dữ liệu bằng FETCH chuẩn
    function sendDataToMyServer(jsonData) {
        // Validate dữ liệu
        if (!jsonData || !jsonData.data || !jsonData.data.length) return;
        const record = jsonData.data[0];
        if (!record.test || record.test.length === 0) return;

        console.log("🚀 Đang gửi dữ liệu (Fetch) sang trantien.id.vn...");

        // Sử dụng fetch thuần
        fetch(TARGET_UPLOAD_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Header này báo cho server biết ai đang gọi (tùy chọn)
                'X-Source': 'Tampermonkey-Script'
            },
            body: JSON.stringify(jsonData)
        })
        .then(response => {
            if (response.ok) {
                console.log("✅ Gửi thành công!");
                showNotification("Đã lưu dữ liệu đề thi thành công!");
            } else {
                console.error("❌ Server trả về lỗi:", response.status);
            }
        })
        .catch(error => {
            console.error("❌ Lỗi mạng hoặc bị chặn CORS:", error);
            showNotification("Lỗi gửi dữ liệu (Check Console)");
        });
    }

    // Hàm hiện thông báo
    function showNotification(msg) {
        let div = document.createElement('div');
        div.style.cssText = "position:fixed; bottom:20px; right:20px; background: #333; color:white; padding:10px 20px; z-index:9999; border-radius:5px; box-shadow: 0 0 10px rgba(0,0,0,0.3); font-family: sans-serif; font-size: 14px;";
        div.innerText = msg;
        document.body.appendChild(div);
        setTimeout(() => div.remove(), 3000);
    }

    // --- INTERCEPTOR (Giữ nguyên để bắt data) ---

    // 1. Intercept XMLHttpRequest
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open = function(method, url) {
        this._url = url;
        return originalOpen.apply(this, arguments);
    };
    XMLHttpRequest.prototype.send = function() {
        this.addEventListener('load', function() {
            try {
                if (this._url && this._url.includes(API_KEYWORD)) {
                    const responseData = JSON.parse(this.responseText);
                    sendDataToMyServer(responseData);
                }
            } catch (e) {}
        });
        return originalSend.apply(this, arguments);
    };

    // 2. Intercept Fetch (cho web hiện đại)
    const originalFetch = window.fetch;
    window.fetch = async function(...args) {
        const response = await originalFetch(...args);
        const clone = response.clone();
        let url = response.url;
        if (!url && args[0]) url = (typeof args[0] === 'string') ? args[0] : args[0].url;

        if (url && url.includes(API_KEYWORD)) {
            clone.json().then(data => sendDataToMyServer(data)).catch(()=>{});
        }
        return response;
    };

})();
