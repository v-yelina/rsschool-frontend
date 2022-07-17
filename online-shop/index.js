(() => {
  "use strict";
  var e = {
      296: (e, n, t) => {
        t.d(n, { Z: () => s });
        var r = t(15),
          i = t.n(r),
          o = t(645),
          a = t.n(o)()(i());
        a.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css2?family=Mingzat&family=Raleway:wght@400;700&display=swap);",
        ]),
          a.push([
            e.id,
            '.products{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;margin-top:10px;padding:0 2%;transition:.3s}.card__item{display:flex;flex-direction:column;gap:10px;align-items:center;margin-bottom:5%;background-color:#fff;padding:2%;box-shadow:rgba(0,0,0,.15) 2.4px 2.4px 3.2px;border-radius:1rem;min-width:210px}@media(max-width: 920px){.card__item{min-width:280px}}@media(max-width: 820px){.card__item{flex-direction:row;width:80%;margin:0 auto 5%}}@media(max-width: 520px){.card__item{width:95%}}.card__item-description{display:flex;flex-direction:column;align-items:center;gap:10px}.card__item-description p{margin:0;text-align:center}@media(max-width: 650px){.card__item-description{width:80%;margin:0 auto 5%}}.card__item-title{color:#0b2545;font-weight:700;font-size:1.5rem;font-family:"Raleway",sans-serif}.card__item-price{font-weight:700}.card__item-price_sale{text-decoration:line-through;font-weight:400}.card__item_sale-price{font-weight:700;color:#780000;font-size:larger;margin-left:5px}.card__item_sale-percent{display:inline-block;background-color:#fca311;color:#fff;letter-spacing:1px;font-size:smaller;border-radius:5px;padding:3px;margin-left:5px}.card__item-img{max-width:15vw;transition:.3s}.card__item-img:hover{box-shadow:rgba(0,0,0,.1) 0px 10px 50px;cursor:pointer}.card__item-img:active{transform:translateY(2px)}.card__item-btn--cart,.popup__item-btn--cart,.card__item-btn--more,.card__item-btn--cart{background-color:#8da9c4}.card__item-btn--cart:hover,.popup__item-btn--cart:hover,.card__item-btn--more:hover,.card__item-btn--cart:hover{background-color:#6b90b3}',
            "",
            {
              version: 3,
              sources: ["webpack://./src/components/view/card/card.scss"],
              names: [],
              mappings:
                "AAGA,UACI,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,sBAAA,CACA,cAAA,CACA,eAAA,CACA,YAAA,CACA,cAAA,CAGJ,YACI,YAAA,CACA,qBAAA,CACA,QAAA,CACA,kBAAA,CACA,gBAAA,CACA,qBAAA,CACA,UAAA,CACA,4CAAA,CACA,kBAAA,CACA,eAAA,CAEA,yBAZJ,YAaQ,eAAA,CAAA,CAGJ,yBAhBJ,YAiBQ,kBAAA,CACA,SAAA,CACA,gBAAA,CAAA,CAGJ,yBAtBJ,YAuBQ,SAAA,CAAA,CAIR,wBACI,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,QAAA,CAEA,0BACI,QAAA,CACA,iBAAA,CAGJ,yBAXJ,wBAYQ,SAAA,CACA,gBAAA,CAAA,CAIR,kBACI,aAAA,CACA,eAAA,CACA,gBAAA,CACA,gCAAA,CAGJ,kBACI,eAAA,CAGJ,uBACI,4BAAA,CACA,eAAA,CAGJ,uBACI,eAAA,CACA,aAAA,CACA,gBAAA,CACA,eAAA,CAGJ,yBACI,oBAAA,CACA,wBAAA,CACA,UAAA,CACA,kBAAA,CACA,iBAAA,CACA,iBAAA,CACA,WAAA,CACA,eAAA,CAGJ,gBACI,cAAA,CACA,cAAA,CAEA,sBACI,uCAAA,CACA,cAAA,CAGJ,uBACI,yBAAA,CAIR,yFAII,wBAAA,CAEA,iHACI,wBAAA",
              sourcesContent: [
                "@import url('https://fonts.googleapis.com/css2?family=Mingzat&family=Raleway:wght@400;700&display=swap');\n\n\n.products {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    margin-top: 10px;\n    padding: 0 2%;\n    transition: 0.3s;\n}\n\n.card__item {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n    margin-bottom: 5%;\n    background-color: #fff;\n    padding: 2%;\n    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n    border-radius: 1rem;\n    min-width: 210px;\n\n    @media (max-width: 920px) {\n        min-width: 280px;\n    }\n\n    @media (max-width: 820px) {\n        flex-direction: row;\n        width: 80%;\n        margin: 0 auto 5%;\n    }\n        \n    @media (max-width: 520px) {\n        width: 95%;\n    }\n}\n\n.card__item-description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n\n    p {\n        margin: 0;\n        text-align: center;\n    }\n\n    @media (max-width: 650px) {\n        width: 80%;\n        margin: 0 auto 5%;\n    }\n}\n\n.card__item-title {\n    color: #0b2545;\n    font-weight: 700;\n    font-size: 1.5rem;\n    font-family: 'Raleway', sans-serif;\n}\n\n.card__item-price {\n    font-weight: 700;\n}\n\n.card__item-price_sale {\n    text-decoration: line-through;\n    font-weight: 400;\n}\n\n.card__item_sale-price {\n    font-weight: 700;\n    color: #780000;\n    font-size: larger;\n    margin-left: 5px;\n}\n\n.card__item_sale-percent {\n    display: inline-block;\n    background-color: #fca311;\n    color: #ffffff;\n    letter-spacing: 1px;\n    font-size: smaller;\n    border-radius: 5px;\n    padding: 3px;\n    margin-left: 5px;\n}\n\n.card__item-img {\n    max-width: 15vw;\n    transition: 0.3s;\n\n    &:hover {\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;\n        cursor: pointer;\n    }\n\n    &:active {\n        transform: translateY(2px);\n    }\n}\n\n.card__item-btn--cart,\n.popup__item-btn--cart,\n.card__item-btn--more,\n.card__item-btn--cart {\n    background-color: #8da9c4;\n\n    &:hover {\n        background-color: darken($color: #8da9c4, $amount: 10%);\n    }\n\n}\n",
              ],
              sourceRoot: "",
            },
          ]);
        const s = a;
      },
      818: (e, n, t) => {
        t.d(n, { Z: () => s });
        var r = t(15),
          i = t.n(r),
          o = t(645),
          a = t.n(o)()(i());
        a.push([
          e.id,
          ".cart-warning{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(41,41,41,.6);display:flex;align-items:center;justify-content:center}.cart-warning__container{position:relative;background-color:#fff;padding:3%;border-radius:5px}.cart-warning__container .btn-cross{top:5px;right:-10px}.hidden{display:none}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/components/view/cart/cart.scss"],
            names: [],
            mappings:
              "AAAA,cACI,cAAA,CACI,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,4BAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAIR,yBACI,iBAAA,CACA,qBAAA,CACA,UAAA,CACA,iBAAA,CAEA,oCACI,OAAA,CACA,WAAA,CAIR,QACI,YAAA",
            sourcesContent: [
              ".cart-warning {\n    position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background: rgba(41, 41, 41, 0.6);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n}\n\n.cart-warning__container {\n    position: relative;\n    background-color: #fff;\n    padding: 3%;\n    border-radius: 5px;\n\n    .btn-cross {\n        top: 5px;\n        right: -10px;\n    }\n}\n\n.hidden {\n    display: none;\n}",
            ],
            sourceRoot: "",
          },
        ]);
        const s = a;
      },
      371: (e, n, t) => {
        t.d(n, { Z: () => s });
        var r = t(15),
          i = t.n(r),
          o = t(645),
          a = t.n(o)()(i());
        a.push([
          e.id,
          ".fav-btn{background:none;border:none;width:35px}.fav-btn:hover{cursor:pointer;transform:skale(0.7)}.fav-btn img{width:100%}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/components/view/favorites/favorites.scss",
            ],
            names: [],
            mappings:
              "AAAA,SACI,eAAA,CACA,WAAA,CACA,UAAA,CAEA,eACI,cAAA,CACA,oBAAA,CAGJ,aACI,UAAA",
            sourcesContent: [
              ".fav-btn {\n    background: none;\n    border: none;\n    width: 35px;\n    \n    &:hover {\n        cursor: pointer;\n        transform: skale(0.7);\n    }\n\n    img{\n        width: 100%;\n    }\n}",
            ],
            sourceRoot: "",
          },
        ]);
        const s = a;
      },
      171: (e, n, t) => {
        t.d(n, { Z: () => p });
        var r = t(15),
          i = t.n(r),
          o = t(645),
          a = t.n(o),
          s = t(667),
          A = t.n(s),
          c = t(919),
          l = a()(i()),
          d = A()(c);
        l.push([
          e.id,
          ".popup__item{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(41,41,41,.6);display:flex;align-items:center;justify-content:center}.popup__item-container{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background-color:#fff;padding:2%}@media(max-width: 750px){.popup__item-container{flex-direction:column;max-height:100vh}}.popup__item-img{max-width:50%}@media(max-width: 750px){.popup__item-img{max-width:80%}}.popup__item-description{position:relative;background-color:#fff;width:30%;padding:2%}@media(max-width: 750px){.popup__item-description{width:90%}}.popup__item-btn--cart{max-width:max-content;max-height:max-content}.popup__item-title{font-size:2rem}.popup__item-header{font-weight:700}.popup__item-header span{font-weight:400}.popup__item-price{font-weight:700;font-size:larger}.btn-cross{align-self:flex-end;background:none;background-image:url(" +
            d +
            ");background-repeat:no-repeat;position:absolute;border:none;height:52px;width:52px;top:2%;right:0px;margin:auto}.btn-cross:hover{cursor:pointer}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/components/view/popup/popup.scss"],
            names: [],
            mappings:
              "AAAA,aACI,cAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,4BAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAGJ,uBACI,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,6BAAA,CACA,qBAAA,CACA,UAAA,CAEA,yBARJ,uBASW,qBAAA,CACA,gBAAA,CAAA,CAIX,iBACI,aAAA,CACA,yBAFJ,iBAGQ,aAAA,CAAA,CAGR,yBACI,iBAAA,CACA,qBAAA,CACA,SAAA,CACA,UAAA,CAEA,yBANJ,yBAOQ,SAAA,CAAA,CAIR,uBACI,qBAAA,CACA,sBAAA,CAGJ,mBACI,cAAA,CAGJ,oBACI,eAAA,CAEA,yBACI,eAAA,CAIR,mBACI,eAAA,CACA,gBAAA,CAGJ,WACI,mBAAA,CACA,eAAA,CACA,wDAAA,CACA,2BAAA,CACA,iBAAA,CACA,WAAA,CACA,WAAA,CACA,UAAA,CACA,MAAA,CACA,SAAA,CACA,WAAA,CAEA,iBACI,cAAA",
            sourcesContent: [
              '.popup__item {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(41, 41, 41, 0.6);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.popup__item-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    background-color: #fff;\n    padding: 2%;\n\n    @media (max-width: 750px) {\n           flex-direction: column;\n           max-height: 100vh;\n        }\n}\n\n.popup__item-img {\n    max-width: 50%;\n    @media (max-width: 750px) {\n        max-width: 80%;\n    }\n}\n.popup__item-description {\n    position: relative;\n    background-color: #fff;\n    width: 30%;\n    padding: 2%;\n\n    @media (max-width: 750px) {\n        width: 90%;\n    }\n    \n}\n.popup__item-btn--cart {\n    max-width: max-content;\n    max-height: max-content;\n}\n\n.popup__item-title {\n    font-size: 2rem;\n}\n\n.popup__item-header {\n    font-weight: 700;\n\n    span {\n        font-weight: 400;\n    }\n}\n\n.popup__item-price {\n    font-weight: 700;\n    font-size: larger;\n}\n\n.btn-cross {\n    align-self: flex-end;\n    background: none;\n    background-image: url("../../../assets/svg/remove.svg");\n    background-repeat: no-repeat;\n    position: absolute;\n    border: none;\n    height: 52px;\n    width: 52px;\n    top: 2%;\n    right: 0px;\n    margin: auto;\n\n    &:hover {\n        cursor: pointer;\n    }\n}',
            ],
            sourceRoot: "",
          },
        ]);
        const p = l;
      },
      545: (e, n, t) => {
        t.d(n, { Z: () => s });
        var r = t(15),
          i = t.n(r),
          o = t(645),
          a = t.n(o)()(i());
        a.push([
          e.id,
          ".search{display:flex;flex-wrap:nowrap;align-items:center;gap:10px;min-width:300px;padding:5px;border:1px solid #000;border-radius:10px}@media(max-width: 750px){.search{min-width:250px}}.search img{max-width:24px}.search-input{border:none;padding:5px}@media(max-width: 750px){.search-input{max-width:170px}}.search-input:focus{outline:none}.search-remove:hover{cursor:pointer}.error{margin-top:2%;text-align:center;line-height:2rem;font-size:2rem}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/components/view/search/search.scss"],
            names: [],
            mappings:
              "AAAA,QACI,YAAA,CACA,gBAAA,CACA,kBAAA,CACA,QAAA,CACA,eAAA,CACA,WAAA,CACA,qBAAA,CACA,kBAAA,CAEA,yBAVJ,QAWQ,eAAA,CAAA,CAGJ,YACI,cAAA,CAKR,cACI,WAAA,CACA,WAAA,CAEA,yBAJJ,cAKY,eAAA,CAAA,CAGR,oBACI,YAAA,CAKJ,qBACI,cAAA,CAIR,OACI,aAAA,CACA,iBAAA,CACA,gBAAA,CACA,cAAA",
            sourcesContent: [
              ".search {\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: center;\n    gap: 10px;\n    min-width: 300px;\n    padding: 5px;\n    border: 1px solid black;\n    border-radius: 10px;\n\n    @media (max-width: 750px) {\n        min-width: 250px;\n    }\n\n    img {\n        max-width: 24px;\n    }\n\n}\n\n.search-input {\n    border: none;\n    padding: 5px;\n\n    @media (max-width: 750px) {\n            max-width: 170px;\n        }\n\n    &:focus {\n        outline: none;\n    }\n}\n\n.search-remove {\n    &:hover {\n        cursor: pointer;\n    }\n}\n\n.error {\n    margin-top: 2%;\n    text-align: center;\n    line-height: 2rem;\n    font-size: 2rem;\n}",
            ],
            sourceRoot: "",
          },
        ]);
        const s = a;
      },
      948: (e, n, t) => {
        t.d(n, { Z: () => s });
        var r = t(15),
          i = t.n(r),
          o = t(645),
          a = t.n(o)()(i());
        a.push([
          e.id,
          ".price-slider__container,.year-slider__container{position:relative;pointer-events:none}input[type=range]{height:2em;display:block;margin:0}.price-slider__container .slider__input-second,.year-slider__container .slider__input-second{margin-top:-2em}input[type=range]::-webkit-slider-thumb{pointer-events:all}input[type=range]::-moz-range-thumb{pointer-events:all}input[type=range]::-ms-thumb{pointer-events:all}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/components/view/slider/slider.scss"],
            names: [],
            mappings:
              "AAAA,iDAEI,iBAAA,CACA,mBAAA,CAGJ,kBACI,UAAA,CACA,aAAA,CACA,QAAA,CAGJ,6FAEI,eAAA,CAGJ,wCACI,kBAAA,CAGJ,oCACI,kBAAA,CAGJ,6BACI,kBAAA",
            sourcesContent: [
              '.price-slider__container,\n.year-slider__container {\n    position: relative;\n    pointer-events: none;\n}\n\ninput[type="range"] {\n    height: 2em;\n    display: block;\n    margin: 0;\n}\n\n.price-slider__container .slider__input-second,\n.year-slider__container .slider__input-second {\n    margin-top: -2em;\n}\n\ninput[type="range"]::-webkit-slider-thumb {\n    pointer-events: all;\n}\n\ninput[type="range"]::-moz-range-thumb {\n    pointer-events: all;\n}\n\ninput[type="range"]::-ms-thumb {\n    pointer-events: all;\n}',
            ],
            sourceRoot: "",
          },
        ]);
        const s = a;
      },
      483: (e, n, t) => {
        t.d(n, { Z: () => s });
        var r = t(15),
          i = t.n(r),
          o = t(645),
          a = t.n(o)()(i());
        a.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css2?family=Mingzat&family=Raleway:wght@400;700&display=swap);",
        ]),
          a.push([
            e.id,
            '*{box-sizing:border-box;line-height:1.5rem}body{font-family:"Mingzat",sans-serif;display:flex;flex-wrap:wrap;justify-content:center}header{display:flex;justify-content:space-between;align-items:center;background-color:#fff;color:#13315c;width:90%;margin:0 auto 5%;padding:2%;letter-spacing:4px;box-shadow:rgba(11,38,70,.4) 0px 5px,rgba(19,49,92,.3) 0px 10px,rgba(19,64,116,.2) 0px 15px,rgba(141,169,196,.3) 0px 20px,rgba(141,169,196,.1) 0px 25px}@media(max-width: 620px){header{flex-direction:column}}header .logo{display:flex;gap:20px;align-items:center;text-transform:uppercase}header .logo img{max-height:100px}header .logo h1{line-height:2.5rem}@media(max-width: 750px){header .logo h1{font-size:1.5rem;line-height:2rem}}.cart img{width:35px}aside{display:flex;flex-direction:column;width:20%;justify-self:flex-start}aside .btn{margin-bottom:10px}@media(max-width: 820px){aside{width:30%}}@media(max-width: 520px){aside{flex-direction:row;width:90%}}.btn{border-radius:.5rem;padding:5% 10%;width:max-content;color:#eef4ed;text-transform:uppercase;border:none;box-shadow:rgba(0,0,0,.1) 0px 0px 5px 0px,rgba(0,0,0,.1) 0px 0px 1px 0px;transition:.3s}.btn:hover{cursor:pointer}.btn:active{transform:translateY(4px)}.aside-button{background-color:#003049}.aside-button:hover{background-color:#000e16}main{display:flex;min-height:68vh;width:70%}@media(max-width: 820px){main{width:60%}}@media(max-width: 520px){main{width:90%}}footer{display:flex;align-items:center;justify-content:space-between;gap:5px;flex-wrap:wrap;width:90%;height:100px;margin:0 auto;font-size:1rem;background-color:#13315c;color:#e5e5e5;padding:1%}footer a{text-decoration:none;font-size:1.2rem;color:#e5e5e5}@media(max-width: 650px){footer{flex-direction:column;justify-content:center}}',
            "",
            {
              version: 3,
              sources: ["webpack://./src/scss/global.scss"],
              names: [],
              mappings:
                "AAEA,EACI,qBAAA,CACA,kBAAA,CAGJ,KACI,gCAAA,CACA,YAAA,CACA,cAAA,CACA,sBAAA,CAIJ,OACI,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,qBAAA,CACA,aAAA,CACA,SAAA,CACA,gBAAA,CACA,UAAA,CACA,kBAAA,CACA,uJAAA,CAEA,yBAZJ,OAaY,qBAAA,CAAA,CAGR,aACI,YAAA,CACA,QAAA,CACA,kBAAA,CACA,wBAAA,CAEA,iBACG,gBAAA,CAGF,gBACG,kBAAA,CAEA,yBAHH,gBAIO,gBAAA,CACA,gBAAA,CAAA,CAQhB,UACI,UAAA,CAGJ,MACI,YAAA,CACA,qBAAA,CACA,SAAA,CACA,uBAAA,CAEA,WACI,kBAAA,CAGJ,yBAVJ,MAWQ,SAAA,CAAA,CAGJ,yBAdJ,MAeQ,kBAAA,CACA,SAAA,CAAA,CAIR,KACI,mBAAA,CACA,cAAA,CACA,iBAAA,CACA,aAAA,CACA,wBAAA,CACA,WAAA,CACA,wEAAA,CACA,cAAA,CAEA,WACI,cAAA,CAGJ,YACI,yBAAA,CAKR,cACI,wBAAA,CAEA,oBACI,wBAAA,CAIR,KACI,YAAA,CACA,eAAA,CACA,SAAA,CAEI,yBALR,KAMY,SAAA,CAAA,CAGJ,yBATR,KAWY,SAAA,CAAA,CAMZ,OACI,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,OAAA,CACA,cAAA,CACA,SAAA,CACA,YAAA,CACA,aAAA,CACA,cAAA,CACA,wBAAA,CACA,aAAA,CACA,UAAA,CAEA,SACI,oBAAA,CACA,gBAAA,CACA,aAAA,CAGJ,yBApBJ,OAqBQ,qBAAA,CACA,sBAAA,CAAA",
              sourcesContent: [
                "@import url('https://fonts.googleapis.com/css2?family=Mingzat&family=Raleway:wght@400;700&display=swap');\n\n* {\n    box-sizing: border-box;\n    line-height: 1.5rem;\n}\n\nbody {\n    font-family: 'Mingzat', sans-serif;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    \n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #fff;\n    color: #13315c;\n    width: 90%;\n    margin: 0 auto 5%;\n    padding: 2%;\n    letter-spacing: 4px;\n    box-shadow: rgba(11, 38, 70, 0.4) 0px 5px, rgba(19, 49, 92, 0.3) 0px 10px, rgba(19, 64, 116, 0.2) 0px 15px, rgba(141, 169, 196,0.3) 0px 20px, rgba(141, 169, 196, 0.1) 0px 25px;\n\n    @media (max-width: 620px) {\n            flex-direction: column;\n    }\n\n    .logo {\n        display: flex;\n        gap: 20px;\n        align-items: center;\n        text-transform: uppercase;\n\n        img {\n           max-height: 100px;\n         }\n\n         h1 {\n            line-height: 2.5rem;\n\n            @media (max-width: 750px) {\n                font-size: 1.5rem;\n                line-height: 2rem;\n            }\n\n         }\n    }\n    \n}\n\n.cart img {\n    width: 35px;\n}\n\naside {\n    display: flex;\n    flex-direction: column;\n    width: 20%;\n    justify-self: flex-start;\n\n    .btn {\n        margin-bottom: 10px;\n    }\n\n    @media (max-width: 820px) {\n        width: 30%;\n    }\n\n    @media (max-width: 520px) {\n        flex-direction: row;\n        width: 90%;\n    }\n}\n\n.btn {\n    border-radius: 0.5rem;\n    padding: 5% 10%;\n    width: max-content;\n    color: #eef4ed;\n    text-transform: uppercase;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;\n    transition: 0.3s;\n\n    &:hover {\n        cursor: pointer;\n    }\n\n    &:active {\n        transform: translateY(4px);\n    }\n\n}\n\n.aside-button {\n    background-color: #003049;\n\n    &:hover {\n        background-color: darken($color: #003049, $amount: 10%);\n    }\n}\n\nmain {\n    display: flex;\n    min-height: 68vh;\n    width: 70%;\n    \n        @media (max-width: 820px) {\n            width: 60%;\n        }\n\n        @media (max-width: 520px) {\n            \n            width: 90%;\n        }\n}\n\n\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 5px;\n    flex-wrap: wrap;\n    width: 90%;\n    height: 100px;\n    margin: 0 auto;\n    font-size: 1rem;\n    background-color: #13315c;\n    color: #e5e5e5;\n    padding: 1%;\n\n    a {\n        text-decoration: none;\n        font-size: 1.2rem;\n        color:#e5e5e5 ;\n    }\n\n    @media (max-width: 650px) {\n        flex-direction: column;\n        justify-content: center;\n    }\n}\n",
              ],
              sourceRoot: "",
            },
          ]);
        const s = a;
      },
      89: (e, n, t) => {
        t.d(n, { Z: () => s });
        var r = t(15),
          i = t.n(r),
          o = t(645),
          a = t.n(o)()(i());
        a.push([
          e.id,
          "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:rgba(0,0,0,0)}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/scss/normalize.scss"],
            names: [],
            mappings:
              "AAAA,2EAAA,CAUA,KACI,gBAAA,CAEA,6BAAA,CAWJ,KACI,QAAA,CAOJ,KACI,aAAA,CAQJ,GACI,aAAA,CACA,cAAA,CAWJ,GACI,sBAAA,CAEA,QAAA,CAEA,gBAAA,CASJ,IACI,+BAAA,CAEA,aAAA,CAWJ,EACI,8BAAA,CAQJ,YACI,kBAAA,CAEA,yBAAA,CAEA,gCAAA,CAQJ,SAEI,kBAAA,CAQJ,cAGI,+BAAA,CAEA,aAAA,CAQJ,MACI,aAAA,CAQJ,QAEI,aAAA,CACA,aAAA,CACA,iBAAA,CACA,uBAAA,CAGJ,IACI,cAAA,CAGJ,IACI,UAAA,CAUJ,IACI,iBAAA,CAWJ,sCAKI,mBAAA,CAEA,cAAA,CAEA,gBAAA,CAEA,QAAA,CASJ,aAGI,gBAAA,CAQJ,cAGI,mBAAA,CAOJ,gDAII,yBAAA,CAOJ,wHAII,iBAAA,CACA,SAAA,CAOJ,4GAII,6BAAA,CAOJ,SACI,0BAAA,CAUJ,OACI,qBAAA,CAEA,aAAA,CAEA,aAAA,CAEA,cAAA,CAEA,SAAA,CAEA,kBAAA,CAQJ,SACI,uBAAA,CAOJ,SACI,aAAA,CAQJ,6BAEI,qBAAA,CAEA,SAAA,CAQJ,kFAEI,WAAA,CAQJ,cACI,4BAAA,CAEA,mBAAA,CAQJ,yCACI,uBAAA,CAQJ,6BACI,yBAAA,CAEA,YAAA,CAWJ,QACI,aAAA,CAOJ,QACI,iBAAA,CAUJ,SACI,YAAA,CAOJ,SACI,YAAA",
            sourcesContent: [
              '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n    line-height: 1.15;\n    /* 1 */\n    -webkit-text-size-adjust: 100%;\n    /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n    margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n    display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n    box-sizing: content-box;\n    /* 1 */\n    height: 0;\n    /* 1 */\n    overflow: visible;\n    /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n    background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n    border-bottom: none;\n    /* 1 */\n    text-decoration: underline;\n    /* 2 */\n    text-decoration: underline dotted;\n    /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\nsup {\n    top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n    border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n    /* 1 */\n    overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n    /* 1 */\n    text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n    -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n    box-sizing: border-box;\n    /* 1 */\n    color: inherit;\n    /* 2 */\n    display: table;\n    /* 1 */\n    max-width: 100%;\n    /* 1 */\n    padding: 0;\n    /* 3 */\n    white-space: normal;\n    /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n    vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n    overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n    box-sizing: border-box;\n    /* 1 */\n    padding: 0;\n    /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    outline-offset: -2px;\n    /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    /* 1 */\n    font: inherit;\n    /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n    display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n    display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n    display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n    display: none;\n}',
            ],
            sourceRoot: "",
          },
        ]);
        const s = a;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = e(n);
                return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t;
              }).join("");
            }),
            (n.i = function (e, t, r) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var i = {};
              if (r)
                for (var o = 0; o < this.length; o++) {
                  var a = this[o][0];
                  null != a && (i[a] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var A = [].concat(e[s]);
                (r && i[A[0]]) ||
                  (t &&
                    (A[2]
                      ? (A[2] = "".concat(t, " and ").concat(A[2]))
                      : (A[2] = t)),
                  n.push(A));
              }
            }),
            n
          );
        };
      },
      15: (e) => {
        function n(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
          return r;
        }
        e.exports = function (e) {
          var t,
            r,
            i =
              ((r = 4),
              (function (e) {
                if (Array.isArray(e)) return e;
              })((t = e)) ||
                (function (e, n) {
                  var t =
                    e &&
                    (("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"]);
                  if (null != t) {
                    var r,
                      i,
                      o = [],
                      a = !0,
                      s = !1;
                    try {
                      for (
                        t = t.call(e);
                        !(a = (r = t.next()).done) &&
                        (o.push(r.value), !n || o.length !== n);
                        a = !0
                      );
                    } catch (e) {
                      (s = !0), (i = e);
                    } finally {
                      try {
                        a || null == t.return || t.return();
                      } finally {
                        if (s) throw i;
                      }
                    }
                    return o;
                  }
                })(t, r) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === r &&
                        e.constructor &&
                        (r = e.constructor.name),
                      "Map" === r || "Set" === r
                        ? Array.from(e)
                        : "Arguments" === r ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        ? n(e, t)
                        : void 0
                    );
                  }
                })(t, r) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()),
            o = i[1],
            a = i[3];
          if (!a) return o;
          if ("function" == typeof btoa) {
            var s = btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
              A = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                s
              ),
              c = "/*# ".concat(A, " */"),
              l = a.sources.map(function (e) {
                return "/*# sourceURL="
                  .concat(a.sourceRoot || "")
                  .concat(e, " */");
              });
            return [o].concat(l).concat([c]).join("\n");
          }
          return [o].join("\n");
        };
      },
      667: (e) => {
        e.exports = function (e, n) {
          return (
            n || (n = {}),
            "string" != typeof (e = e && e.__esModule ? e.default : e)
              ? e
              : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                n.hash && (e += n.hash),
                /["'() \t\n]/.test(e) || n.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
          );
        };
      },
      379: (e, n, t) => {
        var r,
          i = (function () {
            var e = {};
            return function (n) {
              if (void 0 === e[n]) {
                var t = document.querySelector(n);
                if (
                  window.HTMLIFrameElement &&
                  t instanceof window.HTMLIFrameElement
                )
                  try {
                    t = t.contentDocument.head;
                  } catch (e) {
                    t = null;
                  }
                e[n] = t;
              }
              return e[n];
            };
          })(),
          o = [];
        function a(e) {
          for (var n = -1, t = 0; t < o.length; t++)
            if (o[t].identifier === e) {
              n = t;
              break;
            }
          return n;
        }
        function s(e, n) {
          for (var t = {}, r = [], i = 0; i < e.length; i++) {
            var s = e[i],
              A = n.base ? s[0] + n.base : s[0],
              c = t[A] || 0,
              l = "".concat(A, " ").concat(c);
            t[A] = c + 1;
            var d = a(l),
              p = { css: s[1], media: s[2], sourceMap: s[3] };
            -1 !== d
              ? (o[d].references++, o[d].updater(p))
              : o.push({ identifier: l, updater: h(p, n), references: 1 }),
              r.push(l);
          }
          return r;
        }
        function A(e) {
          var n = document.createElement("style"),
            r = e.attributes || {};
          if (void 0 === r.nonce) {
            var o = t.nc;
            o && (r.nonce = o);
          }
          if (
            (Object.keys(r).forEach(function (e) {
              n.setAttribute(e, r[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(n);
          else {
            var a = i(e.insert || "head");
            if (!a)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            a.appendChild(n);
          }
          return n;
        }
        var c,
          l =
            ((c = []),
            function (e, n) {
              return (c[e] = n), c.filter(Boolean).join("\n");
            });
        function d(e, n, t, r) {
          var i = t
            ? ""
            : r.media
            ? "@media ".concat(r.media, " {").concat(r.css, "}")
            : r.css;
          if (e.styleSheet) e.styleSheet.cssText = l(n, i);
          else {
            var o = document.createTextNode(i),
              a = e.childNodes;
            a[n] && e.removeChild(a[n]),
              a.length ? e.insertBefore(o, a[n]) : e.appendChild(o);
          }
        }
        function p(e, n, t) {
          var r = t.css,
            i = t.media,
            o = t.sourceMap;
          if (
            (i ? e.setAttribute("media", i) : e.removeAttribute("media"),
            o &&
              "undefined" != typeof btoa &&
              (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                " */"
              )),
            e.styleSheet)
          )
            e.styleSheet.cssText = r;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r));
          }
        }
        var u = null,
          m = 0;
        function h(e, n) {
          var t, r, i;
          if (n.singleton) {
            var o = m++;
            (t = u || (u = A(n))),
              (r = d.bind(null, t, o, !1)),
              (i = d.bind(null, t, o, !0));
          } else
            (t = A(n)),
              (r = p.bind(null, t, n)),
              (i = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(t);
              });
          return (
            r(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap
                )
                  return;
                r((e = n));
              } else i();
            }
          );
        }
        e.exports = function (e, n) {
          (n = n || {}).singleton ||
            "boolean" == typeof n.singleton ||
            (n.singleton =
              (void 0 === r &&
                (r = Boolean(
                  window && document && document.all && !window.atob
                )),
              r));
          var t = s((e = e || []), n);
          return function (e) {
            if (
              ((e = e || []),
              "[object Array]" === Object.prototype.toString.call(e))
            ) {
              for (var r = 0; r < t.length; r++) {
                var i = a(t[r]);
                o[i].references--;
              }
              for (var A = s(e, n), c = 0; c < t.length; c++) {
                var l = a(t[c]);
                0 === o[l].references && (o[l].updater(), o.splice(l, 1));
              }
              t = A;
            }
          };
        };
      },
      919: (e, n, t) => {
        e.exports = t.p + "img/496c532558a7bfdf3660.svg";
      },
    },
    n = {};
  function t(r) {
    var i = n[r];
    if (void 0 !== i) return i.exports;
    var o = (n[r] = { id: r, exports: {} });
    return e[r](o, o.exports, t), o.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e;
      t.g.importScripts && (e = t.g.location + "");
      var n = t.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var r = n.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = e);
    })(),
    (t.nc = void 0),
    (() => {
      var e = t(379),
        n = t.n(e),
        r = t(371);
      n()(r.Z, { insert: "head", singleton: !1 }), r.Z.locals;
      var i = [
        {
          title: "Banana",
          year: 2022,
          price: 100,
          author: "Vasilisa",
          brush: "oil",
          description: "Banana painted with oil brush",
          amount: 1,
          color: "yellow",
          url: "./assets/img/banana-oil-brush.jpg",
          onsale: !1,
        },
        {
          title: "Cat",
          year: 2021,
          price: 105,
          author: "Valiantsina",
          brush: "pencil",
          description: "Grey cat smiles you",
          amount: 10,
          color: "grey",
          url: "./assets/img/cat-pencil.jpg",
          onsale: !1,
        },
        {
          title: "Triangles",
          year: 2021,
          price: 77,
          author: "Valiantsina",
          brush: "watercolor",
          description: "Blue triangles filled with watercolor",
          amount: 3,
          color: "blue",
          url: "./assets/img/triangles-blue-watercolor.jpg",
          onsale: !1,
        },
        {
          title: "Christmas tree",
          year: 2023,
          price: 70,
          author: "Vasilisa",
          brush: "oil",
          description: "Holiday is coming! Christmas tree for you HO-HO-HO",
          amount: 2,
          color: "green",
          url: "./assets/img/christmas-tree-oil-brush.jpg",
          onsale: !1,
        },
        {
          title: "Cloud",
          year: 2022,
          price: 50,
          salePrice: 40,
          author: "Valiantsina",
          brush: "pencil",
          description: "A little cloud for warm days",
          amount: 15,
          color: "blue",
          url: "./assets/img/cloud-pencil.jpg",
          onsale: !0,
        },
        {
          title: "Fish",
          year: 2018,
          price: 10,
          author: "Vasilisa",
          brush: "crayon",
          description: "The best quiet pet or just cookie, as you wish",
          amount: 3,
          color: "orange",
          url: "./assets/img/fish-crayon.jpg",
          onsale: !1,
        },
        {
          title: "Flower",
          year: 2018,
          price: 5,
          author: "Valiantsina",
          brush: "pencil",
          description: "Your winter bouquet",
          amount: 9,
          color: "blue",
          url: "./assets/img/flower-pencil.jpg",
          onsale: !1,
        },
        {
          title: "Grape",
          year: 2019,
          price: 200,
          salePrice: 130,
          author: "Vasilisa",
          brush: "watercolor",
          description: "Just delicious",
          amount: 1,
          color: "purple",
          url: "./assets/img/grape-watercolor-brush.jpg",
          onsale: !0,
        },
        {
          title: "Stars",
          year: 2018,
          price: 90,
          author: "Valiantsina",
          brush: "pencil",
          description: "Yellow stars",
          amount: 3,
          color: "yellow",
          url: "./assets/img/stars-yellow-pencil.jpg",
          onsale: !1,
        },
        {
          title: "Grass",
          year: 2022,
          price: 73,
          author: "Valiantsina",
          brush: "pencil",
          description: "Smells like summer",
          amount: 4,
          color: "green",
          url: "./assets/img/grass-pencil.jpg",
          onsale: !1,
        },
        {
          title: "Heart",
          year: 2020,
          price: 70,
          author: "Vasilisa",
          brush: "airbrush",
          description: "All you need is love",
          amount: 8,
          color: "red",
          url: "./assets/img/heart-airbrush.jpg",
          onsale: !1,
        },
        {
          title: "Pentagon",
          year: 2010,
          price: 80,
          author: "Valiantsina",
          brush: "pencil",
          description: "Green pentagon",
          amount: 3,
          color: "green",
          url: "./assets/img/pentagon-green-pencil.jpg",
          onsale: !1,
        },
        {
          title: "Orange",
          year: 2019,
          price: 44,
          salePrice: 40,
          author: "Vasilisa",
          brush: "marker",
          description: "Orange like orange",
          amount: 8,
          color: "orange",
          url: "./assets/img/orange-marker.jpg",
          onsale: !0,
        },
        {
          title: "Pig",
          year: 2016,
          price: 13,
          author: "Vasilisa",
          brush: "marker",
          description: "Oink oink",
          amount: 3,
          color: "rose",
          url: "./assets/img/pig-marker.jpg",
          onsale: !1,
        },
        {
          title: "Rainbow",
          year: 2020,
          price: 180,
          salePrice: 100,
          author: "Vasilisa",
          brush: "crayon",
          description: "ROYGBIV",
          amount: 1,
          color: "rainbow",
          url: "./assets/img/rainbow-crayon.jpg",
          onsale: !0,
        },
        {
          title: "Star",
          year: 2021,
          price: 29,
          author: "Vasilisa",
          brush: "pencil",
          description: "Shine bright",
          amount: 13,
          color: "yellow",
          url: "./assets/img/star-pencil.jpg",
          onsale: !1,
        },
        {
          title: "Sun",
          year: 2019,
          price: 30,
          author: "Valiantsina",
          brush: "crayon",
          description: "For rainy days",
          amount: 30,
          color: "yellow",
          url: "./assets/img/sun-crayon.jpg",
          onsale: !1,
        },
        {
          title: "Watermelon",
          year: 2022,
          price: 90,
          author: "Vasilisa",
          brush: "marker",
          description: "You can't just stop",
          amount: 12,
          color: "red",
          url: "./assets/img/watermelon-marker.jpg",
          onsale: !1,
        },
        {
          title: "Dog",
          year: 2015,
          price: 100,
          salePrice: 95,
          author: "Veranika",
          brush: "watercolor",
          description: "Your best friend",
          amount: 1,
          color: "grey",
          url: "./assets/img/dog-watercolor-brush.jpg",
          onsale: !0,
        },
        {
          title: "Rocket",
          year: 2016,
          price: 200,
          salePrice: 180,
          author: "Veranika",
          brush: "brush",
          description: "To the moon",
          amount: 15,
          color: "grey",
          url: "./assets/img/rocket-brush.jpg",
          onsale: !0,
        },
        {
          title: "Saturn",
          year: 2016,
          price: 100,
          author: "Veranika",
          brush: "marker",
          description: "Just too far away",
          amount: 5,
          color: "brown",
          url: "./assets/img/saturn-marker.jpg",
          onsale: !1,
        },
        {
          title: "Snail",
          year: 2017,
          price: 102,
          author: "Veranika",
          brush: "oil",
          description: "Slo-o-o-o-ow",
          amount: 15,
          color: "brown",
          url: "./assets/img/snail-oil-brush.jpg",
          onsale: !1,
        },
        {
          title: "Oval",
          year: 2010,
          price: 84,
          author: "Valiantsina",
          brush: "oil",
          description: "Red oval",
          amount: 3,
          color: "red",
          url: "./assets/img/oval-red-oil.jpg",
          onsale: !1,
        },
        {
          title: "Tree",
          year: 2018,
          price: 52,
          author: "Veranika",
          brush: "crayon",
          description: "Perfect shadow and air",
          amount: 15,
          color: "green",
          url: "./assets/img/tree-crayon.jpg",
          onsale: !1,
        },
        {
          title: "Squares",
          year: 2012,
          price: 45,
          author: "Valiantsina",
          brush: "crayon",
          description: "Black squares",
          amount: 3,
          color: "black",
          url: "./assets/img/squares-black-crayon.jpg",
          onsale: !1,
        },
      ];
      const o = (function () {
        function e() {}
        return (
          (e.prototype.toggle = function (e) {
            var n,
              t,
              r = localStorage.getItem("favorites"),
              o = r ? r.split("-") : [];
            if (e.target) {
              var a = e.currentTarget.parentElement;
              if (a) {
                var s = a.querySelector(".card__item-title");
                s &&
                  ((t = s.innerHTML.toLowerCase()),
                  o.includes(t)
                    ? (o.splice(o.indexOf(t), 1),
                      null === (n = a.dataset.filters) ||
                        void 0 === n ||
                        n.replace("-favorite", ""))
                    : (o.push(t), (a.dataset.filters += "-favorite")),
                  localStorage.setItem("favorites", o.join("-")));
              }
              (document.querySelector(".products").innerHTML = ""),
                new p().draw(i);
            }
          }),
          (e.prototype.checkFav = function (e) {
            var n = localStorage.getItem("favorites");
            return !!(n ? n.split("-") : []).includes(e);
          }),
          e
        );
      })();
      var a = function (e, n, t) {
        if (t || 2 === arguments.length)
          for (var r, i = 0, o = n.length; i < o; i++)
            (!r && i in n) ||
              (r || (r = Array.prototype.slice.call(n, 0, i)), (r[i] = n[i]));
        return e.concat(r || Array.prototype.slice.call(n));
      };
      const s = (function () {
        function e() {
          (this.allProducts = Array.from(
            document.querySelectorAll(".card__item")
          )),
            (this.filteredProducts = []),
            (this.favorites = new o()),
            (this.productsWrapper = document.querySelector(".products")),
            (this.card = new p());
        }
        return (
          (e.prototype.removeFilter = function (e) {
            var n = localStorage.getItem("filters");
            if (n) {
              var t = n.split("-");
              if (
                e.startsWith("color") ||
                e.startsWith("brush") ||
                e.startsWith("author")
              ) {
                var r = e.split("*"),
                  i = new RegExp("^".concat(r[0]));
                for (var o in t)
                  if (i.test(t[o])) {
                    var a = t[o].split("*");
                    a.length > 2
                      ? (a.splice(a.indexOf(r[1]), 1), (t[o] = a.join("*")))
                      : t.splice(+o, 1);
                  }
              } else
                for (var o in ((i = new RegExp("^".concat(e))), t))
                  i.test(t[o]) && t.splice(+o, 1);
              localStorage.setItem("filters", t.join("-"));
            }
          }),
          (e.prototype.filterProducts = function () {
            var e,
              n = this,
              t = localStorage.getItem("filters");
            if (t)
              0 === (e = t.split("-")).length || "" === e[0]
                ? this.card.draw(i)
                : e.forEach(function (e) {
                    e.startsWith("price") || e.startsWith("year")
                      ? n.filterByPriceAndYear(e)
                      : e.startsWith("sale") || e.startsWith("favorite")
                      ? n.filterBySaleAndFavorite(e)
                      : n.filterByProperty(e);
                  }),
                this.drawProducts(),
                (this.filteredProducts = []);
            else {
              this.productsWrapper.innerHTML = "";
              for (var r = 0, o = this.allProducts; r < o.length; r++) {
                var a = o[r];
                this.productsWrapper.appendChild(a);
              }
            }
          }),
          (e.prototype.filterByPriceAndYear = function (e) {
            var n =
                this.filteredProducts.length >= 1
                  ? a([], this.filteredProducts, !0)
                  : a([], this.allProducts, !0),
              t = e.split("*"),
              r = ".".concat(t[0], "-slider"),
              i = n.reduce(function (e, n) {
                var r = n.querySelector(".card__item-".concat(t[0]));
                return (
                  r &&
                    parseInt(r.innerHTML) >= +t[1] &&
                    parseInt(r.innerHTML) <= +t[2] &&
                    e.push(n),
                  e
                );
              }, []);
            this.filteredProducts = a([], i, !0);
            var o = Array.from(document.querySelectorAll(r));
            o && ((o[0].value = t[1]), (o[1].value = t[2]));
            var s = document.querySelector("".concat(r, "__container"));
            if (s) {
              var A = s.querySelector(".from"),
                c = s.querySelector(".to");
              A &&
                c &&
                ((A.innerHTML = o[0].value), (c.innerHTML = o[1].value));
            }
          }),
          (e.prototype.filterBySaleAndFavorite = function (e) {
            var n =
                this.filteredProducts.length >= 1
                  ? a([], this.filteredProducts, !0)
                  : a([], this.allProducts, !0),
              t = [],
              r = "sale" === e ? ".onsale" : ".isfavorite",
              i = document.querySelector(r);
            i && (i.checked = !0);
            for (var o = 0, s = n; o < s.length; o++) {
              var A = s[o],
                c = A.dataset.filters;
              c && c.split("-").includes(e) && t.push(A);
            }
            this.filteredProducts = a([], t, !0);
          }),
          (e.prototype.filterByProperty = function (e) {
            var n =
                this.filteredProducts.length >= 1
                  ? a([], this.filteredProducts, !0)
                  : a([], this.allProducts, !0),
              t = [];
            e
              .split("*")
              .slice(1)
              .forEach(function (e) {
                var r = document.querySelector("#".concat(e));
                r && (r.checked = !0);
                for (var i = 0, o = n; i < o.length; i++) {
                  var a = o[i],
                    s = a.dataset.filters;
                  s && s.split("-").includes(e) && t.push(a);
                }
              }),
              (this.filteredProducts = a([], t, !0));
          }),
          (e.prototype.drawProducts = function () {
            if (
              ((this.productsWrapper.innerHTML = ""),
              this.filteredProducts.length)
            )
              for (var e = 0, n = this.filteredProducts; e < n.length; e++) {
                var t = n[e],
                  r = t.querySelector(".card__item-title"),
                  i = void 0;
                if (r) {
                  i = r.innerHTML.toLowerCase();
                  var o = this.favorites.checkFav(i),
                    a = t.querySelector(".fav-btn img");
                  o &&
                    a &&
                    a.setAttribute("src", "./assets/svg/like-black.svg");
                }
                this.productsWrapper.appendChild(t);
              }
            else {
              var s = document.createElement("div");
              s.classList.add("error"),
                (s.innerHTML =
                  "Sorry, nothing could be found. You can try another search request."),
                this.productsWrapper.appendChild(s);
            }
          }),
          e
        );
      })();
      var A = t(171);
      n()(A.Z, { insert: "head", singleton: !1 }), A.Z.locals;
      const c = function () {
          var e = this;
          (this.createPopup = function (n) {
            console.log("hi");
            var t = n.target.parentElement;
            if (t) {
              var r,
                o = t.querySelector(".card__item-title");
              if (o) {
                r = o.innerHTML;
                var a = i.filter(function (e) {
                    return e.title === r;
                  })[0],
                  s = document.createDocumentFragment(),
                  A = document.querySelector("#popupTemp");
                if (A) {
                  var c = A.content.cloneNode(!0);
                  if (c) {
                    var l = c.querySelector(".popup__item-title");
                    l && (l.textContent = a.title);
                    var d = c.querySelector(".popup__item-img");
                    d &&
                      (d.setAttribute("src", a.url),
                      d.setAttribute("alt", a.title));
                    var p = c.querySelector(".popup__item-year");
                    p && (p.textContent = a.year + "");
                    var u = c.querySelector(".popup__item-price");
                    if (
                      u &&
                      ((u.textContent = a.price + "$"), a.onsale && a.salePrice)
                    ) {
                      u.classList.add("card__item-price_sale");
                      var m = document.createElement("span");
                      m.classList.add("card__item_sale-price"),
                        (m.innerHTML = "".concat(a.salePrice, "$")),
                        u.after(m);
                      var h = document.createElement("span");
                      h.classList.add("card__item_sale-percent"),
                        (h.innerHTML = "-".concat(
                          Math.round(100 - (100 * a.salePrice) / a.price),
                          "%"
                        )),
                        m.after(h);
                    }
                    var f = c.querySelector(".popup__item-author");
                    f && (f.innerHTML += a.author);
                    var g = c.querySelector(".popup__item-color");
                    g && (g.innerHTML += a.color);
                    var C = c.querySelector(".popup__item-brush");
                    C && (C.innerHTML += a.brush);
                    var b = c.querySelector(".popup__item-descr");
                    b && (b.innerHTML += a.description);
                    var y = c.querySelector(".btn-cross");
                    y && y.addEventListener("click", e.closePopup);
                    var v = c.querySelector(".popup__item");
                    v && v.addEventListener("click", e.closePopup), s.append(c);
                    var x = document.querySelector("main");
                    if (x) {
                      x.append(s);
                      var w = document.querySelector("body");
                      w && (w.style.overflow = "hidden");
                    }
                  }
                }
              }
            }
          }),
            (this.closePopup = function () {
              var e = document.querySelector("main");
              if (e) {
                var n = e.lastElementChild;
                n && e.removeChild(n);
                var t = document.querySelector("body");
                t && (t.style.overflow = "visible");
              }
            });
        },
        l = (function () {
          function e() {}
          return (
            (e.prototype.sortProducts = function () {
              switch (localStorage.getItem("sortBy")) {
                case "price-ascending":
                  return void this.sort("price", "ascending");
                case "price-descending":
                  return void this.sort("price", "descending");
                case "title-ascending":
                  return void this.sort("title", "ascending");
                case "title-descending":
                  return void this.sort("title", "descending");
                case "year-ascending":
                  return void this.sort("year", "ascending");
                case "year-descending":
                  return void this.sort("year", "descending");
                default:
                  return void localStorage.removeItem("sortBy");
              }
            }),
            (e.prototype.sort = function (e, n) {
              var t = Array.from(document.querySelectorAll(".card__item")),
                r =
                  "price" === e
                    ? ".card__item-price"
                    : "title" === e
                    ? ".card__item-title"
                    : ".card__item-year";
              "ascending" === n && "title" === e
                ? t.sort(function (e, n) {
                    var t, i;
                    return (null === (t = e.querySelector(r)) || void 0 === t
                      ? void 0
                      : t.innerHTML
                    ).localeCompare(
                      null === (i = n.querySelector(r)) || void 0 === i
                        ? void 0
                        : i.innerHTML
                    );
                  })
                : "descending" === n && "title" === e
                ? t.sort(function (e, n) {
                    var t, i;
                    return (null === (t = n.querySelector(r)) || void 0 === t
                      ? void 0
                      : t.innerHTML
                    ).localeCompare(
                      null === (i = e.querySelector(r)) || void 0 === i
                        ? void 0
                        : i.innerHTML
                    );
                  })
                : "ascending" === n
                ? t.sort(function (e, n) {
                    var t, i;
                    return (
                      parseFloat(
                        null === (t = e.querySelector(r)) || void 0 === t
                          ? void 0
                          : t.innerHTML
                      ) -
                      parseFloat(
                        null === (i = n.querySelector(r)) || void 0 === i
                          ? void 0
                          : i.innerHTML
                      )
                    );
                  })
                : "descending" === n &&
                  t.sort(function (e, n) {
                    var t, i;
                    return (
                      parseFloat(
                        null === (t = n.querySelector(r)) || void 0 === t
                          ? void 0
                          : t.innerHTML
                      ) -
                      parseFloat(
                        null === (i = e.querySelector(r)) || void 0 === i
                          ? void 0
                          : i.innerHTML
                      )
                    );
                  }),
                Array.from(document.querySelectorAll("option")).forEach(
                  function (t) {
                    t.value === "".concat(e, "-").concat(n) &&
                      (t.selected = !0);
                  }
                );
              var i = document.querySelector(".products");
              (i.innerHTML = ""),
                t.forEach(function (e) {
                  return i.appendChild(e);
                });
            }),
            e
          );
        })();
      var d = t(296);
      n()(d.Z, { insert: "head", singleton: !1 }), d.Z.locals;
      const p = (function () {
        function e() {
          (this.favorites = new o()), (this.popup = new c());
        }
        return (
          (e.prototype.draw = function (e) {
            var n = this,
              t = document.createDocumentFragment(),
              r = document.querySelector("#productCardTemp");
            e.forEach(function (e) {
              if (r) {
                var i = r.content.cloneNode(!0);
                if (i) {
                  var o = i.querySelector(".card__item-title"),
                    a = n.favorites.checkFav(e.title.toLowerCase()),
                    A = i.querySelector(".fav-btn img");
                  a &&
                    A &&
                    A.setAttribute("src", "./assets/svg/like-black.svg"),
                    o && (o.textContent = e.title);
                  var c = i.querySelector(".card__item-img");
                  c &&
                    (c.setAttribute("src", e.url),
                    c.setAttribute("alt", e.title));
                  var d = i.querySelector(".card__item-year");
                  d && (d.textContent = e.year + "");
                  var p = i.querySelector(".card__item");
                  p &&
                    p.setAttribute(
                      "data-filters",
                      ""
                        .concat(e.brush, "-")
                        .concat(e.author.toLowerCase(), "-")
                        .concat(e.color)
                    );
                  var u = i.querySelector(".card__item-price");
                  if (
                    u &&
                    ((u.textContent = e.price + "$"), e.onsale && e.salePrice)
                  ) {
                    u.classList.add("card__item_sale-price");
                    var m = document.createElement("span");
                    m.classList.add("card__item-price_sale"),
                      (m.innerHTML = "".concat(e.price, "$")),
                      (u.innerHTML = "".concat(e.salePrice, "$")),
                      u.before(m);
                    var h = document.createElement("span");
                    h.classList.add("card__item_sale-percent"),
                      (h.innerHTML = "-".concat(
                        Math.round(100 - (100 * e.salePrice) / e.price),
                        "%"
                      )),
                      m.after(h),
                      (p.dataset.filters += "-sale");
                  }
                  var f = i.querySelector(".fav-btn");
                  f &&
                    f.addEventListener("click", function (e) {
                      n.favorites.toggle(e),
                        new s().filterProducts(),
                        new l().sortProducts();
                    });
                  var g = i.querySelector(".card__item-btn--more");
                  g &&
                    g.addEventListener("click", function (e) {
                      return n.popup.createPopup(e);
                    }),
                    t.append(i);
                  var C = document.querySelector(".products");
                  C && C.append(t);
                }
              }
            });
          }),
          e
        );
      })();
      var u = t(545);
      n()(u.Z, { insert: "head", singleton: !1 }), u.Z.locals;
      var m = (function () {
        function e() {}
        return (
          (e.prototype.searchProduct = function () {
            var e = new p(),
              n = document.querySelector(".products"),
              t = document
                .querySelector(".search-input")
                .value.toLowerCase()
                .trim();
            if (!t) return (n.innerHTML = ""), void e.draw(i);
            var r = document.querySelectorAll(".card__item"),
              o = Array.from(r).filter(function (e) {
                var n;
                return null === (n = e.querySelector(".card__item-title")) ||
                  void 0 === n
                  ? void 0
                  : n.innerHTML.toLowerCase().includes(t);
              });
            if (o.length)
              (n.innerHTML = ""),
                o.map(function (e) {
                  return n.appendChild(e);
                });
            else {
              var a = document.createElement("div");
              a.classList.add("error"),
                (a.innerHTML =
                  "Sorry, nothing could be found. You can try another search request."),
                (n.innerHTML = ""),
                n.appendChild(a);
            }
          }),
          (e.prototype.removeSearchText = function () {
            (document.querySelector(".search-input").value = ""),
              this.searchProduct();
          }),
          e
        );
      })();
      const h = m;
      var f = t(948);
      n()(f.Z, { insert: "head", singleton: !1 }), f.Z.locals;
      const g = (function () {
        function e(e) {
          (this.className = e), (this.filter = new s());
        }
        return (
          (e.prototype.draw = function () {
            var e = Array.from(document.querySelectorAll(this.className));
            if (+e[0].value > +e[1].value) {
              var n = e[1].value;
              (e[1].value = e[0].value), (e[0].value = n);
            }
            +e[1].value < +e[0].value &&
              ((n = e[0].value), (e[0].value = e[1].value), (e[1].value = n));
          }),
          (e.prototype.setRangeFilter = function () {
            var e = Array.from(document.querySelectorAll(this.className)),
              n = document.querySelector(
                "".concat(this.className, "__container")
              );
            if (n) {
              var t = n.querySelector(".from"),
                r = n.querySelector(".to");
              t &&
                r &&
                ((t.innerHTML = e[0].value), (r.innerHTML = e[1].value));
            }
            var i = this.className.split("-")[0].slice(1);
            this.filter.removeFilter(i);
            var o = ""
                .concat(i, "*")
                .concat(e[0].value, "*")
                .concat(e[1].value),
              a = localStorage.getItem("filters");
            a
              ? localStorage.setItem("filters", a + "-" + o)
              : localStorage.setItem("filters", o);
          }),
          e
        );
      })();
      var C = t(818);
      n()(C.Z, { insert: "head", singleton: !1 }), C.Z.locals;
      var b = (function () {
        function e() {}
        return (
          (e.prototype.addToCart = function (e) {
            var n,
              t,
              r = document.querySelector(".cart"),
              i = e.target;
            if (
              (i && (n = i.parentElement),
              n && (t = n.querySelector(".card__item-btn--remove")),
              i.classList.add("hidden"),
              t && t.classList.remove("hidden"),
              r)
            ) {
              var o = r.querySelector("span"),
                a = document.querySelector(".cart-warning");
              if (o && a) {
                var s = a.querySelector(".btn-cross_warning");
                s &&
                  s.addEventListener("click", function () {
                    return a.classList.add("hidden");
                  });
                var A = +o.innerHTML + 1;
                A > 20
                  ? a.classList.remove("hidden")
                  : ((o.innerHTML = A.toString()), a.classList.add("hidden"));
              }
            }
          }),
          (e.prototype.removeFromCart = function (e) {
            var n,
              t,
              r = document.querySelector(".cart"),
              i = e.target;
            if (
              (console.log(i),
              i && ((n = i.parentElement), i.classList.add("hidden")),
              n && (t = n.querySelector(".card__item-btn--cart")),
              t && t.classList.remove("hidden"),
              r)
            ) {
              var o = r.querySelector("span");
              if (o) {
                var a = +o.innerHTML - 1;
                if (a < 0) return;
                o.innerHTML = a.toString();
              }
            }
          }),
          e
        );
      })();
      const y = b;
      var v = (function () {
        function e() {
          (this.priceSlider = new g(".price-slider")),
            (this.yearSlider = new g(".year-slider")),
            (this.card = new p()),
            (this.sort = new l()),
            (this.popup = new c()),
            (this.search = new h()),
            (this.favorites = new o()),
            (this.cart = new y());
        }
        return (
          (e.prototype.start = function () {
            var e = this;
            this.card.draw(i);
            var n = document.querySelector(".search-input");
            n && n.addEventListener("keyup", this.search.searchProduct);
            var t = document.querySelector(".search-remove");
            t && t.addEventListener("click", this.search.removeSearchText);
            var r = document.querySelector(".sort");
            r &&
              r.addEventListener("change", function (n) {
                if (n.target) {
                  var t = n.target;
                  localStorage.setItem("sortBy", t.value),
                    e.sort.sortProducts();
                }
              });
            var o = new s();
            document.querySelectorAll(".filter").forEach(function (n) {
              return n.addEventListener("change", function (t) {
                var r,
                  i,
                  a = t.target,
                  s =
                    null === (r = a.parentElement) || void 0 === r
                      ? void 0
                      : r.parentElement;
                if (s)
                  if (((i = s.classList.value), n.checked)) {
                    var A = localStorage.getItem("filters");
                    if (A) {
                      var c = A.split("-"),
                        l = c.filter(function (e) {
                          return e.startsWith(i);
                        })[0],
                        d = void 0;
                      if (l) {
                        d = c.indexOf(l);
                        var p = "".concat(l, "*").concat(a.value);
                        c[d] = p;
                      } else c.push("".concat(i, "*").concat(a.value));
                      localStorage.setItem("filters", c.join("-"));
                    } else
                      localStorage.setItem(
                        "filters",
                        "".concat(i, "*").concat(a.value)
                      );
                  } else o.removeFilter("".concat(i, "*").concat(a.value));
                o.filterProducts(), e.sort.sortProducts();
              });
            });
            var a = document.querySelector(".onsale");
            a &&
              a.addEventListener("change", function () {
                if (a.checked) {
                  var n = localStorage.getItem("filters");
                  n
                    ? localStorage.setItem("filters", n + "-sale")
                    : localStorage.setItem("filters", "sale");
                } else o.removeFilter("sale");
                o.filterProducts(), e.sort.sortProducts();
              });
            var A = document.querySelector(".isfavorite");
            A &&
              A.addEventListener("change", function () {
                if (A.checked) {
                  var n = localStorage.getItem("filters");
                  n
                    ? localStorage.setItem("filters", n + "-favorite")
                    : localStorage.setItem("filters", "favorite");
                } else o.removeFilter("favorite");
                o.filterProducts(), e.sort.sortProducts();
              }),
              Array.from(document.querySelectorAll(".slider__input")).forEach(
                function (n) {
                  n.addEventListener("change", function (n) {
                    var t = n.target;
                    t && t.classList.contains("price-slider")
                      ? (e.priceSlider.draw(), e.priceSlider.setRangeFilter())
                      : (e.yearSlider.draw(), e.yearSlider.setRangeFilter()),
                      o.filterProducts(),
                      e.sort.sortProducts();
                  });
                }
              ),
              document.querySelectorAll(".aside-button").forEach(function (n) {
                var t = n;
                t.addEventListener("click", function () {
                  t.classList.contains("remove-settings-button")
                    ? localStorage.clear()
                    : t.classList.contains("remove-filters-button") &&
                      localStorage.removeItem("filters"),
                    o.filterProducts(),
                    e.sort.sortProducts();
                });
              }),
              document
                .querySelectorAll(".card__item-btn--cart")
                .forEach(function (n) {
                  return n.addEventListener("click", function (n) {
                    return e.cart.addToCart(n);
                  });
                }),
              document
                .querySelectorAll(".card__item-btn--remove")
                .forEach(function (n) {
                  return n.addEventListener("click", function (n) {
                    return e.cart.removeFromCart(n);
                  });
                }),
              o.filterProducts(),
              this.sort.sortProducts();
          }),
          e
        );
      })();
      const x = v;
      var w = t(89);
      n()(w.Z, { insert: "head", singleton: !1 }), w.Z.locals;
      var _ = t(483);
      n()(_.Z, { insert: "head", singleton: !1 }), _.Z.locals, new x().start();
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UG5OLEtBQUtvUixLQUFLRCxnQkFHbEIsRUFsS0EsR0FvS0EsVSxZQ3ZLYSxJQUFJLElBTEgsQ0FFZCxPQUFpQixPQUNqQixXQUFvQixJQU1MLFcsYUNKRixJQUFJLElBTEgsQ0FFZCxPQUFpQixPQUNqQixXQUFvQixJQU1MLFlDUkgsSUFBSSxHQUNad0MsUyIsInNvdXJjZXMiOlsid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXJkL2NhcmQuc2NzcyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY2FydC9jYXJ0LnNjc3MiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L2Zhdm9yaXRlcy9mYXZvcml0ZXMuc2NzcyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9jb21wb25lbnRzL3ZpZXcvcG9wdXAvcG9wdXAuc2NzcyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc2VhcmNoL3NlYXJjaC5zY3NzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zbGlkZXIvc2xpZGVyLnNjc3MiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvc2Nzcy9nbG9iYWwuc2NzcyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9zY3NzL25vcm1hbGl6ZS5zY3NzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9jb21wb25lbnRzL3ZpZXcvZmF2b3JpdGVzL2Zhdm9yaXRlcy5zY3NzPzVjZGMiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvcGljdHVyZXMtbGlzdC50cyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9jb21wb25lbnRzL3ZpZXcvZmF2b3JpdGVzL2Zhdm9yaXRlcy50cyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9jb21wb25lbnRzL3ZpZXcvZmlsdGVyL2ZpbHRlci50cyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9jb21wb25lbnRzL3ZpZXcvcG9wdXAvcG9wdXAuc2Nzcz9mOWVjIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9wb3B1cC9wb3B1cC50cyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc29ydC9zb3J0LnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXJkL2NhcmQuc2Nzcz9hNjU5Iiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXJkL2NhcmQudHMiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L3NlYXJjaC9zZWFyY2guc2Nzcz80NDI2Iiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zZWFyY2gvc2VhcmNoLnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zbGlkZXIvc2xpZGVyLnNjc3M/ZTlmYyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc2xpZGVyL3NsaWRlci50cyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY2FydC9jYXJ0LnNjc3M/ZTQ1OSIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY2FydC9jYXJ0LnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC50cyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9zY3NzL25vcm1hbGl6ZS5zY3NzPzIyMmIiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvc2Nzcy9nbG9iYWwuc2Nzcz84ODA0Iiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWluZ3phdCZmYW1pbHk9UmFsZXdheTp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2R1Y3Rze2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6ZmxleC1zdGFydDtmbGV4LXdyYXA6d3JhcDttYXJnaW4tdG9wOjEwcHg7cGFkZGluZzowIDIlO3RyYW5zaXRpb246LjNzfS5jYXJkX19pdGVte2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjEwcHg7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbi1ib3R0b206NSU7YmFja2dyb3VuZC1jb2xvcjojZmZmO3BhZGRpbmc6MiU7Ym94LXNoYWRvdzpyZ2JhKDAsMCwwLC4xNSkgMi40cHggMi40cHggMy4ycHg7Ym9yZGVyLXJhZGl1czoxcmVtO21pbi13aWR0aDoyMTBweH1AbWVkaWEobWF4LXdpZHRoOiA5MjBweCl7LmNhcmRfX2l0ZW17bWluLXdpZHRoOjI4MHB4fX1AbWVkaWEobWF4LXdpZHRoOiA4MjBweCl7LmNhcmRfX2l0ZW17ZmxleC1kaXJlY3Rpb246cm93O3dpZHRoOjgwJTttYXJnaW46MCBhdXRvIDUlfX1AbWVkaWEobWF4LXdpZHRoOiA1MjBweCl7LmNhcmRfX2l0ZW17d2lkdGg6OTUlfX0uY2FyZF9faXRlbS1kZXNjcmlwdGlvbntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6MTBweH0uY2FyZF9faXRlbS1kZXNjcmlwdGlvbiBwe21hcmdpbjowO3RleHQtYWxpZ246Y2VudGVyfUBtZWRpYShtYXgtd2lkdGg6IDY1MHB4KXsuY2FyZF9faXRlbS1kZXNjcmlwdGlvbnt3aWR0aDo4MCU7bWFyZ2luOjAgYXV0byA1JX19LmNhcmRfX2l0ZW0tdGl0bGV7Y29sb3I6IzBiMjU0NTtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjEuNXJlbTtmb250LWZhbWlseTpcXFwiUmFsZXdheVxcXCIsc2Fucy1zZXJpZn0uY2FyZF9faXRlbS1wcmljZXtmb250LXdlaWdodDo3MDB9LmNhcmRfX2l0ZW0tcHJpY2Vfc2FsZXt0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoO2ZvbnQtd2VpZ2h0OjQwMH0uY2FyZF9faXRlbV9zYWxlLXByaWNle2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojNzgwMDAwO2ZvbnQtc2l6ZTpsYXJnZXI7bWFyZ2luLWxlZnQ6NXB4fS5jYXJkX19pdGVtX3NhbGUtcGVyY2VudHtkaXNwbGF5OmlubGluZS1ibG9jaztiYWNrZ3JvdW5kLWNvbG9yOiNmY2EzMTE7Y29sb3I6I2ZmZjtsZXR0ZXItc3BhY2luZzoxcHg7Zm9udC1zaXplOnNtYWxsZXI7Ym9yZGVyLXJhZGl1czo1cHg7cGFkZGluZzozcHg7bWFyZ2luLWxlZnQ6NXB4fS5jYXJkX19pdGVtLWltZ3ttYXgtd2lkdGg6MTV2dzt0cmFuc2l0aW9uOi4zc30uY2FyZF9faXRlbS1pbWc6aG92ZXJ7Ym94LXNoYWRvdzpyZ2JhKDAsMCwwLC4xKSAwcHggMTBweCA1MHB4O2N1cnNvcjpwb2ludGVyfS5jYXJkX19pdGVtLWltZzphY3RpdmV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMnB4KX0uY2FyZF9faXRlbS1idG4tLWNhcnQsLnBvcHVwX19pdGVtLWJ0bi0tY2FydCwuY2FyZF9faXRlbS1idG4tLW1vcmUsLmNhcmRfX2l0ZW0tYnRuLS1jYXJ0e2JhY2tncm91bmQtY29sb3I6IzhkYTljNH0uY2FyZF9faXRlbS1idG4tLWNhcnQ6aG92ZXIsLnBvcHVwX19pdGVtLWJ0bi0tY2FydDpob3ZlciwuY2FyZF9faXRlbS1idG4tLW1vcmU6aG92ZXIsLmNhcmRfX2l0ZW0tYnRuLS1jYXJ0OmhvdmVye2JhY2tncm91bmQtY29sb3I6IzZiOTBiM31cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NhcmQvY2FyZC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBLFVBQ0ksWUFBQSxDQUNBLGtCQUFBLENBQ0EsNkJBQUEsQ0FDQSxzQkFBQSxDQUNBLGNBQUEsQ0FDQSxlQUFBLENBQ0EsWUFBQSxDQUNBLGNBQUEsQ0FHSixZQUNJLFlBQUEsQ0FDQSxxQkFBQSxDQUNBLFFBQUEsQ0FDQSxrQkFBQSxDQUNBLGdCQUFBLENBQ0EscUJBQUEsQ0FDQSxVQUFBLENBQ0EsNENBQUEsQ0FDQSxrQkFBQSxDQUNBLGVBQUEsQ0FFQSx5QkFaSixZQWFRLGVBQUEsQ0FBQSxDQUdKLHlCQWhCSixZQWlCUSxrQkFBQSxDQUNBLFNBQUEsQ0FDQSxnQkFBQSxDQUFBLENBR0oseUJBdEJKLFlBdUJRLFNBQUEsQ0FBQSxDQUlSLHdCQUNJLFlBQUEsQ0FDQSxxQkFBQSxDQUNBLGtCQUFBLENBQ0EsUUFBQSxDQUVBLDBCQUNJLFFBQUEsQ0FDQSxpQkFBQSxDQUdKLHlCQVhKLHdCQVlRLFNBQUEsQ0FDQSxnQkFBQSxDQUFBLENBSVIsa0JBQ0ksYUFBQSxDQUNBLGVBQUEsQ0FDQSxnQkFBQSxDQUNBLGdDQUFBLENBR0osa0JBQ0ksZUFBQSxDQUdKLHVCQUNJLDRCQUFBLENBQ0EsZUFBQSxDQUdKLHVCQUNJLGVBQUEsQ0FDQSxhQUFBLENBQ0EsZ0JBQUEsQ0FDQSxlQUFBLENBR0oseUJBQ0ksb0JBQUEsQ0FDQSx3QkFBQSxDQUNBLFVBQUEsQ0FDQSxrQkFBQSxDQUNBLGlCQUFBLENBQ0EsaUJBQUEsQ0FDQSxXQUFBLENBQ0EsZUFBQSxDQUdKLGdCQUNJLGNBQUEsQ0FDQSxjQUFBLENBRUEsc0JBQ0ksdUNBQUEsQ0FDQSxjQUFBLENBR0osdUJBQ0kseUJBQUEsQ0FJUix5RkFJSSx3QkFBQSxDQUVBLGlIQUNJLHdCQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1pbmd6YXQmZmFtaWx5PVJhbGV3YXk6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcblxcbi5wcm9kdWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZzogMCAyJTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNhcmRfX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAyLjRweCAyLjRweCAzLjJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgbWluLXdpZHRoOiAyMTBweDtcXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XFxuICAgICAgICBtaW4td2lkdGg6IDI4MHB4O1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBtYXJnaW46IDAgYXV0byA1JTtcXG4gICAgfVxcbiAgICAgICAgXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgfVxcbn1cXG5cXG4uY2FyZF9faXRlbS1kZXNjcmlwdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgcCB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNSU7XFxuICAgIH1cXG59XFxuXFxuLmNhcmRfX2l0ZW0tdGl0bGUge1xcbiAgICBjb2xvcjogIzBiMjU0NTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jYXJkX19pdGVtLXByaWNlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmNhcmRfX2l0ZW0tcHJpY2Vfc2FsZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uY2FyZF9faXRlbV9zYWxlLXByaWNlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6ICM3ODAwMDA7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4uY2FyZF9faXRlbV9zYWxlLXBlcmNlbnQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2EzMTE7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4uY2FyZF9faXRlbS1pbWcge1xcbiAgICBtYXgtd2lkdGg6IDE1dnc7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxMHB4IDUwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgJjphY3RpdmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxuICAgIH1cXG59XFxuXFxuLmNhcmRfX2l0ZW0tYnRuLS1jYXJ0LFxcbi5wb3B1cF9faXRlbS1idG4tLWNhcnQsXFxuLmNhcmRfX2l0ZW0tYnRuLS1tb3JlLFxcbi5jYXJkX19pdGVtLWJ0bi0tY2FydCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZGE5YzQ7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvcjogIzhkYTljNCwgJGFtb3VudDogMTAlKTtcXG4gICAgfVxcblxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY2FydC13YXJuaW5ne3Bvc2l0aW9uOmZpeGVkO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6cmdiYSg0MSw0MSw0MSwuNik7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5jYXJ0LXdhcm5pbmdfX2NvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cGFkZGluZzozJTtib3JkZXItcmFkaXVzOjVweH0uY2FydC13YXJuaW5nX19jb250YWluZXIgLmJ0bi1jcm9zc3t0b3A6NXB4O3JpZ2h0Oi0xMHB4fS5oaWRkZW57ZGlzcGxheTpub25lfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY2FydC9jYXJ0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FDSSxjQUFBLENBQ0ksS0FBQSxDQUNBLE9BQUEsQ0FDQSxRQUFBLENBQ0EsTUFBQSxDQUNBLDRCQUFBLENBQ0EsWUFBQSxDQUNBLGtCQUFBLENBQ0Esc0JBQUEsQ0FJUix5QkFDSSxpQkFBQSxDQUNBLHFCQUFBLENBQ0EsVUFBQSxDQUNBLGlCQUFBLENBRUEsb0NBQ0ksT0FBQSxDQUNBLFdBQUEsQ0FJUixRQUNJLFlBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNhcnQtd2FybmluZyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDEsIDQxLCA0MSwgMC42KTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcblxcbi5jYXJ0LXdhcm5pbmdfX2NvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMyU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgLmJ0bi1jcm9zcyB7XFxuICAgICAgICB0b3A6IDVweDtcXG4gICAgICAgIHJpZ2h0OiAtMTBweDtcXG4gICAgfVxcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZhdi1idG57YmFja2dyb3VuZDpub25lO2JvcmRlcjpub25lO3dpZHRoOjM1cHh9LmZhdi1idG46aG92ZXJ7Y3Vyc29yOnBvaW50ZXI7dHJhbnNmb3JtOnNrYWxlKDAuNyl9LmZhdi1idG4gaW1ne3dpZHRoOjEwMCV9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9mYXZvcml0ZXMvZmF2b3JpdGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsU0FDSSxlQUFBLENBQ0EsV0FBQSxDQUNBLFVBQUEsQ0FFQSxlQUNJLGNBQUEsQ0FDQSxvQkFBQSxDQUdKLGFBQ0ksVUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZmF2LWJ0biB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIFxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zZm9ybTogc2thbGUoMC43KTtcXG4gICAgfVxcblxcbiAgICBpbWd7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvc3ZnL3JlbW92ZS5zdmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucG9wdXBfX2l0ZW17cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7YmFja2dyb3VuZDpyZ2JhKDQxLDQxLDQxLC42KTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnBvcHVwX19pdGVtLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cGFkZGluZzoyJX1AbWVkaWEobWF4LXdpZHRoOiA3NTBweCl7LnBvcHVwX19pdGVtLWNvbnRhaW5lcntmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWF4LWhlaWdodDoxMDB2aH19LnBvcHVwX19pdGVtLWltZ3ttYXgtd2lkdGg6NTAlfUBtZWRpYShtYXgtd2lkdGg6IDc1MHB4KXsucG9wdXBfX2l0ZW0taW1ne21heC13aWR0aDo4MCV9fS5wb3B1cF9faXRlbS1kZXNjcmlwdGlvbntwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7d2lkdGg6MzAlO3BhZGRpbmc6MiV9QG1lZGlhKG1heC13aWR0aDogNzUwcHgpey5wb3B1cF9faXRlbS1kZXNjcmlwdGlvbnt3aWR0aDo5MCV9fS5wb3B1cF9faXRlbS1idG4tLWNhcnR7bWF4LXdpZHRoOm1heC1jb250ZW50O21heC1oZWlnaHQ6bWF4LWNvbnRlbnR9LnBvcHVwX19pdGVtLXRpdGxle2ZvbnQtc2l6ZToycmVtfS5wb3B1cF9faXRlbS1oZWFkZXJ7Zm9udC13ZWlnaHQ6NzAwfS5wb3B1cF9faXRlbS1oZWFkZXIgc3Bhbntmb250LXdlaWdodDo0MDB9LnBvcHVwX19pdGVtLXByaWNle2ZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6bGFyZ2VyfS5idG4tY3Jvc3N7YWxpZ24tc2VsZjpmbGV4LWVuZDtiYWNrZ3JvdW5kOm5vbmU7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXI6bm9uZTtoZWlnaHQ6NTJweDt3aWR0aDo1MnB4O3RvcDoyJTtyaWdodDowcHg7bWFyZ2luOmF1dG99LmJ0bi1jcm9zczpob3ZlcntjdXJzb3I6cG9pbnRlcn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy92aWV3L3BvcHVwL3BvcHVwLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsYUFDSSxjQUFBLENBQ0EsS0FBQSxDQUNBLE9BQUEsQ0FDQSxRQUFBLENBQ0EsTUFBQSxDQUNBLDRCQUFBLENBQ0EsWUFBQSxDQUNBLGtCQUFBLENBQ0Esc0JBQUEsQ0FHSix1QkFDSSxZQUFBLENBQ0Esa0JBQUEsQ0FDQSxrQkFBQSxDQUNBLDZCQUFBLENBQ0EscUJBQUEsQ0FDQSxVQUFBLENBRUEseUJBUkosdUJBU1cscUJBQUEsQ0FDQSxnQkFBQSxDQUFBLENBSVgsaUJBQ0ksYUFBQSxDQUNBLHlCQUZKLGlCQUdRLGFBQUEsQ0FBQSxDQUdSLHlCQUNJLGlCQUFBLENBQ0EscUJBQUEsQ0FDQSxTQUFBLENBQ0EsVUFBQSxDQUVBLHlCQU5KLHlCQU9RLFNBQUEsQ0FBQSxDQUlSLHVCQUNJLHFCQUFBLENBQ0Esc0JBQUEsQ0FHSixtQkFDSSxjQUFBLENBR0osb0JBQ0ksZUFBQSxDQUVBLHlCQUNJLGVBQUEsQ0FJUixtQkFDSSxlQUFBLENBQ0EsZ0JBQUEsQ0FHSixXQUNJLG1CQUFBLENBQ0EsZUFBQSxDQUNBLHdEQUFBLENBQ0EsMkJBQUEsQ0FDQSxpQkFBQSxDQUNBLFdBQUEsQ0FDQSxXQUFBLENBQ0EsVUFBQSxDQUNBLE1BQUEsQ0FDQSxTQUFBLENBQ0EsV0FBQSxDQUVBLGlCQUNJLGNBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBvcHVwX19pdGVtIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDEsIDQxLCA0MSwgMC42KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wb3B1cF9faXRlbS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDIlO1xcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIH1cXG59XFxuXFxuLnBvcHVwX19pdGVtLWltZyB7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgICAgIG1heC13aWR0aDogODAlO1xcbiAgICB9XFxufVxcbi5wb3B1cF9faXRlbS1kZXNjcmlwdGlvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgcGFkZGluZzogMiU7XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcbiAgICBcXG59XFxuLnBvcHVwX19pdGVtLWJ0bi0tY2FydCB7XFxuICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xcbn1cXG5cXG4ucG9wdXBfX2l0ZW0tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5wb3B1cF9faXRlbS1oZWFkZXIge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgICBzcGFuIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIH1cXG59XFxuXFxuLnBvcHVwX19pdGVtLXByaWNlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi5idG4tY3Jvc3Mge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi8uLi9hc3NldHMvc3ZnL3JlbW92ZS5zdmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogNTJweDtcXG4gICAgd2lkdGg6IDUycHg7XFxuICAgIHRvcDogMiU7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlYXJjaHtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOm5vd3JhcDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjEwcHg7bWluLXdpZHRoOjMwMHB4O3BhZGRpbmc6NXB4O2JvcmRlcjoxcHggc29saWQgIzAwMDtib3JkZXItcmFkaXVzOjEwcHh9QG1lZGlhKG1heC13aWR0aDogNzUwcHgpey5zZWFyY2h7bWluLXdpZHRoOjI1MHB4fX0uc2VhcmNoIGltZ3ttYXgtd2lkdGg6MjRweH0uc2VhcmNoLWlucHV0e2JvcmRlcjpub25lO3BhZGRpbmc6NXB4fUBtZWRpYShtYXgtd2lkdGg6IDc1MHB4KXsuc2VhcmNoLWlucHV0e21heC13aWR0aDoxNzBweH19LnNlYXJjaC1pbnB1dDpmb2N1c3tvdXRsaW5lOm5vbmV9LnNlYXJjaC1yZW1vdmU6aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9LmVycm9ye21hcmdpbi10b3A6MiU7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MnJlbTtmb250LXNpemU6MnJlbX1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy92aWV3L3NlYXJjaC9zZWFyY2guc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxRQUNJLFlBQUEsQ0FDQSxnQkFBQSxDQUNBLGtCQUFBLENBQ0EsUUFBQSxDQUNBLGVBQUEsQ0FDQSxXQUFBLENBQ0EscUJBQUEsQ0FDQSxrQkFBQSxDQUVBLHlCQVZKLFFBV1EsZUFBQSxDQUFBLENBR0osWUFDSSxjQUFBLENBS1IsY0FDSSxXQUFBLENBQ0EsV0FBQSxDQUVBLHlCQUpKLGNBS1ksZUFBQSxDQUFBLENBR1Isb0JBQ0ksWUFBQSxDQUtKLHFCQUNJLGNBQUEsQ0FJUixPQUNJLGFBQUEsQ0FDQSxpQkFBQSxDQUNBLGdCQUFBLENBQ0EsY0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2VhcmNoIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgICAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICB9XFxuXFxuICAgIGltZyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDI0cHg7XFxuICAgIH1cXG5cXG59XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE3MHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAmOmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuLnNlYXJjaC1yZW1vdmUge1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBtYXJnaW4tdG9wOiAyJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucHJpY2Utc2xpZGVyX19jb250YWluZXIsLnllYXItc2xpZGVyX19jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7cG9pbnRlci1ldmVudHM6bm9uZX1pbnB1dFt0eXBlPXJhbmdlXXtoZWlnaHQ6MmVtO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjB9LnByaWNlLXNsaWRlcl9fY29udGFpbmVyIC5zbGlkZXJfX2lucHV0LXNlY29uZCwueWVhci1zbGlkZXJfX2NvbnRhaW5lciAuc2xpZGVyX19pbnB1dC1zZWNvbmR7bWFyZ2luLXRvcDotMmVtfWlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYntwb2ludGVyLWV2ZW50czphbGx9aW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdGh1bWJ7cG9pbnRlci1ldmVudHM6YWxsfWlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdGh1bWJ7cG9pbnRlci1ldmVudHM6YWxsfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc2xpZGVyL3NsaWRlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlEQUVJLGlCQUFBLENBQ0EsbUJBQUEsQ0FHSixrQkFDSSxVQUFBLENBQ0EsYUFBQSxDQUNBLFFBQUEsQ0FHSiw2RkFFSSxlQUFBLENBR0osd0NBQ0ksa0JBQUEsQ0FHSixvQ0FDSSxrQkFBQSxDQUdKLDZCQUNJLGtCQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcmljZS1zbGlkZXJfX2NvbnRhaW5lcixcXG4ueWVhci1zbGlkZXJfX2NvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl0ge1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnByaWNlLXNsaWRlcl9fY29udGFpbmVyIC5zbGlkZXJfX2lucHV0LXNlY29uZCxcXG4ueWVhci1zbGlkZXJfX2NvbnRhaW5lciAuc2xpZGVyX19pbnB1dC1zZWNvbmQge1xcbiAgICBtYXJnaW4tdG9wOiAtMmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotbXMtdGh1bWIge1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NaW5nemF0JmZhbWlseT1SYWxld2F5OndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe2JveC1zaXppbmc6Ym9yZGVyLWJveDtsaW5lLWhlaWdodDoxLjVyZW19Ym9keXtmb250LWZhbWlseTpcXFwiTWluZ3phdFxcXCIsc2Fucy1zZXJpZjtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7anVzdGlmeS1jb250ZW50OmNlbnRlcn1oZWFkZXJ7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzEzMzE1Yzt3aWR0aDo5MCU7bWFyZ2luOjAgYXV0byA1JTtwYWRkaW5nOjIlO2xldHRlci1zcGFjaW5nOjRweDtib3gtc2hhZG93OnJnYmEoMTEsMzgsNzAsLjQpIDBweCA1cHgscmdiYSgxOSw0OSw5MiwuMykgMHB4IDEwcHgscmdiYSgxOSw2NCwxMTYsLjIpIDBweCAxNXB4LHJnYmEoMTQxLDE2OSwxOTYsLjMpIDBweCAyMHB4LHJnYmEoMTQxLDE2OSwxOTYsLjEpIDBweCAyNXB4fUBtZWRpYShtYXgtd2lkdGg6IDYyMHB4KXtoZWFkZXJ7ZmxleC1kaXJlY3Rpb246Y29sdW1ufX1oZWFkZXIgLmxvZ297ZGlzcGxheTpmbGV4O2dhcDoyMHB4O2FsaWduLWl0ZW1zOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9aGVhZGVyIC5sb2dvIGltZ3ttYXgtaGVpZ2h0OjEwMHB4fWhlYWRlciAubG9nbyBoMXtsaW5lLWhlaWdodDoyLjVyZW19QG1lZGlhKG1heC13aWR0aDogNzUwcHgpe2hlYWRlciAubG9nbyBoMXtmb250LXNpemU6MS41cmVtO2xpbmUtaGVpZ2h0OjJyZW19fS5jYXJ0IGltZ3t3aWR0aDozNXB4fWFzaWRle2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6MjAlO2p1c3RpZnktc2VsZjpmbGV4LXN0YXJ0fWFzaWRlIC5idG57bWFyZ2luLWJvdHRvbToxMHB4fUBtZWRpYShtYXgtd2lkdGg6IDgyMHB4KXthc2lkZXt3aWR0aDozMCV9fUBtZWRpYShtYXgtd2lkdGg6IDUyMHB4KXthc2lkZXtmbGV4LWRpcmVjdGlvbjpyb3c7d2lkdGg6OTAlfX0uYnRue2JvcmRlci1yYWRpdXM6LjVyZW07cGFkZGluZzo1JSAxMCU7d2lkdGg6bWF4LWNvbnRlbnQ7Y29sb3I6I2VlZjRlZDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Ym9yZGVyOm5vbmU7Ym94LXNoYWRvdzpyZ2JhKDAsMCwwLC4xKSAwcHggMHB4IDVweCAwcHgscmdiYSgwLDAsMCwuMSkgMHB4IDBweCAxcHggMHB4O3RyYW5zaXRpb246LjNzfS5idG46aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9LmJ0bjphY3RpdmV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNHB4KX0uYXNpZGUtYnV0dG9ue2JhY2tncm91bmQtY29sb3I6IzAwMzA0OX0uYXNpZGUtYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzAwMGUxNn1tYWlue2Rpc3BsYXk6ZmxleDttaW4taGVpZ2h0OjY4dmg7d2lkdGg6NzAlfUBtZWRpYShtYXgtd2lkdGg6IDgyMHB4KXttYWlue3dpZHRoOjYwJX19QG1lZGlhKG1heC13aWR0aDogNTIwcHgpe21haW57d2lkdGg6OTAlfX1mb290ZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtnYXA6NXB4O2ZsZXgtd3JhcDp3cmFwO3dpZHRoOjkwJTtoZWlnaHQ6MTAwcHg7bWFyZ2luOjAgYXV0bztmb250LXNpemU6MXJlbTtiYWNrZ3JvdW5kLWNvbG9yOiMxMzMxNWM7Y29sb3I6I2U1ZTVlNTtwYWRkaW5nOjElfWZvb3RlciBhe3RleHQtZGVjb3JhdGlvbjpub25lO2ZvbnQtc2l6ZToxLjJyZW07Y29sb3I6I2U1ZTVlNX1AbWVkaWEobWF4LXdpZHRoOiA2NTBweCl7Zm9vdGVye2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfX1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxFQUNJLHFCQUFBLENBQ0Esa0JBQUEsQ0FHSixLQUNJLGdDQUFBLENBQ0EsWUFBQSxDQUNBLGNBQUEsQ0FDQSxzQkFBQSxDQUlKLE9BQ0ksWUFBQSxDQUNBLDZCQUFBLENBQ0Esa0JBQUEsQ0FDQSxxQkFBQSxDQUNBLGFBQUEsQ0FDQSxTQUFBLENBQ0EsZ0JBQUEsQ0FDQSxVQUFBLENBQ0Esa0JBQUEsQ0FDQSx1SkFBQSxDQUVBLHlCQVpKLE9BYVkscUJBQUEsQ0FBQSxDQUdSLGFBQ0ksWUFBQSxDQUNBLFFBQUEsQ0FDQSxrQkFBQSxDQUNBLHdCQUFBLENBRUEsaUJBQ0csZ0JBQUEsQ0FHRixnQkFDRyxrQkFBQSxDQUVBLHlCQUhILGdCQUlPLGdCQUFBLENBQ0EsZ0JBQUEsQ0FBQSxDQVFoQixVQUNJLFVBQUEsQ0FHSixNQUNJLFlBQUEsQ0FDQSxxQkFBQSxDQUNBLFNBQUEsQ0FDQSx1QkFBQSxDQUVBLFdBQ0ksa0JBQUEsQ0FHSix5QkFWSixNQVdRLFNBQUEsQ0FBQSxDQUdKLHlCQWRKLE1BZVEsa0JBQUEsQ0FDQSxTQUFBLENBQUEsQ0FJUixLQUNJLG1CQUFBLENBQ0EsY0FBQSxDQUNBLGlCQUFBLENBQ0EsYUFBQSxDQUNBLHdCQUFBLENBQ0EsV0FBQSxDQUNBLHdFQUFBLENBQ0EsY0FBQSxDQUVBLFdBQ0ksY0FBQSxDQUdKLFlBQ0kseUJBQUEsQ0FLUixjQUNJLHdCQUFBLENBRUEsb0JBQ0ksd0JBQUEsQ0FJUixLQUNJLFlBQUEsQ0FDQSxlQUFBLENBQ0EsU0FBQSxDQUVJLHlCQUxSLEtBTVksU0FBQSxDQUFBLENBR0oseUJBVFIsS0FXWSxTQUFBLENBQUEsQ0FNWixPQUNJLFlBQUEsQ0FDQSxrQkFBQSxDQUNBLDZCQUFBLENBQ0EsT0FBQSxDQUNBLGNBQUEsQ0FDQSxTQUFBLENBQ0EsWUFBQSxDQUNBLGFBQUEsQ0FDQSxjQUFBLENBQ0Esd0JBQUEsQ0FDQSxhQUFBLENBQ0EsVUFBQSxDQUVBLFNBQ0ksb0JBQUEsQ0FDQSxnQkFBQSxDQUNBLGFBQUEsQ0FHSix5QkFwQkosT0FxQlEscUJBQUEsQ0FDQSxzQkFBQSxDQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1pbmd6YXQmZmFtaWx5PVJhbGV3YXk6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdNaW5nemF0Jywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgY29sb3I6ICMxMzMxNWM7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvIDUlO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgxMSwgMzgsIDcwLCAwLjQpIDBweCA1cHgsIHJnYmEoMTksIDQ5LCA5MiwgMC4zKSAwcHggMTBweCwgcmdiYSgxOSwgNjQsIDExNiwgMC4yKSAwcHggMTVweCwgcmdiYSgxNDEsIDE2OSwgMTk2LDAuMykgMHB4IDIwcHgsIHJnYmEoMTQxLCAxNjksIDE5NiwgMC4xKSAwcHggMjVweDtcXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KSB7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubG9nbyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XFxuICAgICAgICAgfVxcblxcbiAgICAgICAgIGgxIHtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMi41cmVtO1xcblxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgIH1cXG4gICAgfVxcbiAgICBcXG59XFxuXFxuLmNhcnQgaW1nIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxufVxcblxcbmFzaWRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcblxcbiAgICAuYnRuIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XFxuICAgICAgICB3aWR0aDogMzAlO1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgIH1cXG59XFxuXFxuLmJ0biB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgcGFkZGluZzogNSUgMTAlO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGNvbG9yOiAjZWVmNGVkO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMHB4IDVweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMHB4IDFweCAwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgICY6YWN0aXZlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbiAgICB9XFxuXFxufVxcblxcbi5hc2lkZS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzMDQ5O1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3I6ICMwMDMwNDksICRhbW91bnQ6IDEwJSk7XFxuICAgIH1cXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi1oZWlnaHQ6IDY4dmg7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIFxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XFxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICB9XFxufVxcblxcblxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMzE1YztcXG4gICAgY29sb3I6ICNlNWU1ZTU7XFxuICAgIHBhZGRpbmc6IDElO1xcblxcbiAgICBhIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgY29sb3I6I2U1ZTVlNSA7XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL2h0bWx7bGluZS1oZWlnaHQ6MS4xNTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJX1ib2R5e21hcmdpbjowfW1haW57ZGlzcGxheTpibG9ja31oMXtmb250LXNpemU6MmVtO21hcmdpbjouNjdlbSAwfWhye2JveC1zaXppbmc6Y29udGVudC1ib3g7aGVpZ2h0OjA7b3ZlcmZsb3c6dmlzaWJsZX1wcmV7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLG1vbm9zcGFjZTtmb250LXNpemU6MWVtfWF7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDApfWFiYnJbdGl0bGVde2JvcmRlci1ib3R0b206bm9uZTt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgZG90dGVkfWIsc3Ryb25ne2ZvbnQtd2VpZ2h0OmJvbGRlcn1jb2RlLGtiZCxzYW1we2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSxtb25vc3BhY2U7Zm9udC1zaXplOjFlbX1zbWFsbHtmb250LXNpemU6ODAlfXN1YixzdXB7Zm9udC1zaXplOjc1JTtsaW5lLWhlaWdodDowO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfXN1Yntib3R0b206LTAuMjVlbX1zdXB7dG9wOi0wLjVlbX1pbWd7Ym9yZGVyLXN0eWxlOm5vbmV9YnV0dG9uLGlucHV0LG9wdGdyb3VwLHNlbGVjdCx0ZXh0YXJlYXtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxMDAlO2xpbmUtaGVpZ2h0OjEuMTU7bWFyZ2luOjB9YnV0dG9uLGlucHV0e292ZXJmbG93OnZpc2libGV9YnV0dG9uLHNlbGVjdHt0ZXh0LXRyYW5zZm9ybTpub25lfWJ1dHRvbixbdHlwZT1idXR0b25dLFt0eXBlPXJlc2V0XSxbdHlwZT1zdWJtaXRdey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b259YnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyLXN0eWxlOm5vbmU7cGFkZGluZzowfWJ1dHRvbjotbW96LWZvY3VzcmluZyxbdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFt0eXBlPXJlc2V0XTotbW96LWZvY3VzcmluZyxbdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5ne291dGxpbmU6MXB4IGRvdHRlZCBCdXR0b25UZXh0fWZpZWxkc2V0e3BhZGRpbmc6LjM1ZW0gLjc1ZW0gLjYyNWVtfWxlZ2VuZHtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y29sb3I6aW5oZXJpdDtkaXNwbGF5OnRhYmxlO21heC13aWR0aDoxMDAlO3BhZGRpbmc6MDt3aGl0ZS1zcGFjZTpub3JtYWx9cHJvZ3Jlc3N7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9dGV4dGFyZWF7b3ZlcmZsb3c6YXV0b31bdHlwZT1jaGVja2JveF0sW3R5cGU9cmFkaW9de2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjB9W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9ue2hlaWdodDphdXRvfVt0eXBlPXNlYXJjaF17LXdlYmtpdC1hcHBlYXJhbmNlOnRleHRmaWVsZDtvdXRsaW5lLW9mZnNldDotMnB4fVt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9Ojotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9uO2ZvbnQ6aW5oZXJpdH1kZXRhaWxze2Rpc3BsYXk6YmxvY2t9c3VtbWFyeXtkaXNwbGF5Omxpc3QtaXRlbX10ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL25vcm1hbGl6ZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUFBLENBVUEsS0FDSSxnQkFBQSxDQUVBLDZCQUFBLENBV0osS0FDSSxRQUFBLENBT0osS0FDSSxhQUFBLENBUUosR0FDSSxhQUFBLENBQ0EsY0FBQSxDQVdKLEdBQ0ksc0JBQUEsQ0FFQSxRQUFBLENBRUEsZ0JBQUEsQ0FTSixJQUNJLCtCQUFBLENBRUEsYUFBQSxDQVdKLEVBQ0ksOEJBQUEsQ0FRSixZQUNJLGtCQUFBLENBRUEseUJBQUEsQ0FFQSxnQ0FBQSxDQVFKLFNBRUksa0JBQUEsQ0FRSixjQUdJLCtCQUFBLENBRUEsYUFBQSxDQVFKLE1BQ0ksYUFBQSxDQVFKLFFBRUksYUFBQSxDQUNBLGFBQUEsQ0FDQSxpQkFBQSxDQUNBLHVCQUFBLENBR0osSUFDSSxjQUFBLENBR0osSUFDSSxVQUFBLENBVUosSUFDSSxpQkFBQSxDQVdKLHNDQUtJLG1CQUFBLENBRUEsY0FBQSxDQUVBLGdCQUFBLENBRUEsUUFBQSxDQVNKLGFBR0ksZ0JBQUEsQ0FRSixjQUdJLG1CQUFBLENBT0osZ0RBSUkseUJBQUEsQ0FPSix3SEFJSSxpQkFBQSxDQUNBLFNBQUEsQ0FPSiw0R0FJSSw2QkFBQSxDQU9KLFNBQ0ksMEJBQUEsQ0FVSixPQUNJLHFCQUFBLENBRUEsYUFBQSxDQUVBLGFBQUEsQ0FFQSxjQUFBLENBRUEsU0FBQSxDQUVBLGtCQUFBLENBUUosU0FDSSx1QkFBQSxDQU9KLFNBQ0ksYUFBQSxDQVFKLDZCQUVJLHFCQUFBLENBRUEsU0FBQSxDQVFKLGtGQUVJLFdBQUEsQ0FRSixjQUNJLDRCQUFBLENBRUEsbUJBQUEsQ0FRSix5Q0FDSSx1QkFBQSxDQVFKLDZCQUNJLHlCQUFBLENBRUEsWUFBQSxDQVdKLFFBQ0ksYUFBQSxDQU9KLFFBQ0ksaUJBQUEsQ0FVSixTQUNJLFlBQUEsQ0FPSixTQUNJLFlBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAvKiAxICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAvKiAxICovXFxuICAgIGhlaWdodDogMDtcXG4gICAgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIC8qIDEgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiAxICovXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAvKiAyICovXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICAvKiAxICovXFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiAzICovXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gICAgLyogMSAqL1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mYXZvcml0ZXMuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IFBpY3R1cmUgfSBmcm9tICcuL3BpY3R1cmUuaW50ZWZhY2UnO1xuXG5leHBvcnQgY29uc3QgcGljdHVyZXNMaXN0OiBQaWN0dXJlW10gPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ0JhbmFuYScsXG4gICAgICAgIHllYXI6IDIwMjIsXG4gICAgICAgIHByaWNlOiAxMDAsXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcbiAgICAgICAgYnJ1c2g6ICdvaWwnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0JhbmFuYSBwYWludGVkIHdpdGggb2lsIGJydXNoJyxcbiAgICAgICAgYW1vdW50OiAxLFxuICAgICAgICBjb2xvcjogJ3llbGxvdycsXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9iYW5hbmEtb2lsLWJydXNoLmpwZycsXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnQ2F0JyxcbiAgICAgICAgeWVhcjogMjAyMSxcbiAgICAgICAgcHJpY2U6IDEwNSxcbiAgICAgICAgYXV0aG9yOiAnVmFsaWFudHNpbmEnLFxuICAgICAgICBicnVzaDogJ3BlbmNpbCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnR3JleSBjYXQgc21pbGVzIHlvdScsXG4gICAgICAgIGFtb3VudDogMTAsXG4gICAgICAgIGNvbG9yOiAnZ3JleScsXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9jYXQtcGVuY2lsLmpwZycsXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnVHJpYW5nbGVzJyxcbiAgICAgICAgeWVhcjogMjAyMSxcbiAgICAgICAgcHJpY2U6IDc3LFxuICAgICAgICBhdXRob3I6ICdWYWxpYW50c2luYScsXG4gICAgICAgIGJydXNoOiAnd2F0ZXJjb2xvcicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQmx1ZSB0cmlhbmdsZXMgZmlsbGVkIHdpdGggd2F0ZXJjb2xvcicsXG4gICAgICAgIGFtb3VudDogMyxcbiAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3RyaWFuZ2xlcy1ibHVlLXdhdGVyY29sb3IuanBnJyxcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdDaHJpc3RtYXMgdHJlZScsXG4gICAgICAgIHllYXI6IDIwMjMsXG4gICAgICAgIHByaWNlOiA3MCxcbiAgICAgICAgYXV0aG9yOiAnVmFzaWxpc2EnLFxuICAgICAgICBicnVzaDogJ29pbCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSG9saWRheSBpcyBjb21pbmchIENocmlzdG1hcyB0cmVlIGZvciB5b3UgSE8tSE8tSE8nLFxuICAgICAgICBhbW91bnQ6IDIsXG4gICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvY2hyaXN0bWFzLXRyZWUtb2lsLWJydXNoLmpwZycsXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnQ2xvdWQnLFxuICAgICAgICB5ZWFyOiAyMDIyLFxuICAgICAgICBwcmljZTogNTAsXG4gICAgICAgIHNhbGVQcmljZTogNDAsXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcbiAgICAgICAgYnJ1c2g6ICdwZW5jaWwnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgbGl0dGxlIGNsb3VkIGZvciB3YXJtIGRheXMnLFxuICAgICAgICBhbW91bnQ6IDE1LFxuICAgICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvY2xvdWQtcGVuY2lsLmpwZycsXG4gICAgICAgIG9uc2FsZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdGaXNoJyxcbiAgICAgICAgeWVhcjogMjAxOCxcbiAgICAgICAgcHJpY2U6IDEwLFxuICAgICAgICBhdXRob3I6ICdWYXNpbGlzYScsXG4gICAgICAgIGJydXNoOiAnY3JheW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgYmVzdCBxdWlldCBwZXQgb3IganVzdCBjb29raWUsIGFzIHlvdSB3aXNoJyxcbiAgICAgICAgYW1vdW50OiAzLFxuICAgICAgICBjb2xvcjogJ29yYW5nZScsXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9maXNoLWNyYXlvbi5qcGcnLFxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0Zsb3dlcicsXG4gICAgICAgIHllYXI6IDIwMTgsXG4gICAgICAgIHByaWNlOiA1LFxuICAgICAgICBhdXRob3I6ICdWYWxpYW50c2luYScsXG4gICAgICAgIGJydXNoOiAncGVuY2lsJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdZb3VyIHdpbnRlciBib3VxdWV0JyxcbiAgICAgICAgYW1vdW50OiA5LFxuICAgICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvZmxvd2VyLXBlbmNpbC5qcGcnLFxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0dyYXBlJyxcbiAgICAgICAgeWVhcjogMjAxOSxcbiAgICAgICAgcHJpY2U6IDIwMCxcbiAgICAgICAgc2FsZVByaWNlOiAxMzAsXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcbiAgICAgICAgYnJ1c2g6ICd3YXRlcmNvbG9yJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdKdXN0IGRlbGljaW91cycsXG4gICAgICAgIGFtb3VudDogMSxcbiAgICAgICAgY29sb3I6ICdwdXJwbGUnLFxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvZ3JhcGUtd2F0ZXJjb2xvci1icnVzaC5qcGcnLFxuICAgICAgICBvbnNhbGU6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnU3RhcnMnLFxuICAgICAgICB5ZWFyOiAyMDE4LFxuICAgICAgICBwcmljZTogOTAsXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcbiAgICAgICAgYnJ1c2g6ICdwZW5jaWwnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1llbGxvdyBzdGFycycsXG4gICAgICAgIGFtb3VudDogMyxcbiAgICAgICAgY29sb3I6ICd5ZWxsb3cnLFxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvc3RhcnMteWVsbG93LXBlbmNpbC5qcGcnLFxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0dyYXNzJyxcbiAgICAgICAgeWVhcjogMjAyMixcbiAgICAgICAgcHJpY2U6IDczLFxuICAgICAgICBhdXRob3I6ICdWYWxpYW50c2luYScsXG4gICAgICAgIGJydXNoOiAncGVuY2lsJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdTbWVsbHMgbGlrZSBzdW1tZXInLFxuICAgICAgICBhbW91bnQ6IDQsXG4gICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvZ3Jhc3MtcGVuY2lsLmpwZycsXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnSGVhcnQnLFxuICAgICAgICB5ZWFyOiAyMDIwLFxuICAgICAgICBwcmljZTogNzAsXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcbiAgICAgICAgYnJ1c2g6ICdhaXJicnVzaCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQWxsIHlvdSBuZWVkIGlzIGxvdmUnLFxuICAgICAgICBhbW91bnQ6IDgsXG4gICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL2hlYXJ0LWFpcmJydXNoLmpwZycsXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnUGVudGFnb24nLFxuICAgICAgICB5ZWFyOiAyMDEwLFxuICAgICAgICBwcmljZTogODAsXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcbiAgICAgICAgYnJ1c2g6ICdwZW5jaWwnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0dyZWVuIHBlbnRhZ29uJyxcbiAgICAgICAgYW1vdW50OiAzLFxuICAgICAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3BlbnRhZ29uLWdyZWVuLXBlbmNpbC5qcGcnLFxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ09yYW5nZScsXG4gICAgICAgIHllYXI6IDIwMTksXG4gICAgICAgIHByaWNlOiA0NCxcbiAgICAgICAgc2FsZVByaWNlOiA0MCxcbiAgICAgICAgYXV0aG9yOiAnVmFzaWxpc2EnLFxuICAgICAgICBicnVzaDogJ21hcmtlcicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnT3JhbmdlIGxpa2Ugb3JhbmdlJyxcbiAgICAgICAgYW1vdW50OiA4LFxuICAgICAgICBjb2xvcjogJ29yYW5nZScsXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9vcmFuZ2UtbWFya2VyLmpwZycsXG4gICAgICAgIG9uc2FsZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdQaWcnLFxuICAgICAgICB5ZWFyOiAyMDE2LFxuICAgICAgICBwcmljZTogMTMsXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcbiAgICAgICAgYnJ1c2g6ICdtYXJrZXInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ09pbmsgb2luaycsXG4gICAgICAgIGFtb3VudDogMyxcbiAgICAgICAgY29sb3I6ICdyb3NlJyxcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3BpZy1tYXJrZXIuanBnJyxcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdSYWluYm93JyxcbiAgICAgICAgeWVhcjogMjAyMCxcbiAgICAgICAgcHJpY2U6IDE4MCxcbiAgICAgICAgc2FsZVByaWNlOiAxMDAsXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcbiAgICAgICAgYnJ1c2g6ICdjcmF5b24nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1JPWUdCSVYnLFxuICAgICAgICBhbW91bnQ6IDEsXG4gICAgICAgIGNvbG9yOiAncmFpbmJvdycsXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9yYWluYm93LWNyYXlvbi5qcGcnLFxuICAgICAgICBvbnNhbGU6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnU3RhcicsXG4gICAgICAgIHllYXI6IDIwMjEsXG4gICAgICAgIHByaWNlOiAyOSxcbiAgICAgICAgYXV0aG9yOiAnVmFzaWxpc2EnLFxuICAgICAgICBicnVzaDogJ3BlbmNpbCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2hpbmUgYnJpZ2h0JyxcbiAgICAgICAgYW1vdW50OiAxMyxcbiAgICAgICAgY29sb3I6ICd5ZWxsb3cnLFxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvc3Rhci1wZW5jaWwuanBnJyxcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdTdW4nLFxuICAgICAgICB5ZWFyOiAyMDE5LFxuICAgICAgICBwcmljZTogMzAsXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcbiAgICAgICAgYnJ1c2g6ICdjcmF5b24nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0ZvciByYWlueSBkYXlzJyxcbiAgICAgICAgYW1vdW50OiAzMCxcbiAgICAgICAgY29sb3I6ICd5ZWxsb3cnLFxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvc3VuLWNyYXlvbi5qcGcnLFxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1dhdGVybWVsb24nLFxuICAgICAgICB5ZWFyOiAyMDIyLFxuICAgICAgICBwcmljZTogOTAsXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcbiAgICAgICAgYnJ1c2g6ICdtYXJrZXInLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJZb3UgY2FuJ3QganVzdCBzdG9wXCIsXG4gICAgICAgIGFtb3VudDogMTIsXG4gICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3dhdGVybWVsb24tbWFya2VyLmpwZycsXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnRG9nJyxcbiAgICAgICAgeWVhcjogMjAxNSxcbiAgICAgICAgcHJpY2U6IDEwMCxcbiAgICAgICAgc2FsZVByaWNlOiA5NSxcbiAgICAgICAgYXV0aG9yOiAnVmVyYW5pa2EnLFxuICAgICAgICBicnVzaDogJ3dhdGVyY29sb3InLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdXIgYmVzdCBmcmllbmQnLFxuICAgICAgICBhbW91bnQ6IDEsXG4gICAgICAgIGNvbG9yOiAnZ3JleScsXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9kb2ctd2F0ZXJjb2xvci1icnVzaC5qcGcnLFxuICAgICAgICBvbnNhbGU6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnUm9ja2V0JyxcbiAgICAgICAgeWVhcjogMjAxNixcbiAgICAgICAgcHJpY2U6IDIwMCxcbiAgICAgICAgc2FsZVByaWNlOiAxODAsXG4gICAgICAgIGF1dGhvcjogJ1ZlcmFuaWthJyxcbiAgICAgICAgYnJ1c2g6ICdicnVzaCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVG8gdGhlIG1vb24nLFxuICAgICAgICBhbW91bnQ6IDE1LFxuICAgICAgICBjb2xvcjogJ2dyZXknLFxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvcm9ja2V0LWJydXNoLmpwZycsXG4gICAgICAgIG9uc2FsZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdTYXR1cm4nLFxuICAgICAgICB5ZWFyOiAyMDE2LFxuICAgICAgICBwcmljZTogMTAwLFxuICAgICAgICBhdXRob3I6ICdWZXJhbmlrYScsXG4gICAgICAgIGJydXNoOiAnbWFya2VyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdKdXN0IHRvbyBmYXIgYXdheScsXG4gICAgICAgIGFtb3VudDogNSxcbiAgICAgICAgY29sb3I6ICdicm93bicsXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9zYXR1cm4tbWFya2VyLmpwZycsXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnU25haWwnLFxuICAgICAgICB5ZWFyOiAyMDE3LFxuICAgICAgICBwcmljZTogMTAyLFxuICAgICAgICBhdXRob3I6ICdWZXJhbmlrYScsXG4gICAgICAgIGJydXNoOiAnb2lsJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdTbG8tby1vLW8tb3cnLFxuICAgICAgICBhbW91bnQ6IDE1LFxuICAgICAgICBjb2xvcjogJ2Jyb3duJyxcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3NuYWlsLW9pbC1icnVzaC5qcGcnLFxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ092YWwnLFxuICAgICAgICB5ZWFyOiAyMDEwLFxuICAgICAgICBwcmljZTogODQsXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcbiAgICAgICAgYnJ1c2g6ICdvaWwnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1JlZCBvdmFsJyxcbiAgICAgICAgYW1vdW50OiAzLFxuICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9vdmFsLXJlZC1vaWwuanBnJyxcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdUcmVlJyxcbiAgICAgICAgeWVhcjogMjAxOCxcbiAgICAgICAgcHJpY2U6IDUyLFxuICAgICAgICBhdXRob3I6ICdWZXJhbmlrYScsXG4gICAgICAgIGJydXNoOiAnY3JheW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdQZXJmZWN0IHNoYWRvdyBhbmQgYWlyJyxcbiAgICAgICAgYW1vdW50OiAxNSxcbiAgICAgICAgY29sb3I6ICdncmVlbicsXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy90cmVlLWNyYXlvbi5qcGcnLFxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1NxdWFyZXMnLFxuICAgICAgICB5ZWFyOiAyMDEyLFxuICAgICAgICBwcmljZTogNDUsXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcbiAgICAgICAgYnJ1c2g6ICdjcmF5b24nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0JsYWNrIHNxdWFyZXMnLFxuICAgICAgICBhbW91bnQ6IDMsXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvc3F1YXJlcy1ibGFjay1jcmF5b24uanBnJyxcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcbiAgICB9LFxuXTtcbiIsImltcG9ydCBDYXJkIGZyb20gJy4uL2NhcmQvY2FyZCc7XG5pbXBvcnQgJy4vZmF2b3JpdGVzLnNjc3MnO1xuaW1wb3J0IHsgcGljdHVyZXNMaXN0IH0gZnJvbSAnLi4vLi4vLi4vcGljdHVyZXMtbGlzdCc7XG5cbmNsYXNzIEZhdm9yaXRlcyB7XG4gICAgcHVibGljIHRvZ2dsZShlOiBFdmVudCkge1xuICAgICAgICBjb25zdCBmYXZTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlcycpO1xuICAgICAgICBsZXQgcHJldlZhbHVlOiBzdHJpbmdbXSA9IGZhdlN0b3JhZ2UgPyBmYXZTdG9yYWdlLnNwbGl0KCctJykgOiBbXTtcblxuICAgICAgICBsZXQgaXRlbVRpdGxlOiBzdHJpbmc7XG4gICAgICAgIGlmIChlLnRhcmdldCkge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRUaXRsZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2l0ZW0tdGl0bGUnKTtcblxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRUaXRsZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtVGl0bGUgPSB0YXJnZXRUaXRsZS5pbm5lckhUTUwudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZWYWx1ZS5pbmNsdWRlcyhpdGVtVGl0bGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2VmFsdWUuc3BsaWNlKHByZXZWYWx1ZS5pbmRleE9mKGl0ZW1UaXRsZSksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmZpbHRlcnM/LnJlcGxhY2UoJy1mYXZvcml0ZScsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZWYWx1ZS5wdXNoKGl0ZW1UaXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuZmlsdGVycyArPSAnLWZhdm9yaXRlJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2b3JpdGVzJywgcHJldlZhbHVlLmpvaW4oJy0nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdHNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RzJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgICAgICBwcm9kdWN0c1dyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoKTtcbiAgICAgICAgICAgIGNhcmQuZHJhdyhwaWN0dXJlc0xpc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrRmF2KHRpdGxlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZmF2U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKTtcbiAgICAgICAgbGV0IHByZXZWYWx1ZTogc3RyaW5nW10gPSBmYXZTdG9yYWdlID8gZmF2U3RvcmFnZS5zcGxpdCgnLScpIDogW107XG4gICAgICAgIGlmIChwcmV2VmFsdWUuaW5jbHVkZXModGl0bGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVzO1xuIiwiaW1wb3J0IHsgcGljdHVyZXNMaXN0IH0gZnJvbSAnLi4vLi4vLi4vcGljdHVyZXMtbGlzdCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jYXJkL2NhcmQnO1xuaW1wb3J0IEZhdm9yaXRlcyBmcm9tICcuLi9mYXZvcml0ZXMvZmF2b3JpdGVzJztcblxuY2xhc3MgRmlsdGVyIHtcbiAgICBhbGxQcm9kdWN0czogRWxlbWVudFtdO1xuICAgIGZpbHRlcmVkUHJvZHVjdHM6IEVsZW1lbnRbXTtcbiAgICBmYXZvcml0ZXM6IEZhdm9yaXRlcztcbiAgICBwcm9kdWN0c1dyYXBwZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIGNhcmQ6IENhcmQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hbGxQcm9kdWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2l0ZW0nKSk7XG4gICAgICAgIHRoaXMuZmlsdGVyZWRQcm9kdWN0cyA9IFtdO1xuICAgICAgICB0aGlzLmZhdm9yaXRlcyA9IG5ldyBGYXZvcml0ZXMoKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0c1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgdGhpcy5jYXJkID0gbmV3IENhcmQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlRmlsdGVyKGZpbHRlcjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlsdGVycycpO1xuXG4gICAgICAgIGlmIChmaWx0ZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJzQXJyID0gZmlsdGVycy5zcGxpdCgnLScpO1xuICAgICAgICAgICAgaWYgKGZpbHRlci5zdGFydHNXaXRoKCdjb2xvcicpIHx8IGZpbHRlci5zdGFydHNXaXRoKCdicnVzaCcpIHx8IGZpbHRlci5zdGFydHNXaXRoKCdhdXRob3InKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlclRvUmVtb3ZlID0gZmlsdGVyLnNwbGl0KCcqJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnRmlsdGVyID0gbmV3IFJlZ0V4cChgXiR7ZmlsdGVyVG9SZW1vdmVbMF19YCk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbmQgaW4gZmlsdGVyc0Fycikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVnRmlsdGVyLnRlc3QoZmlsdGVyc0FycltpbmRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlc2VudEZpbHRlciA9IGZpbHRlcnNBcnJbaW5kXS5zcGxpdCgnKicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXNlbnRGaWx0ZXIubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbnRGaWx0ZXIuc3BsaWNlKHByZXNlbnRGaWx0ZXIuaW5kZXhPZihmaWx0ZXJUb1JlbW92ZVsxXSksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnNBcnJbaW5kXSA9IHByZXNlbnRGaWx0ZXIuam9pbignKicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzQXJyLnNwbGljZSgraW5kLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnRmlsdGVyID0gbmV3IFJlZ0V4cChgXiR7ZmlsdGVyfWApO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5kIGluIGZpbHRlcnNBcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ0ZpbHRlci50ZXN0KGZpbHRlcnNBcnJbaW5kXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnNBcnIuc3BsaWNlKCtpbmQsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbHRlcnMnLCBmaWx0ZXJzQXJyLmpvaW4oJy0nKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZmlsdGVyUHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcnNTdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlsdGVycycpO1xuICAgICAgICBsZXQgZmlsdGVyc0Fycjogc3RyaW5nW107XG4gICAgICAgIGlmIChmaWx0ZXJzU3RyKSB7XG4gICAgICAgICAgICBmaWx0ZXJzQXJyID0gZmlsdGVyc1N0ci5zcGxpdCgnLScpO1xuXG4gICAgICAgICAgICBpZiAoZmlsdGVyc0Fyci5sZW5ndGggPT09IDAgfHwgZmlsdGVyc0FyclswXSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmQuZHJhdyhwaWN0dXJlc0xpc3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJzQXJyLmZvckVhY2goKGZpbHRlcjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIuc3RhcnRzV2l0aCgncHJpY2UnKSB8fCBmaWx0ZXIuc3RhcnRzV2l0aCgneWVhcicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5UHJpY2VBbmRZZWFyKGZpbHRlcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLnN0YXJ0c1dpdGgoJ3NhbGUnKSB8fCBmaWx0ZXIuc3RhcnRzV2l0aCgnZmF2b3JpdGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeVNhbGVBbmRGYXZvcml0ZShmaWx0ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeVByb3BlcnR5KGZpbHRlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhd1Byb2R1Y3RzKCk7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHNXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0IG9mIHRoaXMuYWxsUHJvZHVjdHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzV3JhcHBlci5hcHBlbmRDaGlsZChwcm9kdWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZmlsdGVyQnlQcmljZUFuZFllYXIoZmlsdGVyOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2R1Y3RzID0gdGhpcy5maWx0ZXJlZFByb2R1Y3RzLmxlbmd0aCA+PSAxID8gWy4uLnRoaXMuZmlsdGVyZWRQcm9kdWN0c10gOiBbLi4udGhpcy5hbGxQcm9kdWN0c107XG4gICAgICAgIGNvbnN0IHJhbmdlQXJyID0gZmlsdGVyLnNwbGl0KCcqJyk7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGAuJHtyYW5nZUFyclswXX0tc2xpZGVyYDtcblxuICAgICAgICBjb25zdCBuZXdGaWx0ZXJlZDogRWxlbWVudFtdID0gY3VycmVudFByb2R1Y3RzLnJlZHVjZSgoZmlsdGVyZWQ6IEVsZW1lbnRbXSwgaXRlbTogRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbVZhbHVlID0gaXRlbS5xdWVyeVNlbGVjdG9yKGAuY2FyZF9faXRlbS0ke3JhbmdlQXJyWzBdfWApO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGl0ZW1WYWx1ZSAmJlxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGl0ZW1WYWx1ZS5pbm5lckhUTUwpID49ICtyYW5nZUFyclsxXSAmJlxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGl0ZW1WYWx1ZS5pbm5lckhUTUwpIDw9ICtyYW5nZUFyclsyXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWQucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgICAgICAgfSwgW10pO1xuICAgICAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSBbLi4ubmV3RmlsdGVyZWRdO1xuICAgICAgICBjb25zdCBzbGlkZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzTmFtZSkpIGFzIEhUTUxJbnB1dEVsZW1lbnRbXTtcblxuICAgICAgICBpZiAoc2xpZGVycykge1xuICAgICAgICAgICAgc2xpZGVyc1swXS52YWx1ZSA9IHJhbmdlQXJyWzFdO1xuICAgICAgICAgICAgc2xpZGVyc1sxXS52YWx1ZSA9IHJhbmdlQXJyWzJdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNsaWRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7Y2xhc3NOYW1lfV9fY29udGFpbmVyYCk7XG4gICAgICAgIGlmIChzbGlkZXJDb250YWluZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0RnJvbSA9IHNsaWRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZnJvbScpO1xuICAgICAgICAgICAgY29uc3QgZW5kV2l0aCA9IHNsaWRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudG8nKTtcbiAgICAgICAgICAgIGlmIChzdGFydEZyb20gJiYgZW5kV2l0aCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0RnJvbS5pbm5lckhUTUwgPSBzbGlkZXJzWzBdLnZhbHVlO1xuICAgICAgICAgICAgICAgIGVuZFdpdGguaW5uZXJIVE1MID0gc2xpZGVyc1sxXS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZmlsdGVyQnlTYWxlQW5kRmF2b3JpdGUoZmlsdGVyOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2R1Y3RzID0gdGhpcy5maWx0ZXJlZFByb2R1Y3RzLmxlbmd0aCA+PSAxID8gWy4uLnRoaXMuZmlsdGVyZWRQcm9kdWN0c10gOiBbLi4udGhpcy5hbGxQcm9kdWN0c107XG4gICAgICAgIGNvbnN0IG5ld0ZpbHRlcmVkOiBFbGVtZW50W10gPSBbXTtcblxuICAgICAgICBjb25zdCBmaWx0ZXJDbGFzcyA9IGZpbHRlciA9PT0gJ3NhbGUnID8gJy5vbnNhbGUnIDogJy5pc2Zhdm9yaXRlJztcbiAgICAgICAgY29uc3QgZmlsdGVyQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZpbHRlckNsYXNzKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBpZiAoZmlsdGVyQ2hlY2tib3gpIGZpbHRlckNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiBjdXJyZW50UHJvZHVjdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RFbGVtZW50ID0gcHJvZHVjdCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RQcm9wZXJ0aWVzID0gcHJvZHVjdEVsZW1lbnQuZGF0YXNldC5maWx0ZXJzO1xuXG4gICAgICAgICAgICBsZXQgcHJvZHVjdFByb3BlcnRpZXNBcnI6IHN0cmluZ1tdO1xuICAgICAgICAgICAgaWYgKHByb2R1Y3RQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFByb3BlcnRpZXNBcnIgPSBwcm9kdWN0UHJvcGVydGllcy5zcGxpdCgnLScpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0UHJvcGVydGllc0Fyci5pbmNsdWRlcyhmaWx0ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ZpbHRlcmVkLnB1c2gocHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlsdGVyZWRQcm9kdWN0cyA9IFsuLi5uZXdGaWx0ZXJlZF07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaWx0ZXJCeVByb3BlcnR5KGZpbHRlcjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9kdWN0cyA9IHRoaXMuZmlsdGVyZWRQcm9kdWN0cy5sZW5ndGggPj0gMSA/IFsuLi50aGlzLmZpbHRlcmVkUHJvZHVjdHNdIDogWy4uLnRoaXMuYWxsUHJvZHVjdHNdO1xuICAgICAgICBjb25zdCBuZXdGaWx0ZXJlZDogRWxlbWVudFtdID0gW107XG5cbiAgICAgICAgY29uc3QgZmlsdGVyQXJyID0gZmlsdGVyLnNwbGl0KCcqJyk7XG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSBmaWx0ZXJBcnIuc2xpY2UoMSk7XG5cbiAgICAgICAgZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94RmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZmlsdGVyfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3hGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBjaGVja2JveEZpbHRlci5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0IG9mIGN1cnJlbnRQcm9kdWN0cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RFbGVtZW50ID0gcHJvZHVjdCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0UHJvcGVydGllcyA9IHByb2R1Y3RFbGVtZW50LmRhdGFzZXQuZmlsdGVycztcblxuICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0UHJvcGVydGllc0Fycjogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgaWYgKHByb2R1Y3RQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQcm9wZXJ0aWVzQXJyID0gcHJvZHVjdFByb3BlcnRpZXMuc3BsaXQoJy0nKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvZHVjdFByb3BlcnRpZXNBcnIuaW5jbHVkZXMoZmlsdGVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RmlsdGVyZWQucHVzaChwcm9kdWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmlsdGVyZWRQcm9kdWN0cyA9IFsuLi5uZXdGaWx0ZXJlZF07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmF3UHJvZHVjdHMoKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHNXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAodGhpcy5maWx0ZXJlZFByb2R1Y3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0IG9mIHRoaXMuZmlsdGVyZWRQcm9kdWN0cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RUaXRsZUVMID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbS10aXRsZScpO1xuICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0VGl0bGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBpZiAocHJvZHVjdFRpdGxlRUwpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlID0gcHJvZHVjdFRpdGxlRUwuaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzRmF2OiBib29sZWFuID0gdGhpcy5mYXZvcml0ZXMuY2hlY2tGYXYocHJvZHVjdFRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmF2QnRuID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcuZmF2LWJ0biBpbWcnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNGYXYgJiYgZmF2QnRuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmYXZCdG4uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vLi4vLi4vYXNzZXRzL3N2Zy9saWtlLWJsYWNrLnN2ZycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKHByb2R1Y3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS5pbm5lckhUTUwgPSAnU29ycnksIG5vdGhpbmcgY291bGQgYmUgZm91bmQuIFlvdSBjYW4gdHJ5IGFub3RoZXIgc2VhcmNoIHJlcXVlc3QuJztcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBwaWN0dXJlc0xpc3QgfSBmcm9tICcuLi8uLi8uLi9waWN0dXJlcy1saXN0JztcbmltcG9ydCAnLi9wb3B1cC5zY3NzJztcblxuY2xhc3MgUG9wdXAge1xuICAgIHB1YmxpYyBjcmVhdGVQb3B1cCA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaGknKTtcblxuICAgICAgICBjb25zdCBwcm9kdWN0SW1nID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0SW1nLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGlmIChwcm9kdWN0KSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0VGl0bGVFbCA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLmNhcmRfX2l0ZW0tdGl0bGUnKTtcblxuICAgICAgICAgICAgbGV0IHByb2R1Y3RUaXRsZTogc3RyaW5nO1xuICAgICAgICAgICAgaWYgKHByb2R1Y3RUaXRsZUVsKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlID0gcHJvZHVjdFRpdGxlRWwuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcGljdHVyZSA9IHBpY3R1cmVzTGlzdC5maWx0ZXIoKHBpY3R1cmUpID0+IHBpY3R1cmUudGl0bGUgPT09IHByb2R1Y3RUaXRsZSlbMF07XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3B1cFRlbXA6IEhUTUxUZW1wbGF0ZUVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwVGVtcCcpO1xuICAgICAgICAgICAgICAgIGlmIChwb3B1cFRlbXApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXBDbG9uZSA9IHBvcHVwVGVtcC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwQ2xvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwVGl0bGUgPSBwb3B1cENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faXRlbS10aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwVGl0bGUpIHBvcHVwVGl0bGUudGV4dENvbnRlbnQgPSBwaWN0dXJlLnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cEltZyA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLnBvcHVwX19pdGVtLWltZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwSW1nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBwaWN0dXJlLnVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBwaWN0dXJlLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwWWVhciA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLnBvcHVwX19pdGVtLXllYXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3B1cFllYXIpIHBvcHVwWWVhci50ZXh0Q29udGVudCA9IHBpY3R1cmUueWVhciArICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXBQcmljZSA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLnBvcHVwX19pdGVtLXByaWNlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXBQcmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwUHJpY2UudGV4dENvbnRlbnQgPSBwaWN0dXJlLnByaWNlICsgJyQnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBpY3R1cmUub25zYWxlICYmIHBpY3R1cmUuc2FsZVByaWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwUHJpY2UuY2xhc3NMaXN0LmFkZCgnY2FyZF9faXRlbS1wcmljZV9zYWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbGVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2l0ZW1fc2FsZS1wcmljZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2UuaW5uZXJIVE1MID0gYCR7cGljdHVyZS5zYWxlUHJpY2V9JGA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwUHJpY2UuYWZ0ZXIoc2FsZVByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FsZVBlcmNlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2l0ZW1fc2FsZS1wZXJjZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50LmlubmVySFRNTCA9IGAtJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwIC0gKHBpY3R1cmUuc2FsZVByaWNlICogMTAwKSAvIHBpY3R1cmUucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0lYDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlLmFmdGVyKHNhbGVQZXJjZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cEF1dGhvciA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLnBvcHVwX19pdGVtLWF1dGhvcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwQXV0aG9yKSBwb3B1cEF1dGhvci5pbm5lckhUTUwgKz0gcGljdHVyZS5hdXRob3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cENvbG9yID0gcG9wdXBDbG9uZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2l0ZW0tY29sb3InKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3B1cENvbG9yKSBwb3B1cENvbG9yLmlubmVySFRNTCArPSBwaWN0dXJlLmNvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXBCcnVzaCA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLnBvcHVwX19pdGVtLWJydXNoJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXBCcnVzaCkgcG9wdXBCcnVzaC5pbm5lckhUTUwgKz0gcGljdHVyZS5icnVzaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwRGVzY3JpcHRpb24gPSBwb3B1cENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faXRlbS1kZXNjcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwRGVzY3JpcHRpb24pIHBvcHVwRGVzY3JpcHRpb24uaW5uZXJIVE1MICs9IHBpY3R1cmUuZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZUJ0biA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLmJ0bi1jcm9zcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsb3NlQnRuKSBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VQb3B1cCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwID0gcG9wdXBDbG9uZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2l0ZW0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3B1cCkgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlUG9wdXApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmQocG9wdXBDbG9uZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluLmFwcGVuZChmcmFnbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcG9wdXAub25tb3VzZW92ZXIgPSAoZSkgPT4ge1xuICAgICAgICAvLyAgICAgaWYgKGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQpIHBvcHVwQnRuLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKTtcbiAgICAgICAgLy8gfTtcblxuICAgICAgICAvLyBwb3B1cC5vbm1vdXNlb3V0ID0gKGUpID0+IHtcbiAgICAgICAgLy8gICAgIGlmIChlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0KSBwb3B1cEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkJyk7XG4gICAgICAgIC8vIH07XG4gICAgfTtcblxuICAgIHB1YmxpYyBjbG9zZVBvcHVwID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgICBpZiAobWFpbikge1xuICAgICAgICAgICAgY29uc3QgbGFzdENoaWxkID0gbWFpbi5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgaWYgKGxhc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cDtcbiIsImNsYXNzIFNvcnQge1xuICAgIHB1YmxpYyBzb3J0UHJvZHVjdHMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNvcnRCeSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb3J0QnknKTtcbiAgICAgICAgc3dpdGNoIChzb3J0QnkpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ByaWNlLWFzY2VuZGluZyc6XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0KCdwcmljZScsICdhc2NlbmRpbmcnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlICdwcmljZS1kZXNjZW5kaW5nJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQoJ3ByaWNlJywgJ2Rlc2NlbmRpbmcnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlICd0aXRsZS1hc2NlbmRpbmcnOlxuICAgICAgICAgICAgICAgIHRoaXMuc29ydCgndGl0bGUnLCAnYXNjZW5kaW5nJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY2FzZSAndGl0bGUtZGVzY2VuZGluZyc6XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0KCd0aXRsZScsICdkZXNjZW5kaW5nJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY2FzZSAneWVhci1hc2NlbmRpbmcnOlxuICAgICAgICAgICAgICAgIHRoaXMuc29ydCgneWVhcicsICdhc2NlbmRpbmcnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlICd5ZWFyLWRlc2NlbmRpbmcnOlxuICAgICAgICAgICAgICAgIHRoaXMuc29ydCgneWVhcicsICdkZXNjZW5kaW5nJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc29ydEJ5Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzb3J0KGZpbHRlcjogc3RyaW5nLCBkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2l0ZW0nKSk7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyQ2xhc3MgPVxuICAgICAgICAgICAgZmlsdGVyID09PSAncHJpY2UnID8gJy5jYXJkX19pdGVtLXByaWNlJyA6IGZpbHRlciA9PT0gJ3RpdGxlJyA/ICcuY2FyZF9faXRlbS10aXRsZScgOiAnLmNhcmRfX2l0ZW0teWVhcic7XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2FzY2VuZGluZycgJiYgZmlsdGVyID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICBwcm9kdWN0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChhLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyQ2xhc3MpPy5pbm5lckhUTUwgYXMgc3RyaW5nKS5sb2NhbGVDb21wYXJlKFxuICAgICAgICAgICAgICAgICAgICBiLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyQ2xhc3MpPy5pbm5lckhUTUwgYXMgc3RyaW5nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rlc2NlbmRpbmcnICYmIGZpbHRlciA9PT0gJ3RpdGxlJykge1xuICAgICAgICAgICAgcHJvZHVjdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoYi5xdWVyeVNlbGVjdG9yKGZpbHRlckNsYXNzKT8uaW5uZXJIVE1MIGFzIHN0cmluZykubG9jYWxlQ29tcGFyZShcbiAgICAgICAgICAgICAgICAgICAgYS5xdWVyeVNlbGVjdG9yKGZpbHRlckNsYXNzKT8uaW5uZXJIVE1MIGFzIHN0cmluZ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdhc2NlbmRpbmcnKSB7XG4gICAgICAgICAgICBwcm9kdWN0cy5zb3J0KFxuICAgICAgICAgICAgICAgIChhLCBiKSA9PlxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGEucXVlcnlTZWxlY3RvcihmaWx0ZXJDbGFzcyk/LmlubmVySFRNTCBhcyBzdHJpbmcpIC1cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChiLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyQ2xhc3MpPy5pbm5lckhUTUwgYXMgc3RyaW5nKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkZXNjZW5kaW5nJykge1xuICAgICAgICAgICAgcHJvZHVjdHMuc29ydChcbiAgICAgICAgICAgICAgICAoYSwgYikgPT5cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChiLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyQ2xhc3MpPy5pbm5lckhUTUwgYXMgc3RyaW5nKSAtXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoYS5xdWVyeVNlbGVjdG9yKGZpbHRlckNsYXNzKT8uaW5uZXJIVE1MIGFzIHN0cmluZylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc29ydE9wdGlvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpKTtcbiAgICAgICAgc29ydE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9uLnZhbHVlID09PSBgJHtmaWx0ZXJ9LSR7ZGlyZWN0aW9ufWApIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RzJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIHByb2R1Y3RzV3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4gcHJvZHVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKHByb2R1Y3QpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnQ7XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJkLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBQaWN0dXJlIH0gZnJvbSAnLi4vLi4vLi4vcGljdHVyZS5pbnRlZmFjZSc7XG5pbXBvcnQgRmF2b3JpdGVzIGZyb20gJy4uL2Zhdm9yaXRlcy9mYXZvcml0ZXMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi9maWx0ZXIvZmlsdGVyJztcbmltcG9ydCBQb3B1cCBmcm9tICcuLi9wb3B1cC9wb3B1cCc7XG5pbXBvcnQgU29ydCBmcm9tICcuLi9zb3J0L3NvcnQnO1xuaW1wb3J0ICcuL2NhcmQuc2Nzcyc7XG5cbmNsYXNzIENhcmQge1xuICAgIGZhdm9yaXRlczogRmF2b3JpdGVzO1xuICAgIHBvcHVwOiBQb3B1cDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZhdm9yaXRlcyA9IG5ldyBGYXZvcml0ZXMoKTtcbiAgICAgICAgdGhpcy5wb3B1cCA9IG5ldyBQb3B1cCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkcmF3KGRhdGE6IFBpY3R1cmVbXSkge1xuICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdENhcmRUZW1wOiBIVE1MVGVtcGxhdGVFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0Q2FyZFRlbXAnKTtcblxuICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0Q2FyZFRlbXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkQ2xvbmUgPSBwcm9kdWN0Q2FyZFRlbXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FyZENsb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRJdGVtVGl0bGUgPSBjYXJkQ2xvbmUucXVlcnlTZWxlY3RvcignLmNhcmRfX2l0ZW0tdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzRmF2OiBib29sZWFuID0gdGhpcy5mYXZvcml0ZXMuY2hlY2tGYXYoaXRlbS50aXRsZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmF2QnRuID0gY2FyZENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5mYXYtYnRuIGltZycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNGYXYgJiYgZmF2QnRuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmYXZCdG4uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vLi4vLi4vYXNzZXRzL3N2Zy9saWtlLWJsYWNrLnN2ZycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkSXRlbVRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSXRlbVRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRJdGVtSW1nID0gY2FyZENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLWltZycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZEl0ZW1JbWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJdGVtSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaXRlbS51cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW1JbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBpdGVtLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkSXRlbVllYXIgPSBjYXJkQ2xvbmUucXVlcnlTZWxlY3RvcignLmNhcmRfX2l0ZW0teWVhcicpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZEl0ZW1ZZWFyKSBjYXJkSXRlbVllYXIudGV4dENvbnRlbnQgPSBpdGVtLnllYXIgKyAnJztcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkSXRlbSA9IGNhcmRDbG9uZS5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbScpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZEl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSXRlbS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtZmlsdGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7aXRlbS5icnVzaH0tJHtpdGVtLmF1dGhvci50b0xvd2VyQ2FzZSgpfS0ke2l0ZW0uY29sb3J9YFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FyZEl0ZW1QcmljZSA9IGNhcmRDbG9uZS5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbS1wcmljZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZEl0ZW1QcmljZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2UgKyAnJCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5vbnNhbGUgJiYgaXRlbS5zYWxlUHJpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkSXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2l0ZW1fc2FsZS1wcmljZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbGVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2UuY2xhc3NMaXN0LmFkZCgnY2FyZF9faXRlbS1wcmljZV9zYWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlLmlubmVySFRNTCA9IGAke2l0ZW0ucHJpY2V9JGA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW1QcmljZS5pbm5lckhUTUwgPSBgJHtpdGVtLnNhbGVQcmljZX0kYDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkSXRlbVByaWNlLmJlZm9yZShzYWxlUHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbGVQZXJjZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2l0ZW1fc2FsZS1wZXJjZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQuaW5uZXJIVE1MID0gYC0ke01hdGgucm91bmQoMTAwIC0gKGl0ZW0uc2FsZVByaWNlICogMTAwKSAvIGl0ZW0ucHJpY2UpfSVgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZS5hZnRlcihzYWxlUGVyY2VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW0uZGF0YXNldC5maWx0ZXJzICs9ICctc2FsZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYXZCdXR0b24gPSBjYXJkQ2xvbmUucXVlcnlTZWxlY3RvcignLmZhdi1idG4nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZhdkJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mYXZvcml0ZXMudG9nZ2xlKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IG5ldyBGaWx0ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuZmlsdGVyUHJvZHVjdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3J0ID0gbmV3IFNvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0LnNvcnRQcm9kdWN0cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JlQnV0dG9uID0gY2FyZENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLWJ0bi0tbW9yZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobW9yZUJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9yZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKTogdm9pZCA9PiB0aGlzLnBvcHVwLmNyZWF0ZVBvcHVwKGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZChjYXJkQ2xvbmUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RzJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0cykgcHJvZHVjdHMuYXBwZW5kKGZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgcGljdHVyZXNMaXN0IH0gZnJvbSAnLi4vLi4vLi4vcGljdHVyZXMtbGlzdCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jYXJkL2NhcmQnO1xuaW1wb3J0ICcuL3NlYXJjaC5zY3NzJztcblxuY2xhc3MgU2VhcmNoIHtcbiAgICBwdWJsaWMgc2VhcmNoUHJvZHVjdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0cycpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgICAgIGNvbnN0IHRleHQgPSBzZWFyY2hJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICAgICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgICAgICBwcm9kdWN0c1dyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBjYXJkLmRyYXcocGljdHVyZXNMaXN0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19pdGVtJyk7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IEFycmF5LmZyb20ocHJvZHVjdHMpLmZpbHRlcigocHJvZHVjdCkgPT5cbiAgICAgICAgICAgIHByb2R1Y3QucXVlcnlTZWxlY3RvcignLmNhcmRfX2l0ZW0tdGl0bGUnKT8uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGV4dClcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoZmlsdGVyZWRQcm9kdWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHByb2R1Y3RzV3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGZpbHRlcmVkUHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQocHJvZHVjdCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS5pbm5lckhUTUwgPSAnU29ycnksIG5vdGhpbmcgY291bGQgYmUgZm91bmQuIFlvdSBjYW4gdHJ5IGFub3RoZXIgc2VhcmNoIHJlcXVlc3QuJztcbiAgICAgICAgICAgIHByb2R1Y3RzV3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIHByb2R1Y3RzV3JhcHBlci5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZVNlYXJjaFRleHQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hQcm9kdWN0KCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZXIuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vZmlsdGVyL2ZpbHRlcic7XG5pbXBvcnQgJy4vc2xpZGVyLnNjc3MnO1xuXG5jbGFzcyBTbGlkZXIge1xuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xuICAgIGZpbHRlcjogRmlsdGVyO1xuXG4gICAgY29uc3RydWN0b3IoY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gbmV3IEZpbHRlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkcmF3KCkge1xuICAgICAgICBjb25zdCBzbGlkZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY2xhc3NOYW1lKSkgYXMgSFRNTElucHV0RWxlbWVudFtdO1xuXG4gICAgICAgIGlmICgrc2xpZGVyc1swXS52YWx1ZSA+ICtzbGlkZXJzWzFdLnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gc2xpZGVyc1sxXS52YWx1ZTtcbiAgICAgICAgICAgIHNsaWRlcnNbMV0udmFsdWUgPSBzbGlkZXJzWzBdLnZhbHVlO1xuICAgICAgICAgICAgc2xpZGVyc1swXS52YWx1ZSA9IHRlbXA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoK3NsaWRlcnNbMV0udmFsdWUgPCArc2xpZGVyc1swXS52YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IHNsaWRlcnNbMF0udmFsdWU7XG4gICAgICAgICAgICBzbGlkZXJzWzBdLnZhbHVlID0gc2xpZGVyc1sxXS52YWx1ZTtcbiAgICAgICAgICAgIHNsaWRlcnNbMV0udmFsdWUgPSB0ZW1wO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldFJhbmdlRmlsdGVyKCkge1xuICAgICAgICBjb25zdCBzbGlkZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY2xhc3NOYW1lKSkgYXMgSFRNTElucHV0RWxlbWVudFtdO1xuICAgICAgICBjb25zdCBzbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3RoaXMuY2xhc3NOYW1lfV9fY29udGFpbmVyYCk7XG4gICAgICAgIGlmIChzbGlkZXJDb250YWluZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0RnJvbSA9IHNsaWRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZnJvbScpO1xuICAgICAgICAgICAgY29uc3QgZW5kV2l0aCA9IHNsaWRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudG8nKTtcbiAgICAgICAgICAgIGlmIChzdGFydEZyb20gJiYgZW5kV2l0aCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0RnJvbS5pbm5lckhUTUwgPSBzbGlkZXJzWzBdLnZhbHVlO1xuICAgICAgICAgICAgICAgIGVuZFdpdGguaW5uZXJIVE1MID0gc2xpZGVyc1sxXS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzbGlkZXJUeXBlID0gdGhpcy5jbGFzc05hbWUuc3BsaXQoJy0nKVswXS5zbGljZSgxKTtcbiAgICAgICAgdGhpcy5maWx0ZXIucmVtb3ZlRmlsdGVyKHNsaWRlclR5cGUpO1xuICAgICAgICBjb25zdCBzbGlkZXJGaWx0ZXIgPSBgJHtzbGlkZXJUeXBlfSoke3NsaWRlcnNbMF0udmFsdWV9KiR7c2xpZGVyc1sxXS52YWx1ZX1gO1xuXG4gICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWx0ZXJzJyk7XG5cbiAgICAgICAgaWYgKHByZXZWYWx1ZSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbHRlcnMnLCBwcmV2VmFsdWUgKyAnLScgKyBzbGlkZXJGaWx0ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbHRlcnMnLCBzbGlkZXJGaWx0ZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJ0LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgJy4vY2FydC5zY3NzJztcblxuY2xhc3MgQ2FydCB7XG4gICAgcHVibGljIGFkZFRvQ2FydChlOiBFdmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQnKTtcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGxldCBwcm9kdWN0O1xuICAgICAgICBpZiAoYWRkQnV0dG9uKSBwcm9kdWN0ID0gYWRkQnV0dG9uLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGxldCByZW1vdmVCdG47XG4gICAgICAgIGlmIChwcm9kdWN0KSByZW1vdmVCdG4gPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLWJ0bi0tcmVtb3ZlJyk7XG5cbiAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBpZiAocmVtb3ZlQnRuKSByZW1vdmVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgaWYgKGNhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcnRBbW91bnQgPSBjYXJ0LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcnRXYXJuaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtd2FybmluZycpO1xuXG4gICAgICAgICAgICBpZiAoY2FydEFtb3VudCAmJiBjYXJ0V2FybmluZykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNyb3NzQnV0dG9uID0gY2FydFdhcm5pbmcucXVlcnlTZWxlY3RvcignLmJ0bi1jcm9zc193YXJuaW5nJyk7XG4gICAgICAgICAgICAgICAgaWYgKGNyb3NzQnV0dG9uKSBjcm9zc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhcnRXYXJuaW5nLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBbW91bnQgPSArY2FydEFtb3VudC5pbm5lckhUTUwgKyAxO1xuICAgICAgICAgICAgICAgIGlmIChuZXdBbW91bnQgPiAyMCkge1xuICAgICAgICAgICAgICAgICAgICBjYXJ0V2FybmluZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYXJ0QW1vdW50LmlubmVySFRNTCA9IG5ld0Ftb3VudC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBjYXJ0V2FybmluZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlRnJvbUNhcnQoZTogRXZlbnQpIHtcbiAgICAgICAgY29uc3QgY2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0Jyk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zb2xlLmxvZyhyZW1vdmVCdG4pO1xuXG4gICAgICAgIGxldCBwcm9kdWN0O1xuICAgICAgICBpZiAocmVtb3ZlQnRuKSB7XG4gICAgICAgICAgICBwcm9kdWN0ID0gcmVtb3ZlQnRuLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWRkQnRuO1xuICAgICAgICBpZiAocHJvZHVjdCkgYWRkQnRuID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbS1idG4tLWNhcnQnKTtcblxuICAgICAgICBpZiAoYWRkQnRuKSBhZGRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGlmIChjYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBjYXJ0QW1vdW50ID0gY2FydC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gICAgICAgICAgICBpZiAoY2FydEFtb3VudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Ftb3VudCA9ICtjYXJ0QW1vdW50LmlubmVySFRNTCAtIDE7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0Ftb3VudCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcnRBbW91bnQuaW5uZXJIVE1MID0gbmV3QW1vdW50LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xuIiwiaW1wb3J0IENhcmQgZnJvbSAnLi4vdmlldy9jYXJkL2NhcmQnO1xuaW1wb3J0IHsgcGljdHVyZXNMaXN0IH0gZnJvbSAnLi4vLi4vcGljdHVyZXMtbGlzdCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uL3ZpZXcvc2VhcmNoL3NlYXJjaCc7XG5pbXBvcnQgU29ydCBmcm9tICcuLi92aWV3L3NvcnQvc29ydCc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uL3ZpZXcvZmlsdGVyL2ZpbHRlcic7XG5pbXBvcnQgU2xpZGVyIGZyb20gJy4uL3ZpZXcvc2xpZGVyL3NsaWRlcic7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi4vdmlldy9wb3B1cC9wb3B1cCc7XG5pbXBvcnQgRmF2b3JpdGVzIGZyb20gJy4uL3ZpZXcvZmF2b3JpdGVzL2Zhdm9yaXRlcyc7XG5pbXBvcnQgQ2FydCBmcm9tICcuLi92aWV3L2NhcnQvY2FydCc7XG5pbXBvcnQgZG9uZSBmcm9tICcuL2RvbmUnO1xuXG5jbGFzcyBBcHAge1xuICAgIHByaWNlU2xpZGVyOiBTbGlkZXI7XG4gICAgeWVhclNsaWRlcjogU2xpZGVyO1xuICAgIGNhcmQ6IENhcmQ7XG4gICAgc29ydDogU29ydDtcbiAgICBwb3B1cDogUG9wdXA7XG4gICAgc2VhcmNoOiBTZWFyY2g7XG4gICAgZmF2b3JpdGVzOiBGYXZvcml0ZXM7XG4gICAgY2FydDogQ2FydDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByaWNlU2xpZGVyID0gbmV3IFNsaWRlcignLnByaWNlLXNsaWRlcicpO1xuICAgICAgICB0aGlzLnllYXJTbGlkZXIgPSBuZXcgU2xpZGVyKCcueWVhci1zbGlkZXInKTtcbiAgICAgICAgdGhpcy5jYXJkID0gbmV3IENhcmQoKTtcbiAgICAgICAgdGhpcy5zb3J0ID0gbmV3IFNvcnQoKTtcbiAgICAgICAgdGhpcy5wb3B1cCA9IG5ldyBQb3B1cCgpO1xuICAgICAgICB0aGlzLnNlYXJjaCA9IG5ldyBTZWFyY2goKTtcbiAgICAgICAgdGhpcy5mYXZvcml0ZXMgPSBuZXcgRmF2b3JpdGVzKCk7XG4gICAgICAgIHRoaXMuY2FydCA9IG5ldyBDYXJ0KCk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmNhcmQuZHJhdyhwaWN0dXJlc0xpc3QpO1xuICAgICAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcbiAgICAgICAgaWYgKHNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuc2VhcmNoLnNlYXJjaFByb2R1Y3QpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlYXJjaFJlbW92ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtcmVtb3ZlJyk7XG4gICAgICAgIGlmIChzZWFyY2hSZW1vdmVCdG4pIHtcbiAgICAgICAgICAgIHNlYXJjaFJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2VhcmNoLnJlbW92ZVNlYXJjaFRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvcnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvcnQnKTtcbiAgICAgICAgaWYgKHNvcnRMaXN0KSB7XG4gICAgICAgICAgICBzb3J0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBlLnRhcmdldCBhcyBIVE1MT3B0aW9uRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NvcnRCeScsIHNlbGVjdGVkT3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0LnNvcnRQcm9kdWN0cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IG5ldyBGaWx0ZXIoKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXJDaGVja2JveGVzID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXInKSBhcyB1bmtub3duKSBhcyBIVE1MSW5wdXRFbGVtZW50W107XG5cbiAgICAgICAgZmlsdGVyQ2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT5cbiAgICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gZS50YXJnZXQgYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3hQYXJlbnQgPSBzZWxlY3RlZE9wdGlvbi5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJUeXBlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94UGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlclR5cGUgPSBjaGVja2JveFBhcmVudC5jbGFzc0xpc3QudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWx0ZXJzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldlZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyc0FyciA9IHByZXZWYWx1ZS5zcGxpdCgnLScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZXNlbnRGaWx0ZXIgPSBmaWx0ZXJzQXJyLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zdGFydHNXaXRoKGZpbHRlclR5cGUpKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVySW5kOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXNlbnRGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVySW5kID0gZmlsdGVyc0Fyci5pbmRleE9mKHByZXNlbnRGaWx0ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdGaWx0ZXJWYWx1ZSA9IGAke3ByZXNlbnRGaWx0ZXJ9KiR7c2VsZWN0ZWRPcHRpb24udmFsdWV9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyc0FycltmaWx0ZXJJbmRdID0gbmV3RmlsdGVyVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyc0Fyci5wdXNoKGAke2ZpbHRlclR5cGV9KiR7c2VsZWN0ZWRPcHRpb24udmFsdWV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbHRlcnMnLCBmaWx0ZXJzQXJyLmpvaW4oJy0nKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWx0ZXJzJywgYCR7ZmlsdGVyVHlwZX0qJHtzZWxlY3RlZE9wdGlvbi52YWx1ZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5yZW1vdmVGaWx0ZXIoYCR7ZmlsdGVyVHlwZX0qJHtzZWxlY3RlZE9wdGlvbi52YWx1ZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaWx0ZXIuZmlsdGVyUHJvZHVjdHMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQuc29ydFByb2R1Y3RzKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHNhbGVSYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbnNhbGUnKTtcbiAgICAgICAgaWYgKHNhbGVSYWRpbykge1xuICAgICAgICAgICAgc2FsZVJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzYWxlUmFkaW9FbGVtZW50ID0gc2FsZVJhZGlvIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHNhbGVSYWRpb0VsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlsdGVycycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJldlZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlsdGVycycsIHByZXZWYWx1ZSArICctc2FsZScpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbHRlcnMnLCAnc2FsZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyLnJlbW92ZUZpbHRlcignc2FsZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZpbHRlci5maWx0ZXJQcm9kdWN0cygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydC5zb3J0UHJvZHVjdHMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmF2b3JpdGVSYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pc2Zhdm9yaXRlJyk7XG4gICAgICAgIGlmIChmYXZvcml0ZVJhZGlvKSB7XG4gICAgICAgICAgICBmYXZvcml0ZVJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmYXZvcml0ZVJhZGlvRWxlbWVudCA9IGZhdm9yaXRlUmFkaW8gYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAoZmF2b3JpdGVSYWRpb0VsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlsdGVycycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJldlZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlsdGVycycsIHByZXZWYWx1ZSArICctZmF2b3JpdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWx0ZXJzJywgJ2Zhdm9yaXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIucmVtb3ZlRmlsdGVyKCdmYXZvcml0ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZpbHRlci5maWx0ZXJQcm9kdWN0cygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydC5zb3J0UHJvZHVjdHMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2xpZGVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlcl9faW5wdXQnKSkgYXMgSFRNTElucHV0RWxlbWVudFtdO1xuICAgICAgICBzbGlkZXJzLmZvckVhY2goKHNsaWRlcikgPT4ge1xuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcmljZS1zbGlkZXInKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlU2xpZGVyLmRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZVNsaWRlci5zZXRSYW5nZUZpbHRlcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWVhclNsaWRlci5kcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWVhclNsaWRlci5zZXRSYW5nZUZpbHRlcigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZpbHRlci5maWx0ZXJQcm9kdWN0cygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydC5zb3J0UHJvZHVjdHMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBhc2lkZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXNpZGUtYnV0dG9uJyk7XG4gICAgICAgIGFzaWRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkVsID0gYnV0dG9uIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuXG4gICAgICAgICAgICBidXR0b25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZW1vdmUtc2V0dGluZ3MtYnV0dG9uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChidXR0b25FbC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZS1maWx0ZXJzLWJ1dHRvbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdmaWx0ZXJzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbHRlci5maWx0ZXJQcm9kdWN0cygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydC5zb3J0UHJvZHVjdHMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjYXJ0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19pdGVtLWJ0bi0tY2FydCcpO1xuICAgICAgICBjYXJ0QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmNhcnQuYWRkVG9DYXJ0KGUpKSk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9faXRlbS1idG4tLXJlbW92ZScpO1xuICAgICAgICByZW1vdmVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IEV2ZW50KSA9PiB0aGlzLmNhcnQucmVtb3ZlRnJvbUNhcnQoZSkpKTtcblxuICAgICAgICBmaWx0ZXIuZmlsdGVyUHJvZHVjdHMoKTtcbiAgICAgICAgdGhpcy5zb3J0LnNvcnRQcm9kdWN0cygpO1xuICAgICAgICAvLyBkb25lKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcCc7XG5pbXBvcnQgJy4vc2Nzcy9ub3JtYWxpemUuc2Nzcyc7XG5pbXBvcnQgJy4vc2Nzcy9nbG9iYWwuc2Nzcyc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5zdGFydCgpO1xuIl0sIm5hbWVzIjpbIl9fX0NTU19MT0FERVJfRVhQT1JUX19fIiwicHVzaCIsIm1vZHVsZSIsImlkIiwiX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY29uY2F0Iiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImRlZHVwZSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJsZW5ndGgiLCJfaSIsIl9hcnJheUxpa2VUb0FycmF5IiwiYXJyIiwibGVuIiwiYXJyMiIsIkFycmF5IiwiX2l0ZW0iLCJpc0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJfcyIsIl9lIiwiX2FyciIsIl9uIiwiX2QiLCJjYWxsIiwibmV4dCIsImRvbmUiLCJ2YWx1ZSIsImVyciIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIm8iLCJtaW5MZW4iLCJuIiwiT2JqZWN0IiwicHJvdG90eXBlIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJmcm9tIiwidGVzdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIlR5cGVFcnJvciIsIl9ub25JdGVyYWJsZVJlc3QiLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwidXJsIiwib3B0aW9ucyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiaGFzaCIsIm5lZWRRdW90ZXMiLCJyZXBsYWNlIiwibWVtbyIsImdldFRhcmdldCIsInRhcmdldCIsInN0eWxlVGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSFRNTElGcmFtZUVsZW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJoZWFkIiwiZSIsInN0eWxlc0luRG9tIiwiZ2V0SW5kZXhCeUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicmVzdWx0IiwibW9kdWxlc1RvRG9tIiwiaWRDb3VudE1hcCIsImlkZW50aWZpZXJzIiwiYmFzZSIsImNvdW50IiwiaW5kZXgiLCJvYmoiLCJjc3MiLCJtZWRpYSIsInNvdXJjZU1hcCIsInJlZmVyZW5jZXMiLCJ1cGRhdGVyIiwiYWRkU3R5bGUiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwibm9uY2UiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldEF0dHJpYnV0ZSIsImluc2VydCIsIkVycm9yIiwiYXBwZW5kQ2hpbGQiLCJ0ZXh0U3RvcmUiLCJyZXBsYWNlVGV4dCIsInJlcGxhY2VtZW50IiwiZmlsdGVyIiwiQm9vbGVhbiIsImFwcGx5VG9TaW5nbGV0b25UYWciLCJyZW1vdmUiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImNzc05vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImNoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGx5VG9UYWciLCJyZW1vdmVBdHRyaWJ1dGUiLCJmaXJzdENoaWxkIiwic2luZ2xldG9uIiwic2luZ2xldG9uQ291bnRlciIsInVwZGF0ZSIsInN0eWxlSW5kZXgiLCJiaW5kIiwicGFyZW50Tm9kZSIsInJlbW92ZVN0eWxlRWxlbWVudCIsIm5ld09iaiIsImFsbCIsImF0b2IiLCJsYXN0SWRlbnRpZmllcnMiLCJuZXdMaXN0IiwibmV3TGFzdElkZW50aWZpZXJzIiwiX2luZGV4Iiwic3BsaWNlIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImdldHRlciIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsImciLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJzY3JpcHRVcmwiLCJpbXBvcnRTY3JpcHRzIiwibG9jYXRpb24iLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicCIsIm5jIiwicGljdHVyZXNMaXN0IiwidGl0bGUiLCJ5ZWFyIiwicHJpY2UiLCJhdXRob3IiLCJicnVzaCIsImRlc2NyaXB0aW9uIiwiYW1vdW50IiwiY29sb3IiLCJvbnNhbGUiLCJzYWxlUHJpY2UiLCJ0b2dnbGUiLCJpdGVtVGl0bGUiLCJmYXZTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInByZXZWYWx1ZSIsInNwbGl0IiwiZWxlbWVudCIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnRFbGVtZW50IiwidGFyZ2V0VGl0bGUiLCJpbm5lckhUTUwiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaW5kZXhPZiIsImRhdGFzZXQiLCJmaWx0ZXJzIiwic2V0SXRlbSIsImRyYXciLCJjaGVja0ZhdiIsImFsbFByb2R1Y3RzIiwicXVlcnlTZWxlY3RvckFsbCIsImZpbHRlcmVkUHJvZHVjdHMiLCJmYXZvcml0ZXMiLCJwcm9kdWN0c1dyYXBwZXIiLCJjYXJkIiwicmVtb3ZlRmlsdGVyIiwiZmlsdGVyc0FyciIsInN0YXJ0c1dpdGgiLCJmaWx0ZXJUb1JlbW92ZSIsInJlZ0ZpbHRlciIsIlJlZ0V4cCIsImluZCIsInByZXNlbnRGaWx0ZXIiLCJmaWx0ZXJQcm9kdWN0cyIsImZpbHRlcnNTdHIiLCJmaWx0ZXJCeVByaWNlQW5kWWVhciIsImZpbHRlckJ5U2FsZUFuZEZhdm9yaXRlIiwiZmlsdGVyQnlQcm9wZXJ0eSIsImRyYXdQcm9kdWN0cyIsInByb2R1Y3QiLCJjdXJyZW50UHJvZHVjdHMiLCJyYW5nZUFyciIsImNsYXNzTmFtZSIsIm5ld0ZpbHRlcmVkIiwicmVkdWNlIiwiZmlsdGVyZWQiLCJpdGVtVmFsdWUiLCJwYXJzZUludCIsInNsaWRlcnMiLCJzbGlkZXJDb250YWluZXIiLCJzdGFydEZyb20iLCJlbmRXaXRoIiwiZmlsdGVyQ2xhc3MiLCJmaWx0ZXJDaGVja2JveCIsImNoZWNrZWQiLCJwcm9kdWN0UHJvcGVydGllcyIsImNoZWNrYm94RmlsdGVyIiwicHJvZHVjdFRpdGxlRUwiLCJwcm9kdWN0VGl0bGUiLCJpc0ZhdiIsImZhdkJ0biIsImVycm9yTWVzc2FnZSIsImNsYXNzTGlzdCIsImFkZCIsImNyZWF0ZVBvcHVwIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RUaXRsZUVsIiwicGljdHVyZSIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsInBvcHVwVGVtcCIsInBvcHVwQ2xvbmUiLCJjbG9uZU5vZGUiLCJwb3B1cFRpdGxlIiwidGV4dENvbnRlbnQiLCJwb3B1cEltZyIsInBvcHVwWWVhciIsInBvcHVwUHJpY2UiLCJhZnRlciIsInNhbGVQZXJjZW50IiwiTWF0aCIsInJvdW5kIiwicG9wdXBBdXRob3IiLCJwb3B1cENvbG9yIiwicG9wdXBCcnVzaCIsInBvcHVwRGVzY3JpcHRpb24iLCJjbG9zZUJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZVBvcHVwIiwicG9wdXAiLCJhcHBlbmQiLCJtYWluIiwiYm9keSIsIm92ZXJmbG93IiwibGFzdENoaWxkIiwibGFzdEVsZW1lbnRDaGlsZCIsInNvcnRQcm9kdWN0cyIsInNvcnQiLCJyZW1vdmVJdGVtIiwiZGlyZWN0aW9uIiwicHJvZHVjdHMiLCJiIiwibG9jYWxlQ29tcGFyZSIsInBhcnNlRmxvYXQiLCJvcHRpb24iLCJzZWxlY3RlZCIsInByb2R1Y3RDYXJkVGVtcCIsImNhcmRDbG9uZSIsImNhcmRJdGVtVGl0bGUiLCJjYXJkSXRlbUltZyIsImNhcmRJdGVtWWVhciIsImNhcmRJdGVtIiwiY2FyZEl0ZW1QcmljZSIsImJlZm9yZSIsImZhdkJ1dHRvbiIsIm1vcmVCdXR0b24iLCJzZWFyY2hQcm9kdWN0IiwidGV4dCIsInRyaW0iLCJyZW1vdmVTZWFyY2hUZXh0IiwidGVtcCIsInNldFJhbmdlRmlsdGVyIiwic2xpZGVyVHlwZSIsInNsaWRlckZpbHRlciIsImFkZFRvQ2FydCIsInJlbW92ZUJ0biIsImNhcnQiLCJhZGRCdXR0b24iLCJjYXJ0QW1vdW50IiwiY3Jvc3NCdXR0b24iLCJuZXdBbW91bnQiLCJyZW1vdmVGcm9tQ2FydCIsImFkZEJ0biIsInByaWNlU2xpZGVyIiwieWVhclNsaWRlciIsInNlYXJjaCIsInN0YXJ0Iiwic2VhcmNoSW5wdXQiLCJzZWFyY2hSZW1vdmVCdG4iLCJzb3J0TGlzdCIsInNlbGVjdGVkT3B0aW9uIiwiY2hlY2tib3giLCJmaWx0ZXJUeXBlIiwiY2hlY2tib3hQYXJlbnQiLCJmaWx0ZXJJbmQiLCJuZXdGaWx0ZXJWYWx1ZSIsInNhbGVSYWRpbyIsImZhdm9yaXRlUmFkaW8iLCJzbGlkZXIiLCJjb250YWlucyIsImJ1dHRvbiIsImJ1dHRvbkVsIiwiY2xlYXIiXSwic291cmNlUm9vdCI6IiJ9
