// ==UserScript==
// @name         ICTU LMS Save Quiz Data
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Bắt request đề thi từ lms.ictu.edu.vn và gửi về server trantien.id.vn
// @author       Gemini AI
// @match        https://lms.ictu.edu.vn/*
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Cấu hình Endpoint nhận dữ liệu của bạn
    const TARGET_UPLOAD_URL = "https://trantien.id.vn/lms/upload-data";

    // Từ khóa trong URL cần bắt (API lấy đề thi)
    const API_KEYWORD = "/ionline/api/";

    console.log("🔥 Script ICTU LMS Saver đã khởi động...");

    // Hàm gửi dữ liệu sang server của bạn
    function sendDataToMyServer(jsonData) {
        // 1. Kiểm tra an toàn: Đảm bảo data tồn tại và là mảng có phần tử
        if (!jsonData || !jsonData.data || !jsonData.data.length) {
            return;
        }

        // 2. Lấy bản ghi đầu tiên
        const record = jsonData.data[0];

        // 3. FIX LỖI Ở ĐÂY:
        // Chỉ cần kiểm tra xem có 'test' (danh sách câu hỏi) hay không.
        // Bỏ qua kiểm tra 'questions' vì không phải API nào cũng trả về trường này.
        if (!record.test || record.test.length === 0) {
            // console.log("Bỏ qua vì không có dữ liệu câu hỏi (test)");
            return;
        }
        console.log("🚀 Đang gửi dữ liệu sang trantien.id.vn...", jsonData);

        GM_xmlhttpRequest({
            method: "POST",
            url: TARGET_UPLOAD_URL,
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(jsonData),
            onload: function(response) {
                if (response.status === 200) {
                    console.log("✅ Gửi thành công!", response.responseText);
                    // Có thể hiện thông báo nhỏ cho người dùng biết
                    showNotification("Đã lưu dữ liệu đề thi thành công!");
                } else {
                    console.error("❌ Lỗi khi gửi dữ liệu:", response.status, response.responseText);
                }
            },
            onerror: function(err) {
                console.error("❌ Lỗi kết nối đến server trantien:", err);
            }
        });
    }

    // Hàm hiện thông báo trên giao diện (Optional)
    function showNotification(msg) {
        let div = document.createElement('div');
        div.style.cssText = "position:fixed; bottom:20px; right:20px; background: #28a745; color:white; padding:10px 20px; z-index:9999; border-radius:5px; box-shadow: 0 0 10px rgba(0,0,0,0.3); font-family: sans-serif;";
        div.innerText = msg;
        document.body.appendChild(div);
        setTimeout(() => div.remove(), 3000);
    }

    // --------------------------------------------------------------------------
    // CÁCH 1: Intercept XMLHttpRequest (Dành cho các trang dùng thư viện cũ hoặc Axios)
    // --------------------------------------------------------------------------
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function(method, url) {
        this._url = url; // Lưu URL để check sau này
        return originalOpen.apply(this, arguments);
    };

    XMLHttpRequest.prototype.send = function() {
        // Lắng nghe sự kiện load (khi request hoàn tất)
        this.addEventListener('load', function() {
            try {
                // Kiểm tra xem URL có chứa keyword API không
                if (this._url && this._url.includes(API_KEYWORD)) {
                    const responseData = JSON.parse(this.responseText);
                    //console.log("🎯 Bắt được API (XHR):", this._url);
                    sendDataToMyServer(responseData);
                }
            } catch (e) {
                console.error("Lỗi parse JSON trong XHR:", e);
            }
        });
        return originalSend.apply(this, arguments);
    };

    // --------------------------------------------------------------------------
    // CÁCH 2: Intercept fetch (Dành cho các trang hiện đại dùng React/Vue/Angular)
    // --------------------------------------------------------------------------
    const originalFetch = window.fetch;
    window.fetch = async function(...args) {
        const response = await originalFetch(...args);

        // Clone response để đọc dữ liệu mà không làm hỏng luồng chính của web
        const clone = response.clone();

        // Lấy URL từ request
        let url = response.url;
        if (!url && args[0]) {
             url = typeof args[0] === 'string' ? args[0] : args[0].url;
        }

        if (url && url.includes(API_KEYWORD)) {
            clone.json().then(data => {
                //console.log("🎯 Bắt được API (Fetch):", url);
                sendDataToMyServer(data);
            }).catch(err => console.error("Lỗi đọc JSON fetch:", err));
        }

        return response;
    };

})();
