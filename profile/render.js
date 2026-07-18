const data = {
    "skills": [
        {
            "icon": "💻",
            "name": "Web Development",
            "description": "HTML5, CSS3, JavaScript, PHP"
        },
        {
            "icon": "🎨",
            "name": "UI/UX Design",
            "description": "Figma, Photoshop, Premier Pro"
        },
        {
            "icon": "🛠️",
            "name": "Tools",
            "description": "Git, VS Code, Linux, Docker"
        }
    ],
    "projects": [
        {
            "icon": "📅",
            "title": "Lịch học ICTU",
            "subtitle": "Quản lý thời khóa biểu học tập",
            "features": [
                {
                    "icon": "✨",
                    "text": "Tự động hóa tác vụ"
                },
                {
                    "icon": "🎯",
                    "text": "Giao diện thân thiện"
                },
                {
                    "icon": "⚡",
                    "text": "Hiệu suất cao"
                },
                {
                    "icon": "➕",
                    "text": "Thêm trực tiếp vào lịch hệ thống"
                }
            ],
            "cta": {
                "text": "Thêm vào lịch +",
                "link": "https://trantien.id.vn/lichhoc/themvaolich.html"
            }
        }
    ],
    "apps": [
        {
            "icon": "📝",
            "name": "Note",
            "description": "Ghi chú và quản lý công việc hiệu quả",
            "link": "https://trantien.id.vn/note"
        },
        {
            "icon": "📤",
            "name": "Share",
            "description": "Chia sẻ file và tài liệu dễ dàng",
            "link": "https://trantien.id.vn/share"
        },
        {
            "icon": "📅",
            "name": "Lịch học",
            "description": "Quản lý thời khóa biểu học tập",
            "link": "https://trantien.id.vn/lichhoc"
        },
        {
            "icon": "📆",
            "name": "Thêm vào lịch",
            "description": "Thêm thời khóa biểu vào app lịch hệ thống",
            "link": "https://trantien.id.vn/lichhoc/themvaolich.html"
        },
        {
            "icon": "⚡",
            "name": "Speed Test",
            "description": "Kiểm tra tốc độ mạng internet",
            "link": "https://trantien.id.vn/speedtest"
        },
        {
            "icon": "🌐",
            "name": "SV Net",
            "description": "Quản lý điểm ngoại khóa sinh viên",
            "link": "https://trantien.id.vn/svnet"
        },
        {
            "icon": "🚚",
            "name": "Tracking",
            "description": "Tra cứu mã vận đơn giao hàng",
            "link": "https://trantien.id.vn/tracking"
        },
        {
            "icon": "📱",
            "name": "Xem tất cả",
            "description": "Khám phá thêm nhiều ứng dụng khác",
            "link": "https://trantien.id.vn//apps"
        }
    ],
    "contacts": [
        {
            "icon": "📘",
            "title": "Facebook",
            "text": "@0trantien0",
            "link": "https://www.facebook.com/0trantien0"
        },
        {
            "icon": "🎵",
            "title": "TikTok",
            "text": "@trantien.it",
            "link": "https://www.tiktok.com/@trantien.it"
        },
        {
            "icon": "💻",
            "title": "GitHub",
            "text": "@trantienvn",
            "link": "https://github.com/trantienvn"
        },
        {
            "icon": "💝",
            "title": "Locket",
            "text": "@trantienvn",
            "link": "https://locket.cam/trantienvn"
        }
    ]
};
const skillgrid = document.querySelector(".skills-grid");
const projectshowcase = document.querySelector(".project-showcase");
const appslider = document.querySelector(".apps-slider");
const contactgrid = document.querySelector(".contact-grid");
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.2
    }
);

data.skills.forEach(skill => {
    const skillcard = document.createElement("div");
    const icon = document.createElement("span");
    const name = document.createElement("h3");
    const desc = document.createElement("p");

    skillcard.classList.add("skill-card");
    icon.classList.add("skill-icon");
    icon.innerHTML = skill.icon;
    name.classList.add("skill-name");
    name.innerHTML = skill.name;
    desc.classList.add("skill-desc");
    desc.innerHTML = skill.description;
    skillcard.appendChild(icon);
    skillcard.appendChild(name);
    skillgrid.appendChild(skillcard);
    revealObserver.observe(skillcard);

});

data.projects.forEach(project => {
    const projectheader = document.createElement("div");
    const icon = document.createElement("div");
    const title = document.createElement("h3");
    const subtitle = document.createElement("p");
    const projectbody = document.createElement("div");
    const featuresgrid = document.createElement("div");
    const ctaLink = document.createElement("a");
    const projectcta = document.createElement("div");
    const projectcard = document.createElement("div");

    projectheader.classList.add("project-header");
    icon.classList.add("project-icon");
    icon.innerHTML = project.icon;
    title.classList.add("project-title");
    title.innerHTML = project.title;
    subtitle.classList.add("project-subtitle");
    subtitle.innerHTML = project.subtitle;
    projectheader.appendChild(icon);
    projectheader.appendChild(title);
    projectheader.appendChild(subtitle);
    projectbody.classList.add("project-body");
    featuresgrid.classList.add("features-grid");
    project.features.forEach(feature => {
        const featureitem = document.createElement("div");
        const featuretext = document.createElement("span");
        const featureicon = document.createElement("span");

        featureitem.classList.add("feature-item");
        featureicon.classList.add("feature-icon");
        featureicon.innerHTML = feature.icon;
        featuretext.classList.add("feature-text");
        featuretext.innerHTML = feature.text;
        featureitem.appendChild(featureicon);
        featureitem.appendChild(featuretext);
        featuresgrid.appendChild(featureitem);
    });
    projectbody.appendChild(featuresgrid);
    projectcta.classList.add("project-cta");
    ctaLink.href = project.cta.link;
    ctaLink.target = "_blank";
    ctaLink.classList.add("btn", "btn-primary");
    ctaLink.innerHTML = project.cta.text;
    projectcta.appendChild(ctaLink);
    projectcard.classList.add("project-card");
    projectcard.appendChild(projectheader);
    projectcard.appendChild(projectbody);
    projectcard.appendChild(projectcta);
    projectshowcase.appendChild(projectcard);
        revealObserver.observe(projectcard);

});
data.apps.forEach(app => {
    const appslide = document.createElement("a");
    appslide.href = app.link;
    appslide.target = "_blank";
    appslide.classList.add("app-slide");

    const icon = document.createElement("span");
    const name = document.createElement("h3");
    const desc = document.createElement("p");

    icon.classList.add("skill-icon");
    icon.innerHTML = app.icon;
    name.classList.add("skill-name");
    name.innerHTML = app.name;
    desc.classList.add("skill-desc");
    desc.innerHTML = app.description;

    appslide.appendChild(icon);
    appslide.appendChild(name);
    appslide.appendChild(desc);
    appslider.appendChild(appslide);

    revealObserver.observe(appslide);
});

data.contacts.forEach(contact => {
    const contactcard = document.createElement("a");
    contactcard.href = contact.link;
    contactcard.target = "_blank";
    contactcard.classList.add("contact-card");

    const icon = document.createElement("span");
    const info = document.createElement("div");
    const title = document.createElement("h3");
    const text = document.createElement("p");

    icon.classList.add("contact-icon");
    icon.innerHTML = contact.icon;
    info.classList.add("contact-info");
    title.classList.add("contact-title");
    title.innerHTML = contact.title;
    text.classList.add("contact-text");
    text.innerHTML = contact.text;

    info.appendChild(title);
    info.appendChild(text);
    contactcard.appendChild(icon);
    contactcard.appendChild(info);
    contactgrid.appendChild(contactcard);

    revealObserver.observe(contactcard);
});
