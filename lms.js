(self.webpackChunklms_v3 = self.webpackChunklms_v3 || []).push([[179], {
    2512: (r, p, i) => {
        "use strict";
        i.d(p, {
            b9: () => Ui,
            pQ: () => Bt,
            cs: () => He,
            $E: () => Bi,
            mx: () => ue,
            vM: () => Li
        });
        var u = i(3232)
          , d = i(6281)
          , s = i(5910)
          , t = i(755);
        let A = ( () => {
            class e {
                static #t = this.ɵfac = function(o) {
                    return new (o || e)
                }
                ;
                static #e = this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-empty"]],
                    decls: 1,
                    vars: 0,
                    template: function(o, a) {
                        1 & o && t._UZ(0, "router-outlet")
                    },
                    dependencies: [s.lC]
                })
            }
            return e
        }
        )();
        var f = i(6733);
        let L = ( () => {
            class e {
                static #t = this.ɵfac = function(o) {
                    return new (o || e)
                }
                ;
                static #e = this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-nav-bar"]],
                    decls: 4,
                    vars: 0,
                    consts: [[1, "pc-header"], [1, "header-wrapper"]],
                    template: function(o, a) {
                        1 & o && (t.TgZ(0, "mat-toolbar", 0)(1, "div", 1),
                        t._UZ(2, "app-nav-left")(3, "app-nav-right"),
                        t.qZA()())
                    },
                    styles: [".pc-header{min-height:0;box-shadow:none;z-index:1025;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);position:static}  .pc-header .header-wrapper{box-shadow:0 1px #eae9e9;display:flex;justify-content:space-between;padding:0 10px;flex-grow:1;height:100%;align-items:center;line-height:1;background-color:#f8f9fa}  .pc-header .header-button{display:inline-flex;align-items:center}  .pc-header .header-button button{padding:0;border-radius:8px}  .pc-header .header-button button .mdc-button__label,   .pc-header .header-button button .pc-head-link{margin:0;width:100%;height:100%}  .pc-header .header-button button .mdc-button__label{display:flex;justify-content:center;align-items:center}  .pc-header .header-button button .mat-badge{width:46px;height:46px;overflow:visible}  .pc-header .header-button button .mat-badge .mat-badge-content{right:auto!important;top:3px!important;min-width:18px;height:18px;line-height:8px;font-size:9px;z-index:5;font-weight:400;width:auto;padding:5px;left:24px;font-family:Inter var,sans-serif}  .pc-header .header-button button .mat-badge:before{content:none}  .pc-header .header-item{min-height:54px;display:flex;align-items:center;position:relative}  .pc-header .header-item.mdc-button{min-width:54px}  .pc-header .pc-head-link{margin:0 4px;position:relative;display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px}  .pc-header .pc-head-link>svg,   .pc-header .pc-head-link>i{position:relative;color:var(--accent-600)}  .pc-header .pc-head-link>i{font-size:24px}  .pc-header .pc-head-link>svg{width:24px;height:24px}  .pc-header .pc-head-link:focus,   .pc-header .pc-head-link:hover{text-decoration:none;color:var(--accent-600)}  .pc-header .pc-head-link:focus>svg,   .pc-header .pc-head-link:focus>i,   .pc-header .pc-head-link:hover>svg,   .pc-header .pc-head-link:hover>i{color:var(--accent-600);transform:scale(1.08)}"]
                })
            }
            return e
        }
        )();
        var y = i(5333)
          , T = i(8748)
          , x = i(1749)
          , D = i(4217)
          , S = i(5526)
          , j = i(5191);
        function I(e, l) {
            if (1 & e && (t.TgZ(0, "span", 9),
            t._uU(1),
            t.qZA()),
            2 & e) {
                const n = t.oxw().$implicit;
                t.Q6J("ngClass", "navigation-item-" + n.path),
                t.xp6(1),
                t.Oqu(n.title)
            }
        }
        function M(e, l) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "a", 10),
                t.NdJ("click", function(a) {
                    t.CHM(n);
                    const h = t.oxw().$implicit
                      , m = t.oxw();
                    return t.KtG(m.navigate(a, h))
                }),
                t._uU(1),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw().$implicit;
                t.Q6J("ngClass", "navigation-item-" + n.path),
                t.uIk("data-label", n.title),
                t.xp6(1),
                t.Oqu(n.title)
            }
        }
        function C(e, l) {
            if (1 & e && (t.ynx(0),
            t.YNc(1, I, 2, 2, "span", 7),
            t.YNc(2, M, 2, 3, "ng-template", null, 8, t.W1O),
            t.BQk()),
            2 & e) {
                const n = l.$implicit
                  , o = t.MAs(3);
                t.xp6(1),
                t.Q6J("ngIf", n.lastChild)("ngIfElse", o)
            }
        }
        function v(e, l) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "button", 11),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const a = t.oxw();
                    return t.KtG(a.goBackToPreviousPage())
                }),
                t.TgZ(1, "span", 2),
                t.O4$(),
                t.TgZ(2, "svg", 12),
                t._UZ(3, "path", 13)(4, "path", 14),
                t.qZA()()()
            }
            if (2 & e) {
                const n = t.oxw();
                t.Q6J("matTooltip", n.navigationList.length > 1 ? n.navigationList[n.navigationList.length - 2].title : "")
            }
        }
        let k = ( () => {
            class e {
                constructor(n, o, a) {
                    this.layoutService = n,
                    this.router = o,
                    this.activatedRoute = a,
                    this.onDestroy$ = new T.x,
                    this.navigationList = [],
                    this.handleUpdateNavigation = {
                        add: m => {
                            this.navigationList.map(E => (E.lastChild = !1,
                            E)),
                            this.navigationList.push({
                                ...m,
                                lastChild: !0
                            })
                        }
                        ,
                        remove: m => {
                            const E = this.navigationList.filter(K => K.path !== m.path);
                            this.navigationList = E.map( (K, it) => (K.lastChild = it === E.length - 1,
                            K))
                        }
                    };
                    const h = this.activatedRoute.routeConfig.children;
                    this.router.events.pipe((0,
                    y.h)(m => m instanceof s.m2), (0,
                    x.R)(this.onDestroy$)).subscribe(m => {
                        const E = m.urlAfterRedirects.split("?")[0].split(";")[0].replace("/dashboard/", "");
                        if (E) {
                            const K = E.split("/").map(it => it ? it.trim() : "").filter(Boolean);
                            try {
                                const it = h.find(dt => "dashboard" === dt.path)._loadedRoutes.reduce( (dt, W) => {
                                    if (W.path === K[0])
                                        if (K.length > 1) {
                                            const pt = W._loadedRoutes?.length ? W._loadedRoutes : [];
                                            dt = pt.length ? pt.reduce( (Ve, Ut) => (Ut.path === K[1] && (Ve = {
                                                title: Ut.data && Ut.data.title || "",
                                                path: Ut.path,
                                                lastChild: !0
                                            }),
                                            Ve), {
                                                title: W.data && W.data.title || "",
                                                path: W.path,
                                                lastChild: !0
                                            }) : {
                                                title: W.data && W.data.title || "",
                                                path: W.path,
                                                lastChild: !0
                                            }
                                        } else
                                            dt = {
                                                title: W.data && W.data.title || "",
                                                path: W.path,
                                                lastChild: !0
                                            };
                                    return dt
                                }
                                , null);
                                this.navigationList = [it]
                            } catch {}
                        }
                    }
                    )
                }
                toggleMenu() {
                    this.layoutService.toggleSideDrawer()
                }
                ngOnDestroy() {
                    this.onDestroy$.next(""),
                    this.onDestroy$.complete()
                }
                ngOnInit() {
                    this.layoutService.onTopBarNavigationUpdate.pipe().subscribe( ({name: n, item: o}) => this.handleUpdateNavigation[n](o))
                }
                navigate(n, o) {
                    n.preventDefault(),
                    n.stopPropagation(),
                    this.layoutService.topBarNavigationClick(o)
                }
                goBackToPreviousPage() {
                    this.layoutService.goBackToPreviousPage("")
                }
                static #t = this.ɵfac = function(o) {
                    return new (o || e)(t.Y36(D.P),t.Y36(s.F0),t.Y36(s.gz))
                }
                ;
                static #e = this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-nav-left"]],
                    decls: 7,
                    vars: 2,
                    consts: [[1, "header-button"], ["mat-button", "", 1, "header-item", "sidebar-collapse", 3, "click"], [1, "pc-head-link"], [1, "ti", "ti-align-justified"], [1, "header-button__feature", "d-flex", "align-items-center"], [4, "ngFor", "ngForOf"], ["mat-button", "", "matTooltipClass", "lesson-rating__hint --fs-13", "matTooltipPosition", "left", "class", "header-item header-item--button-back-forward sidebar-collapse", 3, "matTooltip", "click", 4, "ngIf"], ["class", "header-button__feature__node", 3, "ngClass", 4, "ngIf", "ngIfElse"], ["tplLastChild", ""], [1, "header-button__feature__node", 3, "ngClass"], ["href", "#", 1, "header-button__feature__node", 3, "ngClass", "click"], ["mat-button", "", "matTooltipClass", "lesson-rating__hint --fs-13", "matTooltipPosition", "left", 1, "header-item", "header-item--button-back-forward", "sidebar-collapse", 3, "matTooltip", "click"], ["height", "512", "viewBox", "0 0 512 512", "width", "512", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m256 6c138.1 0 250 111.9 250 250 0 138.1-111.9 250-250 250-138.1 0-250-111.9-250-250 0-138.1 111.9-250 250-250z", "fill", "#5b6b79"], ["d", "m377 241.4-86 74.3c-7.5 6.5-19.4 1.3-19.4-8.9v-42.9c-75.7 1.1-108.4 19.9-86.2 90.7 2.5 7.8-7 14-13.7 9.1-21.3-15.5-40.7-45.2-40.7-75.2 0-74.3 62.2-90.1 140.6-91v-39.1c0-10.1 11.9-15.4 19.4-8.9l86 74.2c5.3 4.7 5.3 13 0 17.7z", "fill", "#fff"]],
                    template: function(o, a) {
                        1 & o && (t.TgZ(0, "div", 0)(1, "button", 1),
                        t.NdJ("click", function() {
                            return a.toggleMenu()
                        }),
                        t.TgZ(2, "span", 2),
                        t._UZ(3, "i", 3),
                        t.qZA()(),
                        t.TgZ(4, "nav", 4),
                        t.YNc(5, C, 4, 2, "ng-container", 5),
                        t.qZA(),
                        t.YNc(6, v, 5, 1, "button", 6),
                        t.qZA()),
                        2 & o && (t.xp6(5),
                        t.Q6J("ngForOf", a.navigationList),
                        t.xp6(1),
                        t.Q6J("ngIf", a.navigationList.length > 1))
                    },
                    dependencies: [f.mk, f.sg, f.O5, S.lW, j.gM],
                    styles: ['.sidebar-collapse[_ngcontent-%COMP%]{width:45px;min-width:45px!important;height:45px;min-height:45px}.sidebar-collapse[_ngcontent-%COMP%]:not(:hover){background-color:#e9e9e9}  .dropdown-item-search{min-width:20rem!important;border-radius:8px}  .dropdown-item-search .mat-mdc-form-field-subscript-wrapper{display:none!important}  .dropdown-item-search .mdc-text-field--filled:not(.mdc-text-field--disabled){--accent-200: transparent}  .dropdown-item-search .mdc-text-field{position:inherit;will-change:inherit}  .dropdown-item-search .drp-search{padding:8px 16px}  .dropdown-item-search .mat-mdc-menu-content{--mat-menu-item-label-text-font: "Roboto", sans-serif;--mat-menu-item-label-text-size: 14px;--mat-menu-item-label-text-tracking: normal;--mat-menu-item-label-text-line-height: 1.5;--mat-menu-item-label-text-weight: 400;--mat-form-field-container-text-font: "Roboto", sans-serif;--mat-form-field-container-text-line-height: 1.5;--mat-form-field-container-text-size: 14px;--mat-form-field-container-text-tracking: normal;--mat-form-field-container-text-weight: 400;padding:0}  .dropdown-item-search .mat-mdc-form-field-focus-overlay{background-color:transparent}']
                })
            }
            return e
        }
        )();
        var B = i(3562)
          , w = i(5646)
          , Z = i(2939)
          , V = i(2425)
          , ot = i(1925)
          , Y = i(4989)
          , z = i(1367);
        let at = ( () => {
            class e {
                constructor(n) {
                    this.http = n,
                    this.api = "".concat(w.NZ.deploy.api, "orders/")
                }
                listOrders(n, o, a, h="") {
                    const m = {
                        limit: o,
                        paged: n,
                        order: "DESC",
                        orderby: "created_at"
                    };
                    h && (m.select = h);
                    const E = (0,
                    Y.Cn)([{
                        conditionName: "created_by",
                        condition: z.z.equal,
                        value: a.toString(10)
                    }], new Z.LE({
                        fromObject: m
                    }));
                    return this.http.get(this.api, {
                        params: E
                    }).pipe((0,
                    V.U)(K => (0,
                    z.q)(K, o)))
                }
                get(n) {
                    return this.http.get("".concat(this.api, n.toString(10))).pipe((0,
                    V.U)(o => o.data))
                }
                create(n) {
                    const o = n.filter(a => a.course).map(a => a.course.id);
                    return this.http.post("".concat(this.api, "checkout"), {
                        course_ids: o
                    }).pipe((0,
                    V.U)(a => a.data))
                }
                createTest(n) {
                    return (0,
                    ot.H)(2e3).pipe((0,
                    V.U)( () => ({
                        id: 52,
                        user_id: 5011437,
                        donvi_id: 0,
                        products: {
                            9: {
                                id: 9,
                                donvi_id: 100,
                                title: "Thành thạo Excel 2010",
                                price: 2e5,
                                course_ids: [9],
                                sale_price: 2200,
                                coupon: "",
                                coupon_price: 0,
                                date_end: "2024-04-11"
                            },
                            12: {
                                id: 12,
                                donvi_id: 103,
                                title: "TỔNG HỢP VỀ KIỂM KÊ KHÍ NHÀ KÍNH",
                                price: 3e6,
                                course_ids: [12],
                                sale_price: 499999,
                                coupon: "",
                                coupon_price: 0,
                                date_end: "2024-04-11"
                            },
                            13: {
                                id: 13,
                                donvi_id: 103,
                                title: "KIỂM KÊ KHÍ NHÀ KÍNH CHUYÊN SÂU NGÀNH DỆT MAY",
                                price: 4e6,
                                course_ids: [13],
                                sale_price: 999999,
                                coupon: "",
                                coupon_price: 0,
                                date_end: "2024-04-11"
                            }
                        },
                        price: 1502198,
                        total: 0,
                        note: "",
                        updated_by: 5011437,
                        created_by: 5011437,
                        status: 0,
                        created_at: "2024-04-11T09:26:00.245Z",
                        updated_at: "2024-04-11T09:26:00.245Z"
                    })))
                }
                addCoupon(n, o) {
                    const a = new Z.LE({
                        fromObject: {
                            code: o
                        }
                    });
                    return this.http.get("".concat(this.api, n.toString(10), "/coupon"), {
                        params: a
                    }).pipe((0,
                    V.U)(h => h.data))
                }
                deleteCoupon(n, o) {
                    return new Z.LE({
                        fromObject: {
                            code: o
                        }
                    }),
                    this.http.delete("".concat(this.api, n.toString(10), "/coupon")).pipe((0,
                    V.U)(h => h.data))
                }
                getUrlPayOsPayment(n, o) {
                    const h = new Z.LE({
                        fromObject: {
                            returnUrl: o
                        }
                    });
                    return this.http.get("".concat(this.api, n.toString(), "/create-payment-url"), {
                        params: h
                    }).pipe((0,
                    V.U)(m => m.data))
                }
                validPayment(n) {
                    const o = new Z.LE({
                        fromString: n
                    });
                    return this.http.get("".concat(this.api, "return"), {
                        params: o
                    }).pipe((0,
                    V.U)(a => "success" === a.code))
                }
                static #t = this.ɵfac = function(o) {
                    return new (o || e)(t.LFG(Z.eN))
                }
                ;
                static #e = this.ɵprov = t.Yz7({
                    token: e,
                    factory: e.ɵfac,
                    providedIn: "any"
                })
            }
            return e
        }
        )()
          , P = ( () => {
            class e {
                constructor(n, o, a, h) {
                    this.notification = n,
                    this.layoutService = o,
                    this.router = a,
                    this.ordersService = h,
                    this.displayName = "unknown",
                    this.email = "unknown",
                    this.avatar = "assets/images/user/avatar-2.jpg",
                    this.onDestroy$ = new T.x,
                    this.state = "loading",
                    this.featureName = ""
                }
                confirmSignOut() {
                    this.notification.confirmSignOut()
                }
                ngOnDestroy() {
                    this.onDestroy$.next(""),
                    this.onDestroy$.complete()
                }
                preventCloseMenuOnClick(n) {
                    n.stopPropagation(),
                    n.preventDefault()
                }
                openSidebar() {
                    this.layoutService.openRightSidebar()
                }
                static #t = this.ɵfac = function(o) {
                    return new (o || e)(t.Y36(B.g),t.Y36(D.P),t.Y36(s.F0),t.Y36(at))
                }
                ;
                static #e = this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-nav-right"]],
                    decls: 1,
                    vars: 0,
                    consts: [[1, "header-button"]],
                    template: function(o, a) {
                        1 & o && t._UZ(0, "div", 0)
                    },
                    styles: [".dropdown-notification{min-width:450px!important;max-width:100%!important}  .dropdown-notification .topic-icon .pc-icon{width:22px;height:22px}  .dropdown-notification .topic-description .mdc-button{border-radius:20px}  .dropdown-notification .notification-card:hover{background:var(--accent-200);cursor:pointer}  .dropdown-notification .mini-cart-item:hover{cursor:text}  .dropdown-user-profile{min-width:352px!important;max-width:100%!important}  .dropdown-user-profile .user-title{font-size:16px!important;font-weight:600!important;margin:0!important}  .dropdown-user-profile .user-name{font-weight:600!important;margin:0!important}  .dropdown-user-profile .topbar-right-menu-active{color:var(--accent-900);background:var(--accent-200);border-color:var(--accent-200)}  .dropdown-user-profile .dropdown-item{display:flex;padding:10px 15px;align-items:center;border-radius:8px}  .dropdown-user-profile .dropdown-item:hover,   .dropdown-user-profile .dropdown-item:focus{color:var(--accent-900);background:var(--accent-300);border-color:var(--accent-300)}  .dropdown-user-profile .dropdown-item .pc-icon{width:18px;height:18px}  .dropdown-user-profile .user-group .avatar{width:30px;height:30px;font-size:14px}  .dropdown-user-profile .user-logout.mdc-button{border-radius:999px}  .dropdown-user-profile .user-followers{margin:16px 0;color:#8996a4}  .dropdown-user-profile .upgrade-button{background:#e58a00!important;color:#f3f5f7!important}  .dropdown-user-profile .upgrade-button.mdc-button{border-radius:20px}.dropdown-header[_ngcontent-%COMP%], .dropdown-body[_ngcontent-%COMP%]{padding:15px 20px}@media only screen and (max-width: 1024px){.pc-header[_ngcontent-%COMP%]{left:0;top:0}}@media (max-width: 575.98px){.pc-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]{padding:10px}.pc-header[_ngcontent-%COMP%]   .pc-head-link[_ngcontent-%COMP%]{margin:0}.pc-header[_ngcontent-%COMP%]   .header-item.mdc-button[_ngcontent-%COMP%]{min-width:50px;padding:0}.pc-header[_ngcontent-%COMP%]   .mdc-button[_ngcontent-%COMP%]{min-width:0!important}.pc-header[_ngcontent-%COMP%]   .mat-drawer-content[_ngcontent-%COMP%]   .app-container[_ngcontent-%COMP%]{padding:15px}  .dropdown-notification{min-width:350px!important}}.bn-logout[_ngcontent-%COMP%]{padding:3px 0}.bn-logout[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:15px;height:auto;margin:0 5px 3px 0;fill:currentColor}.dropdown-body__wrap-loading-progress-bar[_ngcontent-%COMP%]{width:100%;--app-loading-progress-bar-overlay: transparent}.dropdown-body__wrap-loading-progress-bar[_ngcontent-%COMP%]   .ictu-indicator-loading-panel[_ngcontent-%COMP%]{box-shadow:none;min-height:auto;padding:0 20px 30px}.notice-server-connection-failed[_ngcontent-%COMP%]{max-width:450px;padding:15px 20px}.notice-server-connection-failed[_ngcontent-%COMP%]   .notice-server-connection-failed__heading[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.content-dropdown__inner[_ngcontent-%COMP%]{min-height:50px;--max-element-height: 0;height:var(--max-element-height);transition:height .35s ease-out}.wrap-mini-cart__head[_ngcontent-%COMP%]{border-bottom:1px solid #ededed}.wrap-mini-cart__head__badge[_ngcontent-%COMP%]{background-color:#3b82f6;color:#fff;font-family:var(--primary-font),sans-serif;font-size:10px;font-weight:500;line-height:1;display:inline-flex;--mini-cart-badge-size: 19px;min-width:var(--mini-cart-badge-size);height:var(--mini-cart-badge-size);border-radius:99px;justify-content:center;align-items:center;padding:0 3px;margin:0 0 0 5px}.dropdown-footer[_ngcontent-%COMP%]   .theme-button-2[_ngcontent-%COMP%]{--theme-button-icon-font-size: 20px;display:flex;justify-content:center;align-items:flex-end;line-height:1;font-size:15px;margin:15px 0 0;padding:10px;border-radius:999px;box-shadow:none!important;outline:none!important}.mini-cart-item__thumb[_ngcontent-%COMP%]{width:100px;border-radius:3px;margin:0;overflow:hidden}.mini-cart-item__thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto;margin:0}.mini-cart-item__title[_ngcontent-%COMP%]{line-height:1.2;word-break:break-word;margin:0;color:inherit}.mini-cart-item__link-title[_ngcontent-%COMP%]:hover{color:var(--bs-primary)!important}.mini-cart-item__inner__trash[_ngcontent-%COMP%]{width:40px;display:inline-flex;min-width:40px;align-items:center;justify-content:flex-end;padding:10px 0 0}.mini-cart-item__inner__trash__button[_ngcontent-%COMP%]{width:32px;height:32px;display:inline-flex;padding:0;margin:0;justify-content:center;align-items:center;border-radius:18px;background-color:#b9c0c6;border:none!important;box-shadow:none!important;outline:none!important;color:#585c5e;--theme-button-icon-font-size: 17px;opacity:.5}.mini-cart-item__inner__trash__button[_ngcontent-%COMP%]:focus{color:#585c5e;background-color:#b9c0c6;opacity:1}.mini-cart-item__inner__trash__button[_ngcontent-%COMP%]:hover{color:#fff;background-color:#ff3e30;opacity:1}app-card[_ngcontent-%COMP%]{display:block}app-card[_ngcontent-%COMP%] + app-card[_ngcontent-%COMP%]{margin-top:15px}"]
                })
            }
            return e
        }
        )();
        var F = i(8524)
          , q = i(3965);
        t.B6R(L, [q.Ye, k, P], []);
        var R = i(2405)
          , lt = i(2333)
          , N = i(1458)
          , rt = i(1994)
          , ht = i(887);
        function Q(e, l) {
            if (1 & e && (t.TgZ(0, "span", 5),
            t.O4$(),
            t.TgZ(1, "svg", 6),
            t._UZ(2, "use"),
            t.qZA()()),
            2 & e) {
                const n = t.oxw(2);
                t.xp6(2),
                t.uIk("href", "assets/fonts/custom-icon.svg" + n.item.customSvg, null, "xlink")
            }
        }
        function nt(e, l) {
            if (1 & e && t._UZ(0, "i"),
            2 & e) {
                const n = t.oxw(2);
                t.Tol(n.item.icon)
            }
        }
        function ct(e, l) {
            if (1 & e && (t.ynx(0),
            t.YNc(1, Q, 3, 1, "span", 3),
            t.YNc(2, nt, 1, 2, "ng-template", null, 4, t.W1O),
            t.BQk()),
            2 & e) {
                const n = t.MAs(3)
                  , o = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", o.item.customSvg)("ngIfElse", n)
            }
        }
        function st(e, l) {
            if (1 & e && t._UZ(0, "app-menu-group-vertical", 8),
            2 & e) {
                const n = t.oxw().$implicit;
                t.Q6J("item", n)
            }
        }
        function g(e, l) {
            if (1 & e && t._UZ(0, "app-menu-collapse", 8),
            2 & e) {
                const n = t.oxw().$implicit;
                t.Q6J("item", n)
            }
        }
        function c(e, l) {
            if (1 & e && t._UZ(0, "app-menu-item", 8),
            2 & e) {
                const n = t.oxw().$implicit;
                t.Q6J("item", n)
            }
        }
        function _(e, l) {
            if (1 & e && (t.ynx(0),
            t.YNc(1, st, 1, 1, "app-menu-group-vertical", 7),
            t.YNc(2, g, 1, 1, "app-menu-collapse", 7),
            t.YNc(3, c, 1, 1, "app-menu-item", 7),
            t.BQk()),
            2 & e) {
                const n = l.$implicit;
                t.xp6(1),
                t.Q6J("ngIf", "group" === n.type),
                t.xp6(1),
                t.Q6J("ngIf", "collapse" === n.type),
                t.xp6(1),
                t.Q6J("ngIf", "item" === n.type)
            }
        }
        let b = ( () => {
            class e {
                constructor(n, o) {
                    this.location = n,
                    this.locationStrategy = o
                }
                ngOnInit() {
                    let n = this.location.path();
                    const o = this.locationStrategy.getBaseHref();
                    o && (n = o + this.location.path());
                    const h = document.querySelector("a.nav-link[ href='" + n + "' ]");
                    if (null != h) {
                        const m = h.parentElement
                          , E = m?.parentElement?.parentElement
                          , K = E?.parentElement;
                        m?.classList.contains("coded-hasmenu") ? (m.classList.add("coded-trigger"),
                        m.classList.add("active")) : E?.classList.contains("coded-hasmenu") ? (E.classList.add("coded-trigger"),
                        E.classList.add("active")) : K?.classList.contains("coded-hasmenu") && (K.classList.add("coded-trigger"),
                        K.classList.add("active"))
                    }
                }
                static #t = this.ɵfac = function(o) {
                    return new (o || e)(t.Y36(f.Ye),t.Y36(f.S$))
                }
                ;
                static #e = this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-menu-group-vertical"]],
                    inputs: {
                        item: "item"
                    },
                    decls: 5,
                    vars: 3,
                    consts: [[1, "nav-item", "coded-menu-caption"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "coded-micon", 4, "ngIf", "ngIfElse"], ["iconFontTemplate", ""], [1, "coded-micon"], [1, "pc-icon"], [3, "item", 4, "ngIf"], [3, "item"]],
                    template: function(o, a) {
                        1 & o && (t.TgZ(0, "li", 0)(1, "label"),
                        t.YNc(2, ct, 4, 2, "ng-container", 1),
                        t._uU(3),
                        t.qZA()(),
                        t.YNc(4, _, 4, 3, "ng-container", 2)),
                        2 & o && (t.xp6(2),
                        t.Q6J("ngIf", a.item.icon || a.item.customSvg),
                        t.xp6(1),
                        t.hij(" ", a.item.title, " "),
                        t.xp6(1),
                        t.Q6J("ngForOf", a.item.children))
                    }
                })
            }
            return e
        }
        )();
        function O(e, l) {
            if (1 & e && (t.TgZ(0, "span", 9),
            t.O4$(),
            t.TgZ(1, "svg", 10),
            t._UZ(2, "use"),
            t.qZA()()),
            2 & e) {
                const n = t.oxw(3);
                t.xp6(2),
                t.uIk("href", "assets/fonts/custom-icon.svg" + n.item.customSvg, null, "xlink")
            }
        }
        function U(e, l) {
            if (1 & e && t._UZ(0, "i"),
            2 & e) {
                const n = t.oxw(3);
                t.Tol(n.item.icon)
            }
        }
        function G(e, l) {
            if (1 & e && (t.ynx(0),
            t.YNc(1, O, 3, 1, "span", 6),
            t.YNc(2, U, 1, 2, "ng-template", null, 7, t.W1O),
            t.TgZ(4, "span", 8),
            t._uU(5),
            t.qZA(),
            t.BQk()),
            2 & e) {
                const n = t.MAs(3)
                  , o = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", o.item.customSvg)("ngIfElse", n),
                t.xp6(3),
                t.uIk("data-label", o.item.label),
                t.xp6(1),
                t.Oqu(o.item.title)
            }
        }
        function $(e, l) {
            if (1 & e && t._uU(0),
            2 & e) {
                const n = t.oxw(2);
                t.Oqu(n.item.title)
            }
        }
        const tt = function() {
            return ["active"]
        }
          , Ye = function(e) {
            return [e]
        };
        function Qe(e, l) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "li", 2)(1, "a", 3),
                t.NdJ("click", function(a) {
                    t.CHM(n);
                    const h = t.oxw();
                    return t.KtG(h.toggleMenu(a))
                }),
                t.YNc(2, G, 6, 4, "ng-container", 4),
                t.YNc(3, $, 1, 1, "ng-template", null, 5, t.W1O),
                t.qZA()()
            }
            if (2 & e) {
                const n = t.MAs(4)
                  , o = t.oxw();
                t.Q6J("ngClass", o.item.classes)("routerLinkActive", t.DdM(6, tt)),
                t.xp6(1),
                t.Q6J("target", o.item.target ? "_blank" : "_self")("routerLink", t.VKq(7, Ye, o.item.url)),
                t.xp6(1),
                t.Q6J("ngIf", o.item.icon || o.item.customSvg)("ngIfElse", n)
            }
        }
        function Je(e, l) {
            if (1 & e && (t.TgZ(0, "span", 9),
            t.O4$(),
            t.TgZ(1, "svg", 10),
            t._UZ(2, "use"),
            t.qZA()()),
            2 & e) {
                const n = t.oxw(3);
                t.xp6(2),
                t.uIk("href", "assets/fonts/custom-icon.svg" + n.item.customSvg, null, "xlink")
            }
        }
        function Ge(e, l) {
            if (1 & e && t._UZ(0, "i"),
            2 & e) {
                const n = t.oxw(3);
                t.Tol(n.item.icon)
            }
        }
        function $e(e, l) {
            if (1 & e && (t.ynx(0),
            t.YNc(1, Je, 3, 1, "span", 6),
            t.YNc(2, Ge, 1, 2, "ng-template", null, 7, t.W1O),
            t.TgZ(4, "span", 8),
            t._uU(5),
            t.qZA(),
            t.BQk()),
            2 & e) {
                const n = t.MAs(3)
                  , o = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", o.item.customSvg)("ngIfElse", n),
                t.xp6(3),
                t.uIk("data-label", o.item.label),
                t.xp6(1),
                t.Oqu(o.item.title)
            }
        }
        function Xe(e, l) {
            if (1 & e && t._uU(0),
            2 & e) {
                const n = t.oxw(2);
                t.Oqu(n.item.title)
            }
        }
        function qe(e, l) {
            if (1 & e && (t.TgZ(0, "li", 11)(1, "a", 12),
            t.YNc(2, $e, 6, 4, "ng-container", 4),
            t.YNc(3, Xe, 1, 1, "ng-template", null, 5, t.W1O),
            t.qZA()()),
            2 & e) {
                const n = t.MAs(4)
                  , o = t.oxw();
                t.Q6J("ngClass", o.item.classes),
                t.xp6(1),
                t.Q6J("target", o.item.target ? "_blank" : "_self")("href", o.sanitizeURL(o.item.url), t.LSH),
                t.xp6(1),
                t.Q6J("ngIf", o.item.icon || o.item.customSvg)("ngIfElse", n)
            }
        }
        function tn(e, l) {
            if (1 & e && (t.TgZ(0, "span", 9),
            t.O4$(),
            t.TgZ(1, "svg", 10),
            t._UZ(2, "use"),
            t.qZA()()),
            2 & e) {
                const n = t.oxw(3);
                t.xp6(2),
                t.uIk("href", "assets/fonts/custom-icon.svg" + n.item.customSvg, null, "xlink")
            }
        }
        function en(e, l) {
            if (1 & e && t._UZ(0, "i"),
            2 & e) {
                const n = t.oxw(3);
                t.Tol(n.item.icon)
            }
        }
        function nn(e, l) {
            if (1 & e && (t.ynx(0),
            t.YNc(1, tn, 3, 1, "span", 6),
            t.YNc(2, en, 1, 2, "ng-template", null, 7, t.W1O),
            t.TgZ(4, "span", 8),
            t._uU(5),
            t.qZA(),
            t.BQk()),
            2 & e) {
                const n = t.MAs(3)
                  , o = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", o.item.customSvg)("ngIfElse", n),
                t.xp6(3),
                t.uIk("data-label", o.item.label),
                t.xp6(1),
                t.Oqu(o.item.title)
            }
        }
        function on(e, l) {
            if (1 & e && t._uU(0),
            2 & e) {
                const n = t.oxw(2);
                t.Oqu(n.item.title)
            }
        }
        function an(e, l) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "li", 11)(1, "a", 13),
                t.NdJ("click", function(a) {
                    t.CHM(n);
                    const h = t.oxw();
                    return t.KtG(h.clickMenuItem(a, h.item))
                }),
                t.YNc(2, nn, 6, 4, "ng-container", 4),
                t.YNc(3, on, 1, 1, "ng-template", null, 5, t.W1O),
                t.qZA()()
            }
            if (2 & e) {
                const n = t.MAs(4)
                  , o = t.oxw();
                t.Q6J("ngClass", o.item.classes),
                t.xp6(2),
                t.Q6J("ngIf", o.item.icon || o.item.customSvg)("ngIfElse", n)
            }
        }
        let jt = ( () => {
            class e {
                constructor(n, o) {
                    this.layoutService = n,
                    this.sanitizer = o
                }
                toggleMenu(n) {
                    window.innerWidth < 1025 && this.layoutService.toggleSideDrawer();
                    const o = n.target;
                    if (null != o) {
                        const a = o.parentElement
                          , h = a.parentElement.parentElement.parentElement
                          , m = h.parentElement
                          , E = document.querySelectorAll(".coded-hasmenu");
                        for (let K = 0; K < E.length; K++)
                            E[K].classList.remove("active"),
                            E[K].classList.remove("coded-trigger");
                        a.classList.contains("coded-hasmenu") ? (a.classList.add("coded-trigger"),
                        a.classList.add("active")) : h.classList.contains("coded-hasmenu") ? (h.classList.add("coded-trigger"),
                        h.classList.add("active")) : m?.classList.contains("coded-hasmenu") && (m.classList.add("coded-trigger"),
                        m.classList.add("active"))
                    }
                }
                sanitizeURL(n) {
                    return this.sanitizer.bypassSecurityTrustUrl(n)
                }
                clickMenuItem(n, o) {
                    n.preventDefault(),
                    n.stopPropagation(),
                    o.action && o.action(o)
                }
                static #t = this.ɵfac = function(o) {
                    return new (o || e)(t.Y36(D.P),t.Y36(u.H7))
                }
                ;
                static #e = this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-menu-item"]],
                    inputs: {
                        item: "item"
                    },
                    decls: 3,
                    vars: 3,
                    consts: [[3, "ngClass", "routerLinkActive", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [3, "ngClass", "routerLinkActive"], [1, "nav-link", 3, "target", "routerLink", "click"], [4, "ngIf", "ngIfElse"], ["directTitle", ""], ["class", "coded-micon", 4, "ngIf", "ngIfElse"], ["iconFontTemplate", ""], [1, "coded-mtext", "--ictu-menu-label--feature"], [1, "coded-micon"], [1, "pc-icon"], [3, "ngClass"], [3, "target", "href"], ["href", "#", 3, "click"]],
                    template: function(o, a) {
                        1 & o && (t.YNc(0, Qe, 5, 9, "li", 0),
                        t.YNc(1, qe, 5, 5, "li", 1),
                        t.YNc(2, an, 5, 3, "li", 1)),
                        2 & o && (t.Q6J("ngIf", a.item.url && !a.item.external),
                        t.xp6(1),
                        t.Q6J("ngIf", a.item.url && a.item.external),
                        t.xp6(1),
                        t.Q6J("ngIf", !a.item.url))
                    },
                    dependencies: [f.mk, f.O5, s.rH, s.Od],
                    styles: [".--ictu-menu-label--feature[data-label][_ngcontent-%COMP%]:after{content:attr(data-label);position:absolute;opacity:1!important;top:-6px;background:#385bce!important;color:#fff;padding:2px 5px;font-size:10px;text-align:center;text-transform:uppercase;border-radius:4px 4px 4px 0;line-height:1.3;left:calc(100% + 5px)}"]
                })
            }
            return e
        }
        )();
        function rn(e, l) {
            if (1 & e && (t.TgZ(0, "span", 6),
            t.O4$(),
            t.TgZ(1, "svg", 7),
            t._UZ(2, "use"),
            t.qZA()()),
            2 & e) {
                const n = t.oxw();
                t.xp6(2),
                t.uIk("href", "assets/fonts/custom-icon.svg" + n.item.customSvg)
            }
        }
        function sn(e, l) {
            if (1 & e && t._UZ(0, "app-menu-group-vertical", 9),
            2 & e) {
                const n = t.oxw().$implicit;
                t.Q6J("item", n)
            }
        }
        function cn(e, l) {
            if (1 & e && t._UZ(0, "app-menu-collapse", 9),
            2 & e) {
                const n = t.oxw().$implicit;
                t.Q6J("item", n)
            }
        }
        function ln(e, l) {
            if (1 & e && t._UZ(0, "app-menu-item", 9),
            2 & e) {
                const n = t.oxw().$implicit;
                t.Q6J("item", n)
            }
        }
        function dn(e, l) {
            if (1 & e && (t.ynx(0),
            t.YNc(1, sn, 1, 1, "app-menu-group-vertical", 8),
            t.YNc(2, cn, 1, 1, "app-menu-collapse", 8),
            t.YNc(3, ln, 1, 1, "app-menu-item", 8),
            t.BQk()),
            2 & e) {
                const n = l.$implicit;
                t.xp6(1),
                t.Q6J("ngIf", "group" === n.type),
                t.xp6(1),
                t.Q6J("ngIf", "collapse" === n.type),
                t.xp6(1),
                t.Q6J("ngIf", "item" === n.type)
            }
        }
        const Rt = function() {
            return ["active"]
        };
        let he = ( () => {
            class e {
                navCollapse(n) {
                    let o = n.target;
                    o = o.parentElement;
                    const a = document.querySelectorAll(".coded-hasmenu");
                    for (let E = 0; E < a.length; E++)
                        a[E] !== o && a[E].classList.remove("coded-trigger");
                    let h = o.parentElement
                      , m = o.parentElement.parentElement;
                    if (h?.classList.contains("coded-hasmenu"))
                        do {
                            h?.classList.add("coded-trigger"),
                            h = h.parentElement.parentElement.parentElement
                        } while (h?.classList.contains("coded-hasmenu"));
                    else if (m.classList.contains("coded-submenu"))
                        do {
                            m?.parentElement?.classList.add("coded-trigger"),
                            m = m.parentElement.parentElement.parentElement
                        } while (m.classList.contains("coded-submenu"));
                    o.classList.toggle("coded-trigger")
                }
                static #t = this.ɵfac = function(o) {
                    return new (o || e)
                }
                ;
                static #e = this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-menu-collapse"]],
                    inputs: {
                        item: "item"
                    },
                    decls: 7,
                    vars: 10,
                    consts: [["data-username", "able-pro dashboard", 1, "nav-item", "coded-hasmenu", 3, "routerLinkActive"], [1, "nav-link", 3, "routerLinkActive", "click"], ["class", "coded-micon", 4, "ngIf"], [1, "coded-mtext"], [1, "coded-submenu", 3, "routerLinkActive", "ngClass"], [4, "ngFor", "ngForOf"], [1, "coded-micon"], [1, "pc-icon"], [3, "item", 4, "ngIf"], [3, "item"]],
                    template: function(o, a) {
                        1 & o && (t.TgZ(0, "li", 0)(1, "a", 1),
                        t.NdJ("click", function(m) {
                            return a.navCollapse(m)
                        }),
                        t.YNc(2, rn, 3, 1, "span", 2),
                        t.TgZ(3, "span", 3),
                        t._uU(4),
                        t.qZA()(),
                        t.TgZ(5, "ul", 4),
                        t.YNc(6, dn, 4, 3, "ng-container", 5),
                        t.qZA()()),
                        2 & o && (t.Q6J("routerLinkActive", t.DdM(7, Rt)),
                        t.xp6(1),
                        t.Q6J("routerLinkActive", t.DdM(8, Rt)),
                        t.xp6(1),
                        t.Q6J("ngIf", a.item.customSvg),
                        t.xp6(2),
                        t.hij("", a.item.title, " "),
                        t.xp6(1),
                        t.Q6J("routerLinkActive", t.DdM(9, Rt))("ngClass", a.item.classes),
                        t.xp6(1),
                        t.Q6J("ngForOf", a.item.children))
                    },
                    dependencies: [f.mk, f.sg, f.O5, s.Od, e, b, jt],
                    data: {
                        animation: [(0,
                        R.X$)("slideInOut", [(0,
                        R.eR)(":enter", [(0,
                        R.oB)({
                            transform: "translateY(-100%)",
                            display: "block"
                        }), (0,
                        R.jt)("250ms ease-in", (0,
                        R.oB)({
                            transform: "translateY(0%)"
                        }))]), (0,
                        R.eR)(":leave", [(0,
                        R.jt)("250ms ease-in", (0,
                        R.oB)({
                            transform: "translateY(-100%)"
                        }))])])]
                    }
                })
            }
            return e
        }
        )();
        var _e = i(1799);
        function pn(e, l) {
            if (1 & e && t._UZ(0, "app-menu-group-vertical", 24),
            2 & e) {
                const n = t.oxw().$implicit;
                t.Q6J("item", n)
            }
        }
        function un(e, l) {
            if (1 & e && t._UZ(0, "app-menu-collapse", 24),
            2 & e) {
                const n = t.oxw().$implicit;
                t.Q6J("item", n)
            }
        }
        function hn(e, l) {
            if (1 & e && t._UZ(0, "app-menu-item", 24),
            2 & e) {
                const n = t.oxw().$implicit;
                t.Q6J("item", n)
            }
        }
        function _n(e, l) {
            if (1 & e && (t.ynx(0),
            t.YNc(1, pn, 1, 1, "app-menu-group-vertical", 23),
            t.YNc(2, un, 1, 1, "app-menu-collapse", 23),
            t.YNc(3, hn, 1, 1, "app-menu-item", 23),
            t.BQk()),
            2 & e) {
                const n = l.$implicit;
                t.xp6(1),
                t.Q6J("ngIf", "group" === n.type),
                t.xp6(1),
                t.Q6J("ngIf", "collapse" === n.type),
                t.xp6(1),
                t.Q6J("ngIf", "item" === n.type)
            }
        }
        let ge = ( () => {
            class e {
                constructor(n, o, a, h, m) {
                    this.location = n,
                    this.locationStrategy = o,
                    this.notification = a,
                    this.layoutService = h,
                    this.auth = m,
                    this.userDisplay = "unknown",
                    this.studentCode = "",
                    this.avatar = "assets/images/user/avatar-2.jpg",
                    this.onDestroy$ = new T.x,
                    this.auth.onUserSetup.pipe((0,
                    x.R)(this.onDestroy$)).subscribe(E => {
                        this.userDisplay = E.display_name,
                        this.avatar = E.avatar,
                        this.studentCode = this.auth.student ? this.auth.student.student_code : ""
                    }
                    )
                }
                ngOnDestroy() {
                    this.onDestroy$.next(""),
                    this.onDestroy$.complete()
                }
                fireOutClick() {
                    let n = this.location.path();
                    const o = this.locationStrategy.getBaseHref();
                    o && (n = o + this.location.path());
                    const h = document.querySelector("a.nav-link[ href='" + n + "' ]");
                    if (null != h) {
                        const m = h.parentElement
                          , E = m?.parentElement?.parentElement
                          , K = E?.parentElement;
                        m?.classList.contains("coded-hasmenu") ? (m.classList.add("coded-trigger"),
                        m.classList.add("active")) : E?.classList.contains("coded-hasmenu") ? (E.classList.add("coded-trigger"),
                        E.classList.add("active")) : K?.classList.contains("coded-hasmenu") && (K.classList.add("coded-trigger"),
                        K.classList.add("active"))
                    }
                }
                confirmLogout() {
                    this.notification.confirmSignOut()
                }
                toggleMobileMenu(n) {
                    n && (n.preventDefault(),
                    n.stopPropagation()),
                    window.innerWidth < 1025 && this.layoutService.toggleSideDrawer()
                }
                static #t = this.ɵfac = function(o) {
                    return new (o || e)(t.Y36(f.Ye),t.Y36(f.S$),t.Y36(B.g),t.Y36(D.P),t.Y36(lt.e))
                }
                ;
                static #e = this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-vertical-menu"]],
                    inputs: {
                        menus: "menus"
                    },
                    decls: 37,
                    vars: 8,
                    consts: [["visibility", "hover", 2, "height", "calc(var(--max-screen-height, 100vh) - var(--pc-sidebar-m-header-height, 90px))"], ["cardClass", "user-card", 3, "showHeader", "padding"], [1, "flex", "align-items-center"], [1, "flex-shrink-0"], ["alt", "user-image", "width", "45", "height", "45", 1, "user-avatar", 3, "ngSrc"], [1, "flex-grow-1", "user-details"], [1, "user-setting"], ["href", "javascript:", 1, "text-muted", 3, "click"], [1, "pc-icon"], ["href", "assets/fonts/custom-icon.svg#custom-sort-outline"], ["collapseMenu", ""], [1, "pc-user-links__nav-list"], ["href", "javascript:", "routerLink", "dashboard/account", "routerLinkActive", "vertical-menu-active", 3, "click"], [1, "ti", "ti-user", "f-18", "m-r-10"], ["href", "javascript:", "routerLink", "dashboard/settings", "routerLinkActive", "vertical-menu-active", 3, "click"], [1, "ti", "ti-settings", "f-18", "m-r-10"], ["href", "javascript:", "routerLink", "dashboard/password", "routerLinkActive", "vertical-menu-active", 3, "click"], [1, "ti", "ti-lock", "f-18", "m-r-10"], ["href", "javascript:", 3, "click"], [1, "ti", "ti-power", "f-18", "m-r-10"], [1, "navbar-content"], [1, "nav", "coded-inner-navbar", 3, "click"], [4, "ngFor", "ngForOf"], [3, "item", 4, "ngIf"], [3, "item"]],
                    template: function(o, a) {
                        if (1 & o) {
                            const h = t.EpF();
                            t.TgZ(0, "ng-scrollbar", 0)(1, "app-card", 1)(2, "div", 2)(3, "div", 3),
                            t._UZ(4, "img", 4),
                            t.ALo(5, "safeUrl"),
                            t.qZA(),
                            t.TgZ(6, "div", 5)(7, "h6"),
                            t._uU(8),
                            t.qZA(),
                            t.TgZ(9, "small"),
                            t._uU(10),
                            t.qZA()(),
                            t.TgZ(11, "div", 6)(12, "a", 7),
                            t.NdJ("click", function() {
                                t.CHM(h);
                                const E = t.MAs(16);
                                return t.KtG(E.panel.toggle())
                            }),
                            t.O4$(),
                            t.TgZ(13, "svg", 8),
                            t._UZ(14, "use", 9),
                            t.qZA()()()(),
                            t.kcU(),
                            t.TgZ(15, "collapse-panel", null, 10)(17, "nav", 11)(18, "a", 12),
                            t.NdJ("click", function(E) {
                                return a.toggleMobileMenu(E)
                            }),
                            t._UZ(19, "i", 13),
                            t.TgZ(20, "span"),
                            t._uU(21, "Tài khoản"),
                            t.qZA()(),
                            t.TgZ(22, "a", 14),
                            t.NdJ("click", function(E) {
                                return a.toggleMobileMenu(E)
                            }),
                            t._UZ(23, "i", 15),
                            t.TgZ(24, "span"),
                            t._uU(25, "Cài đặt"),
                            t.qZA()(),
                            t.TgZ(26, "a", 16),
                            t.NdJ("click", function(E) {
                                return a.toggleMobileMenu(E)
                            }),
                            t._UZ(27, "i", 17),
                            t.TgZ(28, "span"),
                            t._uU(29, "Cập nhật mật khẩu"),
                            t.qZA()(),
                            t.TgZ(30, "a", 18),
                            t.NdJ("click", function() {
                                return a.confirmLogout()
                            }),
                            t._UZ(31, "i", 19),
                            t.TgZ(32, "span"),
                            t._uU(33, "Đăng xuất"),
                            t.qZA()()()()(),
                            t.TgZ(34, "div", 20)(35, "ul", 21),
                            t.NdJ("click", function() {
                                return a.fireOutClick()
                            }),
                            t.YNc(36, _n, 4, 3, "ng-container", 22),
                            t.qZA()()()
                        }
                        2 & o && (t.xp6(1),
                        t.Q6J("showHeader", !1)("padding", 20),
                        t.xp6(3),
                        t.Q6J("ngSrc", t.lcZ(5, 6, a.avatar)),
                        t.xp6(4),
                        t.Oqu(a.userDisplay),
                        t.xp6(2),
                        t.Oqu(a.studentCode),
                        t.xp6(26),
                        t.Q6J("ngForOf", a.menus))
                    },
                    dependencies: [f.sg, f.O5, s.rH, s.Od, N.KC, rt.A, f.Zd, ht.T, he, b, jt, _e.Q],
                    styles: ['.w-50[_ngcontent-%COMP%]{width:50%}.vertical-menu-active[_ngcontent-%COMP%]{color:var(--primary-500)!important}.user-details[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#131920;line-height:1.5}.vertical-menu--sidebar[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;background-color:transparent;-webkit-user-select:none;user-select:none}.pc-user-links__nav-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;padding-top:20px}.pc-user-links__nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;font-family:var(--primary-font),sans-serif;line-height:18px;font-size:14px;padding:2px 0;margin:0;color:#5b6b79}.pc-user-links__nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--primary-500)}.pc-user-links__nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] + a[_ngcontent-%COMP%]{margin-top:10px}'],
                    data: {
                        animation: [(0,
                        R.X$)("dropdownMenuNav", [(0,
                        R.SB)("opened", (0,
                        R.oB)({
                            transform: "rotate(180deg)"
                        })), (0,
                        R.SB)("closed", (0,
                        R.oB)({
                            transform: "rotate(0deg)"
                        }))])]
                    }
                })
            }
            return e
        }
        )();
        t.B6R(b, [f.sg, f.O5, he, b, jt], []);
        var Zt = i(8684);
        function gn(e, l) {
            if (1 & e && (t.TgZ(0, "li", 8)(1, "a", 9),
            t._uU(2),
            t.qZA()()),
            2 & e) {
                const n = t.oxw().$implicit;
                t.xp6(1),
                t.Q6J("routerLink", n.url),
                t.xp6(1),
                t.Oqu(n.title)
            }
        }
        function mn(e, l) {
            if (1 & e && (t.TgZ(0, "li", 8)(1, "a", 12),
            t._uU(2),
            t.qZA()()),
            2 & e) {
                const n = t.oxw().$implicit;
                t.xp6(2),
                t.Oqu(n.title)
            }
        }
        function fn(e, l) {
            if (1 & e && (t.ynx(0),
            t.YNc(1, gn, 3, 2, "li", 11),
            t.YNc(2, mn, 3, 1, "li", 11),
            t.BQk()),
            2 & e) {
                const n = l.$implicit;
                t.xp6(1),
                t.Q6J("ngIf", !1 !== n.url),
                t.xp6(1),
                t.Q6J("ngIf", !1 === n.url)
            }
        }
        function vn(e, l) {
            if (1 & e && (t.TgZ(0, "h2", 14),
            t._uU(1),
            t.qZA()),
            2 & e) {
                const n = t.oxw().$implicit;
                t.xp6(1),
                t.hij(" ", n.title, " ")
            }
        }
        function bn(e, l) {
            if (1 & e && (t.ynx(0),
            t.YNc(1, vn, 2, 1, "h2", 13),
            t.BQk()),
            2 & e) {
                const n = l.last;
                t.xp6(1),
                t.Q6J("ngIf", n)
            }
        }
        const En = function() {
            return ["/dashboard/default"]
        };
        function Cn(e, l) {
            if (1 & e && (t.TgZ(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "ul", 7)(6, "li", 8)(7, "a", 9),
            t._uU(8, "Home"),
            t.qZA()(),
            t.YNc(9, fn, 3, 2, "ng-container", 0),
            t.qZA()()(),
            t.TgZ(10, "div", 5)(11, "div", 10),
            t.YNc(12, bn, 2, 1, "ng-container", 0),
            t.qZA()()()()()),
            2 & e) {
                const n = t.oxw(2);
                t.xp6(7),
                t.Q6J("routerLink", t.DdM(3, En)),
                t.xp6(2),
                t.Q6J("ngForOf", n.navigationList),
                t.xp6(3),
                t.Q6J("ngForOf", n.navigationList)
            }
        }
        function xn(e, l) {
            if (1 & e && (t.ynx(0),
            t.YNc(1, Cn, 13, 4, "div", 1),
            t.BQk()),
            2 & e) {
                const n = l.$implicit
                  , o = l.last;
                t.xp6(1),
                t.Q6J("ngIf", o && !1 !== n.breadcrumbs)
            }
        }
        let Mn = ( () => {
            class e {
                constructor(n, o) {
                    this.route = n,
                    this.titleService = o,
                    this.Component = !1,
                    this.dashboard = !0,
                    this.breadcrumbList = [],
                    this.navigations = Zt.IJ,
                    this.setBreadcrumb()
                }
                setBreadcrumb() {
                    this.route.events.subscribe(n => {
                        if (n instanceof s.m2) {
                            const a = this.filterNavigation(this.navigations, "/" !== n.url ? n.url : n.urlAfterRedirects);
                            this.navigationList = a,
                            this.titleService.setTitle((a[a.length - 1]?.title || "Welcome") + " | Able pro Angular free Admin Template")
                        }
                    }
                    )
                }
                filterNavigation(n, o) {
                    for (const a of n) {
                        if ("item" === a.type && "url"in a && a.url === o)
                            return [{
                                url: "url"in a && a.url,
                                title: a.title,
                                breadcrumbs: !("breadcrumbs"in a) || a.breadcrumbs,
                                type: a.type
                            }];
                        if (("group" === a.type || "collapse" === a.type) && "children"in a) {
                            const h = this.filterNavigation(a.children, o);
                            if (h.length > 0)
                                return h.unshift({
                                    url: "url"in a && a.url,
                                    title: a.title,
                                    breadcrumbs: !("breadcrumbs"in a) || a.breadcrumbs,
                                    type: a.type
                                }),
                                h
                        }
                    }
                    return []
                }
                static #t = this.ɵfac = function(o) {
                    return new (o || e)(t.Y36(s.F0),t.Y36(u.Dx))
                }
                ;
                static #e = this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-breadcrumb"]],
                    inputs: {
                        Component: "Component",
                        dashboard: "dashboard"
                    },
                    standalone: !0,
                    features: [t.jDz],
                    decls: 1,
                    vars: 1,
                    consts: [[4, "ngFor", "ngForOf"], ["class", "page-header", 4, "ngIf"], [1, "page-header"], [1, "page-block"], [1, "row", "align-item-center"], [1, "col-md-12"], [1, "flex", "align-item-center"], [1, "breadcrumb", "align-item-center"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "page-header-title"], ["class", "breadcrumb-item", 4, "ngIf"], ["href", "javascript:"], ["class", "f-w-700", 4, "ngIf"], [1, "f-w-700"]],
                    template: function(o, a) {
                        1 & o && t.YNc(0, xn, 2, 1, "ng-container", 0),
                        2 & o && t.Q6J("ngForOf", a.navigationList)
                    },
                    dependencies: [f.ez, f.sg, f.O5, s.Bz, s.rH, F.m],
                    styles: ['.page-header[_ngcontent-%COMP%]{display:flex;align-items:center;top:74px;left:280px;right:0;z-index:1023;min-height:55px;padding:13px 0;background:transparent;border-radius:8px}.page-header[_ngcontent-%COMP%]   .page-block[_ngcontent-%COMP%]{width:100%}.page-header[_ngcontent-%COMP%]   .page-header-title[_ngcontent-%COMP%]{display:inline-block}.page-header[_ngcontent-%COMP%]   .page-header-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.page-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-bottom:0;margin-right:8px;padding-right:8px;font-weight:500}.page-header[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]{padding:0;display:inline-flex;margin-bottom:0;background:transparent;font-size:13px}.page-header[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]{padding-left:.5rem}.page-header[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]:before{content:"\\ea61";font-family:tabler-icons;position:absolute;font-size:15px;top:2px;padding-right:.5rem}.page-header[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--accent-900)}.page-header[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--primary-500)}.page-header[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]:before{position:relative;top:2px}.page-header[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]:last-child{opacity:.75}.page-header[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:14px;height:14px;vertical-align:baseline}@media (max-width: 1024px){.page-header[_ngcontent-%COMP%]{position:relative;left:0;top:0;margin-left:10px;margin-right:10px}}@media (max-width: 575.98px){.page-header[_ngcontent-%COMP%]{padding:0;margin:0}}']
                })
            }
            return e
        }
        )()
          , On = ( () => {
            class e {
                static #t = this.ɵfac = function(o) {
                    return new (o || e)
                }
                ;
                static #e = this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-footer"]],
                    standalone: !0,
                    features: [t.jDz],
                    decls: 19,
                    vars: 0,
                    consts: [[1, "theme-footer"], [1, "footer-wrapper"], [1, "flex", "align-item-center"], [1, "col", "m-t-5", "m-b-5"], [1, "m-0"], ["href", "https://themeforest.net/user/phoenixcoded", "target", "_blank"], [1, "col-auto"], [1, "list-inline", "footer-link", "m-b-0"], [1, "list-inline-item"], ["href", "https://ableproadmin.com/"], ["href", "https://codedthemes.gitbook.io/able-pro-angular/", "target", "_blank"], ["href", "https://phoenixcoded.authordesk.app/", "target", "_blank"]],
                    template: function(o, a) {
                        1 & o && (t.TgZ(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4),
                        t._uU(5, " Able Pro ♥ crafted by Team "),
                        t.TgZ(6, "a", 5),
                        t._uU(7, "Phoenixcoded"),
                        t.qZA()()(),
                        t.TgZ(8, "div", 6)(9, "ul", 7)(10, "li", 8)(11, "a", 9),
                        t._uU(12, "Home"),
                        t.qZA()(),
                        t.TgZ(13, "li", 8)(14, "a", 10),
                        t._uU(15, "Documentation"),
                        t.qZA()(),
                        t.TgZ(16, "li", 8)(17, "a", 11),
                        t._uU(18, "Support"),
                        t.qZA()()()()()()())
                    },
                    dependencies: [f.ez, F.m],
                    styles: [".theme-footer[_ngcontent-%COMP%]{position:relative;padding:15px 0}.theme-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--accent-900)}.theme-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--primary-500)}.theme-footer[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]{padding-left:40px;padding-right:40px}.theme-footer[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{flex:1 0 0%}.theme-footer[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]   .col-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.theme-footer[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]   .list-inline[_ngcontent-%COMP%]{padding-left:0;list-style:none}.theme-footer[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]   .list-inline[_ngcontent-%COMP%]   .list-inline-item[_ngcontent-%COMP%]{display:inline-block}.theme-footer[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]   .list-inline-item[_ngcontent-%COMP%]:not(:last-child){margin-right:.9rem}@media (max-width: 575.98px){.theme-footer[_ngcontent-%COMP%]{padding:0 0 15px}.theme-footer[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px}.theme-footer[_ngcontent-%COMP%]   .footer-wrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex-direction:column}}"]
                })
            }
            return e
        }
        )();
        var me = i(1813)
          , Nt = i(665)
          , yn = i(4893)
          , Ot = i(2022)
          , fe = i(5323);
        const Tn = ["sidebar"]
          , Pn = ["rightSidebar"]
          , An = ["tutorAiChatbot"];
        function wn(e, l) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "button", 26),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const a = t.oxw(3);
                    return t.KtG(a.toggleChatbot())
                }),
                t.O4$(),
                t.TgZ(1, "svg", 27),
                t._UZ(2, "path", 28)(3, "circle", 29)(4, "circle", 30)(5, "path", 31)(6, "path", 32),
                t.qZA()()
            }
        }
        function Dn(e, l) {
            if (1 & e && (t.ynx(0),
            t.YNc(1, wn, 7, 0, "button", 25),
            t.BQk()),
            2 & e) {
                const n = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", "collapse" === n.tutorAiService.chatbotState())
            }
        }
        function Sn(e, l) {
            1 & e && (t.TgZ(0, "div", 49),
            t._UZ(1, "div", 50)(2, "div", 50)(3, "div", 50),
            t.qZA())
        }
        function In(e, l) {
            1 & e && (t.O4$(),
            t.kcU(),
            t.TgZ(0, "div", 51)(1, "div", 52),
            t._UZ(2, "div", 50)(3, "div", 50)(4, "div", 50),
            t.qZA()())
        }
        function kn(e, l) {
            if (1 & e) {
                const n = t.EpF();
                t.ynx(0),
                t.TgZ(1, "div", 33),
                t.O4$(),
                t.TgZ(2, "svg", 34),
                t._UZ(3, "path", 35),
                t.qZA(),
                t.kcU(),
                t.TgZ(4, "h4", 36),
                t._uU(5, "QnA"),
                t.qZA(),
                t.TgZ(6, "button", 37),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const a = t.oxw(2);
                    return t.KtG(a.closeChatbot())
                }),
                t.O4$(),
                t.TgZ(7, "svg", 38),
                t._UZ(8, "path", 39),
                t.qZA()()(),
                t.kcU(),
                t.TgZ(9, "div", 40, 41),
                t.YNc(11, Sn, 4, 0, "div", 42),
                t.qZA(),
                t.TgZ(12, "div", 43)(13, "input", 44),
                t.NdJ("keydown.enter", function(a) {
                    t.CHM(n);
                    const h = t.oxw(2);
                    return t.KtG(h.onEnter(a))
                })("ngModelChange", function(a) {
                    t.CHM(n);
                    const h = t.oxw(2);
                    return t.KtG(h.messages = a)
                }),
                t.qZA(),
                t.TgZ(14, "button", 45),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const a = t.oxw(2);
                    return t.KtG(a.sendMessage())
                }),
                t.O4$(),
                t.TgZ(15, "svg", 46),
                t._UZ(16, "path", 47),
                t.qZA()(),
                t.YNc(17, In, 5, 0, "div", 48),
                t.qZA(),
                t.BQk()
            }
            if (2 & e) {
                const n = t.oxw(2);
                t.xp6(11),
                t.Q6J("ngIf", !n.showedIntro),
                t.xp6(2),
                t.Q6J("disabled", n.isSending())("ngModel", n.messages),
                t.xp6(1),
                t.Q6J("disabled", !n.messages || !n.messages.trim()),
                t.xp6(3),
                t.Q6J("ngIf", n.isSending())
            }
        }
        function Ln(e, l) {
            1 & e && (t.TgZ(0, "div", 52),
            t._UZ(1, "div", 50)(2, "div", 50)(3, "div", 50),
            t.qZA())
        }
        function Bn(e, l) {
            if (1 & e) {
                const n = t.EpF();
                t.ynx(0),
                t.TgZ(1, "div", 55),
                t._uU(2, "Quá trình đăng nhập bị gián đoạn"),
                t.qZA(),
                t.TgZ(3, "button", 56),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const a = t.oxw(3);
                    return t.KtG(a.tryLoginChatbot())
                }),
                t.O4$(),
                t.TgZ(4, "svg", 57)(5, "g"),
                t._UZ(6, "path", 58),
                t.qZA()(),
                t._uU(7, " Đăng nhập lại "),
                t.qZA(),
                t.BQk()
            }
        }
        function Un(e, l) {
            if (1 & e && (t.TgZ(0, "div", 53),
            t.YNc(1, Ln, 4, 0, "div", 54),
            t.YNc(2, Bn, 8, 0, "ng-container", 21),
            t.qZA()),
            2 & e) {
                const n = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", !n.tutorAiService.authenticateFail()),
                t.xp6(1),
                t.Q6J("ngIf", n.tutorAiService.authenticateFail())
            }
        }
        function jn(e, l) {
            if (1 & e && (t.ynx(0),
            t.YNc(1, Dn, 2, 1, "ng-container", 21),
            t.TgZ(2, "div", 22)(3, "div", 23),
            t.YNc(4, kn, 18, 5, "ng-container", 21),
            t.YNc(5, Un, 3, 2, "div", 24),
            t.qZA()(),
            t.BQk()),
            2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", !n.tutorAiService.expanded()),
                t.xp6(1),
                t.Q6J("@windowChatAnimation", n.tutorAiService.chatbotState()),
                t.xp6(2),
                t.Q6J("ngIf", "authenticated" === n.tutorAiService.state()),
                t.xp6(1),
                t.Q6J("ngIf", "authenticated" !== n.tutorAiService.state())
            }
        }
        let ve = ( () => {
            class e {
                set chatBox(n) {
                    n && (this._chatBox = n)
                }
                get chatBox() {
                    return this._chatBox
                }
                constructor(n, o, a, h, m, E, K) {
                    this.breakpointObserver = n,
                    this.layoutService = o,
                    this.notification = a,
                    this.tutorAiService = h,
                    this.auth = m,
                    this.router = E,
                    this.title = K,
                    this.menu = [],
                    this.modeValue = "side",
                    this.currentApplicationVersion = w.NZ.appVersion,
                    this.isSidebarClosed = !1,
                    this.isBlockActions = !1,
                    this.onDestroy$ = new T.x,
                    this.logo = "assets/images/client/" + w.NZ.deploy.client + "/admin-logo.png",
                    this.hostname = location.hostname,
                    this.showedIntro = !1,
                    this.messages = "",
                    this.isSending = (0,
                    t.tdS)(!1),
                    this.title.setTitle(".:: Hệ thống quản lý học tập trực tuyến - [LMS] ::."),
                    this.router.events.pipe((0,
                    Ot.sL)()).subscribe({
                        next: W => {
                            W instanceof s.m2 && this.auth.requestCheckVersion.next("")
                        }
                    }),
                    this.auth.onStudentSetup.pipe((0,
                    Ot.sL)()).subscribe(W => {
                        W && this.tryLoginChatbot()
                    }
                    ),
                    this.notification.onTokenDeleted().pipe((0,
                    Ot.sL)()).subscribe( () => {
                        this.tutorAiService.logout()
                    }
                    );
                    let it = [{
                        id: "home",
                        title: "Bảng tin LMS",
                        type: "item",
                        classes: "nav-item",
                        url: "dashboard/bulletin-board",
                        customSvg: "#custom-status-up"
                    }, {
                        id: "study",
                        title: "HỌC TẬP",
                        type: "group",
                        children: [{
                            id: "schedule",
                            title: "Thời khóa biểu",
                            type: "item",
                            classes: "nav-item",
                            url: "dashboard/schedule",
                            customSvg: "#calendar-days"
                        }, {
                            id: "classes",
                            title: "Lớp học phần",
                            type: "item",
                            classes: "nav-item",
                            url: "dashboard/classes",
                            customSvg: "#book-open-reader"
                        }, {
                            id: "assignments",
                            title: w.NZ.deploy.translateLabels.assignments,
                            type: "item",
                            classes: "nav-item",
                            url: "dashboard/assignments",
                            customSvg: "#custom-flag"
                        }, {
                            id: "warm-up-quiz",
                            title: "Kiểm tra đầu giờ",
                            type: "item",
                            classes: "nav-item",
                            url: "dashboard/warm-up-quiz",
                            customSvg: "#clipboard-check"
                        }, {
                            id: "final-examination",
                            title: "Thi kết thúc học phần",
                            type: "item",
                            classes: "nav-item",
                            url: "final-examination",
                            icon: "ph-duotone ph-certificate"
                        }, {
                            id: "projects",
                            title: "Dự án",
                            type: "item",
                            classes: "nav-item",
                            label: "new",
                            url: "dashboard/projects",
                            customSvg: "#custom-folder-open-3"
                        }, {
                            id: "tickets",
                            title: "Hỏi đáp với giảng viên",
                            type: "item",
                            classes: "nav-item",
                            url: "dashboard/tickets",
                            customSvg: "#message-quote"
                        }, {
                            id: "announcements",
                            title: "Thông báo",
                            type: "item",
                            classes: "nav-item",
                            url: "dashboard/announcements",
                            customSvg: "#custom-presentation-chart"
                        }]
                    }, {
                        id: "results",
                        title: "KẾT QUẢ",
                        type: "group",
                        children: [{
                            id: "class-transcript",
                            title: "Tra cứu điểm",
                            type: "item",
                            classes: "nav-item",
                            url: "dashboard/class-transcript",
                            customSvg: "#magnifying-glass"
                        }]
                    }, {
                        id: "systems",
                        title: "HỆ THỐNG",
                        type: "group",
                        children: [{
                            id: "settings",
                            title: "Cài đặt",
                            type: "item",
                            classes: "nav-item",
                            url: "dashboard/settings",
                            customSvg: "#custom-setting-2"
                        }, {
                            id: "technical-helpdesk",
                            title: "Trợ giúp kỹ thuật",
                            type: "item",
                            classes: "nav-item",
                            url: "dashboard/technical-helpdesk",
                            customSvg: "#phone-volume"
                        }, {
                            id: "profile",
                            title: "Hồ sơ của bạn",
                            type: "item",
                            classes: "nav-item",
                            url: "dashboard/profile",
                            customSvg: "#custom-user-square"
                        }]
                    }];
                    const dt = [{
                        id: "logout",
                        title: "Đăng xuất",
                        type: "item",
                        classes: "nav-item",
                        customSvg: "#right-from-bracket",
                        action: () => {
                            this.notification.confirmSignOut()
                        }
                    }];
                    if (w.NZ.deploy.enableSafeExamBrowser && dt.unshift({
                        id: "link-seb",
                        title: "Tải phần mềm thi SEB",
                        type: "item",
                        classes: "nav-item",
                        target: !0,
                        external: !0,
                        url: this.getBaseLink("seb"),
                        customSvg: "#custom-download"
                    }),
                    w.NZ.deploy.enableSubjectCourse || (it = it.map(W => ("study" === W.id && (W.children = W.children.filter(pt => "projects" !== pt.id)),
                    W))),
                    this.menu = it.map(W => ("systems" === W.id && W.children.push(...dt),
                    W)),
                    this.auth.isTheFirstTestOfTheWeekSetToRepresentFifteenMinuteTest()) {
                        const W = this.menu.findIndex(pt => "study" === pt.id);
                        -1 !== W && (this.menu[W].children = this.menu[W].children.filter(pt => "warm-up-quiz" !== pt.id))
                    }
                }
                ngOnInit() {
                    this.breakpointObserver.observe(["(min-width: 1025px)", "(max-width: 1024.98px)"]).pipe((0,
                    x.R)(this.onDestroy$)).subscribe(n => {
                        n.breakpoints["(max-width: 1024.98px)"] ? this.modeValue = "over" : n.breakpoints["(min-width: 1025px)"] && (this.modeValue = "side")
                    }
                    ),
                    this.layoutService.onBlockActionsChanges$.asObservable().pipe((0,
                    x.R)(this.onDestroy$)).subscribe(n => {
                        this.isBlockActions = n
                    }
                    )
                }
                ngAfterViewInit() {
                    this.layoutService.layoutState.pipe((0,
                    x.R)(this.onDestroy$)).subscribe( () => {
                        this.sidebar.toggle()
                    }
                    ),
                    this.sidebar.openedStart.pipe((0,
                    x.R)(this.onDestroy$)).subscribe( () => {
                        this.isSidebarClosed = !1,
                        window.innerWidth > 1024 && setTimeout( () => {
                            this.sidebar._container._content.getElementRef().nativeElement.style.setProperty("--mat-drawer-content-width", this.sidebar._container._content.getElementRef().nativeElement.clientWidth + "px")
                        }
                        , 1e3)
                    }
                    ),
                    this.sidebar.closedStart.pipe((0,
                    x.R)(this.onDestroy$)).subscribe( () => {
                        this.isSidebarClosed = !0,
                        window.innerWidth > 1024 && setTimeout( () => {
                            this.sidebar._container._content.getElementRef().nativeElement.style.setProperty("--mat-drawer-content-width", this.sidebar._container._content.getElementRef().nativeElement.clientWidth + "px")
                        }
                        , 1e3)
                    }
                    ),
                    this.layoutService.observeRightSidebar.pipe((0,
                    x.R)(this.onDestroy$)).subscribe(n => {
                        this.rightSidebar.toggle(n)
                    }
                    ),
                    this.tryLoginChatbot()
                }
                toggleChatbot() {
                    this.tutorAiService.chatbotState.update(n => "collapse" === n ? "expand" : "collapse"),
                    this.tryLoginChatbot(),
                    "expand" === this.tutorAiService.chatbotState() && !this.showedIntro && this.tutorAiService.observeLogin.asObservable().pipe((0,
                    y.h)(n => n), (0,
                    me.q)(1), (0,
                    x.R)(this.onDestroy$), (0,
                    yn.g)(500)).subscribe( () => {
                        this.fillIntro()
                    }
                    )
                }
                closeChatbot() {
                    this.tutorAiService.chatbotState.set("collapse")
                }
                tryLoginChatbot() {
                    this.tutorAiService.login()
                }
                fillIntro() {
                    const n = `tutor-chatbot-element-${Date.now().toString(10)}`;
                    this.fillContainerToChatterbox(`<div class="tutor-chatbot__element-block tutor-chatbot__answers tutor-ai-container__answers m-0" id="${n}"></div>`),
                    setTimeout( () => (0,
                    Nt.c$)("Xin chào! Tôi có thể giúp gì cho bạn?", document.getElementById(n), 0), 500),
                    this.showedIntro = !0
                }
                fillAnswers(n, o, a) {
                    const h = o ?? this.messages
                      , m = "tutor-chatbot__element-block tutor-chatbot__question ".concat(a || "")
                      , E = `tutor-chatbot-element-${Date.now().toString(10)}`;
                    this.fillContainerToChatterbox(`<div class="${m}" id="q-${E}"><p>${h}</p></div><div data-parent="yes" class="tutor-chatbot__element-block tutor-chatbot__answers tutor-ai-container__answers" id="${E}"></div>`),
                    this.messages = "",
                    setTimeout( () => (0,
                    Nt.c$)(n, document.getElementById(E), 0), 1e3)
                }
                fillContainerToChatterbox(n) {
                    this.chatBox && this.chatBox.nativeElement.insertAdjacentHTML("beforeend", n)
                }
                sendMessage() {
                    this.isSending.set(!0),
                    this.tutorAiService.chat(this.messages.trim()).pipe((0,
                    V.U)(n => this.tutorAiService.converter.makeHtml(n.content))).subscribe({
                        next: n => {
                            this.fillAnswers(n),
                            this.isSending.set(!1)
                        }
                        ,
                        error: () => {
                            this.isSending.set(!1)
                        }
                    })
                }
                onEnter(n) {
                    if (!n.shiftKey && this.messages.trim().length)
                        return n.stopPropagation(),
                        n.preventDefault(),
                        void this.sendMessage()
                }
                getBaseLink(n) {
                    const o = new URL(location.href);
                    return o.pathname = n,
                    o.searchParams.set("hash", Date.now().toString(10)),
                    o.toString()
                }
                ngOnDestroy() {
                    this.onDestroy$.next("destroy"),
                    this.onDestroy$.complete()
                }
                static #t = this.ɵfac = function(o) {
                    return new (o || e)(t.Y36(fe.Yg),t.Y36(D.P),t.Y36(B.g),t.Y36(Nt.$r),t.Y36(lt.e),t.Y36(s.F0),t.Y36(u.Dx))
                }
                ;
                static #e = this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-dashboard"]],
                    viewQuery: function(o, a) {
                        if (1 & o && (t.Gf(Tn, 5),
                        t.Gf(Pn, 5),
                        t.Gf(An, 5)),
                        2 & o) {
                            let h;
                            t.iGM(h = t.CRH()) && (a.sidebar = h.first),
                            t.iGM(h = t.CRH()) && (a.rightSidebar = h.first),
                            t.iGM(h = t.CRH()) && (a.chatBox = h.first)
                        }
                    },
                    decls: 29,
                    vars: 10,
                    consts: [[1, "drawer-container"], ["opened", "", 1, "pc-sidebar", 3, "mode"], ["sidebar", ""], [1, "navbar-wrapper"], [1, "m-header"], [1, "flex", "align-items-center"], [1, "sidebar-sys-logo"], ["alt", "", "width", "48", "height", "36.47", 3, "ngSrc"], [1, "m-header__right-info", "flex", "justify-content-center", "align-items-start", "flex-column", "m-l-10"], [1, "version", "font-roboto"], [1, "text-muted", "font-roboto", "f-12", "f-w-500", "m-t-5", 2, "line-height", "1"], [3, "menus"], ["visibility", "hover"], [1, "app-container"], [1, "main-body"], [1, "page-wrapper"], ["mode", "over", "position", "end", 1, "right-sidebar"], ["rightSidebar", ""], [1, "right-sidebar__grid"], [1, "right-sidebar__head"], [1, "right-sidebar__body"], [4, "ngIf"], [1, "wrap-chat-window"], [1, "chat-window"], ["class", "chat-window__loading", 4, "ngIf"], ["class", "chatbot-button", 3, "click", 4, "ngIf"], [1, "chatbot-button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 48 48"], ["d", "m35 14h-10v-5.163c1.442-.432 2.5-1.754 2.5-3.337 0-1.933-1.567-3.5-3.5-3.5s-3.5 1.567-3.5 3.5c0 1.583 1.058 2.905 2.5 3.337v5.163h-10c-3.314 0-6 2.686-6 6v19c0 3.314 2.686 6 6 6h22c3.314 0 6-2.686 6-6v-19c0-3.314-2.686-6-6-6zm-21 11.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5zm16.457 10.949c-1.975 1.015-4.208 1.551-6.457 1.551s-4.482-.536-6.457-1.551c-.491-.253-.685-.855-.433-1.347.252-.49.854-.685 1.347-.433 3.435 1.766 7.651 1.766 11.086 0 .491-.252 1.094-.058 1.347.433.252.491.059 1.094-.433 1.347zm.043-7.449c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"], ["cx", "30.5", "cy", "25.5", "r", "1.5"], ["cx", "17.5", "cy", "25.5", "r", "1.5"], ["d", "m44 23h-1v13h1c1.657 0 3-1.343 3-3v-7c0-1.657-1.343-3-3-3z"], ["d", "m5 23h-1c-1.657 0-3 1.343-3 3v7c0 1.657 1.343 3 3 3h1z"], [1, "chat-header"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "m22.5,9h-.5v-1c0-2.757-2.243-5-5-5h-4V1c0-.552-.447-1-1-1s-1,.448-1,1v2h-4c-2.757,0-5,2.243-5,5v1h-.5c-.827,0-1.5.673-1.5,1.5v3c0,.827.673,1.5,1.5,1.5h.5v1c0,2.757,2.243,5,5,5h7.697l3.963,2.642c.36.24.775.361,1.191.361.348,0,.696-.084,1.015-.255.699-.375,1.134-1.1,1.134-1.894v-6.855h.5c.827,0,1.5-.673,1.5-1.5v-3c0-.827-.673-1.5-1.5-1.5Zm-2.5,12.855c0,.022,0,.089-.078.13-.08.043-.136.004-.152-.007l-4.215-2.81c-.164-.109-.357-.168-.555-.168H7c-1.654,0-3-1.346-3-3v-8c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3v13.855ZM7,9.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm10,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm-.153,4.695c.294.468.152,1.085-.315,1.378-1.037.651-2.666,1.427-4.531,1.427s-3.494-.776-4.531-1.427c-.468-.293-.609-.911-.315-1.378.294-.467.911-.609,1.378-.316.815.512,2.079,1.121,3.469,1.121s2.653-.609,3.469-1.121c.466-.294,1.085-.152,1.378.316Z"], [1, "chat-header__heading"], [1, "chat-header__btn-close", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "height", "329pt", "viewBox", "0 0 329.26933 329", "width", "329pt"], ["d", "m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"], [1, "chat-body"], ["tutorAiChatbot", ""], ["class", "animation-typing-dots mt-3", 4, "ngIf"], [1, "chat-footer", "position-relative"], ["type", "text", "placeholder", "Nhập câu hỏi...", 1, "chat-input", 3, "disabled", "ngModel", "keydown.enter", "ngModelChange"], [1, "chat-send", 3, "disabled", "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 512 512"], ["d", "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"], ["class", "chat-footer__loading", 4, "ngIf"], [1, "animation-typing-dots", "mt-3"], [1, "animation-typing-dots__element"], [1, "chat-footer__loading"], [1, "animation-typing-dots"], [1, "chat-window__loading"], ["class", "animation-typing-dots", 4, "ngIf"], [1, "chat-window__alert", "alert", "alert-danger", "m-0"], ["pButton", "", "pRipple", "", 1, "btn__reload", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "viewBox", "0 0 488.932 488.932", "fill", "currentColor"], ["d", "M243.158,61.361v-57.6c0-3.2,4-4.9,6.7-2.9l118.4,87c2,1.5,2,4.4,0,5.9l-118.4,87c-2.7,2-6.7,0.2-6.7-2.9v-57.5   c-87.8,1.4-158.1,76-152.1,165.4c5.1,76.8,67.7,139.1,144.5,144c81.4,5.2,150.6-53,163-129.9c2.3-14.3,14.7-24.7,29.2-24.7l0,0   c17.9,0,31.8,15.9,29,33.5c-17.4,109.7-118.5,192-235.7,178.9c-98-11-176.7-89.4-187.8-187.4   C18.558,171.961,118.158,62.761,243.158,61.361z"]],
                    template: function(o, a) {
                        1 & o && (t.TgZ(0, "mat-drawer-container", 0)(1, "mat-drawer", 1, 2)(3, "nav")(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "figure", 6),
                        t._UZ(8, "img", 7),
                        t.ALo(9, "safeUrl"),
                        t.qZA(),
                        t.TgZ(10, "div", 8)(11, "span", 9),
                        t._uU(12),
                        t.qZA(),
                        t.TgZ(13, "span", 10),
                        t._uU(14),
                        t.qZA()()()(),
                        t._UZ(15, "app-vertical-menu", 11),
                        t.qZA()()(),
                        t.TgZ(16, "mat-drawer-content"),
                        t._UZ(17, "app-nav-bar"),
                        t.TgZ(18, "ng-scrollbar", 12)(19, "div", 13)(20, "div", 14)(21, "div", 15),
                        t._UZ(22, "router-outlet"),
                        t.qZA()()()()(),
                        t.TgZ(23, "mat-drawer", 16, 17)(25, "div", 18),
                        t._UZ(26, "div", 19)(27, "div", 20),
                        t.qZA()()(),
                        t.YNc(28, jn, 6, 4, "ng-container", 21)),
                        2 & o && (t.ekj("drawer-container--pc-sidebar-closed", a.isSidebarClosed),
                        t.xp6(1),
                        t.Q6J("mode", a.modeValue),
                        t.xp6(7),
                        t.Q6J("ngSrc", t.lcZ(9, 8, a.logo)),
                        t.xp6(4),
                        t.hij(" V", a.currentApplicationVersion, " "),
                        t.xp6(2),
                        t.hij(" ", a.hostname, " "),
                        t.xp6(1),
                        t.Q6J("menus", a.menu),
                        t.xp6(13),
                        t.Q6J("ngIf", a.tutorAiService.enableQa()))
                    },
                    styles: [".right-sidebar[_ngcontent-%COMP%]{width:min(var(--max-screen-width),400px)}.right-sidebar__grid[_ngcontent-%COMP%]{display:flex;width:100%;height:100%;flex-flow:column wrap;background-color:#fff}.right-sidebar__head[_ngcontent-%COMP%]{box-shadow:0 1px #eae9e9;display:flex;justify-content:space-between;padding:0 10px;align-items:center;background-color:#f8f9fa;height:64px}.right-sidebar__body[_ngcontent-%COMP%]{flex:1 1 auto}.sidebar-sys-logo[_ngcontent-%COMP%]{padding:10px;background-color:#fff;border-radius:10px;overflow:hidden;font-size:0;margin:0;line-height:0;width:68px}.sidebar-sys-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;width:100%}app-nav-bar[_ngcontent-%COMP%]{height:var(--mat-toolbar-standard-height);display:block;position:relative;z-index:15}ng-scrollbar[_ngcontent-%COMP%]{height:var(--dashboard-min-height)}@media only screen and (max-width: 1024px){[_ngcontent-%COMP%]:is()   .mat-drawer-content[_ngcontent-%COMP%]   .app-container[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px}}.ictu-chatbot-button[_ngcontent-%COMP%], .ictu-chatbot[_ngcontent-%COMP%]{position:fixed;z-index:999;bottom:50px;right:50px;display:block}.ictu-chatbot__inner[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #e0e0e0;box-shadow:0 0 9px #0000001f;flex-direction:column;height:582px;position:relative;transform:translate(0);transition:width .25s cubic-bezier(.4,.8,.74,1);width:642px;display:flex}.ictu-chatbot-button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:46px;height:auto;aspect-ratio:1;padding:0;margin:0;border-radius:999px}.ictu-chatbot-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:auto;width:28px}.ictu-chatbot-button[_ngcontent-%COMP%]:active, .ictu-chatbot-button[_ngcontent-%COMP%]:hover, .ictu-chatbot-button[_ngcontent-%COMP%]{background-color:#3699e7!important;box-shadow:none!important;border:none!important;outline:none!important}.chatbot-button[_ngcontent-%COMP%]{position:fixed;width:46px;height:46px;background-color:#007bff;color:#fff;border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;cursor:pointer;box-shadow:0 4px 10px #0003;transition:all .3s ease;animation:animationPopUp .5s ease-out,animationShake .5s ease-out 1s;z-index:999;bottom:35px;right:30px}.chatbot-button[_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:scale(1.1)}.chatbot-button[_ngcontent-%COMP%]:active{transform:scale(.9)}.chatbot-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:26px;height:auto;fill:currentColor}.wrap-chat-window[_ngcontent-%COMP%]{--wrap-chat-window-size: min(var(--max-screen-width), 800px);position:fixed;bottom:0;right:calc(-1 * var(--wrap-chat-window-size) + 5px);overflow:hidden;z-index:999;transition:all .35s ease;border-radius:0;box-shadow:0 4px 10px #0003}.chat-window[_ngcontent-%COMP%]{width:var(--wrap-chat-window-size);height:100vh;background:#ffffff;display:flex;flex-direction:column;overflow:hidden}.chat-header[_ngcontent-%COMP%]{background:#007bff;color:#fff;padding:0 5px 0 10px;text-align:center;display:flex;align-items:center;height:44px}.chat-body[_ngcontent-%COMP%]{flex:1;padding:20px;overflow-y:auto;font-size:14px}.chat-footer[_ngcontent-%COMP%]{display:flex;align-items:center;border:1px solid #ddd;border-radius:999px;overflow:hidden;margin:15px;padding:0 10px 0 15px}.chat-input[_ngcontent-%COMP%]{flex:1;font-size:15px;border-radius:0;border:none;font-family:var(--primary-font),sans-serif;line-height:1.5;font-weight:400;padding:12px 0;color:#333}.chat-send[_ngcontent-%COMP%]{color:#707070;border:none;padding:0;margin:0;cursor:pointer;border-radius:0;font-family:var(--primary-font),sans-serif;font-size:14px;line-height:1.5;font-weight:400;display:inline-flex;width:30px;height:30px;justify-content:center;align-items:center;background:none!important}.chat-send[_ngcontent-%COMP%]:disabled{background:none!important;color:#aaa!important;cursor:text;pointer-events:none}.chat-send[_ngcontent-%COMP%]:not(:disabled):hover{color:#007bff}.chat-send[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:18px;height:auto}.chat-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:24px;height:auto}.chat-header__heading[_ngcontent-%COMP%]{font-family:var(--primary-font),sans-serif;font-size:15px;line-height:1.5;font-weight:400;margin:0 0 0 10px;color:#fff}.chat-header__btn-close[_ngcontent-%COMP%]{border:none!important;outline:none!important;border-radius:0;margin:0 0 0 auto;padding:0;background-color:#0000004d;color:#fff;line-height:0;width:32px;height:32px}.chat-header__btn-close[_ngcontent-%COMP%]:hover{background-color:#f44336}.chat-header__btn-close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:12px}.chat-window__loading[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100%;flex-direction:column}.chat-window__alert[_ngcontent-%COMP%]{font-family:var(--primary-font),sans-serif;font-size:14px;font-weight:400;display:block;padding:10px 15px;border-radius:4px;color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.btn__reload[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:10px 0 0;width:auto;height:auto;border-radius:999px;box-shadow:none!important;outline:none!important;color:#464646;background-color:#e5e5e5;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);border:none!important;line-height:1;padding:10px 15px;font-family:var(--primary-font),sans-serif;font-size:14px;font-weight:400}.btn__reload[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:12px;height:auto;margin:0 5px 0 0}.chat-footer__loading[_ngcontent-%COMP%]{position:absolute;z-index:10;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0;background-color:#fff9}"],
                    data: {
                        animation: [(0,
                        R.X$)("windowChatAnimation", [(0,
                        R.SB)("collapse", (0,
                        R.oB)({
                            right: "calc(-1 * var(--wrap-chat-window-size) + 5px)",
                            visibility: "hidden"
                        })), (0,
                        R.SB)("expand", (0,
                        R.oB)({
                            right: "0",
                            visibility: "visible"
                        }))])]
                    }
                })
            }
            return e
        }
        )();
        var Kt = i(3226)
          , Ct = i(7382)
          , Wt = i(1215)
          , Ft = i(3148);
        t.B6R(ve, [f.O5, L, Kt.Fj, Kt.JJ, Kt.On, N.KC, Ct.jA, Ct.kh, Ct.LW, s.lC, ge, f.Zd, Wt.Hq, Ft.H], [_e.Q]);
        var zt = i(1391)
          , Ht = i(9468)
          , Rn = i(7350);
        const Zn = ["sidebar"];
        let be = ( () => {
            class e {
                constructor(n, o) {
                    this.breakpointObserver = n,
                    this.layoutService = o,
                    this.menus = Zt.IJ,
                    this.modeValue = "side",
                    this.currentApplicationVersion = w.NZ.appVersion,
                    this.isSidebarClosed = !1
                }
                ngOnInit() {
                    this.breakpointObserver.observe(["(min-width: 1025px)", "(max-width: 1024.98px)"]).subscribe(n => {
                        n.breakpoints["(max-width: 1024.98px)"] ? this.modeValue = "over" : n.breakpoints["(min-width: 1025px)"] && (this.modeValue = "side")
                    }
                    )
                }
                ngAfterViewInit() {
                    this.layoutService.layoutState.subscribe( () => this.sidebar.toggle()),
                    this.sidebar.openedStart.subscribe( () => this.isSidebarClosed = !1),
                    this.sidebar.closedStart.subscribe( () => this.isSidebarClosed = !0)
                }
                static #t = this.ɵfac = function(o) {
                    return new (o || e)(t.Y36(fe.Yg),t.Y36(D.P))
                }
                ;
                static #e = this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-admin"]],
                    viewQuery: function(o, a) {
                        if (1 & o && t.Gf(Zn, 5),
                        2 & o) {
                            let h;
                            t.iGM(h = t.CRH()) && (a.sidebar = h.first)
                        }
                    },
                    decls: 26,
                    vars: 5,
                    consts: [[1, "drawer-container"], ["opened", "", 1, "pc-sidebar", 3, "mode"], ["sidebar", ""], [1, "navbar-wrapper"], [1, "m-header"], ["href", "/"], ["width", "66", "height", "28", "viewBox", "0 0 66 28", "fill", "var(--primary-500)", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M52.7694 1.05138V7H51.6023V0.0922266H52.6774L52.7694 1.05138ZM56.1835 2.54084V2.63768C56.1835 3.00044 56.1383 3.33707 56.0479 3.64756C55.9608 3.95498 55.83 4.22398 55.6557 4.45455C55.4846 4.68204 55.2731 4.85881 55.0213 4.98485C54.7695 5.11089 54.4789 5.17391 54.1496 5.17391C53.8235 5.17391 53.5378 5.11704 53.2924 5.00329C53.0503 4.88647 52.8453 4.722 52.6774 4.50988C52.5095 4.29776 52.3739 4.04875 52.2706 3.76285C52.1705 3.47387 52.0995 3.15722 52.0575 2.81291V2.43939C52.0995 2.07356 52.1705 1.74155 52.2706 1.44335C52.3739 1.14515 52.5095 0.88845 52.6774 0.673254C52.8453 0.458059 53.0503 0.292051 53.2924 0.175231C53.5346 0.0584102 53.817 0 54.1399 0C54.4692 0 54.7614 0.0614844 55.0164 0.184453C55.2715 0.304348 55.4862 0.476504 55.6605 0.700922C55.8349 0.922266 55.9656 1.18972 56.0528 1.50329C56.14 1.81379 56.1835 2.15964 56.1835 2.54084ZM55.0164 2.63768V2.54084C55.0164 2.31028 54.9938 2.09662 54.9486 1.89987C54.9034 1.70004 54.8324 1.52481 54.7356 1.37418C54.6387 1.22354 54.5144 1.10672 54.3627 1.02372C54.2142 0.937637 54.035 0.894598 53.8251 0.894598C53.6185 0.894598 53.4409 0.928415 53.2924 0.996047C53.1439 1.06061 53.0196 1.1513 52.9195 1.26812C52.8194 1.38494 52.742 1.52174 52.6871 1.67852C52.6322 1.83224 52.5934 1.99978 52.5708 2.18116V3.07576C52.6096 3.2971 52.6758 3.5 52.7694 3.68445C52.863 3.86891 52.9954 4.01647 53.1665 4.12714C53.3408 4.23474 53.5636 4.28854 53.8348 4.28854C54.0447 4.28854 54.2238 4.2455 54.3723 4.15942C54.5209 4.07334 54.6419 3.95498 54.7356 3.80435C54.8324 3.65064 54.9034 3.47387 54.9486 3.27404C54.9938 3.07422 55.0164 2.8621 55.0164 2.63768Z"], ["d", "M58.5466 1.04216V5.08169H57.3795V0.0922266H58.4933L58.5466 1.04216ZM60.1496 0.0599473L60.1399 1.09289C60.0688 1.08059 59.9914 1.07137 59.9074 1.06522C59.8267 1.05907 59.746 1.05599 59.6653 1.05599C59.4651 1.05599 59.2892 1.08366 59.1374 1.139C58.9857 1.19126 58.8582 1.26812 58.7548 1.36957C58.6548 1.46794 58.5773 1.58783 58.5224 1.72925C58.4675 1.87066 58.4352 2.02899 58.4255 2.20422L58.1592 2.22266C58.1592 1.90909 58.1915 1.61858 58.256 1.35112C58.3206 1.08366 58.4175 0.848485 58.5466 0.645586C58.679 0.442688 58.8436 0.284365 59.0406 0.170619C59.2407 0.0568731 59.4716 0 59.7331 0C59.8041 0 59.88 0.00614844 59.9607 0.0184453C60.0446 0.0307422 60.1076 0.0445762 60.1496 0.0599473Z"], ["d", "M60.7305 2.64229V2.53623C60.7305 2.17655 60.7854 1.843 60.8951 1.53557C61.0049 1.22508 61.1631 0.956083 61.3697 0.72859C61.5796 0.498024 61.8346 0.319719 62.1349 0.193676C62.4384 0.0645586 62.7806 0 63.1615 0C63.5457 0 63.888 0.0645586 64.1882 0.193676C64.4917 0.319719 64.7484 0.498024 64.9582 0.72859C65.1681 0.956083 65.3279 1.22508 65.4376 1.53557C65.5474 1.843 65.6023 2.17655 65.6023 2.53623V2.64229C65.6023 3.00198 65.5474 3.33553 65.4376 3.64295C65.3279 3.95037 65.1681 4.21937 64.9582 4.44993C64.7484 4.67743 64.4933 4.85573 64.1931 4.98485C63.8928 5.11089 63.5522 5.17391 63.1712 5.17391C62.787 5.17391 62.4432 5.11089 62.1397 4.98485C61.8395 4.85573 61.5844 4.67743 61.3746 4.44993C61.1647 4.21937 61.0049 3.95037 60.8951 3.64295C60.7854 3.33553 60.7305 3.00198 60.7305 2.64229ZM61.8976 2.53623V2.64229C61.8976 2.86671 61.9218 3.07883 61.9702 3.27866C62.0187 3.47848 62.0945 3.65371 62.1978 3.80435C62.3012 3.95498 62.4335 4.07334 62.5949 4.15942C62.7564 4.2455 62.9485 4.28854 63.1712 4.28854C63.3875 4.28854 63.5748 4.2455 63.733 4.15942C63.8944 4.07334 64.0268 3.95498 64.1301 3.80435C64.2334 3.65371 64.3093 3.47848 64.3577 3.27866C64.4094 3.07883 64.4352 2.86671 64.4352 2.64229V2.53623C64.4352 2.31489 64.4094 2.10584 64.3577 1.90909C64.3093 1.70927 64.2318 1.5325 64.1253 1.37879C64.0219 1.22508 63.8896 1.10518 63.7282 1.0191C63.57 0.929952 63.3811 0.885375 63.1615 0.885375C62.942 0.885375 62.7515 0.929952 62.5901 1.0191C62.4319 1.10518 62.3012 1.22508 62.1978 1.37879C62.0945 1.5325 62.0187 1.70927 61.9702 1.90909C61.9218 2.10584 61.8976 2.31489 61.8976 2.53623Z"], ["d", "M13.524 24.248H6.188L5.012 27.72H0L7.112 8.064H12.656L19.768 27.72H14.7L13.524 24.248ZM12.292 20.552L9.856 13.356L7.448 20.552H12.292Z"], ["d", "M27.2805 14.308C27.7285 13.58 28.3725 12.992 29.2125 12.544C30.0525 12.096 31.0139 11.872 32.0965 11.872C33.3845 11.872 34.5512 12.1987 35.5965 12.852C36.6419 13.5053 37.4632 14.4387 38.0605 15.652C38.6765 16.8653 38.9845 18.2747 38.9845 19.88C38.9845 21.4853 38.6765 22.904 38.0605 24.136C37.4632 25.3493 36.6419 26.292 35.5965 26.964C34.5512 27.6173 33.3845 27.944 32.0965 27.944C30.9952 27.944 30.0339 27.7293 29.2125 27.3C28.3912 26.852 27.7472 26.264 27.2805 25.536V27.72H22.4925V7H27.2805V14.308ZM34.1125 19.88C34.1125 18.6853 33.7765 17.752 33.1045 17.08C32.4512 16.3893 31.6392 16.044 30.6685 16.044C29.7165 16.044 28.9045 16.3893 28.2325 17.08C27.5792 17.7707 27.2525 18.7133 27.2525 19.908C27.2525 21.1027 27.5792 22.0453 28.2325 22.736C28.9045 23.4267 29.7165 23.772 30.6685 23.772C31.6205 23.772 32.4325 23.4267 33.1045 22.736C33.7765 22.0267 34.1125 21.0747 34.1125 19.88Z"], ["d", "M46.8444 7V27.72H42.0564V7H46.8444Z"], ["d", "M65.6022 19.656C65.6022 20.104 65.5742 20.5707 65.5182 21.056H54.6822C54.7569 22.0267 55.0649 22.7733 55.6062 23.296C56.1662 23.8 56.8476 24.052 57.6502 24.052C58.8449 24.052 59.6756 23.548 60.1423 22.54H65.2383C64.9769 23.5667 64.5009 24.4907 63.8103 25.312C63.1383 26.1333 62.2889 26.7773 61.2622 27.244C60.2356 27.7107 59.0876 27.944 57.8182 27.944C56.2876 27.944 54.9249 27.6173 53.7302 26.964C52.5356 26.3107 51.6022 25.3773 50.9302 24.164C50.2582 22.9507 49.9222 21.532 49.9222 19.908C49.9222 18.284 50.2489 16.8653 50.9022 15.652C51.5742 14.4387 52.5076 13.5053 53.7022 12.852C54.8969 12.1987 56.2689 11.872 57.8182 11.872C59.3302 11.872 60.6743 12.1893 61.8503 12.824C63.0262 13.4587 63.9409 14.364 64.5943 15.54C65.2663 16.716 65.6022 18.088 65.6022 19.656ZM60.7022 18.396C60.7022 17.5747 60.4222 16.9213 59.8622 16.436C59.3022 15.9507 58.6022 15.708 57.7622 15.708C56.9596 15.708 56.2783 15.9413 55.7183 16.408C55.1769 16.8747 54.8409 17.5373 54.7102 18.396H60.7022Z"], [1, "version"], [3, "menus"], ["visibility", "hover"], [1, "app-container"], [1, "main-body"], [1, "page-wrapper"]],
                    template: function(o, a) {
                        1 & o && (t.TgZ(0, "mat-drawer-container", 0)(1, "mat-drawer", 1, 2)(3, "nav")(4, "div", 3)(5, "div", 4)(6, "a", 5),
                        t.O4$(),
                        t.TgZ(7, "svg", 6),
                        t._UZ(8, "path", 7)(9, "path", 8)(10, "path", 9)(11, "path", 10)(12, "path", 11)(13, "path", 12)(14, "path", 13),
                        t.qZA(),
                        t.kcU(),
                        t.TgZ(15, "span", 14),
                        t._uU(16),
                        t.qZA()()(),
                        t._UZ(17, "app-vertical-menu", 15),
                        t.qZA()()(),
                        t._UZ(18, "app-nav-bar"),
                        t.TgZ(19, "ng-scrollbar", 16)(20, "div", 17),
                        t._UZ(21, "app-breadcrumb"),
                        t.TgZ(22, "div", 18)(23, "div", 19),
                        t._UZ(24, "router-outlet"),
                        t.qZA()()(),
                        t._UZ(25, "app-footer"),
                        t.qZA()()),
                        2 & o && (t.ekj("drawer-container--pc-sidebar-closed", a.isSidebarClosed),
                        t.xp6(1),
                        t.Q6J("mode", a.modeValue),
                        t.xp6(15),
                        t.hij(" v", a.currentApplicationVersion, " "),
                        t.xp6(1),
                        t.Q6J("menus", a.menus))
                    },
                    styles: [".app-container[_ngcontent-%COMP%]{padding-left:40px;padding-right:40px;padding-top:84px;min-height:calc(100vh - 146px)}@media only screen and (max-width: 1024px){  .mat-drawer-content .app-container{padding-left:15px;padding-right:15px}}"]
                })
            }
            return e
        }
        )();
        t.B6R(be, [L, N.KC, Ct.jA, Ct.kh, s.lC, ge, Mn, On], []);
        const Nn = [{
            path: "assignment",
            loadChildren: () => Promise.all([i.e(393), i.e(823), i.e(600), i.e(251), i.e(112), i.e(353), i.e(635), i.e(130), i.e(592), i.e(217)]).then(i.bind(i, 1217)).then(e => e.AssignmentModule)
        }, {
            path: "final-examination",
            canDeactivate: [Rn.k],
            canActivate: [zt.p, Ht.I],
            loadComponent: () => Promise.all([i.e(393), i.e(251), i.e(112), i.e(635), i.e(130), i.e(592), i.e(505)]).then(i.bind(i, 3505))
        }, {
            path: "final-examination-result",
            canActivate: [zt.p, Ht.I],
            loadComponent: () => Promise.all([i.e(592), i.e(377)]).then(i.bind(i, 2377))
        }, {
            path: "admin",
            component: be,
            children: [{
                path: "",
                redirectTo: "component",
                pathMatch: "prefix"
            }, {
                path: "component",
                loadChildren: () => i.e(508).then(i.bind(i, 6508)).then(e => e.UiComponentModule),
                data: {
                    title: "Course review"
                }
            }, {
                path: "widget",
                loadChildren: () => i.e(413).then(i.bind(i, 7413)).then(e => e.WidgetModule),
                data: {
                    title: "Course review"
                }
            }]
        }, {
            path: "learning",
            loadChildren: () => Promise.all([i.e(393), i.e(823), i.e(112), i.e(950), i.e(540), i.e(449)]).then(i.bind(i, 5540)).then(e => e.LearningModule)
        }, {
            path: "course-review/:id",
            loadComponent: () => i.e(14).then(i.bind(i, 8014)),
            data: {
                title: "Course review"
            }
        }, {
            path: "app-installation-notification",
            loadComponent: () => Promise.all([i.e(393), i.e(823), i.e(600), i.e(251), i.e(353), i.e(656)]).then(i.bind(i, 1656)),
            data: {
                title: "App installation notification"
            }
        }, {
            path: "require-update-email-password-for-first-time",
            loadComponent: () => i.e(199).then(i.bind(i, 1199)),
            data: {
                title: "Require update email password for first time"
            }
        }, {
            path: "",
            component: ve,
            canActivate: [zt.p, Ht.I],
            children: [{
                path: "dashboard",
                loadChildren: () => Promise.all([i.e(393), i.e(823), i.e(600), i.e(251), i.e(353)]).then(i.bind(i, 8353)).then(e => e.DashboardModule)
            }, {
                path: "",
                redirectTo: "dashboard",
                pathMatch: "full"
            }]
        }, {
            path: "",
            component: A,
            children: [{
                path: "auth",
                loadChildren: () => i.e(836).then(i.bind(i, 4836)).then(e => e.AuthModule)
            }]
        }, {
            path: "**",
            redirectTo: "dashboard",
            pathMatch: "full"
        }];
        let Kn = ( () => {
            class e {
                static #t = this.ɵfac = function(o) {
                    return new (o || e)
                }
                ;
                static #e = this.ɵmod = t.oAB({
                    type: e
                });
                static #n = this.ɵinj = t.cJS({
                    imports: [s.Bz.forRoot(Nn), s.Bz]
                })
            }
            return e
        }
        )();
        var yt = i(155)
          , Wn = i(5047)
          , Ee = i(409)
          , Fn = i(8132)
          , zn = i(9880)
          , Ce = i(6188)
          , xe = i(3489)
          , Tt = i(4787)
          , Pt = i(7560)
          , At = i(1209)
          , H = i(8239);
        function Me() {
            return typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : this
        }
        let Yt = function() {
            var e = (0,
            H.Z)(function*() {
                let l = !1;
                if (navigator.brave && navigator.brave.isBrave)
                    try {
                        l = yield Promise.race([navigator.brave.isBrave(), new Promise(n => setTimeout( () => n(!1), 1e3))])
                    } catch {}
                return Yt = function() {
                    var n = (0,
                    H.Z)(function*() {
                        return l
                    });
                    return function() {
                        return n.apply(this, arguments)
                    }
                }(),
                l
            });
            return function() {
                return e.apply(this, arguments)
            }
        }();
        const Mt = Me()
          , X = Mt?.navigator?.userAgent || "unknown"
          , Qt = "InstallTrigger"in (Mt?.window || {}) || /firefox/i.test(X)
          , Jt = /trident/i.test(X) || /msie/i.test(X)
          , Gt = /edge/i.test(X) || /EdgiOS/i.test(X)
          , Jn = /webkit/i.test(X)
          , Gn = /IqiyiApp/.test(X)
          , ft = typeof Mt?.window?.chrome < "u" || /chrome/i.test(X) || /CriOS/i.test(X)
          , ye = ("[object SafariRemoteNotification]" === (Mt?.window?.safari?.pushNotification || !1).toString() || /safari/i.test(X),
        "function" == typeof Mt.document?.createElement);
        function $t(e) {
            if (ye && console) {
                if (!Jt && !Gt)
                    return console[e];
                if ("log" === e || "clear" === e)
                    return (...l) => {
                        console[e].apply(console, l)
                    }
            }
            return (...l) => {}
        }
        const vt = $t("log")
          , Te = $t("table")
          , _t = $t("clear");
        function gt(e={}) {
            const {includes: l=[], excludes: n=[]} = e;
            let o = !1
              , a = !1;
            for (const h of l)
                if (!0 === h) {
                    o = !0;
                    break
                }
            for (const h of n)
                if (!0 === h) {
                    a = !0;
                    break
                }
            return o && !a
        }
        const Pe = / /;
        let Xt = !1;
        Pe.toString = () => (Xt = !0,
        Ae.name);
        const Ae = {
            name: "dep-reg-to-string",
            isOpen: () => (0,
            H.Z)(function*() {
                return Xt = !1,
                Te({
                    dep: Pe
                }),
                _t(),
                Xt
            })(),
            isEnable: () => (0,
            H.Z)(function*() {
                return gt({
                    includes: [!0],
                    excludes: [Qt, Jt]
                })
            })()
        }
          , we = function Yn(...e) {
            const l = Me();
            return l?.document ? l.document.createElement(...e) : {}
        }("div");
        let qt = !1;
        Object.defineProperty(we, "id", {
            get: () => (qt = !0,
            De.name),
            configurable: !0
        });
        const De = {
            name: "element-id",
            isOpen: () => (0,
            H.Z)(function*() {
                return qt = !1,
                vt(we),
                _t(),
                qt
            })(),
            isEnable: () => (0,
            H.Z)(function*() {
                return gt({
                    includes: [!0],
                    excludes: [Jt, Gt, Qt]
                })
            })()
        }
          , Xn = /macintosh/i.test(X)
          , Se = /ipad/i.test(X) || Xn && navigator.maxTouchPoints > 1
          , Ie = /iphone/i.test(X);
        function ke() {}
        /android/i.test(X),
        /windows/i.test(X);
        let te = 0;
        ke.toString = () => (te++,
        "");
        const qn = {
            name: "function-to-string",
            isOpen: () => (0,
            H.Z)(function*() {
                return te = 0,
                vt(ke),
                _t(),
                2 === te
            })(),
            isEnable: () => (0,
            H.Z)(function*() {
                const e = Se || Ie;
                return gt({
                    includes: [!0],
                    excludes: [Gn, Qt, e && ft, e && Gt]
                })
            })()
        }
          , Le = / /;
        let ee = !1;
        Le.toString = () => (ee = !0,
        Be.name);
        const Be = {
            name: "reg-to-string",
            isOpen: () => (0,
            H.Z)(function*() {
                return ee = !1,
                vt(Le),
                _t(),
                ee
            })(),
            isEnable: () => (0,
            H.Z)(function*() {
                return gt({
                    includes: [!0],
                    excludes: [Jn]
                })
            })()
        };
        function bt() {
            return typeof performance < "u" ? performance.now() : Date.now()
        }
        const ti = {
            name: "debugger-checker",
            isOpen: () => (0,
            H.Z)(function*() {
                const e = bt();
                try {
                    (function() {}
                    ).constructor("debugger")()
                } catch {}
                return bt() - e > 100
            })(),
            isEnable: () => (0,
            H.Z)(function*() {
                return !0
            })()
        };
        var Ue = new Date;
        let ne = 0;
        Ue.toString = () => (ne++,
        "");
        const ei = {
            name: "date-to-string",
            isOpen: () => (0,
            H.Z)(function*() {
                return ne = 0,
                vt(Ue),
                _t(),
                2 === ne
            })(),
            isEnable: () => (0,
            H.Z)(function*() {
                return gt({
                    includes: [ft],
                    excludes: [(Se || Ie) && ft]
                })
            })()
        };
        let ie = null;
        function Dt() {
            return null === ie && (ie = function ii() {
                const e = function ni() {
                    const e = {};
                    for (let l = 0; l < 500; l++)
                        e[`${l}`] = `${l}`;
                    return e
                }()
                  , l = [];
                for (let n = 0; n < 50; n++)
                    l.push(e);
                return l
            }()),
            ie
        }
        let St = 0;
        const oi = {
            name: "performance",
            isOpen: () => (0,
            H.Z)(function*() {
                const e = function ai() {
                    const e = Dt()
                      , l = bt();
                    return Te(e),
                    bt() - l
                }()
                  , l = Math.max(je(), je());
                return St = Math.max(St, l),
                _t(),
                0 !== e && (0 === St ? yield Yt() : e > 10 * St)
            })(),
            isEnable: () => (0,
            H.Z)(function*() {
                return gt({
                    includes: [ft],
                    excludes: []
                })
            })()
        };
        function je() {
            const e = Dt()
              , l = bt();
            return vt(e),
            bt() - l
        }
        const ri = {
            name: "eruda",
            isOpen: () => (0,
            H.Z)(function*() {
                return typeof eruda < "u" && !0 === eruda?._devTools?._isShow
            })(),
            isEnable: () => (0,
            H.Z)(function*() {
                return !0
            })()
        };
        let oe = !1;
        const ae = {
            header: () => (oe = !0,
            null)
        }
          , si = {
            name: "DevtoolsFormatters",
            isOpen: () => (0,
            H.Z)(function*() {
                return window.devtoolsFormatters ? -1 === window.devtoolsFormatters.indexOf(ae) && window.devtoolsFormatters.push(ae) : window.devtoolsFormatters = [ae],
                oe = !1,
                vt({}),
                _t(),
                oe
            })(),
            isEnable: () => (0,
            H.Z)(function*() {
                return !0
            })()
        }
          , di = (X || "").match(/\w+\/(\d|\.)+(\s|$)/gi) || []
          , pi = {};
        for (const e of di) {
            const [l,n] = e.split("/");
            pi[l] = n
        }
        const Et = new class $n {
            constructor({checkers: l}) {
                this._listeners = [],
                this._isOpen = !1,
                this._detectLoopStopped = !0,
                this._detectLoopDelay = 500,
                this._checkers = l.slice()
            }
            get isOpen() {
                return this._isOpen
            }
            launch() {
                
            }
            stop() {
                this._detectLoopStopped || (this._detectLoopStopped = !0,
                this._isOpen = !1,
                clearTimeout(this._timer))
            }
            isLaunch() {
                return !this._detectLoopStopped
            }
            setDetectDelay(l) {
                this._detectLoopDelay = l
            }
            addListener(l) {
                this._listeners.push(l)
            }
            removeListener(l) {
                this._listeners = this._listeners.filter(n => n !== l)
            }
            _broadcast(l) {
                for (const n of this._listeners)
                    try {
                        n(l.isOpen, l)
                    } catch {}
            }
            _detectLoop() {
                var l = this;
                return (0,
                H.Z)(function*() {
                    let n = !1
                      , o = "";
                    for (const a of l._checkers)
                        if ((yield a.isEnable()) && (o = a.name,
                        n = yield a.isOpen()),
                        n)
                            break;
                    n != l._isOpen && (l._isOpen = n,
                    l._broadcast({
                        isOpen: n,
                        checkerName: o
                    })),
                    l._detectLoopDelay > 0 && !l._detectLoopStopped ? l._timer = setTimeout( () => {
                        l._detectLoop()
                    }
                    , l._detectLoopDelay) : l.stop()
                })()
            }
        }
        ({
            checkers: [ri, De, Be, qn, Ae, ei, si, oi, ti]
        });
        var ce = i(973)
          , mi = i(2866)
          , le = i.n(mi)
          , fi = i(6405)
          , vi = i(2692)
          , Re = i(6682);
        function bi(e, l) {
            1 & e && (t.TgZ(0, "div"),
            t._UZ(1, "mat-progress-bar", 16),
            t.qZA())
        }
        function Ei(e, l) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "div", 24)(1, "div", 25)(2, "div", 26)(3, "span", 27),
                t._uU(4, "Hướng dẫn cài đặt thời gian"),
                t.qZA()(),
                t.TgZ(5, "div", 28)(6, "button", 29),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const a = t.oxw(2)
                      , h = t.MAs(20);
                    return t.KtG(a.openPanel(h))
                }),
                t.O4$(),
                t.TgZ(7, "svg", 30)(8, "g"),
                t._UZ(9, "polygon", 31)(10, "polygon", 32)(11, "polygon", 33)(12, "polygon", 34),
                t.qZA()(),
                t._uU(13, " Window 10 "),
                t.qZA(),
                t.kcU(),
                t.TgZ(14, "button", 29),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const a = t.oxw(2)
                      , h = t.MAs(22);
                    return t.KtG(a.openPanel(h))
                }),
                t.O4$(),
                t.TgZ(15, "svg", 35)(16, "g"),
                t._UZ(17, "path", 36),
                t.qZA()(),
                t._uU(18, " Window 11 "),
                t.qZA()()(),
                t.kcU(),
                t.TgZ(19, "a", 37),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const a = t.oxw(2);
                    return t.KtG(a.closeAllDialog())
                }),
                t.O4$(),
                t.TgZ(20, "svg", 38)(21, "g")(22, "g")(23, "g"),
                t._UZ(24, "circle", 39)(25, "path", 40)(26, "path", 41)(27, "path", 42)(28, "circle", 43)(29, "circle", 44)(30, "circle", 45)(31, "circle", 46)(32, "circle", 47)(33, "circle", 48)(34, "circle", 49),
                t.qZA()()()(),
                t._uU(35, " Mở cài đặt thời gian"),
                t.qZA()()
            }
        }
        function Ci(e, l) {
            if (1 & e && (t.TgZ(0, "div", 17)(1, "div", 18)(2, "div", 19),
            t.O4$(),
            t.TgZ(3, "svg", 20),
            t._UZ(4, "path", 21),
            t.qZA(),
            t.kcU(),
            t.TgZ(5, "h2", 22),
            t._uU(6, "Cảnh báo!"),
            t.qZA(),
            t.TgZ(7, "p", 22),
            t._uU(8, "Thời gian trên thiết bị của bạn sai lệch quá lớn so với thời gian của hệ thống iBLS. Bạn vui lòng cài đặt timezone của thiết bị hiện tại là "),
            t.TgZ(9, "mark"),
            t._uU(10, "UTC+07"),
            t.qZA(),
            t._uU(11, " và đồng bộ thời gian cho đúng với thời gian của hệ thống internet toàn cầu. "),
            t.qZA(),
            t.YNc(12, Ei, 36, 0, "div", 23),
            t.qZA()()()),
            2 & e) {
                const n = t.oxw();
                t.xp6(12),
                t.Q6J("ngIf", "windows" === n.platform())
            }
        }
        function xi(e, l) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "div", 50)(1, "button", 51),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const a = t.oxw();
                    return t.KtG(a.closePanel())
                }),
                t.qZA(),
                t.TgZ(2, "div", 52)(3, "h4", 53),
                t._uU(4, "Hướng dẫn đồng bộ thời gian trên window 10"),
                t.qZA(),
                t.TgZ(5, "div", 54)(6, "h5", 55),
                t._uU(7, "Bước 1: Click vào nút mở cài đặt thời gian từ giao diện hệ thống"),
                t.qZA(),
                t.TgZ(8, "figure"),
                t._UZ(9, "img", 56),
                t.qZA(),
                t.TgZ(10, "h5", 57),
                t._uU(11, "Bước 2: Chọn Open Settings trên hộp thoại xác nhận"),
                t.qZA(),
                t.TgZ(12, "figure"),
                t._UZ(13, "img", 56),
                t.qZA(),
                t.TgZ(14, "h5", 58),
                t._uU(15, "Bước 3: Trong phần cài đặt Date & time bạn thực hiện tuần tự theo như hướng dẫn dưới đây"),
                t.qZA(),
                t.TgZ(16, "ul")(17, "li")(18, "b"),
                t._uU(19, "1."),
                t.qZA(),
                t._uU(20, " Trên dòng 'Set time automatically' click chuyển sang trạng thái 'on'"),
                t.qZA(),
                t.TgZ(21, "li")(22, "b"),
                t._uU(23, "2."),
                t.qZA(),
                t._uU(24, " Trên dòng 'Synchronize your clock' chọn 'Sync now' và chờ cho đến khi xuất hiện dấu tích hiện bên cạnh "),
                t.qZA()(),
                t.TgZ(25, "figure"),
                t._UZ(26, "img", 56),
                t.qZA(),
                t.TgZ(27, "mark"),
                t._uU(28, "Chú ý: Sau khi click vào 'Sync now' mà không xuất hiện dấu tích hoặc xuất hiện dấu 'x' là do quá trình cập nhật thời gian bị thất bại. Lúc này bạn cần phải chọn lại 'Sync now' và chờ cho đến khi thành công."),
                t.qZA()()()()
            }
            if (2 & e) {
                const n = t.oxw();
                t.xp6(9),
                t.Q6J("src", "assets/images/setting-date-and-time/b1.jpg?v=" + n.version(), t.LSH),
                t.xp6(4),
                t.Q6J("src", "assets/images/setting-date-and-time/b2.jpg?v=" + n.version(), t.LSH),
                t.xp6(13),
                t.Q6J("src", "assets/images/setting-date-and-time/win-10-b3.jpg?v=" + n.version(), t.LSH)
            }
        }
        function Mi(e, l) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "div", 50)(1, "button", 51),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const a = t.oxw();
                    return t.KtG(a.closePanel())
                }),
                t.qZA(),
                t.TgZ(2, "div", 52)(3, "h4", 53),
                t._uU(4, "Hướng dẫn đồng bộ thời gian trên window 11"),
                t.qZA(),
                t.TgZ(5, "div", 54)(6, "h5", 55),
                t._uU(7, "Bước 1: Click vào nút mở cài đặt thời gian từ giao diện hệ thống"),
                t.qZA(),
                t.TgZ(8, "figure"),
                t._UZ(9, "img", 56),
                t.qZA(),
                t.TgZ(10, "h5", 57),
                t._uU(11, "Bước 2: Chọn Open Settings trên hộp thoại xác nhận"),
                t.qZA(),
                t.TgZ(12, "figure"),
                t._UZ(13, "img", 56),
                t.qZA(),
                t.TgZ(14, "h5", 58),
                t._uU(15, "Bước 3: Trong phần cài đặt Date & time bạn thực hiện tuần tự theo như hướng dẫn dưới đây"),
                t.qZA(),
                t.TgZ(16, "ul")(17, "li")(18, "b"),
                t._uU(19, "1."),
                t.qZA(),
                t._uU(20, " Trên dòng 'Set time zone automatically' click chuyển sang trạng thái 'on'"),
                t.qZA(),
                t.TgZ(21, "li")(22, "b"),
                t._uU(23, "2."),
                t.qZA(),
                t._uU(24, " Trên dòng 'Set time automatically' click chuyển sang trạng thái 'on'"),
                t.qZA(),
                t.TgZ(25, "li")(26, "b"),
                t._uU(27, "3."),
                t.qZA(),
                t._uU(28, " Trên mục 'Additional settings' -> 'Sync now' chọn 'Sync now' và chờ cho đến khi xuất hiện dấu tích hiện bên cạnh "),
                t.qZA()(),
                t.TgZ(29, "figure"),
                t._UZ(30, "img", 56),
                t.qZA(),
                t.TgZ(31, "mark"),
                t._uU(32, "Chú ý: Sau khi click vào 'Sync now' mà không xuất hiện dấu tích hoặc xuất hiện dấu 'x' là do quá trình cập nhật thời gian bị thất bại. Lúc này bạn cần phải chọn lại 'Sync now' và chờ cho đến khi thành công."),
                t.qZA()()()()
            }
            if (2 & e) {
                const n = t.oxw();
                t.xp6(9),
                t.Q6J("src", "assets/images/setting-date-and-time/b1.jpg?v=" + n.version(), t.LSH),
                t.xp6(4),
                t.Q6J("src", "assets/images/setting-date-and-time/b2.jpg?v=" + n.version(), t.LSH),
                t.xp6(17),
                t.Q6J("src", "assets/images/setting-date-and-time/win-11-b3.jpg?v=" + n.version(), t.LSH)
            }
        }
        let Oi = ( () => {
            class e {
                onWindowResize() {
                    this.measureDeviceScreenSize()
                }
                constructor(n, o, a, h) {
                    this.router = n,
                    this.auth = o,
                    this.notification = a,
                    this.deviceService = h,
                    this.isSpinnerVisible = !0,
                    this.isInternetConnected = !0,
                    this.destroy$ = new T.x,
                    this.notifyLostConnection = "hide",
                    this.appVersion = w.NZ.appVersion + " " + Zt.X8,
                    this.version = (0,
                    t.tdS)(w.NZ.appVersion),
                    this.isDeveloperToolOpenedYet = !1,
                    this.removePreviousDeveloperToolTracking = new T.x,
                    this.onDeveloperToolOpened = new T.x,
                    this.iOnlineSocket = (0,
                    t.f3M)(ce.XH),
                    this.showNoticeTimeDifference = (0,
                    t.tdS)(!1),
                    this.platform = (0,
                    t.tdS)((0,
                    Y.Ij)()),
                    this.checkDifferenceTimeObserver = new T.x,
                    document.body.classList.add(w.NZ.deploy.client + "-theme-panel"),
                    this.checkDifferenceTimeObserver.asObservable().pipe((0,
                    Ot.sL)()).subscribe( () => {
                        this.checkDifferenceTimeBetweenServerAndClient()
                    }
                    ),
                    w.NZ.deploy.supportForMobile || !this.deviceService.isTablet() && !this.deviceService.isMobile() ? (this.router.events.pipe((0,
                    x.R)(this.destroy$)).subscribe({
                        next: m => {
                            m instanceof s.OD ? this.isSpinnerVisible = !0 : (m instanceof s.m2 || m instanceof s.gk || m instanceof s.Q3) && (this.isSpinnerVisible = !1)
                        }
                        ,
                        error: () => this.isSpinnerVisible = !1
                    }),
                    this.auth.onGetToLoginPage.pipe((0,
                    x.R)(this.destroy$), (0,
                    yt.b)(100)).subscribe( () => this.router.navigateByUrl("/auth/login")),
                    this.notification.onSignOut.pipe((0,
                    x.R)(this.destroy$), (0,
                    yt.b)(100)).subscribe( () => this.auth.logout()),
                    (0,
                    Wn.T)((0,
                    Ee.R)(window, "offline").pipe((0,
                    V.U)( () => !1)), (0,
                    Ee.R)(window, "online").pipe((0,
                    V.U)( () => !0)), new Fn.y(m => {
                        m.next(navigator.onLine),
                        m.complete()
                    }
                    )).pipe((0,
                    x.R)(this.destroy$)).subscribe(m => {
                        this.isInternetConnected = m,
                        this.notifyLostConnection = m ? "hide" : "show"
                    }
                    ),
                    window.oncontextmenu = () => !1,
                    this.auth.onHasANewVersion.subscribe(m => this.showNoticeVersionUpdates(m)),
                    this.notification.onRemeasureDeviceScreen.pipe((0,
                    x.R)(this.destroy$), (0,
                    yt.b)(100)).subscribe( () => this.measureDeviceScreenSize()),
                    this.notification.onDevtoolOpened.pipe((0,
                    x.R)(this.destroy$), (0,
                    yt.b)(100), (0,
                    y.h)(Boolean), (0,
                    me.q)(1)).subscribe( () => {
                        this.enableShowModeDevTool()
                    }
                    ),
                    w.NZ.production && (this.startDeveloperToolTracking(),
                    function ui(e) {
                        Et.addListener(e)
                    }(m => {
                        this.isDeveloperToolOpenedYet = m,
                        m ? this.onDeveloperToolOpened.next(m) : (this.removePreviousDeveloperToolTracking.next("clear"),
                        this.startDeveloperToolTracking())
                    }
                    ),
                    function gi(e) {
                        Et.setDetectDelay(e)
                    }(1e3),
                    function hi() {
                        Et.launch()
                    }()),
                    this.measureDeviceScreenSize(),
                    this.checkDifferenceTimeObserver.next()) : ("/app-installation-notification" !== new URL(window.location.href).pathname && this.router.navigateByUrl("app-installation-notification"),
                    setTimeout( () => {
                        this.isSpinnerVisible = !1
                    }
                    , 500))
                }
                startDeveloperToolTracking() {
                    this.onDeveloperToolOpened.pipe((0,
                    V.U)( () => !1), (0,
                    zn.z)( () => (0,
                    ot.H)(5e3).pipe((0,
                    V.U)( () => this.isDeveloperToolOpenedYet))), (0,
                    y.h)(Boolean), (0,
                    x.R)(this.removePreviousDeveloperToolTracking)).subscribe(n => {
                        n && (this.notification.noticeDevtoolOpened(),
                        function _i() {
                            Et.stop()
                        }())
                    }
                    )
                }
                enableShowModeDevTool() {
                    this.notification.toastError("Hệ thống phát hiện bạn đã mở developer tools!", "Cảnh báo"),
                    this.showWarningDevtoolMessage(),
                    (0,
                    Ce.F)(2e3).pipe((0,
                    x.R)(this.destroy$)).subscribe( () => this.showWarningDevtoolMessage()),
                    (0,
                    Ce.F)(5e3).pipe((0,
                    x.R)(this.destroy$)).subscribe( () => this.notification.toastError("Hệ thống phát hiện bạn đã mở developer tools!", "Cảnh báo"))
                }
                showWarningDevtoolMessage() {
                    document.body.classList.contains("developer-tools-opened") || document.body.classList.add("developer-tools-opened");
                    const n = document.body.querySelector("#notice-developer-tools-opened");
                    n && n.remove();
                    const o = Object.assign(document.createElement("p"), {
                        id: "notice-developer-tools-opened",
                        innerText: "Hệ thống đã phát hiện bạn vừa mở developer tools. Việc làm này làm ảnh hưởng đến hoạt động của hệ thống. Yêu cầu bạn tắt developer tools và refresh lại trình duyệt để hoạt động của hệ thống trở lại bình thường."
                    });
                    document.body.appendChild((0,
                    Y.jb)(o, {
                        display: "block",
                        color: "#fff",
                        backgroundColor: "#e41749",
                        position: "fixed",
                        zIndex: "999999999",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        fontFamily: "Roboto",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "1.5",
                        padding: "5px",
                        margin: "0",
                        borderRadius: "0",
                        textAlign: "center",
                        width: "100%"
                    }))
                }
                showNoticeVersionUpdates(n) {
                    this.notification.confirm({
                        heading: "Thông báo cập nhật",
                        message: `<p class="m-0 text-secondary --fs-15">Ứng dụng đã có phiên bản mới <span class="text-warning">${n}</span></p> <p class="m-0 text-secondary --fs-15">Vui lòng nhấn <span class="text-primary">CẬP NHẬT</span> để nâng cấp lên phiên bản mới nhất.</p>`,
                        buttons: [{
                            label: "CẬP NHẬT",
                            icon: "pi pi-sync",
                            readonly: !1,
                            ngStyle: {
                                "font-size": "13px",
                                padding: "12px 15px",
                                "border-radius": "4px",
                                outline: "none",
                                "box-shadow": "none"
                            }
                        }]
                    }).subscribe( () => {
                        const h = new URL(window.location.href);
                        h.searchParams.set("version", n),
                        window.location.assign(h.toString())
                    }
                    )
                }
                measureDeviceScreenSize() {
                    const n = Object.assign(document.createElement("div"), {
                        classList: "element-app-checker"
                    });
                    document.body.appendChild((0,
                    Y.jb)(n, {
                        position: "fixed",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0",
                        zIndex: "-999999"
                    })),
                    document.body.style.setProperty("--max-screen-height", n.clientHeight + "px"),
                    document.body.style.setProperty("--max-screen-width", n.clientWidth + "px"),
                    setTimeout( () => n.remove(), 1e3)
                }
                ngAfterViewInit() {
                    this.measureDeviceScreenSize(),
                    this.auth.hasBeenAuthenticated && this.iOnlineSocket.online()
                }
                closeLostConnectionNotice() {
                    this.notifyLostConnection = "hide"
                }
                checkDifferenceTimeBetweenServerAndClient() {
                    const o = (new Date).getTimezoneOffset() / 60 * -1;
                    this.getServerDateTime().pipe((0,
                    y.h)(Boolean), (0,
                    x.R)(this.destroy$)).subscribe(a => {
                        const h = le().utc(a.date)
                          , E = le().utc().diff(h)
                          , K = Math.abs(le().duration(E).asMinutes());
                        this.showNoticeTimeDifference.set(K > 1 || 7 !== o)
                    }
                    )
                }
                getServerDateTime() {
                    return (0,
                    xe.D)(fetch(w.li)).pipe((0,
                    Tt.w)(n => (0,
                    xe.D)(n.json())), (0,
                    Pt.K)( () => (0,
                    At.of)(null)))
                }
                openPanel(n) {
                    this.dialogRef = this.notification.dialog.open(n, {
                        disableClose: !0,
                        panelClass: "dashboard-dialog"
                    })
                }
                closePanel() {
                    this.dialogRef && this.dialogRef.close("")
                }
                closeAllDialog() {
                    this.notification.dialog.closeAll()
                }
                ngOnDestroy() {
                    this.destroy$.next(),
                    this.destroy$.complete(),
                    this.iOnlineSocket.close()
                }
                static #t = this.ɵfac = function(o) {
                    return new (o || e)(t.Y36(s.F0),t.Y36(lt.e),t.Y36(B.g),t.Y36(fi.x0))
                }
                ;
                static #e = this.ɵcmp = t.Xpm({
                    type: e,
                    selectors: [["app-root"]],
                    hostAttrs: [1, "ictu-app-root"],
                    hostBindings: function(o, a) {
                        1 & o && t.NdJ("resize", function() {
                            return a.onWindowResize()
                        }, !1, t.Jf7)
                    },
                    decls: 23,
                    vars: 8,
                    consts: [[4, "ngIf"], ["position", "bottom-left", 3, "preventOpenDuplicates", "life"], [1, "app-version"], [1, "app-version__connect-status"], [1, "ictu-connection-checker"], [1, "ictu-connection-checker__icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24"], ["fill", "currentColor", "d", "M6.92,5.51h0L3.71,2.29A1,1,0,0,0,2.29,3.71L4.56,6A15.21,15.21,0,0,0,1.4,8.39a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.7-.29A13.07,13.07,0,0,1,6.05,7.46L7.54,9a10.78,10.78,0,0,0-3.32,2.27,1,1,0,1,0,1.42,1.4,8.8,8.8,0,0,1,3.45-2.12l1.62,1.61a7.07,7.07,0,0,0-3.66,1.94,1,1,0,1,0,1.42,1.4A5,5,0,0,1,12,14a4.13,4.13,0,0,1,.63.05l7.66,7.66a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM12,16a3,3,0,1,0,3,3A3,3,0,0,0,12,16Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,20ZM22.61,8.39A15,15,0,0,0,10.29,4.1a1,1,0,1,0,.22,2A13.07,13.07,0,0,1,21.2,9.81a1,1,0,0,0,1.41-1.42Zm-4.25,4.24a1,1,0,0,0,1.42-1.4,10.75,10.75,0,0,0-4.84-2.82,1,1,0,1,0-.52,1.92A8.94,8.94,0,0,1,18.36,12.63Z"], [1, "ictu-connection-checker__details"], [1, "ictu-connection-checker__title"], [1, "ictu-connection-checker__desc"], [1, "ictu-connection-checker__btn-reconnect", 3, "click"], ["type", "button", "pRipple", "", "pButton", "", "icon", "pi pi-times", 1, "ictu-connection-checker__close--times", "p-button-text", "p-button-rounded", "p-button-secondary", 3, "click"], ["class", "ictu-notice-unreached-server-time position-fixed d-flex justify-content-center align-items-center w-100 h-100", 4, "ngIf"], ["win10Guide", ""], ["win11Guide", ""], ["mode", "indeterminate", "value", "40", 1, "loader"], [1, "ictu-notice-unreached-server-time", "position-fixed", "d-flex", "justify-content-center", "align-items-center", "w-100", "h-100"], [1, "ictu-notice-unreached-server-time__content", "d-flex", "align-items-center", "justify-content-center", "intro-y"], [1, "d-flex", "flex-column", "align-items-center", "d-flex", "flex-column", "align-items-center", "w-100"], ["stroke", "currentColor", "stroke-width", "0", "viewBox", "0 0 512 512", "height", "1em", "width", "1em", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z", "fill", "#2563eb"], [1, "font-primary"], ["class", "notify-invalid-signature__platform", 4, "ngIf"], [1, "notify-invalid-signature__platform"], [1, "notify-invalid-signature__guide"], [1, "notify-invalid-signature__guide__separator"], [1, "notify-invalid-signature__guide__separator__label"], [1, "notify-invalid-signature__guide__buttons"], ["pRipple", "", 1, "notify-invalid-signature__guide__buttons__btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "viewBox", "0 0 512 512", 2, "color", "#2196F3"], ["points", "224,240 224,52 0,80 0,240  ", 2, "fill", "currentColor"], ["points", "256,240 512,240 512,16 256,48  ", 2, "fill", "currentColor"], ["points", "256,272 256,464 512,496 512,272  ", 2, "fill", "currentColor"], ["points", "224,272 0,272 0,432 224,460  ", 2, "fill", "currentColor"], ["xmlns", "http://www.w3.org/2000/svg", "height", "512", "viewBox", "0 0 135.46666 135.46667", "width", "512", 2, "color", "#03A9F4"], ["d", "m3.3094777 6.5827458c-1.8338001 0-3.30950008 1.48442-3.30950008 3.31905v49.2524602c0 1.835211 1.48059998 3.30976 3.30950008 3.30976h55.8361013c1.834798 0 3.319201-1.47542 3.319201-3.30976v-49.2524602c0-1.83511-1.480601-3.31905-3.319201-3.31905zm73.0038003 0c-1.8357 0-3.309498 1.48442-3.309498 3.31905v49.2524602c0 1.835211 1.4806 3.30976 3.309498 3.30976h55.843902c1.8357 0 3.3095-1.47542 3.3095-3.30976v-49.2524602c0-1.83511-1.4806-3.31905-3.3095-3.31905zm-73.0038003 66.4196112c-1.8338001 0-3.30950008 1.484331-3.30950008 3.31915v49.252453c0 1.8352 1.48059998 3.30995 3.30950008 3.30995h55.8361013c1.834798-.00019 3.319201-1.47542 3.319201-3.30995v-49.252453c0-1.83511-1.480601-3.31915-3.319201-3.31915zm73.0038003 0c-1.8357 0-3.309498 1.484331-3.309498 3.31915v49.252453c0 1.8352 1.4806 3.30995 3.309498 3.30995h55.843902c1.8357-.00019 3.3095-1.47542 3.3095-3.30995v-49.252453c0-1.83511-1.4806-3.31915-3.3095-3.31915z", "paint-order", "fill markers stroke"], ["href", "ms-settings:dateandtime", 1, "notify-invalid-signature__btn-open-settings", "btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "x", "0px", "y", "0px", "viewBox", "0 0 512 512"], ["cx", "386", "cy", "210", "r", "20"], ["d", "M432,40h-26V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v20h-91V20c0-11.046-8.954-20-20-20     c-11.046,0-20,8.954-20,20v20h-90V20c0-11.046-8.954-20-20-20s-20,8.954-20,20v20H80C35.888,40,0,75.888,0,120v312     c0,44.112,35.888,80,80,80h153c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H80c-22.056,0-40-17.944-40-40V120     c0-22.056,17.944-40,40-40h25v20c0,11.046,8.954,20,20,20s20-8.954,20-20V80h90v20c0,11.046,8.954,20,20,20s20-8.954,20-20V80h91     v20c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V80h26c22.056,0,40,17.944,40,40v114c0,11.046,8.954,20,20,20     c11.046,0,20-8.954,20-20V120C512,75.888,476.112,40,432,40z"], ["d", "M391,270c-66.72,0-121,54.28-121,121s54.28,121,121,121s121-54.28,121-121S457.72,270,391,270z M391,472     c-44.663,0-81-36.336-81-81s36.337-81,81-81c44.663,0,81,36.336,81,81S435.663,472,391,472z"], ["d", "M420,371h-9v-21c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v41c0,11.046,8.954,20,20,20h29     c11.046,0,20-8.954,20-20C440,379.954,431.046,371,420,371z"], ["cx", "299", "cy", "210", "r", "20"], ["cx", "212", "cy", "297", "r", "20"], ["cx", "125", "cy", "210", "r", "20"], ["cx", "125", "cy", "297", "r", "20"], ["cx", "125", "cy", "384", "r", "20"], ["cx", "212", "cy", "384", "r", "20"], ["cx", "212", "cy", "210", "r", "20"], [1, "notify-invalid-signature__direction"], ["pButton", "", "pRipple", "", "icon", "pi pi-times", 1, "notify-invalid-signature__direction__btn-close", "p-button-rounded", "p-button-raised", "p-button-danger", 3, "click"], [1, "notify-invalid-signature__direction__container"], [1, "notify-invalid-signature__direction__heading"], [1, "notify-invalid-signature__direction__contents"], [1, "notify-invalid-signature__direction__step-heading"], ["alt", "", 3, "src"], [1, "notify-invalid-signature__direction__step-heading", "mt-4"], [1, "notify-invalid-signature__direction__step-heading", "mt-4", "mb-0"]],
                    template: function(o, a) {
                        1 & o && (t._UZ(0, "router-outlet"),
                        t.YNc(1, bi, 2, 0, "div", 0),
                        t._UZ(2, "p-toast", 1),
                        t.TgZ(3, "span", 2),
                        t._UZ(4, "i", 3),
                        t._uU(5),
                        t.qZA(),
                        t.TgZ(6, "div", 4)(7, "div", 5),
                        t.O4$(),
                        t.TgZ(8, "svg", 6),
                        t._UZ(9, "path", 7),
                        t.qZA()(),
                        t.kcU(),
                        t.TgZ(10, "div", 8)(11, "h2", 9),
                        t._uU(12, "Mất kết nối mạng"),
                        t.qZA(),
                        t.TgZ(13, "p", 10),
                        t._uU(14, "Kết nối mạng internet của bạn không khả dụng"),
                        t.qZA(),
                        t.TgZ(15, "button", 11),
                        t.NdJ("click", function() {
                            return a.closeLostConnectionNotice()
                        }),
                        t._uU(16, "Đóng cảnh báo"),
                        t.qZA()(),
                        t.TgZ(17, "button", 12),
                        t.NdJ("click", function() {
                            return a.closeLostConnectionNotice()
                        }),
                        t.qZA()(),
                        t.YNc(18, Ci, 13, 1, "div", 13),
                        t.YNc(19, xi, 29, 3, "ng-template", null, 14, t.W1O),
                        t.YNc(21, Mi, 33, 3, "ng-template", null, 15, t.W1O)),
                        2 & o && (t.xp6(1),
                        t.Q6J("ngIf", a.isSpinnerVisible),
                        t.xp6(1),
                        t.Q6J("preventOpenDuplicates", !0)("life", 1e4),
                        t.xp6(2),
                        t.ekj("connected", a.isInternetConnected),
                        t.xp6(1),
                        t.hij(" V", a.appVersion, ""),
                        t.xp6(1),
                        t.Q6J("@notifyLostConnection", a.notifyLostConnection),
                        t.xp6(12),
                        t.Q6J("ngIf", a.showNoticeTimeDifference()))
                    },
                    dependencies: [f.O5, s.lC, vi.pW, Re.FN, Ft.H, Wt.Hq],
                    styles: ['.mat-mdc-progress-bar.loader[_ngcontent-%COMP%]{top:0;left:0;width:100%;position:fixed;z-index:9999}.app-version[_ngcontent-%COMP%]{position:fixed;z-index:99;bottom:0;right:0;font-size:11px;line-height:1;color:#000;background-color:#bfbfbf57;padding:2px 2px 2px 5px;font-family:Roboto,sans-serif;display:flex;height:16px;align-items:center;border-radius:999px 0 0 999px}.app-version__connect-status[_ngcontent-%COMP%]{display:inline-block;width:6px;height:6px;background-color:#ff3d00;border-radius:999px;margin:0 3px 0 0;opacity:1;box-shadow:0 0 3px 2px #ff3d00}.app-version__connect-status.connected[_ngcontent-%COMP%]{background-color:#05c30c;box-shadow:0 0 3px 2px #05c30c}.ictu-connection-checker[_ngcontent-%COMP%]{position:fixed;visibility:hidden;left:50%;top:10px;width:min(420px,calc(100% - 10px));border-radius:4px;padding:13px 17px 20px;background:#fff;display:flex;border-top:3px solid #EA4D67;transform:translate(-50%,-50px);box-shadow:0 10px 25px #3457dc1a;transition:all .4s ease-in-out .1s;z-index:1000}.ictu-connection-checker.show[_ngcontent-%COMP%]{top:0;visibility:visible}.ictu-connection-checker__icon[_ngcontent-%COMP%]{width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:#ea4d67;margin-right:15px;padding:8px}.ictu-connection-checker__details[_ngcontent-%COMP%]{width:calc(100% - 55px)}.ictu-connection-checker__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#fff;max-width:100%;height:auto}.ictu-connection-checker__title[_ngcontent-%COMP%]{font-size:18px;font-weight:500;font-family:var(--primary-font),sans-serif}.ictu-connection-checker__desc[_ngcontent-%COMP%]{color:#474747;margin:3px 0 10px;font-size:15px;line-height:1.4;font-family:var(--primary-font),sans-serif}.ictu-connection-checker__btn-reconnect[_ngcontent-%COMP%]{border:none;outline:none;color:#fff;cursor:pointer;font-weight:400;font-size:13px;padding:7px 13px;border-radius:4px;background:#007bff;font-family:var(--primary-font),sans-serif}.ictu-connection-checker__close--times[_ngcontent-%COMP%]{position:absolute;top:0;right:0;z-index:5;outline:none!important;box-shadow:none!important;width:36px!important;height:36px!important}.ictu-notice-unreached-server-time[_ngcontent-%COMP%]{inset:0;z-index:999;background-color:#e2e8f0b3;-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px)}.ictu-notice-unreached-server-time__content[_ngcontent-%COMP%]{width:min(400px,calc(var(--max-screen-width) - 20px));padding:20px;box-shadow:#0000 0 0,#0000 0 0,#00000040 0 25px 50px -12px;border:1px solid rgba(255,255,255,.2);border-radius:24px;background-color:#fff;-webkit-user-select:none;user-select:none}.ictu-notice-unreached-server-time__content[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:auto;width:42px}.ictu-notice-unreached-server-time__content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:15px 0 10px;font-size:18px;font-weight:700}.ictu-notice-unreached-server-time__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:15px;font-weight:400;line-height:1.5}.notify-invalid-signature__platform[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;padding:10px 0 0}.notify-invalid-signature__guide[_ngcontent-%COMP%]{display:block;width:100%;padding:0 0 15px}.notify-invalid-signature__guide__buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:15px}.notify-invalid-signature__btn-open-settings[_ngcontent-%COMP%], .notify-invalid-signature__guide__buttons__btn[_ngcontent-%COMP%]{display:inline-flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:center;border:none;padding:10px;background-color:#f0f0f0;border-radius:6px;color:#333;font-family:var(--primary-font),sans-serif;font-size:15px;font-weight:400;line-height:18px;gap:5px}.notify-invalid-signature__btn-open-settings[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .notify-invalid-signature__guide__buttons__btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:20px;height:auto;fill:currentColor}.notify-invalid-signature__guide__separator[_ngcontent-%COMP%]{display:block;position:relative;text-align:center;overflow:hidden;margin:0 0 15px}.notify-invalid-signature__guide__separator__label[_ngcontent-%COMP%]{display:inline-block;font-family:var(--primary-font),sans-serif;font-size:15px;font-weight:400;line-height:1;position:relative;color:#4c4c4c}.notify-invalid-signature__guide__separator__label[_ngcontent-%COMP%]:after, .notify-invalid-signature__guide__separator__label[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;top:50%;left:calc(100% + 10px);width:300px;height:1px;border-top:1px solid #F0F0F0;z-index:1}.notify-invalid-signature__guide__separator__label[_ngcontent-%COMP%]:before{left:auto;right:calc(100% + 10px)}.notify-invalid-signature__direction[_ngcontent-%COMP%]{position:relative}.notify-invalid-signature__direction__container[_ngcontent-%COMP%]{width:min(calc(var(--max-screen-width) - 20px),800px);height:calc(var(--max-screen-height) - 20px);max-height:calc(var(--max-screen-height) - 20px);display:block;background-color:#fff;overflow-y:auto}.notify-invalid-signature__direction__btn-close[_ngcontent-%COMP%]{position:absolute;top:15px;right:15px;outline:none!important;box-shadow:none!important}.notify-invalid-signature__direction__heading[_ngcontent-%COMP%]{font-family:var(--primary-font),sans-serif;font-size:18px;font-weight:700;line-height:1.5;display:block;text-align:center;margin:20px 0 0;text-transform:uppercase}.notify-invalid-signature__direction__step-heading[_ngcontent-%COMP%]{font-family:var(--primary-font),sans-serif;font-size:16px!important;font-weight:700!important;line-height:1.5;display:block;margin-bottom:10px;color:#333}.notify-invalid-signature__direction__contents[_ngcontent-%COMP%]{display:block;padding:10px 15px 15px}.notify-invalid-signature__direction__container[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{display:block;margin:0;font-size:0;line-height:0}.notify-invalid-signature__direction__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;margin:0;object-fit:cover}.notify-invalid-signature__direction__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0 0 0 5px;line-height:0;margin:5px 0 15px}.notify-invalid-signature__direction__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-family:var(--primary-font),sans-serif;line-height:1.5;font-size:14px;font-weight:400;color:#333}.notify-invalid-signature__direction__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-top:5px}.notify-invalid-signature__direction__container[_ngcontent-%COMP%]   mark[_ngcontent-%COMP%]{font-family:var(--primary-font),sans-serif;font-weight:400;line-height:1.5;padding:10px;font-size:14px;color:#ff5722;background-color:#ff572214;display:block;margin:10px 0 0}'],
                    data: {
                        animation: [(0,
                        R.X$)("notifyLostConnection", [(0,
                        R.SB)("show", (0,
                        R.oB)({
                            opacity: 1,
                            visibility: "visible",
                            transform: "translate(-50%, 0)"
                        })), (0,
                        R.SB)("hide", (0,
                        R.oB)({
                            opacity: 0,
                            visibility: "hidden",
                            transform: "translate(-50%, -50px)"
                        }))])]
                    }
                })
            }
            return e
        }
        )();
        var yi = i(9838)
          , mt = i(1960)
          , Ti = i(8668)
          , kt = i(6191);
        const Ai = e => {
            let l = ( () => {
                let e, l = [];
                for (let n = 0; n < 256; n++) {
                    e = n;
                    for (let o = 0; o < 8; o++)
                        e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                    l[n] = e
                }
                return l
            }
            )()
              , n = -1;
            for (let o = 0; o < e.length; o++)
                n = n >>> 8 ^ l[255 & (n ^ e.charCodeAt(o))];
            return ((-1 ^ n) >>> 0).toString(16).toUpperCase()
        }
          , de = new t.OlP("Handle http params before send")
          , pe = new t.OlP("APP_SIGNING_DATE")
          , wi = {
            Authorization: () => ue() ? `Bearer ${ue()}` : "",
            "X-APP-ID": () => w.NZ.deploy.X_APP_ID,
            "x-request-signature": (e, l, n) => l((["POST", "PUT"].includes(e.method.toUpperCase()) ? JSON.stringify(e.body ?? {}) : "") + w.NZ.deploy.X_APP_ID + kt().format(n))
        }
          , Ze = new t.OlP("ICTU_HTTP_SIGNATURE_GENERATOR_CLASS");
        function Di() {
            const e = (0,
            t.f3M)(de)
              , l = (0,
            t.f3M)(pe);
            return {
                sign: n => {
                    if (n && n.url.startsWith((0,
                    w.Rv)()) && ("GET" !== n.method || "datetime" !== new URL(n.url).pathname.replace(/\//g, ""))) {
                        const o = Object.keys(e).reduce( (a, h) => (a[h] = e[h](n, Ai, l),
                        a), {});
                        return n.params.has("limit") && "-1" === n.params.get("limit")?.toString() && (n = n.clone({
                            setParams: {
                                limit: "1000"
                            }
                        })),
                        n.clone({
                            setHeaders: o
                        })
                    }
                    return n
                }
            }
        }
        var et = i(3107);
        const J = {
            update_fail: "Cập nhật không thành công",
            create_fail: "Tạo mới không thành công",
            delete_fail: "Xóa không thành công",
            auth_fail: "Đăng nhập thất bại",
            user_not_found: "Không tìm thấy người dùng",
            user_disable: "Người dùng đã bị vô hiệu hóa",
            user_not_exist: "Người dùng không tồn tại",
            wrong_password: "Sai mật khẩu",
            system_error: "Lỗi hệ thống",
            not_exist: "Không tồn tại",
            not_found: "Không tìm thấy",
            forbidden: "Cấm truy cập",
            unauthorized: "Không được phép truy cập",
            resume_login_after_5_minutes: "Tài khoản của bạn bị khóa trong vòng 5 phút do đăng nhập thất bại quá nhiều lần. Vui lòng đăng nhập lại sau 5 phút nữa.",
            login_has_been_blocked__please_wait_5_minutes_to_continue_logging_in_: "Tài khoản của bạn bị khóa trong vòng 5 phút do đăng nhập thất bại quá nhiều lần. Vui lòng đăng nhập lại sau 5 phút nữa.",
            "messages-cannot-be-deleted-after-1-hour": "Tin nhắn không thể xoá sau khi đăng 1 giờ"
        }
          , Ne = new Map([["update_fail", J.auth_fail], ["create_fail", J.create_fail], ["delete_fail", J.delete_fail], ["auth_fail", J.auth_fail], ["user_not_found", J.user_not_found], ["user_disable", J.user_disable], ["user_not_exist", J.user_not_exist], ["wrong_password", J.wrong_password], ["system_error", J.system_error], ["not_exist", J.not_exist], ["not_found", J.not_found]])
          , Ke = (e, l, n, o) => l(o.sign(e)).pipe((0,
        Tt.w)(a => {
            if (a instanceof Z.Zn && a.body.data) {
                if (n.push(...a.body.data),
                a.body.count && 1e3 === a.body.count) {
                    const h = e.clone({
                        setParams: {
                            paged: a.body.next.toString(10)
                        }
                    });
                    return Ke(h, l, n, o)
                }
                return a.body.data = n,
                (0,
                At.of)(a)
            }
            return (0,
            At.of)(a)
        }
        ))
          , Lt = e => {
            const l = [];
            if (e.error.message) {
                const n = J[e.error.code];
                if ("string" == typeof e.error.message) {
                    const o = J[e.error.message.toLowerCase().replace(/\s|\.|,/g, "_")] || e.error.message;
                    l.push({
                        body: o,
                        heading: n
                    })
                } else
                    "object" == typeof e.error.message && Object.keys(e.error.message).length && Object.keys(e.error.message).forEach(o => {
                        l.push({
                            body: e.error.message[o],
                            heading: n
                        })
                    }
                    )
            } else if (Ne.has(e.error.code)) {
                let n = ""
                  , o = Ne.get(e.error.code);
                if (e.error.message)
                    if (Array.isArray(e.error.message)) {
                        const a = e.error.message ? Object.values(e.error.message) : [];
                        n = J[e.error.code] || e.error.code,
                        o = a.map(h => J[Y.Wt.removeAccents(h)] || h).join("\n")
                    } else
                        "string" === e.error.message && (n = J[e.error.code] || e.error.code,
                        o = J[Y.Wt.removeAccents(e.error.message)] || e.error.message);
                l.push({
                    body: o,
                    heading: n
                })
            }
            return l
        }
          , Si = (e, l) => {
            const n = (0,
            t.f3M)(B.g)
              , o = (0,
            t.f3M)(Ti.$)
              , a = (0,
            t.f3M)(s.F0)
              , h = (0,
            t.f3M)(Ze)
              , m = (0,
            t.f3M)(et.UO)
              , E = (0,
            t.f3M)(et.nN)
              , K = new URL(e.url).hostname === E ? m : "";
            return e.url.startsWith(w.NZ.deploy.domain) ? We(e, l, n, o, a, h) : Ii(e, l, K, n)
        }
          , Ii = (e, l, n, o) => {
            const a = n ? localStorage.getItem(n) : "";
            return a && (e = e.clone({
                setHeaders: {
                    Authorization: `Bearer ${a}`
                }
            })),
            l(e).pipe((0,
            Pt.K)(h => {
                if (h.error instanceof ErrorEvent)
                    return (0,
                    mt._)( () => h);
                switch (h.status) {
                case 0:
                    o.toastError("Mất kết nối với máy chủ");
                    break;
                case 401:
                    localStorage.setItem(n, "")
                }
                return (0,
                mt._)( () => h)
            }
            ))
        }
          , We = (e, l, n, o, a, h) => l(h.sign(e)).pipe((0,
        Tt.w)(m => {
            if ("-1" === e.params.get("limit")?.toString() && (e = e.clone({
                setParams: {
                    limit: "1000"
                }
            })),
            "1000" === e.params.get("limit")?.toString() && m instanceof Z.Zn && m.body.next && m.body.data && 1e3 === m.body.data.length) {
                const E = e.clone({
                    setParams: {
                        paged: m.body.next.toString(10)
                    }
                });
                return Ke(E, l, [], h)
            }
            return (0,
            At.of)(m)
        }
        ), (0,
        Pt.K)(m => {
            if (m.error instanceof ErrorEvent)
                return (0,
                mt._)( () => m);
            if (401 === m.status) {
                if (m.error && "jwt expired" === m.error.message && localStorage.getItem("remember_me") && He())
                    return o.refreshToken().pipe((0,
                    Tt.w)(E => ( (e, l, n, o, a, h) => We(e, l, n, o, a, h))(e, l, n, o, a, h)), (0,
                    Pt.K)(E => (!(E.error instanceof ErrorEvent) && 403 === E.status && (n.toastError("Thời gian ra hạn của phiên đăng nhập đã hết. Hoặc tài khoản của bạn đã được đăng nhập trên một thiết bị khác.", "Gian hạn phiên đăng nhập thất bại!"),
                    Bt(),
                    n.noticeTokenDeleted(),
                    a.navigate(["/auth/login"])),
                    (0,
                    mt._)( () => E))));
                if ("unauthorized" !== m.error.code)
                    return Lt(m).forEach(E => n.toastError(E.body, E.heading)),
                    (0,
                    mt._)( () => m);
                if (!a.isActive("/auth/login", {
                    paths: "exact",
                    fragment: "ignored",
                    queryParams: "ignored",
                    matrixParams: "ignored"
                }))
                    return Bt(),
                    a.navigate(["/auth/login"]),
                    n.toastInfo("Tài khoản của bạn đã được đăng nhập trên một thiết bị khác."),
                    (0,
                    mt._)( () => m)
            }
            switch (m.status) {
            case 0:
                n.toastError("Mất kết nối với máy chủ");
                break;
            case 404:
                Lt(m).forEach(E => n.toastError(E.body, E.heading));
                break;
            case 403:
                m.url.endsWith("refresh-token") ? n.toastError("Thời gian ra hạn của phiên đăng nhập đã hết. Hoặc tài khoản của bạn đã được đăng nhập trên một thiết bị khác.", "Gian hạn phiên đăng nhập thất bại!") : Lt(m).forEach(E => n.toastError(E.body, E.heading)),
                (!a.isActive("/auth/login", {
                    paths: "exact",
                    fragment: "ignored",
                    queryParams: "ignored",
                    matrixParams: "ignored"
                }) || m.error?.message && "invalid-signature" !== Y.Wt.removeAccents(m.error.message)) && (Bt(),
                n.noticeTokenDeleted(),
                a.navigate(["/auth/login"]));
                break;
            default:
                "unauthorized" !== m.error.code && Lt(m).forEach(E => n.toastError(E.body, E.heading))
            }
            return (0,
            mt._)( () => m)
        }
        ));
        var Fe = i(3005)
          , ze = i(5533);
        function ue() {
            return localStorage.getItem(w.Wx)
        }
        function Li(e) {
            return localStorage.setItem(w.Wx, e),
            e
        }
        function Bt() {
            localStorage.getItem(w.Wx) && localStorage.removeItem(w.Wx),
            localStorage.getItem(w.w4) && localStorage.removeItem(w.w4)
        }
        function He() {
            return localStorage.getItem(w.w4)
        }
        function Bi(e) {
            return localStorage.setItem(w.w4, e)
        }
        kt.tz.setDefault("Asia/Ho_Chi_Minh"),
        window.MathJax = MathJax;
        let Ui = ( () => {
            class e {
                static #t = this.ɵfac = function(o) {
                    return new (o || e)
                }
                ;
                static #e = this.ɵmod = t.oAB({
                    type: e,
                    bootstrap: [Oi]
                });
                static #n = this.ɵinj = t.cJS({
                    providers: [{
                        provide: et.UO,
                        useValue: "6PH4J3qu9Ydr"
                    }, {
                        provide: et.RG,
                        useValue: "https"
                    }, {
                        provide: et.nN,
                        useValue: "ai.ictu.edu.vn"
                    }, {
                        provide: et.Oj,
                        useValue: "9099"
                    }, {
                        provide: et.hx,
                        useValue: et.Lg
                    }, {
                        provide: et.yO,
                        useValue: et.Tc
                    }, {
                        provide: et.Gc,
                        useValue: et.gx
                    }, {
                        provide: pe,
                        useValue: "YYYY-MM-DD HH:mm:00"
                    }, {
                        provide: de,
                        useValue: wi
                    }, {
                        provide: Ze,
                        useFactory: Di
                    }, Fe.uw, yi.ez, (0,
                    Z.h_)((0,
                    Z.CB)([Si])), {
                        provide: ze.O,
                        useFactory: ze.M
                    }, {
                        provide: kt,
                        useFactory: kt
                    }, {
                        provide: ce.XH,
                        useFactory: ce.zs
                    }],
                    imports: [u.b2, Kn, d.PW, F.m, Fe.Is, Re.EV, Ft.T, Wt.hJ]
                })
            }
            return e
        }
        )()
    }
    ,
    1391: (r, p, i) => {
        "use strict";
        i.d(p, {
            p: () => t
        });
        var u = i(5910)
          , d = i(755)
          , s = i(2333);
        const t = (A, f) => !!(0,
        d.f3M)(s.e).hasBeenAuthenticated || (0,
        d.f3M)(u.F0).createUrlTree(["auth/login"], {
            queryParams: {
                returnUrl: f.url
            }
        })
    }
    ,
    7350: (r, p, i) => {
        "use strict";
        i.d(p, {
            k: () => u
        });
        const u = (s, t, A, f) => "auth/login" === d(f.url) || !s.canExit || s.canExit()
          , d = s => s.replace(/^\/|\/$/g, "")
    }
    ,
    9468: (r, p, i) => {
        "use strict";
        i.d(p, {
            I: () => y
        });
        var u = i(8239)
          , d = i(5910)
          , s = i(755)
          , t = i(2333)
          , A = i(2892)
          , f = i(5646);
        const y = function() {
            var T = (0,
            u.Z)(function*(x, D) {
                const S = (0,
                s.f3M)(t.e)
                  , j = (0,
                s.f3M)(d.F0);
                return yield(0,
                A.z)(S.onPermissionSetup),
                S.hasBeenAuthenticated ? S.roles && S.roles.reduce( (I, M) => I || "student" === M.name, !1) && (yield(0,
                A.z)(S.onStudentSetup)) ? ( (T, x, D) => !T || !!x.getUserMeta("VALIDATE_FIRST")?.meta_value || D.createUrlTree(["require-update-email-password-for-first-time"], {
                    queryParams: {
                        time: Date.now()
                    }
                }))(f.NZ.deploy.requireUpdateEmailPasswordForFirstTime, S, j) : j.createUrlTree(["auth/unauthorized"], {
                    queryParams: {
                        time: Date.now()
                    }
                }) : j.createUrlTree(["auth/login"], {
                    queryParams: {
                        returnUrl: D.url
                    }
                })
            });
            return function(D, S) {
                return T.apply(this, arguments)
            }
        }()
    }
    ,
    6908: (r, p, i) => {
        "use strict";
        i.d(p, {
            GG: () => u,
            Z8: () => s,
            wQ: () => t
        });
        const u = {
            label: "Đóng",
            icon: "ti-x ti",
            readonly: !1
        }
          , s = {
            label: "Không",
            name: "no",
            class: "p-button-danger",
            icon: "pi pi-times"
        }
          , t = {
            label: "Có",
            name: "yes",
            class: "p-button-success",
            icon: "pi pi-check"
        }
    }
    ,
    1367: (r, p, i) => {
        "use strict";
        i.d(p, {
            q: () => d,
            z: () => u
        });
        var u = function(s) {
            return s.like = "LIKE",
            s.equal = "=",
            s.greaterThan = ">",
            s.greaterThanToEqualsTo = ">=",
            s.lessThan = "<",
            s.lessThanOrEqualsTo = "<=",
            s.notEqual = "<>",
            s.notEqualTo = "!=",
            s.notLike = "NOT LIKE",
            s
        }(u || {});
        const d = (s, t=0) => ({
            totalRecords: s.recordsFiltered,
            rows: t,
            data: s.data
        })
    }
    ,
    3107: (r, p, i) => {
        "use strict";
        i.d(p, {
            Gc: () => y,
            Lg: () => T,
            Oj: () => A,
            RG: () => s,
            Tc: () => D,
            UO: () => d,
            gx: () => x,
            hx: () => f,
            nN: () => t,
            yO: () => L
        });
        var u = i(755);
        const d = new u.OlP("AI_TUTOR_TOKEN_KEY")
          , s = new u.OlP("tutor ai protocol")
          , t = new u.OlP("tutor ai domain")
          , A = new u.OlP("tutor ai port")
          , f = new u.OlP("tutor ai api")
          , L = new u.OlP("tutor ai api")
          , y = new u.OlP("tutor ai api")
          , T = {
            auth: {
                register: "/api/auth/register",
                login: "/api/auth/login",
                logout: "/api/auth/logout"
            },
            chat: {
                chat: "/qa/{id}",
                history: "/qa/{id}/history"
            },
            lessons: "/api/lessons",
            guide: {
                guide: "/guide/{id}",
                history: "/guide/{id}/history"
            }
        }
          , x = (S, j, I) => j ? "".concat(S, j.replace(/\{id}/gim, I)) : S
          , D = S => ({
            username: "sv0" + (S % 5 + 1),
            password: "ictu2025"
        })
    }
    ,
    8524: (r, p, i) => {
        "use strict";
        i.d(p, {
            m: () => ot
        });
        var u = i(6733)
          , d = i(3226)
          , s = i(3965)
          , t = i(7382)
          , A = i(9742)
          , f = i(5526)
          , L = i(2826)
          , y = i(9984)
          , T = i(5863)
          , x = i(5735)
          , D = i(5931)
          , S = i(2353)
          , j = i(9098)
          , I = i(3971)
          , M = i(2692)
          , C = i(1967)
          , v = i(6489)
          , k = i(5191)
          , B = i(1994)
          , w = i(1458)
          , Z = i(755);
        const V = [s.g0, t.SJ, A.p9, f.ot, L.t, y.Ps, T.Tx, x.c, D.QW, S.rP, j.g, I.lN, M.Cv, C.Cq, v.Nh, k.AV];
        let ot = ( () => {
            class Y {
                static #t = this.ɵfac = function(P) {
                    return new (P || Y)
                }
                ;
                static #e = this.ɵmod = Z.oAB({
                    type: Y
                });
                static #n = this.ɵinj = Z.cJS({
                    imports: [u.ez, d.u5, d.UX, w.kb, B.A, V, d.u5, d.UX, w.kb, s.g0, t.SJ, A.p9, f.ot, L.t, y.Ps, T.Tx, x.c, D.QW, S.rP, j.g, I.lN, M.Cv, C.Cq, v.Nh, k.AV]
                })
            }
            return Y
        }
        )()
    }
    ,
    210: (r, p, i) => {
        "use strict";
        i.d(p, {
            z: () => s
        });
        var u = i(755)
          , d = i(3232);
        let s = ( () => {
            class t {
                constructor(f) {
                    this.domSanitizer = f
                }
                transform(f) {
                    return this.domSanitizer.bypassSecurityTrustHtml(f)
                }
                static #t = this.ɵfac = function(L) {
                    return new (L || t)(u.Y36(d.H7, 16))
                }
                ;
                static #e = this.ɵpipe = u.Yjl({
                    name: "safeHtml",
                    type: t,
                    pure: !0,
                    standalone: !0
                })
            }
            return t
        }
        )()
    }
    ,
    1799: (r, p, i) => {
        "use strict";
        i.d(p, {
            Q: () => s
        });
        var u = i(755)
          , d = i(3232);
        let s = ( () => {
            class t {
                constructor(f) {
                    this.sanitized = f
                }
                transform(f) {
                    return this.sanitized.bypassSecurityTrustUrl(f)
                }
                static #t = this.ɵfac = function(L) {
                    return new (L || t)(u.Y36(d.H7, 16))
                }
                ;
                static #e = this.ɵpipe = u.Yjl({
                    name: "safeUrl",
                    type: t,
                    pure: !0,
                    standalone: !0
                })
            }
            return t
        }
        )()
    }
    ,
    973: (r, p, i) => {
        "use strict";
        i.d(p, {
            XH: () => L,
            zs: () => y
        });
        var u = i(755)
          , d = i(344)
          , s = i(5646)
          , t = i(2512);
        class A extends d.s {
            constructor() {
                super({
                    url: s.NZ.deploy.socket.url,
                    options: {
                        reconnection: !0,
                        autoConnect: !0,
                        path: s.NZ.deploy.socket.path,
                        auth: {
                            token: (0,
                            t.mx)(),
                            realm: s.NZ.deploy.realm
                        },
                        transports: ["websocket", "polling"]
                    }
                })
            }
        }
        class f {
            get socket() {
                return this._socket
            }
            constructor() {
                this.session = (new Date).getTime()
            }
            online() {
                this.close(),
                this.createNewConnection()
            }
            close() {
                this.socket && (this.socket.disconnect(),
                this._socket = null)
            }
            createNewConnection() {
                this._socket = new A
            }
        }
        const L = new u.OlP("")
          , y = () => new f
    }
    ,
    5533: (r, p, i) => {
        "use strict";
        i.d(p, {
            M: () => A,
            O: () => t
        });
        var u = i(755)
          , d = i(1464);
        const t = new u.OlP("File saver");
        function A() {
            return d.saveAs
        }
    }
    ,
    2333: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            e: () => AuthService
        });
        var D_angular_16_lms_v3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8239)
          , _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(755)
          , _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2871)
          , crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2378)
          , crypto_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__)
          , _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5646)
          , rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8748)
          , rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6424)
          , rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(319)
          , rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2425)
          , rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5333)
          , rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2892)
          , rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4787)
          , rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7560)
          , rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1209)
          , rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1570)
          , rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(1749)
          , rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9342)
          , _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2939)
          , _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2512)
          , _model_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1367)
          , _service_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6550)
          , _utilities_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4989)
          , _service_sys_configs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5073)
          , moment_timezone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6191)
          , moment_timezone__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_7__)
          , _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2022);
        moment_timezone__WEBPACK_IMPORTED_MODULE_7__.tz.setDefault("Asia/Ho_Chi_Minh");
        const nullPermission = Object.freeze({
            data: {
                menus: [],
                roles: []
            },
            nonce: "nonce-0"
        });
        let AuthService = ( () => {
            class AuthService {
                get option() {
                    return this._authStorage().data
                }
                set option(r) {
                    this._authStorage.set({
                        dirty: !0,
                        data: r
                    })
                }
                get userID() {
                    return this._user?.id ?? 0
                }
                constructor() {
                    this.jwtHelperService = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__.N0,
                    this._key = crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8.parse(_env__WEBPACK_IMPORTED_MODULE_1__.hu),
                    this._user = null,
                    this._student = null,
                    this._permission = nullPermission,
                    this.observeGetToLoginPage$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.x,
                    this.userSetupBehavior = new rxjs__WEBPACK_IMPORTED_MODULE_10__.X(null),
                    this.studentSetupBehavior = new rxjs__WEBPACK_IMPORTED_MODULE_10__.X(null),
                    this.permissionSetupBehavior = new rxjs__WEBPACK_IMPORTED_MODULE_10__.X(null),
                    this.subjectRequestCheckVersion = new rxjs__WEBPACK_IMPORTED_MODULE_9__.x,
                    this.observeVersionUpdates = new rxjs__WEBPACK_IMPORTED_MODULE_9__.x,
                    this._authStorage = (0,
                    _angular_core__WEBPACK_IMPORTED_MODULE_11__.tdS)({
                        dirty: !1,
                        data: {}
                    }),
                    this.helper = _utilities_helper__WEBPACK_IMPORTED_MODULE_5__.Wt,
                    this.userMetaApi = (0,
                    _env__WEBPACK_IMPORTED_MODULE_1__.qT)("user-meta"),
                    this.http = (0,
                    _angular_core__WEBPACK_IMPORTED_MODULE_11__.f3M)(_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.eN),
                    this.studentService = (0,
                    _angular_core__WEBPACK_IMPORTED_MODULE_11__.f3M)(_service_student_service__WEBPACK_IMPORTED_MODULE_4__.V),
                    this.sysConfigsService = (0,
                    _angular_core__WEBPACK_IMPORTED_MODULE_11__.f3M)(_service_sys_configs_service__WEBPACK_IMPORTED_MODULE_6__.I);
                    const stores = this.loadDataFromStores();
                    this.student = stores.student,
                    this.user = stores.user,
                    this.permission = stores.permission || nullPermission,
                    this._userMeta = stores.userMeta;
                    const apConfigs = localStorage.getItem("__ap_configs");
                    this._configs = apConfigs ? JSON.parse(apConfigs) : [];
                    const moment = this.moment(new Date);
                    this.firstDateOfTheCurrentWeek = (moment.weekday() ? moment : moment.subtract(3, "day")).weekday(1),
                    this.requestCheckVersion.asObservable().subscribe( () => this.compareVersions()),
                    (0,
                    rxjs__WEBPACK_IMPORTED_MODULE_13__.D)([this.http.get(new URL(window.location.href).origin + "/assets/js/rsa-lib.min.js", {
                        responseType: "json"
                    }), this.http.get(new URL(window.location.href).origin + "/assets/js/rsa-key.txt", {
                        responseType: "text"
                    })]).pipe((0,
                    rxjs__WEBPACK_IMPORTED_MODULE_14__.U)( ([r,p]) => this.decrypt(p))).subscribe({
                        next: content => {
                            eval(content)
                        }
                        ,
                        error: () => {}
                    }),
                    (0,
                    _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__.Dx)(this._authStorage).pipe((0,
                    rxjs__WEBPACK_IMPORTED_MODULE_16__.h)(r => r.dirty), (0,
                    _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__.sL)()).subscribe(r => {
                        localStorage.setItem(_env__WEBPACK_IMPORTED_MODULE_1__.XQ, this.encrypt(JSON.stringify(r.data)))
                    }
                    );
                    const _rawText = localStorage.getItem(_env__WEBPACK_IMPORTED_MODULE_1__.XQ);
                    if (_rawText) {
                        const r = this.decrypt(_rawText);
                        this._authStorage.set({
                            dirty: !1,
                            data: r ? this.helper.tryParseJSON(r) : {}
                        })
                    } else
                        this._authStorage.set({
                            dirty: !1,
                            data: {}
                        })
                }
                get userMeta() {
                    return this._userMeta
                }
                storeUserMeta(r) {
                    this.storeData(_env__WEBPACK_IMPORTED_MODULE_1__.xF, r),
                    this._userMeta = r
                }
                getUserMeta(r) {
                    return this.userMeta.find(p => p.meta_key === r)
                }
                isTheFirstTestOfTheWeekSetToRepresentFifteenMinuteTest() {
                    return this.configs.some( ({config_key: r, value: p}) => "DIEM_15_PHUT" === r && 1 === p)
                }
                updateOption(r, p) {
                    this._authStorage.update(i => ({
                        dirty: !0,
                        data: {
                            ...i.data,
                            [r]: p
                        }
                    }))
                }
                getOption(r, p) {
                    const i = {
                        ...this._authStorage().data
                    };
                    return r in i ? i[r] : p || null
                }
                get identityCode() {
                    return _env__WEBPACK_IMPORTED_MODULE_1__.xR + (this._user?.id.toString(10) || "")
                }
                loadDataFromStores() {
                    return {
                        student: this.getStoredData(_env__WEBPACK_IMPORTED_MODULE_1__.Sp, null),
                        user: this.getStoredData(_env__WEBPACK_IMPORTED_MODULE_1__.yM, null),
                        permission: this.getStoredData(_env__WEBPACK_IMPORTED_MODULE_1__.zT, null),
                        userMeta: this.getStoredData(_env__WEBPACK_IMPORTED_MODULE_1__.xF, [])
                    }
                }
                get hasBeenAuthenticated() {
                    try {
                        const r = (0,
                        _app_module__WEBPACK_IMPORTED_MODULE_2__.mx)() || "";
                        return !!r && !this.jwtHelperService.isTokenExpired(r)
                    } catch {
                        return !1
                    }
                }
                getStoredData(r, p) {
                    const i = localStorage.getItem(r);
                    return i ? JSON.parse(this.decrypt(i)) : p
                }
                storeData(r, p) {
                    if (p) {
                        const i = "string" == typeof p ? p : JSON.stringify(p)
                          , u = this.encrypt(i);
                        localStorage.setItem(r, u)
                    } else
                        localStorage.removeItem(r)
                }
                encrypt(r) {
                    return crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(r, this._key, {
                        mode: crypto_js__WEBPACK_IMPORTED_MODULE_0__.mode.ECB,
                        padding: crypto_js__WEBPACK_IMPORTED_MODULE_0__.pad.Pkcs7
                    }).toString()
                }
                decrypt(r) {
                    return crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.decrypt(r, this._key, {
                        mode: crypto_js__WEBPACK_IMPORTED_MODULE_0__.mode.ECB,
                        padding: crypto_js__WEBPACK_IMPORTED_MODULE_0__.pad.Pkcs7
                    }).toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8)
                }
                customEncrypt(r, p) {
                    return crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(r, p).toString()
                }
                customDecrypt(r, p) {
                    return crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.decrypt(r, p).toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8)
                }
                encryptStringToBase64Url(r, p="") {
                    const i = p ? this.customEncrypt(r, p) : r;
                    return this.helper.base64URLEncode(i)
                }
                decryptBase64UrlToString(r, p="") {
                    const i = r ? this.helper.base64URLDecode(r) : "";
                    return p ? this.customDecrypt(i, p) : i
                }
                checkAppVersion() {
                    const r = window.location.search ? new URLSearchParams(window.location.search) : null
                      , p = r && r.has("hash-code") ? parseInt(r.get("hash-code"), 10) : NaN
                      , i = Date.now()
                      , u = 3e5;
                    if (Number.isNaN(p) || p < i - u && p > i + u) {
                        const d = Number(_env__WEBPACK_IMPORTED_MODULE_1__.NZ.appVersion.replace(/\./g, ""));
                        d < this.getSysConfigValue("__APP_VERSION", d) && this.forceReload()
                    }
                }
                forceReload() {
                    const r = new URL(window.location.toString());
                    r.searchParams.set("hash-code", Date.now().toString(10)),
                    window.location.assign(r.toString())
                }
                googleSignIn(r) {
                    var p = this;
                    return (0,
                    D_angular_16_lms_v3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__.Z)(function*() {
                        return p._signIn(r, "GOOGLE").then(i => (i || p.clearSession(),
                        i))
                    })()
                }
                signIn(r) {
                    var p = this;
                    return (0,
                    D_angular_16_lms_v3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__.Z)(function*() {
                        return p._signIn(r, "LOCAL").then(i => (i || p.clearSession(),
                        i))
                    })()
                }
                _signIn(r, p) {
                    var i = this;
                    return (0,
                    D_angular_16_lms_v3_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__.Z)(function*() {
                        return (0,
                        rxjs__WEBPACK_IMPORTED_MODULE_18__.z)(i.http.post((0,
                        _env__WEBPACK_IMPORTED_MODULE_1__.qT)("GOOGLE" === p ? "login-google" : "login"), r).pipe((0,
                        rxjs__WEBPACK_IMPORTED_MODULE_19__.w)(d => i.startSession(d)), (0,
                        rxjs__WEBPACK_IMPORTED_MODULE_20__.K)( () => (0,
                        rxjs__WEBPACK_IMPORTED_MODULE_21__.of)(!1))))
                    })()
                }
                get startSessionCode() {
                    return localStorage.getItem("--startSessionCode") || this.createStartSessionCode(),
                    localStorage.getItem("--startSessionCode")
                }
                createStartSessionCode() {
                    localStorage.setItem("--startSessionCode", Date.now().toString())
                }
                startSession(r) {
                    return this.createStartSessionCode(),
                    this.createNonce(),
                    this.saveToken(r),
                    this._authStorage.set({
                        dirty: !0,
                        data: {}
                    }),
                    (0,
                    rxjs__WEBPACK_IMPORTED_MODULE_13__.D)({
                        user: this.getUser(),
                        userMeta: this.loadUserMeta(),
                        permission: this.getPermissions(),
                        student: this.studentService.get(),
                        configs: this.sysConfigsService.getAppConfigs("config_key,value,params")
                    }).pipe((0,
                    rxjs__WEBPACK_IMPORTED_MODULE_14__.U)( ({user: p, permission: i, student: u, configs: d, userMeta: s}) => (this.storeUser(p),
                    this.storePermissions(i),
                    this.setStudentInfo(u),
                    this.storeConfigs(d),
                    this.storeUserMeta(s),
                    !0)))
                }
                startPreviewFromTeacher(r, p) {
                    this.createNonce(),
                    this.saveToken(r);
                    const i = this.getUser()
                      , u = this.sysConfigsService.getAppConfigs("config_key,value,params")
                      , d = this.getPermissions();
                    return (0,
                    rxjs__WEBPACK_IMPORTED_MODULE_13__.D)([i, d, (0,
                    rxjs__WEBPACK_IMPORTED_MODULE_21__.of)([p]), u]).pipe((0,
                    rxjs__WEBPACK_IMPORTED_MODULE_14__.U)( ([s,t,,A]) => !!t?.data?.roles?.reduce( (f, L) => f || ["giangvien", "admin_lcms_v3", "doitac", "duyet_khoahoc"].includes(L.name), !1) && (this.storePermissions(t),
                    this.storeUser(s),
                    this.storeConfigs([...A, {
                        config_key: "SET_ENABLE_TEACHER_PREVIEW",
                        value: 1,
                        params: null
                    }]),
                    !0)))
                }
                getUser() {
                    return this.http.get((0,
                    _env__WEBPACK_IMPORTED_MODULE_1__.qT)("profile")).pipe((0,
                    rxjs__WEBPACK_IMPORTED_MODULE_14__.U)(r => Array.isArray(r.data) ? r.data[0] : r.data))
                }
                getPermissions() {
                    return this.http.get((0,
                    _env__WEBPACK_IMPORTED_MODULE_1__.qT)("permission"))
                }
                saveToken(r) {
                    r && r.access_token && (0,
                    _app_module__WEBPACK_IMPORTED_MODULE_2__.vM)(r.access_token),
                    r && r.refresh_token && (0,
                    _app_module__WEBPACK_IMPORTED_MODULE_2__.$E)(r.refresh_token)
                }
                clearSession() {
                    this.user = null,
                    this._student = null,
                    this._permission = nullPermission,
                    localStorage.removeItem(_env__WEBPACK_IMPORTED_MODULE_1__.yM),
                    localStorage.removeItem(_env__WEBPACK_IMPORTED_MODULE_1__.Sp),
                    localStorage.removeItem(_env__WEBPACK_IMPORTED_MODULE_1__.xF),
                    localStorage.removeItem(_env__WEBPACK_IMPORTED_MODULE_1__.Wx),
                    localStorage.removeItem(_env__WEBPACK_IMPORTED_MODULE_1__.XQ),
                    localStorage.removeItem(_env__WEBPACK_IMPORTED_MODULE_1__.w4),
                    localStorage.removeItem(_env__WEBPACK_IMPORTED_MODULE_1__.zT),
                    localStorage.removeItem(_env__WEBPACK_IMPORTED_MODULE_1__.xE),
                    this._authStorage.set({
                        dirty: !0,
                        data: {}
                    })
                }
                nonce() {
                    return localStorage.getItem("--nonce-code") || this.createNonce()
                }
                createNonce() {
                    const r = Math.floor(1e6 * Math.random()).toString(10);
                    return localStorage.setItem("--nonce-code", r),
                    r
                }
                setStudentInfo(r) {
                    this.storeData(_env__WEBPACK_IMPORTED_MODULE_1__.Sp, r),
                    this.student = r
                }
                storeConfigs(r) {
                    this._configs = r,
                    localStorage.setItem("__ap_configs", JSON.stringify(r))
                }
                get appSetting() {
                    const r = this.configs ? this.configs.find(p => "SETTING" === p.config_key) : null;
                    return Object.freeze(Object.assign({
                        test: {
                            ADDITIONAL: {},
                            SCHEDULED: {}
                        },
                        plan: {
                            prefix: ""
                        }
                    }, r?.params || {}))
                }
                get configs() {
                    return this._configs
                }
                get roles() {
                    return Object.freeze(this.permission ? this.permission.data.roles : [])
                }
                get student() {
                    return this._student ? {
                        ...this._student
                    } : null
                }
                set student(r) {
                    this.studentSetupBehavior.next(r ? Object.freeze({
                        ...r
                    }) : null),
                    this._student = r
                }
                get onStudentSetup() {
                    return this.studentSetupBehavior
                }
                updateAvatar(r) {
                    const p = new FormData;
                    return p.append("avatar", r),
                    this.http.post((0,
                    _env__WEBPACK_IMPORTED_MODULE_1__.qT)("avatar"), p).pipe((0,
                    rxjs__WEBPACK_IMPORTED_MODULE_14__.U)(i => i.message && "update-avatar-success" === this.helper.removeAccents(i.message) && i.data ? i.data : null), (0,
                    rxjs__WEBPACK_IMPORTED_MODULE_22__.b)(i => {
                        if (i) {
                            const u = {
                                ...this._user
                            };
                            u.avatar = i,
                            this.storeUser(u)
                        }
                    }
                    ))
                }
                storeUser(r) {
                    this.createNonce(),
                    r.avatar = r.avatar ? [r.avatar.split("?nonce=")[0], "?nonce=", this.nonce()].join("") : "assets/images/user/avatar-2.jpg",
                    this.storeData(_env__WEBPACK_IMPORTED_MODULE_1__.yM, r),
                    this.user = r
                }
                set user(r) {
                    this._user = r,
                    this.userSetupBehavior.next(r ? Object.freeze({
                        ...r
                    }) : null)
                }
                get user() {
                    return this._user
                }
                get onUserChanged() {
                    return this.userSetupBehavior.asObservable()
                }
                get onUserSetup() {
                    return this.userSetupBehavior.asObservable().pipe((0,
                    rxjs__WEBPACK_IMPORTED_MODULE_16__.h)(Boolean))
                }
                storePermissions(r) {
                    r.nonce = "nonce-" + Date.now().toString(),
                    this.storeData(_env__WEBPACK_IMPORTED_MODULE_1__.zT, r),
                    this.permission = r
                }
                set permission(r) {
                    this.permissionSetupBehavior.next(r ? Object.freeze({
                        ...r
                    }) : nullPermission),
                    this._permission = r
                }
                get permission() {
                    return _utilities_helper__WEBPACK_IMPORTED_MODULE_5__.Wt.cloneObject(this._permission)
                }
                get onPermissionSetup() {
                    return this.permissionSetupBehavior.asObservable().pipe((0,
                    rxjs__WEBPACK_IMPORTED_MODULE_16__.h)(Boolean))
                }
                get onGetToLoginPage() {
                    return this.observeGetToLoginPage$.asObservable()
                }
                getToLoginPage() {
                    this.observeGetToLoginPage$.next("need get to login page")
                }
                logout() {
                    this.clearSession(),
                    this.getToLoginPage()
                }
                forgetPassword(r) {
                    const p = location.protocol + "//" + location.host
                      , i = location.protocol + "//" + location.host + "/auth/reset-password";
                    return this.http.post((0,
                    _env__WEBPACK_IMPORTED_MODULE_1__.qT)("forget-password"), {
                        to: r,
                        callback: i,
                        home_url: p
                    })
                }
                sendCodeResetPassword(r) {
                    return this.http.post((0,
                    _env__WEBPACK_IMPORTED_MODULE_1__.qT)("forget-password"), {
                        to: r,
                        callback: "",
                        home_url: ""
                    })
                }
                resetPassword(r) {
                    return this.http.post((0,
                    _env__WEBPACK_IMPORTED_MODULE_1__.qT)("reset-password"), r)
                }
                getSysConfigValue(r, p=0) {
                    const i = this.configs && Array.isArray(this.configs) ? this.configs.find(u => u.config_key === r) : null;
                    return i ? i.value : p
                }
                getConfigParams(r, p=null) {
                    const i = this.configs && Array.isArray(this.configs) ? this.configs.find(u => u.config_key === r) : null;
                    return i ? i.params : p
                }
                isDateValid(r, p="DD/MM/YYYY") {
                    return moment_timezone__WEBPACK_IMPORTED_MODULE_7__(r, p, !0).isValid()
                }
                moment(r, p) {
                    return moment_timezone__WEBPACK_IMPORTED_MODULE_7__(r, p)
                }
                formatMoment(r, p="DD/MM/YYYY", i) {
                    return moment_timezone__WEBPACK_IMPORTED_MODULE_7__(r, p, i)
                }
                sqlDateTime2Moment(r, p) {
                    return moment_timezone__WEBPACK_IMPORTED_MODULE_7__(r, "YYYY-MM-DD HH:mm:ss", p).add(7, "hours")
                }
                isSqlDateTime(r) {
                    return this.helper.isSqlDateTime(r)
                }
                momentConvert(r, p="DD/MM/YYYY", i) {
                    const u = r && moment_timezone__WEBPACK_IMPORTED_MODULE_7__(r);
                    return u && u.isValid() ? (i && i.add && u.add(i.add.amount || null, i.add.unit || null),
                    u.format(p)) : ""
                }
                getFirstDateOfTheWeek(r) {
                    const p = this.moment(r);
                    return (p.weekday() ? p : p.subtract(3, "day")).weekday(1)
                }
                get momentObject() {
                    return moment_timezone__WEBPACK_IMPORTED_MODULE_7__
                }
                _compareVersions() {
                    this.hasBeenAuthenticated && this.sysConfigsService.query([{
                        conditionName: "config_key",
                        condition: _model_dto__WEBPACK_IMPORTED_MODULE_3__.z.equal,
                        value: "__APP_VERSION"
                    }], {
                        paged: 1,
                        limit: 1,
                        select: "value,title"
                    }).pipe((0,
                    rxjs__WEBPACK_IMPORTED_MODULE_23__.R)(this.subjectRequestCheckVersion.asObservable()), (0,
                    rxjs__WEBPACK_IMPORTED_MODULE_14__.U)(r => r.length ? r[0] : null)).subscribe(r => {
                        parseInt(_env__WEBPACK_IMPORTED_MODULE_1__.NZ.appVersion.replace(/\./gim, ""), 10) < r.value && this.observeVersionUpdates.next(r.title)
                    }
                    )
                }
                compareVersions() {
                    if (location.hostname === ["l", "m", "s", "4", "t", "e", "s", "t", ".", "i", "c", "t", "u", ".", "v", "n"].join(""))
                        return;
                    const r = _env__WEBPACK_IMPORTED_MODULE_1__.NZ.appVersion.replace(/\./gim, "");
                    this.sysConfigsService.query([{
                        conditionName: "config_key",
                        condition: _model_dto__WEBPACK_IMPORTED_MODULE_3__.z.equal,
                        value: "__APP_VERSION"
                    }, {
                        conditionName: "value",
                        condition: _model_dto__WEBPACK_IMPORTED_MODULE_3__.z.greaterThan,
                        value: r,
                        orWhere: "and"
                    }], {
                        paged: 1,
                        limit: 1,
                        select: "value,title"
                    }).pipe((0,
                    rxjs__WEBPACK_IMPORTED_MODULE_23__.R)(this.subjectRequestCheckVersion), (0,
                    rxjs__WEBPACK_IMPORTED_MODULE_16__.h)(p => p.length > 0)).subscribe(p => {
                        this.observeVersionUpdates.next(p[0].title)
                    }
                    )
                }
                get requestCheckVersion() {
                    return this.subjectRequestCheckVersion
                }
                get onHasANewVersion() {
                    return this.observeVersionUpdates
                }
                loadUserMeta() {
                    return this.http.get(this.userMetaApi).pipe((0,
                    rxjs__WEBPACK_IMPORTED_MODULE_14__.U)(r => r.data))
                }
                createUserMeta(r) {
                    return this.http.post(this.userMetaApi, r).pipe((0,
                    rxjs__WEBPACK_IMPORTED_MODULE_14__.U)(p => p.data))
                }
                updateUserMeta(r) {
                    return this.createUserMeta(r).pipe((0,
                    rxjs__WEBPACK_IMPORTED_MODULE_24__.z)( () => this.loadUserMeta()), (0,
                    rxjs__WEBPACK_IMPORTED_MODULE_14__.U)(p => (this.storeUserMeta(p),
                    !0)))
                }
                practiceTimeOfFinalWeekTest(r=7) {
                    return this.configs.reduce( (p, i) => "PRACTICE_TIME_OF_FINAL_WEEK_TEST" === i.config_key ? Math.max(i.value, 1) : p, r)
                }
                static #_ = this.ɵfac = function r(p) {
                    return new (p || AuthService)
                }
                ;
                static #_2 = this.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_11__.Yz7({
                    token: AuthService,
                    factory: AuthService.ɵfac,
                    providedIn: "root"
                })
            }
            return AuthService
        }
        )()
    }
    ,
    8668: (r, p, i) => {
        "use strict";
        i.d(p, {
            $: () => j
        });
        var u = i(8748)
          , d = i(1813)
          , s = i(7560)
          , t = i(1960)
          , A = i(9342)
          , f = i(1209)
          , L = i(5646)
          , y = i(2512)
          , T = i(5333)
          , x = i(755)
          , D = i(2939);
        const S = "__9Zra%b_wK97X9ONTL9";
        let j = ( () => {
            class I {
                get isRefreshing() {
                    return !!sessionStorage.getItem(S)
                }
                set isRefreshing(C) {
                    C ? sessionStorage.setItem(S, "on_air") : sessionStorage.removeItem(S)
                }
                constructor(C) {
                    this.http = C,
                    this.onReceivingNewToken = new u.x,
                    this.isRefreshing = !1
                }
                refreshToken() {
                    return this.isRefreshing ? this.waitForTokenRefreshed() : this.requestRefreshToken()
                }
                waitForTokenRefreshed() {
                    return this.onReceivingNewToken.closed && (this.onReceivingNewToken = new u.x),
                    this.onReceivingNewToken.asObservable().pipe((0,
                    T.h)(C => !!C), (0,
                    d.q)(1), (0,
                    s.K)(C => (0,
                    t._)( () => C)))
                }
                requestRefreshToken() {
                    return this.isRefreshing = !0,
                    this.http.post((0,
                    L.qT)("refresh-token"), {
                        refresh_token: (0,
                        y.cs)()
                    }).pipe((0,
                    A.z)(C => {
                        const v = (0,
                        y.vM)(C.data);
                        return this.onReceivingNewToken.next(v),
                        this.onReceivingNewToken.complete(),
                        this.isRefreshing = !1,
                        (0,
                        f.of)(v)
                    }
                    ), (0,
                    s.K)(C => (this.isRefreshing = !1,
                    this.onReceivingNewToken.error(C),
                    (0,
                    t._)( () => C))))
                }
                static #t = this.ɵfac = function(v) {
                    return new (v || I)(x.LFG(D.eN))
                }
                ;
                static #e = this.ɵprov = x.Yz7({
                    token: I,
                    factory: I.ɵfac,
                    providedIn: "root"
                })
            }
            return I
        }
        )()
    }
    ,
    6550: (r, p, i) => {
        "use strict";
        i.d(p, {
            V: () => L
        });
        var u = i(5646)
          , d = i(2939)
          , s = i(4787)
          , t = i(2425)
          , A = i(4989)
          , f = i(755);
        let L = ( () => {
            class y {
                constructor(x) {
                    this.http = x,
                    this.api = "".concat(u.NZ.deploy.api, "user-profile/")
                }
                create(x) {
                    return this.http.post(this.api, x).pipe((0,
                    s.w)( () => this.get()))
                }
                get() {
                    return this.http.get(this.api).pipe((0,
                    t.U)(x => Array.isArray(x.data) && x.data[0] ? x.data[0] : null))
                }
                update(x, D) {
                    return this.http.put("".concat(this.api, x.toString()), D).pipe((0,
                    t.U)(S => S.data))
                }
                query(x, D) {
                    const S = (0,
                    A.Cn)(x, new d.LE({
                        fromObject: D
                    }));
                    return this.http.get(this.api, {
                        params: S
                    }).pipe((0,
                    t.U)(j => j.data))
                }
                static #t = this.ɵfac = function(D) {
                    return new (D || y)(f.LFG(d.eN))
                }
                ;
                static #e = this.ɵprov = f.Yz7({
                    token: y,
                    factory: y.ɵfac,
                    providedIn: "any"
                })
            }
            return y
        }
        )()
    }
    ,
    5073: (r, p, i) => {
        "use strict";
        i.d(p, {
            I: () => L
        });
        var u = i(2939)
          , d = i(2425)
          , s = i(5646)
          , t = i(1367)
          , A = i(4989)
          , f = i(755);
        let L = ( () => {
            class y {
                constructor(x) {
                    this.http = x,
                    this.api = (0,
                    s.qT)("configs/")
                }
                getAppConfigs(x="") {
                    const D = x ? Object.assign({
                        limit: -1,
                        paged: 1
                    }, {
                        select: x
                    }) : {
                        limit: -1,
                        paged: 1
                    };
                    return this.http.get(this.api, {
                        params: new u.LE({
                            fromObject: D
                        })
                    }).pipe((0,
                    d.U)(S => S.data))
                }
                getConfigSettingByConfigKey(x, D="") {
                    const S = [{
                        conditionName: "config_key",
                        condition: t.z.equal,
                        value: x
                    }]
                      , j = {
                        limit: 1,
                        paged: 1
                    };
                    D && (j.select = D);
                    const I = (0,
                    A.Cn)(S, new u.LE({
                        fromObject: j
                    }));
                    return this.http.get(this.api, {
                        params: I
                    }).pipe((0,
                    d.U)(M => M.data.length ? M.data[0] : null))
                }
                query(x, D) {
                    const S = (0,
                    A.Cn)(x, new u.LE({
                        fromObject: D
                    }));
                    return this.http.get(this.api, {
                        params: S
                    }).pipe((0,
                    d.U)(j => j.data))
                }
                static #t = this.ɵfac = function(D) {
                    return new (D || y)(f.LFG(u.eN))
                }
                ;
                static #e = this.ɵprov = f.Yz7({
                    token: y,
                    factory: y.ɵfac,
                    providedIn: "any"
                })
            }
            return y
        }
        )()
    }
    ,
    665: (r, p, i) => {
        "use strict";
        i.d(p, {
            $r: () => j,
            KK: () => x,
            c$: () => S
        });
        var u = i(755)
          , d = i(3107)
          , s = i(2333)
          , t = i(6424)
          , A = i(8748)
          , f = i(2425)
          , L = i(9028)
          , y = i.n(L)
          , T = i(2939);
        const x = (I, M) => I && I.role && I.role.toLowerCase() === M.toLowerCase()
          , S = (I, M, C) => {
            if (0 === C) {
                let v = document.getElementById(`q-${M.id}`);
                v && MathJax.typesetPromise([v])
            }
            if (C < I.length) {
                const v = I.substring(0, C + 1);
                M.innerHTML = v,
                (I => (I.match(/</g) || []).length === (I.match(/>/g) || []).length)(v) ? setTimeout( () => S(I, M, ++C), 20) : S(I, M, ++C)
            } else
                MathJax.typesetPromise([document.getElementById(M.id)]).catch(function(v) {
                    console.error(v)
                })
        }
        ;
        let j = ( () => {
            class I {
                get base() {
                    return `${this.protocol}://${this.domain}`
                }
                get token() {
                    return localStorage.getItem(this.tokenKeyName)
                }
                set token(C) {
                    this._token.set(C),
                    localStorage.setItem(this.tokenKeyName, C)
                }
                constructor(C) {
                    this.http = C,
                    this.chatbotState = (0,
                    u.tdS)("collapse"),
                    this.coursePlanActivity = (0,
                    u.tdS)(null),
                    this.expanded = (0,
                    u.tdS)(!1),
                    this.enableQa = (0,
                    u.Flj)( () => this._enableQa()),
                    this._enableQa = (0,
                    u.tdS)(!1),
                    this.enableGuide = (0,
                    u.Flj)( () => this._enableGuide()),
                    this._enableGuide = (0,
                    u.tdS)(!1),
                    this.qaReady = (0,
                    u.Flj)( () => this._enableQa()),
                    this.guideReady = (0,
                    u.Flj)( () => this._enableGuide() && this.coursePlanActivity() && this.coursePlanActivity().week > 0),
                    this._token = (0,
                    u.tdS)(this.token),
                    this.authenticateFail = (0,
                    u.tdS)(!1),
                    this.state = (0,
                    u.Flj)( () => this._token() ? "authenticated" : "unauthenticated"),
                    this.protocol = (0,
                    u.f3M)(d.RG),
                    this.domain = (0,
                    u.f3M)(d.nN),
                    this.port = (0,
                    u.f3M)(d.Oj),
                    this.api = (0,
                    u.f3M)(d.hx),
                    this.tokenKeyName = (0,
                    u.f3M)(d.UO),
                    this.userGetter = (0,
                    u.f3M)(d.yO),
                    this.apiGetter = (0,
                    u.f3M)(d.Gc),
                    this.auth = (0,
                    u.f3M)(s.e),
                    this.observeLogin = new t.X(!1),
                    this.converter = new (y().Converter)({
                        tables: !0,
                        simplifiedAutoLink: !0,
                        strikethrough: !0,
                        tasklists: !0
                    }),
                    this._observeFillHistoryGuid = new A.x,
                    this.auth.onUserChanged.pipe((0,
                    f.U)(v => {
                        const k = v ? this.auth.configs.find(w => "TUTOR_AI_CONFIGS" === w.config_key) : null
                          , B = k && Array.isArray(k.params) ? k.params.find(w => w.site === location.hostname) : null;
                        return B && (B.configs.qa = !!B.configs.qa,
                        B.configs.guide = !!B.configs.guide),
                        Object.assign({
                            site: location.hostname,
                            configs: {
                                qa: !1,
                                guide: !1
                            }
                        }, B) || {
                            site: location.hostname,
                            configs: {
                                qa: !1,
                                guide: !1
                            }
                        }
                    }
                    )).subscribe( ({configs: v}) => {
                        this._enableQa.set(v.qa),
                        this._enableGuide.set(v.guide)
                    }
                    )
                }
                openPanel() {
                    this.expanded.set(!0)
                }
                closePanel() {
                    this.expanded.set(!1)
                }
                activeCoursePlanActivity(C) {
                    this.coursePlanActivity.set(20131 === C.course_id ? C : null)
                }
                disable() {
                    this.coursePlanActivity.set(null)
                }
                isLoggedIn() {
                    return !!this.token
                }
                logout() {
                    this.token && (this.enableQa() || this.enableGuide()) && (this.token = "",
                    this.http.post(this.apiGetter(this.base, this.api.auth.logout), {}, {
                        headers: {
                            responseType: "json"
                        }
                    }).subscribe())
                }
                login() {
                    if (this._enableQa() || this._enableGuide())
                        if (this.token)
                            this._token.set(this.token),
                            this.observeLogin.next(!0);
                        else {
                            this.authenticateFail.set(!1);
                            const C = this.userGetter(this.auth.student.id)
                              , v = new FormData;
                            v.append("username", C.username),
                            v.append("password", C.password),
                            this.http.post(this.apiGetter(this.base, this.api.auth.login), v, {
                                headers: {
                                    responseType: "json"
                                }
                            }).pipe((0,
                            f.U)( ({access_token: k}) => k)).subscribe({
                                next: k => {
                                    this.token = k,
                                    this.observeLogin.next(!0)
                                }
                                ,
                                error: () => {
                                    this.authenticateFail.set(!0)
                                }
                            })
                        }
                }
                get chatRoom() {
                    return ["chat-room", this.auth.student.student_code].join("-")
                }
                chat(C) {
                    return this.http.post(this.apiGetter(this.base, this.api.chat.chat, this.chatRoom), {
                        content: C
                    })
                }
                get guideSessionId() {
                    return [this.coursePlanActivity().course_id, this.coursePlanActivity().week, this.auth.student.id].join("_")
                }
                guide(C) {
                    return this.http.post(this.apiGetter(this.base, this.api.guide.guide, this.guideSessionId), {
                        content: C,
                        lesson_id: this.coursePlanActivity().week + 1
                    })
                }
                historyGuide() {
                    return this.http.get(this.apiGetter(this.base, this.api.guide.history, this.guideSessionId))
                }
                get onFillHistoryGuide() {
                    return this._observeFillHistoryGuid.asObservable()
                }
                fillHistoryGuide(C) {
                    this._observeFillHistoryGuid.next(C)
                }
                static #t = this.ɵfac = function(v) {
                    return new (v || I)(u.LFG(T.eN))
                }
                ;
                static #e = this.ɵprov = u.Yz7({
                    token: I,
                    factory: I.ɵfac,
                    providedIn: "root"
                })
            }
            return I
        }
        )()
    }
    ,
    1994: (r, p, i) => {
        "use strict";
        i.d(p, {
            A: () => I
        });
        var u = i(6733)
          , d = i(5931)
          , s = i(755);
        const t = ["headerOptionsTemplate"]
          , A = ["headerTitleTemplate"]
          , f = ["actionTemplate"];
        function L(M, C) {
            1 & M && s.GkF(0)
        }
        function y(M, C) {
            1 & M && s.GkF(0)
        }
        function T(M, C) {
            if (1 & M && (s.TgZ(0, "mat-card-header", 4)(1, "h5"),
            s._uU(2),
            s.YNc(3, L, 1, 0, "ng-container", 5),
            s.qZA(),
            s.YNc(4, y, 1, 0, "ng-container", 5),
            s.qZA()),
            2 & M) {
                const v = s.oxw();
                s.Q6J("ngClass", v.headerClass),
                s.xp6(2),
                s.Oqu(v.cardTitle),
                s.xp6(1),
                s.Q6J("ngTemplateOutlet", v.headerTitleTemplate),
                s.xp6(1),
                s.Q6J("ngTemplateOutlet", v.headerOptionsTemplate)
            }
        }
        function x(M, C) {
            if (1 & M && (s.TgZ(0, "mat-card-content"),
            s.Hsn(1),
            s.qZA()),
            2 & M) {
                const v = s.oxw();
                s.Udp("padding", v.padding, "px")
            }
        }
        function D(M, C) {
            1 & M && s.GkF(0)
        }
        function S(M, C) {
            if (1 & M && (s.TgZ(0, "mat-card-actions", 0),
            s.YNc(1, D, 1, 0, "ng-container", 5),
            s.qZA()),
            2 & M) {
                const v = s.oxw();
                s.Q6J("ngClass", v.actionClass),
                s.xp6(1),
                s.Q6J("ngTemplateOutlet", v.actionTemplate)
            }
        }
        const j = ["*"];
        let I = ( () => {
            class M {
                constructor() {
                    this.showHeader = !0,
                    this.showContent = !0,
                    this.padding = 24
                }
                static #t = this.ɵfac = function(k) {
                    return new (k || M)
                }
                ;
                static #e = this.ɵcmp = s.Xpm({
                    type: M,
                    selectors: [["app-card"]],
                    contentQueries: function(k, B, w) {
                        if (1 & k && (s.Suo(w, t, 5),
                        s.Suo(w, A, 5),
                        s.Suo(w, f, 5)),
                        2 & k) {
                            let Z;
                            s.iGM(Z = s.CRH()) && (B.headerOptionsTemplate = Z.first),
                            s.iGM(Z = s.CRH()) && (B.headerTitleTemplate = Z.first),
                            s.iGM(Z = s.CRH()) && (B.actionTemplate = Z.first)
                        }
                    },
                    inputs: {
                        cardClass: "cardClass",
                        showHeader: "showHeader",
                        showContent: "showContent",
                        headerClass: "headerClass",
                        actionClass: "actionClass",
                        cardTitle: "cardTitle",
                        padding: "padding"
                    },
                    standalone: !0,
                    features: [s.jDz],
                    ngContentSelectors: j,
                    decls: 4,
                    vars: 4,
                    consts: [[3, "ngClass"], ["class", "card-header justify-content-between align-item-center", 3, "ngClass", 4, "ngIf"], [3, "padding", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "card-header", "justify-content-between", "align-item-center", 3, "ngClass"], [4, "ngTemplateOutlet"]],
                    template: function(k, B) {
                        1 & k && (s.F$t(),
                        s.TgZ(0, "mat-card", 0),
                        s.YNc(1, T, 5, 4, "mat-card-header", 1),
                        s.YNc(2, x, 2, 2, "mat-card-content", 2),
                        s.YNc(3, S, 2, 2, "mat-card-actions", 3),
                        s.qZA()),
                        2 & k && (s.Q6J("ngClass", B.cardClass),
                        s.xp6(1),
                        s.Q6J("ngIf", B.showHeader),
                        s.xp6(1),
                        s.Q6J("ngIf", B.showContent),
                        s.xp6(1),
                        s.Q6J("ngIf", B.actionTemplate))
                    },
                    dependencies: [u.ez, u.mk, u.O5, u.tP, d.QW, d.a8, d.hq, d.dn, d.dk],
                    styles: [".block[_ngcontent-%COMP%]{display:block!important}.card-action[_ngcontent-%COMP%]{border-top:1px solid var(--accent-300);padding:20px}"]
                })
            }
            return M
        }
        )()
    }
    ,
    887: (r, p, i) => {
        "use strict";
        i.d(p, {
            T: () => I
        });
        var u = i(6733)
          , d = i(755);
        const t = "transitionend"
          , A = "show"
          , f = "app-collapse"
          , L = "app-collapsing"
          , x = (M, C=[], v=M) => "function" == typeof M ? M(...C) : v;
        let S = ( () => {
            class M {
                constructor() {
                    this.elementRef = (0,
                    d.f3M)(d.SBq),
                    this._dimension = "height",
                    this.collapseState = new d.vpe,
                    this._state = "collapse",
                    this._isTransitioning = !1
                }
                get dimension() {
                    return this._dimension
                }
                set dimension(v) {
                    this._dimension = v
                }
                get state() {
                    return this._state
                }
                set state(v) {
                    this.collapseState.emit(v),
                    this._state = v
                }
                get isShown() {
                    return "open" === this.state
                }
                get _element() {
                    return this.elementRef.nativeElement
                }
                toggle() {
                    this.isShown ? this.hide() : this.show()
                }
                show() {
                    if (this._isTransitioning || this.isShown)
                        return;
                    this._isTransitioning = !0;
                    const v = this.dimension;
                    this._element.classList.remove(f),
                    this._element.classList.add(L),
                    this._element.style[v] = "0";
                    const w = `scroll${v[0].toUpperCase() + v.slice(1)}`;
                    this._queueCallback( () => {
                        this._isTransitioning = !1,
                        this._element.classList.remove(L),
                        this._element.classList.add(f, A),
                        this._element.style[v] = "",
                        this.state = "open"
                    }
                    , this._element, !0),
                    this._element.style[v] = `${this._element[w]}px`
                }
                hide() {
                    if (this._isTransitioning || !this.isShown)
                        return;
                    this._isTransitioning = !0;
                    const v = this.dimension;
                    this._element.style[v] = `${this._element.getBoundingClientRect()[v]}px`,
                    this._element.classList.add(L),
                    this._element.classList.remove(f, A);
                    const k = () => {
                        this._isTransitioning = !1,
                        this._element.classList.remove(L),
                        this._element.classList.add(f),
                        this.state = "collapse"
                    }
                    ;
                    setTimeout( () => {
                        this._element.style[v] = "",
                        this._queueCallback(k, this._element, !0)
                    }
                    , 50)
                }
                ngOnInit() {
                    this.isShown && this._element.classList.add(f, A),
                    this.collapseState.emit(this.state)
                }
                _queueCallback(v, k, B=!0) {
                    ( (M, C, v=!0) => {
                        if (!v)
                            return void x(M);
                        const B = (M => {
                            if (!M)
                                return 0;
                            let {transitionDuration: C, transitionDelay: v} = window.getComputedStyle(M);
                            const k = Number.parseFloat(C)
                              , B = Number.parseFloat(v);
                            return k || B ? (C = C.split(",")[0],
                            v = v.split(",")[0],
                            1e3 * (Number.parseFloat(C) + Number.parseFloat(v))) : 0
                        }
                        )(C) + 5;
                        let w = !1;
                        const Z = ({target: V}) => {
                            V === C && (w = !0,
                            C.removeEventListener(t, Z),
                            x(M))
                        }
                        ;
                        C.addEventListener(t, Z),
                        setTimeout( () => {
                            w || (M => {
                                M.dispatchEvent(new Event(t))
                            }
                            )(C)
                        }
                        , B)
                    }
                    )(v, k, B)
                }
                static #t = this.ɵfac = function(k) {
                    return new (k || M)
                }
                ;
                static #e = this.ɵdir = d.lG2({
                    type: M,
                    selectors: [["", "collapse", ""]],
                    hostAttrs: [1, "app-collapse"],
                    inputs: {
                        dimension: ["collapse", "dimension"]
                    },
                    outputs: {
                        collapseState: "collapseState"
                    },
                    standalone: !0
                })
            }
            return M
        }
        )();
        const j = ["*"];
        let I = ( () => {
            class M {
                constructor() {
                    this.dimension = "height"
                }
                static #t = this.ɵfac = function(k) {
                    return new (k || M)
                }
                ;
                static #e = this.ɵcmp = d.Xpm({
                    type: M,
                    selectors: [["collapse-panel"]],
                    viewQuery: function(k, B) {
                        if (1 & k && d.Gf(S, 7, S),
                        2 & k) {
                            let w;
                            d.iGM(w = d.CRH()) && (B.panel = w.first)
                        }
                    },
                    inputs: {
                        dimension: "dimension"
                    },
                    standalone: !0,
                    features: [d.jDz],
                    ngContentSelectors: j,
                    decls: 2,
                    vars: 1,
                    consts: [[3, "collapse"]],
                    template: function(k, B) {
                        1 & k && (d.F$t(),
                        d.TgZ(0, "div", 0),
                        d.Hsn(1),
                        d.qZA()),
                        2 & k && d.Q6J("collapse", B.dimension)
                    },
                    dependencies: [u.ez, S],
                    encapsulation: 2
                })
            }
            return M
        }
        )()
    }
    ,
    4217: (r, p, i) => {
        "use strict";
        i.d(p, {
            P: () => A
        });
        var u = i(8748)
          , d = i(6424)
          , s = i(155)
          , t = i(755);
        let A = ( () => {
            class f {
                constructor() {
                    this.layoutState = new u.x,
                    this.drawerOpen = !1,
                    this.onBlockActionsChanges$ = new d.X(!1),
                    this.onSearch$ = new u.x,
                    this.rightSidebarObserver = new u.x,
                    this.observeNavigationClick = new u.x,
                    this.observeTopBarNavigationUpdate = new u.x,
                    this._goBackToPreviousPage = new u.x
                }
                toggleSideDrawer() {
                    this.layoutState.next(!this.drawerOpen)
                }
                openRightSidebar() {
                    this.rightSidebarObserver.next(!0)
                }
                closeRightSidebar() {
                    this.rightSidebarObserver.next(!1)
                }
                get observeRightSidebar() {
                    return this.rightSidebarObserver.asObservable()
                }
                get onTopBarNavigationClick() {
                    return this.observeNavigationClick.asObservable()
                }
                topBarNavigationClick(y) {
                    this.observeNavigationClick.next(y)
                }
                get onTopBarNavigationUpdate() {
                    return this.observeTopBarNavigationUpdate.asObservable()
                }
                updateTopBarNavigation(y) {
                    this.observeTopBarNavigationUpdate.next(y)
                }
                addTopBarNavigation(y) {
                    this.updateTopBarNavigation({
                        name: "add",
                        item: y
                    })
                }
                removeTopBarNavigation(y) {
                    this.updateTopBarNavigation({
                        name: "remove",
                        item: y
                    })
                }
                get onGoBackToPreviousPage() {
                    return this._goBackToPreviousPage.asObservable().pipe((0,
                    s.b)(200))
                }
                goBackToPreviousPage(y) {
                    this._goBackToPreviousPage.next(y || "")
                }
                static #t = this.ɵfac = function(T) {
                    return new (T || f)
                }
                ;
                static #e = this.ɵprov = t.Yz7({
                    token: f,
                    factory: f.ɵfac,
                    providedIn: "root"
                })
            }
            return f
        }
        )()
    }
    ,
    3562: (r, p, i) => {
        "use strict";
        i.d(p, {
            g: () => Y
        });
        var u = i(8239)
          , d = i(755)
          , s = i(8748)
          , t = i(6424)
          , A = i(2425)
          , f = i(1570)
          , L = i(5333)
          , y = i(2892)
          , T = i(9838)
          , x = i(5646)
          , D = i(2512)
          , S = i(2939)
          , j = i(6733)
          , I = i(3005)
          , M = i(210)
          , C = i(6908)
          , v = i(1215)
          , k = i(3148);
        function B(z, at) {
            if (1 & z && (d.TgZ(0, "h4", 6),
            d._uU(1),
            d.qZA()),
            2 & z) {
                const P = d.oxw();
                d.xp6(1),
                d.Oqu(P.heading)
            }
        }
        function w(z, at) {
            if (1 & z && (d._UZ(0, "div", 7),
            d.ALo(1, "safeHtml")),
            2 & z) {
                const P = d.oxw();
                d.Q6J("innerHTML", d.lcZ(1, 1, P.message), d.oJD)
            }
        }
        function Z(z, at) {
            if (1 & z) {
                const P = d.EpF();
                d.ynx(0),
                d.TgZ(1, "button", 8),
                d.NdJ("click", function() {
                    const ut = d.CHM(P).$implicit
                      , R = d.oxw();
                    return d.KtG(R.dialogRef.close(ut))
                }),
                d.qZA(),
                d.BQk()
            }
            if (2 & z) {
                const P = at.$implicit;
                d.xp6(1),
                d.Tol(P.class),
                d.Q6J("ngStyle", P.ngStyle)("icon", P.icon)("label", P.label)("disabled", P.readonly)
            }
        }
        let V = ( () => {
            class z {
                constructor(P, F) {
                    this.dialogRef = P,
                    this.data = F,
                    this.buttons = [],
                    this.heading = "",
                    this.message = "",
                    this.buttons = (this.data.buttons && this.data.buttons.length ? this.data.buttons : [C.GG]).reduce( (ut, R, lt) => [...ut, Object.assign({
                        label: "",
                        icon: "",
                        class: "",
                        readonly: !1,
                        ngStyle: {},
                        name: "btn_" + lt
                    }, R)], new Array),
                    this.heading = F.heading || "",
                    this.message = F.message || ""
                }
                onNoClick() {
                    this.dialogRef.close()
                }
                buttonClick() {}
                static #t = this.ɵfac = function(F) {
                    return new (F || z)(d.Y36(I.so),d.Y36(I.WI))
                }
                ;
                static #e = this.ɵcmp = d.Xpm({
                    type: z,
                    selectors: [["app-confirm"]],
                    standalone: !0,
                    features: [d.jDz],
                    decls: 6,
                    vars: 3,
                    consts: [[1, "app-confirm-wrap"], ["class", "app-confirm-wrap__heading", 4, "ngIf"], [1, "app-confirm-wrap__body"], ["class", "app-confirm-wrap__body__message", 3, "innerHTML", 4, "ngIf"], [1, "app-confirm-wrap__body__buttons", "d-flex", "justify-content-center", "align-items-center"], [4, "ngFor", "ngForOf"], [1, "app-confirm-wrap__heading"], [1, "app-confirm-wrap__body__message", 3, "innerHTML"], ["pButton", "", "pRipple", "", 3, "ngStyle", "icon", "label", "disabled", "click"]],
                    template: function(F, q) {
                        1 & F && (d.TgZ(0, "div", 0),
                        d.YNc(1, B, 2, 1, "h4", 1),
                        d.TgZ(2, "div", 2),
                        d.YNc(3, w, 2, 3, "div", 3),
                        d.TgZ(4, "div", 4),
                        d.YNc(5, Z, 2, 6, "ng-container", 5),
                        d.qZA()()()),
                        2 & F && (d.xp6(1),
                        d.Q6J("ngIf", q.heading),
                        d.xp6(2),
                        d.Q6J("ngIf", q.message),
                        d.xp6(2),
                        d.Q6J("ngForOf", q.buttons))
                    },
                    dependencies: [j.ez, j.sg, j.O5, j.PC, I.Is, M.z, v.hJ, v.Hq, k.T, k.H],
                    styles: [".app-confirm-wrap[_ngcontent-%COMP%]{display:flex;flex-flow:column;padding:25px;font-family:var(--primary-font),sans-serif}.app-confirm-wrap__heading[_ngcontent-%COMP%]{font-size:18px;line-height:1.2;font-weight:700;text-align:center;color:#333;font-family:var(--primary-font),sans-serif;margin:0}.app-confirm-wrap__heading[_ngcontent-%COMP%] + .app-confirm-wrap__body[_ngcontent-%COMP%] > .app-confirm-wrap__body__message[_ngcontent-%COMP%], .app-confirm-wrap__heading[_ngcontent-%COMP%] + .app-confirm-wrap__body[_ngcontent-%COMP%] > .app-confirm-wrap__body__buttons[_ngcontent-%COMP%], .app-confirm-wrap__body__message[_ngcontent-%COMP%]   .app-confirm-wrap__body__buttons[_ngcontent-%COMP%]{margin:15px 0 0}.app-confirm-wrap__body__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{margin-left:15px}"]
                })
            }
            return z
        }
        )();
        var ot = i(8004);
        let Y = ( () => {
            class z {
                constructor() {
                    this.OBSERVE_SYSTEM_IS_ASYNCHRONOUS_IN_TIME = new s.x,
                    this.REMEASURE_DEVICE_SCREEN = new s.x,
                    this.OBSERVE_LOADING_ANIMATION = new s.x,
                    this.OBSERVE_OPEN_DEVTOOL = new t.X(!1),
                    this.OBSERVE_LOADING_ANIMATION_V2 = new s.x,
                    this.observerSignOut$ = new s.x,
                    this.observerSessionExpired$ = new s.x,
                    this.refreshTokenSubject$ = new t.X(""),
                    this.OBSERVE_DELETE_TOKEN = new s.x,
                    this.messageService = (0,
                    d.f3M)(T.ez),
                    this.http = (0,
                    d.f3M)(S.eN),
                    this._dialog = (0,
                    d.f3M)(I.uw),
                    this.dataConfirmSignOut = {
                        heading: "Bạn có chắc chắn muốn đăng xuất không?",
                        buttons: [{
                            name: "yes",
                            label: "Có",
                            icon: "ti ti-check",
                            class: "p-button-primary p-button-rounded"
                        }, {
                            name: "no",
                            label: "Không",
                            icon: "ti ti-x",
                            class: "p-button-secondary p-button-rounded"
                        }]
                    }
                }
                toastSuccess(P, F="Thông báo") {
                    this.messageService.add({
                        severity: "success",
                        summary: F || "Success",
                        detail: P,
                        closable: !0
                    })
                }
                toastWarning(P, F="Cảnh báo") {
                    this.messageService.add({
                        severity: "warn",
                        summary: F || "Warn",
                        detail: P,
                        closable: !0
                    })
                }
                toastInfo(P, F="Thông báo") {
                    this.messageService.add({
                        severity: "info",
                        summary: F || "Info",
                        detail: P,
                        closable: !0
                    })
                }
                toastError(P, F="Cảnh báo") {
                    this.messageService.add({
                        severity: "error",
                        summary: F || "Error",
                        detail: P,
                        closable: !0
                    })
                }
                sessionExpired(P) {
                    this.observerSessionExpired$.next(P || "")
                }
                get onSessionExpired() {
                    return this.observerSessionExpired$
                }
                refreshToken() {
                    return this.refreshTokenSubject$.next(""),
                    this.http.post((0,
                    x.qT)("refresh-token"), {
                        refresh_token: (0,
                        D.cs)()
                    }).pipe((0,
                    A.U)( ({data: P}) => (0,
                    D.vM)(P)), (0,
                    f.b)(P => this.refreshTokenSubject$.next(P)))
                }
                waitingForNewAccessTokenToBeServed() {
                    return this.refreshTokenSubject$.asObservable().pipe((0,
                    L.h)(P => "" != P))
                }
                get dialog() {
                    return this._dialog
                }
                get createDialog() {
                    return this._dialog
                }
                confirm(P) {
                    return this._dialog.open(V, {
                        data: P,
                        disableClose: !0,
                        panelClass: "ictu-app-notification"
                    }).afterClosed()
                }
                confirmSignOut() {
                    this._handleConfirmSignOut()
                }
                _handleConfirmSignOut() {
                    var P = this;
                    return (0,
                    u.Z)(function*() {
                        "yes" === (yield(0,
                        y.z)(P.confirm(P.dataConfirmSignOut)).then(q => q.name)) && P.observerSignOut$.next("logout")
                    })()
                }
                get onSignOut() {
                    return this.observerSignOut$.asObservable()
                }
                isProcessing(P=!0) {
                    this.OBSERVE_LOADING_ANIMATION.next(P)
                }
                startLoading() {
                    this.isProcessing(!0)
                }
                stopLoading() {
                    this.isProcessing(!1)
                }
                get onLoadingAnimationV2() {
                    return this.OBSERVE_LOADING_ANIMATION_V2.asObservable()
                }
                loadingAnimationV2(P) {
                    this.OBSERVE_LOADING_ANIMATION_V2.next({
                        loading: !0,
                        ...P
                    })
                }
                disableLoadingAnimationV2() {
                    const P = {
                        loading: !1,
                        icon: null,
                        text: "",
                        process: null
                    };
                    setTimeout( () => this.OBSERVE_LOADING_ANIMATION_V2.next(P), 120)
                }
                get onRemeasureDeviceScreen() {
                    return this.REMEASURE_DEVICE_SCREEN.asObservable()
                }
                remeasureDeviceScreen() {
                    this.REMEASURE_DEVICE_SCREEN.next("remeasureDeviceScreen")
                }
                get onDevtoolOpened() {
                    return this.OBSERVE_OPEN_DEVTOOL.asObservable().pipe((0,
                    ot.x)())
                }
                noticeDevtoolOpened() {
                    this.OBSERVE_OPEN_DEVTOOL.next(!0)
                }
                get isSystemAsynchronousInTime() {
                    return this.OBSERVE_SYSTEM_IS_ASYNCHRONOUS_IN_TIME.asObservable()
                }
                reportSystemAsynchronousInTime() {
                    this.OBSERVE_SYSTEM_IS_ASYNCHRONOUS_IN_TIME.next("report")
                }
                onTokenDeleted() {
                    return this.OBSERVE_DELETE_TOKEN.asObservable()
                }
                noticeTokenDeleted() {
                    this.OBSERVE_DELETE_TOKEN.next("token deleted")
                }
                static #t = this.ɵfac = function(F) {
                    return new (F || z)
                }
                ;
                static #e = this.ɵprov = d.Yz7({
                    token: z,
                    factory: z.ɵfac,
                    providedIn: "root"
                })
            }
            return z
        }
        )()
    }
    ,
    4989: (r, p, i) => {
        "use strict";
        i.d(p, {
            Wt: () => at,
            jb: () => R,
            Ij: () => ct,
            aQ: () => ht,
            co: () => st,
            Cn: () => P,
            QZ: () => N
        });
        const u = g => null !== g && typeof g < "u" ? g.constructor : null
          , t = g => u(g) === Object
          , Z_object = t
          , Z_empty = g => (g => null === g || typeof g > "u")(g) || ((g => u(g) === String)(g) || (g => Array.isArray(g))(g) || (g => ( (g, c) => !!(g && c && g instanceof c))(g, NodeList))(g)) && !g.length || t(g) && !Object.keys(g).length;
        var V = i(2939)
          , ot = i(6191)
          , Y = i(5646);
        const at = Object.freeze(new class z {
            constructor() {
                this.isBrowserTabFocused = () => !document.hidden
            }
            pluck(c, _) {
                return c.map(b => b[_])
            }
            arraySort(c, _, b=1) {
                return c.sort( (O, U) => O[_] < U[_] ? -b : O[_] > U[_] ? b : 0)
            }
            arrayShuffle(c) {
                const _ = [...c]
                  , b = new Uint32Array(_.length);
                crypto.getRandomValues(b);
                for (let O = _.length - 1; O > 0; O--) {
                    const U = b[O] % (O + 1);
                    [_[O],_[U]] = [_[U], _[O]]
                }
                return _
            }
            arrayShuffleIndex(c) {
                const _ = Object.keys(c);
                return this.arrayShuffle(_).reduce( (b, O) => (b.push(c[parseInt(O, 10)]),
                b), new Array)
            }
            sortWidthTwoConditions(c, _, b) {
                return c.sort( (O, U) => O[_] < U[_] ? -1 : O[_] > U[_] ? 1 : O[b] < U[b] ? -1 : O[b] > U[b] ? 1 : 0)
            }
            tryParseJSON(c) {
                try {
                    const _ = JSON.parse(c);
                    return _ && "object" == typeof _ ? _ : []
                } catch {
                    return []
                }
            }
            maybeJSON(c) {
                try {
                    return JSON.parse(c),
                    !0
                } catch {
                    return !1
                }
            }
            removeAccents(c) {
                let _ = c ? c.replace(/^\s+|\s+$/g, "").toLowerCase() : "";
                for (let U = 0; U <= 73; U++)
                    _ = _.replace(new RegExp("àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ·/_,:;".charAt(U),"g"), "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd------".charAt(U));
                return _ = _.replace(/[^a-z\d -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-"),
                _
            }
            encodeHTML(c) {
                if (!c)
                    return "";
                const _ = document.createElement("div");
                return _.innerText = c,
                _.innerHTML
            }
            decodeHTML(c) {
                if (!c)
                    return "";
                const _ = document.createElement("textarea");
                return _.innerHTML = c,
                _.value
            }
            showPhoneNumbersSafety(c, _=4) {
                return c && c.length ? new Array(c.length - _ + 1).join("*") + c.slice(-_) : ""
            }
            showEmailAddressSafety(c) {
                if (!c || c.length < 5)
                    return "";
                const _ = c.split("@");
                if (_[0].length < 2)
                    return c;
                const b = Math.floor(_[0].length / 2);
                return _[0] = _[0].slice(0, b) + new Array(_[0].length - b + 1).join("*"),
                _.join("@")
            }
            getYoutubeIdFromUrl(c) {
                return Z_empty(c) ? "" : c.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : c
            }
            formatSQLTimeStamp(c) {
                const _ = new Date(c.toUTCString());
                return this.formatSQLDateTime(_)
            }
            formatSQLDateTime(c) {
                return `${c.getFullYear().toString()}-${(c.getMonth() + 1).toString().padStart(2, "0")}-${c.getDate().toString().padStart(2, "0")} ${c.getHours().toString().padStart(2, "0")}:${c.getMinutes().toString().padStart(2, "0")}:${c.getSeconds().toString().padStart(2, "0")}`
            }
            formatSQLDate(c) {
                return `${c.getFullYear().toString(10)}-${(c.getMonth() + 1).toString().padStart(2, "0")}-${c.getDate().toString().padStart(2, "0")}`
            }
            strToSQLDate(c) {
                const _ = c ? this.dateFormatWithTimeZone(c) : null;
                return _ ? this.formatSQLDate(_) : ""
            }
            uniqueId() {
                return Date.now().toString(36) + Math.random().toString(36).substr(2)
            }
            copyToClipboard(c) {
                navigator.clipboard?.writeText && navigator.clipboard.writeText(c)
            }
            shallowClone(c) {
                return Object.assign({}, c)
            }
            cloneObject(c) {
                return Z_object(c),
                JSON.parse(JSON.stringify(c))
            }
            countWords(c) {
                return c.split(/[^a-zA-Z-]+/).filter(Boolean).length
            }
            randomIntegerInRange(c, _) {
                return Math.floor(Math.random() * (_ - c + 1)) + c
            }
            minDate(c) {
                const _ = c.filter(Boolean).map(b => b.getTime());
                return new Date(Math.min(..._))
            }
            maxDate(c) {
                const _ = c.filter(Boolean).map(b => b.getTime());
                return new Date(Math.max(..._))
            }
            isSameDate(c, _) {
                return c.toISOString() === _.toISOString()
            }
            isBeforeDate(c, _) {
                return c < _
            }
            isAfterDate(c, _) {
                return c > _
            }
            generateCode(c=16, _="") {
                const b = _ || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ&"
                  , O = b.length;
                let U = "";
                const G = [];
                for (let $ = 0; $ < c; $++) {
                    let tt = Math.floor(Math.random() * O);
                    if (G.includes(tt))
                        for (; G.includes(tt); )
                            tt = Math.floor(Math.random() * O);
                    G.unshift(tt),
                    G.length = 5,
                    U = "".concat(U, b[tt])
                }
                return U
            }
            capitalizedString(c) {
                return c[0].toUpperCase() + c.slice(1)
            }
            dateFormatWithTimeZone(c, _="Asia/Ho_Chi_Minh") {
                return "string" == typeof c ? new Date(new Date(c).toLocaleString("en-US", {
                    timeZone: _
                })) : new Date(c.toLocaleString("en-US", {
                    timeZone: _
                }))
            }
            toNumber(c, _=0) {
                try {
                    const b = parseInt(c, 10);
                    return Number.isNaN(b) ? _ : b
                } catch {
                    return _
                }
            }
            createArray(c, _) {
                return Array.from({
                    length: c
                }, b => _)
            }
            createNumberArray(c) {
                return Array.from({
                    length: c
                }, (_, b) => b)
            }
            formatVndCurrency(c) {
                return c.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND"
                })
            }
            formatVnNumber(c) {
                return c.toLocaleString("vi-VN")
            }
            reverseStrDateFormat(c) {
                return c ? c.replace(/[-_.]/g, "/").split("/").reverse().join("/") : ""
            }
            base64ToFile(c, _) {
                const b = c.split(",")[0].indexOf("base64") >= 0 ? atob(c.split(",")[1]) : window.unescape(c.split(",")[1])
                  , O = c.split(",")[0].split(":")[1].split(";")[0]
                  , U = b.length
                  , G = new Uint8Array(U);
                for (let $ = 0; $ < U; $++)
                    G[$] = b.charCodeAt($);
                return new File([G],_,{
                    lastModified: (new Date).getTime(),
                    type: O
                })
            }
            blobToFile(c, _) {
                return new File([c],_,{
                    lastModified: (new Date).getTime(),
                    type: c.type
                })
            }
            base64URLEncode(c) {
                const _ = (new TextEncoder).encode(c);
                return btoa(String.fromCharCode(...new Uint8Array(_))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
            }
            base64URLDecode(c) {
                const _ = c.replace(/-/g, "+").replace(/_/g, "/")
                  , b = c.length % 4 == 0 ? "" : "=".repeat(4 - c.length % 4);
                return atob(_ + b).split("").map(U => String.fromCharCode(U.charCodeAt(0))).join("")
            }
            matchSqlDateTime(c) {
                return !!c && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d+Z$/.test(c)
            }
            isSqlDateTime(c, _=!1) {
                return !!c && (_ ? this.matchSqlDateTime(c) : /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/g.test(c))
            }
            toFixed(c, _) {
                const b = _ || 0
                  , O = Math.pow(10, b)
                  , U = Math.abs(Math.round(c * O));
                let G = (c < 0 ? "-" : "") + String(Math.floor(U / O));
                if (b > 0) {
                    const $ = String(U % O);
                    G += "." + new Array(Math.max(b - $.length, 0) + 1).join("0") + $
                }
                return G
            }
            wasMomentExpired(c) {
                return ot().isAfter(c)
            }
            removeLastSlashes(c) {
                return c ? c.trim().replace(/\/+$/, "") : ""
            }
        }
        )
          , P = (g, c=null) => {
            const _ = c || new V.LE;
            return g.reduce( (b, O, U) => {
                const $ = "condition[" + U + "][value]";
                return b = (b = b.append("condition[" + U + "][key]", O.conditionName || "")).append($, O.value || ""),
                O.condition && (b = b.append("condition[" + U + "][compare]", O.condition || "")),
                O.orWhere && (b = b.append("condition[" + U + "][type]", O.orWhere)),
                b
            }
            , _)
        }
          , R = (g, c) => {
            const _ = c ? Object.keys(c) : [];
            return _.length ? _.reduce( (b, O) => (b.style[O] = c[O],
            b), g) : g
        }
          , N = (g, c) => `_rule-${c}-commited-by-${g}`
          , ht = () => !Y.NZ.deploy.supportForMobile && nt()
          , Q = () => navigator.userAgent || navigator.vendor || window.opera
          , nt = () => window.outerWidth < 1e3 || !!Q() && (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(Q()) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(Q().substr(0, 4)))
          , ct = () => {
            const g = Q() ? Q().toLowerCase() : ""
              , _ = /(win32|win64|windows|wince)/i
              , b = /(iphone|ipad|ipod)/i;
            let O = null;
            switch (!0) {
            case /(macintosh|macintel|macppc|mac68k|macos)/i.test(g):
                O = "macos";
                break;
            case b.test(g):
                O = "ios";
                break;
            case _.test(g):
                O = "windows";
                break;
            case /android/.test(g):
                O = "android";
                break;
            case /linux/.test(g):
                O = "linux"
            }
            return O
        }
          , st = (g, c) => g.sort().sort( (_, b) => {
            const O = parseInt(_, 10)
              , U = parseInt(b, 10);
            return Number.isNaN(O) || Number.isNaN(U) ? 0 : O - U
        }
        ).join(c)
    }
    ,
    8684: (r, p, i) => {
        "use strict";
        i.d(p, {
            IJ: () => u,
            Tv: () => s,
            Ww: () => d,
            X8: () => f,
            _z: () => L
        });
        const u = [{
            id: "navigation",
            title: "Navigation",
            type: "group",
            customSvg: "icon-navigation",
            children: [{
                id: "Dashboard",
                title: "Dashboard",
                type: "item",
                classes: "nav-item",
                url: "dashboard",
                icon: "ti ti-device-desktop-analytics"
            }]
        }, {
            id: "widget",
            title: "Widget",
            type: "group",
            customSvg: "icon-widget",
            children: [{
                id: "data",
                title: "Data",
                type: "item",
                classes: "nav-item",
                url: "/widget/data",
                customSvg: "#custom-fatrows"
            }]
        }, {
            id: "auth",
            title: "Authentication",
            type: "group",
            customSvg: "icon-navigation",
            children: [{
                id: "Login",
                title: "Login",
                type: "item",
                classes: "nav-item",
                url: "/auth/login",
                customSvg: "#custom-shield",
                target: !0,
                breadcrumbs: !1
            }, {
                id: "register",
                title: "Register",
                type: "item",
                classes: "nav-item",
                url: "/auth/register",
                customSvg: "#custom-password-check",
                target: !0,
                breadcrumbs: !1
            }]
        }, {
            id: "ui-component",
            title: "Ui Component",
            type: "group",
            customSvg: "icon-navigation",
            children: [{
                id: "typography",
                title: "Typography",
                type: "item",
                classes: "nav-item",
                url: "component/typography",
                customSvg: "#custom-text-block"
            }, {
                id: "buttons",
                title: "Buttons",
                type: "item",
                classes: "nav-item",
                url: "component/buttons",
                customSvg: "#custom-shapes"
            }, {
                id: "color",
                title: "Color",
                type: "item",
                classes: "nav-item",
                url: "component/color",
                customSvg: "#custom-clipboard"
            }, {
                id: "toast",
                title: "Toast",
                type: "item",
                classes: "nav-item",
                url: "component/toasts",
                icon: "ph-duotone ph-megaphone"
            }, {
                id: "ui_progress",
                title: "Progress",
                type: "item",
                classes: "nav-item",
                url: "component/progress",
                customSvg: "#custom-clipboard"
            }, {
                id: "tabler",
                title: "Tabler",
                type: "item",
                classes: "nav-item",
                url: "https://tabler-icons.io/",
                customSvg: "#custom-mouse-circle",
                target: !0,
                external: !0
            }, {
                id: "icons",
                title: "Icons",
                type: "item",
                classes: "nav-item",
                url: "component/icons",
                icon: "ph-duotone ph-paint-brush-broad"
            }]
        }, {
            id: "other",
            title: "Other",
            type: "group",
            customSvg: "icon-navigation",
            children: [{
                id: "menu-levels",
                title: "Menu levels",
                type: "collapse",
                customSvg: "#custom-level",
                children: [{
                    id: "level-2-1",
                    title: "Level 2.1",
                    type: "item",
                    url: "dashboard"
                }, {
                    id: "menu-level-2.2",
                    title: "Menu Level 2.2",
                    type: "collapse",
                    classes: "edge",
                    children: [{
                        id: "menu-level-3.1",
                        title: "Menu Level 3.1",
                        type: "item",
                        url: "dashboard"
                    }, {
                        id: "menu-level-3.2",
                        title: "Menu Level 3.2",
                        type: "item",
                        url: "dashboard"
                    }, {
                        id: "menu-level-3.3",
                        title: "Menu Level 3.3",
                        type: "collapse",
                        classes: "edge",
                        children: [{
                            id: "menu-level-4.1",
                            title: "Menu Level 4.1",
                            type: "item",
                            url: "dashboard"
                        }, {
                            id: "menu-level-4.2",
                            title: "Menu Level 4.2",
                            type: "item",
                            url: "dashboard"
                        }]
                    }]
                }, {
                    id: "menu-level-2.3",
                    title: "Menu Level 2.3",
                    type: "collapse",
                    classes: "edge",
                    children: [{
                        id: "menu-level-3.1",
                        title: "Menu Level 3.1",
                        type: "item",
                        url: "dashboard"
                    }, {
                        id: "menu-level-3.2",
                        title: "Menu Level 3.2",
                        type: "item",
                        url: "dashboard"
                    }, {
                        id: "menu-level-3.3",
                        title: "Menu Level 3.3",
                        type: "collapse",
                        classes: "edge",
                        children: [{
                            id: "menu-level-4.1",
                            title: "Menu Level 4.1",
                            type: "item",
                            url: "dashboard"
                        }, {
                            id: "menu-level-4.2",
                            title: "Menu Level 4.2",
                            type: "item",
                            url: "dashboard"
                        }]
                    }]
                }]
            }, {
                id: "sample-page",
                title: "Sample Page",
                type: "item",
                classes: "nav-item",
                url: "sample-page",
                customSvg: "#custom-notification-status"
            }]
        }]
          , d = 20
          , s = new Map([["application/vnd.google-apps.folder", "folder"], ["audio/mpeg", "mp3"], ["audio/mp3", "mp3"], ["audio/x-aac", "x-aac"], ["application/zip", "zip"], ["application/x-zip-compressed", "zip"], ["application/x-rar-compressed", "rar"], ["application/x-7z-compressed", "zip"], ["application/msword", "doc"], ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "docx"], ["application/vnd.ms-powerpoint", "ppt"], ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "pptx"], ["application/vnd.ms-excel", "xls"], ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "xlsx"], ["application/vnd.google-apps.spreadsheet", "xlsx"], ["application/pdf", "pdf"], ["video/x-msvideo", "video"], ["video/mp4", "mp4"], ["image/png", "img"], ["image/jpeg", "img"], ["image/jpg", "img"], ["image/gif", "img"], ["text/plain", "text"]])
          , A = (new Date).getTimezoneOffset() / 60 * -1
          , f = `(UTC${A >= 0 ? "+" + A.toString(10).padStart(2, "0") : A.toString(10).padStart(2, "0")})`
          , L = (T, x) => parseFloat(Math.max(T - T / 100 * x, 0).toFixed(1))
    }
    ,
    5646: (r, p, i) => {
        "use strict";
        i.d(p, {
            Wx: () => ot,
            XQ: () => q,
            hu: () => Z,
            xv: () => lt,
            xR: () => ut,
            zT: () => at,
            w4: () => V,
            xE: () => R,
            Sp: () => z,
            xF: () => F,
            yM: () => Y,
            NZ: () => T,
            li: () => w,
            qT: () => k,
            Rv: () => B,
            UY: () => j,
            Qq: () => v,
            Zw: () => D,
            Ki: () => C
        });
        class s {
            constructor(rt, {port: ht, path: Q}) {
                this.wss = "wss://" + rt,
                this.port = ht,
                this.path = Q
            }
            get url() {
                return [this.wss, this.port].join(":")
            }
        }
        const T = {
            appVersion: "3.2.67",
            production: !0,
            deploy: new class d {
                constructor({apiServiceConfig: rt, socketServiceConfig: ht}) {
                    this.adminDashboardPath = "/dashboard",
                    this.configs = rt;
                    const Q = rt.domainName
                      , nt = rt.protocol
                      , ct = rt.realm
                      , st = rt.port;
                    return this.socket = new s(Q,ht),
                    this.domain = `${nt}://${Q}`,
                    this.url = `${nt}://${Q}:${st}/`,
                    this.api = `${nt}://${Q}:${st}/${ct}/api/`,
                    this.fileDir = `${nt}://${Q}:${st}/folder/${ct}/`,
                    this.media = `${nt}://${Q}:${st}/${ct}/api/uploads/`,
                    this.driverFile = `${nt}://${Q}:${st}/${ct}/api/driver/`,
                    this.aws = `${nt}://${Q}:${st}/${ct}/api/aws/`,
                    new Proxy(this,{
                        get: (g, c, _) => c in g ? Reflect.get(g, c, _) : c in g.configs ? g.configs[c] : void 0
                    })
                }
            }
            ({
                apiServiceConfig: {
                    title: ".:: Hệ thống quản lý học tập trực tuyến - [LMS] ::.",
                    realm: "ionline",
                    domainName: "apps.ictu.edu.vn",
                    port: 9087,
                    googleClientId: "973389896263-11sa03rtspsn2fap5uo160l3opa7n62t.apps.googleusercontent.com",
                    protocol: "https",
                    X_APP_ID: "7040BD38-0D02-4CBE-8B0E-F4115C348003",
                    enableTestingMode: !1,
                    client: "ictu",
                    enableSignInWithGoogle: !0,
                    enableSignInWithMicrosoft: !0,
                    synchronization_time: 30,
                    privateKey: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAo71Bopp9KVV4jhZve6G65bMT5JG05GFC21PUtjsgmOlTb5Z8XwKSiPsK0Ohf0rH7V3mAd+9gCnPM2MS+/rRjaTnOKXX8HOTHeW1Glhb38QP14kgS8xsfzLQMrT87VgzAfJpBYJiuKjAocb7KUzXZVYJp9mjjsG0S+dbcPlQs4p4nBkthONKf5tfK1oGPgi+LvaOnl6KC44NHPZSLQiqwkRe4cmr3zYwjSX60W3kZwzig3j+FtzY4R2LKx9N+rLlN/g32B/EP7FnxKKTvBIxtgQM9x7wYkE4a2ziQtzt/SHcdrJLVsXhpaXIcd6cXf+qpXnx9ihBsRfY+t47tDZnXwIDAQAB",
                    enableConstructionMode: !1,
                    listOfRestrictedFileTypesForDownload: ["pdf", "video", "audio", "text", "image"],
                    requireUpdateEmailPasswordForFirstTime: !1,
                    validateEmailPasswordForFirstTimeMethod: "VIA_EMAIL",
                    englishCourseLayout1: [30030],
                    englishCourseLayout345: [20134, 20257, 20352, 20081],
                    englishCourseLayout13456: [20354],
                    englishCourseAllPartsSeparate: [20350, 30011, 30016, 30017, 30007],
                    languageCoursePartSettings: {
                        30030: {
                            "part-1": "independent",
                            "part-2": "shared",
                            "part-3": "shared",
                            "part-4": "independent"
                        },
                        20134: {
                            "part-1": "shared",
                            "part-2": "shared",
                            "part-3": "independent",
                            "part-4": "independent",
                            "part-5": "independent",
                            "part-6": "shared"
                        },
                        20257: {
                            "part-1": "shared",
                            "part-2": "shared",
                            "part-3": "independent",
                            "part-4": "independent",
                            "part-5": "independent",
                            "part-6": "shared"
                        },
                        20352: {
                            "part-1": "shared",
                            "part-2": "shared",
                            "part-3": "independent",
                            "part-4": "independent",
                            "part-5": "independent",
                            "part-6": "shared"
                        },
                        20081: {
                            "part-1": "shared",
                            "part-2": "shared",
                            "part-3": "independent",
                            "part-4": "independent",
                            "part-5": "independent",
                            "part-6": "shared"
                        },
                        20216: {
                            "part-1": "shared",
                            "part-2": "shared",
                            "part-3": "independent",
                            "part-4": "independent",
                            "part-5": "independent",
                            "part-6": "shared"
                        },
                        20221: {
                            "part-1": "shared",
                            "part-2": "shared",
                            "part-3": "independent",
                            "part-4": "independent",
                            "part-5": "independent",
                            "part-6": "shared"
                        },
                        20226: {
                            "part-1": "shared",
                            "part-2": "shared",
                            "part-3": "independent",
                            "part-4": "independent",
                            "part-5": "independent",
                            "part-6": "shared"
                        },
                        20245: {
                            "part-1": "shared",
                            "part-2": "shared",
                            "part-3": "independent",
                            "part-4": "independent",
                            "part-5": "independent",
                            "part-6": "shared"
                        },
                        20354: {
                            "part-1": "independent",
                            "part-2": "shared",
                            "part-3": "independent",
                            "part-4": "independent",
                            "part-5": "independent",
                            "part-6": "independent"
                        },
                        20350: {
                            "part-1": "independent",
                            "part-2": "independent",
                            "part-3": "independent",
                            "part-4": "independent",
                            "part-5": "independent",
                            "part-6": "independent",
                            "part-7": "independent",
                            "part-8": "independent"
                        },
                        30011: {
                            "part-1": "independent",
                            "part-2": "independent",
                            "part-3": "independent",
                            "part-4": "independent",
                            "part-5": "independent",
                            "part-6": "independent",
                            "part-7": "independent",
                            "part-8": "independent"
                        },
                        30016: {
                            "part-1": "independent",
                            "part-2": "independent",
                            "part-3": "independent",
                            "part-4": "independent",
                            "part-5": "independent",
                            "part-6": "independent",
                            "part-7": "independent",
                            "part-8": "independent"
                        },
                        30017: {
                            "part-1": "independent",
                            "part-2": "independent",
                            "part-3": "independent",
                            "part-4": "independent",
                            "part-5": "independent",
                            "part-6": "independent",
                            "part-7": "independent",
                            "part-8": "independent"
                        },
                        30018: {
                            "part-1": "independent",
                            "part-2": "independent",
                            "part-3": "independent",
                            "part-4": "independent",
                            "part-5": "independent",
                            "part-6": "independent",
                            "part-7": "independent",
                            "part-8": "independent"
                        },
                        30019: {
                            "part-1": "independent",
                            "part-2": "independent",
                            "part-3": "independent",
                            "part-4": "independent",
                            "part-5": "independent",
                            "part-6": "independent",
                            "part-7": "independent",
                            "part-8": "independent"
                        },
                        30007: {
                            "part-1": "independent",
                            "part-2": "independent",
                            "part-3": "independent",
                            "part-4": "independent",
                            "part-5": "independent",
                            "part-6": "independent",
                            "part-7": "independent",
                            "part-8": "independent"
                        }
                    },
                    supportForMobile: !1,
                    enableSafeExamBrowser: !0,
                    exclusionCourses: [20094],
                    fixWeekTestTime: 0,
                    organization: "Trường đại học công nghệ thông tin và truyền thông",
                    parentOrganization: "Đại học thái nguyên",
                    weeklyTestsLabel: "Bài tập chuyên đề",
                    weeklyTestsTableHeading: "BÀI TẬP BÀI HỌC SỐ",
                    fifteenMinutesTestLabel: "Điểm bài kiểm tra 15 phút",
                    canUserChangeAccountPassword: !1,
                    translateLabels: {
                        assignments: "Kiểm tra kỹ năng",
                        noticeUsingWebMobileOnTest: "Bạn cần xác nhận rằng bạn đang thực hiện bài test trên máy tính, nếu bạn sử dụng thiết bị di động vui lòng dùng app ICTU STUDENTS, trường hợp bạn cố tình sử dụng trình duyệt web trên thiết bị di động để làm bài có thể không được công nhận kết quả hoặc xảy ra sự cố trong quá trình làm bài.",
                        practiceAssignmentLabels: "Đề kiểm tra thực hành"
                    },
                    reCaptcha: {
                        enable: !1,
                        siteKey: "6LcNpGsrAAAAAJMfWZ8Bj5dlJBINPBQEkewjO4Zb"
                    },
                    signInByThirdPartyConfigs: {
                        enable: !0,
                        header: '<div class="d-flex justify-content-between align-items-start m-b-30" style="flex-direction:column;gap:5px;background-color:#fcf8e3;padding:10px 15px;border-radius:4px;text-align:justify"><p class="m-0 text-muted f-roboto f-15 lh-sm">Sinh viên lựa chọn đăng nhập thông qua Google Email hoặc Microsoft Email do Trường cung cấp:</p><p class="m-0 text-muted f-roboto f-15 lh-sm">- Email có cấu trúc <mark style="padding:0;background:0 0;color:#2196f3">masv@ictu.edu.vn</mark> đăng nhập qua <mark style="padding:0;background-color:transparent;color:#444;font-weight:500">Google</mark>.</p><p class="m-0 text-muted f-roboto f-15 lh-sm">- Email có cấu trúc <mark style="padding:0;background:0 0;color:#2196f3">masv@ms.ictu.edu.vn</mark> đăng nhập qua <mark style="padding:0;background-color:transparent;color:#444;font-weight:500">Microsoft</mark>.</p><i class="m-t-10 m-0 text-danger f-roboto f-15 lh-sm fw-medium">Sinh viên nhấn chuột vào biểu tượng Google hoặc Microsoft dưới đây để đăng nhập.</i></div>',
                        footer: '<div class="d-flex justify-content-between align-items-start m-b-0 m-t-20" style="flex-direction:column;gap:5px"><p class="m-0 text-muted f-roboto f-15 lh-base text-center">Nếu quên mật khẩu hoặc lỗi xác thực email, vui lòng liên hệ với GVCN hoặc Phòng Quản lý CSVC để được hỗ trợ.</p></div>'
                    },
                    enableSubjectCourse: !0
                },
                socketServiceConfig: {
                    port: 9088,
                    path: "/sso/socket"
                }
            })
        }
          , D = N => T.deploy.driverFile + N + "download"
          , j = N => T.deploy.media + "file/" + N
          , C = N => T.deploy.aws + "file/" + N.toString(10)
          , v = N => T.deploy.driverFile + "stream/" + N
          , k = N => N ? "".concat(T.deploy.api, N) : T.deploy.api
          , B = N => N ? "".concat(T.deploy.domain, N) : T.deploy.domain
          , w = T.deploy.url + "datetime"
          , Z = "JkNxq7mS6WHDy04u"
          , V = "_pr_ocmQk73vw6fp"
          , ot = "_pr_ocmI69Hl3avA"
          , Y = "_pr_ocmJg6Db36rU"
          , z = "_pr_ocm56ZvFpN4H"
          , at = "_pr_ocmF3ACvs0O7"
          , F = "_pr_ocmCX40BVR9Z"
          , q = "_pr_ocm057iFXr48"
          , ut = "12vL0?ZkNxq7mS"
          , R = "7oIu24uZ5lz9"
          , lt = T.deploy.exclusionCourses
    }
    ,
    4913: (r, p, i) => {
        "use strict";
        var u = i(3232)
          , d = i(2512);
        u.q6().bootstrapModule(d.b9).catch(s => console.error(s))
    }
    ,
    6700: (r, p, i) => {
        var u = {
            "./af": 861,
            "./af.js": 861,
            "./ar": 7279,
            "./ar-dz": 8847,
            "./ar-dz.js": 8847,
            "./ar-kw": 9832,
            "./ar-kw.js": 9832,
            "./ar-ly": 7272,
            "./ar-ly.js": 7272,
            "./ar-ma": 9508,
            "./ar-ma.js": 9508,
            "./ar-ps": 2807,
            "./ar-ps.js": 2807,
            "./ar-sa": 393,
            "./ar-sa.js": 393,
            "./ar-tn": 6064,
            "./ar-tn.js": 6064,
            "./ar.js": 7279,
            "./az": 2986,
            "./az.js": 2986,
            "./be": 7112,
            "./be.js": 7112,
            "./bg": 6367,
            "./bg.js": 6367,
            "./bm": 3316,
            "./bm.js": 3316,
            "./bn": 5815,
            "./bn-bd": 6067,
            "./bn-bd.js": 6067,
            "./bn.js": 5815,
            "./bo": 4530,
            "./bo.js": 4530,
            "./br": 9739,
            "./br.js": 9739,
            "./bs": 8445,
            "./bs.js": 8445,
            "./ca": 7690,
            "./ca.js": 7690,
            "./cs": 8799,
            "./cs.js": 8799,
            "./cv": 8385,
            "./cv.js": 8385,
            "./cy": 6212,
            "./cy.js": 6212,
            "./da": 5782,
            "./da.js": 5782,
            "./de": 7782,
            "./de-at": 1934,
            "./de-at.js": 1934,
            "./de-ch": 2863,
            "./de-ch.js": 2863,
            "./de.js": 7782,
            "./dv": 1146,
            "./dv.js": 1146,
            "./el": 9745,
            "./el.js": 9745,
            "./en-au": 1150,
            "./en-au.js": 1150,
            "./en-ca": 2924,
            "./en-ca.js": 2924,
            "./en-gb": 7406,
            "./en-gb.js": 7406,
            "./en-ie": 9952,
            "./en-ie.js": 9952,
            "./en-il": 4772,
            "./en-il.js": 4772,
            "./en-in": 1961,
            "./en-in.js": 1961,
            "./en-nz": 4014,
            "./en-nz.js": 4014,
            "./en-sg": 3332,
            "./en-sg.js": 3332,
            "./eo": 989,
            "./eo.js": 989,
            "./es": 3209,
            "./es-do": 6393,
            "./es-do.js": 6393,
            "./es-mx": 2324,
            "./es-mx.js": 2324,
            "./es-us": 7641,
            "./es-us.js": 7641,
            "./es.js": 3209,
            "./et": 6373,
            "./et.js": 6373,
            "./eu": 1954,
            "./eu.js": 1954,
            "./fa": 9289,
            "./fa.js": 9289,
            "./fi": 3381,
            "./fi.js": 3381,
            "./fil": 6121,
            "./fil.js": 6121,
            "./fo": 3571,
            "./fo.js": 3571,
            "./fr": 5515,
            "./fr-ca": 7389,
            "./fr-ca.js": 7389,
            "./fr-ch": 7785,
            "./fr-ch.js": 7785,
            "./fr.js": 5515,
            "./fy": 1826,
            "./fy.js": 1826,
            "./ga": 6687,
            "./ga.js": 6687,
            "./gd": 8851,
            "./gd.js": 8851,
            "./gl": 1637,
            "./gl.js": 1637,
            "./gom-deva": 1003,
            "./gom-deva.js": 1003,
            "./gom-latn": 4225,
            "./gom-latn.js": 4225,
            "./gu": 9360,
            "./gu.js": 9360,
            "./he": 7853,
            "./he.js": 7853,
            "./hi": 5428,
            "./hi.js": 5428,
            "./hr": 1001,
            "./hr.js": 1001,
            "./hu": 4579,
            "./hu.js": 4579,
            "./hy-am": 9866,
            "./hy-am.js": 9866,
            "./id": 9689,
            "./id.js": 9689,
            "./is": 2956,
            "./is.js": 2956,
            "./it": 1557,
            "./it-ch": 6052,
            "./it-ch.js": 6052,
            "./it.js": 1557,
            "./ja": 1774,
            "./ja.js": 1774,
            "./jv": 7631,
            "./jv.js": 7631,
            "./ka": 9968,
            "./ka.js": 9968,
            "./kk": 4916,
            "./kk.js": 4916,
            "./km": 2305,
            "./km.js": 2305,
            "./kn": 8994,
            "./kn.js": 8994,
            "./ko": 3558,
            "./ko.js": 3558,
            "./ku": 2243,
            "./ku-kmr": 9529,
            "./ku-kmr.js": 9529,
            "./ku.js": 2243,
            "./ky": 4638,
            "./ky.js": 4638,
            "./lb": 4167,
            "./lb.js": 4167,
            "./lo": 9897,
            "./lo.js": 9897,
            "./lt": 2543,
            "./lt.js": 2543,
            "./lv": 5752,
            "./lv.js": 5752,
            "./me": 3350,
            "./me.js": 3350,
            "./mi": 4134,
            "./mi.js": 4134,
            "./mk": 2177,
            "./mk.js": 2177,
            "./ml": 8100,
            "./ml.js": 8100,
            "./mn": 9571,
            "./mn.js": 9571,
            "./mr": 3656,
            "./mr.js": 3656,
            "./ms": 848,
            "./ms-my": 1319,
            "./ms-my.js": 1319,
            "./ms.js": 848,
            "./mt": 7029,
            "./mt.js": 7029,
            "./my": 6570,
            "./my.js": 6570,
            "./nb": 562,
            "./nb.js": 562,
            "./ne": 9576,
            "./ne.js": 9576,
            "./nl": 778,
            "./nl-be": 3475,
            "./nl-be.js": 3475,
            "./nl.js": 778,
            "./nn": 1722,
            "./nn.js": 1722,
            "./oc-lnc": 7467,
            "./oc-lnc.js": 7467,
            "./pa-in": 4869,
            "./pa-in.js": 4869,
            "./pl": 8357,
            "./pl.js": 8357,
            "./pt": 2768,
            "./pt-br": 9641,
            "./pt-br.js": 9641,
            "./pt.js": 2768,
            "./ro": 8876,
            "./ro.js": 8876,
            "./ru": 8663,
            "./ru.js": 8663,
            "./sd": 3727,
            "./sd.js": 3727,
            "./se": 4051,
            "./se.js": 4051,
            "./si": 8643,
            "./si.js": 8643,
            "./sk": 9616,
            "./sk.js": 9616,
            "./sl": 2423,
            "./sl.js": 2423,
            "./sq": 5466,
            "./sq.js": 5466,
            "./sr": 614,
            "./sr-cyrl": 7449,
            "./sr-cyrl.js": 7449,
            "./sr.js": 614,
            "./ss": 82,
            "./ss.js": 82,
            "./sv": 2689,
            "./sv.js": 2689,
            "./sw": 6471,
            "./sw.js": 6471,
            "./ta": 4437,
            "./ta.js": 4437,
            "./te": 4512,
            "./te.js": 4512,
            "./tet": 9434,
            "./tet.js": 9434,
            "./tg": 8765,
            "./tg.js": 8765,
            "./th": 2099,
            "./th.js": 2099,
            "./tk": 9133,
            "./tk.js": 9133,
            "./tl-ph": 7497,
            "./tl-ph.js": 7497,
            "./tlh": 7086,
            "./tlh.js": 7086,
            "./tr": 1118,
            "./tr.js": 1118,
            "./tzl": 5781,
            "./tzl.js": 5781,
            "./tzm": 5982,
            "./tzm-latn": 4415,
            "./tzm-latn.js": 4415,
            "./tzm.js": 5982,
            "./ug-cn": 5975,
            "./ug-cn.js": 5975,
            "./uk": 3715,
            "./uk.js": 3715,
            "./ur": 7307,
            "./ur.js": 7307,
            "./uz": 5232,
            "./uz-latn": 3397,
            "./uz-latn.js": 3397,
            "./uz.js": 5232,
            "./vi": 7842,
            "./vi.js": 7842,
            "./x-pseudo": 2490,
            "./x-pseudo.js": 2490,
            "./yo": 9348,
            "./yo.js": 9348,
            "./zh-cn": 5912,
            "./zh-cn.js": 5912,
            "./zh-hk": 6858,
            "./zh-hk.js": 6858,
            "./zh-mo": 719,
            "./zh-mo.js": 719,
            "./zh-tw": 3533,
            "./zh-tw.js": 3533
        };
        function d(t) {
            var A = s(t);
            return i(A)
        }
        function s(t) {
            if (!i.o(u, t)) {
                var A = new Error("Cannot find module '" + t + "'");
                throw A.code = "MODULE_NOT_FOUND",
                A
            }
            return u[t]
        }
        d.keys = function() {
            return Object.keys(u)
        }
        ,
        d.resolve = s,
        r.exports = d,
        d.id = 6700
    }
    ,
    2480: () => {}
}, r => {
    r.O(0, [736], () => r(r.s = 4913)),
    r.O()
}
]);
