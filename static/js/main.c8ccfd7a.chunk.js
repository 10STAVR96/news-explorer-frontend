(this["webpackJsonpnews-explorer"]=this["webpackJsonpnews-explorer"]||[]).push([[0],Array(20).concat([function(e,t,a){e.exports=a.p+"static/media/logout.bfd4b9c0.svg"},function(e,t,a){e.exports=a.p+"static/media/logout-dark.9edd37f1.svg"},,function(e,t,a){e.exports=a.p+"static/media/avatar-default.2f6dc968.png"},function(e,t,a){e.exports=a.p+"static/media/github.e189624a.svg"},function(e,t,a){e.exports=a.p+"static/media/fb.48a32645.svg"},,,function(e,t,a){e.exports=a(52)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),l=a(6),s=(a(33),a(26)),i=a(1),u=(a(34),a(2)),m=(a(35),a(36),a(20)),p=a.n(m),d=a(21),_=a.n(d),h=r.a.createContext();var f=function(e){var t=e.closeMenu,a=e.isMenuOpen,n=e.isSavedNews,o=e.loggedIn,c=e.handleLoginPopup,s=e.signOut,i=r.a.useContext(h),u=n?"nav__link_theme_dark":"",m=n?"nav__logout_theme_dark":"",d=n?"":"nav__link_active_light",f=n?"nav__link_active_dark":"";return r.a.createElement("nav",{className:"nav ".concat(a?"nav_opened":"")},r.a.createElement(l.b,{onClick:t,className:"nav__link ".concat(n&&!a?u:""),activeClassName:d,to:"/"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),o?r.a.createElement(l.b,{onClick:t,className:"nav__link ".concat(n&&!a?u:""),activeClassName:f,to:"/saved-news"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"):"",r.a.createElement("button",{onClick:function(){o?s():c()},type:"button",className:"nav__logout ".concat(n&&!a?m:"")},r.a.createElement("span",{className:"nav__logout-user"},o?i.name:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),o?r.a.createElement("img",{className:"nav__logout-icon",src:n&&!a?_.a:p.a,alt:"\u0412\u044b\u0445\u043e\u0434"}):""))};var g=function(e){var t=e.handleLoginPopup,a=e.isPopupOpened,n=e.loggedIn,o=e.signOut,c="/saved-news"===Object(u.h)().pathname,s=r.a.useState(!1),m=Object(i.a)(s,2),p=m[0],d=m[1],_=c?"header__title_theme_dark":"";function h(){d(!p)}return r.a.createElement("header",{className:"header"},r.a.createElement(l.b,{className:"header__title ".concat(c&&!p?_:""),to:"/"},"NewsExplorer"),a?"":r.a.createElement("button",{onClick:h,className:"header__menu ".concat(p?"icon-close":c?"icon-menu-dark":"icon-menu")}),r.a.createElement(f,{signOut:o,closeMenu:function(){d(!1)},isMenuOpen:p,isSavedNews:c,loggedIn:n,handleLoginPopup:t}),p?r.a.createElement("div",{onClick:h,className:"header__backsheet"}):"")};a(42),a(43);var v=function(e){var t=e.onSubmit,a=r.a.useRef();return r.a.useEffect((function(){var e=localStorage.getItem("keyword");e&&(a.current.value=e)})),r.a.createElement("section",{className:"search"},r.a.createElement("div",{className:"search__position"},r.a.createElement("h1",{className:"search__title"},"\u0427\u0442\u043e \u0442\u0432\u043e\u0440\u0438\u0442\u0441\u044f \u0432 \u043c\u0438\u0440\u0435?"),r.a.createElement("p",{className:"search__subtitle"},"\u041d\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u0441\u0430\u043c\u044b\u0435 \u0441\u0432\u0435\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438 \u043d\u0430 \u043b\u044e\u0431\u0443\u044e \u0442\u0435\u043c\u0443 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0439\u0442\u0435 \u0432 \u0441\u0432\u043e\u0451\u043c \u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435."),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(a.current.value)},className:"search__form",method:"post"},r.a.createElement("input",{ref:a,className:"search__input",type:"text",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043c\u0443 \u043d\u043e\u0432\u043e\u0441\u0442\u0438"}),r.a.createElement("button",{className:"search__submit",type:"submit"},"\u0418\u0441\u043a\u0430\u0442\u044c"))))};a(44),a(45);var E=function(e){var t=e.isSavedNews,a=e.article,n=e.handleSaveCards,o=e.handleDeleteArticle,c=e.loggedIn,l=e.handleLoginPopup,s=a.image,i=a.date,u=a.title,m=a.link,p=a.text,d=a.source,_=a.keyword,h=a._id&&c?"bookmark-marked-icon":"bookmark-icon",f=c&&!a._id?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e":"\u0412\u043e\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u0438";return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"card"},r.a.createElement("img",{className:"card__image",src:s,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"}),r.a.createElement("div",{className:"card__button-content"},r.a.createElement("button",{onClick:function(){c?a._id||t?o(a._id):n(_,u,p,i,d,m,s):l()},className:"card__button ".concat(t?"trashcan-icon":h),type:"button"}),r.a.createElement("span",{className:"card__button-message"},t||a._id&&c?"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0445":f)),r.a.createElement("div",{className:"card__text"},r.a.createElement("span",{className:"card__date"},function(e){var t=new Date(e);return"".concat(t.toLocaleString("ru",{month:"long",day:"numeric"}),", ").concat(t.getFullYear())}(i)),r.a.createElement("h3",{className:"card__title"},u),r.a.createElement("p",{className:"card__paragraph"},p.replace(/<\/?[^>]+(>|$)/g,"")),r.a.createElement("a",{className:"card__source",href:m},d)),t?r.a.createElement("span",{className:"card__keyword"},_):""))};var b=function(e){var t=e.articles,a=e.savedArticles,n=e.handleMoreCards,o=e.articlesCounter,c=e.handleSaveCards,l=e.handleDeleteArticle,s=e.loggedIn,i=e.handleLoginPopup,m="/saved-news"===Object(u.h)().pathname;return r.a.createElement("section",{className:"news-cards"},m?"":r.a.createElement("h2",{className:"news-cards__title"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430"),r.a.createElement("ul",{className:"news-cards__list"},(m?a:t).map((function(e,t){return t<=o||m?r.a.createElement(E,{key:t,article:e,isSavedNews:m,handleSaveCards:c,handleDeleteArticle:l,loggedIn:s,handleLoginPopup:i}):null}))),m||o>=t.length?"":r.a.createElement("button",{onClick:n,className:"news-cards__show-more-button",type:"button"},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435"))},N=(a(46),a(23)),k=a.n(N);var S=function(){return r.a.createElement("section",{className:"about"},r.a.createElement("img",{className:"about__avatar",src:k.a,alt:"\u0430\u0432\u0430\u0442\u0430\u0440 \u043f\u043e-\u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"}),r.a.createElement("div",{className:"about__about-me"},r.a.createElement("h3",{className:"about__title"},"\u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"),r.a.createElement("p",{className:"about__text"},"\u042d\u0442\u043e \u0431\u043b\u043e\u043a \u0441 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u0430\u0432\u0442\u043e\u0440\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430. \u0417\u0434\u0435\u0441\u044c \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u0442\u044c, \u043a\u0430\u043a \u0432\u0430\u0441 \u0437\u043e\u0432\u0443\u0442, \u0447\u0435\u043c \u0432\u044b \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0435\u0441\u044c, \u043a\u0430\u043a\u0438\u043c\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u043c\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0432\u043b\u0430\u0434\u0435\u0435\u0442\u0435."),r.a.createElement("p",{className:"about__text"},"\u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432 \u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0435, \u0447\u0435\u043c\u0443 \u0432\u044b \u0442\u0443\u0442 \u043d\u0430\u0443\u0447\u0438\u043b\u0438\u0441\u044c, \u0438 \u0447\u0435\u043c \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043c\u043e\u0447\u044c \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0430\u043c.")))};a(47);var j=function(e){var t=e.isSuccess,a=e.errorMessage,n=t?"\u0418\u0434\u0435\u0442 \u043f\u043e\u0438\u0441\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439...":"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e.";return r.a.createElement("div",{className:"preloader"},r.a.createElement("i",{className:t?"preloader__icon":"not-found-icon"}),t?"":r.a.createElement("h4",{className:"preloader__title"},"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"),r.a.createElement("p",{className:"preloader__message"},a?"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437":n))};var w=function(e){var t=e.isPreload,a=e.getNews,n=e.isSuccess,o=e.errorMessage,c=e.articles,l=e.handleMoreCards,s=e.articlesCounter,i=e.handleSaveCards,u=e.handleDeleteArticle,m=e.loggedIn,p=e.handleLoginPopup;return r.a.createElement("main",{className:"main"},r.a.createElement(v,{onSubmit:a}),t?r.a.createElement(j,{isSuccess:n,errorMessage:o}):c.length>0?r.a.createElement(b,{articles:c,handleMoreCards:l,articlesCounter:s,handleSaveCards:i,handleDeleteArticle:u,loggedIn:m,handleLoginPopup:p}):"",r.a.createElement(S,null))};a(48),a(49);var O=function(e){var t,a=e.savedArticles,n=r.a.useContext(h),o=["\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u044c\u044f","\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438","\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0430\u0442\u0435\u0439"][(t=a.length)%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?t%10:5]],c=function(){var e="",t=a.map((function(e){return e.keyword})).reduce((function(e,t){return e[t]=void 0===e[t]?1:e[t]+=1,e}),{}),n=Object.keys(t).map((function(e){return[e,t[e]]})).sort((function(e,t){return t[1]-e[1]})).map((function(e){return e[0]}));return n.length<3?e=n.join(", "):3===n.length?(n[2]="\u0438 ".concat(n[2]),e=n.join(", ")):e="".concat(n[0],", ").concat(n[1],", \u0438 ").concat(n.length-2,"-\u043c \u0434\u0440\u0443\u0433\u0438\u043c"),e}();return r.a.createElement("section",{className:"saved-header"},r.a.createElement("h3",{className:"saved-header__title"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"),r.a.createElement("p",{className:"saved-header__subtitle"},"".concat(n.name,", \u0443 \u0432\u0430\u0441 ").concat(a.length," ").concat(o)),a.length>0?r.a.createElement("p",{className:"saved-header__paragraph"},"\u041f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u0430\u043c: ",r.a.createElement("span",{className:"saved-header__paragraph_bold"},c)):null)};var y=function(e){var t=e.savedArticles,a=e.handleDeleteArticle,n=e.loggedIn;return r.a.createElement("main",{className:"saved-news"},r.a.createElement(O,{savedArticles:t}),t.length>0?r.a.createElement(b,{savedArticles:t,handleDeleteArticle:a,loggedIn:n}):null)},C=(a(50),a(24)),P=a.n(C),I=a(25),x=a.n(I);var A=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Supersite, Powered by News API"),r.a.createElement("nav",{className:"footer__nav"},r.a.createElement("ul",{className:"footer__list footer__list_links"},r.a.createElement("li",null,r.a.createElement(l.b,{className:"footer__link",to:"/"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),r.a.createElement("li",null,r.a.createElement("a",{className:"footer__link",href:"https://praktikum.yandex.ru/",target:"_blank",rel:"noopener noreferrer"},"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"))),r.a.createElement("ul",{className:"footer__list footer__list_social"},r.a.createElement("li",null,r.a.createElement("a",{className:"footer__link",href:"https://github.com/10STAVR96",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"footer__icons",src:P.a,alt:"github"}))),r.a.createElement("li",null,r.a.createElement("a",{className:"footer__link",href:"https://www.facebook.com/profile.php?id=100010074348903",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"footer__icons",src:x.a,alt:"facebook"}))))))},L=(a(51),a(11)),T=a(12);var D="https://api.stavr.students.nomoreparties.co",F=function(e){return fetch("".concat(D,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():e.json().then((function(t){return Promise.reject("".concat(e.status," - ").concat(t.message||"\u0442\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435"))}))}))},M=function(e){return fetch("".concat(D,"/articles"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():e.json().then((function(t){return Promise.reject("".concat(e.status," - ").concat(t.message||"\u041e\u0448\u0438\u0431\u043a\u0430"))}))}))};var z=function(e){var t=e.isOpen,a=e.onClose,o=e.getProfileInfo,c=r.a.useState(!0),l=Object(i.a)(c,2),s=l[0],u=l[1],m=r.a.useState(!1),p=Object(i.a)(m,2),d=p[0],_=p[1],h=r.a.useState(!1),f=Object(i.a)(h,2),g=f[0],v=f[1],E=r.a.useState(""),b=Object(i.a)(E,2),N=b[0],k=b[1],S=r.a.useState(!1),j=Object(i.a)(S,2),w=j[0],O=j[1],y=function(){var e=r.a.useState({}),t=Object(i.a)(e,2),a=t[0],o=t[1],c=r.a.useState({}),l=Object(i.a)(c,2),s=l[0],u=l[1],m=r.a.useState(!1),p=Object(i.a)(m,2),d=p[0],_=p[1],h=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];o(e),u(t),_(a)}),[o,u,_]);return{values:a,handleChange:function(e){var t=e.target,n=t.name,r=t.value;o(Object(T.a)(Object(T.a)({},a),{},Object(L.a)({},n,r))),u(Object(T.a)(Object(T.a)({},s),{},Object(L.a)({},n,t.validationMessage))),_(t.closest("form").checkValidity())},errors:s,isValid:d,resetForm:h}}(),C=s?"\u0412\u0445\u043e\u0434":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",P=s?"\u0412\u043e\u0439\u0442\u0438":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",I=s?"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f":"\u0412\u043e\u0439\u0442\u0438";function x(){y.resetForm(),v(!1),_(!1)}return r.a.useEffect((function(){document.addEventListener("keydown",(function(e){"Escape"===e.key&&t&&(a(),setTimeout((function(){u(!0),y.resetForm(),v(!1),_(!1)}),300))}))}),[t,a,y]),r.a.createElement("div",{onClick:function(e){e.target.classList.contains("popup")&&(a(),setTimeout((function(){u(!0),x()}),300))},className:"popup ".concat(t?"popup_opened":"")},r.a.createElement("form",{onSubmit:function(e){O(!0),e.preventDefault();var t=y.values.email,a=y.values.password,n=y.values.name;(s?function(e,t){return fetch("".concat(D,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e.message||"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")}))}))}(t,a).then((function(e){var t=e.token;t&&(localStorage.setItem("token",t),o(t))})):function(e,t,a){return fetch("".concat(D,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t,name:a})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e.message||"\u041e\u0448\u0438\u0431\u043a\u0430")}))}))}(t,a,n).then((function(e){e&&(u(!0),_(!0))}))).catch((function(e){k(e),v(!0)})).finally((function(){return O(!1)})),setTimeout((function(){return y.resetForm()}),500)},id:"popupWithForm",className:"popup__container",noValidate:!0},r.a.createElement("button",{onClick:function(){a(),setTimeout((function(){u(!0),x()}),300)},className:"popup__close",type:"button"}),r.a.createElement("h2",{className:"popup__title"},d?"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!":C),d?r.a.createElement("p",{onClick:function(){u(!0),_(!1)},className:"popup__login-link"},"\u0412\u043e\u0439\u0442\u0438"):r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"popup__input-title",htmlFor:"email"},"Email"),r.a.createElement("input",{onChange:y.handleChange,id:"email",className:"popup__input ".concat(y.errors.email?"popup__input_type_error":""),type:"email",name:"email",minLength:"4",maxLength:"50",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443",value:y.values.email||"",disabled:w}),r.a.createElement("span",{className:"popup__input-error ".concat(y.errors.email?"popup__input-error_visible":""),id:"email-error"},"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 email"),r.a.createElement("label",{className:"popup__input-title",htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("input",{onChange:y.handleChange,id:"password",className:"popup__input",type:"password",name:"password",minLength:"2",maxLength:"100",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u04510-9 -]{2,20}",value:y.values.password||"",disabled:w}),r.a.createElement("span",{className:"popup__input-error ".concat(y.errors.password?"popup__input-error_visible":""),id:"password-error"},"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043f\u0430\u0440\u043e\u043b\u044f")),s?"":r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"popup__input-title",htmlFor:"name"},"\u0418\u043c\u044f"),r.a.createElement("input",{onChange:y.handleChange,id:"name",className:"popup__input",type:"text",name:"name",minLength:"2",maxLength:"30",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451 -]{2,40}",value:y.values.name||"",disabled:w}),r.a.createElement("span",{className:"popup__input-error ".concat(y.errors.name?"popup__input-error_visible":""),id:"name-error"},"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0438\u043c\u0435\u043d\u0438")),d?"":r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"popup__submit-error ".concat(g?"popup__submit-error_visible":""),id:"button-error"},N),r.a.createElement("button",{className:"popup__submit ".concat(y.isValid?"":"popup__submit_disabled"),disabled:!y.isValid,type:"submit"},P),r.a.createElement("p",{className:"popup__footer"},"\u0438\u043b\u0438",r.a.createElement("span",{onClick:function(){u(!s),x()},className:"popup__link"},I)))))},J=a(27);var B=function(e){var t=e.component,a=Object(J.a)(e,["component"]);return r.a.createElement(u.b,null,(function(){return localStorage.getItem("token")?r.a.createElement(t,a):(a.handleLoginPopup(),r.a.createElement(u.a,{to:"./"}))}))};var V=function(){var e=r.a.useState({}),t=Object(i.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!1),c=Object(i.a)(o,2),l=c[0],m=c[1],p=r.a.useState(!1),d=Object(i.a)(p,2),_=d[0],f=d[1],v=r.a.useState(!1),E=Object(i.a)(v,2),b=E[0],N=E[1],k=r.a.useState(!0),S=Object(i.a)(k,2),j=S[0],O=S[1],C=r.a.useState(!1),P=Object(i.a)(C,2),I=P[0],x=P[1],L=r.a.useState([]),T=Object(i.a)(L,2),J=T[0],V=T[1],q=r.a.useState(2),R=Object(i.a)(q,2),W=R[0],G=R[1],Z=r.a.useState([]),$=Object(i.a)(Z,2),K=$[0],Y=$[1],H=Object(u.g)();function Q(){m(!0)}function U(){m(!1)}function X(e,t){var a=e.map((function(e){return t.find((function(t){return e.link===t.link&&e.title===t.title&&e.text===t.text?e._id=t._id:(e._id!==t._id&&delete e._id,null)})),e}));V(a)}function ee(e){var t=JSON.parse(localStorage.getItem("articles"));Promise.all([F(e),M(e)]).then((function(e){var a=Object(i.a)(e,2),r=a[0],o=a[1];t&&X(t,o),n(r),Y(o),f(!0),U()})).catch((function(e){return console.log(e)}))}function te(e){var t=localStorage.getItem("token");t&&function(e,t){return fetch("".concat(D,"/articles/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():e.json().then((function(t){return Promise.reject("".concat(e.status," - ").concat(t.message||"\u041e\u0448\u0438\u0431\u043a\u0430"))}))}))}(t,e).then((function(){var t=K.filter((function(t){return t._id!==e}));Y(t),function(e){var t=J.map((function(t){return t._id===e&&delete t._id,t}));V(t)}(e)})).catch((function(e){return console.log(e)})).finally((function(){return console.log(J)}))}return r.a.useEffect((function(){var e=localStorage.getItem("token");e&&ee(e)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(h.Provider,{value:a},r.a.createElement(g,{signOut:function(){n({}),localStorage.removeItem("token"),f(!1),H.push("/")},handleLoginPopup:Q,loggedIn:_,isPopupOpened:l}),r.a.createElement(u.d,null,r.a.createElement(B,{path:"/saved-news",loggedIn:_,savedArticles:K,handleDeleteArticle:te,component:y,handleLoginPopup:Q}),r.a.createElement(u.b,{path:"/"},r.a.createElement(w,{isPreload:b,getNews:function(e){O(!0),N(!0),G(2),localStorage.setItem("keyword",e),function(e){var t=new Date;t.setDate(t.getDate()-7);var a=t.toISOString().split("T")[0],n=(new Date).toISOString().split("T")[0];return fetch("https://nomoreparties.co/news/v2/everything?q=".concat(e,"&from=").concat(a,"&to=").concat(n,"&pageSize=100&apiKey=7b77b1cd4501401eb229549abe7a3c60")).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}(e).then((function(t){return"ok"===t.status&&t.totalResults?function(e,t){x(!1);var a=e.articles.map((function(e){var a;return{keyword:t,title:e.title,text:e.description,date:e.publishedAt,source:(null===(a=e.source)||void 0===a?void 0:a.name)||e.author||"",link:e.url,image:e.urlToImage}}));localStorage.setItem("articles",JSON.stringify(a)),X(a,K),N(!1)}(t,e):(x(!1),void O(!1))})).catch((function(e){x(!0),O(!1),console.log(e)}))},isSuccess:j,errorMessage:I,articles:J,handleMoreCards:function(){W<J.length&&G(W+3)},articlesCounter:W,handleSaveCards:function(e,t,a,n,r,o,c){var l=localStorage.getItem("token");l&&function(e,t,a,n,r,o,c,l){return fetch("".concat(D,"/articles"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify({keyword:t,title:a,text:n,date:r,source:o,link:c,image:l})}).then((function(e){return e.ok?e.json():e.json().then((function(t){return Promise.reject("".concat(e.status," - ").concat(t.message||"\u041e\u0448\u0438\u0431\u043a\u0430"))}))}))}(l,e,t,a,n,r,o,c).then((function(e){Y([].concat(Object(s.a)(K),[e])),function(e){var t=J.map((function(t){return t.link===e.link&&t.title===e.title&&t.text===e.text&&(t._id=e._id),t}));V(t)}(e)})).catch((function(e){return console.log(e)}))},handleDeleteArticle:te,loggedIn:_,handleLoginPopup:Q}),r.a.createElement(z,{isOpen:l,onClose:U,getProfileInfo:ee}))),r.a.createElement(A,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[28,1,2]]]);
//# sourceMappingURL=main.c8ccfd7a.chunk.js.map