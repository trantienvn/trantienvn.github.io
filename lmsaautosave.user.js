// ==UserScript==
// @name         ICTU LMS Save Quiz Data
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Bắt request đề thi và gửi về server bằng Fetch API
// @author       TranTien
// @match        https://lms.ictu.edu.vn/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    /**
     * Toast Notification Library
     * Version: 1.0.0
     * A lightweight toast notification library for web applications
     */
    (function(global) {
        'use strict';

        class ToastNotification {
            constructor(options = {}) {
                this.options = {
                    position: options.position || 'top-right',
                    duration: options.duration || 3000,
                    maxToasts: options.maxToasts || 5,
                    ...options
                };

                this.container = null;
                this.toasts = [];
                this.init();
            }

            init() {
                // Tạo container cho toasts nếu chưa có
                if (!this.container) {
                    this.container = document.createElement('div');
                    this.container.className = `toast-container toast-${this.options.position}`;
                    this.container.setAttribute('aria-live', 'polite');
                    this.container.setAttribute('aria-atomic', 'true');
                    document.body.appendChild(this.container);
                    this.injectStyles();
                }
            }

            injectStyles() {
                if (document.getElementById('toast-notification-styles')) return;

                const style = document.createElement('style');
                style.id = 'toast-notification-styles';
                style.textContent = `
        .toast-container {
          position: fixed;
          z-index: 9999;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-width: 400px;
        }

        .toast-container.toast-top-right {
          top: 20px;
          right: 20px;
        }

        .toast-container.toast-top-left {
          top: 20px;
          left: 20px;
        }

        .toast-container.toast-bottom-right {
          bottom: 20px;
          right: 20px;
        }

        .toast-container.toast-bottom-left {
          bottom: 20px;
          left: 20px;
        }

        .toast-container.toast-top-center {
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
        }

        .toast-container.toast-bottom-center {
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
        }

        .toast-item {
          pointer-events: auto;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          padding: 16px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          min-width: 300px;
          animation: slideIn 0.3s ease-out;
          position: relative;
          overflow: hidden;
        }

        .toast-item.removing {
          animation: slideOut 0.3s ease-out forwards;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        .toast-item.toast-success {
          border-left: 4px solid #22c55e;
        }

        .toast-item.toast-error {
          border-left: 4px solid #ef4444;
        }

        .toast-item.toast-warning {
          border-left: 4px solid #f59e0b;
        }

        .toast-item.toast-info {
          border-left: 4px solid #3b82f6;
        }

        .toast-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-weight: bold;
          font-size: 16px;
        }

        .toast-success .toast-icon {
          background: #22c55e;
          color: white;
        }

        .toast-error .toast-icon {
          background: #ef4444;
          color: white;
        }

        .toast-warning .toast-icon {
          background: #f59e0b;
          color: white;
        }

        .toast-info .toast-icon {
          background: #3b82f6;
          color: white;
        }

        .toast-content {
          flex: 1;
        }

        .toast-summary {
          font-weight: 600;
          font-size: 14px;
          margin: 0 0 4px 0;
          color: #1f2937;
        }

        .toast-detail {
          font-size: 13px;
          margin: 0;
          color: #6b7280;
          line-height: 1.4;
        }

        .toast-close {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          font-size: 18px;
          line-height: 1;
          transition: color 0.2s;
          flex-shrink: 0;
        }

        .toast-close:hover {
          color: #4b5563;
        }

        .toast-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: rgba(0, 0, 0, 0.1);
          animation: progress linear;
        }
      `;
        document.head.appendChild(style);
    }

      createToast(severity, detail, summary, closable = true) {
          // Giới hạn số lượng toast
          if (this.toasts.length >= this.options.maxToasts) {
              this.removeToast(this.toasts[0]);
          }

          const toast = document.createElement('div');
          toast.className = `toast-item toast-${severity}`;

          const icons = {
              success: '✓',
              error: '✕',
              warning: '!',
              info: 'i'
          };

          toast.innerHTML = `
        <div class="toast-icon">${icons[severity]}</div>
        <div class="toast-content">
          <p class="toast-summary">${summary}</p>
          <p class="toast-detail">${detail}</p>
        </div>
        ${closable ? '<button class="toast-close" aria-label="Close">×</button>' : ''}
        ${this.options.duration > 0 ? `<div class="toast-progress" style="animation-duration: ${this.options.duration}ms"></div>` : ''}
      `;

        if (closable) {
            const closeBtn = toast.querySelector('.toast-close');
            closeBtn.addEventListener('click', () => this.removeToast(toast));
        }

        this.container.appendChild(toast);
        this.toasts.push(toast);

        // Auto remove
        if (this.options.duration > 0) {
            setTimeout(() => this.removeToast(toast), this.options.duration);
        }

        return toast;
    }

      removeToast(toast) {
          if (!toast || !toast.parentElement) return;

          toast.classList.add('removing');
          setTimeout(() => {
              if (toast.parentElement) {
                  toast.parentElement.removeChild(toast);
                  this.toasts = this.toasts.filter(t => t !== toast);
              }
          }, 300);
      }

      toastSuccess(detail, summary = 'Thông báo') {
          return this.createToast('success', detail, summary);
      }

      toastError(detail, summary = 'Cảnh báo') {
          return this.createToast('error', detail, summary);
      }

      toastWarning(detail, summary = 'Cảnh báo') {
          return this.createToast('warning', detail, summary);
      }

      toastInfo(detail, summary = 'Thông báo') {
          return this.createToast('info', detail, summary);
      }

      clearAll() {
          this.toasts.forEach(toast => this.removeToast(toast));
      }

      destroy() {
          this.clearAll();
          if (this.container && this.container.parentElement) {
              this.container.parentElement.removeChild(this.container);
          }
          this.container = null;
      }
  }

    // Export cho sử dụng global hoặc module
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = ToastNotification;
    } else if (typeof define === 'function' && define.amd) {
        define([], function() {
            return ToastNotification;
        });
    } else {
        global.ToastNotification = ToastNotification;
    }

    })(typeof window !== 'undefined' ? window : this);
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
        const toast = new ToastNotification({
            position: 'bottom-left',  // top-right, top-left, bottom-right, bottom-left, top-center, bottom-center
            duration: 3000,         // milliseconds (0 = không tự đóng)
            maxToasts: 5           // số lượng toast tối đa
        });
        toast.toastSuccess(msg);
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
