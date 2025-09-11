# Unblocker Bookmarklet

Đây là một bookmarklet mạnh mẽ giúp bạn vô hiệu hóa các hạn chế phổ biến trên nhiều trang web, cho phép bạn sao chép văn bản, chọn nội dung, và sử dụng chuột phải một cách bình thường.

-----

### 🚀 Cách sử dụng

1.  **Sao chép đoạn code** dưới đây bằng cách nhấp vào nút "Copy code".
2.  Mở trình duyệt của bạn (Chrome, Firefox, Edge, Safari...).
3.  Tạo một bookmark mới (thường bằng cách nhấn `Ctrl + D` hoặc nhấp vào biểu tượng ngôi sao trên thanh địa chỉ).
4.  Trong cửa sổ chỉnh sửa bookmark, hãy đặt tên cho nó, ví dụ: "Unblocker".
5.  Dán đoạn code đã sao chép vào trường **URL** hoặc **Địa chỉ**.
6.  Lưu lại.

Sau đó, khi bạn truy cập một trang web có hạn chế sao chép hoặc chuột phải, chỉ cần nhấp vào bookmark này để kích hoạt.

-----

### 📝 Code

```javascript
javascript:(function(){document.addEventListener('contextmenu',function(e){e.stopPropagation();e.stopImmediatePropagation();e.preventDefault=()=>{};},true);document.addEventListener('selectstart',function(e){e.stopPropagation();e.stopImmediatePropagation();e.preventDefault=()=>{};},true);document.addEventListener('copy',event=>event.stopImmediatePropagation(),true);document.addEventListener('cut',event=>event.stopImmediatePropagation(),true);document.addEventListener('paste',event=>event.stopImmediatePropagation(),true);document.addEventListener('keydown',event=>{if(event.ctrlKey&&(event.key==='c'||event.key==='v'||event.key==='a'||event.key==='x')){event.stopImmediatePropagation();}},true);const overrideMethods=['addEventListener','removeEventListener'];overrideMethods.forEach(method=>{const original=EventTarget.prototype[method];EventTarget.prototype[method]=function(type,listener,options){if(type==='copy'||type==='cut'||type==='paste'||type==='keydown'){}else{original.call(this,type,listener,options);}};});const style=document.createElement('style');style.innerHTML=`*{user-select:text!important;-webkit-user-select:text!important;-ms-user-select:text!important;-moz-user-select:text!important;}`;document.head.appendChild(style);})();
```
