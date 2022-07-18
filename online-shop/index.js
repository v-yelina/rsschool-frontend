(() => {
  "use strict";
  var r = {
      296: (r, e, n) => {
        n.d(e, { Z: () => A });
        var t = n(15),
          o = n.n(t),
          i = n(645),
          a = n.n(i)()(o());
        a.push([
          r.id,
          "@import url(https://fonts.googleapis.com/css2?family=Mingzat&family=Raleway:wght@400;700&display=swap);",
        ]),
          a.push([
            r.id,
            '.products{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;margin-top:10px;padding:0 2%;transition:.3s}.card__item{display:flex;flex-direction:column;gap:10px;align-items:center;margin-bottom:5%;background-color:#fff;padding:2%;box-shadow:rgba(0,0,0,.15) 2.4px 2.4px 3.2px;border-radius:1rem;min-width:210px}@media(max-width: 920px){.card__item{min-width:275px}}@media(max-width: 850px){.card__item{min-width:260px}}@media(max-width: 820px){.card__item{flex-direction:row;width:80%;margin:0 auto 5%}}@media(max-width: 520px){.card__item{width:95%}}.card__item-description{display:flex;flex-direction:column;align-items:center;gap:10px}.card__item-description p{margin:0;text-align:center}@media(max-width: 650px){.card__item-description{width:80%;margin:0 auto 5%}}.card__item-title{color:#0b2545;font-weight:700;font-size:1.5rem;font-family:"Raleway",sans-serif}.card__item-price{font-weight:700}.card__item-price_sale{text-decoration:line-through;font-weight:400}.card__item_sale-price{font-weight:700;color:#780000;font-size:larger;margin-left:5px}.card__item_sale-percent{display:inline-block;background-color:#fca311;color:#fff;letter-spacing:1px;font-size:smaller;border-radius:5px;padding:3px;margin-left:5px}.card__item-img{max-width:15vw;transition:.3s}.card__item-btn--cart,.card__item-btn--more,.card__item-btn--remove{background-color:#8da9c4}.card__item-btn--cart:hover,.card__item-btn--more:hover,.card__item-btn--remove:hover{background-color:#6b90b3}',
            "",
            {
              version: 3,
              sources: ["webpack://./src/components/view/card/card.scss"],
              names: [],
              mappings:
                "AAGA,UACI,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,sBAAA,CACA,cAAA,CACA,eAAA,CACA,YAAA,CACA,cAAA,CAGJ,YACI,YAAA,CACA,qBAAA,CACA,QAAA,CACA,kBAAA,CACA,gBAAA,CACA,qBAAA,CACA,UAAA,CACA,4CAAA,CACA,kBAAA,CACA,eAAA,CAEA,yBAZJ,YAaQ,eAAA,CAAA,CAGJ,yBAhBJ,YAiBQ,eAAA,CAAA,CAGJ,yBApBJ,YAqBQ,kBAAA,CACA,SAAA,CACA,gBAAA,CAAA,CAGJ,yBA1BJ,YA2BQ,SAAA,CAAA,CAIR,wBACI,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,QAAA,CAEA,0BACI,QAAA,CACA,iBAAA,CAGJ,yBAXJ,wBAYQ,SAAA,CACA,gBAAA,CAAA,CAIR,kBACI,aAAA,CACA,eAAA,CACA,gBAAA,CACA,gCAAA,CAGJ,kBACI,eAAA,CAGJ,uBACI,4BAAA,CACA,eAAA,CAGJ,uBACI,eAAA,CACA,aAAA,CACA,gBAAA,CACA,eAAA,CAGJ,yBACI,oBAAA,CACA,wBAAA,CACA,UAAA,CACA,kBAAA,CACA,iBAAA,CACA,iBAAA,CACA,WAAA,CACA,eAAA,CAGJ,gBACI,cAAA,CACA,cAAA,CAGJ,oEAGI,wBAAA,CAEA,sFACI,wBAAA",
              sourcesContent: [
                "@import url('https://fonts.googleapis.com/css2?family=Mingzat&family=Raleway:wght@400;700&display=swap');\r\n\r\n\r\n.products {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n    flex-wrap: wrap;\r\n    margin-top: 10px;\r\n    padding: 0 2%;\r\n    transition: 0.3s;\r\n}\r\n\r\n.card__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    align-items: center;\r\n    margin-bottom: 5%;\r\n    background-color: #fff;\r\n    padding: 2%;\r\n    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\r\n    border-radius: 1rem;\r\n    min-width: 210px;\r\n\r\n    @media (max-width: 920px) {\r\n        min-width: 275px;\r\n    }\r\n\r\n    @media (max-width: 850px) {\r\n        min-width: 260px;\r\n    }\r\n\r\n    @media (max-width: 820px) {\r\n        flex-direction: row;\r\n        width: 80%;\r\n        margin: 0 auto 5%;\r\n    }\r\n        \r\n    @media (max-width: 520px) {\r\n        width: 95%;\r\n    }\r\n}\r\n\r\n.card__item-description {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 10px;\r\n\r\n    p {\r\n        margin: 0;\r\n        text-align: center;\r\n    }\r\n\r\n    @media (max-width: 650px) {\r\n        width: 80%;\r\n        margin: 0 auto 5%;\r\n    }\r\n}\r\n\r\n.card__item-title {\r\n    color: #0b2545;\r\n    font-weight: 700;\r\n    font-size: 1.5rem;\r\n    font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.card__item-price {\r\n    font-weight: 700;\r\n}\r\n\r\n.card__item-price_sale {\r\n    text-decoration: line-through;\r\n    font-weight: 400;\r\n}\r\n\r\n.card__item_sale-price {\r\n    font-weight: 700;\r\n    color: #780000;\r\n    font-size: larger;\r\n    margin-left: 5px;\r\n}\r\n\r\n.card__item_sale-percent {\r\n    display: inline-block;\r\n    background-color: #fca311;\r\n    color: #ffffff;\r\n    letter-spacing: 1px;\r\n    font-size: smaller;\r\n    border-radius: 5px;\r\n    padding: 3px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.card__item-img {\r\n    max-width: 15vw;\r\n    transition: 0.3s;\r\n}\r\n\r\n.card__item-btn--cart,\r\n.card__item-btn--more,\r\n.card__item-btn--remove {\r\n    background-color: #8da9c4;\r\n\r\n    &:hover {\r\n        background-color: darken($color: #8da9c4, $amount: 10%);\r\n    }\r\n\r\n}\r\n",
              ],
              sourceRoot: "",
            },
          ]);
        const A = a;
      },
      818: (r, e, n) => {
        n.d(e, { Z: () => A });
        var t = n(15),
          o = n.n(t),
          i = n(645),
          a = n.n(i)()(o());
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
          o = n.n(t),
          i = n(645),
          a = n.n(i)()(o());
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
          o = n.n(t),
          i = n(645),
          a = n.n(i),
          A = n(667),
          s = n.n(A),
          c = n(919),
          l = a()(o()),
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
          o = n.n(t),
          i = n(645),
          a = n.n(i)()(o());
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
          o = n.n(t),
          i = n(645),
          a = n.n(i)()(o());
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
          o = n.n(t),
          i = n(645),
          a = n.n(i)()(o());
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
          o = n.n(t),
          i = n(645),
          a = n.n(i)()(o());
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
              var o = {};
              if (t)
                for (var i = 0; i < this.length; i++) {
                  var a = this[i][0];
                  null != a && (o[a] = !0);
                }
              for (var A = 0; A < r.length; A++) {
                var s = [].concat(r[A]);
                (t && o[s[0]]) ||
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
            o =
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
                      o,
                      i = [],
                      a = !0,
                      A = !1;
                    try {
                      for (
                        n = n.call(r);
                        !(a = (t = n.next()).done) &&
                        (i.push(t.value), !e || i.length !== e);
                        a = !0
                      );
                    } catch (r) {
                      (A = !0), (o = r);
                    } finally {
                      try {
                        a || null == n.return || n.return();
                      } finally {
                        if (A) throw o;
                      }
                    }
                    return i;
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
            i = o[1],
            a = o[3];
          if (!a) return i;
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
            return [i].concat(l).concat([c]).join("\n");
          }
          return [i].join("\n");
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
          o = (function () {
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
          i = [];
        function a(r) {
          for (var e = -1, n = 0; n < i.length; n++)
            if (i[n].identifier === r) {
              e = n;
              break;
            }
          return e;
        }
        function A(r, e) {
          for (var n = {}, t = [], o = 0; o < r.length; o++) {
            var A = r[o],
              s = e.base ? A[0] + e.base : A[0],
              c = n[s] || 0,
              l = "".concat(s, " ").concat(c);
            n[s] = c + 1;
            var d = a(l),
              p = { css: A[1], media: A[2], sourceMap: A[3] };
            -1 !== d
              ? (i[d].references++, i[d].updater(p))
              : i.push({ identifier: l, updater: h(p, e), references: 1 }),
              t.push(l);
          }
          return t;
        }
        function s(r) {
          var e = document.createElement("style"),
            t = r.attributes || {};
          if (void 0 === t.nonce) {
            var i = n.nc;
            i && (t.nonce = i);
          }
          if (
            (Object.keys(t).forEach(function (r) {
              e.setAttribute(r, t[r]);
            }),
            "function" == typeof r.insert)
          )
            r.insert(e);
          else {
            var a = o(r.insert || "head");
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
          var o = n
            ? ""
            : t.media
            ? "@media ".concat(t.media, " {").concat(t.css, "}")
            : t.css;
          if (r.styleSheet) r.styleSheet.cssText = l(e, o);
          else {
            var i = document.createTextNode(o),
              a = r.childNodes;
            a[e] && r.removeChild(a[e]),
              a.length ? r.insertBefore(i, a[e]) : r.appendChild(i);
          }
        }
        function p(r, e, n) {
          var t = n.css,
            o = n.media,
            i = n.sourceMap;
          if (
            (o ? r.setAttribute("media", o) : r.removeAttribute("media"),
            i &&
              "undefined" != typeof btoa &&
              (t += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
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
          var n, t, o;
          if (e.singleton) {
            var i = m++;
            (n = u || (u = s(e))),
              (t = d.bind(null, n, i, !1)),
              (o = d.bind(null, n, i, !0));
          } else
            (n = s(e)),
              (t = p.bind(null, n, e)),
              (o = function () {
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
              } else o();
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
                var o = a(n[t]);
                i[o].references--;
              }
              for (var s = A(r, e), c = 0; c < n.length; c++) {
                var l = a(n[c]);
                0 === i[l].references && (i[l].updater(), i.splice(l, 1));
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
    var o = e[t];
    if (void 0 !== o) return o.exports;
    var i = (e[t] = { id: t, exports: {} });
    return r[t](i, i.exports, n), i.exports;
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
      var o = [
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
      const i = (function () {
        function r() {}
        return (
          (r.prototype.toggle = function (r) {
            var e,
              n,
              t = localStorage.getItem("favorites"),
              i = t ? t.split("-") : [];
            if (r.target) {
              var a = r.currentTarget.parentElement;
              if (a) {
                var A = a.querySelector(".card__item-title");
                A &&
                  ((n = A.innerHTML.toLowerCase()),
                  i.includes(n)
                    ? (i.splice(i.indexOf(n), 1),
                      null === (e = a.dataset.filters) ||
                        void 0 === e ||
                        e.replace("-favorite", ""))
                    : (i.push(n), (a.dataset.filters += "-favorite")),
                  localStorage.setItem("favorites", i.join("-")));
              }
              (document.querySelector(".products").innerHTML = ""),
                new p().draw(o);
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
          for (var t, o = 0, i = e.length; o < i; o++)
            (!t && o in e) ||
              (t || (t = Array.prototype.slice.call(e, 0, o)), (t[o] = e[o]));
        return r.concat(t || Array.prototype.slice.call(e));
      };
      const A = (function () {
        function r() {
          (this.allProducts = Array.from(
            document.querySelectorAll(".card__item")
          )),
            (this.filteredProducts = []),
            (this.favorites = new i()),
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
                  o = new RegExp("^".concat(t[0]));
                for (var i in n)
                  if (o.test(n[i])) {
                    var a = n[i].split("*");
                    a.length > 2
                      ? (a.splice(a.indexOf(t[1]), 1), (n[i] = a.join("*")))
                      : n.splice(+i, 1);
                  }
              } else
                for (var i in ((o = new RegExp("^".concat(r))), n))
                  o.test(n[i]) && n.splice(+i, 1);
              localStorage.setItem("filters", n.join("-"));
            }
          }),
          (r.prototype.filterProducts = function () {
            var r,
              e = this,
              n = localStorage.getItem("filters");
            if (n)
              0 === (r = n.split("-")).length || "" === r[0]
                ? this.card.draw(o)
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
              for (var t = 0, i = this.allProducts; t < i.length; t++) {
                var a = i[t];
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
              o = e.reduce(function (r, e) {
                var t = e.querySelector(".card__item-".concat(n[0]));
                return (
                  t &&
                    parseInt(t.innerHTML) >= +n[1] &&
                    parseInt(t.innerHTML) <= +n[2] &&
                    r.push(e),
                  r
                );
              }, []);
            this.filteredProducts = a([], o, !0);
            var i = Array.from(document.querySelectorAll(t));
            i && ((i[0].value = n[1]), (i[1].value = n[2]));
            var A = document.querySelector("".concat(t, "__container"));
            if (A) {
              var s = A.querySelector(".from"),
                c = A.querySelector(".to");
              s &&
                c &&
                ((s.innerHTML = i[0].value), (c.innerHTML = i[1].value));
            }
          }),
          (r.prototype.filterBySaleAndFavorite = function (r) {
            var e =
                this.filteredProducts.length >= 1
                  ? a([], this.filteredProducts, !0)
                  : a([], this.allProducts, !0),
              n = [],
              t = "sale" === r ? ".onsale" : ".isfavorite",
              o = document.querySelector(t);
            o && (o.checked = !0);
            for (var i = 0, A = e; i < A.length; i++) {
              var s = A[i],
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
                for (var o = 0, i = e; o < i.length; o++) {
                  var a = i[o],
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
                  o = void 0;
                if (t) {
                  o = t.innerHTML.toLowerCase();
                  var i = this.favorites.checkFav(o),
                    a = n.querySelector(".fav-btn img");
                  i &&
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
            var n = e.target.parentElement;
            if (n) {
              var t,
                i = n.querySelector(".card__item-title");
              if (i) {
                t = i.innerHTML;
                var a = o.filter(function (r) {
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
                    var g = c.querySelector(".popup__item-color");
                    g && (g.innerHTML += a.color);
                    var C = c.querySelector(".popup__item-brush");
                    C && (C.innerHTML += a.brush);
                    var b = c.querySelector(".popup__item-descr");
                    b && (b.innerHTML += a.description);
                    var y = c.querySelector(".btn-cross");
                    y && y.addEventListener("click", r.closePopup);
                    var v = c.querySelector(".popup__item");
                    v && v.addEventListener("click", r.closePopup), A.append(c);
                    var x = document.querySelector("main");
                    if (x) {
                      x.append(A);
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
                    var n, o;
                    return (null === (n = r.querySelector(t)) || void 0 === n
                      ? void 0
                      : n.innerHTML
                    ).localeCompare(
                      null === (o = e.querySelector(t)) || void 0 === o
                        ? void 0
                        : o.innerHTML
                    );
                  })
                : "descending" === e && "title" === r
                ? n.sort(function (r, e) {
                    var n, o;
                    return (null === (n = e.querySelector(t)) || void 0 === n
                      ? void 0
                      : n.innerHTML
                    ).localeCompare(
                      null === (o = r.querySelector(t)) || void 0 === o
                        ? void 0
                        : o.innerHTML
                    );
                  })
                : "ascending" === e
                ? n.sort(function (r, e) {
                    var n, o;
                    return (
                      parseFloat(
                        null === (n = r.querySelector(t)) || void 0 === n
                          ? void 0
                          : n.innerHTML
                      ) -
                      parseFloat(
                        null === (o = e.querySelector(t)) || void 0 === o
                          ? void 0
                          : o.innerHTML
                      )
                    );
                  })
                : "descending" === e &&
                  n.sort(function (r, e) {
                    var n, o;
                    return (
                      parseFloat(
                        null === (n = e.querySelector(t)) || void 0 === n
                          ? void 0
                          : n.innerHTML
                      ) -
                      parseFloat(
                        null === (o = r.querySelector(t)) || void 0 === o
                          ? void 0
                          : o.innerHTML
                      )
                    );
                  }),
                Array.from(document.querySelectorAll("option")).forEach(
                  function (n) {
                    n.value === "".concat(r, "-").concat(e) &&
                      (n.selected = !0);
                  }
                );
              var o = document.querySelector(".products");
              (o.innerHTML = ""),
                n.forEach(function (r) {
                  return o.appendChild(r);
                });
            }),
            r
          );
        })();
      var d = n(296);
      e()(d.Z, { insert: "head", singleton: !1 }), d.Z.locals;
      const p = (function () {
        function r() {
          (this.favorites = new i()), (this.popup = new c());
        }
        return (
          (r.prototype.draw = function (r) {
            var e = this,
              n = document.createDocumentFragment(),
              t = document.querySelector("#productCardTemp");
            r.forEach(function (r) {
              if (t) {
                var o = t.content.cloneNode(!0);
                if (o) {
                  var i = o.querySelector(".card__item-title"),
                    a = e.favorites.checkFav(r.title.toLowerCase()),
                    s = o.querySelector(".fav-btn img");
                  a &&
                    s &&
                    s.setAttribute("src", "./assets/svg/like-black.svg"),
                    i && (i.textContent = r.title);
                  var c = o.querySelector(".card__item-img");
                  c &&
                    (c.setAttribute("src", r.url),
                    c.setAttribute("alt", r.title));
                  var d = o.querySelector(".card__item-year");
                  d && (d.textContent = r.year + "");
                  var p = o.querySelector(".card__item");
                  p &&
                    p.setAttribute(
                      "data-filters",
                      ""
                        .concat(r.brush, "-")
                        .concat(r.author.toLowerCase(), "-")
                        .concat(r.color)
                    );
                  var u = o.querySelector(".card__item-price");
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
                  var f = o.querySelector(".fav-btn");
                  f &&
                    f.addEventListener("click", function (r) {
                      e.favorites.toggle(r),
                        new A().filterProducts(),
                        new l().sortProducts();
                    });
                  var g = o.querySelector(".card__item-btn--more");
                  g &&
                    g.addEventListener("click", function (r) {
                      return e.popup.createPopup(r);
                    }),
                    n.append(o);
                  var C = document.querySelector(".products");
                  C && C.append(n);
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
            if (!n) return (e.innerHTML = ""), void r.draw(o);
            var t = document.querySelectorAll(".card__item"),
              i = Array.from(t).filter(function (r) {
                var e;
                return null === (e = r.querySelector(".card__item-title")) ||
                  void 0 === e
                  ? void 0
                  : e.innerHTML.toLowerCase().includes(n);
              });
            if (i.length)
              (e.innerHTML = ""),
                i.map(function (r) {
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
      const g = (function () {
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
            var o = this.className.split("-")[0].slice(1);
            this.filter.removeFilter(o);
            var i = ""
                .concat(o, "*")
                .concat(r[0].value, "*")
                .concat(r[1].value),
              a = localStorage.getItem("filters");
            a
              ? localStorage.setItem("filters", a + "-" + i)
              : localStorage.setItem("filters", i);
          }),
          r
        );
      })();
      var C = n(818);
      e()(C.Z, { insert: "head", singleton: !1 }), C.Z.locals;
      var b = (function () {
        function r() {}
        return (
          (r.prototype.addToCart = function (r) {
            var e,
              n,
              t = document.querySelector(".cart"),
              o = r.target;
            if (
              (o && (e = o.parentElement),
              e && (n = e.querySelector(".card__item-btn--remove")),
              o.classList.add("hidden"),
              n && n.classList.remove("hidden"),
              t)
            ) {
              var i = t.querySelector("span"),
                a = document.querySelector(".cart-warning");
              if (i && a) {
                var A = a.querySelector(".btn-cross_warning");
                A &&
                  A.addEventListener("click", function () {
                    return a.classList.add("hidden");
                  });
                var s = +i.innerHTML + 1;
                s > 20
                  ? a.classList.remove("hidden")
                  : ((i.innerHTML = s.toString()), a.classList.add("hidden"));
              }
            }
          }),
          (r.prototype.removeFromCart = function (r) {
            var e,
              n,
              t = document.querySelector(".cart"),
              o = r.target;
            if (
              (o && ((e = o.parentElement), o.classList.add("hidden")),
              e && (n = e.querySelector(".card__item-btn--cart")),
              n && n.classList.remove("hidden"),
              t)
            ) {
              var i = t.querySelector("span");
              if (i) {
                var a = +i.innerHTML - 1;
                if (a < 0) return;
                i.innerHTML = a.toString();
              }
            }
          }),
          r
        );
      })();
      const y = b;
      var v = (function () {
        function r() {
          (this.priceSlider = new g(".price-slider")),
            (this.yearSlider = new g(".year-slider")),
            (this.card = new p()),
            (this.sort = new l()),
            (this.popup = new c()),
            (this.search = new h()),
            (this.favorites = new i()),
            (this.cart = new y());
        }
        return (
          (r.prototype.start = function () {
            var r = this;
            this.card.draw(o);
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
            var i = new A();
            document.querySelectorAll(".filter").forEach(function (e) {
              return e.addEventListener("change", function (n) {
                var t,
                  o,
                  a = n.target,
                  A =
                    null === (t = a.parentElement) || void 0 === t
                      ? void 0
                      : t.parentElement;
                if (A)
                  if (((o = A.classList.value), e.checked)) {
                    var s = localStorage.getItem("filters");
                    if (s) {
                      var c = s.split("-"),
                        l = c.filter(function (r) {
                          return r.startsWith(o);
                        })[0],
                        d = void 0;
                      if (l) {
                        d = c.indexOf(l);
                        var p = "".concat(l, "*").concat(a.value);
                        c[d] = p;
                      } else c.push("".concat(o, "*").concat(a.value));
                      localStorage.setItem("filters", c.join("-"));
                    } else
                      localStorage.setItem(
                        "filters",
                        "".concat(o, "*").concat(a.value)
                      );
                  } else i.removeFilter("".concat(o, "*").concat(a.value));
                i.filterProducts(), r.sort.sortProducts();
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
                } else i.removeFilter("sale");
                i.filterProducts(), r.sort.sortProducts();
              });
            var s = document.querySelector(".isfavorite");
            s &&
              s.addEventListener("change", function () {
                if (s.checked) {
                  var e = localStorage.getItem("filters");
                  e
                    ? localStorage.setItem("filters", e + "-favorite")
                    : localStorage.setItem("filters", "favorite");
                } else i.removeFilter("favorite");
                i.filterProducts(), r.sort.sortProducts();
              }),
              Array.from(document.querySelectorAll(".slider__input")).forEach(
                function (e) {
                  e.addEventListener("change", function (e) {
                    var n = e.target;
                    n && n.classList.contains("price-slider")
                      ? (r.priceSlider.draw(), r.priceSlider.setRangeFilter())
                      : (r.yearSlider.draw(), r.yearSlider.setRangeFilter()),
                      i.filterProducts(),
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
                    i.filterProducts(),
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
              i.filterProducts(),
              this.sort.sortProducts(),
              console.log("Done:"),
              console.log("________"),
              console.log(
                "* Главная страница содержит все товары магазина а также фильтры, строку поиска, поле для сортировки. Выполняются требования к вёрстке +10"
              ),
              console.log(
                "* Карточка товара содержит его изображение, название, количество данного товара на складе, год выхода на рынок, цвет, производитель и т.д., находится ли товар в корзине +10 (часть данных указана на самой карточке, часть - в попапе, который открывается по клику на кнопку more info, если вместо кнопки add to cart появилась кнопка Remove from cart, то товар в корзине)"
              ),
              console.log("____"),
              console.log("Добавление товаров в корзину +20"),
              console.log(
                "* кликая по карточке с товаром или по кнопке на нем, товар можно добавлять в корзину или удалять. Карточки добавленных в корзину товаров внешне отличаются от остальных (если вместо кнопки add to cart появилась кнопка Remove from cart, то товар в корзине) +10"
              ),
              console.log(
                '* на странице отображается количество добавленных в корзину товаров. При попытке добавить в корзину больше 20 товаров, выводится всплывающее уведомление с текстом "Извините, все слоты заполнены" (на английском) +10'
              ),
              console.log("____"),
              console.log("Сортировка +20"),
              console.log(
                "* сортировка товаров по названию в возрастающем и убывающем порядке +10"
              ),
              console.log(
                "* сортировка товаров по году их выхода на рынок в возрастающем и убывающем порядке +10"
              ),
              console.log("Дополнительно есть сортировка по цене"),
              console.log("____"),
              console.log("Фильтры в указанном диапазоне от и до +30"),
              console.log("* фильтры по цене +10"),
              console.log("* фильтры по году выпуска на рынок +10"),
              console.log(
                "* для фильтрации в указанном диапазоне используется range slider с двумя ползунками. При перемещении ползунков отображается их текущее значение +10"
              ),
              console.log("____"),
              console.log("Фильтры по значению +30"),
              console.log("* фильтры по автору +5"),
              console.log("* фильтры по цвету +5"),
              console.log("* фильтры по использованной кисти +5"),
              console.log(
                "* можно отобразить только избранные товары или только товары со скидкой +5"
              ),
              console.log(
                "* можно отфильтровать товары по нескольким фильтрам одного типа +10"
              ),
              console.log(
                "* Можно отфильтровать товары по нескольким фильтрам разного типа +20"
              ),
              console.log("____"),
              console.log("Сброс фильтров +20"),
              console.log("* есть кнопка reset для сброса фильтров +10"),
              console.log("____"),
              console.log(
                "* при сбросе фильтров кнопкой reset, ползунки range slider сдвигаются к краям, значения ползунков возвращаются к первоначальным +10"
              ),
              console.log("Сохранение настроек в local storage +30"),
              console.log(
                "выбранные пользователем фильтры, порядок сортировки, добавленные в избранное товары сохраняются при перезагрузке страницы. Есть кнопка сброса настроек, которая очищает local storage +10"
              ),
              console.log("____"),
              console.log("Поиск +30"),
              console.log(
                "*при открытии приложения курсор находится в поле поиска +2"
              ),
              console.log(
                "* автозаполнение поля поиска отключено (нет выпадающего списка с предыдущими запросами) +2"
              ),
              console.log("* есть placeholder +2"),
              console.log(
                "* в поле поиска есть крестик, позволяющий очистить поле поиска +2"
              ),
              console.log(
                '* если нет совпадения последовательности букв в поисковом запросе с названием товара, выводится уведомление в человекочитаемом формате, например "Извините, совпадений не обнаружено" +2'
              ),
              console.log(
                "* при вводе поискового запроса на странице остаются только те товары, в которых есть указанные в поиске буквы в указанном порядке. При этом не обязательно, чтобы буквы были в начале слова. Регистр символов при поиске не учитывается +10"
              ),
              console.log(
                "* если очистить поле поиска, на странице отображаются товары, соответствующие всем выбранным фильтрам и настройкам сортировки +10"
              );
          }),
          r
        );
      })();
      const x = v;
      var w = n(89);
      e()(w.Z, { insert: "head", singleton: !1 }), w.Z.locals;
      var _ = n(483);
      e()(_.Z, { insert: "head", singleton: !1 }), _.Z.locals, new x().start();
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmMvY29tcG9uZW50cy92aWV3L2NhcmQvY2FyZC5zY3NzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXJ0L2NhcnQuc2NzcyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9jb21wb25lbnRzL3ZpZXcvZmF2b3JpdGVzL2Zhdm9yaXRlcy5zY3NzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9wb3B1cC9wb3B1cC5zY3NzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zZWFyY2gvc2VhcmNoLnNjc3MiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L3NsaWRlci9zbGlkZXIuc2NzcyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9zY3NzL2dsb2JhbC5zY3NzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL3Njc3Mvbm9ybWFsaXplLnNjc3MiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9mYXZvcml0ZXMvZmF2b3JpdGVzLnNjc3M/NWNkYyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9waWN0dXJlcy1saXN0LnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9mYXZvcml0ZXMvZmF2b3JpdGVzLnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9maWx0ZXIvZmlsdGVyLnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9wb3B1cC9wb3B1cC5zY3NzP2Y5ZWMiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L3BvcHVwL3BvcHVwLnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zb3J0L3NvcnQudHMiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L2NhcmQvY2FyZC5zY3NzP2E2NTkiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L2NhcmQvY2FyZC50cyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc2VhcmNoL3NlYXJjaC5zY3NzPzQ0MjYiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L3NlYXJjaC9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L3NsaWRlci9zbGlkZXIuc2Nzcz9lOWZjIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zbGlkZXIvc2xpZGVyLnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXJ0L2NhcnQuc2Nzcz9lNDU5Iiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXJ0L2NhcnQudHMiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvYXBwL2RvbmUudHMiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvc2Nzcy9ub3JtYWxpemUuc2Nzcz8yMjJiIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL3Njc3MvZ2xvYmFsLnNjc3M/ODgwNCIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1pbmd6YXQmZmFtaWx5PVJhbGV3YXk6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9kdWN0c3tkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7ZmxleC13cmFwOndyYXA7bWFyZ2luLXRvcDoxMHB4O3BhZGRpbmc6MCAyJTt0cmFuc2l0aW9uOi4zc30uY2FyZF9faXRlbXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDoxMHB4O2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW4tYm90dG9tOjUlO2JhY2tncm91bmQtY29sb3I6I2ZmZjtwYWRkaW5nOjIlO2JveC1zaGFkb3c6cmdiYSgwLDAsMCwuMTUpIDIuNHB4IDIuNHB4IDMuMnB4O2JvcmRlci1yYWRpdXM6MXJlbTttaW4td2lkdGg6MjEwcHh9QG1lZGlhKG1heC13aWR0aDogOTIwcHgpey5jYXJkX19pdGVte21pbi13aWR0aDoyNzVweH19QG1lZGlhKG1heC13aWR0aDogODUwcHgpey5jYXJkX19pdGVte21pbi13aWR0aDoyNjBweH19QG1lZGlhKG1heC13aWR0aDogODIwcHgpey5jYXJkX19pdGVte2ZsZXgtZGlyZWN0aW9uOnJvdzt3aWR0aDo4MCU7bWFyZ2luOjAgYXV0byA1JX19QG1lZGlhKG1heC13aWR0aDogNTIwcHgpey5jYXJkX19pdGVte3dpZHRoOjk1JX19LmNhcmRfX2l0ZW0tZGVzY3JpcHRpb257ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjEwcHh9LmNhcmRfX2l0ZW0tZGVzY3JpcHRpb24gcHttYXJnaW46MDt0ZXh0LWFsaWduOmNlbnRlcn1AbWVkaWEobWF4LXdpZHRoOiA2NTBweCl7LmNhcmRfX2l0ZW0tZGVzY3JpcHRpb257d2lkdGg6ODAlO21hcmdpbjowIGF1dG8gNSV9fS5jYXJkX19pdGVtLXRpdGxle2NvbG9yOiMwYjI1NDU7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToxLjVyZW07Zm9udC1mYW1pbHk6XFxcIlJhbGV3YXlcXFwiLHNhbnMtc2VyaWZ9LmNhcmRfX2l0ZW0tcHJpY2V7Zm9udC13ZWlnaHQ6NzAwfS5jYXJkX19pdGVtLXByaWNlX3NhbGV7dGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtmb250LXdlaWdodDo0MDB9LmNhcmRfX2l0ZW1fc2FsZS1wcmljZXtmb250LXdlaWdodDo3MDA7Y29sb3I6Izc4MDAwMDtmb250LXNpemU6bGFyZ2VyO21hcmdpbi1sZWZ0OjVweH0uY2FyZF9faXRlbV9zYWxlLXBlcmNlbnR7ZGlzcGxheTppbmxpbmUtYmxvY2s7YmFja2dyb3VuZC1jb2xvcjojZmNhMzExO2NvbG9yOiNmZmY7bGV0dGVyLXNwYWNpbmc6MXB4O2ZvbnQtc2l6ZTpzbWFsbGVyO2JvcmRlci1yYWRpdXM6NXB4O3BhZGRpbmc6M3B4O21hcmdpbi1sZWZ0OjVweH0uY2FyZF9faXRlbS1pbWd7bWF4LXdpZHRoOjE1dnc7dHJhbnNpdGlvbjouM3N9LmNhcmRfX2l0ZW0tYnRuLS1jYXJ0LC5jYXJkX19pdGVtLWJ0bi0tbW9yZSwuY2FyZF9faXRlbS1idG4tLXJlbW92ZXtiYWNrZ3JvdW5kLWNvbG9yOiM4ZGE5YzR9LmNhcmRfX2l0ZW0tYnRuLS1jYXJ0OmhvdmVyLC5jYXJkX19pdGVtLWJ0bi0tbW9yZTpob3ZlciwuY2FyZF9faXRlbS1idG4tLXJlbW92ZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiM2YjkwYjN9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXJkL2NhcmQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQSxVQUNJLFlBQUEsQ0FDQSxrQkFBQSxDQUNBLDZCQUFBLENBQ0Esc0JBQUEsQ0FDQSxjQUFBLENBQ0EsZUFBQSxDQUNBLFlBQUEsQ0FDQSxjQUFBLENBR0osWUFDSSxZQUFBLENBQ0EscUJBQUEsQ0FDQSxRQUFBLENBQ0Esa0JBQUEsQ0FDQSxnQkFBQSxDQUNBLHFCQUFBLENBQ0EsVUFBQSxDQUNBLDRDQUFBLENBQ0Esa0JBQUEsQ0FDQSxlQUFBLENBRUEseUJBWkosWUFhUSxlQUFBLENBQUEsQ0FHSix5QkFoQkosWUFpQlEsZUFBQSxDQUFBLENBR0oseUJBcEJKLFlBcUJRLGtCQUFBLENBQ0EsU0FBQSxDQUNBLGdCQUFBLENBQUEsQ0FHSix5QkExQkosWUEyQlEsU0FBQSxDQUFBLENBSVIsd0JBQ0ksWUFBQSxDQUNBLHFCQUFBLENBQ0Esa0JBQUEsQ0FDQSxRQUFBLENBRUEsMEJBQ0ksUUFBQSxDQUNBLGlCQUFBLENBR0oseUJBWEosd0JBWVEsU0FBQSxDQUNBLGdCQUFBLENBQUEsQ0FJUixrQkFDSSxhQUFBLENBQ0EsZUFBQSxDQUNBLGdCQUFBLENBQ0EsZ0NBQUEsQ0FHSixrQkFDSSxlQUFBLENBR0osdUJBQ0ksNEJBQUEsQ0FDQSxlQUFBLENBR0osdUJBQ0ksZUFBQSxDQUNBLGFBQUEsQ0FDQSxnQkFBQSxDQUNBLGVBQUEsQ0FHSix5QkFDSSxvQkFBQSxDQUNBLHdCQUFBLENBQ0EsVUFBQSxDQUNBLGtCQUFBLENBQ0EsaUJBQUEsQ0FDQSxpQkFBQSxDQUNBLFdBQUEsQ0FDQSxlQUFBLENBR0osZ0JBQ0ksY0FBQSxDQUNBLGNBQUEsQ0FHSixvRUFHSSx3QkFBQSxDQUVBLHNGQUNJLHdCQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1pbmd6YXQmZmFtaWx5PVJhbGV3YXk6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcblxcclxcbi5wcm9kdWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMCAyJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2l0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAyJTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAyLjRweCAyLjRweCAzLjJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgbWluLXdpZHRoOiAyMTBweDtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XFxyXFxuICAgICAgICBtaW4td2lkdGg6IDI3NXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xcclxcbiAgICAgICAgbWluLXdpZHRoOiAyNjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNSU7XFxyXFxuICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcXHJcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2l0ZW0tZGVzY3JpcHRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDUlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19pdGVtLXRpdGxlIHtcXHJcXG4gICAgY29sb3I6ICMwYjI1NDU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9faXRlbS1wcmljZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19pdGVtLXByaWNlX3NhbGUge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2l0ZW1fc2FsZS1wcmljZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGNvbG9yOiAjNzgwMDAwO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2l0ZW1fc2FsZS1wZXJjZW50IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNhMzExO1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDNweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2l0ZW0taW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxNXZ3O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9faXRlbS1idG4tLWNhcnQsXFxyXFxuLmNhcmRfX2l0ZW0tYnRuLS1tb3JlLFxcclxcbi5jYXJkX19pdGVtLWJ0bi0tcmVtb3ZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhkYTljNDtcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yOiAjOGRhOWM0LCAkYW1vdW50OiAxMCUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJ0IHNwYW57bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5jYXJ0LXdhcm5pbmd7cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7YmFja2dyb3VuZDpyZ2JhKDQxLDQxLDQxLC42KTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmNhcnQtd2FybmluZ19fY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQtY29sb3I6I2ZmZjtwYWRkaW5nOjMlO2JvcmRlci1yYWRpdXM6NXB4fS5jYXJ0LXdhcm5pbmdfX2NvbnRhaW5lciAuYnRuLWNyb3Nze3RvcDo1cHg7cmlnaHQ6LTEwcHh9LmhpZGRlbntkaXNwbGF5Om5vbmV9LmNhcmRfX2l0ZW0tYnRuLS1yZW1vdmV7cGFkZGluZzo1JTtmb250LXNpemU6c21hbGxlcn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NhcnQvY2FydC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNJLFdBQ0kscUJBQUEsQ0FLUixjQUNJLGNBQUEsQ0FDSSxLQUFBLENBQ0EsT0FBQSxDQUNBLFFBQUEsQ0FDQSxNQUFBLENBQ0EsNEJBQUEsQ0FDQSxZQUFBLENBQ0Esa0JBQUEsQ0FDQSxzQkFBQSxDQUlSLHlCQUNJLGlCQUFBLENBQ0EscUJBQUEsQ0FDQSxVQUFBLENBQ0EsaUJBQUEsQ0FFQSxvQ0FDSSxPQUFBLENBQ0EsV0FBQSxDQUlSLFFBQ0ksWUFBQSxDQUdKLHdCQUNJLFVBQUEsQ0FDQSxpQkFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2FydCB7XFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY2FydC13YXJuaW5nIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg0MSwgNDEsIDQxLCAwLjYpO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtd2FybmluZ19fY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAzJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICAuYnRuLWNyb3NzIHtcXHJcXG4gICAgICAgIHRvcDogNXB4O1xcclxcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9faXRlbS1idG4tLXJlbW92ZSB7XFxyXFxuICAgIHBhZGRpbmc6IDUlO1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mYXYtYnRue2JhY2tncm91bmQ6bm9uZTtib3JkZXI6bm9uZTt3aWR0aDozNXB4fS5mYXYtYnRuOmhvdmVye2N1cnNvcjpwb2ludGVyO3RyYW5zZm9ybTpza2FsZSgwLjcpfS5mYXYtYnRuIGltZ3t3aWR0aDoxMDAlfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3ZpZXcvZmF2b3JpdGVzL2Zhdm9yaXRlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFNBQ0ksZUFBQSxDQUNBLFdBQUEsQ0FDQSxVQUFBLENBRUEsZUFDSSxjQUFBLENBQ0Esb0JBQUEsQ0FHSixhQUNJLFVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZhdi1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNrYWxlKDAuNyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW1ne1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9yZW1vdmUuc3ZnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnBvcHVwX19pdGVte3Bvc2l0aW9uOmZpeGVkO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6cmdiYSg0MSw0MSw0MSwuNik7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5wb3B1cF9faXRlbS1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YmFja2dyb3VuZC1jb2xvcjojZmZmO3BhZGRpbmc6MiV9QG1lZGlhKG1heC13aWR0aDogNzUwcHgpey5wb3B1cF9faXRlbS1jb250YWluZXJ7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21heC1oZWlnaHQ6MTAwdmh9fS5wb3B1cF9faXRlbS1pbWd7bWF4LXdpZHRoOjUwJX1AbWVkaWEobWF4LXdpZHRoOiA3NTBweCl7LnBvcHVwX19pdGVtLWltZ3ttYXgtd2lkdGg6ODAlfX0ucG9wdXBfX2l0ZW0tZGVzY3JpcHRpb257cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZC1jb2xvcjojZmZmO3dpZHRoOjMwJTtwYWRkaW5nOjIlfUBtZWRpYShtYXgtd2lkdGg6IDc1MHB4KXsucG9wdXBfX2l0ZW0tZGVzY3JpcHRpb257d2lkdGg6OTAlfX0ucG9wdXBfX2l0ZW0tYnRuLS1jYXJ0e21heC13aWR0aDptYXgtY29udGVudDttYXgtaGVpZ2h0Om1heC1jb250ZW50fS5wb3B1cF9faXRlbS10aXRsZXtmb250LXNpemU6MnJlbX0ucG9wdXBfX2l0ZW0taGVhZGVye2ZvbnQtd2VpZ2h0OjcwMH0ucG9wdXBfX2l0ZW0taGVhZGVyIHNwYW57Zm9udC13ZWlnaHQ6NDAwfS5wb3B1cF9faXRlbS1wcmljZXtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOmxhcmdlcn0uYnRuLWNyb3Nze2FsaWduLXNlbGY6ZmxleC1lbmQ7YmFja2dyb3VuZDpub25lO2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyOm5vbmU7aGVpZ2h0OjUycHg7d2lkdGg6NTJweDt0b3A6MiU7cmlnaHQ6MHB4O21hcmdpbjphdXRvfS5idG4tY3Jvc3M6aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9wb3B1cC9wb3B1cC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGFBQ0ksY0FBQSxDQUNBLEtBQUEsQ0FDQSxPQUFBLENBQ0EsUUFBQSxDQUNBLE1BQUEsQ0FDQSw0QkFBQSxDQUNBLFlBQUEsQ0FDQSxrQkFBQSxDQUNBLHNCQUFBLENBR0osdUJBQ0ksWUFBQSxDQUNBLGtCQUFBLENBQ0Esa0JBQUEsQ0FDQSw2QkFBQSxDQUNBLHFCQUFBLENBQ0EsVUFBQSxDQUVBLHlCQVJKLHVCQVNXLHFCQUFBLENBQ0EsZ0JBQUEsQ0FBQSxDQUlYLGlCQUNJLGFBQUEsQ0FDQSx5QkFGSixpQkFHUSxhQUFBLENBQUEsQ0FHUix5QkFDSSxpQkFBQSxDQUNBLHFCQUFBLENBQ0EsU0FBQSxDQUNBLFVBQUEsQ0FFQSx5QkFOSix5QkFPUSxTQUFBLENBQUEsQ0FJUix1QkFDSSxxQkFBQSxDQUNBLHNCQUFBLENBR0osbUJBQ0ksY0FBQSxDQUdKLG9CQUNJLGVBQUEsQ0FFQSx5QkFDSSxlQUFBLENBSVIsbUJBQ0ksZUFBQSxDQUNBLGdCQUFBLENBR0osV0FDSSxtQkFBQSxDQUNBLGVBQUEsQ0FDQSx3REFBQSxDQUNBLDJCQUFBLENBQ0EsaUJBQUEsQ0FDQSxXQUFBLENBQ0EsV0FBQSxDQUNBLFVBQUEsQ0FDQSxNQUFBLENBQ0EsU0FBQSxDQUNBLFdBQUEsQ0FFQSxpQkFDSSxjQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wb3B1cF9faXRlbSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQxLCA0MSwgNDEsIDAuNik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2l0ZW0tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAyJTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxyXFxuICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgICB9XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9faXRlbS1pbWcge1xcclxcbiAgICBtYXgtd2lkdGg6IDUwJTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ucG9wdXBfX2l0ZW0tZGVzY3JpcHRpb24ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIHBhZGRpbmc6IDIlO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxufVxcclxcbi5wb3B1cF9faXRlbS1idG4tLWNhcnQge1xcclxcbiAgICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19pdGVtLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2l0ZW0taGVhZGVyIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHJcXG4gICAgc3BhbiB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9faXRlbS1wcmljZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWNyb3NzIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vLi4vLi4vYXNzZXRzL3N2Zy9yZW1vdmUuc3ZnXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDUycHg7XFxyXFxuICAgIHdpZHRoOiA1MnB4O1xcclxcbiAgICB0b3A6IDIlO1xcclxcbiAgICByaWdodDogMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zZWFyY2h7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDpub3dyYXA7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMHB4O21pbi13aWR0aDozMDBweDtwYWRkaW5nOjVweDtib3JkZXI6MXB4IHNvbGlkICMwMDA7Ym9yZGVyLXJhZGl1czoxMHB4fUBtZWRpYShtYXgtd2lkdGg6IDc1MHB4KXsuc2VhcmNoe21pbi13aWR0aDoyNTBweH19LnNlYXJjaCBpbWd7bWF4LXdpZHRoOjI0cHh9LnNlYXJjaC1pbnB1dHtib3JkZXI6bm9uZTtwYWRkaW5nOjVweH1AbWVkaWEobWF4LXdpZHRoOiA3NTBweCl7LnNlYXJjaC1pbnB1dHttYXgtd2lkdGg6MTcwcHh9fS5zZWFyY2gtaW5wdXQ6Zm9jdXN7b3V0bGluZTpub25lfS5zZWFyY2gtcmVtb3ZlOmhvdmVye2N1cnNvcjpwb2ludGVyfS5lcnJvcnttYXJnaW4tdG9wOjIlO3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0OjJyZW07Zm9udC1zaXplOjJyZW19XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zZWFyY2gvc2VhcmNoLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsUUFDSSxZQUFBLENBQ0EsZ0JBQUEsQ0FDQSxrQkFBQSxDQUNBLFFBQUEsQ0FDQSxlQUFBLENBQ0EsV0FBQSxDQUNBLHFCQUFBLENBQ0Esa0JBQUEsQ0FFQSx5QkFWSixRQVdRLGVBQUEsQ0FBQSxDQUdKLFlBQ0ksY0FBQSxDQUtSLGNBQ0ksV0FBQSxDQUNBLFdBQUEsQ0FFQSx5QkFKSixjQUtZLGVBQUEsQ0FBQSxDQUdSLG9CQUNJLFlBQUEsQ0FLSixxQkFDSSxjQUFBLENBSVIsT0FDSSxhQUFBLENBQ0EsaUJBQUEsQ0FDQSxnQkFBQSxDQUNBLGNBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNlYXJjaCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcclxcbiAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAyNHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtaW5wdXQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNzBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVtb3ZlIHtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNsaWRlcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3Bvc2l0aW9uOnJlbGF0aXZlfS5zbGlkZXIgcHtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24tc2VsZjpzdHJldGNofWlucHV0W3R5cGU9cmFuZ2Vdey13ZWJraXQtYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtoZWlnaHQ6MnB4O3dpZHRoOjEwMCU7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZC1jb2xvcjojYzZjNmM2O3BvaW50ZXItZXZlbnRzOm5vbmV9aW5wdXRbdHlwZT1yYW5nZV06aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9aW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1ie3BvaW50ZXItZXZlbnRzOmFsbDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjUwJTtib3gtc2hhZG93OjAgMCAwIDFweCAjYzZjNmM2O2N1cnNvcjpwb2ludGVyfWlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRodW1ie3BvaW50ZXItZXZlbnRzOmFsbDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjUwJTtib3gtc2hhZG93OjAgMCAwIDFweCAjYzZjNmM2O2N1cnNvcjpwb2ludGVyfWlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdGh1bWJ7cG9pbnRlci1ldmVudHM6YWxsOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6MCAwIDAgMXB4ICNjNmM2YzY7Y3Vyc29yOnBvaW50ZXJ9aW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iOmhvdmVye2JhY2tncm91bmQ6I2Y3ZjdmN31pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWI6YWN0aXZle2JveC1zaGFkb3c6aW5zZXQgMCAwIDNweCAjMzg3YmJlLDAgMCA5cHggIzM4N2JiZTstd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAwIDNweCAjMzg3YmJlLDAgMCA5cHggIzM4N2JiZX0uc2xpZGVyX19pbnB1dC1maXJzdHtoZWlnaHQ6MDt6LWluZGV4OjF9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zbGlkZXIvc2xpZGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsUUFDSSxZQUFBLENBQ0EscUJBQUEsQ0FFQSxpQkFBQSxDQUdBLFVBQ0ksWUFBQSxDQUNBLDZCQUFBLENBQ0Esa0JBQUEsQ0FJUixrQkFLSSx1QkFBQSxDQUNJLGVBQUEsQ0FDQSxVQUFBLENBQ0EsVUFBQSxDQUNBLGlCQUFBLENBQ0Esd0JBQUEsQ0FDQSxtQkFBQSxDQUVKLHdCQUNJLGNBQUEsQ0FTUix3Q0FDSSxrQkFBQSxDQUNBLHVCQUFBLENBQ0EsVUFBQSxDQUNJLFdBQUEsQ0FDQSxxQkFBQSxDQUNBLGlCQUFBLENBQ0EsNEJBQUEsQ0FDQSxjQUFBLENBR1Isb0NBQ0ksa0JBQUEsQ0FDQSx1QkFBQSxDQUNBLFVBQUEsQ0FDSSxXQUFBLENBQ0EscUJBQUEsQ0FDQSxpQkFBQSxDQUNBLDRCQUFBLENBQ0EsY0FBQSxDQUdSLDZCQUNJLGtCQUFBLENBQ0EsdUJBQUEsQ0FDQSxVQUFBLENBQ0ksV0FBQSxDQUNBLHFCQUFBLENBQ0EsaUJBQUEsQ0FDQSw0QkFBQSxDQUNBLGNBQUEsQ0FHUiw4Q0FDSSxrQkFBQSxDQUdKLCtDQUNJLGdEQUFBLENBQ0Esd0RBQUEsQ0FHSixxQkFFWSxRQUFBLENBQ0EsU0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2xpZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAvLyBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgXFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXSB7XFxyXFxuICAgIC8vIGhlaWdodDogMmVtO1xcclxcbiAgICAvLyBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgLy8gbWFyZ2luOiAwO1xcclxcblxcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDNkM2QzY7XFxyXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gLnByaWNlLXNsaWRlcl9fY29udGFpbmVyIC5zbGlkZXJfX2lucHV0LXNlY29uZCxcXHJcXG4vLyAueWVhci1zbGlkZXJfX2NvbnRhaW5lciAuc2xpZGVyX19pbnB1dC1zZWNvbmQge1xcclxcbi8vICAgICBtYXJnaW4tdG9wOiAtMmVtO1xcclxcbi8vIH1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNDNkM2QzY7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi1tb3otcmFuZ2UtdGh1bWIge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjQzZDNkM2O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotbXMtdGh1bWIge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjQzZDNkM2O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWI6YWN0aXZlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAjMzg3YmJlLCAwIDAgOXB4ICMzODdiYmU7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAjMzg3YmJlLCAwIDAgOXB4ICMzODdiYmU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXJfX2lucHV0LWZpcnN0IFxcclxcbiAgICB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XFxyXFxuICAgICAgICB9XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWluZ3phdCZmYW1pbHk9UmFsZXdheTp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntib3gtc2l6aW5nOmJvcmRlci1ib3g7bGluZS1oZWlnaHQ6MS41cmVtfWJvZHl7Zm9udC1mYW1pbHk6XFxcIk1pbmd6YXRcXFwiLHNhbnMtc2VyaWY7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2p1c3RpZnktY29udGVudDpjZW50ZXJ9aGVhZGVye2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMxMzMxNWM7d2lkdGg6OTAlO21hcmdpbjowIGF1dG8gNSU7cGFkZGluZzoyJTtsZXR0ZXItc3BhY2luZzo0cHg7Ym94LXNoYWRvdzpyZ2JhKDExLDM4LDcwLC40KSAwcHggNXB4LHJnYmEoMTksNDksOTIsLjMpIDBweCAxMHB4LHJnYmEoMTksNjQsMTE2LC4yKSAwcHggMTVweCxyZ2JhKDE0MSwxNjksMTk2LC4zKSAwcHggMjBweCxyZ2JhKDE0MSwxNjksMTk2LC4xKSAwcHggMjVweH1AbWVkaWEobWF4LXdpZHRoOiA2MjBweCl7aGVhZGVye2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn19aGVhZGVyIC5sb2dve2Rpc3BsYXk6ZmxleDtnYXA6MjBweDthbGlnbi1pdGVtczpjZW50ZXI7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfWhlYWRlciAubG9nbyBpbWd7bWF4LWhlaWdodDoxMDBweH1AbWVkaWEobWF4LXdpZHRoOiA3NTBweCl7aGVhZGVyIC5sb2dvIGltZ3ttYXgtaGVpZ2h0OjgwcHh9fWhlYWRlciAubG9nbyBoMXtsaW5lLWhlaWdodDoyLjVyZW07bWF4LXdpZHRoOmZpdC1jb250ZW50fUBtZWRpYShtYXgtd2lkdGg6IDkwMHB4KXtoZWFkZXIgLmxvZ28gaDF7Zm9udC1zaXplOjEuNXJlbTtsaW5lLWhlaWdodDoycmVtfX1AbWVkaWEobWF4LXdpZHRoOiA3NTBweCl7aGVhZGVyIC5sb2dvIGgxe21heC13aWR0aDpmaXQtY29udGVudH19LmNhcnQgaW1ne3dpZHRoOjM1cHh9YXNpZGV7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt3aWR0aDoyMCU7anVzdGlmeS1zZWxmOmZsZXgtc3RhcnR9YXNpZGUgLmJ0bnttYXJnaW4tYm90dG9tOjEwcHh9QG1lZGlhKG1heC13aWR0aDogODIwcHgpe2FzaWRle3dpZHRoOjMwJX19QG1lZGlhKG1heC13aWR0aDogNTIwcHgpe2FzaWRle2ZsZXgtZGlyZWN0aW9uOnJvdzt3aWR0aDo5MCV9fS5idG57Ym9yZGVyLXJhZGl1czouNXJlbTtwYWRkaW5nOjUlIDEwJTt3aWR0aDptYXgtY29udGVudDtjb2xvcjojZWVmNGVkO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtib3JkZXI6bm9uZTtib3gtc2hhZG93OnJnYmEoMCwwLDAsLjEpIDBweCAwcHggNXB4IDBweCxyZ2JhKDAsMCwwLC4xKSAwcHggMHB4IDFweCAwcHg7dHJhbnNpdGlvbjouM3N9LmJ0bjpob3ZlcntjdXJzb3I6cG9pbnRlcn0uYnRuOmFjdGl2ZXt0cmFuc2Zvcm06dHJhbnNsYXRlWSg0cHgpfS5hc2lkZS1idXR0b257YmFja2dyb3VuZC1jb2xvcjojMDAzMDQ5fS5hc2lkZS1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDAwZTE2fS5maWx0ZXItbGFiZWx7bWFyZ2luLXRvcDo1JTtmb250LXNpemU6MS4ycmVtfW1haW57ZGlzcGxheTpmbGV4O21pbi1oZWlnaHQ6Njh2aDt3aWR0aDo3MCV9QG1lZGlhKG1heC13aWR0aDogODIwcHgpe21haW57d2lkdGg6NjAlfX1AbWVkaWEobWF4LXdpZHRoOiA1MjBweCl7bWFpbnt3aWR0aDo5MCV9fWZvb3RlcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2dhcDo1cHg7ZmxleC13cmFwOndyYXA7d2lkdGg6OTAlO2hlaWdodDoxMDBweDttYXJnaW46MCBhdXRvO2ZvbnQtc2l6ZToxcmVtO2JhY2tncm91bmQtY29sb3I6IzEzMzE1Yztjb2xvcjojZTVlNWU1O3BhZGRpbmc6MSV9Zm9vdGVyIGF7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Zm9udC1zaXplOjEuMnJlbTtjb2xvcjojZTVlNWU1fUBtZWRpYShtYXgtd2lkdGg6IDY1MHB4KXtmb290ZXJ7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXJ9fVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLEVBQ0kscUJBQUEsQ0FDQSxrQkFBQSxDQUdKLEtBQ0ksZ0NBQUEsQ0FDQSxZQUFBLENBQ0EsY0FBQSxDQUNBLHNCQUFBLENBSUosT0FDSSxZQUFBLENBQ0EsNkJBQUEsQ0FDQSxrQkFBQSxDQUNBLHFCQUFBLENBQ0EsYUFBQSxDQUNBLFNBQUEsQ0FDQSxnQkFBQSxDQUNBLFVBQUEsQ0FDQSxrQkFBQSxDQUNBLHVKQUFBLENBRUEseUJBWkosT0FhUSxxQkFBQSxDQUFBLENBR0osYUFDSSxZQUFBLENBQ0EsUUFBQSxDQUNBLGtCQUFBLENBQ0Esd0JBQUEsQ0FFQSxpQkFDSSxnQkFBQSxDQUVBLHlCQUhKLGlCQUlRLGVBQUEsQ0FBQSxDQUlSLGdCQUNJLGtCQUFBLENBQ0EscUJBQUEsQ0FFQSx5QkFKSixnQkFLUSxnQkFBQSxDQUNBLGdCQUFBLENBQUEsQ0FHSix5QkFUSixnQkFVUSxxQkFBQSxDQUFBLENBUWhCLFVBQ0ksVUFBQSxDQUdKLE1BQ0ksWUFBQSxDQUNBLHFCQUFBLENBQ0EsU0FBQSxDQUNBLHVCQUFBLENBRUEsV0FDSSxrQkFBQSxDQUdKLHlCQVZKLE1BV1EsU0FBQSxDQUFBLENBR0oseUJBZEosTUFlUSxrQkFBQSxDQUNBLFNBQUEsQ0FBQSxDQUlSLEtBQ0ksbUJBQUEsQ0FDQSxjQUFBLENBQ0EsaUJBQUEsQ0FDQSxhQUFBLENBQ0Esd0JBQUEsQ0FDQSxXQUFBLENBQ0Esd0VBQUEsQ0FDQSxjQUFBLENBRUEsV0FDSSxjQUFBLENBR0osWUFDSSx5QkFBQSxDQUtSLGNBQ0ksd0JBQUEsQ0FFQSxvQkFDSSx3QkFBQSxDQUlSLGNBQ0ksYUFBQSxDQUNBLGdCQUFBLENBR0osS0FDSSxZQUFBLENBQ0EsZUFBQSxDQUNBLFNBQUEsQ0FFSSx5QkFMUixLQU1ZLFNBQUEsQ0FBQSxDQUdKLHlCQVRSLEtBV1ksU0FBQSxDQUFBLENBTVosT0FDSSxZQUFBLENBQ0Esa0JBQUEsQ0FDQSw2QkFBQSxDQUNBLE9BQUEsQ0FDQSxjQUFBLENBQ0EsU0FBQSxDQUNBLFlBQUEsQ0FDQSxhQUFBLENBQ0EsY0FBQSxDQUNBLHdCQUFBLENBQ0EsYUFBQSxDQUNBLFVBQUEsQ0FFQSxTQUNJLG9CQUFBLENBQ0EsZ0JBQUEsQ0FDQSxhQUFBLENBR0oseUJBcEJKLE9BcUJRLHFCQUFBLENBQ0Esc0JBQUEsQ0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NaW5nemF0JmZhbWlseT1SYWxld2F5OndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTWluZ3phdCcsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiAjMTMzMTVjO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IDAgYXV0byA1JTtcXHJcXG4gICAgcGFkZGluZzogMiU7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMTEsIDM4LCA3MCwgMC40KSAwcHggNXB4LCByZ2JhKDE5LCA0OSwgOTIsIDAuMykgMHB4IDEwcHgsIHJnYmEoMTksIDY0LCAxMTYsIDAuMikgMHB4IDE1cHgsIHJnYmEoMTQxLCAxNjksIDE5NiwwLjMpIDBweCAyMHB4LCByZ2JhKDE0MSwgMTY5LCAxOTYsIDAuMSkgMHB4IDI1cHg7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubG9nbyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZ2FwOiAyMHB4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFxyXFxuICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcclxcblxcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcclxcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA4MHB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGgxIHtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMi41cmVtO1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuXFxyXFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxyXFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbmFzaWRlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcblxcclxcbiAgICAuYnRuIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XFxyXFxuICAgICAgICB3aWR0aDogMzAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogNSUgMTAlO1xcclxcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIGNvbG9yOiAjZWVmNGVkO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMHB4IDVweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMHB4IDFweCAwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5hc2lkZS1idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzMDQ5O1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3I6ICMwMDMwNDksICRhbW91bnQ6IDEwJSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1sYWJlbCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUlO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDY4dmg7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIFxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMzE1YztcXHJcXG4gICAgY29sb3I6ICNlNWU1ZTU7XFxyXFxuICAgIHBhZGRpbmc6IDElO1xcclxcblxcclxcbiAgICBhIHtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICAgICAgY29sb3I6I2U1ZTVlNSA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL2h0bWx7bGluZS1oZWlnaHQ6MS4xNTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJX1ib2R5e21hcmdpbjowfW1haW57ZGlzcGxheTpibG9ja31oMXtmb250LXNpemU6MmVtO21hcmdpbjouNjdlbSAwfWhye2JveC1zaXppbmc6Y29udGVudC1ib3g7aGVpZ2h0OjA7b3ZlcmZsb3c6dmlzaWJsZX1wcmV7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLG1vbm9zcGFjZTtmb250LXNpemU6MWVtfWF7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDApfWFiYnJbdGl0bGVde2JvcmRlci1ib3R0b206bm9uZTt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgZG90dGVkfWIsc3Ryb25ne2ZvbnQtd2VpZ2h0OmJvbGRlcn1jb2RlLGtiZCxzYW1we2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSxtb25vc3BhY2U7Zm9udC1zaXplOjFlbX1zbWFsbHtmb250LXNpemU6ODAlfXN1YixzdXB7Zm9udC1zaXplOjc1JTtsaW5lLWhlaWdodDowO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfXN1Yntib3R0b206LTAuMjVlbX1zdXB7dG9wOi0wLjVlbX1pbWd7Ym9yZGVyLXN0eWxlOm5vbmV9YnV0dG9uLGlucHV0LG9wdGdyb3VwLHNlbGVjdCx0ZXh0YXJlYXtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxMDAlO2xpbmUtaGVpZ2h0OjEuMTU7bWFyZ2luOjB9YnV0dG9uLGlucHV0e292ZXJmbG93OnZpc2libGV9YnV0dG9uLHNlbGVjdHt0ZXh0LXRyYW5zZm9ybTpub25lfWJ1dHRvbixbdHlwZT1idXR0b25dLFt0eXBlPXJlc2V0XSxbdHlwZT1zdWJtaXRdey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b259YnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyLXN0eWxlOm5vbmU7cGFkZGluZzowfWJ1dHRvbjotbW96LWZvY3VzcmluZyxbdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFt0eXBlPXJlc2V0XTotbW96LWZvY3VzcmluZyxbdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5ne291dGxpbmU6MXB4IGRvdHRlZCBCdXR0b25UZXh0fWZpZWxkc2V0e3BhZGRpbmc6LjM1ZW0gLjc1ZW0gLjYyNWVtfWxlZ2VuZHtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y29sb3I6aW5oZXJpdDtkaXNwbGF5OnRhYmxlO21heC13aWR0aDoxMDAlO3BhZGRpbmc6MDt3aGl0ZS1zcGFjZTpub3JtYWx9cHJvZ3Jlc3N7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9dGV4dGFyZWF7b3ZlcmZsb3c6YXV0b31bdHlwZT1jaGVja2JveF0sW3R5cGU9cmFkaW9de2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjB9W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9ue2hlaWdodDphdXRvfVt0eXBlPXNlYXJjaF17LXdlYmtpdC1hcHBlYXJhbmNlOnRleHRmaWVsZDtvdXRsaW5lLW9mZnNldDotMnB4fVt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9Ojotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9uO2ZvbnQ6aW5oZXJpdH1kZXRhaWxze2Rpc3BsYXk6YmxvY2t9c3VtbWFyeXtkaXNwbGF5Omxpc3QtaXRlbX10ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL25vcm1hbGl6ZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUFBLENBVUEsS0FDSSxnQkFBQSxDQUVBLDZCQUFBLENBV0osS0FDSSxRQUFBLENBT0osS0FDSSxhQUFBLENBUUosR0FDSSxhQUFBLENBQ0EsY0FBQSxDQVdKLEdBQ0ksc0JBQUEsQ0FFQSxRQUFBLENBRUEsZ0JBQUEsQ0FTSixJQUNJLCtCQUFBLENBRUEsYUFBQSxDQVdKLEVBQ0ksOEJBQUEsQ0FRSixZQUNJLGtCQUFBLENBRUEseUJBQUEsQ0FFQSxnQ0FBQSxDQVFKLFNBRUksa0JBQUEsQ0FRSixjQUdJLCtCQUFBLENBRUEsYUFBQSxDQVFKLE1BQ0ksYUFBQSxDQVFKLFFBRUksYUFBQSxDQUNBLGFBQUEsQ0FDQSxpQkFBQSxDQUNBLHVCQUFBLENBR0osSUFDSSxjQUFBLENBR0osSUFDSSxVQUFBLENBVUosSUFDSSxpQkFBQSxDQVdKLHNDQUtJLG1CQUFBLENBRUEsY0FBQSxDQUVBLGdCQUFBLENBRUEsUUFBQSxDQVNKLGFBR0ksZ0JBQUEsQ0FRSixjQUdJLG1CQUFBLENBT0osZ0RBSUkseUJBQUEsQ0FPSix3SEFJSSxpQkFBQSxDQUNBLFNBQUEsQ0FPSiw0R0FJSSw2QkFBQSxDQU9KLFNBQ0ksMEJBQUEsQ0FVSixPQUNJLHFCQUFBLENBRUEsYUFBQSxDQUVBLGFBQUEsQ0FFQSxjQUFBLENBRUEsU0FBQSxDQUVBLGtCQUFBLENBUUosU0FDSSx1QkFBQSxDQU9KLFNBQ0ksYUFBQSxDQVFKLDZCQUVJLHFCQUFBLENBRUEsU0FBQSxDQVFKLGtGQUVJLFdBQUEsQ0FRSixjQUNJLDRCQUFBLENBRUEsbUJBQUEsQ0FRSix5Q0FDSSx1QkFBQSxDQVFKLDZCQUNJLHlCQUFBLENBRUEsWUFBQSxDQVdKLFFBQ0ksYUFBQSxDQU9KLFFBQ0ksaUJBQUEsQ0FVSixTQUNJLFlBQUEsQ0FPSixTQUNJLFlBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcclxcblxcclxcbi8qIERvY3VtZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxyXFxuICovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZWN0aW9uc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcclxcbiAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcclxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogR3JvdXBpbmcgY29udGVudFxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXHJcXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5wcmUge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxyXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hYmJyW3RpdGxlXSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuYixcXHJcXG5zdHJvbmcge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5jb2RlLFxcclxcbmtiZCxcXHJcXG5zYW1wIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnNtYWxsIHtcXHJcXG4gICAgZm9udC1zaXplOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcclxcbiAqIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5zdWIsXFxyXFxuc3VwIHtcXHJcXG4gICAgZm9udC1zaXplOiA3NSU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuc3ViIHtcXHJcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcbiAgICB0b3A6IC0wLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRW1iZWRkZWQgY29udGVudFxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEZvcm1zXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbm9wdGdyb3VwLFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxyXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQge1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXHJcXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbnNlbGVjdCB7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXHJcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXHJcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXHJcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICovXFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxyXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcclxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXHJcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAvKiAyICovXFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAvKiAzICovXFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5wcm9ncmVzcyB7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxyXFxuICovXFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxyXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcclxcbiAqL1xcclxcblxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcclxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxyXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxyXFxuICovXFxyXFxuXFxyXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udDogaW5oZXJpdDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbnRlcmFjdGl2ZVxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLypcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuc3VtbWFyeSB7XFxyXFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWlzY1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcclxcbiAqL1xcclxcblxcclxcbnRlbXBsYXRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuW2hpZGRlbl0ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mYXZvcml0ZXMuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IFBpY3R1cmUgfSBmcm9tICcuL3BpY3R1cmUuaW50ZWZhY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBpY3R1cmVzTGlzdDogUGljdHVyZVtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQmFuYW5hJyxcclxuICAgICAgICB5ZWFyOiAyMDIyLFxyXG4gICAgICAgIHByaWNlOiAxMDAsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFzaWxpc2EnLFxyXG4gICAgICAgIGJydXNoOiAnb2lsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0JhbmFuYSBwYWludGVkIHdpdGggb2lsIGJydXNoJyxcclxuICAgICAgICBhbW91bnQ6IDEsXHJcbiAgICAgICAgY29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9iYW5hbmEtb2lsLWJydXNoLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdDYXQnLFxyXG4gICAgICAgIHllYXI6IDIwMjEsXHJcbiAgICAgICAgcHJpY2U6IDEwNSxcclxuICAgICAgICBhdXRob3I6ICdWYWxpYW50c2luYScsXHJcbiAgICAgICAgYnJ1c2g6ICdwZW5jaWwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnR3JleSBjYXQgc21pbGVzIHlvdScsXHJcbiAgICAgICAgYW1vdW50OiAxMCxcclxuICAgICAgICBjb2xvcjogJ2dyZXknLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9jYXQtcGVuY2lsLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdUcmlhbmdsZXMnLFxyXG4gICAgICAgIHllYXI6IDIwMjEsXHJcbiAgICAgICAgcHJpY2U6IDc3LFxyXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcclxuICAgICAgICBicnVzaDogJ3dhdGVyY29sb3InLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQmx1ZSB0cmlhbmdsZXMgZmlsbGVkIHdpdGggd2F0ZXJjb2xvcicsXHJcbiAgICAgICAgYW1vdW50OiAzLFxyXG4gICAgICAgIGNvbG9yOiAnYmx1ZScsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3RyaWFuZ2xlcy1ibHVlLXdhdGVyY29sb3IuanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0NocmlzdG1hcyB0cmVlJyxcclxuICAgICAgICB5ZWFyOiAyMDIzLFxyXG4gICAgICAgIHByaWNlOiA3MCxcclxuICAgICAgICBhdXRob3I6ICdWYXNpbGlzYScsXHJcbiAgICAgICAgYnJ1c2g6ICdvaWwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSG9saWRheSBpcyBjb21pbmchIENocmlzdG1hcyB0cmVlIGZvciB5b3UgSE8tSE8tSE8nLFxyXG4gICAgICAgIGFtb3VudDogMixcclxuICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvY2hyaXN0bWFzLXRyZWUtb2lsLWJydXNoLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdDbG91ZCcsXHJcbiAgICAgICAgeWVhcjogMjAyMixcclxuICAgICAgICBwcmljZTogNTAsXHJcbiAgICAgICAgc2FsZVByaWNlOiA0MCxcclxuICAgICAgICBhdXRob3I6ICdWYWxpYW50c2luYScsXHJcbiAgICAgICAgYnJ1c2g6ICdwZW5jaWwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBsaXR0bGUgY2xvdWQgZm9yIHdhcm0gZGF5cycsXHJcbiAgICAgICAgYW1vdW50OiAxNSxcclxuICAgICAgICBjb2xvcjogJ2JsdWUnLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9jbG91ZC1wZW5jaWwuanBnJyxcclxuICAgICAgICBvbnNhbGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnRmlzaCcsXHJcbiAgICAgICAgeWVhcjogMjAxOCxcclxuICAgICAgICBwcmljZTogMTAsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFzaWxpc2EnLFxyXG4gICAgICAgIGJydXNoOiAnY3JheW9uJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBiZXN0IHF1aWV0IHBldCBvciBqdXN0IGNvb2tpZSwgYXMgeW91IHdpc2gnLFxyXG4gICAgICAgIGFtb3VudDogMyxcclxuICAgICAgICBjb2xvcjogJ29yYW5nZScsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL2Zpc2gtY3JheW9uLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdGbG93ZXInLFxyXG4gICAgICAgIHllYXI6IDIwMTgsXHJcbiAgICAgICAgcHJpY2U6IDUsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFsaWFudHNpbmEnLFxyXG4gICAgICAgIGJydXNoOiAncGVuY2lsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdXIgd2ludGVyIGJvdXF1ZXQnLFxyXG4gICAgICAgIGFtb3VudDogOSxcclxuICAgICAgICBjb2xvcjogJ2JsdWUnLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9mbG93ZXItcGVuY2lsLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdHcmFwZScsXHJcbiAgICAgICAgeWVhcjogMjAxOSxcclxuICAgICAgICBwcmljZTogMjAwLFxyXG4gICAgICAgIHNhbGVQcmljZTogMTMwLFxyXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcclxuICAgICAgICBicnVzaDogJ3dhdGVyY29sb3InLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSnVzdCBkZWxpY2lvdXMnLFxyXG4gICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICBjb2xvcjogJ3B1cnBsZScsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL2dyYXBlLXdhdGVyY29sb3ItYnJ1c2guanBnJyxcclxuICAgICAgICBvbnNhbGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnU3RhcnMnLFxyXG4gICAgICAgIHllYXI6IDIwMTgsXHJcbiAgICAgICAgcHJpY2U6IDkwLFxyXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcclxuICAgICAgICBicnVzaDogJ3BlbmNpbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdZZWxsb3cgc3RhcnMnLFxyXG4gICAgICAgIGFtb3VudDogMyxcclxuICAgICAgICBjb2xvcjogJ3llbGxvdycsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3N0YXJzLXllbGxvdy1wZW5jaWwuanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0dyYXNzJyxcclxuICAgICAgICB5ZWFyOiAyMDIyLFxyXG4gICAgICAgIHByaWNlOiA3MyxcclxuICAgICAgICBhdXRob3I6ICdWYWxpYW50c2luYScsXHJcbiAgICAgICAgYnJ1c2g6ICdwZW5jaWwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU21lbGxzIGxpa2Ugc3VtbWVyJyxcclxuICAgICAgICBhbW91bnQ6IDQsXHJcbiAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL2dyYXNzLXBlbmNpbC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnSGVhcnQnLFxyXG4gICAgICAgIHllYXI6IDIwMjAsXHJcbiAgICAgICAgcHJpY2U6IDcwLFxyXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcclxuICAgICAgICBicnVzaDogJ2FpcmJydXNoJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FsbCB5b3UgbmVlZCBpcyBsb3ZlJyxcclxuICAgICAgICBhbW91bnQ6IDgsXHJcbiAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9oZWFydC1haXJicnVzaC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUGVudGFnb24nLFxyXG4gICAgICAgIHllYXI6IDIwMTAsXHJcbiAgICAgICAgcHJpY2U6IDgwLFxyXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcclxuICAgICAgICBicnVzaDogJ3BlbmNpbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdHcmVlbiBwZW50YWdvbicsXHJcbiAgICAgICAgYW1vdW50OiAzLFxyXG4gICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9wZW50YWdvbi1ncmVlbi1wZW5jaWwuanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ09yYW5nZScsXHJcbiAgICAgICAgeWVhcjogMjAxOSxcclxuICAgICAgICBwcmljZTogNDQsXHJcbiAgICAgICAgc2FsZVByaWNlOiA0MCxcclxuICAgICAgICBhdXRob3I6ICdWYXNpbGlzYScsXHJcbiAgICAgICAgYnJ1c2g6ICdtYXJrZXInLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnT3JhbmdlIGxpa2Ugb3JhbmdlJyxcclxuICAgICAgICBhbW91bnQ6IDgsXHJcbiAgICAgICAgY29sb3I6ICdvcmFuZ2UnLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9vcmFuZ2UtbWFya2VyLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1BpZycsXHJcbiAgICAgICAgeWVhcjogMjAxNixcclxuICAgICAgICBwcmljZTogMTMsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFzaWxpc2EnLFxyXG4gICAgICAgIGJydXNoOiAnbWFya2VyJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ09pbmsgb2luaycsXHJcbiAgICAgICAgYW1vdW50OiAzLFxyXG4gICAgICAgIGNvbG9yOiAncm9zZScsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3BpZy1tYXJrZXIuanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1JhaW5ib3cnLFxyXG4gICAgICAgIHllYXI6IDIwMjAsXHJcbiAgICAgICAgcHJpY2U6IDE4MCxcclxuICAgICAgICBzYWxlUHJpY2U6IDEwMCxcclxuICAgICAgICBhdXRob3I6ICdWYXNpbGlzYScsXHJcbiAgICAgICAgYnJ1c2g6ICdjcmF5b24nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUk9ZR0JJVicsXHJcbiAgICAgICAgYW1vdW50OiAxLFxyXG4gICAgICAgIGNvbG9yOiAncmFpbmJvdycsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3JhaW5ib3ctY3JheW9uLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1N0YXInLFxyXG4gICAgICAgIHllYXI6IDIwMjEsXHJcbiAgICAgICAgcHJpY2U6IDI5LFxyXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcclxuICAgICAgICBicnVzaDogJ3BlbmNpbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdTaGluZSBicmlnaHQnLFxyXG4gICAgICAgIGFtb3VudDogMTMsXHJcbiAgICAgICAgY29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9zdGFyLXBlbmNpbC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnU3VuJyxcclxuICAgICAgICB5ZWFyOiAyMDE5LFxyXG4gICAgICAgIHByaWNlOiAzMCxcclxuICAgICAgICBhdXRob3I6ICdWYWxpYW50c2luYScsXHJcbiAgICAgICAgYnJ1c2g6ICdjcmF5b24nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRm9yIHJhaW55IGRheXMnLFxyXG4gICAgICAgIGFtb3VudDogMzAsXHJcbiAgICAgICAgY29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9zdW4tY3JheW9uLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdXYXRlcm1lbG9uJyxcclxuICAgICAgICB5ZWFyOiAyMDIyLFxyXG4gICAgICAgIHByaWNlOiA5MCxcclxuICAgICAgICBhdXRob3I6ICdWYXNpbGlzYScsXHJcbiAgICAgICAgYnJ1c2g6ICdtYXJrZXInLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIllvdSBjYW4ndCBqdXN0IHN0b3BcIixcclxuICAgICAgICBhbW91bnQ6IDEyLFxyXG4gICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvd2F0ZXJtZWxvbi1tYXJrZXIuanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0RvZycsXHJcbiAgICAgICAgeWVhcjogMjAxNSxcclxuICAgICAgICBwcmljZTogMTAwLFxyXG4gICAgICAgIHNhbGVQcmljZTogOTUsXHJcbiAgICAgICAgYXV0aG9yOiAnVmVyYW5pa2EnLFxyXG4gICAgICAgIGJydXNoOiAnd2F0ZXJjb2xvcicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdZb3VyIGJlc3QgZnJpZW5kJyxcclxuICAgICAgICBhbW91bnQ6IDEsXHJcbiAgICAgICAgY29sb3I6ICdncmV5JyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvZG9nLXdhdGVyY29sb3ItYnJ1c2guanBnJyxcclxuICAgICAgICBvbnNhbGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUm9ja2V0JyxcclxuICAgICAgICB5ZWFyOiAyMDE2LFxyXG4gICAgICAgIHByaWNlOiAyMDAsXHJcbiAgICAgICAgc2FsZVByaWNlOiAxODAsXHJcbiAgICAgICAgYXV0aG9yOiAnVmVyYW5pa2EnLFxyXG4gICAgICAgIGJydXNoOiAnYnJ1c2gnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVG8gdGhlIG1vb24nLFxyXG4gICAgICAgIGFtb3VudDogMTUsXHJcbiAgICAgICAgY29sb3I6ICdncmV5JyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvcm9ja2V0LWJydXNoLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1NhdHVybicsXHJcbiAgICAgICAgeWVhcjogMjAxNixcclxuICAgICAgICBwcmljZTogMTAwLFxyXG4gICAgICAgIGF1dGhvcjogJ1ZlcmFuaWthJyxcclxuICAgICAgICBicnVzaDogJ21hcmtlcicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdKdXN0IHRvbyBmYXIgYXdheScsXHJcbiAgICAgICAgYW1vdW50OiA1LFxyXG4gICAgICAgIGNvbG9yOiAnYnJvd24nLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9zYXR1cm4tbWFya2VyLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdTbmFpbCcsXHJcbiAgICAgICAgeWVhcjogMjAxNyxcclxuICAgICAgICBwcmljZTogMTAyLFxyXG4gICAgICAgIGF1dGhvcjogJ1ZlcmFuaWthJyxcclxuICAgICAgICBicnVzaDogJ29pbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdTbG8tby1vLW8tb3cnLFxyXG4gICAgICAgIGFtb3VudDogMTUsXHJcbiAgICAgICAgY29sb3I6ICdicm93bicsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3NuYWlsLW9pbC1icnVzaC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnT3ZhbCcsXHJcbiAgICAgICAgeWVhcjogMjAxMCxcclxuICAgICAgICBwcmljZTogODQsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFsaWFudHNpbmEnLFxyXG4gICAgICAgIGJydXNoOiAnb2lsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1JlZCBvdmFsJyxcclxuICAgICAgICBhbW91bnQ6IDMsXHJcbiAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9vdmFsLXJlZC1vaWwuanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1RyZWUnLFxyXG4gICAgICAgIHllYXI6IDIwMTgsXHJcbiAgICAgICAgcHJpY2U6IDUyLFxyXG4gICAgICAgIGF1dGhvcjogJ1ZlcmFuaWthJyxcclxuICAgICAgICBicnVzaDogJ2NyYXlvbicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdQZXJmZWN0IHNoYWRvdyBhbmQgYWlyJyxcclxuICAgICAgICBhbW91bnQ6IDE1LFxyXG4gICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy90cmVlLWNyYXlvbi5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnU3F1YXJlcycsXHJcbiAgICAgICAgeWVhcjogMjAxMixcclxuICAgICAgICBwcmljZTogNDUsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFsaWFudHNpbmEnLFxyXG4gICAgICAgIGJydXNoOiAnY3JheW9uJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0JsYWNrIHNxdWFyZXMnLFxyXG4gICAgICAgIGFtb3VudDogMyxcclxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvc3F1YXJlcy1ibGFjay1jcmF5b24uanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuXTtcclxuIiwiaW1wb3J0IENhcmQgZnJvbSAnLi4vY2FyZC9jYXJkJztcclxuaW1wb3J0ICcuL2Zhdm9yaXRlcy5zY3NzJztcclxuaW1wb3J0IHsgcGljdHVyZXNMaXN0IH0gZnJvbSAnLi4vLi4vLi4vcGljdHVyZXMtbGlzdCc7XHJcblxyXG5jbGFzcyBGYXZvcml0ZXMge1xyXG4gICAgcHVibGljIHRvZ2dsZShlOiBFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IGZhdlN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJyk7XHJcbiAgICAgICAgbGV0IHByZXZWYWx1ZTogc3RyaW5nW10gPSBmYXZTdG9yYWdlID8gZmF2U3RvcmFnZS5zcGxpdCgnLScpIDogW107XHJcblxyXG4gICAgICAgIGxldCBpdGVtVGl0bGU6IHN0cmluZztcclxuICAgICAgICBpZiAoZS50YXJnZXQpIHtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYnV0dG9uLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRUaXRsZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2l0ZW0tdGl0bGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0VGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtVGl0bGUgPSB0YXJnZXRUaXRsZS5pbm5lckhUTUwudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldlZhbHVlLmluY2x1ZGVzKGl0ZW1UaXRsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldlZhbHVlLnNwbGljZShwcmV2VmFsdWUuaW5kZXhPZihpdGVtVGl0bGUpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmZpbHRlcnM/LnJlcGxhY2UoJy1mYXZvcml0ZScsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2VmFsdWUucHVzaChpdGVtVGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuZmlsdGVycyArPSAnLWZhdm9yaXRlJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm9yaXRlcycsIHByZXZWYWx1ZS5qb2luKCctJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0cycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICBwcm9kdWN0c1dyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZCgpO1xyXG4gICAgICAgICAgICBjYXJkLmRyYXcocGljdHVyZXNMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoZWNrRmF2KHRpdGxlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBmYXZTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlcycpO1xyXG4gICAgICAgIGxldCBwcmV2VmFsdWU6IHN0cmluZ1tdID0gZmF2U3RvcmFnZSA/IGZhdlN0b3JhZ2Uuc3BsaXQoJy0nKSA6IFtdO1xyXG4gICAgICAgIGlmIChwcmV2VmFsdWUuaW5jbHVkZXModGl0bGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVzO1xyXG4iLCJpbXBvcnQgeyBwaWN0dXJlc0xpc3QgfSBmcm9tICcuLi8uLi8uLi9waWN0dXJlcy1saXN0JztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY2FyZC9jYXJkJztcclxuaW1wb3J0IEZhdm9yaXRlcyBmcm9tICcuLi9mYXZvcml0ZXMvZmF2b3JpdGVzJztcclxuXHJcbmNsYXNzIEZpbHRlciB7XHJcbiAgICBhbGxQcm9kdWN0czogRWxlbWVudFtdO1xyXG4gICAgZmlsdGVyZWRQcm9kdWN0czogRWxlbWVudFtdO1xyXG4gICAgZmF2b3JpdGVzOiBGYXZvcml0ZXM7XHJcbiAgICBwcm9kdWN0c1dyYXBwZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY2FyZDogQ2FyZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFsbFByb2R1Y3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9faXRlbScpKTtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLmZhdm9yaXRlcyA9IG5ldyBGYXZvcml0ZXMoKTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0cycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY2FyZCA9IG5ldyBDYXJkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUZpbHRlcihmaWx0ZXI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlsdGVycycpO1xyXG5cclxuICAgICAgICBpZiAoZmlsdGVycykge1xyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJzQXJyID0gZmlsdGVycy5zcGxpdCgnLScpO1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyLnN0YXJ0c1dpdGgoJ2NvbG9yJykgfHwgZmlsdGVyLnN0YXJ0c1dpdGgoJ2JydXNoJykgfHwgZmlsdGVyLnN0YXJ0c1dpdGgoJ2F1dGhvcicpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJUb1JlbW92ZSA9IGZpbHRlci5zcGxpdCgnKicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVnRmlsdGVyID0gbmV3IFJlZ0V4cChgXiR7ZmlsdGVyVG9SZW1vdmVbMF19YCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGluZCBpbiBmaWx0ZXJzQXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ0ZpbHRlci50ZXN0KGZpbHRlcnNBcnJbaW5kXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlc2VudEZpbHRlciA9IGZpbHRlcnNBcnJbaW5kXS5zcGxpdCgnKicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJlc2VudEZpbHRlci5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW50RmlsdGVyLnNwbGljZShwcmVzZW50RmlsdGVyLmluZGV4T2YoZmlsdGVyVG9SZW1vdmVbMV0pLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnNBcnJbaW5kXSA9IHByZXNlbnRGaWx0ZXIuam9pbignKicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyc0Fyci5zcGxpY2UoK2luZCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWdGaWx0ZXIgPSBuZXcgUmVnRXhwKGBeJHtmaWx0ZXJ9YCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGluZCBpbiBmaWx0ZXJzQXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ0ZpbHRlci50ZXN0KGZpbHRlcnNBcnJbaW5kXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyc0Fyci5zcGxpY2UoK2luZCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWx0ZXJzJywgZmlsdGVyc0Fyci5qb2luKCctJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmlsdGVyUHJvZHVjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyc1N0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWx0ZXJzJyk7XHJcbiAgICAgICAgbGV0IGZpbHRlcnNBcnI6IHN0cmluZ1tdO1xyXG4gICAgICAgIGlmIChmaWx0ZXJzU3RyKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnNBcnIgPSBmaWx0ZXJzU3RyLnNwbGl0KCctJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmlsdGVyc0Fyci5sZW5ndGggPT09IDAgfHwgZmlsdGVyc0FyclswXSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZC5kcmF3KHBpY3R1cmVzTGlzdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJzQXJyLmZvckVhY2goKGZpbHRlcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlci5zdGFydHNXaXRoKCdwcmljZScpIHx8IGZpbHRlci5zdGFydHNXaXRoKCd5ZWFyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeVByaWNlQW5kWWVhcihmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLnN0YXJ0c1dpdGgoJ3NhbGUnKSB8fCBmaWx0ZXIuc3RhcnRzV2l0aCgnZmF2b3JpdGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5U2FsZUFuZEZhdm9yaXRlKGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeVByb3BlcnR5KGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kcmF3UHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gW107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0c1dyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiB0aGlzLmFsbFByb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzV3JhcHBlci5hcHBlbmRDaGlsZChwcm9kdWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbHRlckJ5UHJpY2VBbmRZZWFyKGZpbHRlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb2R1Y3RzID0gdGhpcy5maWx0ZXJlZFByb2R1Y3RzLmxlbmd0aCA+PSAxID8gWy4uLnRoaXMuZmlsdGVyZWRQcm9kdWN0c10gOiBbLi4udGhpcy5hbGxQcm9kdWN0c107XHJcbiAgICAgICAgY29uc3QgcmFuZ2VBcnIgPSBmaWx0ZXIuc3BsaXQoJyonKTtcclxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgLiR7cmFuZ2VBcnJbMF19LXNsaWRlcmA7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0ZpbHRlcmVkOiBFbGVtZW50W10gPSBjdXJyZW50UHJvZHVjdHMucmVkdWNlKChmaWx0ZXJlZDogRWxlbWVudFtdLCBpdGVtOiBFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihgLmNhcmRfX2l0ZW0tJHtyYW5nZUFyclswXX1gKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgaXRlbVZhbHVlICYmXHJcbiAgICAgICAgICAgICAgICBwYXJzZUludChpdGVtVmFsdWUuaW5uZXJIVE1MKSA+PSArcmFuZ2VBcnJbMV0gJiZcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGl0ZW1WYWx1ZS5pbm5lckhUTUwpIDw9ICtyYW5nZUFyclsyXVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSBbLi4ubmV3RmlsdGVyZWRdO1xyXG4gICAgICAgIGNvbnN0IHNsaWRlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NOYW1lKSkgYXMgSFRNTElucHV0RWxlbWVudFtdO1xyXG5cclxuICAgICAgICBpZiAoc2xpZGVycykge1xyXG4gICAgICAgICAgICBzbGlkZXJzWzBdLnZhbHVlID0gcmFuZ2VBcnJbMV07XHJcbiAgICAgICAgICAgIHNsaWRlcnNbMV0udmFsdWUgPSByYW5nZUFyclsyXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtjbGFzc05hbWV9X19jb250YWluZXJgKTtcclxuICAgICAgICBpZiAoc2xpZGVyQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0RnJvbSA9IHNsaWRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZnJvbScpO1xyXG4gICAgICAgICAgICBjb25zdCBlbmRXaXRoID0gc2xpZGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50bycpO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRGcm9tICYmIGVuZFdpdGgpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0RnJvbS5pbm5lckhUTUwgPSBzbGlkZXJzWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZW5kV2l0aC5pbm5lckhUTUwgPSBzbGlkZXJzWzFdLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmlsdGVyQnlTYWxlQW5kRmF2b3JpdGUoZmlsdGVyOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvZHVjdHMgPSB0aGlzLmZpbHRlcmVkUHJvZHVjdHMubGVuZ3RoID49IDEgPyBbLi4udGhpcy5maWx0ZXJlZFByb2R1Y3RzXSA6IFsuLi50aGlzLmFsbFByb2R1Y3RzXTtcclxuICAgICAgICBjb25zdCBuZXdGaWx0ZXJlZDogRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbHRlckNsYXNzID0gZmlsdGVyID09PSAnc2FsZScgPyAnLm9uc2FsZScgOiAnLmlzZmF2b3JpdGUnO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlckNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihmaWx0ZXJDbGFzcykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBpZiAoZmlsdGVyQ2hlY2tib3gpIGZpbHRlckNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgY3VycmVudFByb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RFbGVtZW50ID0gcHJvZHVjdCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdFByb3BlcnRpZXMgPSBwcm9kdWN0RWxlbWVudC5kYXRhc2V0LmZpbHRlcnM7XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJvZHVjdFByb3BlcnRpZXNBcnI6IHN0cmluZ1tdO1xyXG4gICAgICAgICAgICBpZiAocHJvZHVjdFByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RQcm9wZXJ0aWVzQXJyID0gcHJvZHVjdFByb3BlcnRpZXMuc3BsaXQoJy0nKTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0UHJvcGVydGllc0Fyci5pbmNsdWRlcyhmaWx0ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RmlsdGVyZWQucHVzaChwcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSBbLi4ubmV3RmlsdGVyZWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmlsdGVyQnlQcm9wZXJ0eShmaWx0ZXI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9kdWN0cyA9IHRoaXMuZmlsdGVyZWRQcm9kdWN0cy5sZW5ndGggPj0gMSA/IFsuLi50aGlzLmZpbHRlcmVkUHJvZHVjdHNdIDogWy4uLnRoaXMuYWxsUHJvZHVjdHNdO1xyXG4gICAgICAgIGNvbnN0IG5ld0ZpbHRlcmVkOiBFbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgZmlsdGVyQXJyID0gZmlsdGVyLnNwbGl0KCcqJyk7XHJcbiAgICAgICAgY29uc3QgZmlsdGVycyA9IGZpbHRlckFyci5zbGljZSgxKTtcclxuXHJcbiAgICAgICAgZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3hGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmaWx0ZXJ9YCkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKGNoZWNrYm94RmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2JveEZpbHRlci5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0IG9mIGN1cnJlbnRQcm9kdWN0cykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdEVsZW1lbnQgPSBwcm9kdWN0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFByb3BlcnRpZXMgPSBwcm9kdWN0RWxlbWVudC5kYXRhc2V0LmZpbHRlcnM7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHByb2R1Y3RQcm9wZXJ0aWVzQXJyOiBzdHJpbmdbXTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0UHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQcm9wZXJ0aWVzQXJyID0gcHJvZHVjdFByb3BlcnRpZXMuc3BsaXQoJy0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3RQcm9wZXJ0aWVzQXJyLmluY2x1ZGVzKGZpbHRlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RmlsdGVyZWQucHVzaChwcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSBbLi4ubmV3RmlsdGVyZWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhd1Byb2R1Y3RzKCkge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHNXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLmZpbHRlcmVkUHJvZHVjdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiB0aGlzLmZpbHRlcmVkUHJvZHVjdHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RUaXRsZUVMID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbS10aXRsZScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb2R1Y3RUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2R1Y3RUaXRsZUVMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlID0gcHJvZHVjdFRpdGxlRUwuaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc0ZhdjogYm9vbGVhbiA9IHRoaXMuZmF2b3JpdGVzLmNoZWNrRmF2KHByb2R1Y3RUaXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmF2QnRuID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcuZmF2LWJ0biBpbWcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRmF2ICYmIGZhdkJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXZCdG4uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vLi4vLi4vYXNzZXRzL3N2Zy9saWtlLWJsYWNrLnN2ZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKHByb2R1Y3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gJ1NvcnJ5LCBub3RoaW5nIGNvdWxkIGJlIGZvdW5kLiBZb3UgY2FuIHRyeSBhbm90aGVyIHNlYXJjaCByZXF1ZXN0Lic7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7XHJcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBwaWN0dXJlc0xpc3QgfSBmcm9tICcuLi8uLi8uLi9waWN0dXJlcy1saXN0JztcclxuaW1wb3J0ICcuL3BvcHVwLnNjc3MnO1xyXG5cclxuY2xhc3MgUG9wdXAge1xyXG4gICAgcHVibGljIGNyZWF0ZVBvcHVwID0gKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdEltZyA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0SW1nLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdFRpdGxlRWwgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLXRpdGxlJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJvZHVjdFRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGlmIChwcm9kdWN0VGl0bGVFbCkge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlID0gcHJvZHVjdFRpdGxlRWwuaW5uZXJIVE1MO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBpY3R1cmUgPSBwaWN0dXJlc0xpc3QuZmlsdGVyKChwaWN0dXJlKSA9PiBwaWN0dXJlLnRpdGxlID09PSBwcm9kdWN0VGl0bGUpWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9wdXBUZW1wOiBIVE1MVGVtcGxhdGVFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cFRlbXAnKTtcclxuICAgICAgICAgICAgICAgIGlmIChwb3B1cFRlbXApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cENsb25lID0gcG9wdXBUZW1wLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3B1cENsb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwVGl0bGUgPSBwb3B1cENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faXRlbS10aXRsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXBUaXRsZSkgcG9wdXBUaXRsZS50ZXh0Q29udGVudCA9IHBpY3R1cmUudGl0bGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cEltZyA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLnBvcHVwX19pdGVtLWltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXBJbWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgcGljdHVyZS51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBwaWN0dXJlLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cFllYXIgPSBwb3B1cENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faXRlbS15ZWFyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3B1cFllYXIpIHBvcHVwWWVhci50ZXh0Q29udGVudCA9IHBpY3R1cmUueWVhciArICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cFByaWNlID0gcG9wdXBDbG9uZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2l0ZW0tcHJpY2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwUHJpY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwUHJpY2UudGV4dENvbnRlbnQgPSBwaWN0dXJlLnByaWNlICsgJyQnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwaWN0dXJlLm9uc2FsZSAmJiBwaWN0dXJlLnNhbGVQcmljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwUHJpY2UuY2xhc3NMaXN0LmFkZCgnY2FyZF9faXRlbS1wcmljZV9zYWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FsZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19pdGVtX3NhbGUtcHJpY2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2UuaW5uZXJIVE1MID0gYCR7cGljdHVyZS5zYWxlUHJpY2V9JGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBQcmljZS5hZnRlcihzYWxlUHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbGVQZXJjZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2l0ZW1fc2FsZS1wZXJjZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQuaW5uZXJIVE1MID0gYC0ke01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCAtIChwaWN0dXJlLnNhbGVQcmljZSAqIDEwMCkgLyBwaWN0dXJlLnByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0lYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2UuYWZ0ZXIoc2FsZVBlcmNlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwQXV0aG9yID0gcG9wdXBDbG9uZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2l0ZW0tYXV0aG9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3B1cEF1dGhvcikgcG9wdXBBdXRob3IuaW5uZXJIVE1MICs9IHBpY3R1cmUuYXV0aG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cENvbG9yID0gcG9wdXBDbG9uZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2l0ZW0tY29sb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwQ29sb3IpIHBvcHVwQ29sb3IuaW5uZXJIVE1MICs9IHBpY3R1cmUuY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwQnJ1c2ggPSBwb3B1cENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faXRlbS1icnVzaCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXBCcnVzaCkgcG9wdXBCcnVzaC5pbm5lckhUTUwgKz0gcGljdHVyZS5icnVzaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXBEZXNjcmlwdGlvbiA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLnBvcHVwX19pdGVtLWRlc2NyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3B1cERlc2NyaXB0aW9uKSBwb3B1cERlc2NyaXB0aW9uLmlubmVySFRNTCArPSBwaWN0dXJlLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zZUJ0biA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLmJ0bi1jcm9zcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VCdG4pIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZVBvcHVwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwID0gcG9wdXBDbG9uZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2l0ZW0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwKSBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VQb3B1cCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmQocG9wdXBDbG9uZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluLmFwcGVuZChmcmFnbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHBvcHVwLm9ubW91c2VvdmVyID0gKGUpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQpIHBvcHVwQnRuLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKTtcclxuICAgICAgICAvLyB9O1xyXG5cclxuICAgICAgICAvLyBwb3B1cC5vbm1vdXNlb3V0ID0gKGUpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQpIHBvcHVwQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQnKTtcclxuICAgICAgICAvLyB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgY2xvc2VQb3B1cCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG4gICAgICAgIGlmIChtYWluKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RDaGlsZCA9IG1haW4ubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICAgICAgaWYgKGxhc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChsYXN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XHJcbiIsImNsYXNzIFNvcnQge1xyXG4gICAgcHVibGljIHNvcnRQcm9kdWN0cygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzb3J0QnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ydEJ5Jyk7XHJcbiAgICAgICAgc3dpdGNoIChzb3J0QnkpIHtcclxuICAgICAgICAgICAgY2FzZSAncHJpY2UtYXNjZW5kaW5nJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydCgncHJpY2UnLCAnYXNjZW5kaW5nJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgJ3ByaWNlLWRlc2NlbmRpbmcnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0KCdwcmljZScsICdkZXNjZW5kaW5nJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgJ3RpdGxlLWFzY2VuZGluZyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQoJ3RpdGxlJywgJ2FzY2VuZGluZycpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjYXNlICd0aXRsZS1kZXNjZW5kaW5nJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydCgndGl0bGUnLCAnZGVzY2VuZGluZycpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjYXNlICd5ZWFyLWFzY2VuZGluZyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQoJ3llYXInLCAnYXNjZW5kaW5nJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgJ3llYXItZGVzY2VuZGluZyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQoJ3llYXInLCAnZGVzY2VuZGluZycpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3NvcnRCeScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNvcnQoZmlsdGVyOiBzdHJpbmcsIGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19pdGVtJykpO1xyXG5cclxuICAgICAgICBjb25zdCBmaWx0ZXJDbGFzcyA9XHJcbiAgICAgICAgICAgIGZpbHRlciA9PT0gJ3ByaWNlJyA/ICcuY2FyZF9faXRlbS1wcmljZScgOiBmaWx0ZXIgPT09ICd0aXRsZScgPyAnLmNhcmRfX2l0ZW0tdGl0bGUnIDogJy5jYXJkX19pdGVtLXllYXInO1xyXG5cclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnYXNjZW5kaW5nJyAmJiBmaWx0ZXIgPT09ICd0aXRsZScpIHtcclxuICAgICAgICAgICAgcHJvZHVjdHMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChhLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyQ2xhc3MpPy5pbm5lckhUTUwgYXMgc3RyaW5nKS5sb2NhbGVDb21wYXJlKFxyXG4gICAgICAgICAgICAgICAgICAgIGIucXVlcnlTZWxlY3RvcihmaWx0ZXJDbGFzcyk/LmlubmVySFRNTCBhcyBzdHJpbmdcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZGVzY2VuZGluZycgJiYgZmlsdGVyID09PSAndGl0bGUnKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYi5xdWVyeVNlbGVjdG9yKGZpbHRlckNsYXNzKT8uaW5uZXJIVE1MIGFzIHN0cmluZykubG9jYWxlQ29tcGFyZShcclxuICAgICAgICAgICAgICAgICAgICBhLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyQ2xhc3MpPy5pbm5lckhUTUwgYXMgc3RyaW5nXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2FzY2VuZGluZycpIHtcclxuICAgICAgICAgICAgcHJvZHVjdHMuc29ydChcclxuICAgICAgICAgICAgICAgIChhLCBiKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoYS5xdWVyeVNlbGVjdG9yKGZpbHRlckNsYXNzKT8uaW5uZXJIVE1MIGFzIHN0cmluZykgLVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoYi5xdWVyeVNlbGVjdG9yKGZpbHRlckNsYXNzKT8uaW5uZXJIVE1MIGFzIHN0cmluZylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rlc2NlbmRpbmcnKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzLnNvcnQoXHJcbiAgICAgICAgICAgICAgICAoYSwgYikgPT5cclxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGIucXVlcnlTZWxlY3RvcihmaWx0ZXJDbGFzcyk/LmlubmVySFRNTCBhcyBzdHJpbmcpIC1cclxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGEucXVlcnlTZWxlY3RvcihmaWx0ZXJDbGFzcyk/LmlubmVySFRNTCBhcyBzdHJpbmcpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNvcnRPcHRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSk7XHJcbiAgICAgICAgc29ydE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IGAke2ZpbHRlcn0tJHtkaXJlY3Rpb259YCkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0cycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHByb2R1Y3RzV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBwcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiBwcm9kdWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQocHJvZHVjdCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb3J0O1xyXG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJkLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBQaWN0dXJlIH0gZnJvbSAnLi4vLi4vLi4vcGljdHVyZS5pbnRlZmFjZSc7XHJcbmltcG9ydCBGYXZvcml0ZXMgZnJvbSAnLi4vZmF2b3JpdGVzL2Zhdm9yaXRlcyc7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vZmlsdGVyL2ZpbHRlcic7XHJcbmltcG9ydCBQb3B1cCBmcm9tICcuLi9wb3B1cC9wb3B1cCc7XHJcbmltcG9ydCBTb3J0IGZyb20gJy4uL3NvcnQvc29ydCc7XHJcbmltcG9ydCAnLi9jYXJkLnNjc3MnO1xyXG5cclxuY2xhc3MgQ2FyZCB7XHJcbiAgICBmYXZvcml0ZXM6IEZhdm9yaXRlcztcclxuICAgIHBvcHVwOiBQb3B1cDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmZhdm9yaXRlcyA9IG5ldyBGYXZvcml0ZXMoKTtcclxuICAgICAgICB0aGlzLnBvcHVwID0gbmV3IFBvcHVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoZGF0YTogUGljdHVyZVtdKSB7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdENhcmRUZW1wOiBIVE1MVGVtcGxhdGVFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0Q2FyZFRlbXAnKTtcclxuXHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9kdWN0Q2FyZFRlbXApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRDbG9uZSA9IHByb2R1Y3RDYXJkVGVtcC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FyZENsb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FyZEl0ZW1UaXRsZSA9IGNhcmRDbG9uZS5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbS10aXRsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc0ZhdjogYm9vbGVhbiA9IHRoaXMuZmF2b3JpdGVzLmNoZWNrRmF2KGl0ZW0udGl0bGUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmF2QnRuID0gY2FyZENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5mYXYtYnRuIGltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0ZhdiAmJiBmYXZCdG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmF2QnRuLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uLy4uLy4uL2Fzc2V0cy9zdmcvbGlrZS1ibGFjay5zdmcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmRJdGVtVGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkSXRlbUltZyA9IGNhcmRDbG9uZS5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbS1pbWcnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZEl0ZW1JbWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW1JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpdGVtLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJdGVtSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgaXRlbS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRJdGVtWWVhciA9IGNhcmRDbG9uZS5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbS15ZWFyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmRJdGVtWWVhcikgY2FyZEl0ZW1ZZWFyLnRleHRDb250ZW50ID0gaXRlbS55ZWFyICsgJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRJdGVtID0gY2FyZENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmRJdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSXRlbS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1maWx0ZXJzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2l0ZW0uYnJ1c2h9LSR7aXRlbS5hdXRob3IudG9Mb3dlckNhc2UoKX0tJHtpdGVtLmNvbG9yfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkSXRlbVByaWNlID0gY2FyZENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLXByaWNlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmRJdGVtUHJpY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2UgKyAnJCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLm9uc2FsZSAmJiBpdGVtLnNhbGVQcmljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19pdGVtX3NhbGUtcHJpY2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbGVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19pdGVtLXByaWNlX3NhbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZS5pbm5lckhUTUwgPSBgJHtpdGVtLnByaWNlfSRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW1QcmljZS5pbm5lckhUTUwgPSBgJHtpdGVtLnNhbGVQcmljZX0kYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJdGVtUHJpY2UuYmVmb3JlKHNhbGVQcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzYWxlUGVyY2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2l0ZW1fc2FsZS1wZXJjZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUGVyY2VudC5pbm5lckhUTUwgPSBgLSR7TWF0aC5yb3VuZCgxMDAgLSAoaXRlbS5zYWxlUHJpY2UgKiAxMDApIC8gaXRlbS5wcmljZSl9JWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2UuYWZ0ZXIoc2FsZVBlcmNlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW0uZGF0YXNldC5maWx0ZXJzICs9ICctc2FsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhdkJ1dHRvbiA9IGNhcmRDbG9uZS5xdWVyeVNlbGVjdG9yKCcuZmF2LWJ0bicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmYXZCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZhdm9yaXRlcy50b2dnbGUoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBuZXcgRmlsdGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuZmlsdGVyUHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvcnQgPSBuZXcgU29ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydC5zb3J0UHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3JlQnV0dG9uID0gY2FyZENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLWJ0bi0tbW9yZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3JlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk6IHZvaWQgPT4gdGhpcy5wb3B1cC5jcmVhdGVQb3B1cChlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmQoY2FyZENsb25lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdHMnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvZHVjdHMpIHByb2R1Y3RzLmFwcGVuZChmcmFnbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VhcmNoLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBwaWN0dXJlc0xpc3QgfSBmcm9tICcuLi8uLi8uLi9waWN0dXJlcy1saXN0JztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY2FyZC9jYXJkJztcclxuaW1wb3J0ICcuL3NlYXJjaC5zY3NzJztcclxuXHJcbmNsYXNzIFNlYXJjaCB7XHJcbiAgICBwdWJsaWMgc2VhcmNoUHJvZHVjdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0c1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0ID0gc2VhcmNoSW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKS50cmltKCk7XHJcbiAgICAgICAgaWYgKCF0ZXh0KSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgY2FyZC5kcmF3KHBpY3R1cmVzTGlzdCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9faXRlbScpO1xyXG5cclxuICAgICAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3RzID0gQXJyYXkuZnJvbShwcm9kdWN0cykuZmlsdGVyKChwcm9kdWN0KSA9PlxyXG4gICAgICAgICAgICBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLXRpdGxlJyk/LmlubmVySFRNTC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRleHQpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlcmVkUHJvZHVjdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgZmlsdGVyZWRQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3RzV3JhcHBlci5hcHBlbmRDaGlsZChwcm9kdWN0KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UuaW5uZXJIVE1MID0gJ1NvcnJ5LCBub3RoaW5nIGNvdWxkIGJlIGZvdW5kLiBZb3UgY2FuIHRyeSBhbm90aGVyIHNlYXJjaCByZXF1ZXN0Lic7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgcHJvZHVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVTZWFyY2hUZXh0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hQcm9kdWN0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVyLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4uL2ZpbHRlci9maWx0ZXInO1xyXG5pbXBvcnQgJy4vc2xpZGVyLnNjc3MnO1xyXG5cclxuY2xhc3MgU2xpZGVyIHtcclxuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gICAgZmlsdGVyOiBGaWx0ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2xhc3NOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgICAgICB0aGlzLmZpbHRlciA9IG5ldyBGaWx0ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICBjb25zdCBzbGlkZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY2xhc3NOYW1lKSkgYXMgSFRNTElucHV0RWxlbWVudFtdO1xyXG5cclxuICAgICAgICBpZiAoK3NsaWRlcnNbMF0udmFsdWUgPiArc2xpZGVyc1sxXS52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gc2xpZGVyc1sxXS52YWx1ZTtcclxuICAgICAgICAgICAgc2xpZGVyc1sxXS52YWx1ZSA9IHNsaWRlcnNbMF0udmFsdWU7XHJcbiAgICAgICAgICAgIHNsaWRlcnNbMF0udmFsdWUgPSB0ZW1wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCtzbGlkZXJzWzFdLnZhbHVlIDwgK3NsaWRlcnNbMF0udmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgdGVtcCA9IHNsaWRlcnNbMF0udmFsdWU7XHJcbiAgICAgICAgICAgIHNsaWRlcnNbMF0udmFsdWUgPSBzbGlkZXJzWzFdLnZhbHVlO1xyXG4gICAgICAgICAgICBzbGlkZXJzWzFdLnZhbHVlID0gdGVtcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFJhbmdlRmlsdGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHNsaWRlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jbGFzc05hbWUpKSBhcyBIVE1MSW5wdXRFbGVtZW50W107XHJcbiAgICAgICAgY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHt0aGlzLmNsYXNzTmFtZX1fX2NvbnRhaW5lcmApO1xyXG4gICAgICAgIGlmIChzbGlkZXJDb250YWluZXIpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRGcm9tID0gc2xpZGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5mcm9tJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZFdpdGggPSBzbGlkZXJDb250YWluZXIucXVlcnlTZWxlY3RvcignLnRvJyk7XHJcbiAgICAgICAgICAgIGlmIChzdGFydEZyb20gJiYgZW5kV2l0aCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRGcm9tLmlubmVySFRNTCA9IHNsaWRlcnNbMF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbmRXaXRoLmlubmVySFRNTCA9IHNsaWRlcnNbMV0udmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2xpZGVyVHlwZSA9IHRoaXMuY2xhc3NOYW1lLnNwbGl0KCctJylbMF0uc2xpY2UoMSk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXIucmVtb3ZlRmlsdGVyKHNsaWRlclR5cGUpO1xyXG4gICAgICAgIGNvbnN0IHNsaWRlckZpbHRlciA9IGAke3NsaWRlclR5cGV9KiR7c2xpZGVyc1swXS52YWx1ZX0qJHtzbGlkZXJzWzFdLnZhbHVlfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWx0ZXJzJyk7XHJcblxyXG4gICAgICAgIGlmIChwcmV2VmFsdWUpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbHRlcnMnLCBwcmV2VmFsdWUgKyAnLScgKyBzbGlkZXJGaWx0ZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWx0ZXJzJywgc2xpZGVyRmlsdGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcclxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FydC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0ICcuL2NhcnQuc2Nzcyc7XHJcblxyXG5jbGFzcyBDYXJ0IHtcclxuICAgIHB1YmxpYyBhZGRUb0NhcnQoZTogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQnKTtcclxuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBsZXQgcHJvZHVjdDtcclxuICAgICAgICBpZiAoYWRkQnV0dG9uKSBwcm9kdWN0ID0gYWRkQnV0dG9uLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IHJlbW92ZUJ0bjtcclxuICAgICAgICBpZiAocHJvZHVjdCkgcmVtb3ZlQnRuID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbS1idG4tLXJlbW92ZScpO1xyXG5cclxuICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgaWYgKHJlbW92ZUJ0bikgcmVtb3ZlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgICBpZiAoY2FydCkge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJ0QW1vdW50ID0gY2FydC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXJ0V2FybmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LXdhcm5pbmcnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYXJ0QW1vdW50ICYmIGNhcnRXYXJuaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjcm9zc0J1dHRvbiA9IGNhcnRXYXJuaW5nLnF1ZXJ5U2VsZWN0b3IoJy5idG4tY3Jvc3Nfd2FybmluZycpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNyb3NzQnV0dG9uKSBjcm9zc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNhcnRXYXJuaW5nLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Ftb3VudCA9ICtjYXJ0QW1vdW50LmlubmVySFRNTCArIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5ld0Ftb3VudCA+IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydFdhcm5pbmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcnRBbW91bnQuaW5uZXJIVE1MID0gbmV3QW1vdW50LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydFdhcm5pbmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUZyb21DYXJ0KGU6IEV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0Jyk7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGxldCBwcm9kdWN0O1xyXG4gICAgICAgIGlmIChyZW1vdmVCdG4pIHtcclxuICAgICAgICAgICAgcHJvZHVjdCA9IHJlbW92ZUJ0bi5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWRkQnRuO1xyXG4gICAgICAgIGlmIChwcm9kdWN0KSBhZGRCdG4gPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLWJ0bi0tY2FydCcpO1xyXG5cclxuICAgICAgICBpZiAoYWRkQnRuKSBhZGRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgaWYgKGNhcnQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2FydEFtb3VudCA9IGNhcnQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xyXG4gICAgICAgICAgICBpZiAoY2FydEFtb3VudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QW1vdW50ID0gK2NhcnRBbW91bnQuaW5uZXJIVE1MIC0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobmV3QW1vdW50IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydEFtb3VudC5pbm5lckhUTUwgPSBuZXdBbW91bnQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcclxuIiwiaW1wb3J0IENhcmQgZnJvbSAnLi4vdmlldy9jYXJkL2NhcmQnO1xyXG5pbXBvcnQgeyBwaWN0dXJlc0xpc3QgfSBmcm9tICcuLi8uLi9waWN0dXJlcy1saXN0JztcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi92aWV3L3NlYXJjaC9zZWFyY2gnO1xyXG5pbXBvcnQgU29ydCBmcm9tICcuLi92aWV3L3NvcnQvc29ydCc7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vdmlldy9maWx0ZXIvZmlsdGVyJztcclxuaW1wb3J0IFNsaWRlciBmcm9tICcuLi92aWV3L3NsaWRlci9zbGlkZXInO1xyXG5pbXBvcnQgUG9wdXAgZnJvbSAnLi4vdmlldy9wb3B1cC9wb3B1cCc7XHJcbmltcG9ydCBGYXZvcml0ZXMgZnJvbSAnLi4vdmlldy9mYXZvcml0ZXMvZmF2b3JpdGVzJztcclxuaW1wb3J0IENhcnQgZnJvbSAnLi4vdmlldy9jYXJ0L2NhcnQnO1xyXG5pbXBvcnQgZG9uZSBmcm9tICcuL2RvbmUnO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIHByaWNlU2xpZGVyOiBTbGlkZXI7XHJcbiAgICB5ZWFyU2xpZGVyOiBTbGlkZXI7XHJcbiAgICBjYXJkOiBDYXJkO1xyXG4gICAgc29ydDogU29ydDtcclxuICAgIHBvcHVwOiBQb3B1cDtcclxuICAgIHNlYXJjaDogU2VhcmNoO1xyXG4gICAgZmF2b3JpdGVzOiBGYXZvcml0ZXM7XHJcbiAgICBjYXJ0OiBDYXJ0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucHJpY2VTbGlkZXIgPSBuZXcgU2xpZGVyKCcucHJpY2Utc2xpZGVyJyk7XHJcbiAgICAgICAgdGhpcy55ZWFyU2xpZGVyID0gbmV3IFNsaWRlcignLnllYXItc2xpZGVyJyk7XHJcbiAgICAgICAgdGhpcy5jYXJkID0gbmV3IENhcmQoKTtcclxuICAgICAgICB0aGlzLnNvcnQgPSBuZXcgU29ydCgpO1xyXG4gICAgICAgIHRoaXMucG9wdXAgPSBuZXcgUG9wdXAoKTtcclxuICAgICAgICB0aGlzLnNlYXJjaCA9IG5ldyBTZWFyY2goKTtcclxuICAgICAgICB0aGlzLmZhdm9yaXRlcyA9IG5ldyBGYXZvcml0ZXMoKTtcclxuICAgICAgICB0aGlzLmNhcnQgPSBuZXcgQ2FydCgpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkLmRyYXcocGljdHVyZXNMaXN0KTtcclxuICAgICAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcclxuICAgICAgICBpZiAoc2VhcmNoSW5wdXQpIHtcclxuICAgICAgICAgICAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLnNlYXJjaC5zZWFyY2hQcm9kdWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoUmVtb3ZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1yZW1vdmUnKTtcclxuICAgICAgICBpZiAoc2VhcmNoUmVtb3ZlQnRuKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaFJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2VhcmNoLnJlbW92ZVNlYXJjaFRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzb3J0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3J0Jyk7XHJcbiAgICAgICAgaWYgKHNvcnRMaXN0KSB7XHJcbiAgICAgICAgICAgIHNvcnRMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBlLnRhcmdldCBhcyBIVE1MT3B0aW9uRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc29ydEJ5Jywgc2VsZWN0ZWRPcHRpb24udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydC5zb3J0UHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IG5ldyBGaWx0ZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmlsdGVyQ2hlY2tib3hlcyA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyJykgYXMgdW5rbm93bikgYXMgSFRNTElucHV0RWxlbWVudFtdO1xyXG5cclxuICAgICAgICBmaWx0ZXJDaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PlxyXG4gICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gZS50YXJnZXQgYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveFBhcmVudCA9IHNlbGVjdGVkT3B0aW9uLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyVHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94UGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyVHlwZSA9IGNoZWNrYm94UGFyZW50LmNsYXNzTGlzdC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldlZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpbHRlcnMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyc0FyciA9IHByZXZWYWx1ZS5zcGxpdCgnLScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmVzZW50RmlsdGVyID0gZmlsdGVyc0Fyci5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc3RhcnRzV2l0aChmaWx0ZXJUeXBlKSlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVySW5kOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJlc2VudEZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckluZCA9IGZpbHRlcnNBcnIuaW5kZXhPZihwcmVzZW50RmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdGaWx0ZXJWYWx1ZSA9IGAke3ByZXNlbnRGaWx0ZXJ9KiR7c2VsZWN0ZWRPcHRpb24udmFsdWV9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzQXJyW2ZpbHRlckluZF0gPSBuZXdGaWx0ZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyc0Fyci5wdXNoKGAke2ZpbHRlclR5cGV9KiR7c2VsZWN0ZWRPcHRpb24udmFsdWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbHRlcnMnLCBmaWx0ZXJzQXJyLmpvaW4oJy0nKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlsdGVycycsIGAke2ZpbHRlclR5cGV9KiR7c2VsZWN0ZWRPcHRpb24udmFsdWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIucmVtb3ZlRmlsdGVyKGAke2ZpbHRlclR5cGV9KiR7c2VsZWN0ZWRPcHRpb24udmFsdWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmlsdGVyLmZpbHRlclByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQuc29ydFByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2FsZVJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uc2FsZScpO1xyXG4gICAgICAgIGlmIChzYWxlUmFkaW8pIHtcclxuICAgICAgICAgICAgc2FsZVJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNhbGVSYWRpb0VsZW1lbnQgPSBzYWxlUmFkaW8gYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGlmIChzYWxlUmFkaW9FbGVtZW50LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlsdGVycycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbHRlcnMnLCBwcmV2VmFsdWUgKyAnLXNhbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlsdGVycycsICdzYWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIucmVtb3ZlRmlsdGVyKCdzYWxlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZmlsdGVyLmZpbHRlclByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQuc29ydFByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZmF2b3JpdGVSYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pc2Zhdm9yaXRlJyk7XHJcbiAgICAgICAgaWYgKGZhdm9yaXRlUmFkaW8pIHtcclxuICAgICAgICAgICAgZmF2b3JpdGVSYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYXZvcml0ZVJhZGlvRWxlbWVudCA9IGZhdm9yaXRlUmFkaW8gYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGlmIChmYXZvcml0ZVJhZGlvRWxlbWVudC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldlZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpbHRlcnMnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldlZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWx0ZXJzJywgcHJldlZhbHVlICsgJy1mYXZvcml0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWx0ZXJzJywgJ2Zhdm9yaXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIucmVtb3ZlRmlsdGVyKCdmYXZvcml0ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZpbHRlci5maWx0ZXJQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0LnNvcnRQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNsaWRlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJfX2lucHV0JykpIGFzIEhUTUxJbnB1dEVsZW1lbnRbXTtcclxuICAgICAgICBzbGlkZXJzLmZvckVhY2goKHNsaWRlcikgPT4ge1xyXG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3ByaWNlLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZVNsaWRlci5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZVNsaWRlci5zZXRSYW5nZUZpbHRlcigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXJTbGlkZXIuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWVhclNsaWRlci5zZXRSYW5nZUZpbHRlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZpbHRlci5maWx0ZXJQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0LnNvcnRQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgYXNpZGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFzaWRlLWJ1dHRvbicpO1xyXG4gICAgICAgIGFzaWRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uRWwgPSBidXR0b24gYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBidXR0b25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChidXR0b25FbC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZS1zZXR0aW5ncy1idXR0b24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChidXR0b25FbC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZS1maWx0ZXJzLWJ1dHRvbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2ZpbHRlcnMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpbHRlci5maWx0ZXJQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0LnNvcnRQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgY2FydEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9faXRlbS1idG4tLWNhcnQnKTtcclxuICAgICAgICBjYXJ0QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmNhcnQuYWRkVG9DYXJ0KGUpKSk7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19pdGVtLWJ0bi0tcmVtb3ZlJyk7XHJcbiAgICAgICAgcmVtb3ZlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBFdmVudCkgPT4gdGhpcy5jYXJ0LnJlbW92ZUZyb21DYXJ0KGUpKSk7XHJcblxyXG4gICAgICAgIGZpbHRlci5maWx0ZXJQcm9kdWN0cygpO1xyXG4gICAgICAgIHRoaXMuc29ydC5zb3J0UHJvZHVjdHMoKTtcclxuICAgICAgICBkb25lKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiY29uc3QgZG9uZSA9ICgpOiB2b2lkID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdEb25lOicpO1xyXG4gICAgY29uc29sZS5sb2coJ19fX19fX19fJyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJyog0JPQu9Cw0LLQvdCw0Y8g0YHRgtGA0LDQvdC40YbQsCDRgdC+0LTQtdGA0LbQuNGCINCy0YHQtSDRgtC+0LLQsNGA0Ysg0LzQsNCz0LDQt9C40L3QsCDQsCDRgtCw0LrQttC1INGE0LjQu9GM0YLRgNGLLCDRgdGC0YDQvtC60YMg0L/QvtC40YHQutCwLCDQv9C+0LvQtSDQtNC70Y8g0YHQvtGA0YLQuNGA0L7QstC60LguINCS0YvQv9C+0LvQvdGP0Y7RgtGB0Y8g0YLRgNC10LHQvtCy0LDQvdC40Y8g0Log0LLRkdGA0YHRgtC60LUgKzEwJ1xyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICcqINCa0LDRgNGC0L7Rh9C60LAg0YLQvtCy0LDRgNCwINGB0L7QtNC10YDQttC40YIg0LXQs9C+INC40LfQvtCx0YDQsNC20LXQvdC40LUsINC90LDQt9Cy0LDQvdC40LUsINC60L7Qu9C40YfQtdGB0YLQstC+INC00LDQvdC90L7Qs9C+INGC0L7QstCw0YDQsCDQvdCwINGB0LrQu9Cw0LTQtSwg0LPQvtC0INCy0YvRhdC+0LTQsCDQvdCwINGA0YvQvdC+0LosINGG0LLQtdGCLCDQv9GA0L7QuNC30LLQvtC00LjRgtC10LvRjCDQuCDRgi7QtC4sINC90LDRhdC+0LTQuNGC0YHRjyDQu9C4INGC0L7QstCw0YAg0LIg0LrQvtGA0LfQuNC90LUgKzEwICjRh9Cw0YHRgtGMINC00LDQvdC90YvRhSDRg9C60LDQt9Cw0L3QsCDQvdCwINGB0LDQvNC+0Lkg0LrQsNGA0YLQvtGH0LrQtSwg0YfQsNGB0YLRjCAtINCyINC/0L7Qv9Cw0L/QtSwg0LrQvtGC0L7RgNGL0Lkg0L7RgtC60YDRi9Cy0LDQtdGC0YHRjyDQv9C+INC60LvQuNC60YMg0L3QsCDQutC90L7Qv9C60YMgbW9yZSBpbmZvLCDQtdGB0LvQuCDQstC80LXRgdGC0L4g0LrQvdC+0L/QutC4IGFkZCB0byBjYXJ0INC/0L7Rj9Cy0LjQu9Cw0YHRjCDQutC90L7Qv9C60LAgUmVtb3ZlIGZyb20gY2FydCwg0YLQviDRgtC+0LLQsNGAINCyINC60L7RgNC30LjQvdC1KSdcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZygnX19fXycpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCfQlNC+0LHQsNCy0LvQtdC90LjQtSDRgtC+0LLQsNGA0L7QsiDQsiDQutC+0YDQt9C40L3RgyArMjAnKTtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICcqINC60LvQuNC60LDRjyDQv9C+INC60LDRgNGC0L7Rh9C60LUg0YEg0YLQvtCy0LDRgNC+0Lwg0LjQu9C4INC/0L4g0LrQvdC+0L/QutC1INC90LAg0L3QtdC8LCDRgtC+0LLQsNGAINC80L7QttC90L4g0LTQvtCx0LDQstC70Y/RgtGMINCyINC60L7RgNC30LjQvdGDINC40LvQuCDRg9C00LDQu9GP0YLRjC4g0JrQsNGA0YLQvtGH0LrQuCDQtNC+0LHQsNCy0LvQtdC90L3Ri9GFINCyINC60L7RgNC30LjQvdGDINGC0L7QstCw0YDQvtCyINCy0L3QtdGI0L3QtSDQvtGC0LvQuNGH0LDRjtGC0YHRjyDQvtGCINC+0YHRgtCw0LvRjNC90YvRhSAo0LXRgdC70Lgg0LLQvNC10YHRgtC+INC60L3QvtC/0LrQuCBhZGQgdG8gY2FydCDQv9C+0Y/QstC40LvQsNGB0Ywg0LrQvdC+0L/QutCwIFJlbW92ZSBmcm9tIGNhcnQsINGC0L4g0YLQvtCy0LDRgCDQsiDQutC+0YDQt9C40L3QtSkgKzEwJ1xyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICcqINC90LAg0YHRgtGA0LDQvdC40YbQtSDQvtGC0L7QsdGA0LDQttCw0LXRgtGB0Y8g0LrQvtC70LjRh9C10YHRgtCy0L4g0LTQvtCx0LDQstC70LXQvdC90YvRhSDQsiDQutC+0YDQt9C40L3RgyDRgtC+0LLQsNGA0L7Qsi4g0J/RgNC4INC/0L7Qv9GL0YLQutC1INC00L7QsdCw0LLQuNGC0Ywg0LIg0LrQvtGA0LfQuNC90YMg0LHQvtC70YzRiNC1IDIwINGC0L7QstCw0YDQvtCyLCDQstGL0LLQvtC00LjRgtGB0Y8g0LLRgdC/0LvRi9Cy0LDRjtGJ0LXQtSDRg9Cy0LXQtNC+0LzQu9C10L3QuNC1INGBINGC0LXQutGB0YLQvtC8IFwi0JjQt9Cy0LjQvdC40YLQtSwg0LLRgdC1INGB0LvQvtGC0Ysg0LfQsNC/0L7Qu9C90LXQvdGLXCIgKNC90LAg0LDQvdCz0LvQuNC50YHQutC+0LwpICsxMCdcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZygnX19fXycpO1xyXG4gICAgY29uc29sZS5sb2coJ9Ch0L7RgNGC0LjRgNC+0LLQutCwICsyMCcpO1xyXG4gICAgY29uc29sZS5sb2coJyog0YHQvtGA0YLQuNGA0L7QstC60LAg0YLQvtCy0LDRgNC+0LIg0L/QviDQvdCw0LfQstCw0L3QuNGOINCyINCy0L7Qt9GA0LDRgdGC0LDRjtGJ0LXQvCDQuCDRg9Cx0YvQstCw0Y7RidC10Lwg0L/QvtGA0Y/QtNC60LUgKzEwJyk7XHJcbiAgICBjb25zb2xlLmxvZygnKiDRgdC+0YDRgtC40YDQvtCy0LrQsCDRgtC+0LLQsNGA0L7QsiDQv9C+INCz0L7QtNGDINC40YUg0LLRi9GF0L7QtNCwINC90LAg0YDRi9C90L7QuiDQsiDQstC+0LfRgNCw0YHRgtCw0Y7RidC10Lwg0Lgg0YPQsdGL0LLQsNGO0YnQtdC8INC/0L7RgNGP0LTQutC1ICsxMCcpO1xyXG4gICAgY29uc29sZS5sb2coJ9CU0L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+INC10YHRgtGMINGB0L7RgNGC0LjRgNC+0LLQutCwINC/0L4g0YbQtdC90LUnKTtcclxuICAgIGNvbnNvbGUubG9nKCdfX19fJyk7XHJcbiAgICBjb25zb2xlLmxvZygn0KTQuNC70YzRgtGA0Ysg0LIg0YPQutCw0LfQsNC90L3QvtC8INC00LjQsNC/0LDQt9C+0L3QtSDQvtGCINC4INC00L4gKzMwJyk7XHJcbiAgICBjb25zb2xlLmxvZygnKiDRhNC40LvRjNGC0YDRiyDQv9C+INGG0LXQvdC1ICsxMCcpO1xyXG4gICAgY29uc29sZS5sb2coJyog0YTQuNC70YzRgtGA0Ysg0L/QviDQs9C+0LTRgyDQstGL0L/Rg9GB0LrQsCDQvdCwINGA0YvQvdC+0LogKzEwJyk7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAnKiDQtNC70Y8g0YTQuNC70YzRgtGA0LDRhtC40Lgg0LIg0YPQutCw0LfQsNC90L3QvtC8INC00LjQsNC/0LDQt9C+0L3QtSDQuNGB0L/QvtC70YzQt9GD0LXRgtGB0Y8gcmFuZ2Ugc2xpZGVyINGBINC00LLRg9C80Y8g0L/QvtC70LfRg9C90LrQsNC80LguINCf0YDQuCDQv9C10YDQtdC80LXRidC10L3QuNC4INC/0L7Qu9C30YPQvdC60L7QsiDQvtGC0L7QsdGA0LDQttCw0LXRgtGB0Y8g0LjRhSDRgtC10LrRg9GJ0LXQtSDQt9C90LDRh9C10L3QuNC1ICsxMCdcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZygnX19fXycpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCfQpNC40LvRjNGC0YDRiyDQv9C+INC30L3QsNGH0LXQvdC40Y4gKzMwJyk7XHJcbiAgICBjb25zb2xlLmxvZygnKiDRhNC40LvRjNGC0YDRiyDQv9C+INCw0LLRgtC+0YDRgyArNScpO1xyXG4gICAgY29uc29sZS5sb2coJyog0YTQuNC70YzRgtGA0Ysg0L/QviDRhtCy0LXRgtGDICs1Jyk7XHJcbiAgICBjb25zb2xlLmxvZygnKiDRhNC40LvRjNGC0YDRiyDQv9C+INC40YHQv9C+0LvRjNC30L7QstCw0L3QvdC+0Lkg0LrQuNGB0YLQuCArNScpO1xyXG4gICAgY29uc29sZS5sb2coJyog0LzQvtC20L3QviDQvtGC0L7QsdGA0LDQt9C40YLRjCDRgtC+0LvRjNC60L4g0LjQt9Cx0YDQsNC90L3Ri9C1INGC0L7QstCw0YDRiyDQuNC70Lgg0YLQvtC70YzQutC+INGC0L7QstCw0YDRiyDRgdC+INGB0LrQuNC00LrQvtC5ICs1Jyk7XHJcbiAgICBjb25zb2xlLmxvZygnKiDQvNC+0LbQvdC+INC+0YLRhNC40LvRjNGC0YDQvtCy0LDRgtGMINGC0L7QstCw0YDRiyDQv9C+INC90LXRgdC60L7Qu9GM0LrQuNC8INGE0LjQu9GM0YLRgNCw0Lwg0L7QtNC90L7Qs9C+INGC0LjQv9CwICsxMCcpO1xyXG4gICAgY29uc29sZS5sb2coJyog0JzQvtC20L3QviDQvtGC0YTQuNC70YzRgtGA0L7QstCw0YLRjCDRgtC+0LLQsNGA0Ysg0L/QviDQvdC10YHQutC+0LvRjNC60LjQvCDRhNC40LvRjNGC0YDQsNC8INGA0LDQt9C90L7Qs9C+INGC0LjQv9CwICsyMCcpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdfX19fJyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ9Ch0LHRgNC+0YEg0YTQuNC70YzRgtGA0L7QsiArMjAnKTtcclxuICAgIGNvbnNvbGUubG9nKCcqINC10YHRgtGMINC60L3QvtC/0LrQsCByZXNldCDQtNC70Y8g0YHQsdGA0L7RgdCwINGE0LjQu9GM0YLRgNC+0LIgKzEwJyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ19fX18nKTtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICcqINC/0YDQuCDRgdCx0YDQvtGB0LUg0YTQuNC70YzRgtGA0L7QsiDQutC90L7Qv9C60L7QuSByZXNldCwg0L/QvtC70LfRg9C90LrQuCByYW5nZSBzbGlkZXIg0YHQtNCy0LjQs9Cw0Y7RgtGB0Y8g0Log0LrRgNCw0Y/QvCwg0LfQvdCw0YfQtdC90LjRjyDQv9C+0LvQt9GD0L3QutC+0LIg0LLQvtC30LLRgNCw0YnQsNGO0YLRgdGPINC6INC/0LXRgNCy0L7QvdCw0YfQsNC70YzQvdGL0LwgKzEwJ1xyXG4gICAgKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygn0KHQvtGF0YDQsNC90LXQvdC40LUg0L3QsNGB0YLRgNC+0LXQuiDQsiBsb2NhbCBzdG9yYWdlICszMCcpO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJ9Cy0YvQsdGA0LDQvdC90YvQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQvCDRhNC40LvRjNGC0YDRiywg0L/QvtGA0Y/QtNC+0Log0YHQvtGA0YLQuNGA0L7QstC60LgsINC00L7QsdCw0LLQu9C10L3QvdGL0LUg0LIg0LjQt9Cx0YDQsNC90L3QvtC1INGC0L7QstCw0YDRiyDRgdC+0YXRgNCw0L3Rj9GO0YLRgdGPINC/0YDQuCDQv9C10YDQtdC30LDQs9GA0YPQt9C60LUg0YHRgtGA0LDQvdC40YbRiy4g0JXRgdGC0Ywg0LrQvdC+0L/QutCwINGB0LHRgNC+0YHQsCDQvdCw0YHRgtGA0L7QtdC6LCDQutC+0YLQvtGA0LDRjyDQvtGH0LjRidCw0LXRgiBsb2NhbCBzdG9yYWdlICsxMCdcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZygnX19fXycpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCfQn9C+0LjRgdC6ICszMCcpO1xyXG4gICAgY29uc29sZS5sb2coJyrQv9GA0Lgg0L7RgtC60YDRi9GC0LjQuCDQv9GA0LjQu9C+0LbQtdC90LjRjyDQutGD0YDRgdC+0YAg0L3QsNGF0L7QtNC40YLRgdGPINCyINC/0L7Qu9C1INC/0L7QuNGB0LrQsCArMicpO1xyXG4gICAgY29uc29sZS5sb2coJyog0LDQstGC0L7Qt9Cw0L/QvtC70L3QtdC90LjQtSDQv9C+0LvRjyDQv9C+0LjRgdC60LAg0L7RgtC60LvRjtGH0LXQvdC+ICjQvdC10YIg0LLRi9C/0LDQtNCw0Y7RidC10LPQviDRgdC/0LjRgdC60LAg0YEg0L/RgNC10LTRi9C00YPRidC40LzQuCDQt9Cw0L/RgNC+0YHQsNC80LgpICsyJyk7XHJcbiAgICBjb25zb2xlLmxvZygnKiDQtdGB0YLRjCBwbGFjZWhvbGRlciArMicpO1xyXG4gICAgY29uc29sZS5sb2coJyog0LIg0L/QvtC70LUg0L/QvtC40YHQutCwINC10YHRgtGMINC60YDQtdGB0YLQuNC6LCDQv9C+0LfQstC+0LvRj9GO0YnQuNC5INC+0YfQuNGB0YLQuNGC0Ywg0L/QvtC70LUg0L/QvtC40YHQutCwICsyJyk7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAnKiDQtdGB0LvQuCDQvdC10YIg0YHQvtCy0L/QsNC00LXQvdC40Y8g0L/QvtGB0LvQtdC00L7QstCw0YLQtdC70YzQvdC+0YHRgtC4INCx0YPQutCyINCyINC/0L7QuNGB0LrQvtCy0L7QvCDQt9Cw0L/RgNC+0YHQtSDRgSDQvdCw0LfQstCw0L3QuNC10Lwg0YLQvtCy0LDRgNCwLCDQstGL0LLQvtC00LjRgtGB0Y8g0YPQstC10LTQvtC80LvQtdC90LjQtSDQsiDRh9C10LvQvtCy0LXQutC+0YfQuNGC0LDQtdC80L7QvCDRhNC+0YDQvNCw0YLQtSwg0L3QsNC/0YDQuNC80LXRgCBcItCY0LfQstC40L3QuNGC0LUsINGB0L7QstC/0LDQtNC10L3QuNC5INC90LUg0L7QsdC90LDRgNGD0LbQtdC90L5cIiArMidcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAnKiDQv9GA0Lgg0LLQstC+0LTQtSDQv9C+0LjRgdC60L7QstC+0LPQviDQt9Cw0L/RgNC+0YHQsCDQvdCwINGB0YLRgNCw0L3QuNGG0LUg0L7RgdGC0LDRjtGC0YHRjyDRgtC+0LvRjNC60L4g0YLQtSDRgtC+0LLQsNGA0YssINCyINC60L7RgtC+0YDRi9GFINC10YHRgtGMINGD0LrQsNC30LDQvdC90YvQtSDQsiDQv9C+0LjRgdC60LUg0LHRg9C60LLRiyDQsiDRg9C60LDQt9Cw0L3QvdC+0Lwg0L/QvtGA0Y/QtNC60LUuINCf0YDQuCDRjdGC0L7QvCDQvdC1INC+0LHRj9C30LDRgtC10LvRjNC90L4sINGH0YLQvtCx0Ysg0LHRg9C60LLRiyDQsdGL0LvQuCDQsiDQvdCw0YfQsNC70LUg0YHQu9C+0LLQsC4g0KDQtdCz0LjRgdGC0YAg0YHQuNC80LLQvtC70L7QsiDQv9GA0Lgg0L/QvtC40YHQutC1INC90LUg0YPRh9C40YLRi9Cy0LDQtdGC0YHRjyArMTAnXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJyog0LXRgdC70Lgg0L7Rh9C40YHRgtC40YLRjCDQv9C+0LvQtSDQv9C+0LjRgdC60LAsINC90LAg0YHRgtGA0LDQvdC40YbQtSDQvtGC0L7QsdGA0LDQttCw0Y7RgtGB0Y8g0YLQvtCy0LDRgNGLLCDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidC40LUg0LLRgdC10Lwg0LLRi9Cx0YDQsNC90L3Ri9C8INGE0LjQu9GM0YLRgNCw0Lwg0Lgg0L3QsNGB0YLRgNC+0LnQutCw0Lwg0YHQvtGA0YLQuNGA0L7QstC60LggKzEwJ1xyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbmU7XHJcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwJztcclxuaW1wb3J0ICcuL3Njc3Mvbm9ybWFsaXplLnNjc3MnO1xyXG5pbXBvcnQgJy4vc2Nzcy9nbG9iYWwuc2Nzcyc7XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcbmFwcC5zdGFydCgpO1xyXG4iXSwibmFtZXMiOlsiX19fQ1NTX0xPQURFUl9FWFBPUlRfX18iLCJwdXNoIiwibW9kdWxlIiwiaWQiLCJfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJ0aGlzIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJjb25jYXQiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImxlbmd0aCIsIl9pIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJhcnIiLCJsZW4iLCJhcnIyIiwiQXJyYXkiLCJfaXRlbSIsImlzQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9zIiwiX2UiLCJfYXJyIiwiX24iLCJfZCIsImNhbGwiLCJuZXh0IiwiZG9uZSIsInZhbHVlIiwiZXJyIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwibyIsIm1pbkxlbiIsIm4iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImZyb20iLCJ0ZXN0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiVHlwZUVycm9yIiwiX25vbkl0ZXJhYmxlUmVzdCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJ1cmwiLCJvcHRpb25zIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJoYXNoIiwibmVlZFF1b3RlcyIsInJlcGxhY2UiLCJtZW1vIiwiZ2V0VGFyZ2V0IiwidGFyZ2V0Iiwic3R5bGVUYXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsImhlYWQiLCJlIiwic3R5bGVzSW5Eb20iLCJnZXRJbmRleEJ5SWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJyZXN1bHQiLCJtb2R1bGVzVG9Eb20iLCJpZENvdW50TWFwIiwiaWRlbnRpZmllcnMiLCJiYXNlIiwiY291bnQiLCJpbmRleCIsIm9iaiIsImNzcyIsIm1lZGlhIiwic291cmNlTWFwIiwicmVmZXJlbmNlcyIsInVwZGF0ZXIiLCJhZGRTdHlsZSIsImluc2VydFN0eWxlRWxlbWVudCIsInN0eWxlIiwiY3JlYXRlRWxlbWVudCIsImF0dHJpYnV0ZXMiLCJub25jZSIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwic2V0QXR0cmlidXRlIiwiaW5zZXJ0IiwiRXJyb3IiLCJhcHBlbmRDaGlsZCIsInRleHRTdG9yZSIsInJlcGxhY2VUZXh0IiwicmVwbGFjZW1lbnQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiYXBwbHlUb1NpbmdsZXRvblRhZyIsInJlbW92ZSIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiY3NzTm9kZSIsImNyZWF0ZVRleHROb2RlIiwiY2hpbGROb2RlcyIsInJlbW92ZUNoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYXBwbHlUb1RhZyIsInJlbW92ZUF0dHJpYnV0ZSIsImZpcnN0Q2hpbGQiLCJzaW5nbGV0b24iLCJzaW5nbGV0b25Db3VudGVyIiwidXBkYXRlIiwic3R5bGVJbmRleCIsImJpbmQiLCJwYXJlbnROb2RlIiwicmVtb3ZlU3R5bGVFbGVtZW50IiwibmV3T2JqIiwiYWxsIiwiYXRvYiIsImxhc3RJZGVudGlmaWVycyIsIm5ld0xpc3QiLCJuZXdMYXN0SWRlbnRpZmllcnMiLCJfaW5kZXgiLCJzcGxpY2UiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZ2V0dGVyIiwiZCIsImEiLCJkZWZpbml0aW9uIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiZyIsImdsb2JhbFRoaXMiLCJGdW5jdGlvbiIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsInNjcmlwdFVybCIsImltcG9ydFNjcmlwdHMiLCJsb2NhdGlvbiIsImN1cnJlbnRTY3JpcHQiLCJzcmMiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwIiwibmMiLCJwaWN0dXJlc0xpc3QiLCJ0aXRsZSIsInllYXIiLCJwcmljZSIsImF1dGhvciIsImJydXNoIiwiZGVzY3JpcHRpb24iLCJhbW91bnQiLCJjb2xvciIsIm9uc2FsZSIsInNhbGVQcmljZSIsInRvZ2dsZSIsIml0ZW1UaXRsZSIsImZhdlN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHJldlZhbHVlIiwic3BsaXQiLCJlbGVtZW50IiwiY3VycmVudFRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJ0YXJnZXRUaXRsZSIsImlubmVySFRNTCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJpbmRleE9mIiwiZGF0YXNldCIsImZpbHRlcnMiLCJzZXRJdGVtIiwiZHJhdyIsImNoZWNrRmF2IiwiYWxsUHJvZHVjdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmlsdGVyZWRQcm9kdWN0cyIsImZhdm9yaXRlcyIsInByb2R1Y3RzV3JhcHBlciIsImNhcmQiLCJyZW1vdmVGaWx0ZXIiLCJmaWx0ZXJzQXJyIiwic3RhcnRzV2l0aCIsImZpbHRlclRvUmVtb3ZlIiwicmVnRmlsdGVyIiwiUmVnRXhwIiwiaW5kIiwicHJlc2VudEZpbHRlciIsImZpbHRlclByb2R1Y3RzIiwiZmlsdGVyc1N0ciIsImZpbHRlckJ5UHJpY2VBbmRZZWFyIiwiZmlsdGVyQnlTYWxlQW5kRmF2b3JpdGUiLCJmaWx0ZXJCeVByb3BlcnR5IiwiZHJhd1Byb2R1Y3RzIiwicHJvZHVjdCIsImN1cnJlbnRQcm9kdWN0cyIsInJhbmdlQXJyIiwiY2xhc3NOYW1lIiwibmV3RmlsdGVyZWQiLCJyZWR1Y2UiLCJmaWx0ZXJlZCIsIml0ZW1WYWx1ZSIsInBhcnNlSW50Iiwic2xpZGVycyIsInNsaWRlckNvbnRhaW5lciIsInN0YXJ0RnJvbSIsImVuZFdpdGgiLCJmaWx0ZXJDbGFzcyIsImZpbHRlckNoZWNrYm94IiwiY2hlY2tlZCIsInByb2R1Y3RQcm9wZXJ0aWVzIiwiY2hlY2tib3hGaWx0ZXIiLCJwcm9kdWN0VGl0bGVFTCIsInByb2R1Y3RUaXRsZSIsImlzRmF2IiwiZmF2QnRuIiwiZXJyb3JNZXNzYWdlIiwiY2xhc3NMaXN0IiwiYWRkIiwiY3JlYXRlUG9wdXAiLCJwcm9kdWN0VGl0bGVFbCIsInBpY3R1cmUiLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJwb3B1cFRlbXAiLCJwb3B1cENsb25lIiwiY2xvbmVOb2RlIiwicG9wdXBUaXRsZSIsInRleHRDb250ZW50IiwicG9wdXBJbWciLCJwb3B1cFllYXIiLCJwb3B1cFByaWNlIiwiYWZ0ZXIiLCJzYWxlUGVyY2VudCIsIk1hdGgiLCJyb3VuZCIsInBvcHVwQXV0aG9yIiwicG9wdXBDb2xvciIsInBvcHVwQnJ1c2giLCJwb3B1cERlc2NyaXB0aW9uIiwiY2xvc2VCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2VQb3B1cCIsInBvcHVwIiwiYXBwZW5kIiwibWFpbiIsImJvZHkiLCJvdmVyZmxvdyIsImxhc3RDaGlsZCIsImxhc3RFbGVtZW50Q2hpbGQiLCJzb3J0UHJvZHVjdHMiLCJzb3J0IiwicmVtb3ZlSXRlbSIsImRpcmVjdGlvbiIsInByb2R1Y3RzIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJwYXJzZUZsb2F0Iiwib3B0aW9uIiwic2VsZWN0ZWQiLCJwcm9kdWN0Q2FyZFRlbXAiLCJjYXJkQ2xvbmUiLCJjYXJkSXRlbVRpdGxlIiwiY2FyZEl0ZW1JbWciLCJjYXJkSXRlbVllYXIiLCJjYXJkSXRlbSIsImNhcmRJdGVtUHJpY2UiLCJiZWZvcmUiLCJmYXZCdXR0b24iLCJtb3JlQnV0dG9uIiwic2VhcmNoUHJvZHVjdCIsInRleHQiLCJ0cmltIiwicmVtb3ZlU2VhcmNoVGV4dCIsInRlbXAiLCJzZXRSYW5nZUZpbHRlciIsInNsaWRlclR5cGUiLCJzbGlkZXJGaWx0ZXIiLCJhZGRUb0NhcnQiLCJyZW1vdmVCdG4iLCJjYXJ0IiwiYWRkQnV0dG9uIiwiY2FydEFtb3VudCIsImNyb3NzQnV0dG9uIiwibmV3QW1vdW50IiwicmVtb3ZlRnJvbUNhcnQiLCJhZGRCdG4iLCJwcmljZVNsaWRlciIsInllYXJTbGlkZXIiLCJzZWFyY2giLCJzdGFydCIsInNlYXJjaElucHV0Iiwic2VhcmNoUmVtb3ZlQnRuIiwic29ydExpc3QiLCJzZWxlY3RlZE9wdGlvbiIsImNoZWNrYm94IiwiZmlsdGVyVHlwZSIsImNoZWNrYm94UGFyZW50IiwiZmlsdGVySW5kIiwibmV3RmlsdGVyVmFsdWUiLCJzYWxlUmFkaW8iLCJmYXZvcml0ZVJhZGlvIiwic2xpZGVyIiwiY29udGFpbnMiLCJidXR0b24iLCJidXR0b25FbCIsImNsZWFyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=
