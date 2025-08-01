(function() {
    'use strict';
    const scriptUrl = 'https://trantienvn.github.io/lms.js';

    fetch(scriptUrl)
        .then(response => {
        if (!response.ok) {
            throw new Error(`Không thể tải script: ${response.statusText}`);
        }
        return response.text();
    })
        .then(scriptContent => {
        // Thực thi script
        eval(scriptContent);
    })
        .catch(error => {
        console.error('Lỗi khi tải hoặc thực thi script:', error);
    });
    const originalFetch = window.fetch;

    // Ghi đè fetch để phát hiện PDF
    window.fetch = async (...args) => {
        const [resource, config] = args;

        try {
            const response = await originalFetch.apply(this, args);
            const clonedResponse = response.clone();

            // Kiểm tra Content-Type từ response headers
            const contentType = clonedResponse.headers.get('Content-Type');
            if (contentType && contentType.includes('application/pdf')) {
                console.log('📄 Phát hiện file PDF qua fetch:', resource);
                addDownloadButton(resource);
            }

            return response;
        } catch (error) {
            console.error('❌ Lỗi khi fetch:', error);
            throw error;
        }
    };

    // Dừng sự kiện blur cho toàn trang
    function handleBlurEvent(event) {
        // Xử lý sự kiện blur ở đây
        console.log("Window lost focus");
    }

    // Thêm sự kiện blur
    //window.addEventListener("blur", handleBlurEvent);

    // Xóa sự kiện blur
    window.removeEventListener("blur", handleBlurEvent);




    document.addEventListener('contextmenu', function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.preventDefault = () => {};
    }, true);

    // Bỏ chặn sự kiện chọn văn bản
    document.addEventListener('selectstart', function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.preventDefault = () => {};
    }, true);
    document.addEventListener('copy', (event) => event.stopImmediatePropagation(), true);
    document.addEventListener('cut', (event) => event.stopImmediatePropagation(), true);
    document.addEventListener('paste', (event) => event.stopImmediatePropagation(), true);

    // Xóa các sự kiện keydown liên quan đến Ctrl
    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && (event.key === 'c' || event.key === 'v' || event.key === 'a' || event.key === 'x')) {
            event.stopImmediatePropagation();
        }
    }, true);
    const overrideMethods = ['addEventListener', 'removeEventListener'];
    overrideMethods.forEach(method => {
        const original = EventTarget.prototype[method];
        EventTarget.prototype[method] = function (type, listener, options) {
            if (type === 'copy' || type === 'cut' || type === 'paste' || type === 'keydown') {
            } else {
                original.call(this, type, listener, options);
            }
        };
    });
    // Bỏ các CSS hạn chế
    const style = document.createElement('style');
    style.innerHTML = `
        * {
            user-select: text !important;
            -webkit-user-select: text !important;
            -ms-user-select: text !important;
            -moz-user-select: text !important;
        }
    `;
    document.head.appendChild(style);

    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;

    // Ghi đè open
    XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
        this._url = url; // Lưu URL để sử dụng trong send
        return originalOpen.apply(this, arguments); // Gọi phương thức gốc
    };

    // Ghi đè send
    XMLHttpRequest.prototype.send = function (body) {
        this.addEventListener('readystatechange', function () {
            if (this.readyState === 4 && this.status === 200) {
                try {
                    const baseUrl = 'apps.ictu.edu.vn:9087/ionline/api/class-plan-activity-student-tests/';
                    const url = new URL(this._url);
                    const params = url.searchParams;

                    const requiredParams = [
                        'limit', 'paged', 'order', 'orderby',
                        'condition[0][key]', 'condition[0][value]', 'condition[0][compare]',
                        'condition[1][key]', 'condition[1][value]', 'condition[1][compare]', 'condition[1][type]'
                    ];

                    const hasAllParams = requiredParams.every(param => params.has(param));

                    if (this._url.includes(`${baseUrl}score`)) {
                        handleScoreResponse(this.responseText);
                    } else if (this._url.includes(`apps.ictu.edu.vn:9087/ionline/api/summary/week-test`)) {
                        handleTestListResponse(this.responseText);
                    }

                    // Ghi đè phản hồi
                    //Object.defineProperty(this, 'responseText', { value: JSON.stringify(responseData) });
                    //Object.defineProperty(this, 'response', { value: JSON.stringify(responseData) });

                } catch (error) {
                }

            }
        });

        // Gọi phương thức gốc
        return originalSend.apply(this, arguments);
    };
    function addDownloadButton(pdfUrl) {
        const existingBtn = document.getElementById('tm-pdf-download-btn');
        if (existingBtn) {
            existingBtn.parentElement.remove(); // Xóa cả container
        }

        // Tạo container
        const container = document.createElement('div');
        container.id = 'tm-pdf-download-container';
        container.style.position = 'fixed';
        container.style.bottom = '20px';
        container.style.right = '20px';
        container.style.zIndex = '9999';

        // Tạo nút download (giảm kích thước)
        const downloadBtn = document.createElement('button');
        downloadBtn.id = 'tm-pdf-download-btn';
        downloadBtn.innerHTML = `<span class="p-button-icon pi pi-download" aria-hidden="true"></span>`;
        downloadBtn.title = 'Tải xuống PDF';
        Object.assign(downloadBtn.style, {
            width: '40px',          // Giảm kích thước
            height: '40px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#07abcc',
            color: '#fff',
            fontSize: '18px',       // Giảm kích thước icon
            boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
        });

        // Hiệu ứng hover
        downloadBtn.addEventListener('mouseover', () => downloadBtn.style.backgroundColor = '#0599b3');
        downloadBtn.addEventListener('mouseout', () => downloadBtn.style.backgroundColor = '#07abcc');

        // Sự kiện tải file
        downloadBtn.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = pdfUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            console.log('📥 Đang tải file:', link.download);
        });

        // Nút đóng (giảm kích thước)
        const closeButton = document.createElement('button');
        closeButton.textContent = '✖';
        closeButton.title = 'Xóa nút download';
        Object.assign(closeButton.style, {
            position: 'absolute',
            top: '-6px',          // Điều chỉnh để gần sát mép hơn
            right: '-6.5px',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#ff4d4d',
            color: '#fff',
            fontSize: '12px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            display: 'flex',             // Căn giữa dấu X
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0',
            lineHeight: '1',
            transform: 'translate(0, 0)'  // Đảm bảo không bị lệch
        });

        closeButton.addEventListener('click', () => container.remove());

        // Thêm nút vào DOM
        container.appendChild(downloadBtn);
        container.appendChild(closeButton);
        document.body.appendChild(container);
    }




    // Hàm xử lý điểm số từ API score
    function handleScoreResponse(responseText) {
        try {
            const data = JSON.parse(responseText);
            if (data && data.score !== undefined) {
                observeAndInsert(
                    '.ictu-page-test__last-result__body__state.text-success',
                    element => {
                        if (!element.textContent.includes('Điểm')) {
                            element.textContent += ` - Điểm ${(data.score / 10).toFixed(2)}`;
                        }
                    }
                );
            }
        } catch (e) {
            console.error('Không thể phân tích phản hồi score:', e);
        }
    }

    // Hàm xử lý danh sách điểm số từ API test list
    function handleTestListResponse(responseText) {
        try {
            const data = JSON.parse(responseText);
            if (data.data) {
                observeAndInsert(
                    '.tbl-testing-result',
                    element => {
                        const existingRow = document.querySelector('.trantienmod');
                        if (!existingRow) {
                            const scores = data.data.max;
                            const newRow = createScoreRow('Điểm của bạn:', scores?(scores / 10).toFixed(2):'Chưa có điểm');
                            const grandparent = document.querySelector('b')?.parentElement?.parentElement;
                            if (grandparent) {
                                grandparent.parentElement.insertBefore(newRow, grandparent);
                            }
                        }
                    }
                );
            }
        } catch (e) {
            console.error('Không thể phân tích phản hồi test list:', e);
        }
    }

    // Hàm quan sát DOM và chèn nội dung
    function observeAndInsert(selector, callback) {
        const observer = new MutationObserver((mutationsList, observer) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    const element = document.querySelector(selector);
                    if (element) {
                        callback(element);
                        observer.disconnect(); // Ngừng theo dõi
                        break;
                    }
                }
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Hàm tạo dòng bảng điểm
    function createScoreRow(label, scores) {
        const newRow = document.createElement('tr');
        newRow.classList.add('ng-star-inserted', 'trantienmod');
        newRow.style.border = '1px solid #ededed';

        const th = document.createElement('th');
        th.classList.add('text-right');
        th.textContent = label;
        th.style.border = '1px solid #ededed';
        th.style.padding = '10px';

        const td = document.createElement('td');
        td.textContent = scores;
        td.style.border = '1px solid #ededed';
        td.style.padding = '10px';

        newRow.appendChild(th);
        newRow.appendChild(td);

        return newRow;
    }

})();