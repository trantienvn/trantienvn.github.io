! function() {
    function f() {
        var a = document.createElement("div");
        a.id = "levelmaxblock";
        a.innerHTML = '<div class="inner"><div class="header"><h2 style="color:#fff;">Đã phát hiện Ad Blocker</h2></div><p>Vui lòng tắt trình chặn quảng cáo của bạn để tiếp tục!</p><div class="tombol"><button class="1 active">Adblock</button><button class="2">Adblock Plus</button></div><div class="caranya"><div class="1 active"><ol><li>Click on the AdBlock icon in your browser.<br/>Nhấp vào biểu tượng AdBlock trong trình duyệt của bạn.<br/><img src="https://1.bp.blogspot.com/-QHTWDvEY2kw/YMB6ZzG-CZI/AAAAAAAAFtU/9O4v4F6fYRo9HPMIKJshRKB6daFrVUf_ACLcBGAsYHQ/s0/adblock-codepro.png" alt="Adblock" width="250px"/></li><li>Choose, Don\'t run on pages on this domain.<br/>Chọn "Always".<br/><img src="https://1.bp.blogspot.com/-A1_dqnJQuHE/YMCAlGm8iJI/AAAAAAAAFtc/ZW-t8E7HsooNI_k7DnXRy6yi4Zrg7pSVACLcBGAsYHQ/s0/adblock-2.png" alt="Adblock" width="300px"/></li><li>The browser icon should have turned green.<br/>Biểu tượng trình duyệt phải chuyển sang màu xanh lá.<br/><img src="https://1.bp.blogspot.com/-n2b1Wb3v43c/YMCCoNIIIKI/AAAAAAAAFtk/e7x53z8O300mcl7SPsgoxKCplN3F3X_DQCLcBGAsYHQ/s0/adblock-3.png" alt="Adblock" width="250px"/></li><li>Refresh the page if it didn\'t refresh automatically. Thanks!<br/>Làm mới trang nếu nó không tự động làm mới. Cảm ơn bạn rất nhiều!</li></ol></div><div class="2"><ol><li>Click on the AdBlock Plus icon in your browser.<br/>Nhấp vào biểu tượng AdBlock Plus trong trình duyệt của bạn.<br/><img src="https://1.bp.blogspot.com/-Jjh-8CAvcB4/YMCFTptxbXI/AAAAAAAAFts/ERJRIQ9Qm3AnxyOVUqvbmZfi5vaBHSYSQCLcBGAsYHQ/s0/adblock-plus-1.png" alt="Adblock" width="250px"></li><li>Click the "This Website" button.<br/>Nhấp vào nút "Trang web này".<br/><img src="https://1.bp.blogspot.com/-5Y89f8gjXpo/YMCI4gYdkpI/AAAAAAAAFt0/ZKlLF0o9M3w3gFMDQVAqbaK5_4IxW9HXwCLcBGAsYHQ/s0/adblock-plus-2.png" alt="Adblock" width="300px"></li><li>The browser icon should have turned grey.<br/>Biểu tượng trình duyệt phải chuyển sang màu xám.<br/><img src="https://1.bp.blogspot.com/-Qkc8CJBX_J0/YMCMEpZrilI/AAAAAAAAFt8/wxZzXxbquFMwVf2rmOKI-Xt9LKP_UlLJwCLcBGAsYHQ/s0/adblock-plus-3.png" alt="Adblock" width="250px"></li></ol></div></div></div>';
        document.body.append(a);
        document.body.style.overflow = "hidden";
        var b = a.querySelectorAll("button");
        a.querySelector(".close");
        var d = a.querySelectorAll(".caranya > div");
        for (a = 0; a < b.length; a++) b[a].addEventListener("click", function(a) {
            a.preventDefault();
            a = this.getAttribute("class").split(" ")[0];
            for (var c = 0; c < d.length; c++) d[c].classList.remove("active"), b[c].classList.remove("active");
            b[a - 1].classList.add("active");
            d[a - 1].classList.add("active")
        })
    }
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = !0;
    b.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    b.onerror = function() {
        f();
        window.adblock = !0
    };
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(b, e)
}();
