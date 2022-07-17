(() => {
  "use strict";
  var r = {
      296: (r, e, n) => {
        n.d(e, { Z: () => A });
        var t = n(15),
          i = n.n(t),
          o = n(645),
          a = n.n(o)()(i());
        a.push([
          r.id,
          "@import url(https://fonts.googleapis.com/css2?family=Mingzat&family=Raleway:wght@400;700&display=swap);",
        ]),
          a.push([
            r.id,
            '.products{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;margin-top:10px;padding:0 2%;transition:.3s}.card__item{display:flex;flex-direction:column;gap:10px;align-items:center;margin-bottom:5%;background-color:#fff;padding:2%;box-shadow:rgba(0,0,0,.15) 2.4px 2.4px 3.2px;border-radius:1rem;min-width:210px}@media(max-width: 920px){.card__item{min-width:275px}}@media(max-width: 850px){.card__item{min-width:260px}}@media(max-width: 820px){.card__item{flex-direction:row;width:80%;margin:0 auto 5%}}@media(max-width: 520px){.card__item{width:95%}}.card__item-description{display:flex;flex-direction:column;align-items:center;gap:10px}.card__item-description p{margin:0;text-align:center}@media(max-width: 650px){.card__item-description{width:80%;margin:0 auto 5%}}.card__item-title{color:#0b2545;font-weight:700;font-size:1.5rem;font-family:"Raleway",sans-serif}.card__item-price{font-weight:700}.card__item-price_sale{text-decoration:line-through;font-weight:400}.card__item_sale-price{font-weight:700;color:#780000;font-size:larger;margin-left:5px}.card__item_sale-percent{display:inline-block;background-color:#fca311;color:#fff;letter-spacing:1px;font-size:smaller;border-radius:5px;padding:3px;margin-left:5px}.card__item-img{max-width:15vw;transition:.3s}.card__item-img:hover{box-shadow:rgba(0,0,0,.1) 0px 10px 50px;cursor:pointer}.card__item-img:active{transform:translateY(2px)}.card__item-btn--cart,.card__item-btn--more,.card__item-btn--remove{background-color:#8da9c4}.card__item-btn--cart:hover,.card__item-btn--more:hover,.card__item-btn--remove:hover{background-color:#6b90b3}',
            "",
            {
              version: 3,
              sources: ["webpack://./src/components/view/card/card.scss"],
              names: [],
              mappings:
                "AAGA,UACI,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,sBAAA,CACA,cAAA,CACA,eAAA,CACA,YAAA,CACA,cAAA,CAGJ,YACI,YAAA,CACA,qBAAA,CACA,QAAA,CACA,kBAAA,CACA,gBAAA,CACA,qBAAA,CACA,UAAA,CACA,4CAAA,CACA,kBAAA,CACA,eAAA,CAEA,yBAZJ,YAaQ,eAAA,CAAA,CAGJ,yBAhBJ,YAiBQ,eAAA,CAAA,CAGJ,yBApBJ,YAqBQ,kBAAA,CACA,SAAA,CACA,gBAAA,CAAA,CAGJ,yBA1BJ,YA2BQ,SAAA,CAAA,CAIR,wBACI,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,QAAA,CAEA,0BACI,QAAA,CACA,iBAAA,CAGJ,yBAXJ,wBAYQ,SAAA,CACA,gBAAA,CAAA,CAIR,kBACI,aAAA,CACA,eAAA,CACA,gBAAA,CACA,gCAAA,CAGJ,kBACI,eAAA,CAGJ,uBACI,4BAAA,CACA,eAAA,CAGJ,uBACI,eAAA,CACA,aAAA,CACA,gBAAA,CACA,eAAA,CAGJ,yBACI,oBAAA,CACA,wBAAA,CACA,UAAA,CACA,kBAAA,CACA,iBAAA,CACA,iBAAA,CACA,WAAA,CACA,eAAA,CAGJ,gBACI,cAAA,CACA,cAAA,CAEA,sBACI,uCAAA,CACA,cAAA,CAGJ,uBACI,yBAAA,CAIR,oEAGI,wBAAA,CAEA,sFACI,wBAAA",
              sourcesContent: [
                "@import url('https://fonts.googleapis.com/css2?family=Mingzat&family=Raleway:wght@400;700&display=swap');\r\n\r\n\r\n.products {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n    flex-wrap: wrap;\r\n    margin-top: 10px;\r\n    padding: 0 2%;\r\n    transition: 0.3s;\r\n}\r\n\r\n.card__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    align-items: center;\r\n    margin-bottom: 5%;\r\n    background-color: #fff;\r\n    padding: 2%;\r\n    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\r\n    border-radius: 1rem;\r\n    min-width: 210px;\r\n\r\n    @media (max-width: 920px) {\r\n        min-width: 275px;\r\n    }\r\n\r\n    @media (max-width: 850px) {\r\n        min-width: 260px;\r\n    }\r\n\r\n    @media (max-width: 820px) {\r\n        flex-direction: row;\r\n        width: 80%;\r\n        margin: 0 auto 5%;\r\n    }\r\n        \r\n    @media (max-width: 520px) {\r\n        width: 95%;\r\n    }\r\n}\r\n\r\n.card__item-description {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 10px;\r\n\r\n    p {\r\n        margin: 0;\r\n        text-align: center;\r\n    }\r\n\r\n    @media (max-width: 650px) {\r\n        width: 80%;\r\n        margin: 0 auto 5%;\r\n    }\r\n}\r\n\r\n.card__item-title {\r\n    color: #0b2545;\r\n    font-weight: 700;\r\n    font-size: 1.5rem;\r\n    font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.card__item-price {\r\n    font-weight: 700;\r\n}\r\n\r\n.card__item-price_sale {\r\n    text-decoration: line-through;\r\n    font-weight: 400;\r\n}\r\n\r\n.card__item_sale-price {\r\n    font-weight: 700;\r\n    color: #780000;\r\n    font-size: larger;\r\n    margin-left: 5px;\r\n}\r\n\r\n.card__item_sale-percent {\r\n    display: inline-block;\r\n    background-color: #fca311;\r\n    color: #ffffff;\r\n    letter-spacing: 1px;\r\n    font-size: smaller;\r\n    border-radius: 5px;\r\n    padding: 3px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.card__item-img {\r\n    max-width: 15vw;\r\n    transition: 0.3s;\r\n\r\n    &:hover {\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;\r\n        cursor: pointer;\r\n    }\r\n\r\n    &:active {\r\n        transform: translateY(2px);\r\n    }\r\n}\r\n\r\n.card__item-btn--cart,\r\n.card__item-btn--more,\r\n.card__item-btn--remove {\r\n    background-color: #8da9c4;\r\n\r\n    &:hover {\r\n        background-color: darken($color: #8da9c4, $amount: 10%);\r\n    }\r\n\r\n}\r\n",
              ],
              sourceRoot: "",
            },
          ]);
        const A = a;
      },
      818: (r, e, n) => {
        n.d(e, { Z: () => A });
        var t = n(15),
          i = n.n(t),
          o = n(645),
          a = n.n(o)()(i());
        a.push([
          r.id,
          ".cart span{letter-spacing:normal}.cart-warning{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(41,41,41,.6);display:flex;align-items:center;justify-content:center}.cart-warning__container{position:relative;background-color:#fff;padding:3%;border-radius:5px}.cart-warning__container .btn-cross{top:5px;right:-10px}.hidden{display:none}.card__item-btn--remove{padding:5%;font-size:smaller}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/components/view/cart/cart.scss"],
            names: [],
            mappings:
              "AACI,WACI,qBAAA,CAKR,cACI,cAAA,CACI,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,4BAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAIR,yBACI,iBAAA,CACA,qBAAA,CACA,UAAA,CACA,iBAAA,CAEA,oCACI,OAAA,CACA,WAAA,CAIR,QACI,YAAA,CAGJ,wBACI,UAAA,CACA,iBAAA",
            sourcesContent: [
              ".cart {\r\n    span {\r\n        letter-spacing: normal;\r\n    }\r\n}\r\n\r\n\r\n.cart-warning {\r\n    position: fixed;\r\n        top: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        background: rgba(41, 41, 41, 0.6);\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n\r\n}\r\n\r\n.cart-warning__container {\r\n    position: relative;\r\n    background-color: #fff;\r\n    padding: 3%;\r\n    border-radius: 5px;\r\n\r\n    .btn-cross {\r\n        top: 5px;\r\n        right: -10px;\r\n    }\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.card__item-btn--remove {\r\n    padding: 5%;\r\n    font-size: smaller;\r\n}",
            ],
            sourceRoot: "",
          },
        ]);
        const A = a;
      },
      371: (r, e, n) => {
        n.d(e, { Z: () => A });
        var t = n(15),
          i = n.n(t),
          o = n(645),
          a = n.n(o)()(i());
        a.push([
          r.id,
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
              ".fav-btn {\r\n    background: none;\r\n    border: none;\r\n    width: 35px;\r\n    \r\n    &:hover {\r\n        cursor: pointer;\r\n        transform: skale(0.7);\r\n    }\r\n\r\n    img{\r\n        width: 100%;\r\n    }\r\n}",
            ],
            sourceRoot: "",
          },
        ]);
        const A = a;
      },
      171: (r, e, n) => {
        n.d(e, { Z: () => p });
        var t = n(15),
          i = n.n(t),
          o = n(645),
          a = n.n(o),
          A = n(667),
          s = n.n(A),
          c = n(919),
          l = a()(i()),
          d = s()(c);
        l.push([
          r.id,
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
              '.popup__item {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background: rgba(41, 41, 41, 0.6);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.popup__item-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    background-color: #fff;\r\n    padding: 2%;\r\n\r\n    @media (max-width: 750px) {\r\n           flex-direction: column;\r\n           max-height: 100vh;\r\n        }\r\n}\r\n\r\n.popup__item-img {\r\n    max-width: 50%;\r\n    @media (max-width: 750px) {\r\n        max-width: 80%;\r\n    }\r\n}\r\n.popup__item-description {\r\n    position: relative;\r\n    background-color: #fff;\r\n    width: 30%;\r\n    padding: 2%;\r\n\r\n    @media (max-width: 750px) {\r\n        width: 90%;\r\n    }\r\n    \r\n}\r\n.popup__item-btn--cart {\r\n    max-width: max-content;\r\n    max-height: max-content;\r\n}\r\n\r\n.popup__item-title {\r\n    font-size: 2rem;\r\n}\r\n\r\n.popup__item-header {\r\n    font-weight: 700;\r\n\r\n    span {\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.popup__item-price {\r\n    font-weight: 700;\r\n    font-size: larger;\r\n}\r\n\r\n.btn-cross {\r\n    align-self: flex-end;\r\n    background: none;\r\n    background-image: url("../../../assets/svg/remove.svg");\r\n    background-repeat: no-repeat;\r\n    position: absolute;\r\n    border: none;\r\n    height: 52px;\r\n    width: 52px;\r\n    top: 2%;\r\n    right: 0px;\r\n    margin: auto;\r\n\r\n    &:hover {\r\n        cursor: pointer;\r\n    }\r\n}',
            ],
            sourceRoot: "",
          },
        ]);
        const p = l;
      },
      545: (r, e, n) => {
        n.d(e, { Z: () => A });
        var t = n(15),
          i = n.n(t),
          o = n(645),
          a = n.n(o)()(i());
        a.push([
          r.id,
          ".search{display:flex;flex-wrap:nowrap;align-items:center;gap:10px;min-width:300px;padding:5px;border:1px solid #000;border-radius:10px}@media(max-width: 750px){.search{min-width:250px}}.search img{max-width:24px}.search-input{border:none;padding:5px}@media(max-width: 750px){.search-input{max-width:170px}}.search-input:focus{outline:none}.search-remove:hover{cursor:pointer}.error{margin-top:2%;text-align:center;line-height:2rem;font-size:2rem}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/components/view/search/search.scss"],
            names: [],
            mappings:
              "AAAA,QACI,YAAA,CACA,gBAAA,CACA,kBAAA,CACA,QAAA,CACA,eAAA,CACA,WAAA,CACA,qBAAA,CACA,kBAAA,CAEA,yBAVJ,QAWQ,eAAA,CAAA,CAGJ,YACI,cAAA,CAKR,cACI,WAAA,CACA,WAAA,CAEA,yBAJJ,cAKY,eAAA,CAAA,CAGR,oBACI,YAAA,CAKJ,qBACI,cAAA,CAIR,OACI,aAAA,CACA,iBAAA,CACA,gBAAA,CACA,cAAA",
            sourcesContent: [
              ".search {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    gap: 10px;\r\n    min-width: 300px;\r\n    padding: 5px;\r\n    border: 1px solid black;\r\n    border-radius: 10px;\r\n\r\n    @media (max-width: 750px) {\r\n        min-width: 250px;\r\n    }\r\n\r\n    img {\r\n        max-width: 24px;\r\n    }\r\n\r\n}\r\n\r\n.search-input {\r\n    border: none;\r\n    padding: 5px;\r\n\r\n    @media (max-width: 750px) {\r\n            max-width: 170px;\r\n        }\r\n\r\n    &:focus {\r\n        outline: none;\r\n    }\r\n}\r\n\r\n.search-remove {\r\n    &:hover {\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.error {\r\n    margin-top: 2%;\r\n    text-align: center;\r\n    line-height: 2rem;\r\n    font-size: 2rem;\r\n}",
            ],
            sourceRoot: "",
          },
        ]);
        const A = a;
      },
      948: (r, e, n) => {
        n.d(e, { Z: () => A });
        var t = n(15),
          i = n.n(t),
          o = n(645),
          a = n.n(o)()(i());
        a.push([
          r.id,
          ".slider{display:flex;flex-direction:column;position:relative}.slider p{display:flex;justify-content:space-between;align-self:stretch}input[type=range]{-webkit-appearance:none;appearance:none;height:2px;width:100%;position:absolute;background-color:#c6c6c6;pointer-events:none}input[type=range]:hover{cursor:pointer}input[type=range]::-webkit-slider-thumb{pointer-events:all;-webkit-appearance:none;width:24px;height:24px;background-color:#fff;border-radius:50%;box-shadow:0 0 0 1px #c6c6c6;cursor:pointer}input[type=range]::-moz-range-thumb{pointer-events:all;-webkit-appearance:none;width:24px;height:24px;background-color:#fff;border-radius:50%;box-shadow:0 0 0 1px #c6c6c6;cursor:pointer}input[type=range]::-ms-thumb{pointer-events:all;-webkit-appearance:none;width:24px;height:24px;background-color:#fff;border-radius:50%;box-shadow:0 0 0 1px #c6c6c6;cursor:pointer}input[type=range]::-webkit-slider-thumb:hover{background:#f7f7f7}input[type=range]::-webkit-slider-thumb:active{box-shadow:inset 0 0 3px #387bbe,0 0 9px #387bbe;-webkit-box-shadow:inset 0 0 3px #387bbe,0 0 9px #387bbe}.slider__input-first{height:0;z-index:1}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/components/view/slider/slider.scss"],
            names: [],
            mappings:
              "AAAA,QACI,YAAA,CACA,qBAAA,CAEA,iBAAA,CAGA,UACI,YAAA,CACA,6BAAA,CACA,kBAAA,CAIR,kBAKI,uBAAA,CACI,eAAA,CACA,UAAA,CACA,UAAA,CACA,iBAAA,CACA,wBAAA,CACA,mBAAA,CAEJ,wBACI,cAAA,CASR,wCACI,kBAAA,CACA,uBAAA,CACA,UAAA,CACI,WAAA,CACA,qBAAA,CACA,iBAAA,CACA,4BAAA,CACA,cAAA,CAGR,oCACI,kBAAA,CACA,uBAAA,CACA,UAAA,CACI,WAAA,CACA,qBAAA,CACA,iBAAA,CACA,4BAAA,CACA,cAAA,CAGR,6BACI,kBAAA,CACA,uBAAA,CACA,UAAA,CACI,WAAA,CACA,qBAAA,CACA,iBAAA,CACA,4BAAA,CACA,cAAA,CAGR,8CACI,kBAAA,CAGJ,+CACI,gDAAA,CACA,wDAAA,CAGJ,qBAEY,QAAA,CACA,SAAA",
            sourcesContent: [
              '.slider {\r\n    display: flex;\r\n    flex-direction: column;\r\n    // align-items: center;\r\n    position: relative;\r\n    // pointer-events: none;\r\n    \r\n    p {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-self: stretch;\r\n    }\r\n}\r\n\r\ninput[type="range"] {\r\n    // height: 2em;\r\n    // display: block;\r\n    // margin: 0;\r\n\r\n    -webkit-appearance: none;\r\n        appearance: none;\r\n        height: 2px;\r\n        width: 100%;\r\n        position: absolute;\r\n        background-color: #C6C6C6;\r\n        pointer-events: none;\r\n\r\n    &:hover {\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n// .price-slider__container .slider__input-second,\r\n// .year-slider__container .slider__input-second {\r\n//     margin-top: -2em;\r\n// }\r\n\r\ninput[type="range"]::-webkit-slider-thumb {\r\n    pointer-events: all;\r\n    -webkit-appearance: none;\r\n    width: 24px;\r\n        height: 24px;\r\n        background-color: #fff;\r\n        border-radius: 50%;\r\n        box-shadow: 0 0 0 1px #C6C6C6;\r\n        cursor: pointer;\r\n}\r\n\r\ninput[type="range"]::-moz-range-thumb {\r\n    pointer-events: all;\r\n    -webkit-appearance: none;\r\n    width: 24px;\r\n        height: 24px;\r\n        background-color: #fff;\r\n        border-radius: 50%;\r\n        box-shadow: 0 0 0 1px #C6C6C6;\r\n        cursor: pointer;\r\n}\r\n\r\ninput[type="range"]::-ms-thumb {\r\n    pointer-events: all;\r\n    -webkit-appearance: none;\r\n    width: 24px;\r\n        height: 24px;\r\n        background-color: #fff;\r\n        border-radius: 50%;\r\n        box-shadow: 0 0 0 1px #C6C6C6;\r\n        cursor: pointer;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-thumb:hover {\r\n    background: #f7f7f7;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-thumb:active {\r\n    box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;\r\n    -webkit-box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;\r\n}\r\n\r\n.slider__input-first \r\n    {\r\n            height: 0;\r\n            z-index: 1;\r\n        }\r\n',
            ],
            sourceRoot: "",
          },
        ]);
        const A = a;
      },
      483: (r, e, n) => {
        n.d(e, { Z: () => A });
        var t = n(15),
          i = n.n(t),
          o = n(645),
          a = n.n(o)()(i());
        a.push([
          r.id,
          "@import url(https://fonts.googleapis.com/css2?family=Mingzat&family=Raleway:wght@400;700&display=swap);",
        ]),
          a.push([
            r.id,
            '*{box-sizing:border-box;line-height:1.5rem}body{font-family:"Mingzat",sans-serif;display:flex;flex-wrap:wrap;justify-content:center}header{display:flex;justify-content:space-between;align-items:center;background-color:#fff;color:#13315c;width:90%;margin:0 auto 5%;padding:2%;letter-spacing:4px;box-shadow:rgba(11,38,70,.4) 0px 5px,rgba(19,49,92,.3) 0px 10px,rgba(19,64,116,.2) 0px 15px,rgba(141,169,196,.3) 0px 20px,rgba(141,169,196,.1) 0px 25px}@media(max-width: 620px){header{flex-direction:column}}header .logo{display:flex;gap:20px;align-items:center;text-transform:uppercase}header .logo img{max-height:100px}@media(max-width: 750px){header .logo img{max-height:80px}}header .logo h1{line-height:2.5rem;max-width:fit-content}@media(max-width: 900px){header .logo h1{font-size:1.5rem;line-height:2rem}}@media(max-width: 750px){header .logo h1{max-width:fit-content}}.cart img{width:35px}aside{display:flex;flex-direction:column;width:20%;justify-self:flex-start}aside .btn{margin-bottom:10px}@media(max-width: 820px){aside{width:30%}}@media(max-width: 520px){aside{flex-direction:row;width:90%}}.btn{border-radius:.5rem;padding:5% 10%;width:max-content;color:#eef4ed;text-transform:uppercase;border:none;box-shadow:rgba(0,0,0,.1) 0px 0px 5px 0px,rgba(0,0,0,.1) 0px 0px 1px 0px;transition:.3s}.btn:hover{cursor:pointer}.btn:active{transform:translateY(4px)}.aside-button{background-color:#003049}.aside-button:hover{background-color:#000e16}.filter-label{margin-top:5%;font-size:1.2rem}main{display:flex;min-height:68vh;width:70%}@media(max-width: 820px){main{width:60%}}@media(max-width: 520px){main{width:90%}}footer{display:flex;align-items:center;justify-content:space-between;gap:5px;flex-wrap:wrap;width:90%;height:100px;margin:0 auto;font-size:1rem;background-color:#13315c;color:#e5e5e5;padding:1%}footer a{text-decoration:none;font-size:1.2rem;color:#e5e5e5}@media(max-width: 650px){footer{flex-direction:column;justify-content:center}}',
            "",
            {
              version: 3,
              sources: ["webpack://./src/scss/global.scss"],
              names: [],
              mappings:
                "AAEA,EACI,qBAAA,CACA,kBAAA,CAGJ,KACI,gCAAA,CACA,YAAA,CACA,cAAA,CACA,sBAAA,CAIJ,OACI,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,qBAAA,CACA,aAAA,CACA,SAAA,CACA,gBAAA,CACA,UAAA,CACA,kBAAA,CACA,uJAAA,CAEA,yBAZJ,OAaQ,qBAAA,CAAA,CAGJ,aACI,YAAA,CACA,QAAA,CACA,kBAAA,CACA,wBAAA,CAEA,iBACI,gBAAA,CAEA,yBAHJ,iBAIQ,eAAA,CAAA,CAIR,gBACI,kBAAA,CACA,qBAAA,CAEA,yBAJJ,gBAKQ,gBAAA,CACA,gBAAA,CAAA,CAGJ,yBATJ,gBAUQ,qBAAA,CAAA,CAQhB,UACI,UAAA,CAGJ,MACI,YAAA,CACA,qBAAA,CACA,SAAA,CACA,uBAAA,CAEA,WACI,kBAAA,CAGJ,yBAVJ,MAWQ,SAAA,CAAA,CAGJ,yBAdJ,MAeQ,kBAAA,CACA,SAAA,CAAA,CAIR,KACI,mBAAA,CACA,cAAA,CACA,iBAAA,CACA,aAAA,CACA,wBAAA,CACA,WAAA,CACA,wEAAA,CACA,cAAA,CAEA,WACI,cAAA,CAGJ,YACI,yBAAA,CAKR,cACI,wBAAA,CAEA,oBACI,wBAAA,CAIR,cACI,aAAA,CACA,gBAAA,CAGJ,KACI,YAAA,CACA,eAAA,CACA,SAAA,CAEI,yBALR,KAMY,SAAA,CAAA,CAGJ,yBATR,KAWY,SAAA,CAAA,CAMZ,OACI,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,OAAA,CACA,cAAA,CACA,SAAA,CACA,YAAA,CACA,aAAA,CACA,cAAA,CACA,wBAAA,CACA,aAAA,CACA,UAAA,CAEA,SACI,oBAAA,CACA,gBAAA,CACA,aAAA,CAGJ,yBApBJ,OAqBQ,qBAAA,CACA,sBAAA,CAAA",
              sourcesContent: [
                "@import url('https://fonts.googleapis.com/css2?family=Mingzat&family=Raleway:wght@400;700&display=swap');\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    line-height: 1.5rem;\r\n}\r\n\r\nbody {\r\n    font-family: 'Mingzat', sans-serif;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    \r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background-color: #fff;\r\n    color: #13315c;\r\n    width: 90%;\r\n    margin: 0 auto 5%;\r\n    padding: 2%;\r\n    letter-spacing: 4px;\r\n    box-shadow: rgba(11, 38, 70, 0.4) 0px 5px, rgba(19, 49, 92, 0.3) 0px 10px, rgba(19, 64, 116, 0.2) 0px 15px, rgba(141, 169, 196,0.3) 0px 20px, rgba(141, 169, 196, 0.1) 0px 25px;\r\n\r\n    @media (max-width: 620px) {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .logo {\r\n        display: flex;\r\n        gap: 20px;\r\n        align-items: center;\r\n        text-transform: uppercase;\r\n\r\n        img {\r\n            max-height: 100px;\r\n\r\n            @media (max-width: 750px) {\r\n                max-height: 80px;\r\n            }\r\n        }\r\n\r\n        h1 {\r\n            line-height: 2.5rem;\r\n            max-width: fit-content;\r\n\r\n            @media (max-width: 900px) {\r\n                font-size: 1.5rem;\r\n                line-height: 2rem;\r\n            }\r\n\r\n            @media (max-width: 750px) {\r\n                max-width: fit-content;\r\n            }\r\n\r\n         }\r\n    }\r\n    \r\n}\r\n\r\n.cart img {\r\n    width: 35px;\r\n}\r\n\r\naside {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 20%;\r\n    justify-self: flex-start;\r\n\r\n    .btn {\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    @media (max-width: 820px) {\r\n        width: 30%;\r\n    }\r\n\r\n    @media (max-width: 520px) {\r\n        flex-direction: row;\r\n        width: 90%;\r\n    }\r\n}\r\n\r\n.btn {\r\n    border-radius: 0.5rem;\r\n    padding: 5% 10%;\r\n    width: max-content;\r\n    color: #eef4ed;\r\n    text-transform: uppercase;\r\n    border: none;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;\r\n    transition: 0.3s;\r\n\r\n    &:hover {\r\n        cursor: pointer;\r\n    }\r\n\r\n    &:active {\r\n        transform: translateY(4px);\r\n    }\r\n\r\n}\r\n\r\n.aside-button {\r\n    background-color: #003049;\r\n\r\n    &:hover {\r\n        background-color: darken($color: #003049, $amount: 10%);\r\n    }\r\n}\r\n\r\n.filter-label {\r\n    margin-top: 5%;\r\n    font-size: 1.2rem;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    min-height: 68vh;\r\n    width: 70%;\r\n    \r\n        @media (max-width: 820px) {\r\n            width: 60%;\r\n        }\r\n\r\n        @media (max-width: 520px) {\r\n            \r\n            width: 90%;\r\n        }\r\n}\r\n\r\n\r\n\r\nfooter {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 5px;\r\n    flex-wrap: wrap;\r\n    width: 90%;\r\n    height: 100px;\r\n    margin: 0 auto;\r\n    font-size: 1rem;\r\n    background-color: #13315c;\r\n    color: #e5e5e5;\r\n    padding: 1%;\r\n\r\n    a {\r\n        text-decoration: none;\r\n        font-size: 1.2rem;\r\n        color:#e5e5e5 ;\r\n    }\r\n\r\n    @media (max-width: 650px) {\r\n        flex-direction: column;\r\n        justify-content: center;\r\n    }\r\n}\r\n",
              ],
              sourceRoot: "",
            },
          ]);
        const A = a;
      },
      89: (r, e, n) => {
        n.d(e, { Z: () => A });
        var t = n(15),
          i = n.n(t),
          o = n(645),
          a = n.n(o)()(i());
        a.push([
          r.id,
          "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:rgba(0,0,0,0)}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/scss/normalize.scss"],
            names: [],
            mappings:
              "AAAA,2EAAA,CAUA,KACI,gBAAA,CAEA,6BAAA,CAWJ,KACI,QAAA,CAOJ,KACI,aAAA,CAQJ,GACI,aAAA,CACA,cAAA,CAWJ,GACI,sBAAA,CAEA,QAAA,CAEA,gBAAA,CASJ,IACI,+BAAA,CAEA,aAAA,CAWJ,EACI,8BAAA,CAQJ,YACI,kBAAA,CAEA,yBAAA,CAEA,gCAAA,CAQJ,SAEI,kBAAA,CAQJ,cAGI,+BAAA,CAEA,aAAA,CAQJ,MACI,aAAA,CAQJ,QAEI,aAAA,CACA,aAAA,CACA,iBAAA,CACA,uBAAA,CAGJ,IACI,cAAA,CAGJ,IACI,UAAA,CAUJ,IACI,iBAAA,CAWJ,sCAKI,mBAAA,CAEA,cAAA,CAEA,gBAAA,CAEA,QAAA,CASJ,aAGI,gBAAA,CAQJ,cAGI,mBAAA,CAOJ,gDAII,yBAAA,CAOJ,wHAII,iBAAA,CACA,SAAA,CAOJ,4GAII,6BAAA,CAOJ,SACI,0BAAA,CAUJ,OACI,qBAAA,CAEA,aAAA,CAEA,aAAA,CAEA,cAAA,CAEA,SAAA,CAEA,kBAAA,CAQJ,SACI,uBAAA,CAOJ,SACI,aAAA,CAQJ,6BAEI,qBAAA,CAEA,SAAA,CAQJ,kFAEI,WAAA,CAQJ,cACI,4BAAA,CAEA,mBAAA,CAQJ,yCACI,uBAAA,CAQJ,6BACI,yBAAA,CAEA,YAAA,CAWJ,QACI,aAAA,CAOJ,QACI,iBAAA,CAUJ,SACI,YAAA,CAOJ,SACI,YAAA",
            sourcesContent: [
              '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n    line-height: 1.15;\r\n    /* 1 */\r\n    -webkit-text-size-adjust: 100%;\r\n    /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n    display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n    box-sizing: content-box;\r\n    /* 1 */\r\n    height: 0;\r\n    /* 1 */\r\n    overflow: visible;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n    font-family: monospace, monospace;\r\n    /* 1 */\r\n    font-size: 1em;\r\n    /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n    background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n    border-bottom: none;\r\n    /* 1 */\r\n    text-decoration: underline;\r\n    /* 2 */\r\n    text-decoration: underline dotted;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n    font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n    font-family: monospace, monospace;\r\n    /* 1 */\r\n    font-size: 1em;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n    font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n    bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n    top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n    border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n    font-family: inherit;\r\n    /* 1 */\r\n    font-size: 100%;\r\n    /* 1 */\r\n    line-height: 1.15;\r\n    /* 1 */\r\n    margin: 0;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput {\r\n    /* 1 */\r\n    overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect {\r\n    /* 1 */\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type="button"],\r\n[type="reset"],\r\n[type="submit"] {\r\n    -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type="button"]::-moz-focus-inner,\r\n[type="reset"]::-moz-focus-inner,\r\n[type="submit"]::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type="button"]:-moz-focusring,\r\n[type="reset"]:-moz-focusring,\r\n[type="submit"]:-moz-focusring {\r\n    outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n    padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n    box-sizing: border-box;\r\n    /* 1 */\r\n    color: inherit;\r\n    /* 2 */\r\n    display: table;\r\n    /* 1 */\r\n    max-width: 100%;\r\n    /* 1 */\r\n    padding: 0;\r\n    /* 3 */\r\n    white-space: normal;\r\n    /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n    vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n    overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type="checkbox"],\r\n[type="radio"] {\r\n    box-sizing: border-box;\r\n    /* 1 */\r\n    padding: 0;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type="number"]::-webkit-inner-spin-button,\r\n[type="number"]::-webkit-outer-spin-button {\r\n    height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type="search"] {\r\n    -webkit-appearance: textfield;\r\n    /* 1 */\r\n    outline-offset: -2px;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type="search"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n    -webkit-appearance: button;\r\n    /* 1 */\r\n    font: inherit;\r\n    /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n    display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n    display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n    display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n    display: none;\r\n}',
            ],
            sourceRoot: "",
          },
        ]);
        const A = a;
      },
      645: (r) => {
        r.exports = function (r) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = r(e);
                return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
              }).join("");
            }),
            (e.i = function (r, n, t) {
              "string" == typeof r && (r = [[null, r, ""]]);
              var i = {};
              if (t)
                for (var o = 0; o < this.length; o++) {
                  var a = this[o][0];
                  null != a && (i[a] = !0);
                }
              for (var A = 0; A < r.length; A++) {
                var s = [].concat(r[A]);
                (t && i[s[0]]) ||
                  (n &&
                    (s[2]
                      ? (s[2] = "".concat(n, " and ").concat(s[2]))
                      : (s[2] = n)),
                  e.push(s));
              }
            }),
            e
          );
        };
      },
      15: (r) => {
        function e(r, e) {
          (null == e || e > r.length) && (e = r.length);
          for (var n = 0, t = new Array(e); n < e; n++) t[n] = r[n];
          return t;
        }
        r.exports = function (r) {
          var n,
            t,
            i =
              ((t = 4),
              (function (r) {
                if (Array.isArray(r)) return r;
              })((n = r)) ||
                (function (r, e) {
                  var n =
                    r &&
                    (("undefined" != typeof Symbol && r[Symbol.iterator]) ||
                      r["@@iterator"]);
                  if (null != n) {
                    var t,
                      i,
                      o = [],
                      a = !0,
                      A = !1;
                    try {
                      for (
                        n = n.call(r);
                        !(a = (t = n.next()).done) &&
                        (o.push(t.value), !e || o.length !== e);
                        a = !0
                      );
                    } catch (r) {
                      (A = !0), (i = r);
                    } finally {
                      try {
                        a || null == n.return || n.return();
                      } finally {
                        if (A) throw i;
                      }
                    }
                    return o;
                  }
                })(n, t) ||
                (function (r, n) {
                  if (r) {
                    if ("string" == typeof r) return e(r, n);
                    var t = Object.prototype.toString.call(r).slice(8, -1);
                    return (
                      "Object" === t &&
                        r.constructor &&
                        (t = r.constructor.name),
                      "Map" === t || "Set" === t
                        ? Array.from(r)
                        : "Arguments" === t ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                        ? e(r, n)
                        : void 0
                    );
                  }
                })(n, t) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()),
            o = i[1],
            a = i[3];
          if (!a) return o;
          if ("function" == typeof btoa) {
            var A = btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
              s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                A
              ),
              c = "/*# ".concat(s, " */"),
              l = a.sources.map(function (r) {
                return "/*# sourceURL="
                  .concat(a.sourceRoot || "")
                  .concat(r, " */");
              });
            return [o].concat(l).concat([c]).join("\n");
          }
          return [o].join("\n");
        };
      },
      667: (r) => {
        r.exports = function (r, e) {
          return (
            e || (e = {}),
            "string" != typeof (r = r && r.__esModule ? r.default : r)
              ? r
              : (/^['"].*['"]$/.test(r) && (r = r.slice(1, -1)),
                e.hash && (r += e.hash),
                /["'() \t\n]/.test(r) || e.needQuotes
                  ? '"'.concat(
                      r.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : r)
          );
        };
      },
      379: (r, e, n) => {
        var t,
          i = (function () {
            var r = {};
            return function (e) {
              if (void 0 === r[e]) {
                var n = document.querySelector(e);
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head;
                  } catch (r) {
                    n = null;
                  }
                r[e] = n;
              }
              return r[e];
            };
          })(),
          o = [];
        function a(r) {
          for (var e = -1, n = 0; n < o.length; n++)
            if (o[n].identifier === r) {
              e = n;
              break;
            }
          return e;
        }
        function A(r, e) {
          for (var n = {}, t = [], i = 0; i < r.length; i++) {
            var A = r[i],
              s = e.base ? A[0] + e.base : A[0],
              c = n[s] || 0,
              l = "".concat(s, " ").concat(c);
            n[s] = c + 1;
            var d = a(l),
              p = { css: A[1], media: A[2], sourceMap: A[3] };
            -1 !== d
              ? (o[d].references++, o[d].updater(p))
              : o.push({ identifier: l, updater: h(p, e), references: 1 }),
              t.push(l);
          }
          return t;
        }
        function s(r) {
          var e = document.createElement("style"),
            t = r.attributes || {};
          if (void 0 === t.nonce) {
            var o = n.nc;
            o && (t.nonce = o);
          }
          if (
            (Object.keys(t).forEach(function (r) {
              e.setAttribute(r, t[r]);
            }),
            "function" == typeof r.insert)
          )
            r.insert(e);
          else {
            var a = i(r.insert || "head");
            if (!a)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            a.appendChild(e);
          }
          return e;
        }
        var c,
          l =
            ((c = []),
            function (r, e) {
              return (c[r] = e), c.filter(Boolean).join("\n");
            });
        function d(r, e, n, t) {
          var i = n
            ? ""
            : t.media
            ? "@media ".concat(t.media, " {").concat(t.css, "}")
            : t.css;
          if (r.styleSheet) r.styleSheet.cssText = l(e, i);
          else {
            var o = document.createTextNode(i),
              a = r.childNodes;
            a[e] && r.removeChild(a[e]),
              a.length ? r.insertBefore(o, a[e]) : r.appendChild(o);
          }
        }
        function p(r, e, n) {
          var t = n.css,
            i = n.media,
            o = n.sourceMap;
          if (
            (i ? r.setAttribute("media", i) : r.removeAttribute("media"),
            o &&
              "undefined" != typeof btoa &&
              (t += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                " */"
              )),
            r.styleSheet)
          )
            r.styleSheet.cssText = t;
          else {
            for (; r.firstChild; ) r.removeChild(r.firstChild);
            r.appendChild(document.createTextNode(t));
          }
        }
        var u = null,
          m = 0;
        function h(r, e) {
          var n, t, i;
          if (e.singleton) {
            var o = m++;
            (n = u || (u = s(e))),
              (t = d.bind(null, n, o, !1)),
              (i = d.bind(null, n, o, !0));
          } else
            (n = s(e)),
              (t = p.bind(null, n, e)),
              (i = function () {
                !(function (r) {
                  if (null === r.parentNode) return !1;
                  r.parentNode.removeChild(r);
                })(n);
              });
          return (
            t(r),
            function (e) {
              if (e) {
                if (
                  e.css === r.css &&
                  e.media === r.media &&
                  e.sourceMap === r.sourceMap
                )
                  return;
                t((r = e));
              } else i();
            }
          );
        }
        r.exports = function (r, e) {
          (e = e || {}).singleton ||
            "boolean" == typeof e.singleton ||
            (e.singleton =
              (void 0 === t &&
                (t = Boolean(
                  window && document && document.all && !window.atob
                )),
              t));
          var n = A((r = r || []), e);
          return function (r) {
            if (
              ((r = r || []),
              "[object Array]" === Object.prototype.toString.call(r))
            ) {
              for (var t = 0; t < n.length; t++) {
                var i = a(n[t]);
                o[i].references--;
              }
              for (var s = A(r, e), c = 0; c < n.length; c++) {
                var l = a(n[c]);
                0 === o[l].references && (o[l].updater(), o.splice(l, 1));
              }
              n = s;
            }
          };
        };
      },
      919: (r, e, n) => {
        r.exports = n.p + "img/c97cd081473ec64f2ccb.svg";
      },
    },
    e = {};
  function n(t) {
    var i = e[t];
    if (void 0 !== i) return i.exports;
    var o = (e[t] = { id: t, exports: {} });
    return r[t](o, o.exports, n), o.exports;
  }
  (n.n = (r) => {
    var e = r && r.__esModule ? () => r.default : () => r;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (r, e) => {
      for (var t in e)
        n.o(e, t) &&
          !n.o(r, t) &&
          Object.defineProperty(r, t, { enumerable: !0, get: e[t] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (r) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e)),
    (() => {
      var r;
      n.g.importScripts && (r = n.g.location + "");
      var e = n.g.document;
      if (!r && e && (e.currentScript && (r = e.currentScript.src), !r)) {
        var t = e.getElementsByTagName("script");
        t.length && (r = t[t.length - 1].src);
      }
      if (!r)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (r = r
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = r);
    })(),
    (n.nc = void 0),
    (() => {
      var r = n(379),
        e = n.n(r),
        t = n(371);
      e()(t.Z, { insert: "head", singleton: !1 }), t.Z.locals;
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
        function r() {}
        return (
          (r.prototype.toggle = function (r) {
            var e,
              n,
              t = localStorage.getItem("favorites"),
              o = t ? t.split("-") : [];
            if (r.target) {
              var a = r.currentTarget.parentElement;
              if (a) {
                var A = a.querySelector(".card__item-title");
                A &&
                  ((n = A.innerHTML.toLowerCase()),
                  o.includes(n)
                    ? (o.splice(o.indexOf(n), 1),
                      null === (e = a.dataset.filters) ||
                        void 0 === e ||
                        e.replace("-favorite", ""))
                    : (o.push(n), (a.dataset.filters += "-favorite")),
                  localStorage.setItem("favorites", o.join("-")));
              }
              (document.querySelector(".products").innerHTML = ""),
                new p().draw(i);
            }
          }),
          (r.prototype.checkFav = function (r) {
            var e = localStorage.getItem("favorites");
            return !!(e ? e.split("-") : []).includes(r);
          }),
          r
        );
      })();
      var a = function (r, e, n) {
        if (n || 2 === arguments.length)
          for (var t, i = 0, o = e.length; i < o; i++)
            (!t && i in e) ||
              (t || (t = Array.prototype.slice.call(e, 0, i)), (t[i] = e[i]));
        return r.concat(t || Array.prototype.slice.call(e));
      };
      const A = (function () {
        function r() {
          (this.allProducts = Array.from(
            document.querySelectorAll(".card__item")
          )),
            (this.filteredProducts = []),
            (this.favorites = new o()),
            (this.productsWrapper = document.querySelector(".products")),
            (this.card = new p());
        }
        return (
          (r.prototype.removeFilter = function (r) {
            var e = localStorage.getItem("filters");
            if (e) {
              var n = e.split("-");
              if (
                r.startsWith("color") ||
                r.startsWith("brush") ||
                r.startsWith("author")
              ) {
                var t = r.split("*"),
                  i = new RegExp("^".concat(t[0]));
                for (var o in n)
                  if (i.test(n[o])) {
                    var a = n[o].split("*");
                    a.length > 2
                      ? (a.splice(a.indexOf(t[1]), 1), (n[o] = a.join("*")))
                      : n.splice(+o, 1);
                  }
              } else
                for (var o in ((i = new RegExp("^".concat(r))), n))
                  i.test(n[o]) && n.splice(+o, 1);
              localStorage.setItem("filters", n.join("-"));
            }
          }),
          (r.prototype.filterProducts = function () {
            var r,
              e = this,
              n = localStorage.getItem("filters");
            if (n)
              0 === (r = n.split("-")).length || "" === r[0]
                ? this.card.draw(i)
                : r.forEach(function (r) {
                    r.startsWith("price") || r.startsWith("year")
                      ? e.filterByPriceAndYear(r)
                      : r.startsWith("sale") || r.startsWith("favorite")
                      ? e.filterBySaleAndFavorite(r)
                      : e.filterByProperty(r);
                  }),
                this.drawProducts(),
                (this.filteredProducts = []);
            else {
              this.productsWrapper.innerHTML = "";
              for (var t = 0, o = this.allProducts; t < o.length; t++) {
                var a = o[t];
                this.productsWrapper.appendChild(a);
              }
            }
          }),
          (r.prototype.filterByPriceAndYear = function (r) {
            var e =
                this.filteredProducts.length >= 1
                  ? a([], this.filteredProducts, !0)
                  : a([], this.allProducts, !0),
              n = r.split("*"),
              t = ".".concat(n[0], "-slider"),
              i = e.reduce(function (r, e) {
                var t = e.querySelector(".card__item-".concat(n[0]));
                return (
                  t &&
                    parseInt(t.innerHTML) >= +n[1] &&
                    parseInt(t.innerHTML) <= +n[2] &&
                    r.push(e),
                  r
                );
              }, []);
            this.filteredProducts = a([], i, !0);
            var o = Array.from(document.querySelectorAll(t));
            o && ((o[0].value = n[1]), (o[1].value = n[2]));
            var A = document.querySelector("".concat(t, "__container"));
            if (A) {
              var s = A.querySelector(".from"),
                c = A.querySelector(".to");
              s &&
                c &&
                ((s.innerHTML = o[0].value), (c.innerHTML = o[1].value));
            }
          }),
          (r.prototype.filterBySaleAndFavorite = function (r) {
            var e =
                this.filteredProducts.length >= 1
                  ? a([], this.filteredProducts, !0)
                  : a([], this.allProducts, !0),
              n = [],
              t = "sale" === r ? ".onsale" : ".isfavorite",
              i = document.querySelector(t);
            i && (i.checked = !0);
            for (var o = 0, A = e; o < A.length; o++) {
              var s = A[o],
                c = s.dataset.filters;
              c && c.split("-").includes(r) && n.push(s);
            }
            this.filteredProducts = a([], n, !0);
          }),
          (r.prototype.filterByProperty = function (r) {
            var e =
                this.filteredProducts.length >= 1
                  ? a([], this.filteredProducts, !0)
                  : a([], this.allProducts, !0),
              n = [];
            r
              .split("*")
              .slice(1)
              .forEach(function (r) {
                var t = document.querySelector("#".concat(r));
                t && (t.checked = !0);
                for (var i = 0, o = e; i < o.length; i++) {
                  var a = o[i],
                    A = a.dataset.filters;
                  A && A.split("-").includes(r) && n.push(a);
                }
              }),
              (this.filteredProducts = a([], n, !0));
          }),
          (r.prototype.drawProducts = function () {
            if (
              ((this.productsWrapper.innerHTML = ""),
              this.filteredProducts.length)
            )
              for (var r = 0, e = this.filteredProducts; r < e.length; r++) {
                var n = e[r],
                  t = n.querySelector(".card__item-title"),
                  i = void 0;
                if (t) {
                  i = t.innerHTML.toLowerCase();
                  var o = this.favorites.checkFav(i),
                    a = n.querySelector(".fav-btn img");
                  o &&
                    a &&
                    a.setAttribute("src", "./assets/svg/like-black.svg");
                }
                this.productsWrapper.appendChild(n);
              }
            else {
              var A = document.createElement("div");
              A.classList.add("error"),
                (A.innerHTML =
                  "Sorry, nothing could be found. You can try another search request."),
                this.productsWrapper.appendChild(A);
            }
          }),
          r
        );
      })();
      var s = n(171);
      e()(s.Z, { insert: "head", singleton: !1 }), s.Z.locals;
      const c = function () {
          var r = this;
          (this.createPopup = function (e) {
            console.log("hi");
            var n = e.target.parentElement;
            if (n) {
              var t,
                o = n.querySelector(".card__item-title");
              if (o) {
                t = o.innerHTML;
                var a = i.filter(function (r) {
                    return r.title === t;
                  })[0],
                  A = document.createDocumentFragment(),
                  s = document.querySelector("#popupTemp");
                if (s) {
                  var c = s.content.cloneNode(!0);
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
                    var C = c.querySelector(".popup__item-color");
                    C && (C.innerHTML += a.color);
                    var g = c.querySelector(".popup__item-brush");
                    g && (g.innerHTML += a.brush);
                    var b = c.querySelector(".popup__item-descr");
                    b && (b.innerHTML += a.description);
                    var x = c.querySelector(".btn-cross");
                    x && x.addEventListener("click", r.closePopup);
                    var y = c.querySelector(".popup__item");
                    y && y.addEventListener("click", r.closePopup), A.append(c);
                    var v = document.querySelector("main");
                    if (v) {
                      v.append(A);
                      var w = document.querySelector("body");
                      w && (w.style.overflow = "hidden");
                    }
                  }
                }
              }
            }
          }),
            (this.closePopup = function () {
              var r = document.querySelector("main");
              if (r) {
                var e = r.lastElementChild;
                e && r.removeChild(e);
                var n = document.querySelector("body");
                n && (n.style.overflow = "visible");
              }
            });
        },
        l = (function () {
          function r() {}
          return (
            (r.prototype.sortProducts = function () {
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
            (r.prototype.sort = function (r, e) {
              var n = Array.from(document.querySelectorAll(".card__item")),
                t =
                  "price" === r
                    ? ".card__item-price"
                    : "title" === r
                    ? ".card__item-title"
                    : ".card__item-year";
              "ascending" === e && "title" === r
                ? n.sort(function (r, e) {
                    var n, i;
                    return (null === (n = r.querySelector(t)) || void 0 === n
                      ? void 0
                      : n.innerHTML
                    ).localeCompare(
                      null === (i = e.querySelector(t)) || void 0 === i
                        ? void 0
                        : i.innerHTML
                    );
                  })
                : "descending" === e && "title" === r
                ? n.sort(function (r, e) {
                    var n, i;
                    return (null === (n = e.querySelector(t)) || void 0 === n
                      ? void 0
                      : n.innerHTML
                    ).localeCompare(
                      null === (i = r.querySelector(t)) || void 0 === i
                        ? void 0
                        : i.innerHTML
                    );
                  })
                : "ascending" === e
                ? n.sort(function (r, e) {
                    var n, i;
                    return (
                      parseFloat(
                        null === (n = r.querySelector(t)) || void 0 === n
                          ? void 0
                          : n.innerHTML
                      ) -
                      parseFloat(
                        null === (i = e.querySelector(t)) || void 0 === i
                          ? void 0
                          : i.innerHTML
                      )
                    );
                  })
                : "descending" === e &&
                  n.sort(function (r, e) {
                    var n, i;
                    return (
                      parseFloat(
                        null === (n = e.querySelector(t)) || void 0 === n
                          ? void 0
                          : n.innerHTML
                      ) -
                      parseFloat(
                        null === (i = r.querySelector(t)) || void 0 === i
                          ? void 0
                          : i.innerHTML
                      )
                    );
                  }),
                Array.from(document.querySelectorAll("option")).forEach(
                  function (n) {
                    n.value === "".concat(r, "-").concat(e) &&
                      (n.selected = !0);
                  }
                );
              var i = document.querySelector(".products");
              (i.innerHTML = ""),
                n.forEach(function (r) {
                  return i.appendChild(r);
                });
            }),
            r
          );
        })();
      var d = n(296);
      e()(d.Z, { insert: "head", singleton: !1 }), d.Z.locals;
      const p = (function () {
        function r() {
          (this.favorites = new o()), (this.popup = new c());
        }
        return (
          (r.prototype.draw = function (r) {
            var e = this,
              n = document.createDocumentFragment(),
              t = document.querySelector("#productCardTemp");
            r.forEach(function (r) {
              if (t) {
                var i = t.content.cloneNode(!0);
                if (i) {
                  var o = i.querySelector(".card__item-title"),
                    a = e.favorites.checkFav(r.title.toLowerCase()),
                    s = i.querySelector(".fav-btn img");
                  a &&
                    s &&
                    s.setAttribute("src", "./assets/svg/like-black.svg"),
                    o && (o.textContent = r.title);
                  var c = i.querySelector(".card__item-img");
                  c &&
                    (c.setAttribute("src", r.url),
                    c.setAttribute("alt", r.title));
                  var d = i.querySelector(".card__item-year");
                  d && (d.textContent = r.year + "");
                  var p = i.querySelector(".card__item");
                  p &&
                    p.setAttribute(
                      "data-filters",
                      ""
                        .concat(r.brush, "-")
                        .concat(r.author.toLowerCase(), "-")
                        .concat(r.color)
                    );
                  var u = i.querySelector(".card__item-price");
                  if (
                    u &&
                    ((u.textContent = r.price + "$"), r.onsale && r.salePrice)
                  ) {
                    u.classList.add("card__item_sale-price");
                    var m = document.createElement("span");
                    m.classList.add("card__item-price_sale"),
                      (m.innerHTML = "".concat(r.price, "$")),
                      (u.innerHTML = "".concat(r.salePrice, "$")),
                      u.before(m);
                    var h = document.createElement("span");
                    h.classList.add("card__item_sale-percent"),
                      (h.innerHTML = "-".concat(
                        Math.round(100 - (100 * r.salePrice) / r.price),
                        "%"
                      )),
                      m.after(h),
                      (p.dataset.filters += "-sale");
                  }
                  var f = i.querySelector(".fav-btn");
                  f &&
                    f.addEventListener("click", function (r) {
                      e.favorites.toggle(r),
                        new A().filterProducts(),
                        new l().sortProducts();
                    });
                  var C = i.querySelector(".card__item-btn--more");
                  C &&
                    C.addEventListener("click", function (r) {
                      return e.popup.createPopup(r);
                    }),
                    n.append(i);
                  var g = document.querySelector(".products");
                  g && g.append(n);
                }
              }
            });
          }),
          r
        );
      })();
      var u = n(545);
      e()(u.Z, { insert: "head", singleton: !1 }), u.Z.locals;
      var m = (function () {
        function r() {}
        return (
          (r.prototype.searchProduct = function () {
            var r = new p(),
              e = document.querySelector(".products"),
              n = document
                .querySelector(".search-input")
                .value.toLowerCase()
                .trim();
            if (!n) return (e.innerHTML = ""), void r.draw(i);
            var t = document.querySelectorAll(".card__item"),
              o = Array.from(t).filter(function (r) {
                var e;
                return null === (e = r.querySelector(".card__item-title")) ||
                  void 0 === e
                  ? void 0
                  : e.innerHTML.toLowerCase().includes(n);
              });
            if (o.length)
              (e.innerHTML = ""),
                o.map(function (r) {
                  return e.appendChild(r);
                });
            else {
              var a = document.createElement("div");
              a.classList.add("error"),
                (a.innerHTML =
                  "Sorry, nothing could be found. You can try another search request."),
                (e.innerHTML = ""),
                e.appendChild(a);
            }
          }),
          (r.prototype.removeSearchText = function () {
            (document.querySelector(".search-input").value = ""),
              this.searchProduct();
          }),
          r
        );
      })();
      const h = m;
      var f = n(948);
      e()(f.Z, { insert: "head", singleton: !1 }), f.Z.locals;
      const C = (function () {
        function r(r) {
          (this.className = r), (this.filter = new A());
        }
        return (
          (r.prototype.draw = function () {
            var r = Array.from(document.querySelectorAll(this.className));
            if (+r[0].value > +r[1].value) {
              var e = r[1].value;
              (r[1].value = r[0].value), (r[0].value = e);
            }
            +r[1].value < +r[0].value &&
              ((e = r[0].value), (r[0].value = r[1].value), (r[1].value = e));
          }),
          (r.prototype.setRangeFilter = function () {
            var r = Array.from(document.querySelectorAll(this.className)),
              e = document.querySelector(
                "".concat(this.className, "__container")
              );
            if (e) {
              var n = e.querySelector(".from"),
                t = e.querySelector(".to");
              n &&
                t &&
                ((n.innerHTML = r[0].value), (t.innerHTML = r[1].value));
            }
            var i = this.className.split("-")[0].slice(1);
            this.filter.removeFilter(i);
            var o = ""
                .concat(i, "*")
                .concat(r[0].value, "*")
                .concat(r[1].value),
              a = localStorage.getItem("filters");
            a
              ? localStorage.setItem("filters", a + "-" + o)
              : localStorage.setItem("filters", o);
          }),
          r
        );
      })();
      var g = n(818);
      e()(g.Z, { insert: "head", singleton: !1 }), g.Z.locals;
      var b = (function () {
        function r() {}
        return (
          (r.prototype.addToCart = function (r) {
            var e,
              n,
              t = document.querySelector(".cart"),
              i = r.target;
            if (
              (i && (e = i.parentElement),
              e && (n = e.querySelector(".card__item-btn--remove")),
              i.classList.add("hidden"),
              n && n.classList.remove("hidden"),
              t)
            ) {
              var o = t.querySelector("span"),
                a = document.querySelector(".cart-warning");
              if (o && a) {
                var A = a.querySelector(".btn-cross_warning");
                A &&
                  A.addEventListener("click", function () {
                    return a.classList.add("hidden");
                  });
                var s = +o.innerHTML + 1;
                s > 20
                  ? a.classList.remove("hidden")
                  : ((o.innerHTML = s.toString()), a.classList.add("hidden"));
              }
            }
          }),
          (r.prototype.removeFromCart = function (r) {
            var e,
              n,
              t = document.querySelector(".cart"),
              i = r.target;
            if (
              (i && ((e = i.parentElement), i.classList.add("hidden")),
              e && (n = e.querySelector(".card__item-btn--cart")),
              n && n.classList.remove("hidden"),
              t)
            ) {
              var o = t.querySelector("span");
              if (o) {
                var a = +o.innerHTML - 1;
                if (a < 0) return;
                o.innerHTML = a.toString();
              }
            }
          }),
          r
        );
      })();
      const x = b;
      var y = (function () {
        function r() {
          (this.priceSlider = new C(".price-slider")),
            (this.yearSlider = new C(".year-slider")),
            (this.card = new p()),
            (this.sort = new l()),
            (this.popup = new c()),
            (this.search = new h()),
            (this.favorites = new o()),
            (this.cart = new x());
        }
        return (
          (r.prototype.start = function () {
            var r = this;
            this.card.draw(i);
            var e = document.querySelector(".search-input");
            e && e.addEventListener("keyup", this.search.searchProduct);
            var n = document.querySelector(".search-remove");
            n && n.addEventListener("click", this.search.removeSearchText);
            var t = document.querySelector(".sort");
            t &&
              t.addEventListener("change", function (e) {
                if (e.target) {
                  var n = e.target;
                  localStorage.setItem("sortBy", n.value),
                    r.sort.sortProducts();
                }
              });
            var o = new A();
            document.querySelectorAll(".filter").forEach(function (e) {
              return e.addEventListener("change", function (n) {
                var t,
                  i,
                  a = n.target,
                  A =
                    null === (t = a.parentElement) || void 0 === t
                      ? void 0
                      : t.parentElement;
                if (A)
                  if (((i = A.classList.value), e.checked)) {
                    var s = localStorage.getItem("filters");
                    if (s) {
                      var c = s.split("-"),
                        l = c.filter(function (r) {
                          return r.startsWith(i);
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
                o.filterProducts(), r.sort.sortProducts();
              });
            });
            var a = document.querySelector(".onsale");
            a &&
              a.addEventListener("change", function () {
                if (a.checked) {
                  var e = localStorage.getItem("filters");
                  e
                    ? localStorage.setItem("filters", e + "-sale")
                    : localStorage.setItem("filters", "sale");
                } else o.removeFilter("sale");
                o.filterProducts(), r.sort.sortProducts();
              });
            var s = document.querySelector(".isfavorite");
            s &&
              s.addEventListener("change", function () {
                if (s.checked) {
                  var e = localStorage.getItem("filters");
                  e
                    ? localStorage.setItem("filters", e + "-favorite")
                    : localStorage.setItem("filters", "favorite");
                } else o.removeFilter("favorite");
                o.filterProducts(), r.sort.sortProducts();
              }),
              Array.from(document.querySelectorAll(".slider__input")).forEach(
                function (e) {
                  e.addEventListener("change", function (e) {
                    var n = e.target;
                    n && n.classList.contains("price-slider")
                      ? (r.priceSlider.draw(), r.priceSlider.setRangeFilter())
                      : (r.yearSlider.draw(), r.yearSlider.setRangeFilter()),
                      o.filterProducts(),
                      r.sort.sortProducts();
                  });
                }
              ),
              document.querySelectorAll(".aside-button").forEach(function (e) {
                var n = e;
                n.addEventListener("click", function () {
                  n.classList.contains("remove-settings-button")
                    ? localStorage.clear()
                    : n.classList.contains("remove-filters-button") &&
                      localStorage.removeItem("filters"),
                    o.filterProducts(),
                    r.sort.sortProducts();
                });
              }),
              document
                .querySelectorAll(".card__item-btn--cart")
                .forEach(function (e) {
                  return e.addEventListener("click", function (e) {
                    return r.cart.addToCart(e);
                  });
                }),
              document
                .querySelectorAll(".card__item-btn--remove")
                .forEach(function (e) {
                  return e.addEventListener("click", function (e) {
                    return r.cart.removeFromCart(e);
                  });
                }),
              o.filterProducts(),
              this.sort.sortProducts();
          }),
          r
        );
      })();
      const v = y;
      var w = n(89);
      e()(w.Z, { insert: "head", singleton: !1 }), w.Z.locals;
      var B = n(483);
      e()(B.Z, { insert: "head", singleton: !1 }), B.Z.locals, new v().start();
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUtELGdCQUdsQixFQWxLQSxHQW9LQSxVLFlDdkthLElBQUksSUFMSCxDQUVkLE9BQWlCLE9BQ2pCLFdBQW9CLElBTUwsVyxhQ0pGLElBQUksSUFMSCxDQUVkLE9BQWlCLE9BQ2pCLFdBQW9CLElBTUwsWUNSSCxJQUFJLEdBQ1p3QyxTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L2NhcmQvY2FyZC5zY3NzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXJ0L2NhcnQuc2NzcyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9jb21wb25lbnRzL3ZpZXcvZmF2b3JpdGVzL2Zhdm9yaXRlcy5zY3NzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9wb3B1cC9wb3B1cC5zY3NzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zZWFyY2gvc2VhcmNoLnNjc3MiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L3NsaWRlci9zbGlkZXIuc2NzcyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9zY3NzL2dsb2JhbC5zY3NzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL3Njc3Mvbm9ybWFsaXplLnNjc3MiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9mYXZvcml0ZXMvZmF2b3JpdGVzLnNjc3M/NWNkYyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9waWN0dXJlcy1saXN0LnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9mYXZvcml0ZXMvZmF2b3JpdGVzLnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9maWx0ZXIvZmlsdGVyLnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9wb3B1cC9wb3B1cC5zY3NzP2Y5ZWMiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L3BvcHVwL3BvcHVwLnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zb3J0L3NvcnQudHMiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L2NhcmQvY2FyZC5zY3NzP2E2NTkiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L2NhcmQvY2FyZC50cyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc2VhcmNoL3NlYXJjaC5zY3NzPzQ0MjYiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L3NlYXJjaC9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L3NsaWRlci9zbGlkZXIuc2Nzcz9lOWZjIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zbGlkZXIvc2xpZGVyLnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXJ0L2NhcnQuc2Nzcz9lNDU5Iiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXJ0L2NhcnQudHMiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL3Njc3Mvbm9ybWFsaXplLnNjc3M/MjIyYiIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9zY3NzL2dsb2JhbC5zY3NzPzg4MDQiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NaW5nemF0JmZhbWlseT1SYWxld2F5OndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucHJvZHVjdHN7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2ZsZXgtd3JhcDp3cmFwO21hcmdpbi10b3A6MTBweDtwYWRkaW5nOjAgMiU7dHJhbnNpdGlvbjouM3N9LmNhcmRfX2l0ZW17ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6MTBweDthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luLWJvdHRvbTo1JTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cGFkZGluZzoyJTtib3gtc2hhZG93OnJnYmEoMCwwLDAsLjE1KSAyLjRweCAyLjRweCAzLjJweDtib3JkZXItcmFkaXVzOjFyZW07bWluLXdpZHRoOjIxMHB4fUBtZWRpYShtYXgtd2lkdGg6IDkyMHB4KXsuY2FyZF9faXRlbXttaW4td2lkdGg6Mjc1cHh9fUBtZWRpYShtYXgtd2lkdGg6IDg1MHB4KXsuY2FyZF9faXRlbXttaW4td2lkdGg6MjYwcHh9fUBtZWRpYShtYXgtd2lkdGg6IDgyMHB4KXsuY2FyZF9faXRlbXtmbGV4LWRpcmVjdGlvbjpyb3c7d2lkdGg6ODAlO21hcmdpbjowIGF1dG8gNSV9fUBtZWRpYShtYXgtd2lkdGg6IDUyMHB4KXsuY2FyZF9faXRlbXt3aWR0aDo5NSV9fS5jYXJkX19pdGVtLWRlc2NyaXB0aW9ue2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMHB4fS5jYXJkX19pdGVtLWRlc2NyaXB0aW9uIHB7bWFyZ2luOjA7dGV4dC1hbGlnbjpjZW50ZXJ9QG1lZGlhKG1heC13aWR0aDogNjUwcHgpey5jYXJkX19pdGVtLWRlc2NyaXB0aW9ue3dpZHRoOjgwJTttYXJnaW46MCBhdXRvIDUlfX0uY2FyZF9faXRlbS10aXRsZXtjb2xvcjojMGIyNTQ1O2ZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6MS41cmVtO2ZvbnQtZmFtaWx5OlxcXCJSYWxld2F5XFxcIixzYW5zLXNlcmlmfS5jYXJkX19pdGVtLXByaWNle2ZvbnQtd2VpZ2h0OjcwMH0uY2FyZF9faXRlbS1wcmljZV9zYWxle3RleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7Zm9udC13ZWlnaHQ6NDAwfS5jYXJkX19pdGVtX3NhbGUtcHJpY2V7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiM3ODAwMDA7Zm9udC1zaXplOmxhcmdlcjttYXJnaW4tbGVmdDo1cHh9LmNhcmRfX2l0ZW1fc2FsZS1wZXJjZW50e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JhY2tncm91bmQtY29sb3I6I2ZjYTMxMTtjb2xvcjojZmZmO2xldHRlci1zcGFjaW5nOjFweDtmb250LXNpemU6c21hbGxlcjtib3JkZXItcmFkaXVzOjVweDtwYWRkaW5nOjNweDttYXJnaW4tbGVmdDo1cHh9LmNhcmRfX2l0ZW0taW1ne21heC13aWR0aDoxNXZ3O3RyYW5zaXRpb246LjNzfS5jYXJkX19pdGVtLWltZzpob3Zlcntib3gtc2hhZG93OnJnYmEoMCwwLDAsLjEpIDBweCAxMHB4IDUwcHg7Y3Vyc29yOnBvaW50ZXJ9LmNhcmRfX2l0ZW0taW1nOmFjdGl2ZXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgycHgpfS5jYXJkX19pdGVtLWJ0bi0tY2FydCwuY2FyZF9faXRlbS1idG4tLW1vcmUsLmNhcmRfX2l0ZW0tYnRuLS1yZW1vdmV7YmFja2dyb3VuZC1jb2xvcjojOGRhOWM0fS5jYXJkX19pdGVtLWJ0bi0tY2FydDpob3ZlciwuY2FyZF9faXRlbS1idG4tLW1vcmU6aG92ZXIsLmNhcmRfX2l0ZW0tYnRuLS1yZW1vdmU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNmI5MGIzfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY2FyZC9jYXJkLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0EsVUFDSSxZQUFBLENBQ0Esa0JBQUEsQ0FDQSw2QkFBQSxDQUNBLHNCQUFBLENBQ0EsY0FBQSxDQUNBLGVBQUEsQ0FDQSxZQUFBLENBQ0EsY0FBQSxDQUdKLFlBQ0ksWUFBQSxDQUNBLHFCQUFBLENBQ0EsUUFBQSxDQUNBLGtCQUFBLENBQ0EsZ0JBQUEsQ0FDQSxxQkFBQSxDQUNBLFVBQUEsQ0FDQSw0Q0FBQSxDQUNBLGtCQUFBLENBQ0EsZUFBQSxDQUVBLHlCQVpKLFlBYVEsZUFBQSxDQUFBLENBR0oseUJBaEJKLFlBaUJRLGVBQUEsQ0FBQSxDQUdKLHlCQXBCSixZQXFCUSxrQkFBQSxDQUNBLFNBQUEsQ0FDQSxnQkFBQSxDQUFBLENBR0oseUJBMUJKLFlBMkJRLFNBQUEsQ0FBQSxDQUlSLHdCQUNJLFlBQUEsQ0FDQSxxQkFBQSxDQUNBLGtCQUFBLENBQ0EsUUFBQSxDQUVBLDBCQUNJLFFBQUEsQ0FDQSxpQkFBQSxDQUdKLHlCQVhKLHdCQVlRLFNBQUEsQ0FDQSxnQkFBQSxDQUFBLENBSVIsa0JBQ0ksYUFBQSxDQUNBLGVBQUEsQ0FDQSxnQkFBQSxDQUNBLGdDQUFBLENBR0osa0JBQ0ksZUFBQSxDQUdKLHVCQUNJLDRCQUFBLENBQ0EsZUFBQSxDQUdKLHVCQUNJLGVBQUEsQ0FDQSxhQUFBLENBQ0EsZ0JBQUEsQ0FDQSxlQUFBLENBR0oseUJBQ0ksb0JBQUEsQ0FDQSx3QkFBQSxDQUNBLFVBQUEsQ0FDQSxrQkFBQSxDQUNBLGlCQUFBLENBQ0EsaUJBQUEsQ0FDQSxXQUFBLENBQ0EsZUFBQSxDQUdKLGdCQUNJLGNBQUEsQ0FDQSxjQUFBLENBRUEsc0JBQ0ksdUNBQUEsQ0FDQSxjQUFBLENBR0osdUJBQ0kseUJBQUEsQ0FJUixvRUFHSSx3QkFBQSxDQUVBLHNGQUNJLHdCQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1pbmd6YXQmZmFtaWx5PVJhbGV3YXk6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcblxcclxcbi5wcm9kdWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMCAyJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2l0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAyJTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAyLjRweCAyLjRweCAzLjJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgbWluLXdpZHRoOiAyMTBweDtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XFxyXFxuICAgICAgICBtaW4td2lkdGg6IDI3NXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xcclxcbiAgICAgICAgbWluLXdpZHRoOiAyNjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNSU7XFxyXFxuICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcXHJcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2l0ZW0tZGVzY3JpcHRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDUlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19pdGVtLXRpdGxlIHtcXHJcXG4gICAgY29sb3I6ICMwYjI1NDU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9faXRlbS1wcmljZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19pdGVtLXByaWNlX3NhbGUge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2l0ZW1fc2FsZS1wcmljZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGNvbG9yOiAjNzgwMDAwO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2l0ZW1fc2FsZS1wZXJjZW50IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNhMzExO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDNweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2l0ZW0taW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxNXZ3O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMTBweCA1MHB4O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19pdGVtLWJ0bi0tY2FydCxcXHJcXG4uY2FyZF9faXRlbS1idG4tLW1vcmUsXFxyXFxuLmNhcmRfX2l0ZW0tYnRuLS1yZW1vdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGRhOWM0O1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3I6ICM4ZGE5YzQsICRhbW91bnQ6IDEwJSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhcnQgc3BhbntsZXR0ZXItc3BhY2luZzpub3JtYWx9LmNhcnQtd2FybmluZ3twb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOnJnYmEoNDEsNDEsNDEsLjYpO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uY2FydC13YXJuaW5nX19jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZC1jb2xvcjojZmZmO3BhZGRpbmc6MyU7Ym9yZGVyLXJhZGl1czo1cHh9LmNhcnQtd2FybmluZ19fY29udGFpbmVyIC5idG4tY3Jvc3N7dG9wOjVweDtyaWdodDotMTBweH0uaGlkZGVue2Rpc3BsYXk6bm9uZX0uY2FyZF9faXRlbS1idG4tLXJlbW92ZXtwYWRkaW5nOjUlO2ZvbnQtc2l6ZTpzbWFsbGVyfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY2FydC9jYXJ0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0ksV0FDSSxxQkFBQSxDQUtSLGNBQ0ksY0FBQSxDQUNJLEtBQUEsQ0FDQSxPQUFBLENBQ0EsUUFBQSxDQUNBLE1BQUEsQ0FDQSw0QkFBQSxDQUNBLFlBQUEsQ0FDQSxrQkFBQSxDQUNBLHNCQUFBLENBSVIseUJBQ0ksaUJBQUEsQ0FDQSxxQkFBQSxDQUNBLFVBQUEsQ0FDQSxpQkFBQSxDQUVBLG9DQUNJLE9BQUEsQ0FDQSxXQUFBLENBSVIsUUFDSSxZQUFBLENBR0osd0JBQ0ksVUFBQSxDQUNBLGlCQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYXJ0IHtcXHJcXG4gICAgc3BhbiB7XFxyXFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jYXJ0LXdhcm5pbmcge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQxLCA0MSwgNDEsIDAuNik7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY2FydC13YXJuaW5nX19jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDMlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgIC5idG4tY3Jvc3Mge1xcclxcbiAgICAgICAgdG9wOiA1cHg7XFxyXFxuICAgICAgICByaWdodDogLTEwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19pdGVtLWJ0bi0tcmVtb3ZlIHtcXHJcXG4gICAgcGFkZGluZzogNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZhdi1idG57YmFja2dyb3VuZDpub25lO2JvcmRlcjpub25lO3dpZHRoOjM1cHh9LmZhdi1idG46aG92ZXJ7Y3Vyc29yOnBvaW50ZXI7dHJhbnNmb3JtOnNrYWxlKDAuNyl9LmZhdi1idG4gaW1ne3dpZHRoOjEwMCV9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9mYXZvcml0ZXMvZmF2b3JpdGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsU0FDSSxlQUFBLENBQ0EsV0FBQSxDQUNBLFVBQUEsQ0FFQSxlQUNJLGNBQUEsQ0FDQSxvQkFBQSxDQUdKLGFBQ0ksVUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZmF2LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIFxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2thbGUoMC43KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbWd7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvc3ZnL3JlbW92ZS5zdmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucG9wdXBfX2l0ZW17cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7YmFja2dyb3VuZDpyZ2JhKDQxLDQxLDQxLC42KTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnBvcHVwX19pdGVtLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cGFkZGluZzoyJX1AbWVkaWEobWF4LXdpZHRoOiA3NTBweCl7LnBvcHVwX19pdGVtLWNvbnRhaW5lcntmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWF4LWhlaWdodDoxMDB2aH19LnBvcHVwX19pdGVtLWltZ3ttYXgtd2lkdGg6NTAlfUBtZWRpYShtYXgtd2lkdGg6IDc1MHB4KXsucG9wdXBfX2l0ZW0taW1ne21heC13aWR0aDo4MCV9fS5wb3B1cF9faXRlbS1kZXNjcmlwdGlvbntwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7d2lkdGg6MzAlO3BhZGRpbmc6MiV9QG1lZGlhKG1heC13aWR0aDogNzUwcHgpey5wb3B1cF9faXRlbS1kZXNjcmlwdGlvbnt3aWR0aDo5MCV9fS5wb3B1cF9faXRlbS1idG4tLWNhcnR7bWF4LXdpZHRoOm1heC1jb250ZW50O21heC1oZWlnaHQ6bWF4LWNvbnRlbnR9LnBvcHVwX19pdGVtLXRpdGxle2ZvbnQtc2l6ZToycmVtfS5wb3B1cF9faXRlbS1oZWFkZXJ7Zm9udC13ZWlnaHQ6NzAwfS5wb3B1cF9faXRlbS1oZWFkZXIgc3Bhbntmb250LXdlaWdodDo0MDB9LnBvcHVwX19pdGVtLXByaWNle2ZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6bGFyZ2VyfS5idG4tY3Jvc3N7YWxpZ24tc2VsZjpmbGV4LWVuZDtiYWNrZ3JvdW5kOm5vbmU7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXI6bm9uZTtoZWlnaHQ6NTJweDt3aWR0aDo1MnB4O3RvcDoyJTtyaWdodDowcHg7bWFyZ2luOmF1dG99LmJ0bi1jcm9zczpob3ZlcntjdXJzb3I6cG9pbnRlcn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy92aWV3L3BvcHVwL3BvcHVwLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsYUFDSSxjQUFBLENBQ0EsS0FBQSxDQUNBLE9BQUEsQ0FDQSxRQUFBLENBQ0EsTUFBQSxDQUNBLDRCQUFBLENBQ0EsWUFBQSxDQUNBLGtCQUFBLENBQ0Esc0JBQUEsQ0FHSix1QkFDSSxZQUFBLENBQ0Esa0JBQUEsQ0FDQSxrQkFBQSxDQUNBLDZCQUFBLENBQ0EscUJBQUEsQ0FDQSxVQUFBLENBRUEseUJBUkosdUJBU1cscUJBQUEsQ0FDQSxnQkFBQSxDQUFBLENBSVgsaUJBQ0ksYUFBQSxDQUNBLHlCQUZKLGlCQUdRLGFBQUEsQ0FBQSxDQUdSLHlCQUNJLGlCQUFBLENBQ0EscUJBQUEsQ0FDQSxTQUFBLENBQ0EsVUFBQSxDQUVBLHlCQU5KLHlCQU9RLFNBQUEsQ0FBQSxDQUlSLHVCQUNJLHFCQUFBLENBQ0Esc0JBQUEsQ0FHSixtQkFDSSxjQUFBLENBR0osb0JBQ0ksZUFBQSxDQUVBLHlCQUNJLGVBQUEsQ0FJUixtQkFDSSxlQUFBLENBQ0EsZ0JBQUEsQ0FHSixXQUNJLG1CQUFBLENBQ0EsZUFBQSxDQUNBLHdEQUFBLENBQ0EsMkJBQUEsQ0FDQSxpQkFBQSxDQUNBLFdBQUEsQ0FDQSxXQUFBLENBQ0EsVUFBQSxDQUNBLE1BQUEsQ0FDQSxTQUFBLENBQ0EsV0FBQSxDQUVBLGlCQUNJLGNBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBvcHVwX19pdGVtIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDEsIDQxLCA0MSwgMC42KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9faXRlbS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDIlO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19pdGVtLWltZyB7XFxyXFxuICAgIG1heC13aWR0aDogNTAlO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogODAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5wb3B1cF9faXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgcGFkZGluZzogMiU7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XFxyXFxuLnBvcHVwX19pdGVtLWJ0bi0tY2FydCB7XFxyXFxuICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2l0ZW0tdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9faXRlbS1oZWFkZXIge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcblxcclxcbiAgICBzcGFuIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19pdGVtLXByaWNlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxufVxcclxcblxcclxcbi5idG4tY3Jvc3Mge1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi8uLi8uLi9hc3NldHMvc3ZnL3JlbW92ZS5zdmdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogNTJweDtcXHJcXG4gICAgd2lkdGg6IDUycHg7XFxyXFxuICAgIHRvcDogMiU7XFxyXFxuICAgIHJpZ2h0OiAwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlYXJjaHtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOm5vd3JhcDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjEwcHg7bWluLXdpZHRoOjMwMHB4O3BhZGRpbmc6NXB4O2JvcmRlcjoxcHggc29saWQgIzAwMDtib3JkZXItcmFkaXVzOjEwcHh9QG1lZGlhKG1heC13aWR0aDogNzUwcHgpey5zZWFyY2h7bWluLXdpZHRoOjI1MHB4fX0uc2VhcmNoIGltZ3ttYXgtd2lkdGg6MjRweH0uc2VhcmNoLWlucHV0e2JvcmRlcjpub25lO3BhZGRpbmc6NXB4fUBtZWRpYShtYXgtd2lkdGg6IDc1MHB4KXsuc2VhcmNoLWlucHV0e21heC13aWR0aDoxNzBweH19LnNlYXJjaC1pbnB1dDpmb2N1c3tvdXRsaW5lOm5vbmV9LnNlYXJjaC1yZW1vdmU6aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9LmVycm9ye21hcmdpbi10b3A6MiU7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MnJlbTtmb250LXNpemU6MnJlbX1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy92aWV3L3NlYXJjaC9zZWFyY2guc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxRQUNJLFlBQUEsQ0FDQSxnQkFBQSxDQUNBLGtCQUFBLENBQ0EsUUFBQSxDQUNBLGVBQUEsQ0FDQSxXQUFBLENBQ0EscUJBQUEsQ0FDQSxrQkFBQSxDQUVBLHlCQVZKLFFBV1EsZUFBQSxDQUFBLENBR0osWUFDSSxjQUFBLENBS1IsY0FDSSxXQUFBLENBQ0EsV0FBQSxDQUVBLHlCQUpKLGNBS1ksZUFBQSxDQUFBLENBR1Isb0JBQ0ksWUFBQSxDQUtKLHFCQUNJLGNBQUEsQ0FJUixPQUNJLGFBQUEsQ0FDQSxpQkFBQSxDQUNBLGdCQUFBLENBQ0EsY0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2VhcmNoIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxyXFxuICAgICAgICBtaW4td2lkdGg6IDI1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDI0cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1pbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE3MHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZW1vdmUge1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3Ige1xcclxcbiAgICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2xpZGVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47cG9zaXRpb246cmVsYXRpdmV9LnNsaWRlciBwe2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1zZWxmOnN0cmV0Y2h9aW5wdXRbdHlwZT1yYW5nZV17LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO2hlaWdodDoycHg7d2lkdGg6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kLWNvbG9yOiNjNmM2YzY7cG9pbnRlci1ldmVudHM6bm9uZX1pbnB1dFt0eXBlPXJhbmdlXTpob3ZlcntjdXJzb3I6cG9pbnRlcn1pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWJ7cG9pbnRlci1ldmVudHM6YWxsOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6MCAwIDAgMXB4ICNjNmM2YzY7Y3Vyc29yOnBvaW50ZXJ9aW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdGh1bWJ7cG9pbnRlci1ldmVudHM6YWxsOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6MCAwIDAgMXB4ICNjNmM2YzY7Y3Vyc29yOnBvaW50ZXJ9aW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10aHVtYntwb2ludGVyLWV2ZW50czphbGw7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNoYWRvdzowIDAgMCAxcHggI2M2YzZjNjtjdXJzb3I6cG9pbnRlcn1pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWI6aG92ZXJ7YmFja2dyb3VuZDojZjdmN2Y3fWlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYjphY3RpdmV7Ym94LXNoYWRvdzppbnNldCAwIDAgM3B4ICMzODdiYmUsMCAwIDlweCAjMzg3YmJlOy13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDAgM3B4ICMzODdiYmUsMCAwIDlweCAjMzg3YmJlfS5zbGlkZXJfX2lucHV0LWZpcnN0e2hlaWdodDowO3otaW5kZXg6MX1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy92aWV3L3NsaWRlci9zbGlkZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxRQUNJLFlBQUEsQ0FDQSxxQkFBQSxDQUVBLGlCQUFBLENBR0EsVUFDSSxZQUFBLENBQ0EsNkJBQUEsQ0FDQSxrQkFBQSxDQUlSLGtCQUtJLHVCQUFBLENBQ0ksZUFBQSxDQUNBLFVBQUEsQ0FDQSxVQUFBLENBQ0EsaUJBQUEsQ0FDQSx3QkFBQSxDQUNBLG1CQUFBLENBRUosd0JBQ0ksY0FBQSxDQVNSLHdDQUNJLGtCQUFBLENBQ0EsdUJBQUEsQ0FDQSxVQUFBLENBQ0ksV0FBQSxDQUNBLHFCQUFBLENBQ0EsaUJBQUEsQ0FDQSw0QkFBQSxDQUNBLGNBQUEsQ0FHUixvQ0FDSSxrQkFBQSxDQUNBLHVCQUFBLENBQ0EsVUFBQSxDQUNJLFdBQUEsQ0FDQSxxQkFBQSxDQUNBLGlCQUFBLENBQ0EsNEJBQUEsQ0FDQSxjQUFBLENBR1IsNkJBQ0ksa0JBQUEsQ0FDQSx1QkFBQSxDQUNBLFVBQUEsQ0FDSSxXQUFBLENBQ0EscUJBQUEsQ0FDQSxpQkFBQSxDQUNBLDRCQUFBLENBQ0EsY0FBQSxDQUdSLDhDQUNJLGtCQUFBLENBR0osK0NBQ0ksZ0RBQUEsQ0FDQSx3REFBQSxDQUdKLHFCQUVZLFFBQUEsQ0FDQSxTQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zbGlkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIC8vIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBcXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdIHtcXHJcXG4gICAgLy8gaGVpZ2h0OiAyZW07XFxyXFxuICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAvLyBtYXJnaW46IDA7XFxyXFxuXFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0M2QzZDNjtcXHJcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyAucHJpY2Utc2xpZGVyX19jb250YWluZXIgLnNsaWRlcl9faW5wdXQtc2Vjb25kLFxcclxcbi8vIC55ZWFyLXNsaWRlcl9fY29udGFpbmVyIC5zbGlkZXJfX2lucHV0LXNlY29uZCB7XFxyXFxuLy8gICAgIG1hcmdpbi10b3A6IC0yZW07XFxyXFxuLy8gfVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI0M2QzZDNjtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTo6LW1vei1yYW5nZS10aHVtYiB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNDNkM2QzY7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi1tcy10aHVtYiB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNDNkM2QzY7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYjphY3RpdmUge1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4ICMzODdiYmUsIDAgMCA5cHggIzM4N2JiZTtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4ICMzODdiYmUsIDAgMCA5cHggIzM4N2JiZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlcl9faW5wdXQtZmlyc3QgXFxyXFxuICAgIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgICAgIH1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NaW5nemF0JmZhbWlseT1SYWxld2F5OndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe2JveC1zaXppbmc6Ym9yZGVyLWJveDtsaW5lLWhlaWdodDoxLjVyZW19Ym9keXtmb250LWZhbWlseTpcXFwiTWluZ3phdFxcXCIsc2Fucy1zZXJpZjtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7anVzdGlmeS1jb250ZW50OmNlbnRlcn1oZWFkZXJ7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzEzMzE1Yzt3aWR0aDo5MCU7bWFyZ2luOjAgYXV0byA1JTtwYWRkaW5nOjIlO2xldHRlci1zcGFjaW5nOjRweDtib3gtc2hhZG93OnJnYmEoMTEsMzgsNzAsLjQpIDBweCA1cHgscmdiYSgxOSw0OSw5MiwuMykgMHB4IDEwcHgscmdiYSgxOSw2NCwxMTYsLjIpIDBweCAxNXB4LHJnYmEoMTQxLDE2OSwxOTYsLjMpIDBweCAyMHB4LHJnYmEoMTQxLDE2OSwxOTYsLjEpIDBweCAyNXB4fUBtZWRpYShtYXgtd2lkdGg6IDYyMHB4KXtoZWFkZXJ7ZmxleC1kaXJlY3Rpb246Y29sdW1ufX1oZWFkZXIgLmxvZ297ZGlzcGxheTpmbGV4O2dhcDoyMHB4O2FsaWduLWl0ZW1zOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9aGVhZGVyIC5sb2dvIGltZ3ttYXgtaGVpZ2h0OjEwMHB4fUBtZWRpYShtYXgtd2lkdGg6IDc1MHB4KXtoZWFkZXIgLmxvZ28gaW1ne21heC1oZWlnaHQ6ODBweH19aGVhZGVyIC5sb2dvIGgxe2xpbmUtaGVpZ2h0OjIuNXJlbTttYXgtd2lkdGg6Zml0LWNvbnRlbnR9QG1lZGlhKG1heC13aWR0aDogOTAwcHgpe2hlYWRlciAubG9nbyBoMXtmb250LXNpemU6MS41cmVtO2xpbmUtaGVpZ2h0OjJyZW19fUBtZWRpYShtYXgtd2lkdGg6IDc1MHB4KXtoZWFkZXIgLmxvZ28gaDF7bWF4LXdpZHRoOmZpdC1jb250ZW50fX0uY2FydCBpbWd7d2lkdGg6MzVweH1hc2lkZXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOjIwJTtqdXN0aWZ5LXNlbGY6ZmxleC1zdGFydH1hc2lkZSAuYnRue21hcmdpbi1ib3R0b206MTBweH1AbWVkaWEobWF4LXdpZHRoOiA4MjBweCl7YXNpZGV7d2lkdGg6MzAlfX1AbWVkaWEobWF4LXdpZHRoOiA1MjBweCl7YXNpZGV7ZmxleC1kaXJlY3Rpb246cm93O3dpZHRoOjkwJX19LmJ0bntib3JkZXItcmFkaXVzOi41cmVtO3BhZGRpbmc6NSUgMTAlO3dpZHRoOm1heC1jb250ZW50O2NvbG9yOiNlZWY0ZWQ7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2JvcmRlcjpub25lO2JveC1zaGFkb3c6cmdiYSgwLDAsMCwuMSkgMHB4IDBweCA1cHggMHB4LHJnYmEoMCwwLDAsLjEpIDBweCAwcHggMXB4IDBweDt0cmFuc2l0aW9uOi4zc30uYnRuOmhvdmVye2N1cnNvcjpwb2ludGVyfS5idG46YWN0aXZle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDRweCl9LmFzaWRlLWJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOiMwMDMwNDl9LmFzaWRlLWJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMDBlMTZ9LmZpbHRlci1sYWJlbHttYXJnaW4tdG9wOjUlO2ZvbnQtc2l6ZToxLjJyZW19bWFpbntkaXNwbGF5OmZsZXg7bWluLWhlaWdodDo2OHZoO3dpZHRoOjcwJX1AbWVkaWEobWF4LXdpZHRoOiA4MjBweCl7bWFpbnt3aWR0aDo2MCV9fUBtZWRpYShtYXgtd2lkdGg6IDUyMHB4KXttYWlue3dpZHRoOjkwJX19Zm9vdGVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Z2FwOjVweDtmbGV4LXdyYXA6d3JhcDt3aWR0aDo5MCU7aGVpZ2h0OjEwMHB4O21hcmdpbjowIGF1dG87Zm9udC1zaXplOjFyZW07YmFja2dyb3VuZC1jb2xvcjojMTMzMTVjO2NvbG9yOiNlNWU1ZTU7cGFkZGluZzoxJX1mb290ZXIgYXt0ZXh0LWRlY29yYXRpb246bm9uZTtmb250LXNpemU6MS4ycmVtO2NvbG9yOiNlNWU1ZTV9QG1lZGlhKG1heC13aWR0aDogNjUwcHgpe2Zvb3RlcntmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OmNlbnRlcn19XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFsLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsRUFDSSxxQkFBQSxDQUNBLGtCQUFBLENBR0osS0FDSSxnQ0FBQSxDQUNBLFlBQUEsQ0FDQSxjQUFBLENBQ0Esc0JBQUEsQ0FJSixPQUNJLFlBQUEsQ0FDQSw2QkFBQSxDQUNBLGtCQUFBLENBQ0EscUJBQUEsQ0FDQSxhQUFBLENBQ0EsU0FBQSxDQUNBLGdCQUFBLENBQ0EsVUFBQSxDQUNBLGtCQUFBLENBQ0EsdUpBQUEsQ0FFQSx5QkFaSixPQWFRLHFCQUFBLENBQUEsQ0FHSixhQUNJLFlBQUEsQ0FDQSxRQUFBLENBQ0Esa0JBQUEsQ0FDQSx3QkFBQSxDQUVBLGlCQUNJLGdCQUFBLENBRUEseUJBSEosaUJBSVEsZUFBQSxDQUFBLENBSVIsZ0JBQ0ksa0JBQUEsQ0FDQSxxQkFBQSxDQUVBLHlCQUpKLGdCQUtRLGdCQUFBLENBQ0EsZ0JBQUEsQ0FBQSxDQUdKLHlCQVRKLGdCQVVRLHFCQUFBLENBQUEsQ0FRaEIsVUFDSSxVQUFBLENBR0osTUFDSSxZQUFBLENBQ0EscUJBQUEsQ0FDQSxTQUFBLENBQ0EsdUJBQUEsQ0FFQSxXQUNJLGtCQUFBLENBR0oseUJBVkosTUFXUSxTQUFBLENBQUEsQ0FHSix5QkFkSixNQWVRLGtCQUFBLENBQ0EsU0FBQSxDQUFBLENBSVIsS0FDSSxtQkFBQSxDQUNBLGNBQUEsQ0FDQSxpQkFBQSxDQUNBLGFBQUEsQ0FDQSx3QkFBQSxDQUNBLFdBQUEsQ0FDQSx3RUFBQSxDQUNBLGNBQUEsQ0FFQSxXQUNJLGNBQUEsQ0FHSixZQUNJLHlCQUFBLENBS1IsY0FDSSx3QkFBQSxDQUVBLG9CQUNJLHdCQUFBLENBSVIsY0FDSSxhQUFBLENBQ0EsZ0JBQUEsQ0FHSixLQUNJLFlBQUEsQ0FDQSxlQUFBLENBQ0EsU0FBQSxDQUVJLHlCQUxSLEtBTVksU0FBQSxDQUFBLENBR0oseUJBVFIsS0FXWSxTQUFBLENBQUEsQ0FNWixPQUNJLFlBQUEsQ0FDQSxrQkFBQSxDQUNBLDZCQUFBLENBQ0EsT0FBQSxDQUNBLGNBQUEsQ0FDQSxTQUFBLENBQ0EsWUFBQSxDQUNBLGFBQUEsQ0FDQSxjQUFBLENBQ0Esd0JBQUEsQ0FDQSxhQUFBLENBQ0EsVUFBQSxDQUVBLFNBQ0ksb0JBQUEsQ0FDQSxnQkFBQSxDQUNBLGFBQUEsQ0FHSix5QkFwQkosT0FxQlEscUJBQUEsQ0FDQSxzQkFBQSxDQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1pbmd6YXQmZmFtaWx5PVJhbGV3YXk6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNaW5nemF0Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6ICMxMzMxNWM7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvIDUlO1xcclxcbiAgICBwYWRkaW5nOiAyJTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgxMSwgMzgsIDcwLCAwLjQpIDBweCA1cHgsIHJnYmEoMTksIDQ5LCA5MiwgMC4zKSAwcHggMTBweCwgcmdiYSgxOSwgNjQsIDExNiwgMC4yKSAwcHggMTVweCwgcmdiYSgxNDEsIDE2OSwgMTk2LDAuMykgMHB4IDIwcHgsIHJnYmEoMTQxLCAxNjksIDE5NiwgMC4xKSAwcHggMjVweDtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KSB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sb2dvIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBnYXA6IDIwcHg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG5cXHJcXG4gICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxyXFxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaDEge1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXHJcXG5cXHJcXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY2FydCBpbWcge1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuYXNpZGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuXFxyXFxuICAgIC5idG4ge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nOiA1JSAxMCU7XFxyXFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gICAgY29sb3I6ICNlZWY0ZWQ7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAwcHggNXB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAwcHggMXB4IDBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmFzaWRlLWJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDMwNDk7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvcjogIzAwMzA0OSwgJGFtb3VudDogMTAlKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLWxhYmVsIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWluLWhlaWdodDogNjh2aDtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMzMTVjO1xcclxcbiAgICBjb2xvcjogI2U1ZTVlNTtcXHJcXG4gICAgcGFkZGluZzogMSU7XFxyXFxuXFxyXFxuICAgIGEge1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICBjb2xvcjojZTVlNWU1IDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovaHRtbHtsaW5lLWhlaWdodDoxLjE1Oy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlfWJvZHl7bWFyZ2luOjB9bWFpbntkaXNwbGF5OmJsb2NrfWgxe2ZvbnQtc2l6ZToyZW07bWFyZ2luOi42N2VtIDB9aHJ7Ym94LXNpemluZzpjb250ZW50LWJveDtoZWlnaHQ6MDtvdmVyZmxvdzp2aXNpYmxlfXByZXtmb250LWZhbWlseTptb25vc3BhY2UsbW9ub3NwYWNlO2ZvbnQtc2l6ZToxZW19YXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMCl9YWJiclt0aXRsZV17Ym9yZGVyLWJvdHRvbTpub25lO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSBkb3R0ZWR9YixzdHJvbmd7Zm9udC13ZWlnaHQ6Ym9sZGVyfWNvZGUsa2JkLHNhbXB7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLG1vbm9zcGFjZTtmb250LXNpemU6MWVtfXNtYWxse2ZvbnQtc2l6ZTo4MCV9c3ViLHN1cHtmb250LXNpemU6NzUlO2xpbmUtaGVpZ2h0OjA7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3Vie2JvdHRvbTotMC4yNWVtfXN1cHt0b3A6LTAuNWVtfWltZ3tib3JkZXItc3R5bGU6bm9uZX1idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjEwMCU7bGluZS1oZWlnaHQ6MS4xNTttYXJnaW46MH1idXR0b24saW5wdXR7b3ZlcmZsb3c6dmlzaWJsZX1idXR0b24sc2VsZWN0e3RleHQtdHJhbnNmb3JtOm5vbmV9YnV0dG9uLFt0eXBlPWJ1dHRvbl0sW3R5cGU9cmVzZXRdLFt0eXBlPXN1Ym1pdF17LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbn1idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1yZXNldF06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9c3VibWl0XTo6LW1vei1mb2N1cy1pbm5lcntib3JkZXItc3R5bGU6bm9uZTtwYWRkaW5nOjB9YnV0dG9uOi1tb3otZm9jdXNyaW5nLFt0eXBlPWJ1dHRvbl06LW1vei1mb2N1c3JpbmcsW3R5cGU9cmVzZXRdOi1tb3otZm9jdXNyaW5nLFt0eXBlPXN1Ym1pdF06LW1vei1mb2N1c3Jpbmd7b3V0bGluZToxcHggZG90dGVkIEJ1dHRvblRleHR9ZmllbGRzZXR7cGFkZGluZzouMzVlbSAuNzVlbSAuNjI1ZW19bGVnZW5ke2JveC1zaXppbmc6Ym9yZGVyLWJveDtjb2xvcjppbmhlcml0O2Rpc3BsYXk6dGFibGU7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzowO3doaXRlLXNwYWNlOm5vcm1hbH1wcm9ncmVzc3t2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX10ZXh0YXJlYXtvdmVyZmxvdzphdXRvfVt0eXBlPWNoZWNrYm94XSxbdHlwZT1yYWRpb117Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MH1bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99W3R5cGU9c2VhcmNoXXstd2Via2l0LWFwcGVhcmFuY2U6dGV4dGZpZWxkO291dGxpbmUtb2Zmc2V0Oi0ycHh9W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247Zm9udDppbmhlcml0fWRldGFpbHN7ZGlzcGxheTpibG9ja31zdW1tYXJ5e2Rpc3BsYXk6bGlzdC1pdGVtfXRlbXBsYXRle2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3Mvbm9ybWFsaXplLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQUEsQ0FVQSxLQUNJLGdCQUFBLENBRUEsNkJBQUEsQ0FXSixLQUNJLFFBQUEsQ0FPSixLQUNJLGFBQUEsQ0FRSixHQUNJLGFBQUEsQ0FDQSxjQUFBLENBV0osR0FDSSxzQkFBQSxDQUVBLFFBQUEsQ0FFQSxnQkFBQSxDQVNKLElBQ0ksK0JBQUEsQ0FFQSxhQUFBLENBV0osRUFDSSw4QkFBQSxDQVFKLFlBQ0ksa0JBQUEsQ0FFQSx5QkFBQSxDQUVBLGdDQUFBLENBUUosU0FFSSxrQkFBQSxDQVFKLGNBR0ksK0JBQUEsQ0FFQSxhQUFBLENBUUosTUFDSSxhQUFBLENBUUosUUFFSSxhQUFBLENBQ0EsYUFBQSxDQUNBLGlCQUFBLENBQ0EsdUJBQUEsQ0FHSixJQUNJLGNBQUEsQ0FHSixJQUNJLFVBQUEsQ0FVSixJQUNJLGlCQUFBLENBV0osc0NBS0ksbUJBQUEsQ0FFQSxjQUFBLENBRUEsZ0JBQUEsQ0FFQSxRQUFBLENBU0osYUFHSSxnQkFBQSxDQVFKLGNBR0ksbUJBQUEsQ0FPSixnREFJSSx5QkFBQSxDQU9KLHdIQUlJLGlCQUFBLENBQ0EsU0FBQSxDQU9KLDRHQUlJLDZCQUFBLENBT0osU0FDSSwwQkFBQSxDQVVKLE9BQ0kscUJBQUEsQ0FFQSxhQUFBLENBRUEsYUFBQSxDQUVBLGNBQUEsQ0FFQSxTQUFBLENBRUEsa0JBQUEsQ0FRSixTQUNJLHVCQUFBLENBT0osU0FDSSxhQUFBLENBUUosNkJBRUkscUJBQUEsQ0FFQSxTQUFBLENBUUosa0ZBRUksV0FBQSxDQVFKLGNBQ0ksNEJBQUEsQ0FFQSxtQkFBQSxDQVFKLHlDQUNJLHVCQUFBLENBUUosNkJBQ0kseUJBQUEsQ0FFQSxZQUFBLENBV0osUUFDSSxhQUFBLENBT0osUUFDSSxpQkFBQSxDQVVKLFNBQ0ksWUFBQSxDQU9KLFNBQ0ksWUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxyXFxuXFxyXFxuLyogRG9jdW1lbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIFNlY3Rpb25zXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxyXFxuICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxyXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHcm91cGluZyBjb250ZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcclxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcclxcbiAqL1xcclxcblxcclxcbmhyIHtcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnByZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcclxcbiAqL1xcclxcblxcclxcbmEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXHJcXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmFiYnJbdGl0bGVdIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgLyogMiAqL1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5iLFxcclxcbnN0cm9uZyB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmNvZGUsXFxyXFxua2JkLFxcclxcbnNhbXAge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuc21hbGwge1xcclxcbiAgICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxyXFxuICogYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnN1YixcXHJcXG5zdXAge1xcclxcbiAgICBmb250LXNpemU6IDc1JTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcbiAgICBib3R0b206IC0wLjI1ZW07XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuICAgIHRvcDogLTAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbWJlZGRlZCBjb250ZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcclxcbiAqL1xcclxcblxcclxcbmltZyB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9ybXNcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXHJcXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCB7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcclxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcclxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcclxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcclxcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxyXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcclxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG4gICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIC8qIDMgKi9cXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gICAgLyogMSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcclxcbiAqL1xcclxcblxcclxcbnByb2dyZXNzIHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXHJcXG4gKi9cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXHJcXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxyXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcclxcbiAqL1xcclxcblxcclxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIEludGVyYWN0aXZlXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxyXFxuICovXFxyXFxuXFxyXFxuZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5zdW1tYXJ5IHtcXHJcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNaXNjXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxyXFxuICovXFxyXFxuXFxyXFxudGVtcGxhdGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5baGlkZGVuXSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zhdm9yaXRlcy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgUGljdHVyZSB9IGZyb20gJy4vcGljdHVyZS5pbnRlZmFjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgcGljdHVyZXNMaXN0OiBQaWN0dXJlW10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdCYW5hbmEnLFxyXG4gICAgICAgIHllYXI6IDIwMjIsXHJcbiAgICAgICAgcHJpY2U6IDEwMCxcclxuICAgICAgICBhdXRob3I6ICdWYXNpbGlzYScsXHJcbiAgICAgICAgYnJ1c2g6ICdvaWwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQmFuYW5hIHBhaW50ZWQgd2l0aCBvaWwgYnJ1c2gnLFxyXG4gICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICBjb2xvcjogJ3llbGxvdycsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL2JhbmFuYS1vaWwtYnJ1c2guanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0NhdCcsXHJcbiAgICAgICAgeWVhcjogMjAyMSxcclxuICAgICAgICBwcmljZTogMTA1LFxyXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcclxuICAgICAgICBicnVzaDogJ3BlbmNpbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdHcmV5IGNhdCBzbWlsZXMgeW91JyxcclxuICAgICAgICBhbW91bnQ6IDEwLFxyXG4gICAgICAgIGNvbG9yOiAnZ3JleScsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL2NhdC1wZW5jaWwuanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1RyaWFuZ2xlcycsXHJcbiAgICAgICAgeWVhcjogMjAyMSxcclxuICAgICAgICBwcmljZTogNzcsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFsaWFudHNpbmEnLFxyXG4gICAgICAgIGJydXNoOiAnd2F0ZXJjb2xvcicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdCbHVlIHRyaWFuZ2xlcyBmaWxsZWQgd2l0aCB3YXRlcmNvbG9yJyxcclxuICAgICAgICBhbW91bnQ6IDMsXHJcbiAgICAgICAgY29sb3I6ICdibHVlJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvdHJpYW5nbGVzLWJsdWUtd2F0ZXJjb2xvci5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQ2hyaXN0bWFzIHRyZWUnLFxyXG4gICAgICAgIHllYXI6IDIwMjMsXHJcbiAgICAgICAgcHJpY2U6IDcwLFxyXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcclxuICAgICAgICBicnVzaDogJ29pbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdIb2xpZGF5IGlzIGNvbWluZyEgQ2hyaXN0bWFzIHRyZWUgZm9yIHlvdSBITy1ITy1ITycsXHJcbiAgICAgICAgYW1vdW50OiAyLFxyXG4gICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9jaHJpc3RtYXMtdHJlZS1vaWwtYnJ1c2guanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Nsb3VkJyxcclxuICAgICAgICB5ZWFyOiAyMDIyLFxyXG4gICAgICAgIHByaWNlOiA1MCxcclxuICAgICAgICBzYWxlUHJpY2U6IDQwLFxyXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcclxuICAgICAgICBicnVzaDogJ3BlbmNpbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIGxpdHRsZSBjbG91ZCBmb3Igd2FybSBkYXlzJyxcclxuICAgICAgICBhbW91bnQ6IDE1LFxyXG4gICAgICAgIGNvbG9yOiAnYmx1ZScsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL2Nsb3VkLXBlbmNpbC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdGaXNoJyxcclxuICAgICAgICB5ZWFyOiAyMDE4LFxyXG4gICAgICAgIHByaWNlOiAxMCxcclxuICAgICAgICBhdXRob3I6ICdWYXNpbGlzYScsXHJcbiAgICAgICAgYnJ1c2g6ICdjcmF5b24nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGJlc3QgcXVpZXQgcGV0IG9yIGp1c3QgY29va2llLCBhcyB5b3Ugd2lzaCcsXHJcbiAgICAgICAgYW1vdW50OiAzLFxyXG4gICAgICAgIGNvbG9yOiAnb3JhbmdlJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvZmlzaC1jcmF5b24uanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Zsb3dlcicsXHJcbiAgICAgICAgeWVhcjogMjAxOCxcclxuICAgICAgICBwcmljZTogNSxcclxuICAgICAgICBhdXRob3I6ICdWYWxpYW50c2luYScsXHJcbiAgICAgICAgYnJ1c2g6ICdwZW5jaWwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnWW91ciB3aW50ZXIgYm91cXVldCcsXHJcbiAgICAgICAgYW1vdW50OiA5LFxyXG4gICAgICAgIGNvbG9yOiAnYmx1ZScsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL2Zsb3dlci1wZW5jaWwuanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0dyYXBlJyxcclxuICAgICAgICB5ZWFyOiAyMDE5LFxyXG4gICAgICAgIHByaWNlOiAyMDAsXHJcbiAgICAgICAgc2FsZVByaWNlOiAxMzAsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFzaWxpc2EnLFxyXG4gICAgICAgIGJydXNoOiAnd2F0ZXJjb2xvcicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdKdXN0IGRlbGljaW91cycsXHJcbiAgICAgICAgYW1vdW50OiAxLFxyXG4gICAgICAgIGNvbG9yOiAncHVycGxlJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvZ3JhcGUtd2F0ZXJjb2xvci1icnVzaC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdTdGFycycsXHJcbiAgICAgICAgeWVhcjogMjAxOCxcclxuICAgICAgICBwcmljZTogOTAsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFsaWFudHNpbmEnLFxyXG4gICAgICAgIGJydXNoOiAncGVuY2lsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1llbGxvdyBzdGFycycsXHJcbiAgICAgICAgYW1vdW50OiAzLFxyXG4gICAgICAgIGNvbG9yOiAneWVsbG93JyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvc3RhcnMteWVsbG93LXBlbmNpbC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnR3Jhc3MnLFxyXG4gICAgICAgIHllYXI6IDIwMjIsXHJcbiAgICAgICAgcHJpY2U6IDczLFxyXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcclxuICAgICAgICBicnVzaDogJ3BlbmNpbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdTbWVsbHMgbGlrZSBzdW1tZXInLFxyXG4gICAgICAgIGFtb3VudDogNCxcclxuICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvZ3Jhc3MtcGVuY2lsLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdIZWFydCcsXHJcbiAgICAgICAgeWVhcjogMjAyMCxcclxuICAgICAgICBwcmljZTogNzAsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFzaWxpc2EnLFxyXG4gICAgICAgIGJydXNoOiAnYWlyYnJ1c2gnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQWxsIHlvdSBuZWVkIGlzIGxvdmUnLFxyXG4gICAgICAgIGFtb3VudDogOCxcclxuICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL2hlYXJ0LWFpcmJydXNoLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdQZW50YWdvbicsXHJcbiAgICAgICAgeWVhcjogMjAxMCxcclxuICAgICAgICBwcmljZTogODAsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFsaWFudHNpbmEnLFxyXG4gICAgICAgIGJydXNoOiAncGVuY2lsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0dyZWVuIHBlbnRhZ29uJyxcclxuICAgICAgICBhbW91bnQ6IDMsXHJcbiAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3BlbnRhZ29uLWdyZWVuLXBlbmNpbC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnT3JhbmdlJyxcclxuICAgICAgICB5ZWFyOiAyMDE5LFxyXG4gICAgICAgIHByaWNlOiA0NCxcclxuICAgICAgICBzYWxlUHJpY2U6IDQwLFxyXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcclxuICAgICAgICBicnVzaDogJ21hcmtlcicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdPcmFuZ2UgbGlrZSBvcmFuZ2UnLFxyXG4gICAgICAgIGFtb3VudDogOCxcclxuICAgICAgICBjb2xvcjogJ29yYW5nZScsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL29yYW5nZS1tYXJrZXIuanBnJyxcclxuICAgICAgICBvbnNhbGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUGlnJyxcclxuICAgICAgICB5ZWFyOiAyMDE2LFxyXG4gICAgICAgIHByaWNlOiAxMyxcclxuICAgICAgICBhdXRob3I6ICdWYXNpbGlzYScsXHJcbiAgICAgICAgYnJ1c2g6ICdtYXJrZXInLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnT2luayBvaW5rJyxcclxuICAgICAgICBhbW91bnQ6IDMsXHJcbiAgICAgICAgY29sb3I6ICdyb3NlJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvcGlnLW1hcmtlci5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUmFpbmJvdycsXHJcbiAgICAgICAgeWVhcjogMjAyMCxcclxuICAgICAgICBwcmljZTogMTgwLFxyXG4gICAgICAgIHNhbGVQcmljZTogMTAwLFxyXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcclxuICAgICAgICBicnVzaDogJ2NyYXlvbicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdST1lHQklWJyxcclxuICAgICAgICBhbW91bnQ6IDEsXHJcbiAgICAgICAgY29sb3I6ICdyYWluYm93JyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvcmFpbmJvdy1jcmF5b24uanBnJyxcclxuICAgICAgICBvbnNhbGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnU3RhcicsXHJcbiAgICAgICAgeWVhcjogMjAyMSxcclxuICAgICAgICBwcmljZTogMjksXHJcbiAgICAgICAgYXV0aG9yOiAnVmFzaWxpc2EnLFxyXG4gICAgICAgIGJydXNoOiAncGVuY2lsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1NoaW5lIGJyaWdodCcsXHJcbiAgICAgICAgYW1vdW50OiAxMyxcclxuICAgICAgICBjb2xvcjogJ3llbGxvdycsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3N0YXItcGVuY2lsLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdTdW4nLFxyXG4gICAgICAgIHllYXI6IDIwMTksXHJcbiAgICAgICAgcHJpY2U6IDMwLFxyXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcclxuICAgICAgICBicnVzaDogJ2NyYXlvbicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdGb3IgcmFpbnkgZGF5cycsXHJcbiAgICAgICAgYW1vdW50OiAzMCxcclxuICAgICAgICBjb2xvcjogJ3llbGxvdycsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3N1bi1jcmF5b24uanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1dhdGVybWVsb24nLFxyXG4gICAgICAgIHllYXI6IDIwMjIsXHJcbiAgICAgICAgcHJpY2U6IDkwLFxyXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcclxuICAgICAgICBicnVzaDogJ21hcmtlcicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiWW91IGNhbid0IGp1c3Qgc3RvcFwiLFxyXG4gICAgICAgIGFtb3VudDogMTIsXHJcbiAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy93YXRlcm1lbG9uLW1hcmtlci5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnRG9nJyxcclxuICAgICAgICB5ZWFyOiAyMDE1LFxyXG4gICAgICAgIHByaWNlOiAxMDAsXHJcbiAgICAgICAgc2FsZVByaWNlOiA5NSxcclxuICAgICAgICBhdXRob3I6ICdWZXJhbmlrYScsXHJcbiAgICAgICAgYnJ1c2g6ICd3YXRlcmNvbG9yJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdXIgYmVzdCBmcmllbmQnLFxyXG4gICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICBjb2xvcjogJ2dyZXknLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9kb2ctd2F0ZXJjb2xvci1icnVzaC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdSb2NrZXQnLFxyXG4gICAgICAgIHllYXI6IDIwMTYsXHJcbiAgICAgICAgcHJpY2U6IDIwMCxcclxuICAgICAgICBzYWxlUHJpY2U6IDE4MCxcclxuICAgICAgICBhdXRob3I6ICdWZXJhbmlrYScsXHJcbiAgICAgICAgYnJ1c2g6ICdicnVzaCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUbyB0aGUgbW9vbicsXHJcbiAgICAgICAgYW1vdW50OiAxNSxcclxuICAgICAgICBjb2xvcjogJ2dyZXknLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9yb2NrZXQtYnJ1c2guanBnJyxcclxuICAgICAgICBvbnNhbGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnU2F0dXJuJyxcclxuICAgICAgICB5ZWFyOiAyMDE2LFxyXG4gICAgICAgIHByaWNlOiAxMDAsXHJcbiAgICAgICAgYXV0aG9yOiAnVmVyYW5pa2EnLFxyXG4gICAgICAgIGJydXNoOiAnbWFya2VyJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0p1c3QgdG9vIGZhciBhd2F5JyxcclxuICAgICAgICBhbW91bnQ6IDUsXHJcbiAgICAgICAgY29sb3I6ICdicm93bicsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3NhdHVybi1tYXJrZXIuanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1NuYWlsJyxcclxuICAgICAgICB5ZWFyOiAyMDE3LFxyXG4gICAgICAgIHByaWNlOiAxMDIsXHJcbiAgICAgICAgYXV0aG9yOiAnVmVyYW5pa2EnLFxyXG4gICAgICAgIGJydXNoOiAnb2lsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1Nsby1vLW8tby1vdycsXHJcbiAgICAgICAgYW1vdW50OiAxNSxcclxuICAgICAgICBjb2xvcjogJ2Jyb3duJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvc25haWwtb2lsLWJydXNoLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdPdmFsJyxcclxuICAgICAgICB5ZWFyOiAyMDEwLFxyXG4gICAgICAgIHByaWNlOiA4NCxcclxuICAgICAgICBhdXRob3I6ICdWYWxpYW50c2luYScsXHJcbiAgICAgICAgYnJ1c2g6ICdvaWwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUmVkIG92YWwnLFxyXG4gICAgICAgIGFtb3VudDogMyxcclxuICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL292YWwtcmVkLW9pbC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnVHJlZScsXHJcbiAgICAgICAgeWVhcjogMjAxOCxcclxuICAgICAgICBwcmljZTogNTIsXHJcbiAgICAgICAgYXV0aG9yOiAnVmVyYW5pa2EnLFxyXG4gICAgICAgIGJydXNoOiAnY3JheW9uJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1BlcmZlY3Qgc2hhZG93IGFuZCBhaXInLFxyXG4gICAgICAgIGFtb3VudDogMTUsXHJcbiAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3RyZWUtY3JheW9uLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdTcXVhcmVzJyxcclxuICAgICAgICB5ZWFyOiAyMDEyLFxyXG4gICAgICAgIHByaWNlOiA0NSxcclxuICAgICAgICBhdXRob3I6ICdWYWxpYW50c2luYScsXHJcbiAgICAgICAgYnJ1c2g6ICdjcmF5b24nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQmxhY2sgc3F1YXJlcycsXHJcbiAgICAgICAgYW1vdW50OiAzLFxyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9zcXVhcmVzLWJsYWNrLWNyYXlvbi5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgQ2FyZCBmcm9tICcuLi9jYXJkL2NhcmQnO1xyXG5pbXBvcnQgJy4vZmF2b3JpdGVzLnNjc3MnO1xyXG5pbXBvcnQgeyBwaWN0dXJlc0xpc3QgfSBmcm9tICcuLi8uLi8uLi9waWN0dXJlcy1saXN0JztcclxuXHJcbmNsYXNzIEZhdm9yaXRlcyB7XHJcbiAgICBwdWJsaWMgdG9nZ2xlKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgZmF2U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKTtcclxuICAgICAgICBsZXQgcHJldlZhbHVlOiBzdHJpbmdbXSA9IGZhdlN0b3JhZ2UgPyBmYXZTdG9yYWdlLnNwbGl0KCctJykgOiBbXTtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW1UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgIGlmIChlLnRhcmdldCkge1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBidXR0b24ucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFRpdGxlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbS10aXRsZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1UaXRsZSA9IHRhcmdldFRpdGxlLmlubmVySFRNTC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2VmFsdWUuaW5jbHVkZXMoaXRlbVRpdGxlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2VmFsdWUuc3BsaWNlKHByZXZWYWx1ZS5pbmRleE9mKGl0ZW1UaXRsZSksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuZmlsdGVycz8ucmVwbGFjZSgnLWZhdm9yaXRlJywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZWYWx1ZS5wdXNoKGl0ZW1UaXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5maWx0ZXJzICs9ICctZmF2b3JpdGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2b3JpdGVzJywgcHJldlZhbHVlLmpvaW4oJy0nKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdHNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RzJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKCk7XHJcbiAgICAgICAgICAgIGNhcmQuZHJhdyhwaWN0dXJlc0xpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hlY2tGYXYodGl0bGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGZhdlN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJyk7XHJcbiAgICAgICAgbGV0IHByZXZWYWx1ZTogc3RyaW5nW10gPSBmYXZTdG9yYWdlID8gZmF2U3RvcmFnZS5zcGxpdCgnLScpIDogW107XHJcbiAgICAgICAgaWYgKHByZXZWYWx1ZS5pbmNsdWRlcyh0aXRsZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZXM7XHJcbiIsImltcG9ydCB7IHBpY3R1cmVzTGlzdCB9IGZyb20gJy4uLy4uLy4uL3BpY3R1cmVzLWxpc3QnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jYXJkL2NhcmQnO1xyXG5pbXBvcnQgRmF2b3JpdGVzIGZyb20gJy4uL2Zhdm9yaXRlcy9mYXZvcml0ZXMnO1xyXG5cclxuY2xhc3MgRmlsdGVyIHtcclxuICAgIGFsbFByb2R1Y3RzOiBFbGVtZW50W107XHJcbiAgICBmaWx0ZXJlZFByb2R1Y3RzOiBFbGVtZW50W107XHJcbiAgICBmYXZvcml0ZXM6IEZhdm9yaXRlcztcclxuICAgIHByb2R1Y3RzV3JhcHBlcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBjYXJkOiBDYXJkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYWxsUHJvZHVjdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19pdGVtJykpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRQcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmF2b3JpdGVzID0gbmV3IEZhdm9yaXRlcygpO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RzJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jYXJkID0gbmV3IENhcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlRmlsdGVyKGZpbHRlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVycyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWx0ZXJzJyk7XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcnNBcnIgPSBmaWx0ZXJzLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIuc3RhcnRzV2l0aCgnY29sb3InKSB8fCBmaWx0ZXIuc3RhcnRzV2l0aCgnYnJ1c2gnKSB8fCBmaWx0ZXIuc3RhcnRzV2l0aCgnYXV0aG9yJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlclRvUmVtb3ZlID0gZmlsdGVyLnNwbGl0KCcqJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWdGaWx0ZXIgPSBuZXcgUmVnRXhwKGBeJHtmaWx0ZXJUb1JlbW92ZVswXX1gKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5kIGluIGZpbHRlcnNBcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVnRmlsdGVyLnRlc3QoZmlsdGVyc0FycltpbmRdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVzZW50RmlsdGVyID0gZmlsdGVyc0FycltpbmRdLnNwbGl0KCcqJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmVzZW50RmlsdGVyLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbnRGaWx0ZXIuc3BsaWNlKHByZXNlbnRGaWx0ZXIuaW5kZXhPZihmaWx0ZXJUb1JlbW92ZVsxXSksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyc0FycltpbmRdID0gcHJlc2VudEZpbHRlci5qb2luKCcqJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzQXJyLnNwbGljZSgraW5kLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0ZpbHRlciA9IG5ldyBSZWdFeHAoYF4ke2ZpbHRlcn1gKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaW5kIGluIGZpbHRlcnNBcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVnRmlsdGVyLnRlc3QoZmlsdGVyc0FycltpbmRdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzQXJyLnNwbGljZSgraW5kLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbHRlcnMnLCBmaWx0ZXJzQXJyLmpvaW4oJy0nKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaWx0ZXJQcm9kdWN0cygpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJzU3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpbHRlcnMnKTtcclxuICAgICAgICBsZXQgZmlsdGVyc0Fycjogc3RyaW5nW107XHJcbiAgICAgICAgaWYgKGZpbHRlcnNTdHIpIHtcclxuICAgICAgICAgICAgZmlsdGVyc0FyciA9IGZpbHRlcnNTdHIuc3BsaXQoJy0nKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzQXJyLmxlbmd0aCA9PT0gMCB8fCBmaWx0ZXJzQXJyWzBdID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkLmRyYXcocGljdHVyZXNMaXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcnNBcnIuZm9yRWFjaCgoZmlsdGVyOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyLnN0YXJ0c1dpdGgoJ3ByaWNlJykgfHwgZmlsdGVyLnN0YXJ0c1dpdGgoJ3llYXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5UHJpY2VBbmRZZWFyKGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIuc3RhcnRzV2l0aCgnc2FsZScpIHx8IGZpbHRlci5zdGFydHNXaXRoKCdmYXZvcml0ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlTYWxlQW5kRmF2b3JpdGUoZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5UHJvcGVydHkoZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRyYXdQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSBbXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0IG9mIHRoaXMuYWxsUHJvZHVjdHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKHByb2R1Y3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmlsdGVyQnlQcmljZUFuZFllYXIoZmlsdGVyOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvZHVjdHMgPSB0aGlzLmZpbHRlcmVkUHJvZHVjdHMubGVuZ3RoID49IDEgPyBbLi4udGhpcy5maWx0ZXJlZFByb2R1Y3RzXSA6IFsuLi50aGlzLmFsbFByb2R1Y3RzXTtcclxuICAgICAgICBjb25zdCByYW5nZUFyciA9IGZpbHRlci5zcGxpdCgnKicpO1xyXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGAuJHtyYW5nZUFyclswXX0tc2xpZGVyYDtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3RmlsdGVyZWQ6IEVsZW1lbnRbXSA9IGN1cnJlbnRQcm9kdWN0cy5yZWR1Y2UoKGZpbHRlcmVkOiBFbGVtZW50W10sIGl0ZW06IEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbVZhbHVlID0gaXRlbS5xdWVyeVNlbGVjdG9yKGAuY2FyZF9faXRlbS0ke3JhbmdlQXJyWzBdfWApO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBpdGVtVmFsdWUgJiZcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGl0ZW1WYWx1ZS5pbm5lckhUTUwpID49ICtyYW5nZUFyclsxXSAmJlxyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoaXRlbVZhbHVlLmlubmVySFRNTCkgPD0gK3JhbmdlQXJyWzJdXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWQucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWQ7XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRQcm9kdWN0cyA9IFsuLi5uZXdGaWx0ZXJlZF07XHJcbiAgICAgICAgY29uc3Qgc2xpZGVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjbGFzc05hbWUpKSBhcyBIVE1MSW5wdXRFbGVtZW50W107XHJcblxyXG4gICAgICAgIGlmIChzbGlkZXJzKSB7XHJcbiAgICAgICAgICAgIHNsaWRlcnNbMF0udmFsdWUgPSByYW5nZUFyclsxXTtcclxuICAgICAgICAgICAgc2xpZGVyc1sxXS52YWx1ZSA9IHJhbmdlQXJyWzJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2NsYXNzTmFtZX1fX2NvbnRhaW5lcmApO1xyXG4gICAgICAgIGlmIChzbGlkZXJDb250YWluZXIpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRGcm9tID0gc2xpZGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5mcm9tJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZFdpdGggPSBzbGlkZXJDb250YWluZXIucXVlcnlTZWxlY3RvcignLnRvJyk7XHJcbiAgICAgICAgICAgIGlmIChzdGFydEZyb20gJiYgZW5kV2l0aCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRGcm9tLmlubmVySFRNTCA9IHNsaWRlcnNbMF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbmRXaXRoLmlubmVySFRNTCA9IHNsaWRlcnNbMV0udmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaWx0ZXJCeVNhbGVBbmRGYXZvcml0ZShmaWx0ZXI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9kdWN0cyA9IHRoaXMuZmlsdGVyZWRQcm9kdWN0cy5sZW5ndGggPj0gMSA/IFsuLi50aGlzLmZpbHRlcmVkUHJvZHVjdHNdIDogWy4uLnRoaXMuYWxsUHJvZHVjdHNdO1xyXG4gICAgICAgIGNvbnN0IG5ld0ZpbHRlcmVkOiBFbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgZmlsdGVyQ2xhc3MgPSBmaWx0ZXIgPT09ICdzYWxlJyA/ICcub25zYWxlJyA6ICcuaXNmYXZvcml0ZSc7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZpbHRlckNsYXNzKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGlmIChmaWx0ZXJDaGVja2JveCkgZmlsdGVyQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiBjdXJyZW50UHJvZHVjdHMpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEVsZW1lbnQgPSBwcm9kdWN0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0UHJvcGVydGllcyA9IHByb2R1Y3RFbGVtZW50LmRhdGFzZXQuZmlsdGVycztcclxuXHJcbiAgICAgICAgICAgIGxldCBwcm9kdWN0UHJvcGVydGllc0Fycjogc3RyaW5nW107XHJcbiAgICAgICAgICAgIGlmIChwcm9kdWN0UHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdFByb3BlcnRpZXNBcnIgPSBwcm9kdWN0UHJvcGVydGllcy5zcGxpdCgnLScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2R1Y3RQcm9wZXJ0aWVzQXJyLmluY2x1ZGVzKGZpbHRlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdGaWx0ZXJlZC5wdXNoKHByb2R1Y3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRQcm9kdWN0cyA9IFsuLi5uZXdGaWx0ZXJlZF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaWx0ZXJCeVByb3BlcnR5KGZpbHRlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb2R1Y3RzID0gdGhpcy5maWx0ZXJlZFByb2R1Y3RzLmxlbmd0aCA+PSAxID8gWy4uLnRoaXMuZmlsdGVyZWRQcm9kdWN0c10gOiBbLi4udGhpcy5hbGxQcm9kdWN0c107XHJcbiAgICAgICAgY29uc3QgbmV3RmlsdGVyZWQ6IEVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBmaWx0ZXJBcnIgPSBmaWx0ZXIuc3BsaXQoJyonKTtcclxuICAgICAgICBjb25zdCBmaWx0ZXJzID0gZmlsdGVyQXJyLnNsaWNlKDEpO1xyXG5cclxuICAgICAgICBmaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja2JveEZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2ZpbHRlcn1gKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tib3hGaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94RmlsdGVyLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgY3VycmVudFByb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0RWxlbWVudCA9IHByb2R1Y3QgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0UHJvcGVydGllcyA9IHByb2R1Y3RFbGVtZW50LmRhdGFzZXQuZmlsdGVycztcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdFByb3BlcnRpZXNBcnI6IHN0cmluZ1tdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2R1Y3RQcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFByb3BlcnRpZXNBcnIgPSBwcm9kdWN0UHJvcGVydGllcy5zcGxpdCgnLScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvZHVjdFByb3BlcnRpZXNBcnIuaW5jbHVkZXMoZmlsdGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdGaWx0ZXJlZC5wdXNoKHByb2R1Y3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRQcm9kdWN0cyA9IFsuLi5uZXdGaWx0ZXJlZF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3UHJvZHVjdHMoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0c1dyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyZWRQcm9kdWN0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0IG9mIHRoaXMuZmlsdGVyZWRQcm9kdWN0cykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFRpdGxlRUwgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLXRpdGxlJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdFRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZHVjdFRpdGxlRUwpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGUgPSBwcm9kdWN0VGl0bGVFTC5pbm5lckhUTUwudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzRmF2OiBib29sZWFuID0gdGhpcy5mYXZvcml0ZXMuY2hlY2tGYXYocHJvZHVjdFRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYXZCdG4gPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtYnRuIGltZycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNGYXYgJiYgZmF2QnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhdkJ0bi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi8uLi8uLi9hc3NldHMvc3ZnL2xpa2UtYmxhY2suc3ZnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQocHJvZHVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS5pbm5lckhUTUwgPSAnU29ycnksIG5vdGhpbmcgY291bGQgYmUgZm91bmQuIFlvdSBjYW4gdHJ5IGFub3RoZXIgc2VhcmNoIHJlcXVlc3QuJztcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcclxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHBpY3R1cmVzTGlzdCB9IGZyb20gJy4uLy4uLy4uL3BpY3R1cmVzLWxpc3QnO1xyXG5pbXBvcnQgJy4vcG9wdXAuc2Nzcyc7XHJcblxyXG5jbGFzcyBQb3B1cCB7XHJcbiAgICBwdWJsaWMgY3JlYXRlUG9wdXAgPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaGknKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdEltZyA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0SW1nLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdFRpdGxlRWwgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLXRpdGxlJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJvZHVjdFRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGlmIChwcm9kdWN0VGl0bGVFbCkge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlID0gcHJvZHVjdFRpdGxlRWwuaW5uZXJIVE1MO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBpY3R1cmUgPSBwaWN0dXJlc0xpc3QuZmlsdGVyKChwaWN0dXJlKSA9PiBwaWN0dXJlLnRpdGxlID09PSBwcm9kdWN0VGl0bGUpWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9wdXBUZW1wOiBIVE1MVGVtcGxhdGVFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cFRlbXAnKTtcclxuICAgICAgICAgICAgICAgIGlmIChwb3B1cFRlbXApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cENsb25lID0gcG9wdXBUZW1wLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3B1cENsb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwVGl0bGUgPSBwb3B1cENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faXRlbS10aXRsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXBUaXRsZSkgcG9wdXBUaXRsZS50ZXh0Q29udGVudCA9IHBpY3R1cmUudGl0bGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cEltZyA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLnBvcHVwX19pdGVtLWltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXBJbWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgcGljdHVyZS51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBwaWN0dXJlLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cFllYXIgPSBwb3B1cENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faXRlbS15ZWFyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3B1cFllYXIpIHBvcHVwWWVhci50ZXh0Q29udGVudCA9IHBpY3R1cmUueWVhciArICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cFByaWNlID0gcG9wdXBDbG9uZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2l0ZW0tcHJpY2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwUHJpY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwUHJpY2UudGV4dENvbnRlbnQgPSBwaWN0dXJlLnByaWNlICsgJyQnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwaWN0dXJlLm9uc2FsZSAmJiBwaWN0dXJlLnNhbGVQcmljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwUHJpY2UuY2xhc3NMaXN0LmFkZCgnY2FyZF9faXRlbS1wcmljZV9zYWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FsZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19pdGVtX3NhbGUtcHJpY2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2UuaW5uZXJIVE1MID0gYCR7cGljdHVyZS5zYWxlUHJpY2V9JGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBQcmljZS5hZnRlcihzYWxlUHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbGVQZXJjZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2l0ZW1fc2FsZS1wZXJjZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQuaW5uZXJIVE1MID0gYC0ke01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCAtIChwaWN0dXJlLnNhbGVQcmljZSAqIDEwMCkgLyBwaWN0dXJlLnByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0lYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2UuYWZ0ZXIoc2FsZVBlcmNlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwQXV0aG9yID0gcG9wdXBDbG9uZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2l0ZW0tYXV0aG9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3B1cEF1dGhvcikgcG9wdXBBdXRob3IuaW5uZXJIVE1MICs9IHBpY3R1cmUuYXV0aG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cENvbG9yID0gcG9wdXBDbG9uZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2l0ZW0tY29sb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwQ29sb3IpIHBvcHVwQ29sb3IuaW5uZXJIVE1MICs9IHBpY3R1cmUuY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwQnJ1c2ggPSBwb3B1cENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faXRlbS1icnVzaCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXBCcnVzaCkgcG9wdXBCcnVzaC5pbm5lckhUTUwgKz0gcGljdHVyZS5icnVzaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXBEZXNjcmlwdGlvbiA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLnBvcHVwX19pdGVtLWRlc2NyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3B1cERlc2NyaXB0aW9uKSBwb3B1cERlc2NyaXB0aW9uLmlubmVySFRNTCArPSBwaWN0dXJlLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZUJ0biA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLmJ0bi1jcm9zcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VCdG4pIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZVBvcHVwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwID0gcG9wdXBDbG9uZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2l0ZW0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwKSBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VQb3B1cCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmQocG9wdXBDbG9uZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluLmFwcGVuZChmcmFnbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHBvcHVwLm9ubW91c2VvdmVyID0gKGUpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQpIHBvcHVwQnRuLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKTtcclxuICAgICAgICAvLyB9O1xyXG5cclxuICAgICAgICAvLyBwb3B1cC5vbm1vdXNlb3V0ID0gKGUpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQpIHBvcHVwQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQnKTtcclxuICAgICAgICAvLyB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgY2xvc2VQb3B1cCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG4gICAgICAgIGlmIChtYWluKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RDaGlsZCA9IG1haW4ubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICAgICAgaWYgKGxhc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChsYXN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XHJcbiIsImNsYXNzIFNvcnQge1xyXG4gICAgcHVibGljIHNvcnRQcm9kdWN0cygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzb3J0QnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ydEJ5Jyk7XHJcbiAgICAgICAgc3dpdGNoIChzb3J0QnkpIHtcclxuICAgICAgICAgICAgY2FzZSAncHJpY2UtYXNjZW5kaW5nJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydCgncHJpY2UnLCAnYXNjZW5kaW5nJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgJ3ByaWNlLWRlc2NlbmRpbmcnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0KCdwcmljZScsICdkZXNjZW5kaW5nJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgJ3RpdGxlLWFzY2VuZGluZyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQoJ3RpdGxlJywgJ2FzY2VuZGluZycpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjYXNlICd0aXRsZS1kZXNjZW5kaW5nJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydCgndGl0bGUnLCAnZGVzY2VuZGluZycpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjYXNlICd5ZWFyLWFzY2VuZGluZyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQoJ3llYXInLCAnYXNjZW5kaW5nJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgJ3llYXItZGVzY2VuZGluZyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQoJ3llYXInLCAnZGVzY2VuZGluZycpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3NvcnRCeScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNvcnQoZmlsdGVyOiBzdHJpbmcsIGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19pdGVtJykpO1xyXG5cclxuICAgICAgICBjb25zdCBmaWx0ZXJDbGFzcyA9XHJcbiAgICAgICAgICAgIGZpbHRlciA9PT0gJ3ByaWNlJyA/ICcuY2FyZF9faXRlbS1wcmljZScgOiBmaWx0ZXIgPT09ICd0aXRsZScgPyAnLmNhcmRfX2l0ZW0tdGl0bGUnIDogJy5jYXJkX19pdGVtLXllYXInO1xyXG5cclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnYXNjZW5kaW5nJyAmJiBmaWx0ZXIgPT09ICd0aXRsZScpIHtcclxuICAgICAgICAgICAgcHJvZHVjdHMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChhLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyQ2xhc3MpPy5pbm5lckhUTUwgYXMgc3RyaW5nKS5sb2NhbGVDb21wYXJlKFxyXG4gICAgICAgICAgICAgICAgICAgIGIucXVlcnlTZWxlY3RvcihmaWx0ZXJDbGFzcyk/LmlubmVySFRNTCBhcyBzdHJpbmdcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZGVzY2VuZGluZycgJiYgZmlsdGVyID09PSAndGl0bGUnKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYi5xdWVyeVNlbGVjdG9yKGZpbHRlckNsYXNzKT8uaW5uZXJIVE1MIGFzIHN0cmluZykubG9jYWxlQ29tcGFyZShcclxuICAgICAgICAgICAgICAgICAgICBhLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyQ2xhc3MpPy5pbm5lckhUTUwgYXMgc3RyaW5nXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2FzY2VuZGluZycpIHtcclxuICAgICAgICAgICAgcHJvZHVjdHMuc29ydChcclxuICAgICAgICAgICAgICAgIChhLCBiKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoYS5xdWVyeVNlbGVjdG9yKGZpbHRlckNsYXNzKT8uaW5uZXJIVE1MIGFzIHN0cmluZykgLVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoYi5xdWVyeVNlbGVjdG9yKGZpbHRlckNsYXNzKT8uaW5uZXJIVE1MIGFzIHN0cmluZylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rlc2NlbmRpbmcnKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzLnNvcnQoXHJcbiAgICAgICAgICAgICAgICAoYSwgYikgPT5cclxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGIucXVlcnlTZWxlY3RvcihmaWx0ZXJDbGFzcyk/LmlubmVySFRNTCBhcyBzdHJpbmcpIC1cclxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGEucXVlcnlTZWxlY3RvcihmaWx0ZXJDbGFzcyk/LmlubmVySFRNTCBhcyBzdHJpbmcpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNvcnRPcHRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSk7XHJcbiAgICAgICAgc29ydE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IGAke2ZpbHRlcn0tJHtkaXJlY3Rpb259YCkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0cycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHByb2R1Y3RzV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBwcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiBwcm9kdWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQocHJvZHVjdCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb3J0O1xyXG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJkLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBQaWN0dXJlIH0gZnJvbSAnLi4vLi4vLi4vcGljdHVyZS5pbnRlZmFjZSc7XHJcbmltcG9ydCBGYXZvcml0ZXMgZnJvbSAnLi4vZmF2b3JpdGVzL2Zhdm9yaXRlcyc7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vZmlsdGVyL2ZpbHRlcic7XHJcbmltcG9ydCBQb3B1cCBmcm9tICcuLi9wb3B1cC9wb3B1cCc7XHJcbmltcG9ydCBTb3J0IGZyb20gJy4uL3NvcnQvc29ydCc7XHJcbmltcG9ydCAnLi9jYXJkLnNjc3MnO1xyXG5cclxuY2xhc3MgQ2FyZCB7XHJcbiAgICBmYXZvcml0ZXM6IEZhdm9yaXRlcztcclxuICAgIHBvcHVwOiBQb3B1cDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmZhdm9yaXRlcyA9IG5ldyBGYXZvcml0ZXMoKTtcclxuICAgICAgICB0aGlzLnBvcHVwID0gbmV3IFBvcHVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoZGF0YTogUGljdHVyZVtdKSB7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdENhcmRUZW1wOiBIVE1MVGVtcGxhdGVFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0Q2FyZFRlbXAnKTtcclxuXHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9kdWN0Q2FyZFRlbXApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRDbG9uZSA9IHByb2R1Y3RDYXJkVGVtcC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FyZENsb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FyZEl0ZW1UaXRsZSA9IGNhcmRDbG9uZS5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbS10aXRsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc0ZhdjogYm9vbGVhbiA9IHRoaXMuZmF2b3JpdGVzLmNoZWNrRmF2KGl0ZW0udGl0bGUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmF2QnRuID0gY2FyZENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5mYXYtYnRuIGltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0ZhdiAmJiBmYXZCdG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmF2QnRuLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uLy4uLy4uL2Fzc2V0cy9zdmcvbGlrZS1ibGFjay5zdmcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmRJdGVtVGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkSXRlbUltZyA9IGNhcmRDbG9uZS5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbS1pbWcnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZEl0ZW1JbWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW1JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpdGVtLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJdGVtSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgaXRlbS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRJdGVtWWVhciA9IGNhcmRDbG9uZS5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbS15ZWFyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmRJdGVtWWVhcikgY2FyZEl0ZW1ZZWFyLnRleHRDb250ZW50ID0gaXRlbS55ZWFyICsgJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRJdGVtID0gY2FyZENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmRJdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSXRlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1maWx0ZXJzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2l0ZW0uYnJ1c2h9LSR7aXRlbS5hdXRob3IudG9Mb3dlckNhc2UoKX0tJHtpdGVtLmNvbG9yfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkSXRlbVByaWNlID0gY2FyZENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLXByaWNlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmRJdGVtUHJpY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2UgKyAnJCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLm9uc2FsZSAmJiBpdGVtLnNhbGVQcmljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19pdGVtX3NhbGUtcHJpY2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbGVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19pdGVtLXByaWNlX3NhbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZS5pbm5lckhUTUwgPSBgJHtpdGVtLnByaWNlfSRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW1QcmljZS5pbm5lckhUTUwgPSBgJHtpdGVtLnNhbGVQcmljZX0kYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJdGVtUHJpY2UuYmVmb3JlKHNhbGVQcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzYWxlUGVyY2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2l0ZW1fc2FsZS1wZXJjZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUGVyY2VudC5pbm5lckhUTUwgPSBgLSR7TWF0aC5yb3VuZCgxMDAgLSAoaXRlbS5zYWxlUHJpY2UgKiAxMDApIC8gaXRlbS5wcmljZSl9JWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2UuYWZ0ZXIoc2FsZVBlcmNlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW0uZGF0YXNldC5maWx0ZXJzICs9ICctc2FsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhdkJ1dHRvbiA9IGNhcmRDbG9uZS5xdWVyeVNlbGVjdG9yKCcuZmF2LWJ0bicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmYXZCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZhdm9yaXRlcy50b2dnbGUoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBuZXcgRmlsdGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuZmlsdGVyUHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvcnQgPSBuZXcgU29ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydC5zb3J0UHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JlQnV0dG9uID0gY2FyZENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLWJ0bi0tbW9yZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3JlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk6IHZvaWQgPT4gdGhpcy5wb3B1cC5jcmVhdGVQb3B1cChlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmQoY2FyZENsb25lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdHMnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvZHVjdHMpIHByb2R1Y3RzLmFwcGVuZChmcmFnbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBwaWN0dXJlc0xpc3QgfSBmcm9tICcuLi8uLi8uLi9waWN0dXJlcy1saXN0JztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY2FyZC9jYXJkJztcclxuaW1wb3J0ICcuL3NlYXJjaC5zY3NzJztcclxuXHJcbmNsYXNzIFNlYXJjaCB7XHJcbiAgICBwdWJsaWMgc2VhcmNoUHJvZHVjdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0c1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0ID0gc2VhcmNoSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKS50cmltKCk7XHJcbiAgICAgICAgaWYgKCF0ZXh0KSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgY2FyZC5kcmF3KHBpY3R1cmVzTGlzdCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9faXRlbScpO1xyXG5cclxuICAgICAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3RzID0gQXJyYXkuZnJvbShwcm9kdWN0cykuZmlsdGVyKChwcm9kdWN0KSA9PlxyXG4gICAgICAgICAgICBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLXRpdGxlJyk/LmlubmVySFRNTC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRleHQpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlcmVkUHJvZHVjdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgZmlsdGVyZWRQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3RzV3JhcHBlci5hcHBlbmRDaGlsZChwcm9kdWN0KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gJ1NvcnJ5LCBub3RoaW5nIGNvdWxkIGJlIGZvdW5kLiBZb3UgY2FuIHRyeSBhbm90aGVyIHNlYXJjaCByZXF1ZXN0Lic7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgcHJvZHVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVTZWFyY2hUZXh0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hQcm9kdWN0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVyLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4uL2ZpbHRlci9maWx0ZXInO1xyXG5pbXBvcnQgJy4vc2xpZGVyLnNjc3MnO1xyXG5cclxuY2xhc3MgU2xpZGVyIHtcclxuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gICAgZmlsdGVyOiBGaWx0ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2xhc3NOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgICAgICB0aGlzLmZpbHRlciA9IG5ldyBGaWx0ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICBjb25zdCBzbGlkZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY2xhc3NOYW1lKSkgYXMgSFRNTElucHV0RWxlbWVudFtdO1xyXG5cclxuICAgICAgICBpZiAoK3NsaWRlcnNbMF0udmFsdWUgPiArc2xpZGVyc1sxXS52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gc2xpZGVyc1sxXS52YWx1ZTtcclxuICAgICAgICAgICAgc2xpZGVyc1sxXS52YWx1ZSA9IHNsaWRlcnNbMF0udmFsdWU7XHJcbiAgICAgICAgICAgIHNsaWRlcnNbMF0udmFsdWUgPSB0ZW1wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCtzbGlkZXJzWzFdLnZhbHVlIDwgK3NsaWRlcnNbMF0udmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgdGVtcCA9IHNsaWRlcnNbMF0udmFsdWU7XHJcbiAgICAgICAgICAgIHNsaWRlcnNbMF0udmFsdWUgPSBzbGlkZXJzWzFdLnZhbHVlO1xyXG4gICAgICAgICAgICBzbGlkZXJzWzFdLnZhbHVlID0gdGVtcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFJhbmdlRmlsdGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHNsaWRlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jbGFzc05hbWUpKSBhcyBIVE1MSW5wdXRFbGVtZW50W107XHJcbiAgICAgICAgY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHt0aGlzLmNsYXNzTmFtZX1fX2NvbnRhaW5lcmApO1xyXG4gICAgICAgIGlmIChzbGlkZXJDb250YWluZXIpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRGcm9tID0gc2xpZGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5mcm9tJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZFdpdGggPSBzbGlkZXJDb250YWluZXIucXVlcnlTZWxlY3RvcignLnRvJyk7XHJcbiAgICAgICAgICAgIGlmIChzdGFydEZyb20gJiYgZW5kV2l0aCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRGcm9tLmlubmVySFRNTCA9IHNsaWRlcnNbMF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbmRXaXRoLmlubmVySFRNTCA9IHNsaWRlcnNbMV0udmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2xpZGVyVHlwZSA9IHRoaXMuY2xhc3NOYW1lLnNwbGl0KCctJylbMF0uc2xpY2UoMSk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXIucmVtb3ZlRmlsdGVyKHNsaWRlclR5cGUpO1xyXG4gICAgICAgIGNvbnN0IHNsaWRlckZpbHRlciA9IGAke3NsaWRlclR5cGV9KiR7c2xpZGVyc1swXS52YWx1ZX0qJHtzbGlkZXJzWzFdLnZhbHVlfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWx0ZXJzJyk7XHJcblxyXG4gICAgICAgIGlmIChwcmV2VmFsdWUpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbHRlcnMnLCBwcmV2VmFsdWUgKyAnLScgKyBzbGlkZXJGaWx0ZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWx0ZXJzJywgc2xpZGVyRmlsdGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcclxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FydC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0ICcuL2NhcnQuc2Nzcyc7XHJcblxyXG5jbGFzcyBDYXJ0IHtcclxuICAgIHB1YmxpYyBhZGRUb0NhcnQoZTogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQnKTtcclxuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBsZXQgcHJvZHVjdDtcclxuICAgICAgICBpZiAoYWRkQnV0dG9uKSBwcm9kdWN0ID0gYWRkQnV0dG9uLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IHJlbW92ZUJ0bjtcclxuICAgICAgICBpZiAocHJvZHVjdCkgcmVtb3ZlQnRuID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbS1idG4tLXJlbW92ZScpO1xyXG5cclxuICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgaWYgKHJlbW92ZUJ0bikgcmVtb3ZlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgICBpZiAoY2FydCkge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJ0QW1vdW50ID0gY2FydC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJ0V2FybmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LXdhcm5pbmcnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYXJ0QW1vdW50ICYmIGNhcnRXYXJuaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjcm9zc0J1dHRvbiA9IGNhcnRXYXJuaW5nLnF1ZXJ5U2VsZWN0b3IoJy5idG4tY3Jvc3Nfd2FybmluZycpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNyb3NzQnV0dG9uKSBjcm9zc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhcnRXYXJuaW5nLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Ftb3VudCA9ICtjYXJ0QW1vdW50LmlubmVySFRNTCArIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5ld0Ftb3VudCA+IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydFdhcm5pbmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcnRBbW91bnQuaW5uZXJIVE1MID0gbmV3QW1vdW50LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydFdhcm5pbmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUZyb21DYXJ0KGU6IEV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0Jyk7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGxldCBwcm9kdWN0O1xyXG4gICAgICAgIGlmIChyZW1vdmVCdG4pIHtcclxuICAgICAgICAgICAgcHJvZHVjdCA9IHJlbW92ZUJ0bi5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWRkQnRuO1xyXG4gICAgICAgIGlmIChwcm9kdWN0KSBhZGRCdG4gPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLWJ0bi0tY2FydCcpO1xyXG5cclxuICAgICAgICBpZiAoYWRkQnRuKSBhZGRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgaWYgKGNhcnQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2FydEFtb3VudCA9IGNhcnQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xyXG4gICAgICAgICAgICBpZiAoY2FydEFtb3VudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QW1vdW50ID0gK2NhcnRBbW91bnQuaW5uZXJIVE1MIC0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobmV3QW1vdW50IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydEFtb3VudC5pbm5lckhUTUwgPSBuZXdBbW91bnQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcclxuIiwiaW1wb3J0IENhcmQgZnJvbSAnLi4vdmlldy9jYXJkL2NhcmQnO1xyXG5pbXBvcnQgeyBwaWN0dXJlc0xpc3QgfSBmcm9tICcuLi8uLi9waWN0dXJlcy1saXN0JztcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi92aWV3L3NlYXJjaC9zZWFyY2gnO1xyXG5pbXBvcnQgU29ydCBmcm9tICcuLi92aWV3L3NvcnQvc29ydCc7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vdmlldy9maWx0ZXIvZmlsdGVyJztcclxuaW1wb3J0IFNsaWRlciBmcm9tICcuLi92aWV3L3NsaWRlci9zbGlkZXInO1xyXG5pbXBvcnQgUG9wdXAgZnJvbSAnLi4vdmlldy9wb3B1cC9wb3B1cCc7XHJcbmltcG9ydCBGYXZvcml0ZXMgZnJvbSAnLi4vdmlldy9mYXZvcml0ZXMvZmF2b3JpdGVzJztcclxuaW1wb3J0IENhcnQgZnJvbSAnLi4vdmlldy9jYXJ0L2NhcnQnO1xyXG5pbXBvcnQgZG9uZSBmcm9tICcuL2RvbmUnO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIHByaWNlU2xpZGVyOiBTbGlkZXI7XHJcbiAgICB5ZWFyU2xpZGVyOiBTbGlkZXI7XHJcbiAgICBjYXJkOiBDYXJkO1xyXG4gICAgc29ydDogU29ydDtcclxuICAgIHBvcHVwOiBQb3B1cDtcclxuICAgIHNlYXJjaDogU2VhcmNoO1xyXG4gICAgZmF2b3JpdGVzOiBGYXZvcml0ZXM7XHJcbiAgICBjYXJ0OiBDYXJ0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucHJpY2VTbGlkZXIgPSBuZXcgU2xpZGVyKCcucHJpY2Utc2xpZGVyJyk7XHJcbiAgICAgICAgdGhpcy55ZWFyU2xpZGVyID0gbmV3IFNsaWRlcignLnllYXItc2xpZGVyJyk7XHJcbiAgICAgICAgdGhpcy5jYXJkID0gbmV3IENhcmQoKTtcclxuICAgICAgICB0aGlzLnNvcnQgPSBuZXcgU29ydCgpO1xyXG4gICAgICAgIHRoaXMucG9wdXAgPSBuZXcgUG9wdXAoKTtcclxuICAgICAgICB0aGlzLnNlYXJjaCA9IG5ldyBTZWFyY2goKTtcclxuICAgICAgICB0aGlzLmZhdm9yaXRlcyA9IG5ldyBGYXZvcml0ZXMoKTtcclxuICAgICAgICB0aGlzLmNhcnQgPSBuZXcgQ2FydCgpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkLmRyYXcocGljdHVyZXNMaXN0KTtcclxuICAgICAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcclxuICAgICAgICBpZiAoc2VhcmNoSW5wdXQpIHtcclxuICAgICAgICAgICAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLnNlYXJjaC5zZWFyY2hQcm9kdWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoUmVtb3ZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1yZW1vdmUnKTtcclxuICAgICAgICBpZiAoc2VhcmNoUmVtb3ZlQnRuKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaFJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2VhcmNoLnJlbW92ZVNlYXJjaFRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzb3J0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3J0Jyk7XHJcbiAgICAgICAgaWYgKHNvcnRMaXN0KSB7XHJcbiAgICAgICAgICAgIHNvcnRMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBlLnRhcmdldCBhcyBIVE1MT3B0aW9uRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc29ydEJ5Jywgc2VsZWN0ZWRPcHRpb24udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydC5zb3J0UHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IG5ldyBGaWx0ZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmlsdGVyQ2hlY2tib3hlcyA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyJykgYXMgdW5rbm93bikgYXMgSFRNTElucHV0RWxlbWVudFtdO1xyXG5cclxuICAgICAgICBmaWx0ZXJDaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PlxyXG4gICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gZS50YXJnZXQgYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveFBhcmVudCA9IHNlbGVjdGVkT3B0aW9uLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyVHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94UGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyVHlwZSA9IGNoZWNrYm94UGFyZW50LmNsYXNzTGlzdC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldlZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpbHRlcnMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyc0FyciA9IHByZXZWYWx1ZS5zcGxpdCgnLScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmVzZW50RmlsdGVyID0gZmlsdGVyc0Fyci5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc3RhcnRzV2l0aChmaWx0ZXJUeXBlKSlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVySW5kOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJlc2VudEZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckluZCA9IGZpbHRlcnNBcnIuaW5kZXhPZihwcmVzZW50RmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdGaWx0ZXJWYWx1ZSA9IGAke3ByZXNlbnRGaWx0ZXJ9KiR7c2VsZWN0ZWRPcHRpb24udmFsdWV9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzQXJyW2ZpbHRlckluZF0gPSBuZXdGaWx0ZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyc0Fyci5wdXNoKGAke2ZpbHRlclR5cGV9KiR7c2VsZWN0ZWRPcHRpb24udmFsdWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbHRlcnMnLCBmaWx0ZXJzQXJyLmpvaW4oJy0nKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlsdGVycycsIGAke2ZpbHRlclR5cGV9KiR7c2VsZWN0ZWRPcHRpb24udmFsdWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIucmVtb3ZlRmlsdGVyKGAke2ZpbHRlclR5cGV9KiR7c2VsZWN0ZWRPcHRpb24udmFsdWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmlsdGVyLmZpbHRlclByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQuc29ydFByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2FsZVJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uc2FsZScpO1xyXG4gICAgICAgIGlmIChzYWxlUmFkaW8pIHtcclxuICAgICAgICAgICAgc2FsZVJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNhbGVSYWRpb0VsZW1lbnQgPSBzYWxlUmFkaW8gYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGlmIChzYWxlUmFkaW9FbGVtZW50LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlsdGVycycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbHRlcnMnLCBwcmV2VmFsdWUgKyAnLXNhbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlsdGVycycsICdzYWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIucmVtb3ZlRmlsdGVyKCdzYWxlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZmlsdGVyLmZpbHRlclByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQuc29ydFByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZmF2b3JpdGVSYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pc2Zhdm9yaXRlJyk7XHJcbiAgICAgICAgaWYgKGZhdm9yaXRlUmFkaW8pIHtcclxuICAgICAgICAgICAgZmF2b3JpdGVSYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYXZvcml0ZVJhZGlvRWxlbWVudCA9IGZhdm9yaXRlUmFkaW8gYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGlmIChmYXZvcml0ZVJhZGlvRWxlbWVudC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldlZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpbHRlcnMnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldlZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWx0ZXJzJywgcHJldlZhbHVlICsgJy1mYXZvcml0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWx0ZXJzJywgJ2Zhdm9yaXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIucmVtb3ZlRmlsdGVyKCdmYXZvcml0ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZpbHRlci5maWx0ZXJQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0LnNvcnRQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNsaWRlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJfX2lucHV0JykpIGFzIEhUTUxJbnB1dEVsZW1lbnRbXTtcclxuICAgICAgICBzbGlkZXJzLmZvckVhY2goKHNsaWRlcikgPT4ge1xyXG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3ByaWNlLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZVNsaWRlci5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZVNsaWRlci5zZXRSYW5nZUZpbHRlcigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXJTbGlkZXIuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWVhclNsaWRlci5zZXRSYW5nZUZpbHRlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZpbHRlci5maWx0ZXJQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0LnNvcnRQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgYXNpZGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFzaWRlLWJ1dHRvbicpO1xyXG4gICAgICAgIGFzaWRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uRWwgPSBidXR0b24gYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBidXR0b25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChidXR0b25FbC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZS1zZXR0aW5ncy1idXR0b24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChidXR0b25FbC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZS1maWx0ZXJzLWJ1dHRvbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2ZpbHRlcnMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpbHRlci5maWx0ZXJQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0LnNvcnRQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgY2FydEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9faXRlbS1idG4tLWNhcnQnKTtcclxuICAgICAgICBjYXJ0QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmNhcnQuYWRkVG9DYXJ0KGUpKSk7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19pdGVtLWJ0bi0tcmVtb3ZlJyk7XHJcbiAgICAgICAgcmVtb3ZlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBFdmVudCkgPT4gdGhpcy5jYXJ0LnJlbW92ZUZyb21DYXJ0KGUpKSk7XHJcblxyXG4gICAgICAgIGZpbHRlci5maWx0ZXJQcm9kdWN0cygpO1xyXG4gICAgICAgIHRoaXMuc29ydC5zb3J0UHJvZHVjdHMoKTtcclxuICAgICAgICAvLyBkb25lKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAnO1xyXG5pbXBvcnQgJy4vc2Nzcy9ub3JtYWxpemUuc2Nzcyc7XHJcbmltcG9ydCAnLi9zY3NzL2dsb2JhbC5zY3NzJztcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuYXBwLnN0YXJ0KCk7XHJcbiJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsIl9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18iLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsInRoaXMiLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiX2kiLCJfYXJyYXlMaWtlVG9BcnJheSIsImFyciIsImxlbiIsImFycjIiLCJBcnJheSIsIl9pdGVtIiwiaXNBcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiX3MiLCJfZSIsIl9hcnIiLCJfbiIsIl9kIiwiY2FsbCIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJlcnIiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJvIiwibWluTGVuIiwibiIsIk9iamVjdCIsInByb3RvdHlwZSIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiZnJvbSIsInRlc3QiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJUeXBlRXJyb3IiLCJfbm9uSXRlcmFibGVSZXN0IiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsInVybCIsIm9wdGlvbnMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsImhhc2giLCJuZWVkUXVvdGVzIiwicmVwbGFjZSIsIm1lbW8iLCJnZXRUYXJnZXQiLCJ0YXJnZXQiLCJzdHlsZVRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsIkhUTUxJRnJhbWVFbGVtZW50IiwiY29udGVudERvY3VtZW50IiwiaGVhZCIsImUiLCJzdHlsZXNJbkRvbSIsImdldEluZGV4QnlJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInJlc3VsdCIsIm1vZHVsZXNUb0RvbSIsImlkQ291bnRNYXAiLCJpZGVudGlmaWVycyIsImJhc2UiLCJjb3VudCIsImluZGV4Iiwib2JqIiwiY3NzIiwibWVkaWEiLCJzb3VyY2VNYXAiLCJyZWZlcmVuY2VzIiwidXBkYXRlciIsImFkZFN0eWxlIiwiaW5zZXJ0U3R5bGVFbGVtZW50Iiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwiYXR0cmlidXRlcyIsIm5vbmNlIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnQiLCJFcnJvciIsImFwcGVuZENoaWxkIiwidGV4dFN0b3JlIiwicmVwbGFjZVRleHQiLCJyZXBsYWNlbWVudCIsImZpbHRlciIsIkJvb2xlYW4iLCJhcHBseVRvU2luZ2xldG9uVGFnIiwicmVtb3ZlIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjc3NOb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJjaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBseVRvVGFnIiwicmVtb3ZlQXR0cmlidXRlIiwiZmlyc3RDaGlsZCIsInNpbmdsZXRvbiIsInNpbmdsZXRvbkNvdW50ZXIiLCJ1cGRhdGUiLCJzdHlsZUluZGV4IiwiYmluZCIsInBhcmVudE5vZGUiLCJyZW1vdmVTdHlsZUVsZW1lbnQiLCJuZXdPYmoiLCJhbGwiLCJhdG9iIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pbmRleCIsInNwbGljZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJnZXR0ZXIiLCJkIiwiYSIsImRlZmluaXRpb24iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJnIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwicHJvcCIsImhhc093blByb3BlcnR5Iiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiY3VycmVudFNjcmlwdCIsInNyYyIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInAiLCJuYyIsInBpY3R1cmVzTGlzdCIsInRpdGxlIiwieWVhciIsInByaWNlIiwiYXV0aG9yIiwiYnJ1c2giLCJkZXNjcmlwdGlvbiIsImFtb3VudCIsImNvbG9yIiwib25zYWxlIiwic2FsZVByaWNlIiwidG9nZ2xlIiwiaXRlbVRpdGxlIiwiZmF2U3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwcmV2VmFsdWUiLCJzcGxpdCIsImVsZW1lbnQiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsInRhcmdldFRpdGxlIiwiaW5uZXJIVE1MIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImluZGV4T2YiLCJkYXRhc2V0IiwiZmlsdGVycyIsInNldEl0ZW0iLCJkcmF3IiwiY2hlY2tGYXYiLCJhbGxQcm9kdWN0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaWx0ZXJlZFByb2R1Y3RzIiwiZmF2b3JpdGVzIiwicHJvZHVjdHNXcmFwcGVyIiwiY2FyZCIsInJlbW92ZUZpbHRlciIsImZpbHRlcnNBcnIiLCJzdGFydHNXaXRoIiwiZmlsdGVyVG9SZW1vdmUiLCJyZWdGaWx0ZXIiLCJSZWdFeHAiLCJpbmQiLCJwcmVzZW50RmlsdGVyIiwiZmlsdGVyUHJvZHVjdHMiLCJmaWx0ZXJzU3RyIiwiZmlsdGVyQnlQcmljZUFuZFllYXIiLCJmaWx0ZXJCeVNhbGVBbmRGYXZvcml0ZSIsImZpbHRlckJ5UHJvcGVydHkiLCJkcmF3UHJvZHVjdHMiLCJwcm9kdWN0IiwiY3VycmVudFByb2R1Y3RzIiwicmFuZ2VBcnIiLCJjbGFzc05hbWUiLCJuZXdGaWx0ZXJlZCIsInJlZHVjZSIsImZpbHRlcmVkIiwiaXRlbVZhbHVlIiwicGFyc2VJbnQiLCJzbGlkZXJzIiwic2xpZGVyQ29udGFpbmVyIiwic3RhcnRGcm9tIiwiZW5kV2l0aCIsImZpbHRlckNsYXNzIiwiZmlsdGVyQ2hlY2tib3giLCJjaGVja2VkIiwicHJvZHVjdFByb3BlcnRpZXMiLCJjaGVja2JveEZpbHRlciIsInByb2R1Y3RUaXRsZUVMIiwicHJvZHVjdFRpdGxlIiwiaXNGYXYiLCJmYXZCdG4iLCJlcnJvck1lc3NhZ2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJjcmVhdGVQb3B1cCIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0VGl0bGVFbCIsInBpY3R1cmUiLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJwb3B1cFRlbXAiLCJwb3B1cENsb25lIiwiY2xvbmVOb2RlIiwicG9wdXBUaXRsZSIsInRleHRDb250ZW50IiwicG9wdXBJbWciLCJwb3B1cFllYXIiLCJwb3B1cFByaWNlIiwiYWZ0ZXIiLCJzYWxlUGVyY2VudCIsIk1hdGgiLCJyb3VuZCIsInBvcHVwQXV0aG9yIiwicG9wdXBDb2xvciIsInBvcHVwQnJ1c2giLCJwb3B1cERlc2NyaXB0aW9uIiwiY2xvc2VCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2VQb3B1cCIsInBvcHVwIiwiYXBwZW5kIiwibWFpbiIsImJvZHkiLCJvdmVyZmxvdyIsImxhc3RDaGlsZCIsImxhc3RFbGVtZW50Q2hpbGQiLCJzb3J0UHJvZHVjdHMiLCJzb3J0IiwicmVtb3ZlSXRlbSIsImRpcmVjdGlvbiIsInByb2R1Y3RzIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJwYXJzZUZsb2F0Iiwib3B0aW9uIiwic2VsZWN0ZWQiLCJwcm9kdWN0Q2FyZFRlbXAiLCJjYXJkQ2xvbmUiLCJjYXJkSXRlbVRpdGxlIiwiY2FyZEl0ZW1JbWciLCJjYXJkSXRlbVllYXIiLCJjYXJkSXRlbSIsImNhcmRJdGVtUHJpY2UiLCJiZWZvcmUiLCJmYXZCdXR0b24iLCJtb3JlQnV0dG9uIiwic2VhcmNoUHJvZHVjdCIsInRleHQiLCJ0cmltIiwicmVtb3ZlU2VhcmNoVGV4dCIsInRlbXAiLCJzZXRSYW5nZUZpbHRlciIsInNsaWRlclR5cGUiLCJzbGlkZXJGaWx0ZXIiLCJhZGRUb0NhcnQiLCJyZW1vdmVCdG4iLCJjYXJ0IiwiYWRkQnV0dG9uIiwiY2FydEFtb3VudCIsImNyb3NzQnV0dG9uIiwibmV3QW1vdW50IiwicmVtb3ZlRnJvbUNhcnQiLCJhZGRCdG4iLCJwcmljZVNsaWRlciIsInllYXJTbGlkZXIiLCJzZWFyY2giLCJzdGFydCIsInNlYXJjaElucHV0Iiwic2VhcmNoUmVtb3ZlQnRuIiwic29ydExpc3QiLCJzZWxlY3RlZE9wdGlvbiIsImNoZWNrYm94IiwiZmlsdGVyVHlwZSIsImNoZWNrYm94UGFyZW50IiwiZmlsdGVySW5kIiwibmV3RmlsdGVyVmFsdWUiLCJzYWxlUmFkaW8iLCJmYXZvcml0ZVJhZGlvIiwic2xpZGVyIiwiY29udGFpbnMiLCJidXR0b24iLCJidXR0b25FbCIsImNsZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==
