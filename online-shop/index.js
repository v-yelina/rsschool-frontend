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
                    var y = c.querySelector(".btn-cross");
                    y && y.addEventListener("click", r.closePopup);
                    var x = c.querySelector(".popup__item");
                    x && x.addEventListener("click", r.closePopup), A.append(c);
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
      const y = b;
      var x = (function () {
        function r() {
          (this.priceSlider = new C(".price-slider")),
            (this.yearSlider = new C(".year-slider")),
            (this.card = new p()),
            (this.sort = new l()),
            (this.popup = new c()),
            (this.search = new h()),
            (this.favorites = new o()),
            (this.cart = new y());
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
      const v = x;
      var w = n(89);
      e()(w.Z, { insert: "head", singleton: !1 }), w.Z.locals;
      var B = n(483);
      e()(B.Z, { insert: "head", singleton: !1 }), B.Z.locals, new v().start();
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUtELGdCQUdsQixFQWxLQSxHQW9LQSxVLFlDdkthLElBQUksSUFMSCxDQUVkLE9BQWlCLE9BQ2pCLFdBQW9CLElBTUwsVyxhQ0pGLElBQUksSUFMSCxDQUVkLE9BQWlCLE9BQ2pCLFdBQW9CLElBTUwsWUNSSCxJQUFJLEdBQ1p3QyxTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L2NhcmQvY2FyZC5zY3NzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXJ0L2NhcnQuc2NzcyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9jb21wb25lbnRzL3ZpZXcvZmF2b3JpdGVzL2Zhdm9yaXRlcy5zY3NzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9wb3B1cC9wb3B1cC5zY3NzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zZWFyY2gvc2VhcmNoLnNjc3MiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L3NsaWRlci9zbGlkZXIuc2NzcyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9zY3NzL2dsb2JhbC5zY3NzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL3Njc3Mvbm9ybWFsaXplLnNjc3MiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9mYXZvcml0ZXMvZmF2b3JpdGVzLnNjc3M/NWNkYyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9waWN0dXJlcy1saXN0LnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9mYXZvcml0ZXMvZmF2b3JpdGVzLnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9maWx0ZXIvZmlsdGVyLnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9wb3B1cC9wb3B1cC5zY3NzP2Y5ZWMiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L3BvcHVwL3BvcHVwLnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zb3J0L3NvcnQudHMiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L2NhcmQvY2FyZC5zY3NzP2E2NTkiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L2NhcmQvY2FyZC50cyIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc2VhcmNoL3NlYXJjaC5zY3NzPzQ0MjYiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L3NlYXJjaC9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy92aWV3L3NsaWRlci9zbGlkZXIuc2Nzcz9lOWZjIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zbGlkZXIvc2xpZGVyLnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXJ0L2NhcnQuc2Nzcz9lNDU5Iiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXJ0L2NhcnQudHMiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLnRzIiwid2VicGFjazovL0NocmlzdG1hcyB0YXNrLy4vc3JjL3Njc3Mvbm9ybWFsaXplLnNjc3M/MjIyYiIsIndlYnBhY2s6Ly9DaHJpc3RtYXMgdGFzay8uL3NyYy9zY3NzL2dsb2JhbC5zY3NzPzg4MDQiLCJ3ZWJwYWNrOi8vQ2hyaXN0bWFzIHRhc2svLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NaW5nemF0JmZhbWlseT1SYWxld2F5OndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucHJvZHVjdHN7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2ZsZXgtd3JhcDp3cmFwO21hcmdpbi10b3A6MTBweDtwYWRkaW5nOjAgMiU7dHJhbnNpdGlvbjouM3N9LmNhcmRfX2l0ZW17ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6MTBweDthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luLWJvdHRvbTo1JTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cGFkZGluZzoyJTtib3gtc2hhZG93OnJnYmEoMCwwLDAsLjE1KSAyLjRweCAyLjRweCAzLjJweDtib3JkZXItcmFkaXVzOjFyZW07bWluLXdpZHRoOjIxMHB4fUBtZWRpYShtYXgtd2lkdGg6IDkyMHB4KXsuY2FyZF9faXRlbXttaW4td2lkdGg6Mjc1cHh9fUBtZWRpYShtYXgtd2lkdGg6IDg1MHB4KXsuY2FyZF9faXRlbXttaW4td2lkdGg6MjYwcHh9fUBtZWRpYShtYXgtd2lkdGg6IDgyMHB4KXsuY2FyZF9faXRlbXtmbGV4LWRpcmVjdGlvbjpyb3c7d2lkdGg6ODAlO21hcmdpbjowIGF1dG8gNSV9fUBtZWRpYShtYXgtd2lkdGg6IDUyMHB4KXsuY2FyZF9faXRlbXt3aWR0aDo5NSV9fS5jYXJkX19pdGVtLWRlc2NyaXB0aW9ue2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMHB4fS5jYXJkX19pdGVtLWRlc2NyaXB0aW9uIHB7bWFyZ2luOjA7dGV4dC1hbGlnbjpjZW50ZXJ9QG1lZGlhKG1heC13aWR0aDogNjUwcHgpey5jYXJkX19pdGVtLWRlc2NyaXB0aW9ue3dpZHRoOjgwJTttYXJnaW46MCBhdXRvIDUlfX0uY2FyZF9faXRlbS10aXRsZXtjb2xvcjojMGIyNTQ1O2ZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6MS41cmVtO2ZvbnQtZmFtaWx5OlxcXCJSYWxld2F5XFxcIixzYW5zLXNlcmlmfS5jYXJkX19pdGVtLXByaWNle2ZvbnQtd2VpZ2h0OjcwMH0uY2FyZF9faXRlbS1wcmljZV9zYWxle3RleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7Zm9udC13ZWlnaHQ6NDAwfS5jYXJkX19pdGVtX3NhbGUtcHJpY2V7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiM3ODAwMDA7Zm9udC1zaXplOmxhcmdlcjttYXJnaW4tbGVmdDo1cHh9LmNhcmRfX2l0ZW1fc2FsZS1wZXJjZW50e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JhY2tncm91bmQtY29sb3I6I2ZjYTMxMTtjb2xvcjojZmZmO2xldHRlci1zcGFjaW5nOjFweDtmb250LXNpemU6c21hbGxlcjtib3JkZXItcmFkaXVzOjVweDtwYWRkaW5nOjNweDttYXJnaW4tbGVmdDo1cHh9LmNhcmRfX2l0ZW0taW1ne21heC13aWR0aDoxNXZ3O3RyYW5zaXRpb246LjNzfS5jYXJkX19pdGVtLWJ0bi0tY2FydCwuY2FyZF9faXRlbS1idG4tLW1vcmUsLmNhcmRfX2l0ZW0tYnRuLS1yZW1vdmV7YmFja2dyb3VuZC1jb2xvcjojOGRhOWM0fS5jYXJkX19pdGVtLWJ0bi0tY2FydDpob3ZlciwuY2FyZF9faXRlbS1idG4tLW1vcmU6aG92ZXIsLmNhcmRfX2l0ZW0tYnRuLS1yZW1vdmU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNmI5MGIzfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY2FyZC9jYXJkLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0EsVUFDSSxZQUFBLENBQ0Esa0JBQUEsQ0FDQSw2QkFBQSxDQUNBLHNCQUFBLENBQ0EsY0FBQSxDQUNBLGVBQUEsQ0FDQSxZQUFBLENBQ0EsY0FBQSxDQUdKLFlBQ0ksWUFBQSxDQUNBLHFCQUFBLENBQ0EsUUFBQSxDQUNBLGtCQUFBLENBQ0EsZ0JBQUEsQ0FDQSxxQkFBQSxDQUNBLFVBQUEsQ0FDQSw0Q0FBQSxDQUNBLGtCQUFBLENBQ0EsZUFBQSxDQUVBLHlCQVpKLFlBYVEsZUFBQSxDQUFBLENBR0oseUJBaEJKLFlBaUJRLGVBQUEsQ0FBQSxDQUdKLHlCQXBCSixZQXFCUSxrQkFBQSxDQUNBLFNBQUEsQ0FDQSxnQkFBQSxDQUFBLENBR0oseUJBMUJKLFlBMkJRLFNBQUEsQ0FBQSxDQUlSLHdCQUNJLFlBQUEsQ0FDQSxxQkFBQSxDQUNBLGtCQUFBLENBQ0EsUUFBQSxDQUVBLDBCQUNJLFFBQUEsQ0FDQSxpQkFBQSxDQUdKLHlCQVhKLHdCQVlRLFNBQUEsQ0FDQSxnQkFBQSxDQUFBLENBSVIsa0JBQ0ksYUFBQSxDQUNBLGVBQUEsQ0FDQSxnQkFBQSxDQUNBLGdDQUFBLENBR0osa0JBQ0ksZUFBQSxDQUdKLHVCQUNJLDRCQUFBLENBQ0EsZUFBQSxDQUdKLHVCQUNJLGVBQUEsQ0FDQSxhQUFBLENBQ0EsZ0JBQUEsQ0FDQSxlQUFBLENBR0oseUJBQ0ksb0JBQUEsQ0FDQSx3QkFBQSxDQUNBLFVBQUEsQ0FDQSxrQkFBQSxDQUNBLGlCQUFBLENBQ0EsaUJBQUEsQ0FDQSxXQUFBLENBQ0EsZUFBQSxDQUdKLGdCQUNJLGNBQUEsQ0FDQSxjQUFBLENBR0osb0VBR0ksd0JBQUEsQ0FFQSxzRkFDSSx3QkFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NaW5nemF0JmZhbWlseT1SYWxld2F5OndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5cXHJcXG4ucHJvZHVjdHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMiU7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMiU7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMi40cHggMi40cHggMy4ycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIG1pbi13aWR0aDogMjEwcHg7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xcclxcbiAgICAgICAgbWluLXdpZHRoOiAyNzVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogMjYwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDUlO1xcclxcbiAgICB9XFxyXFxuICAgICAgICBcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XFxyXFxuICAgICAgICB3aWR0aDogOTUlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19pdGVtLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcblxcclxcbiAgICBwIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0byA1JTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9faXRlbS10aXRsZSB7XFxyXFxuICAgIGNvbG9yOiAjMGIyNTQ1O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2l0ZW0tcHJpY2Uge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9faXRlbS1wcmljZV9zYWxlIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19pdGVtX3NhbGUtcHJpY2Uge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBjb2xvcjogIzc4MDAwMDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19pdGVtX3NhbGUtcGVyY2VudCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjYTMxMTtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBwYWRkaW5nOiAzcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19pdGVtLWltZyB7XFxyXFxuICAgIG1heC13aWR0aDogMTV2dztcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2l0ZW0tYnRuLS1jYXJ0LFxcclxcbi5jYXJkX19pdGVtLWJ0bi0tbW9yZSxcXHJcXG4uY2FyZF9faXRlbS1idG4tLXJlbW92ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZGE5YzQ7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvcjogIzhkYTljNCwgJGFtb3VudDogMTAlKTtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY2FydCBzcGFue2xldHRlci1zcGFjaW5nOm5vcm1hbH0uY2FydC13YXJuaW5ne3Bvc2l0aW9uOmZpeGVkO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JhY2tncm91bmQ6cmdiYSg0MSw0MSw0MSwuNik7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5jYXJ0LXdhcm5pbmdfX2NvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7cGFkZGluZzozJTtib3JkZXItcmFkaXVzOjVweH0uY2FydC13YXJuaW5nX19jb250YWluZXIgLmJ0bi1jcm9zc3t0b3A6NXB4O3JpZ2h0Oi0xMHB4fS5oaWRkZW57ZGlzcGxheTpub25lfS5jYXJkX19pdGVtLWJ0bi0tcmVtb3Zle3BhZGRpbmc6NSU7Zm9udC1zaXplOnNtYWxsZXJ9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXJ0L2NhcnQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDSSxXQUNJLHFCQUFBLENBS1IsY0FDSSxjQUFBLENBQ0ksS0FBQSxDQUNBLE9BQUEsQ0FDQSxRQUFBLENBQ0EsTUFBQSxDQUNBLDRCQUFBLENBQ0EsWUFBQSxDQUNBLGtCQUFBLENBQ0Esc0JBQUEsQ0FJUix5QkFDSSxpQkFBQSxDQUNBLHFCQUFBLENBQ0EsVUFBQSxDQUNBLGlCQUFBLENBRUEsb0NBQ0ksT0FBQSxDQUNBLFdBQUEsQ0FJUixRQUNJLFlBQUEsQ0FHSix3QkFDSSxVQUFBLENBQ0EsaUJBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNhcnQge1xcclxcbiAgICBzcGFuIHtcXHJcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNhcnQtd2FybmluZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDEsIDQxLCA0MSwgMC42KTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jYXJ0LXdhcm5pbmdfX2NvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMyU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgLmJ0bi1jcm9zcyB7XFxyXFxuICAgICAgICB0b3A6IDVweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAtMTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2l0ZW0tYnRuLS1yZW1vdmUge1xcclxcbiAgICBwYWRkaW5nOiA1JTtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZmF2LWJ0bntiYWNrZ3JvdW5kOm5vbmU7Ym9yZGVyOm5vbmU7d2lkdGg6MzVweH0uZmF2LWJ0bjpob3ZlcntjdXJzb3I6cG9pbnRlcjt0cmFuc2Zvcm06c2thbGUoMC43KX0uZmF2LWJ0biBpbWd7d2lkdGg6MTAwJX1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy92aWV3L2Zhdm9yaXRlcy9mYXZvcml0ZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxTQUNJLGVBQUEsQ0FDQSxXQUFBLENBQ0EsVUFBQSxDQUVBLGVBQ0ksY0FBQSxDQUNBLG9CQUFBLENBR0osYUFDSSxVQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mYXYtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBza2FsZSgwLjcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGltZ3tcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9zdmcvcmVtb3ZlLnN2Z1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wb3B1cF9faXRlbXtwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOnJnYmEoNDEsNDEsNDEsLjYpO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ucG9wdXBfX2l0ZW0tY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2JhY2tncm91bmQtY29sb3I6I2ZmZjtwYWRkaW5nOjIlfUBtZWRpYShtYXgtd2lkdGg6IDc1MHB4KXsucG9wdXBfX2l0ZW0tY29udGFpbmVye2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXgtaGVpZ2h0OjEwMHZofX0ucG9wdXBfX2l0ZW0taW1ne21heC13aWR0aDo1MCV9QG1lZGlhKG1heC13aWR0aDogNzUwcHgpey5wb3B1cF9faXRlbS1pbWd7bWF4LXdpZHRoOjgwJX19LnBvcHVwX19pdGVtLWRlc2NyaXB0aW9ue3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQtY29sb3I6I2ZmZjt3aWR0aDozMCU7cGFkZGluZzoyJX1AbWVkaWEobWF4LXdpZHRoOiA3NTBweCl7LnBvcHVwX19pdGVtLWRlc2NyaXB0aW9ue3dpZHRoOjkwJX19LnBvcHVwX19pdGVtLWJ0bi0tY2FydHttYXgtd2lkdGg6bWF4LWNvbnRlbnQ7bWF4LWhlaWdodDptYXgtY29udGVudH0ucG9wdXBfX2l0ZW0tdGl0bGV7Zm9udC1zaXplOjJyZW19LnBvcHVwX19pdGVtLWhlYWRlcntmb250LXdlaWdodDo3MDB9LnBvcHVwX19pdGVtLWhlYWRlciBzcGFue2ZvbnQtd2VpZ2h0OjQwMH0ucG9wdXBfX2l0ZW0tcHJpY2V7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZTpsYXJnZXJ9LmJ0bi1jcm9zc3thbGlnbi1zZWxmOmZsZXgtZW5kO2JhY2tncm91bmQ6bm9uZTtiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlcjpub25lO2hlaWdodDo1MnB4O3dpZHRoOjUycHg7dG9wOjIlO3JpZ2h0OjBweDttYXJnaW46YXV0b30uYnRuLWNyb3NzOmhvdmVye2N1cnNvcjpwb2ludGVyfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3ZpZXcvcG9wdXAvcG9wdXAuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxhQUNJLGNBQUEsQ0FDQSxLQUFBLENBQ0EsT0FBQSxDQUNBLFFBQUEsQ0FDQSxNQUFBLENBQ0EsNEJBQUEsQ0FDQSxZQUFBLENBQ0Esa0JBQUEsQ0FDQSxzQkFBQSxDQUdKLHVCQUNJLFlBQUEsQ0FDQSxrQkFBQSxDQUNBLGtCQUFBLENBQ0EsNkJBQUEsQ0FDQSxxQkFBQSxDQUNBLFVBQUEsQ0FFQSx5QkFSSix1QkFTVyxxQkFBQSxDQUNBLGdCQUFBLENBQUEsQ0FJWCxpQkFDSSxhQUFBLENBQ0EseUJBRkosaUJBR1EsYUFBQSxDQUFBLENBR1IseUJBQ0ksaUJBQUEsQ0FDQSxxQkFBQSxDQUNBLFNBQUEsQ0FDQSxVQUFBLENBRUEseUJBTkoseUJBT1EsU0FBQSxDQUFBLENBSVIsdUJBQ0kscUJBQUEsQ0FDQSxzQkFBQSxDQUdKLG1CQUNJLGNBQUEsQ0FHSixvQkFDSSxlQUFBLENBRUEseUJBQ0ksZUFBQSxDQUlSLG1CQUNJLGVBQUEsQ0FDQSxnQkFBQSxDQUdKLFdBQ0ksbUJBQUEsQ0FDQSxlQUFBLENBQ0Esd0RBQUEsQ0FDQSwyQkFBQSxDQUNBLGlCQUFBLENBQ0EsV0FBQSxDQUNBLFdBQUEsQ0FDQSxVQUFBLENBQ0EsTUFBQSxDQUNBLFNBQUEsQ0FDQSxXQUFBLENBRUEsaUJBQ0ksY0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucG9wdXBfX2l0ZW0ge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSg0MSwgNDEsIDQxLCAwLjYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19pdGVtLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMiU7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcclxcbiAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAgICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2l0ZW0taW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLnBvcHVwX19pdGVtLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBwYWRkaW5nOiAyJTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbn1cXHJcXG4ucG9wdXBfX2l0ZW0tYnRuLS1jYXJ0IHtcXHJcXG4gICAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gICAgbWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9faXRlbS10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19pdGVtLWhlYWRlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2l0ZW0tcHJpY2Uge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jcm9zcyB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uLy4uLy4uL2Fzc2V0cy9zdmcvcmVtb3ZlLnN2Z1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiA1MnB4O1xcclxcbiAgICB3aWR0aDogNTJweDtcXHJcXG4gICAgdG9wOiAyJTtcXHJcXG4gICAgcmlnaHQ6IDBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2VhcmNoe2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6bm93cmFwO2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6MTBweDttaW4td2lkdGg6MzAwcHg7cGFkZGluZzo1cHg7Ym9yZGVyOjFweCBzb2xpZCAjMDAwO2JvcmRlci1yYWRpdXM6MTBweH1AbWVkaWEobWF4LXdpZHRoOiA3NTBweCl7LnNlYXJjaHttaW4td2lkdGg6MjUwcHh9fS5zZWFyY2ggaW1ne21heC13aWR0aDoyNHB4fS5zZWFyY2gtaW5wdXR7Ym9yZGVyOm5vbmU7cGFkZGluZzo1cHh9QG1lZGlhKG1heC13aWR0aDogNzUwcHgpey5zZWFyY2gtaW5wdXR7bWF4LXdpZHRoOjE3MHB4fX0uc2VhcmNoLWlucHV0OmZvY3Vze291dGxpbmU6bm9uZX0uc2VhcmNoLXJlbW92ZTpob3ZlcntjdXJzb3I6cG9pbnRlcn0uZXJyb3J7bWFyZ2luLXRvcDoyJTt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDoycmVtO2ZvbnQtc2l6ZToycmVtfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc2VhcmNoL3NlYXJjaC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFFBQ0ksWUFBQSxDQUNBLGdCQUFBLENBQ0Esa0JBQUEsQ0FDQSxRQUFBLENBQ0EsZUFBQSxDQUNBLFdBQUEsQ0FDQSxxQkFBQSxDQUNBLGtCQUFBLENBRUEseUJBVkosUUFXUSxlQUFBLENBQUEsQ0FHSixZQUNJLGNBQUEsQ0FLUixjQUNJLFdBQUEsQ0FDQSxXQUFBLENBRUEseUJBSkosY0FLWSxlQUFBLENBQUEsQ0FHUixvQkFDSSxZQUFBLENBS0oscUJBQ0ksY0FBQSxDQUlSLE9BQ0ksYUFBQSxDQUNBLGlCQUFBLENBQ0EsZ0JBQUEsQ0FDQSxjQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZWFyY2gge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogMjUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMjRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWlucHV0IHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMTcwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICY6Zm9jdXMge1xcclxcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlbW92ZSB7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5lcnJvciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zbGlkZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwb3NpdGlvbjpyZWxhdGl2ZX0uc2xpZGVyIHB7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLXNlbGY6c3RyZXRjaH1pbnB1dFt0eXBlPXJhbmdlXXstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7aGVpZ2h0OjJweDt3aWR0aDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQtY29sb3I6I2M2YzZjNjtwb2ludGVyLWV2ZW50czpub25lfWlucHV0W3R5cGU9cmFuZ2VdOmhvdmVye2N1cnNvcjpwb2ludGVyfWlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYntwb2ludGVyLWV2ZW50czphbGw7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNoYWRvdzowIDAgMCAxcHggI2M2YzZjNjtjdXJzb3I6cG9pbnRlcn1pbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10aHVtYntwb2ludGVyLWV2ZW50czphbGw7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNoYWRvdzowIDAgMCAxcHggI2M2YzZjNjtjdXJzb3I6cG9pbnRlcn1pbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRodW1ie3BvaW50ZXItZXZlbnRzOmFsbDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjUwJTtib3gtc2hhZG93OjAgMCAwIDFweCAjYzZjNmM2O2N1cnNvcjpwb2ludGVyfWlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYjpob3ZlcntiYWNrZ3JvdW5kOiNmN2Y3Zjd9aW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iOmFjdGl2ZXtib3gtc2hhZG93Omluc2V0IDAgMCAzcHggIzM4N2JiZSwwIDAgOXB4ICMzODdiYmU7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMCAzcHggIzM4N2JiZSwwIDAgOXB4ICMzODdiYmV9LnNsaWRlcl9faW5wdXQtZmlyc3R7aGVpZ2h0OjA7ei1pbmRleDoxfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc2xpZGVyL3NsaWRlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFFBQ0ksWUFBQSxDQUNBLHFCQUFBLENBRUEsaUJBQUEsQ0FHQSxVQUNJLFlBQUEsQ0FDQSw2QkFBQSxDQUNBLGtCQUFBLENBSVIsa0JBS0ksdUJBQUEsQ0FDSSxlQUFBLENBQ0EsVUFBQSxDQUNBLFVBQUEsQ0FDQSxpQkFBQSxDQUNBLHdCQUFBLENBQ0EsbUJBQUEsQ0FFSix3QkFDSSxjQUFBLENBU1Isd0NBQ0ksa0JBQUEsQ0FDQSx1QkFBQSxDQUNBLFVBQUEsQ0FDSSxXQUFBLENBQ0EscUJBQUEsQ0FDQSxpQkFBQSxDQUNBLDRCQUFBLENBQ0EsY0FBQSxDQUdSLG9DQUNJLGtCQUFBLENBQ0EsdUJBQUEsQ0FDQSxVQUFBLENBQ0ksV0FBQSxDQUNBLHFCQUFBLENBQ0EsaUJBQUEsQ0FDQSw0QkFBQSxDQUNBLGNBQUEsQ0FHUiw2QkFDSSxrQkFBQSxDQUNBLHVCQUFBLENBQ0EsVUFBQSxDQUNJLFdBQUEsQ0FDQSxxQkFBQSxDQUNBLGlCQUFBLENBQ0EsNEJBQUEsQ0FDQSxjQUFBLENBR1IsOENBQ0ksa0JBQUEsQ0FHSiwrQ0FDSSxnREFBQSxDQUNBLHdEQUFBLENBR0oscUJBRVksUUFBQSxDQUNBLFNBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNsaWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLy8gcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIFxcclxcbiAgICBwIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl0ge1xcclxcbiAgICAvLyBoZWlnaHQ6IDJlbTtcXHJcXG4gICAgLy8gZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIC8vIG1hcmdpbjogMDtcXHJcXG5cXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICAgIGhlaWdodDogMnB4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzZDNkM2O1xcclxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8vIC5wcmljZS1zbGlkZXJfX2NvbnRhaW5lciAuc2xpZGVyX19pbnB1dC1zZWNvbmQsXFxyXFxuLy8gLnllYXItc2xpZGVyX19jb250YWluZXIgLnNsaWRlcl9faW5wdXQtc2Vjb25kIHtcXHJcXG4vLyAgICAgbWFyZ2luLXRvcDogLTJlbTtcXHJcXG4vLyB9XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjQzZDNkM2O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI0M2QzZDNjtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTo6LW1zLXRodW1iIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI0M2QzZDNjtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iOmFjdGl2ZSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggIzM4N2JiZSwgMCAwIDlweCAjMzg3YmJlO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggIzM4N2JiZSwgMCAwIDlweCAjMzg3YmJlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyX19pbnB1dC1maXJzdCBcXHJcXG4gICAge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMDtcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xcclxcbiAgICAgICAgfVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1pbmd6YXQmZmFtaWx5PVJhbGV3YXk6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7Ym94LXNpemluZzpib3JkZXItYm94O2xpbmUtaGVpZ2h0OjEuNXJlbX1ib2R5e2ZvbnQtZmFtaWx5OlxcXCJNaW5nemF0XFxcIixzYW5zLXNlcmlmO2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfWhlYWRlcntkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojMTMzMTVjO3dpZHRoOjkwJTttYXJnaW46MCBhdXRvIDUlO3BhZGRpbmc6MiU7bGV0dGVyLXNwYWNpbmc6NHB4O2JveC1zaGFkb3c6cmdiYSgxMSwzOCw3MCwuNCkgMHB4IDVweCxyZ2JhKDE5LDQ5LDkyLC4zKSAwcHggMTBweCxyZ2JhKDE5LDY0LDExNiwuMikgMHB4IDE1cHgscmdiYSgxNDEsMTY5LDE5NiwuMykgMHB4IDIwcHgscmdiYSgxNDEsMTY5LDE5NiwuMSkgMHB4IDI1cHh9QG1lZGlhKG1heC13aWR0aDogNjIwcHgpe2hlYWRlcntmbGV4LWRpcmVjdGlvbjpjb2x1bW59fWhlYWRlciAubG9nb3tkaXNwbGF5OmZsZXg7Z2FwOjIwcHg7YWxpZ24taXRlbXM6Y2VudGVyO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX1oZWFkZXIgLmxvZ28gaW1ne21heC1oZWlnaHQ6MTAwcHh9QG1lZGlhKG1heC13aWR0aDogNzUwcHgpe2hlYWRlciAubG9nbyBpbWd7bWF4LWhlaWdodDo4MHB4fX1oZWFkZXIgLmxvZ28gaDF7bGluZS1oZWlnaHQ6Mi41cmVtO21heC13aWR0aDpmaXQtY29udGVudH1AbWVkaWEobWF4LXdpZHRoOiA5MDBweCl7aGVhZGVyIC5sb2dvIGgxe2ZvbnQtc2l6ZToxLjVyZW07bGluZS1oZWlnaHQ6MnJlbX19QG1lZGlhKG1heC13aWR0aDogNzUwcHgpe2hlYWRlciAubG9nbyBoMXttYXgtd2lkdGg6Zml0LWNvbnRlbnR9fS5jYXJ0IGltZ3t3aWR0aDozNXB4fWFzaWRle2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6MjAlO2p1c3RpZnktc2VsZjpmbGV4LXN0YXJ0fWFzaWRlIC5idG57bWFyZ2luLWJvdHRvbToxMHB4fUBtZWRpYShtYXgtd2lkdGg6IDgyMHB4KXthc2lkZXt3aWR0aDozMCV9fUBtZWRpYShtYXgtd2lkdGg6IDUyMHB4KXthc2lkZXtmbGV4LWRpcmVjdGlvbjpyb3c7d2lkdGg6OTAlfX0uYnRue2JvcmRlci1yYWRpdXM6LjVyZW07cGFkZGluZzo1JSAxMCU7d2lkdGg6bWF4LWNvbnRlbnQ7Y29sb3I6I2VlZjRlZDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Ym9yZGVyOm5vbmU7Ym94LXNoYWRvdzpyZ2JhKDAsMCwwLC4xKSAwcHggMHB4IDVweCAwcHgscmdiYSgwLDAsMCwuMSkgMHB4IDBweCAxcHggMHB4O3RyYW5zaXRpb246LjNzfS5idG46aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9LmJ0bjphY3RpdmV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNHB4KX0uYXNpZGUtYnV0dG9ue2JhY2tncm91bmQtY29sb3I6IzAwMzA0OX0uYXNpZGUtYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzAwMGUxNn0uZmlsdGVyLWxhYmVse21hcmdpbi10b3A6NSU7Zm9udC1zaXplOjEuMnJlbX1tYWlue2Rpc3BsYXk6ZmxleDttaW4taGVpZ2h0OjY4dmg7d2lkdGg6NzAlfUBtZWRpYShtYXgtd2lkdGg6IDgyMHB4KXttYWlue3dpZHRoOjYwJX19QG1lZGlhKG1heC13aWR0aDogNTIwcHgpe21haW57d2lkdGg6OTAlfX1mb290ZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtnYXA6NXB4O2ZsZXgtd3JhcDp3cmFwO3dpZHRoOjkwJTtoZWlnaHQ6MTAwcHg7bWFyZ2luOjAgYXV0bztmb250LXNpemU6MXJlbTtiYWNrZ3JvdW5kLWNvbG9yOiMxMzMxNWM7Y29sb3I6I2U1ZTVlNTtwYWRkaW5nOjElfWZvb3RlciBhe3RleHQtZGVjb3JhdGlvbjpub25lO2ZvbnQtc2l6ZToxLjJyZW07Y29sb3I6I2U1ZTVlNX1AbWVkaWEobWF4LXdpZHRoOiA2NTBweCl7Zm9vdGVye2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfX1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxFQUNJLHFCQUFBLENBQ0Esa0JBQUEsQ0FHSixLQUNJLGdDQUFBLENBQ0EsWUFBQSxDQUNBLGNBQUEsQ0FDQSxzQkFBQSxDQUlKLE9BQ0ksWUFBQSxDQUNBLDZCQUFBLENBQ0Esa0JBQUEsQ0FDQSxxQkFBQSxDQUNBLGFBQUEsQ0FDQSxTQUFBLENBQ0EsZ0JBQUEsQ0FDQSxVQUFBLENBQ0Esa0JBQUEsQ0FDQSx1SkFBQSxDQUVBLHlCQVpKLE9BYVEscUJBQUEsQ0FBQSxDQUdKLGFBQ0ksWUFBQSxDQUNBLFFBQUEsQ0FDQSxrQkFBQSxDQUNBLHdCQUFBLENBRUEsaUJBQ0ksZ0JBQUEsQ0FFQSx5QkFISixpQkFJUSxlQUFBLENBQUEsQ0FJUixnQkFDSSxrQkFBQSxDQUNBLHFCQUFBLENBRUEseUJBSkosZ0JBS1EsZ0JBQUEsQ0FDQSxnQkFBQSxDQUFBLENBR0oseUJBVEosZ0JBVVEscUJBQUEsQ0FBQSxDQVFoQixVQUNJLFVBQUEsQ0FHSixNQUNJLFlBQUEsQ0FDQSxxQkFBQSxDQUNBLFNBQUEsQ0FDQSx1QkFBQSxDQUVBLFdBQ0ksa0JBQUEsQ0FHSix5QkFWSixNQVdRLFNBQUEsQ0FBQSxDQUdKLHlCQWRKLE1BZVEsa0JBQUEsQ0FDQSxTQUFBLENBQUEsQ0FJUixLQUNJLG1CQUFBLENBQ0EsY0FBQSxDQUNBLGlCQUFBLENBQ0EsYUFBQSxDQUNBLHdCQUFBLENBQ0EsV0FBQSxDQUNBLHdFQUFBLENBQ0EsY0FBQSxDQUVBLFdBQ0ksY0FBQSxDQUdKLFlBQ0kseUJBQUEsQ0FLUixjQUNJLHdCQUFBLENBRUEsb0JBQ0ksd0JBQUEsQ0FJUixjQUNJLGFBQUEsQ0FDQSxnQkFBQSxDQUdKLEtBQ0ksWUFBQSxDQUNBLGVBQUEsQ0FDQSxTQUFBLENBRUkseUJBTFIsS0FNWSxTQUFBLENBQUEsQ0FHSix5QkFUUixLQVdZLFNBQUEsQ0FBQSxDQU1aLE9BQ0ksWUFBQSxDQUNBLGtCQUFBLENBQ0EsNkJBQUEsQ0FDQSxPQUFBLENBQ0EsY0FBQSxDQUNBLFNBQUEsQ0FDQSxZQUFBLENBQ0EsYUFBQSxDQUNBLGNBQUEsQ0FDQSx3QkFBQSxDQUNBLGFBQUEsQ0FDQSxVQUFBLENBRUEsU0FDSSxvQkFBQSxDQUNBLGdCQUFBLENBQ0EsYUFBQSxDQUdKLHlCQXBCSixPQXFCUSxxQkFBQSxDQUNBLHNCQUFBLENBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWluZ3phdCZmYW1pbHk9UmFsZXdheTp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ01pbmd6YXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogIzEzMzE1YztcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG8gNSU7XFxyXFxuICAgIHBhZGRpbmc6IDIlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDExLCAzOCwgNzAsIDAuNCkgMHB4IDVweCwgcmdiYSgxOSwgNDksIDkyLCAwLjMpIDBweCAxMHB4LCByZ2JhKDE5LCA2NCwgMTE2LCAwLjIpIDBweCAxNXB4LCByZ2JhKDE0MSwgMTY5LCAxOTYsMC4zKSAwcHggMjBweCwgcmdiYSgxNDEsIDE2OSwgMTk2LCAwLjEpIDBweCAyNXB4O1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjIwcHgpIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxvZ28ge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGdhcDogMjBweDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcblxcclxcbiAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogODBweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcclxcblxcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcclxcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jYXJ0IGltZyB7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5hc2lkZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXHJcXG5cXHJcXG4gICAgLmJ0biB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xcclxcbiAgICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDUlIDEwJTtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBjb2xvcjogI2VlZjRlZDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDBweCA1cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDBweCAxcHggMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uYXNpZGUtYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzA0OTtcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yOiAjMDAzMDQ5LCAkYW1vdW50OiAxMCUpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItbGFiZWwge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1JTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA2OHZoO1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICAgICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzMxNWM7XFxyXFxuICAgIGNvbG9yOiAjZTVlNWU1O1xcclxcbiAgICBwYWRkaW5nOiAxJTtcXHJcXG5cXHJcXG4gICAgYSB7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgICAgIGNvbG9yOiNlNWU1ZTUgO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9odG1se2xpbmUtaGVpZ2h0OjEuMTU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCV9Ym9keXttYXJnaW46MH1tYWlue2Rpc3BsYXk6YmxvY2t9aDF7Zm9udC1zaXplOjJlbTttYXJnaW46LjY3ZW0gMH1ocntib3gtc2l6aW5nOmNvbnRlbnQtYm94O2hlaWdodDowO292ZXJmbG93OnZpc2libGV9cHJle2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSxtb25vc3BhY2U7Zm9udC1zaXplOjFlbX1he2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwKX1hYmJyW3RpdGxlXXtib3JkZXItYm90dG9tOm5vbmU7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZH1iLHN0cm9uZ3tmb250LXdlaWdodDpib2xkZXJ9Y29kZSxrYmQsc2FtcHtmb250LWZhbWlseTptb25vc3BhY2UsbW9ub3NwYWNlO2ZvbnQtc2l6ZToxZW19c21hbGx7Zm9udC1zaXplOjgwJX1zdWIsc3Vwe2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1zdWJ7Ym90dG9tOi0wLjI1ZW19c3Vwe3RvcDotMC41ZW19aW1ne2JvcmRlci1zdHlsZTpub25lfWJ1dHRvbixpbnB1dCxvcHRncm91cCxzZWxlY3QsdGV4dGFyZWF7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MTAwJTtsaW5lLWhlaWdodDoxLjE1O21hcmdpbjowfWJ1dHRvbixpbnB1dHtvdmVyZmxvdzp2aXNpYmxlfWJ1dHRvbixzZWxlY3R7dGV4dC10cmFuc2Zvcm06bm9uZX1idXR0b24sW3R5cGU9YnV0dG9uXSxbdHlwZT1yZXNldF0sW3R5cGU9c3VibWl0XXstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVye2JvcmRlci1zdHlsZTpub25lO3BhZGRpbmc6MH1idXR0b246LW1vei1mb2N1c3JpbmcsW3R5cGU9YnV0dG9uXTotbW96LWZvY3VzcmluZyxbdHlwZT1yZXNldF06LW1vei1mb2N1c3JpbmcsW3R5cGU9c3VibWl0XTotbW96LWZvY3VzcmluZ3tvdXRsaW5lOjFweCBkb3R0ZWQgQnV0dG9uVGV4dH1maWVsZHNldHtwYWRkaW5nOi4zNWVtIC43NWVtIC42MjVlbX1sZWdlbmR7Ym94LXNpemluZzpib3JkZXItYm94O2NvbG9yOmluaGVyaXQ7ZGlzcGxheTp0YWJsZTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOjA7d2hpdGUtc3BhY2U6bm9ybWFsfXByb2dyZXNze3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfXRleHRhcmVhe292ZXJmbG93OmF1dG99W3R5cGU9Y2hlY2tib3hdLFt0eXBlPXJhZGlvXXtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowfVt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntoZWlnaHQ6YXV0b31bdHlwZT1zZWFyY2hdey13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7b3V0bGluZS1vZmZzZXQ6LTJweH1bdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lfTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbjtmb250OmluaGVyaXR9ZGV0YWlsc3tkaXNwbGF5OmJsb2NrfXN1bW1hcnl7ZGlzcGxheTpsaXN0LWl0ZW19dGVtcGxhdGV7ZGlzcGxheTpub25lfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9ub3JtYWxpemUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBQSxDQVVBLEtBQ0ksZ0JBQUEsQ0FFQSw2QkFBQSxDQVdKLEtBQ0ksUUFBQSxDQU9KLEtBQ0ksYUFBQSxDQVFKLEdBQ0ksYUFBQSxDQUNBLGNBQUEsQ0FXSixHQUNJLHNCQUFBLENBRUEsUUFBQSxDQUVBLGdCQUFBLENBU0osSUFDSSwrQkFBQSxDQUVBLGFBQUEsQ0FXSixFQUNJLDhCQUFBLENBUUosWUFDSSxrQkFBQSxDQUVBLHlCQUFBLENBRUEsZ0NBQUEsQ0FRSixTQUVJLGtCQUFBLENBUUosY0FHSSwrQkFBQSxDQUVBLGFBQUEsQ0FRSixNQUNJLGFBQUEsQ0FRSixRQUVJLGFBQUEsQ0FDQSxhQUFBLENBQ0EsaUJBQUEsQ0FDQSx1QkFBQSxDQUdKLElBQ0ksY0FBQSxDQUdKLElBQ0ksVUFBQSxDQVVKLElBQ0ksaUJBQUEsQ0FXSixzQ0FLSSxtQkFBQSxDQUVBLGNBQUEsQ0FFQSxnQkFBQSxDQUVBLFFBQUEsQ0FTSixhQUdJLGdCQUFBLENBUUosY0FHSSxtQkFBQSxDQU9KLGdEQUlJLHlCQUFBLENBT0osd0hBSUksaUJBQUEsQ0FDQSxTQUFBLENBT0osNEdBSUksNkJBQUEsQ0FPSixTQUNJLDBCQUFBLENBVUosT0FDSSxxQkFBQSxDQUVBLGFBQUEsQ0FFQSxhQUFBLENBRUEsY0FBQSxDQUVBLFNBQUEsQ0FFQSxrQkFBQSxDQVFKLFNBQ0ksdUJBQUEsQ0FPSixTQUNJLGFBQUEsQ0FRSiw2QkFFSSxxQkFBQSxDQUVBLFNBQUEsQ0FRSixrRkFFSSxXQUFBLENBUUosY0FDSSw0QkFBQSxDQUVBLG1CQUFBLENBUUoseUNBQ0ksdUJBQUEsQ0FRSiw2QkFDSSx5QkFBQSxDQUVBLFlBQUEsQ0FXSixRQUNJLGFBQUEsQ0FPSixRQUNJLGlCQUFBLENBVUosU0FDSSxZQUFBLENBT0osU0FDSSxZQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXHJcXG5cXHJcXG4vKiBEb2N1bWVudFxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcclxcbiAqL1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogU2VjdGlvbnNcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXHJcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxyXFxufVxcclxcblxcclxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxyXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxyXFxuICovXFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxucHJlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcclxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuYWJiclt0aXRsZV0ge1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICAvKiAyICovXFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmIsXFxyXFxuc3Ryb25nIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuY29kZSxcXHJcXG5rYmQsXFxyXFxuc2FtcCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5zbWFsbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXHJcXG4gKiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuc3ViLFxcclxcbnN1cCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcclxcbiAgICBsaW5lLWhlaWdodDogMDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbnN1YiB7XFxyXFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuc3VwIHtcXHJcXG4gICAgdG9wOiAtMC41ZW07XFxyXFxufVxcclxcblxcclxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3Jtc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5vcHRncm91cCxcXHJcXG5zZWxlY3QsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcclxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0IHtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxyXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3Qge1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxyXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxyXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxyXFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXHJcXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxyXFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgLyogMiAqL1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgLyogMyAqL1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcclxcbiAgICAvKiAxICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxyXFxuICovXFxyXFxuXFxyXFxucHJvZ3Jlc3Mge1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcclxcbiAqL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcclxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXHJcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxyXFxuICovXFxyXFxuXFxyXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcclxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxyXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcclxcbiAqL1xcclxcblxcclxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogSW50ZXJhY3RpdmVcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnN1bW1hcnkge1xcclxcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxyXFxufVxcclxcblxcclxcbi8qIE1pc2NcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXHJcXG4gKi9cXHJcXG5cXHJcXG50ZW1wbGF0ZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcclxcbiAqL1xcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZmF2b3JpdGVzLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBQaWN0dXJlIH0gZnJvbSAnLi9waWN0dXJlLmludGVmYWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBwaWN0dXJlc0xpc3Q6IFBpY3R1cmVbXSA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0JhbmFuYScsXHJcbiAgICAgICAgeWVhcjogMjAyMixcclxuICAgICAgICBwcmljZTogMTAwLFxyXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcclxuICAgICAgICBicnVzaDogJ29pbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdCYW5hbmEgcGFpbnRlZCB3aXRoIG9pbCBicnVzaCcsXHJcbiAgICAgICAgYW1vdW50OiAxLFxyXG4gICAgICAgIGNvbG9yOiAneWVsbG93JyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvYmFuYW5hLW9pbC1icnVzaC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQ2F0JyxcclxuICAgICAgICB5ZWFyOiAyMDIxLFxyXG4gICAgICAgIHByaWNlOiAxMDUsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFsaWFudHNpbmEnLFxyXG4gICAgICAgIGJydXNoOiAncGVuY2lsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0dyZXkgY2F0IHNtaWxlcyB5b3UnLFxyXG4gICAgICAgIGFtb3VudDogMTAsXHJcbiAgICAgICAgY29sb3I6ICdncmV5JyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvY2F0LXBlbmNpbC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnVHJpYW5nbGVzJyxcclxuICAgICAgICB5ZWFyOiAyMDIxLFxyXG4gICAgICAgIHByaWNlOiA3NyxcclxuICAgICAgICBhdXRob3I6ICdWYWxpYW50c2luYScsXHJcbiAgICAgICAgYnJ1c2g6ICd3YXRlcmNvbG9yJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0JsdWUgdHJpYW5nbGVzIGZpbGxlZCB3aXRoIHdhdGVyY29sb3InLFxyXG4gICAgICAgIGFtb3VudDogMyxcclxuICAgICAgICBjb2xvcjogJ2JsdWUnLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy90cmlhbmdsZXMtYmx1ZS13YXRlcmNvbG9yLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdDaHJpc3RtYXMgdHJlZScsXHJcbiAgICAgICAgeWVhcjogMjAyMyxcclxuICAgICAgICBwcmljZTogNzAsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFzaWxpc2EnLFxyXG4gICAgICAgIGJydXNoOiAnb2lsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0hvbGlkYXkgaXMgY29taW5nISBDaHJpc3RtYXMgdHJlZSBmb3IgeW91IEhPLUhPLUhPJyxcclxuICAgICAgICBhbW91bnQ6IDIsXHJcbiAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL2NocmlzdG1hcy10cmVlLW9pbC1icnVzaC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQ2xvdWQnLFxyXG4gICAgICAgIHllYXI6IDIwMjIsXHJcbiAgICAgICAgcHJpY2U6IDUwLFxyXG4gICAgICAgIHNhbGVQcmljZTogNDAsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFsaWFudHNpbmEnLFxyXG4gICAgICAgIGJydXNoOiAncGVuY2lsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgbGl0dGxlIGNsb3VkIGZvciB3YXJtIGRheXMnLFxyXG4gICAgICAgIGFtb3VudDogMTUsXHJcbiAgICAgICAgY29sb3I6ICdibHVlJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvY2xvdWQtcGVuY2lsLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Zpc2gnLFxyXG4gICAgICAgIHllYXI6IDIwMTgsXHJcbiAgICAgICAgcHJpY2U6IDEwLFxyXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcclxuICAgICAgICBicnVzaDogJ2NyYXlvbicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgYmVzdCBxdWlldCBwZXQgb3IganVzdCBjb29raWUsIGFzIHlvdSB3aXNoJyxcclxuICAgICAgICBhbW91bnQ6IDMsXHJcbiAgICAgICAgY29sb3I6ICdvcmFuZ2UnLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9maXNoLWNyYXlvbi5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnRmxvd2VyJyxcclxuICAgICAgICB5ZWFyOiAyMDE4LFxyXG4gICAgICAgIHByaWNlOiA1LFxyXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcclxuICAgICAgICBicnVzaDogJ3BlbmNpbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdZb3VyIHdpbnRlciBib3VxdWV0JyxcclxuICAgICAgICBhbW91bnQ6IDksXHJcbiAgICAgICAgY29sb3I6ICdibHVlJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvZmxvd2VyLXBlbmNpbC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnR3JhcGUnLFxyXG4gICAgICAgIHllYXI6IDIwMTksXHJcbiAgICAgICAgcHJpY2U6IDIwMCxcclxuICAgICAgICBzYWxlUHJpY2U6IDEzMCxcclxuICAgICAgICBhdXRob3I6ICdWYXNpbGlzYScsXHJcbiAgICAgICAgYnJ1c2g6ICd3YXRlcmNvbG9yJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0p1c3QgZGVsaWNpb3VzJyxcclxuICAgICAgICBhbW91bnQ6IDEsXHJcbiAgICAgICAgY29sb3I6ICdwdXJwbGUnLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9ncmFwZS13YXRlcmNvbG9yLWJydXNoLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1N0YXJzJyxcclxuICAgICAgICB5ZWFyOiAyMDE4LFxyXG4gICAgICAgIHByaWNlOiA5MCxcclxuICAgICAgICBhdXRob3I6ICdWYWxpYW50c2luYScsXHJcbiAgICAgICAgYnJ1c2g6ICdwZW5jaWwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnWWVsbG93IHN0YXJzJyxcclxuICAgICAgICBhbW91bnQ6IDMsXHJcbiAgICAgICAgY29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9zdGFycy15ZWxsb3ctcGVuY2lsLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdHcmFzcycsXHJcbiAgICAgICAgeWVhcjogMjAyMixcclxuICAgICAgICBwcmljZTogNzMsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFsaWFudHNpbmEnLFxyXG4gICAgICAgIGJydXNoOiAncGVuY2lsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1NtZWxscyBsaWtlIHN1bW1lcicsXHJcbiAgICAgICAgYW1vdW50OiA0LFxyXG4gICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9ncmFzcy1wZW5jaWwuanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0hlYXJ0JyxcclxuICAgICAgICB5ZWFyOiAyMDIwLFxyXG4gICAgICAgIHByaWNlOiA3MCxcclxuICAgICAgICBhdXRob3I6ICdWYXNpbGlzYScsXHJcbiAgICAgICAgYnJ1c2g6ICdhaXJicnVzaCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdBbGwgeW91IG5lZWQgaXMgbG92ZScsXHJcbiAgICAgICAgYW1vdW50OiA4LFxyXG4gICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvaGVhcnQtYWlyYnJ1c2guanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1BlbnRhZ29uJyxcclxuICAgICAgICB5ZWFyOiAyMDEwLFxyXG4gICAgICAgIHByaWNlOiA4MCxcclxuICAgICAgICBhdXRob3I6ICdWYWxpYW50c2luYScsXHJcbiAgICAgICAgYnJ1c2g6ICdwZW5jaWwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnR3JlZW4gcGVudGFnb24nLFxyXG4gICAgICAgIGFtb3VudDogMyxcclxuICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvcGVudGFnb24tZ3JlZW4tcGVuY2lsLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdPcmFuZ2UnLFxyXG4gICAgICAgIHllYXI6IDIwMTksXHJcbiAgICAgICAgcHJpY2U6IDQ0LFxyXG4gICAgICAgIHNhbGVQcmljZTogNDAsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFzaWxpc2EnLFxyXG4gICAgICAgIGJydXNoOiAnbWFya2VyJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ09yYW5nZSBsaWtlIG9yYW5nZScsXHJcbiAgICAgICAgYW1vdW50OiA4LFxyXG4gICAgICAgIGNvbG9yOiAnb3JhbmdlJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvb3JhbmdlLW1hcmtlci5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdQaWcnLFxyXG4gICAgICAgIHllYXI6IDIwMTYsXHJcbiAgICAgICAgcHJpY2U6IDEzLFxyXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcclxuICAgICAgICBicnVzaDogJ21hcmtlcicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdPaW5rIG9pbmsnLFxyXG4gICAgICAgIGFtb3VudDogMyxcclxuICAgICAgICBjb2xvcjogJ3Jvc2UnLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9waWctbWFya2VyLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdSYWluYm93JyxcclxuICAgICAgICB5ZWFyOiAyMDIwLFxyXG4gICAgICAgIHByaWNlOiAxODAsXHJcbiAgICAgICAgc2FsZVByaWNlOiAxMDAsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFzaWxpc2EnLFxyXG4gICAgICAgIGJydXNoOiAnY3JheW9uJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1JPWUdCSVYnLFxyXG4gICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICBjb2xvcjogJ3JhaW5ib3cnLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9yYWluYm93LWNyYXlvbi5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdTdGFyJyxcclxuICAgICAgICB5ZWFyOiAyMDIxLFxyXG4gICAgICAgIHByaWNlOiAyOSxcclxuICAgICAgICBhdXRob3I6ICdWYXNpbGlzYScsXHJcbiAgICAgICAgYnJ1c2g6ICdwZW5jaWwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2hpbmUgYnJpZ2h0JyxcclxuICAgICAgICBhbW91bnQ6IDEzLFxyXG4gICAgICAgIGNvbG9yOiAneWVsbG93JyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvc3Rhci1wZW5jaWwuanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1N1bicsXHJcbiAgICAgICAgeWVhcjogMjAxOSxcclxuICAgICAgICBwcmljZTogMzAsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFsaWFudHNpbmEnLFxyXG4gICAgICAgIGJydXNoOiAnY3JheW9uJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0ZvciByYWlueSBkYXlzJyxcclxuICAgICAgICBhbW91bnQ6IDMwLFxyXG4gICAgICAgIGNvbG9yOiAneWVsbG93JyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvc3VuLWNyYXlvbi5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnV2F0ZXJtZWxvbicsXHJcbiAgICAgICAgeWVhcjogMjAyMixcclxuICAgICAgICBwcmljZTogOTAsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFzaWxpc2EnLFxyXG4gICAgICAgIGJydXNoOiAnbWFya2VyJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJZb3UgY2FuJ3QganVzdCBzdG9wXCIsXHJcbiAgICAgICAgYW1vdW50OiAxMixcclxuICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3dhdGVybWVsb24tbWFya2VyLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdEb2cnLFxyXG4gICAgICAgIHllYXI6IDIwMTUsXHJcbiAgICAgICAgcHJpY2U6IDEwMCxcclxuICAgICAgICBzYWxlUHJpY2U6IDk1LFxyXG4gICAgICAgIGF1dGhvcjogJ1ZlcmFuaWthJyxcclxuICAgICAgICBicnVzaDogJ3dhdGVyY29sb3InLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnWW91ciBiZXN0IGZyaWVuZCcsXHJcbiAgICAgICAgYW1vdW50OiAxLFxyXG4gICAgICAgIGNvbG9yOiAnZ3JleScsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL2RvZy13YXRlcmNvbG9yLWJydXNoLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1JvY2tldCcsXHJcbiAgICAgICAgeWVhcjogMjAxNixcclxuICAgICAgICBwcmljZTogMjAwLFxyXG4gICAgICAgIHNhbGVQcmljZTogMTgwLFxyXG4gICAgICAgIGF1dGhvcjogJ1ZlcmFuaWthJyxcclxuICAgICAgICBicnVzaDogJ2JydXNoJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RvIHRoZSBtb29uJyxcclxuICAgICAgICBhbW91bnQ6IDE1LFxyXG4gICAgICAgIGNvbG9yOiAnZ3JleScsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3JvY2tldC1icnVzaC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdTYXR1cm4nLFxyXG4gICAgICAgIHllYXI6IDIwMTYsXHJcbiAgICAgICAgcHJpY2U6IDEwMCxcclxuICAgICAgICBhdXRob3I6ICdWZXJhbmlrYScsXHJcbiAgICAgICAgYnJ1c2g6ICdtYXJrZXInLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSnVzdCB0b28gZmFyIGF3YXknLFxyXG4gICAgICAgIGFtb3VudDogNSxcclxuICAgICAgICBjb2xvcjogJ2Jyb3duJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvc2F0dXJuLW1hcmtlci5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnU25haWwnLFxyXG4gICAgICAgIHllYXI6IDIwMTcsXHJcbiAgICAgICAgcHJpY2U6IDEwMixcclxuICAgICAgICBhdXRob3I6ICdWZXJhbmlrYScsXHJcbiAgICAgICAgYnJ1c2g6ICdvaWwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2xvLW8tby1vLW93JyxcclxuICAgICAgICBhbW91bnQ6IDE1LFxyXG4gICAgICAgIGNvbG9yOiAnYnJvd24nLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9zbmFpbC1vaWwtYnJ1c2guanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ092YWwnLFxyXG4gICAgICAgIHllYXI6IDIwMTAsXHJcbiAgICAgICAgcHJpY2U6IDg0LFxyXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcclxuICAgICAgICBicnVzaDogJ29pbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdSZWQgb3ZhbCcsXHJcbiAgICAgICAgYW1vdW50OiAzLFxyXG4gICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvb3ZhbC1yZWQtb2lsLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdUcmVlJyxcclxuICAgICAgICB5ZWFyOiAyMDE4LFxyXG4gICAgICAgIHByaWNlOiA1MixcclxuICAgICAgICBhdXRob3I6ICdWZXJhbmlrYScsXHJcbiAgICAgICAgYnJ1c2g6ICdjcmF5b24nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUGVyZmVjdCBzaGFkb3cgYW5kIGFpcicsXHJcbiAgICAgICAgYW1vdW50OiAxNSxcclxuICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvdHJlZS1jcmF5b24uanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1NxdWFyZXMnLFxyXG4gICAgICAgIHllYXI6IDIwMTIsXHJcbiAgICAgICAgcHJpY2U6IDQ1LFxyXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcclxuICAgICAgICBicnVzaDogJ2NyYXlvbicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdCbGFjayBzcXVhcmVzJyxcclxuICAgICAgICBhbW91bnQ6IDMsXHJcbiAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3NxdWFyZXMtYmxhY2stY3JheW9uLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbl07XHJcbiIsImltcG9ydCBDYXJkIGZyb20gJy4uL2NhcmQvY2FyZCc7XHJcbmltcG9ydCAnLi9mYXZvcml0ZXMuc2Nzcyc7XHJcbmltcG9ydCB7IHBpY3R1cmVzTGlzdCB9IGZyb20gJy4uLy4uLy4uL3BpY3R1cmVzLWxpc3QnO1xyXG5cclxuY2xhc3MgRmF2b3JpdGVzIHtcclxuICAgIHB1YmxpYyB0b2dnbGUoZTogRXZlbnQpIHtcclxuICAgICAgICBjb25zdCBmYXZTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlcycpO1xyXG4gICAgICAgIGxldCBwcmV2VmFsdWU6IHN0cmluZ1tdID0gZmF2U3RvcmFnZSA/IGZhdlN0b3JhZ2Uuc3BsaXQoJy0nKSA6IFtdO1xyXG5cclxuICAgICAgICBsZXQgaXRlbVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0VGl0bGUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLXRpdGxlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVRpdGxlID0gdGFyZ2V0VGl0bGUuaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZWYWx1ZS5pbmNsdWRlcyhpdGVtVGl0bGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZWYWx1ZS5zcGxpY2UocHJldlZhbHVlLmluZGV4T2YoaXRlbVRpdGxlKSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5maWx0ZXJzPy5yZXBsYWNlKCctZmF2b3JpdGUnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldlZhbHVlLnB1c2goaXRlbVRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmZpbHRlcnMgKz0gJy1mYXZvcml0ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZvcml0ZXMnLCBwcmV2VmFsdWUuam9pbignLScpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0c1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgcHJvZHVjdHNXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoKTtcclxuICAgICAgICAgICAgY2FyZC5kcmF3KHBpY3R1cmVzTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGVja0Zhdih0aXRsZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgZmF2U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKTtcclxuICAgICAgICBsZXQgcHJldlZhbHVlOiBzdHJpbmdbXSA9IGZhdlN0b3JhZ2UgPyBmYXZTdG9yYWdlLnNwbGl0KCctJykgOiBbXTtcclxuICAgICAgICBpZiAocHJldlZhbHVlLmluY2x1ZGVzKHRpdGxlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlcztcclxuIiwiaW1wb3J0IHsgcGljdHVyZXNMaXN0IH0gZnJvbSAnLi4vLi4vLi4vcGljdHVyZXMtbGlzdCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NhcmQvY2FyZCc7XHJcbmltcG9ydCBGYXZvcml0ZXMgZnJvbSAnLi4vZmF2b3JpdGVzL2Zhdm9yaXRlcyc7XHJcblxyXG5jbGFzcyBGaWx0ZXIge1xyXG4gICAgYWxsUHJvZHVjdHM6IEVsZW1lbnRbXTtcclxuICAgIGZpbHRlcmVkUHJvZHVjdHM6IEVsZW1lbnRbXTtcclxuICAgIGZhdm9yaXRlczogRmF2b3JpdGVzO1xyXG4gICAgcHJvZHVjdHNXcmFwcGVyOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNhcmQ6IENhcmQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5hbGxQcm9kdWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2l0ZW0nKSk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gW107XHJcbiAgICAgICAgdGhpcy5mYXZvcml0ZXMgPSBuZXcgRmF2b3JpdGVzKCk7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0c1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aGlzLmNhcmQgPSBuZXcgQ2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVGaWx0ZXIoZmlsdGVyOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpbHRlcnMnKTtcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlcnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyc0FyciA9IGZpbHRlcnMuc3BsaXQoJy0nKTtcclxuICAgICAgICAgICAgaWYgKGZpbHRlci5zdGFydHNXaXRoKCdjb2xvcicpIHx8IGZpbHRlci5zdGFydHNXaXRoKCdicnVzaCcpIHx8IGZpbHRlci5zdGFydHNXaXRoKCdhdXRob3InKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyVG9SZW1vdmUgPSBmaWx0ZXIuc3BsaXQoJyonKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0ZpbHRlciA9IG5ldyBSZWdFeHAoYF4ke2ZpbHRlclRvUmVtb3ZlWzBdfWApO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbmQgaW4gZmlsdGVyc0Fycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWdGaWx0ZXIudGVzdChmaWx0ZXJzQXJyW2luZF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXNlbnRGaWx0ZXIgPSBmaWx0ZXJzQXJyW2luZF0uc3BsaXQoJyonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXNlbnRGaWx0ZXIubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VudEZpbHRlci5zcGxpY2UocHJlc2VudEZpbHRlci5pbmRleE9mKGZpbHRlclRvUmVtb3ZlWzFdKSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzQXJyW2luZF0gPSBwcmVzZW50RmlsdGVyLmpvaW4oJyonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnNBcnIuc3BsaWNlKCtpbmQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVnRmlsdGVyID0gbmV3IFJlZ0V4cChgXiR7ZmlsdGVyfWApO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpbmQgaW4gZmlsdGVyc0Fycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWdGaWx0ZXIudGVzdChmaWx0ZXJzQXJyW2luZF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnNBcnIuc3BsaWNlKCtpbmQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlsdGVycycsIGZpbHRlcnNBcnIuam9pbignLScpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbHRlclByb2R1Y3RzKCkge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcnNTdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlsdGVycycpO1xyXG4gICAgICAgIGxldCBmaWx0ZXJzQXJyOiBzdHJpbmdbXTtcclxuICAgICAgICBpZiAoZmlsdGVyc1N0cikge1xyXG4gICAgICAgICAgICBmaWx0ZXJzQXJyID0gZmlsdGVyc1N0ci5zcGxpdCgnLScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZpbHRlcnNBcnIubGVuZ3RoID09PSAwIHx8IGZpbHRlcnNBcnJbMF0gPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmQuZHJhdyhwaWN0dXJlc0xpc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyc0Fyci5mb3JFYWNoKChmaWx0ZXI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIuc3RhcnRzV2l0aCgncHJpY2UnKSB8fCBmaWx0ZXIuc3RhcnRzV2l0aCgneWVhcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlQcmljZUFuZFllYXIoZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlci5zdGFydHNXaXRoKCdzYWxlJykgfHwgZmlsdGVyLnN0YXJ0c1dpdGgoJ2Zhdm9yaXRlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeVNhbGVBbmRGYXZvcml0ZShmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQnlQcm9wZXJ0eShmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1Byb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRQcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHNXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgdGhpcy5hbGxQcm9kdWN0cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQocHJvZHVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaWx0ZXJCeVByaWNlQW5kWWVhcihmaWx0ZXI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9kdWN0cyA9IHRoaXMuZmlsdGVyZWRQcm9kdWN0cy5sZW5ndGggPj0gMSA/IFsuLi50aGlzLmZpbHRlcmVkUHJvZHVjdHNdIDogWy4uLnRoaXMuYWxsUHJvZHVjdHNdO1xyXG4gICAgICAgIGNvbnN0IHJhbmdlQXJyID0gZmlsdGVyLnNwbGl0KCcqJyk7XHJcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYC4ke3JhbmdlQXJyWzBdfS1zbGlkZXJgO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdGaWx0ZXJlZDogRWxlbWVudFtdID0gY3VycmVudFByb2R1Y3RzLnJlZHVjZSgoZmlsdGVyZWQ6IEVsZW1lbnRbXSwgaXRlbTogRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtVmFsdWUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoYC5jYXJkX19pdGVtLSR7cmFuZ2VBcnJbMF19YCk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGl0ZW1WYWx1ZSAmJlxyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoaXRlbVZhbHVlLmlubmVySFRNTCkgPj0gK3JhbmdlQXJyWzFdICYmXHJcbiAgICAgICAgICAgICAgICBwYXJzZUludChpdGVtVmFsdWUuaW5uZXJIVE1MKSA8PSArcmFuZ2VBcnJbMl1cclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJlZDtcclxuICAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gWy4uLm5ld0ZpbHRlcmVkXTtcclxuICAgICAgICBjb25zdCBzbGlkZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzTmFtZSkpIGFzIEhUTUxJbnB1dEVsZW1lbnRbXTtcclxuXHJcbiAgICAgICAgaWYgKHNsaWRlcnMpIHtcclxuICAgICAgICAgICAgc2xpZGVyc1swXS52YWx1ZSA9IHJhbmdlQXJyWzFdO1xyXG4gICAgICAgICAgICBzbGlkZXJzWzFdLnZhbHVlID0gcmFuZ2VBcnJbMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNsaWRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7Y2xhc3NOYW1lfV9fY29udGFpbmVyYCk7XHJcbiAgICAgICAgaWYgKHNsaWRlckNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydEZyb20gPSBzbGlkZXJDb250YWluZXIucXVlcnlTZWxlY3RvcignLmZyb20nKTtcclxuICAgICAgICAgICAgY29uc3QgZW5kV2l0aCA9IHNsaWRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudG8nKTtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0RnJvbSAmJiBlbmRXaXRoKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydEZyb20uaW5uZXJIVE1MID0gc2xpZGVyc1swXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGVuZFdpdGguaW5uZXJIVE1MID0gc2xpZGVyc1sxXS52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbHRlckJ5U2FsZUFuZEZhdm9yaXRlKGZpbHRlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb2R1Y3RzID0gdGhpcy5maWx0ZXJlZFByb2R1Y3RzLmxlbmd0aCA+PSAxID8gWy4uLnRoaXMuZmlsdGVyZWRQcm9kdWN0c10gOiBbLi4udGhpcy5hbGxQcm9kdWN0c107XHJcbiAgICAgICAgY29uc3QgbmV3RmlsdGVyZWQ6IEVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBmaWx0ZXJDbGFzcyA9IGZpbHRlciA9PT0gJ3NhbGUnID8gJy5vbnNhbGUnIDogJy5pc2Zhdm9yaXRlJztcclxuICAgICAgICBjb25zdCBmaWx0ZXJDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZmlsdGVyQ2xhc3MpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKGZpbHRlckNoZWNrYm94KSBmaWx0ZXJDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0IG9mIGN1cnJlbnRQcm9kdWN0cykge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0RWxlbWVudCA9IHByb2R1Y3QgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RQcm9wZXJ0aWVzID0gcHJvZHVjdEVsZW1lbnQuZGF0YXNldC5maWx0ZXJzO1xyXG5cclxuICAgICAgICAgICAgbGV0IHByb2R1Y3RQcm9wZXJ0aWVzQXJyOiBzdHJpbmdbXTtcclxuICAgICAgICAgICAgaWYgKHByb2R1Y3RQcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0UHJvcGVydGllc0FyciA9IHByb2R1Y3RQcm9wZXJ0aWVzLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZHVjdFByb3BlcnRpZXNBcnIuaW5jbHVkZXMoZmlsdGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0ZpbHRlcmVkLnB1c2gocHJvZHVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gWy4uLm5ld0ZpbHRlcmVkXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbHRlckJ5UHJvcGVydHkoZmlsdGVyOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvZHVjdHMgPSB0aGlzLmZpbHRlcmVkUHJvZHVjdHMubGVuZ3RoID49IDEgPyBbLi4udGhpcy5maWx0ZXJlZFByb2R1Y3RzXSA6IFsuLi50aGlzLmFsbFByb2R1Y3RzXTtcclxuICAgICAgICBjb25zdCBuZXdGaWx0ZXJlZDogRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbHRlckFyciA9IGZpbHRlci5zcGxpdCgnKicpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSBmaWx0ZXJBcnIuc2xpY2UoMSk7XHJcblxyXG4gICAgICAgIGZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94RmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZmlsdGVyfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveEZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3hGaWx0ZXIuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiBjdXJyZW50UHJvZHVjdHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RFbGVtZW50ID0gcHJvZHVjdCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RQcm9wZXJ0aWVzID0gcHJvZHVjdEVsZW1lbnQuZGF0YXNldC5maWx0ZXJzO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0UHJvcGVydGllc0Fycjogc3RyaW5nW107XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZHVjdFByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UHJvcGVydGllc0FyciA9IHByb2R1Y3RQcm9wZXJ0aWVzLnNwbGl0KCctJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0UHJvcGVydGllc0Fyci5pbmNsdWRlcyhmaWx0ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0ZpbHRlcmVkLnB1c2gocHJvZHVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gWy4uLm5ld0ZpbHRlcmVkXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyYXdQcm9kdWN0cygpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBpZiAodGhpcy5maWx0ZXJlZFByb2R1Y3RzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgdGhpcy5maWx0ZXJlZFByb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VGl0bGVFTCA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLmNhcmRfX2l0ZW0tdGl0bGUnKTtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0VGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0VGl0bGVFTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZSA9IHByb2R1Y3RUaXRsZUVMLmlubmVySFRNTC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNGYXY6IGJvb2xlYW4gPSB0aGlzLmZhdm9yaXRlcy5jaGVja0Zhdihwcm9kdWN0VGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhdkJ0biA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLmZhdi1idG4gaW1nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0ZhdiAmJiBmYXZCdG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmF2QnRuLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uLy4uLy4uL2Fzc2V0cy9zdmcvbGlrZS1ibGFjay5zdmcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzV3JhcHBlci5hcHBlbmRDaGlsZChwcm9kdWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLmlubmVySFRNTCA9ICdTb3JyeSwgbm90aGluZyBjb3VsZCBiZSBmb3VuZC4gWW91IGNhbiB0cnkgYW5vdGhlciBzZWFyY2ggcmVxdWVzdC4nO1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzV3JhcHBlci5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xyXG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3B1cC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgcGljdHVyZXNMaXN0IH0gZnJvbSAnLi4vLi4vLi4vcGljdHVyZXMtbGlzdCc7XHJcbmltcG9ydCAnLi9wb3B1cC5zY3NzJztcclxuXHJcbmNsYXNzIFBvcHVwIHtcclxuICAgIHB1YmxpYyBjcmVhdGVQb3B1cCA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoaScpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9kdWN0SW1nID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RJbWcucGFyZW50RWxlbWVudDtcclxuICAgICAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0VGl0bGVFbCA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLmNhcmRfX2l0ZW0tdGl0bGUnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwcm9kdWN0VGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgaWYgKHByb2R1Y3RUaXRsZUVsKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGUgPSBwcm9kdWN0VGl0bGVFbC5pbm5lckhUTUw7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcGljdHVyZSA9IHBpY3R1cmVzTGlzdC5maWx0ZXIoKHBpY3R1cmUpID0+IHBpY3R1cmUudGl0bGUgPT09IHByb2R1Y3RUaXRsZSlbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3B1cFRlbXA6IEhUTUxUZW1wbGF0ZUVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwVGVtcCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvcHVwVGVtcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwQ2xvbmUgPSBwb3B1cFRlbXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwQ2xvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXBUaXRsZSA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLnBvcHVwX19pdGVtLXRpdGxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3B1cFRpdGxlKSBwb3B1cFRpdGxlLnRleHRDb250ZW50ID0gcGljdHVyZS50aXRsZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwSW1nID0gcG9wdXBDbG9uZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2l0ZW0taW1nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3B1cEltZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBwaWN0dXJlLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cEltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIHBpY3R1cmUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwWWVhciA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLnBvcHVwX19pdGVtLXllYXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwWWVhcikgcG9wdXBZZWFyLnRleHRDb250ZW50ID0gcGljdHVyZS55ZWFyICsgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwUHJpY2UgPSBwb3B1cENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faXRlbS1wcmljZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXBQcmljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBQcmljZS50ZXh0Q29udGVudCA9IHBpY3R1cmUucHJpY2UgKyAnJCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBpY3R1cmUub25zYWxlICYmIHBpY3R1cmUuc2FsZVByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBQcmljZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19pdGVtLXByaWNlX3NhbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzYWxlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2l0ZW1fc2FsZS1wcmljZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZS5pbm5lckhUTUwgPSBgJHtwaWN0dXJlLnNhbGVQcmljZX0kYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cFByaWNlLmFmdGVyKHNhbGVQcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FsZVBlcmNlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQuY2xhc3NMaXN0LmFkZCgnY2FyZF9faXRlbV9zYWxlLXBlcmNlbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUGVyY2VudC5pbm5lckhUTUwgPSBgLSR7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwIC0gKHBpY3R1cmUuc2FsZVByaWNlICogMTAwKSAvIHBpY3R1cmUucHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSVgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZS5hZnRlcihzYWxlUGVyY2VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXBBdXRob3IgPSBwb3B1cENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faXRlbS1hdXRob3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwQXV0aG9yKSBwb3B1cEF1dGhvci5pbm5lckhUTUwgKz0gcGljdHVyZS5hdXRob3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwQ29sb3IgPSBwb3B1cENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faXRlbS1jb2xvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXBDb2xvcikgcG9wdXBDb2xvci5pbm5lckhUTUwgKz0gcGljdHVyZS5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXBCcnVzaCA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLnBvcHVwX19pdGVtLWJydXNoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3B1cEJydXNoKSBwb3B1cEJydXNoLmlubmVySFRNTCArPSBwaWN0dXJlLmJydXNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cERlc2NyaXB0aW9uID0gcG9wdXBDbG9uZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2l0ZW0tZGVzY3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwRGVzY3JpcHRpb24pIHBvcHVwRGVzY3JpcHRpb24uaW5uZXJIVE1MICs9IHBpY3R1cmUuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlQnRuID0gcG9wdXBDbG9uZS5xdWVyeVNlbGVjdG9yKCcuYnRuLWNyb3NzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbG9zZUJ0bikgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlUG9wdXApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXAgPSBwb3B1cENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faXRlbScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXApIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZVBvcHVwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZChwb3B1cENsb25lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kKGZyYWdtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcG9wdXAub25tb3VzZW92ZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAoZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCkgcG9wdXBCdG4uY2xhc3NMaXN0LmFkZCgnaG92ZXJlZCcpO1xyXG4gICAgICAgIC8vIH07XHJcblxyXG4gICAgICAgIC8vIHBvcHVwLm9ubW91c2VvdXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAoZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCkgcG9wdXBCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJlZCcpO1xyXG4gICAgICAgIC8vIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBjbG9zZVBvcHVwID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbiAgICAgICAgaWYgKG1haW4pIHtcclxuICAgICAgICAgICAgY29uc3QgbGFzdENoaWxkID0gbWFpbi5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgICAgICBpZiAobGFzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKGxhc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3B1cDtcclxuIiwiY2xhc3MgU29ydCB7XHJcbiAgICBwdWJsaWMgc29ydFByb2R1Y3RzKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNvcnRCeSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb3J0QnknKTtcclxuICAgICAgICBzd2l0Y2ggKHNvcnRCeSkge1xyXG4gICAgICAgICAgICBjYXNlICdwcmljZS1hc2NlbmRpbmcnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0KCdwcmljZScsICdhc2NlbmRpbmcnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2FzZSAncHJpY2UtZGVzY2VuZGluZyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQoJ3ByaWNlJywgJ2Rlc2NlbmRpbmcnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2FzZSAndGl0bGUtYXNjZW5kaW5nJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydCgndGl0bGUnLCAnYXNjZW5kaW5nJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgJ3RpdGxlLWRlc2NlbmRpbmcnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0KCd0aXRsZScsICdkZXNjZW5kaW5nJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgJ3llYXItYXNjZW5kaW5nJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydCgneWVhcicsICdhc2NlbmRpbmcnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2FzZSAneWVhci1kZXNjZW5kaW5nJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydCgneWVhcicsICdkZXNjZW5kaW5nJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc29ydEJ5Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc29ydChmaWx0ZXI6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2l0ZW0nKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbHRlckNsYXNzID1cclxuICAgICAgICAgICAgZmlsdGVyID09PSAncHJpY2UnID8gJy5jYXJkX19pdGVtLXByaWNlJyA6IGZpbHRlciA9PT0gJ3RpdGxlJyA/ICcuY2FyZF9faXRlbS10aXRsZScgOiAnLmNhcmRfX2l0ZW0teWVhcic7XHJcblxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdhc2NlbmRpbmcnICYmIGZpbHRlciA9PT0gJ3RpdGxlJykge1xyXG4gICAgICAgICAgICBwcm9kdWN0cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGEucXVlcnlTZWxlY3RvcihmaWx0ZXJDbGFzcyk/LmlubmVySFRNTCBhcyBzdHJpbmcpLmxvY2FsZUNvbXBhcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgYi5xdWVyeVNlbGVjdG9yKGZpbHRlckNsYXNzKT8uaW5uZXJIVE1MIGFzIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkZXNjZW5kaW5nJyAmJiBmaWx0ZXIgPT09ICd0aXRsZScpIHtcclxuICAgICAgICAgICAgcHJvZHVjdHMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChiLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyQ2xhc3MpPy5pbm5lckhUTUwgYXMgc3RyaW5nKS5sb2NhbGVDb21wYXJlKFxyXG4gICAgICAgICAgICAgICAgICAgIGEucXVlcnlTZWxlY3RvcihmaWx0ZXJDbGFzcyk/LmlubmVySFRNTCBhcyBzdHJpbmdcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnYXNjZW5kaW5nJykge1xyXG4gICAgICAgICAgICBwcm9kdWN0cy5zb3J0KFxyXG4gICAgICAgICAgICAgICAgKGEsIGIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChhLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyQ2xhc3MpPy5pbm5lckhUTUwgYXMgc3RyaW5nKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChiLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyQ2xhc3MpPy5pbm5lckhUTUwgYXMgc3RyaW5nKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZGVzY2VuZGluZycpIHtcclxuICAgICAgICAgICAgcHJvZHVjdHMuc29ydChcclxuICAgICAgICAgICAgICAgIChhLCBiKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoYi5xdWVyeVNlbGVjdG9yKGZpbHRlckNsYXNzKT8uaW5uZXJIVE1MIGFzIHN0cmluZykgLVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoYS5xdWVyeVNlbGVjdG9yKGZpbHRlckNsYXNzKT8uaW5uZXJIVE1MIGFzIHN0cmluZylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc29ydE9wdGlvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpKTtcclxuICAgICAgICBzb3J0T3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gYCR7ZmlsdGVyfS0ke2RpcmVjdGlvbn1gKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RzJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgcHJvZHVjdHNXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHByb2R1Y3RzV3JhcHBlci5hcHBlbmRDaGlsZChwcm9kdWN0KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvcnQ7XHJcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcmQuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IFBpY3R1cmUgfSBmcm9tICcuLi8uLi8uLi9waWN0dXJlLmludGVmYWNlJztcclxuaW1wb3J0IEZhdm9yaXRlcyBmcm9tICcuLi9mYXZvcml0ZXMvZmF2b3JpdGVzJztcclxuaW1wb3J0IEZpbHRlciBmcm9tICcuLi9maWx0ZXIvZmlsdGVyJztcclxuaW1wb3J0IFBvcHVwIGZyb20gJy4uL3BvcHVwL3BvcHVwJztcclxuaW1wb3J0IFNvcnQgZnJvbSAnLi4vc29ydC9zb3J0JztcclxuaW1wb3J0ICcuL2NhcmQuc2Nzcyc7XHJcblxyXG5jbGFzcyBDYXJkIHtcclxuICAgIGZhdm9yaXRlczogRmF2b3JpdGVzO1xyXG4gICAgcG9wdXA6IFBvcHVwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZmF2b3JpdGVzID0gbmV3IEZhdm9yaXRlcygpO1xyXG4gICAgICAgIHRoaXMucG9wdXAgPSBuZXcgUG9wdXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyhkYXRhOiBQaWN0dXJlW10pIHtcclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0Q2FyZFRlbXA6IEhUTUxUZW1wbGF0ZUVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2R1Y3RDYXJkVGVtcCcpO1xyXG5cclxuICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb2R1Y3RDYXJkVGVtcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZENsb25lID0gcHJvZHVjdENhcmRUZW1wLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYXJkQ2xvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkSXRlbVRpdGxlID0gY2FyZENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLXRpdGxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzRmF2OiBib29sZWFuID0gdGhpcy5mYXZvcml0ZXMuY2hlY2tGYXYoaXRlbS50aXRsZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYXZCdG4gPSBjYXJkQ2xvbmUucXVlcnlTZWxlY3RvcignLmZhdi1idG4gaW1nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRmF2ICYmIGZhdkJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXZCdG4uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vLi4vLi4vYXNzZXRzL3N2Zy9saWtlLWJsYWNrLnN2ZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZEl0ZW1UaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSXRlbVRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRJdGVtSW1nID0gY2FyZENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLWltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkSXRlbUltZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSXRlbUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGl0ZW0udXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW1JbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBpdGVtLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FyZEl0ZW1ZZWFyID0gY2FyZENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLXllYXInKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZEl0ZW1ZZWFyKSBjYXJkSXRlbVllYXIudGV4dENvbnRlbnQgPSBpdGVtLnllYXIgKyAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FyZEl0ZW0gPSBjYXJkQ2xvbmUucXVlcnlTZWxlY3RvcignLmNhcmRfX2l0ZW0nKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZEl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJdGVtLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLWZpbHRlcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7aXRlbS5icnVzaH0tJHtpdGVtLmF1dGhvci50b0xvd2VyQ2FzZSgpfS0ke2l0ZW0uY29sb3J9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRJdGVtUHJpY2UgPSBjYXJkQ2xvbmUucXVlcnlTZWxlY3RvcignLmNhcmRfX2l0ZW0tcHJpY2UnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZEl0ZW1QcmljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSXRlbVByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZSArICckJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ub25zYWxlICYmIGl0ZW0uc2FsZVByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkSXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2l0ZW1fc2FsZS1wcmljZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FsZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2l0ZW0tcHJpY2Vfc2FsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlLmlubmVySFRNTCA9IGAke2l0ZW0ucHJpY2V9JGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkSXRlbVByaWNlLmlubmVySFRNTCA9IGAke2l0ZW0uc2FsZVByaWNlfSRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW1QcmljZS5iZWZvcmUoc2FsZVByaWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhbGVQZXJjZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQuY2xhc3NMaXN0LmFkZCgnY2FyZF9faXRlbV9zYWxlLXBlcmNlbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50LmlubmVySFRNTCA9IGAtJHtNYXRoLnJvdW5kKDEwMCAtIChpdGVtLnNhbGVQcmljZSAqIDEwMCkgLyBpdGVtLnByaWNlKX0lYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZS5hZnRlcihzYWxlUGVyY2VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkSXRlbS5kYXRhc2V0LmZpbHRlcnMgKz0gJy1zYWxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmF2QnV0dG9uID0gY2FyZENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5mYXYtYnRuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZhdkJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmF2b3JpdGVzLnRvZ2dsZShlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IG5ldyBGaWx0ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5maWx0ZXJQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29ydCA9IG5ldyBTb3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0LnNvcnRQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcmVCdXR0b24gPSBjYXJkQ2xvbmUucXVlcnlTZWxlY3RvcignLmNhcmRfX2l0ZW0tYnRuLS1tb3JlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vcmVCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9yZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKTogdm9pZCA9PiB0aGlzLnBvcHVwLmNyZWF0ZVBvcHVwKGUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZChjYXJkQ2xvbmUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0cykgcHJvZHVjdHMuYXBwZW5kKGZyYWdtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zZWFyY2guc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHBpY3R1cmVzTGlzdCB9IGZyb20gJy4uLy4uLy4uL3BpY3R1cmVzLWxpc3QnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jYXJkL2NhcmQnO1xyXG5pbXBvcnQgJy4vc2VhcmNoLnNjc3MnO1xyXG5cclxuY2xhc3MgU2VhcmNoIHtcclxuICAgIHB1YmxpYyBzZWFyY2hQcm9kdWN0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZCgpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0cycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHQgPSBzZWFyY2hJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICAgICAgICBpZiAoIXRleHQpIHtcclxuICAgICAgICAgICAgcHJvZHVjdHNXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBjYXJkLmRyYXcocGljdHVyZXNMaXN0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19pdGVtJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPSBBcnJheS5mcm9tKHByb2R1Y3RzKS5maWx0ZXIoKHByb2R1Y3QpID0+XHJcbiAgICAgICAgICAgIHByb2R1Y3QucXVlcnlTZWxlY3RvcignLmNhcmRfX2l0ZW0tdGl0bGUnKT8uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGV4dClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoZmlsdGVyZWRQcm9kdWN0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcHJvZHVjdHNXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKHByb2R1Y3QpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS5pbm5lckhUTUwgPSAnU29ycnksIG5vdGhpbmcgY291bGQgYmUgZm91bmQuIFlvdSBjYW4gdHJ5IGFub3RoZXIgc2VhcmNoIHJlcXVlc3QuJztcclxuICAgICAgICAgICAgcHJvZHVjdHNXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBwcm9kdWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZVNlYXJjaFRleHQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaFByb2R1Y3QoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZXIuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vZmlsdGVyL2ZpbHRlcic7XHJcbmltcG9ydCAnLi9zbGlkZXIuc2Nzcyc7XHJcblxyXG5jbGFzcyBTbGlkZXIge1xyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgICBmaWx0ZXI6IEZpbHRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjbGFzc05hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyID0gbmV3IEZpbHRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KCkge1xyXG4gICAgICAgIGNvbnN0IHNsaWRlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jbGFzc05hbWUpKSBhcyBIVE1MSW5wdXRFbGVtZW50W107XHJcblxyXG4gICAgICAgIGlmICgrc2xpZGVyc1swXS52YWx1ZSA+ICtzbGlkZXJzWzFdLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBzbGlkZXJzWzFdLnZhbHVlO1xyXG4gICAgICAgICAgICBzbGlkZXJzWzFdLnZhbHVlID0gc2xpZGVyc1swXS52YWx1ZTtcclxuICAgICAgICAgICAgc2xpZGVyc1swXS52YWx1ZSA9IHRlbXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoK3NsaWRlcnNbMV0udmFsdWUgPCArc2xpZGVyc1swXS52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gc2xpZGVyc1swXS52YWx1ZTtcclxuICAgICAgICAgICAgc2xpZGVyc1swXS52YWx1ZSA9IHNsaWRlcnNbMV0udmFsdWU7XHJcbiAgICAgICAgICAgIHNsaWRlcnNbMV0udmFsdWUgPSB0ZW1wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UmFuZ2VGaWx0ZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2xpZGVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNsYXNzTmFtZSkpIGFzIEhUTUxJbnB1dEVsZW1lbnRbXTtcclxuICAgICAgICBjb25zdCBzbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3RoaXMuY2xhc3NOYW1lfV9fY29udGFpbmVyYCk7XHJcbiAgICAgICAgaWYgKHNsaWRlckNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydEZyb20gPSBzbGlkZXJDb250YWluZXIucXVlcnlTZWxlY3RvcignLmZyb20nKTtcclxuICAgICAgICAgICAgY29uc3QgZW5kV2l0aCA9IHNsaWRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudG8nKTtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0RnJvbSAmJiBlbmRXaXRoKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydEZyb20uaW5uZXJIVE1MID0gc2xpZGVyc1swXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGVuZFdpdGguaW5uZXJIVE1MID0gc2xpZGVyc1sxXS52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzbGlkZXJUeXBlID0gdGhpcy5jbGFzc05hbWUuc3BsaXQoJy0nKVswXS5zbGljZSgxKTtcclxuICAgICAgICB0aGlzLmZpbHRlci5yZW1vdmVGaWx0ZXIoc2xpZGVyVHlwZSk7XHJcbiAgICAgICAgY29uc3Qgc2xpZGVyRmlsdGVyID0gYCR7c2xpZGVyVHlwZX0qJHtzbGlkZXJzWzBdLnZhbHVlfSoke3NsaWRlcnNbMV0udmFsdWV9YDtcclxuXHJcbiAgICAgICAgY29uc3QgcHJldlZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpbHRlcnMnKTtcclxuXHJcbiAgICAgICAgaWYgKHByZXZWYWx1ZSkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlsdGVycycsIHByZXZWYWx1ZSArICctJyArIHNsaWRlckZpbHRlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbHRlcnMnLCBzbGlkZXJGaWx0ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyO1xyXG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJ0LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgJy4vY2FydC5zY3NzJztcclxuXHJcbmNsYXNzIENhcnQge1xyXG4gICAgcHVibGljIGFkZFRvQ2FydChlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydCcpO1xyXG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGxldCBwcm9kdWN0O1xyXG4gICAgICAgIGlmIChhZGRCdXR0b24pIHByb2R1Y3QgPSBhZGRCdXR0b24ucGFyZW50RWxlbWVudDtcclxuICAgICAgICBsZXQgcmVtb3ZlQnRuO1xyXG4gICAgICAgIGlmIChwcm9kdWN0KSByZW1vdmVCdG4gPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLWJ0bi0tcmVtb3ZlJyk7XHJcblxyXG4gICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICBpZiAocmVtb3ZlQnRuKSByZW1vdmVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblxyXG4gICAgICAgIGlmIChjYXJ0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcnRBbW91bnQgPSBjYXJ0LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcnRXYXJuaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtd2FybmluZycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNhcnRBbW91bnQgJiYgY2FydFdhcm5pbmcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNyb3NzQnV0dG9uID0gY2FydFdhcm5pbmcucXVlcnlTZWxlY3RvcignLmJ0bi1jcm9zc193YXJuaW5nJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3Jvc3NCdXR0b24pIGNyb3NzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FydFdhcm5pbmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3QW1vdW50ID0gK2NhcnRBbW91bnQuaW5uZXJIVE1MICsgMTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobmV3QW1vdW50ID4gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0V2FybmluZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydEFtb3VudC5pbm5lckhUTUwgPSBuZXdBbW91bnQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0V2FybmluZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlRnJvbUNhcnQoZTogRXZlbnQpIHtcclxuICAgICAgICBjb25zdCBjYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQnKTtcclxuICAgICAgICBjb25zdCByZW1vdmVCdG4gPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICAgbGV0IHByb2R1Y3Q7XHJcbiAgICAgICAgaWYgKHJlbW92ZUJ0bikge1xyXG4gICAgICAgICAgICBwcm9kdWN0ID0gcmVtb3ZlQnRuLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhZGRCdG47XHJcbiAgICAgICAgaWYgKHByb2R1Y3QpIGFkZEJ0biA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLmNhcmRfX2l0ZW0tYnRuLS1jYXJ0Jyk7XHJcblxyXG4gICAgICAgIGlmIChhZGRCdG4pIGFkZEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBpZiAoY2FydCkge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJ0QW1vdW50ID0gY2FydC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGlmIChjYXJ0QW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBbW91bnQgPSArY2FydEFtb3VudC5pbm5lckhUTUwgLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChuZXdBbW91bnQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0QW1vdW50LmlubmVySFRNTCA9IG5ld0Ftb3VudC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xyXG4iLCJpbXBvcnQgQ2FyZCBmcm9tICcuLi92aWV3L2NhcmQvY2FyZCc7XHJcbmltcG9ydCB7IHBpY3R1cmVzTGlzdCB9IGZyb20gJy4uLy4uL3BpY3R1cmVzLWxpc3QnO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uL3ZpZXcvc2VhcmNoL3NlYXJjaCc7XHJcbmltcG9ydCBTb3J0IGZyb20gJy4uL3ZpZXcvc29ydC9zb3J0JztcclxuaW1wb3J0IEZpbHRlciBmcm9tICcuLi92aWV3L2ZpbHRlci9maWx0ZXInO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJy4uL3ZpZXcvc2xpZGVyL3NsaWRlcic7XHJcbmltcG9ydCBQb3B1cCBmcm9tICcuLi92aWV3L3BvcHVwL3BvcHVwJztcclxuaW1wb3J0IEZhdm9yaXRlcyBmcm9tICcuLi92aWV3L2Zhdm9yaXRlcy9mYXZvcml0ZXMnO1xyXG5pbXBvcnQgQ2FydCBmcm9tICcuLi92aWV3L2NhcnQvY2FydCc7XHJcbmltcG9ydCBkb25lIGZyb20gJy4vZG9uZSc7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgcHJpY2VTbGlkZXI6IFNsaWRlcjtcclxuICAgIHllYXJTbGlkZXI6IFNsaWRlcjtcclxuICAgIGNhcmQ6IENhcmQ7XHJcbiAgICBzb3J0OiBTb3J0O1xyXG4gICAgcG9wdXA6IFBvcHVwO1xyXG4gICAgc2VhcmNoOiBTZWFyY2g7XHJcbiAgICBmYXZvcml0ZXM6IEZhdm9yaXRlcztcclxuICAgIGNhcnQ6IENhcnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wcmljZVNsaWRlciA9IG5ldyBTbGlkZXIoJy5wcmljZS1zbGlkZXInKTtcclxuICAgICAgICB0aGlzLnllYXJTbGlkZXIgPSBuZXcgU2xpZGVyKCcueWVhci1zbGlkZXInKTtcclxuICAgICAgICB0aGlzLmNhcmQgPSBuZXcgQ2FyZCgpO1xyXG4gICAgICAgIHRoaXMuc29ydCA9IG5ldyBTb3J0KCk7XHJcbiAgICAgICAgdGhpcy5wb3B1cCA9IG5ldyBQb3B1cCgpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoID0gbmV3IFNlYXJjaCgpO1xyXG4gICAgICAgIHRoaXMuZmF2b3JpdGVzID0gbmV3IEZhdm9yaXRlcygpO1xyXG4gICAgICAgIHRoaXMuY2FydCA9IG5ldyBDYXJ0KCk7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmNhcmQuZHJhdyhwaWN0dXJlc0xpc3QpO1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xyXG4gICAgICAgIGlmIChzZWFyY2hJbnB1dCkge1xyXG4gICAgICAgICAgICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuc2VhcmNoLnNlYXJjaFByb2R1Y3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZWFyY2hSZW1vdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXJlbW92ZScpO1xyXG4gICAgICAgIGlmIChzZWFyY2hSZW1vdmVCdG4pIHtcclxuICAgICAgICAgICAgc2VhcmNoUmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zZWFyY2gucmVtb3ZlU2VhcmNoVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNvcnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvcnQnKTtcclxuICAgICAgICBpZiAoc29ydExpc3QpIHtcclxuICAgICAgICAgICAgc29ydExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IGUudGFyZ2V0IGFzIEhUTUxPcHRpb25FbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzb3J0QnknLCBzZWxlY3RlZE9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0LnNvcnRQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZmlsdGVyID0gbmV3IEZpbHRlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBmaWx0ZXJDaGVja2JveGVzID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXInKSBhcyB1bmtub3duKSBhcyBIVE1MSW5wdXRFbGVtZW50W107XHJcblxyXG4gICAgICAgIGZpbHRlckNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBlLnRhcmdldCBhcyBIVE1MT3B0aW9uRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94UGFyZW50ID0gc2VsZWN0ZWRPcHRpb24ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tib3hQYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJUeXBlID0gY2hlY2tib3hQYXJlbnQuY2xhc3NMaXN0LnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlsdGVycycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldlZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJzQXJyID0gcHJldlZhbHVlLnNwbGl0KCctJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZXNlbnRGaWx0ZXIgPSBmaWx0ZXJzQXJyLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zdGFydHNXaXRoKGZpbHRlclR5cGUpKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJJbmQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmVzZW50RmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVySW5kID0gZmlsdGVyc0Fyci5pbmRleE9mKHByZXNlbnRGaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0ZpbHRlclZhbHVlID0gYCR7cHJlc2VudEZpbHRlcn0qJHtzZWxlY3RlZE9wdGlvbi52YWx1ZX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnNBcnJbZmlsdGVySW5kXSA9IG5ld0ZpbHRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzQXJyLnB1c2goYCR7ZmlsdGVyVHlwZX0qJHtzZWxlY3RlZE9wdGlvbi52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlsdGVycycsIGZpbHRlcnNBcnIuam9pbignLScpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWx0ZXJzJywgYCR7ZmlsdGVyVHlwZX0qJHtzZWxlY3RlZE9wdGlvbi52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5yZW1vdmVGaWx0ZXIoYCR7ZmlsdGVyVHlwZX0qJHtzZWxlY3RlZE9wdGlvbi52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIuZmlsdGVyUHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydC5zb3J0UHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBzYWxlUmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25zYWxlJyk7XHJcbiAgICAgICAgaWYgKHNhbGVSYWRpbykge1xyXG4gICAgICAgICAgICBzYWxlUmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2FsZVJhZGlvRWxlbWVudCA9IHNhbGVSYWRpbyBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKHNhbGVSYWRpb0VsZW1lbnQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWx0ZXJzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlsdGVycycsIHByZXZWYWx1ZSArICctc2FsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWx0ZXJzJywgJ3NhbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlci5yZW1vdmVGaWx0ZXIoJ3NhbGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIuZmlsdGVyUHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydC5zb3J0UHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmYXZvcml0ZVJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlzZmF2b3JpdGUnKTtcclxuICAgICAgICBpZiAoZmF2b3JpdGVSYWRpbykge1xyXG4gICAgICAgICAgICBmYXZvcml0ZVJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZhdm9yaXRlUmFkaW9FbGVtZW50ID0gZmF2b3JpdGVSYWRpbyBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKGZhdm9yaXRlUmFkaW9FbGVtZW50LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlsdGVycycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbHRlcnMnLCBwcmV2VmFsdWUgKyAnLWZhdm9yaXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbHRlcnMnLCAnZmF2b3JpdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlci5yZW1vdmVGaWx0ZXIoJ2Zhdm9yaXRlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZmlsdGVyLmZpbHRlclByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQuc29ydFByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2xpZGVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlcl9faW5wdXQnKSkgYXMgSFRNTElucHV0RWxlbWVudFtdO1xyXG4gICAgICAgIHNsaWRlcnMuZm9yRWFjaCgoc2xpZGVyKSA9PiB7XHJcbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHJpY2Utc2xpZGVyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlU2xpZGVyLmRyYXcoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaWNlU2xpZGVyLnNldFJhbmdlRmlsdGVyKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWVhclNsaWRlci5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyU2xpZGVyLnNldFJhbmdlRmlsdGVyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZmlsdGVyLmZpbHRlclByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQuc29ydFByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBhc2lkZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXNpZGUtYnV0dG9uJyk7XHJcbiAgICAgICAgYXNpZGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b25FbCA9IGJ1dHRvbiBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbkVsLmNsYXNzTGlzdC5jb250YWlucygncmVtb3ZlLXNldHRpbmdzLWJ1dHRvbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJ1dHRvbkVsLmNsYXNzTGlzdC5jb250YWlucygncmVtb3ZlLWZpbHRlcnMtYnV0dG9uJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZmlsdGVycycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmlsdGVyLmZpbHRlclByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQuc29ydFByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBjYXJ0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19pdGVtLWJ0bi0tY2FydCcpO1xyXG4gICAgICAgIGNhcnRCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuY2FydC5hZGRUb0NhcnQoZSkpKTtcclxuICAgICAgICBjb25zdCByZW1vdmVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2l0ZW0tYnRuLS1yZW1vdmUnKTtcclxuICAgICAgICByZW1vdmVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IEV2ZW50KSA9PiB0aGlzLmNhcnQucmVtb3ZlRnJvbUNhcnQoZSkpKTtcclxuXHJcbiAgICAgICAgZmlsdGVyLmZpbHRlclByb2R1Y3RzKCk7XHJcbiAgICAgICAgdGhpcy5zb3J0LnNvcnRQcm9kdWN0cygpO1xyXG4gICAgICAgIC8vIGRvbmUoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcCc7XHJcbmltcG9ydCAnLi9zY3NzL25vcm1hbGl6ZS5zY3NzJztcclxuaW1wb3J0ICcuL3Njc3MvZ2xvYmFsLnNjc3MnO1xyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xyXG5hcHAuc3RhcnQoKTtcclxuIl0sIm5hbWVzIjpbIl9fX0NTU19MT0FERVJfRVhQT1JUX19fIiwicHVzaCIsIm1vZHVsZSIsImlkIiwiX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY29uY2F0Iiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImRlZHVwZSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJsZW5ndGgiLCJfaSIsIl9hcnJheUxpa2VUb0FycmF5IiwiYXJyIiwibGVuIiwiYXJyMiIsIkFycmF5IiwiX2l0ZW0iLCJpc0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJfcyIsIl9lIiwiX2FyciIsIl9uIiwiX2QiLCJjYWxsIiwibmV4dCIsImRvbmUiLCJ2YWx1ZSIsImVyciIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIm8iLCJtaW5MZW4iLCJuIiwiT2JqZWN0IiwicHJvdG90eXBlIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJmcm9tIiwidGVzdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIlR5cGVFcnJvciIsIl9ub25JdGVyYWJsZVJlc3QiLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwidXJsIiwib3B0aW9ucyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiaGFzaCIsIm5lZWRRdW90ZXMiLCJyZXBsYWNlIiwibWVtbyIsImdldFRhcmdldCIsInRhcmdldCIsInN0eWxlVGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSFRNTElGcmFtZUVsZW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJoZWFkIiwiZSIsInN0eWxlc0luRG9tIiwiZ2V0SW5kZXhCeUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicmVzdWx0IiwibW9kdWxlc1RvRG9tIiwiaWRDb3VudE1hcCIsImlkZW50aWZpZXJzIiwiYmFzZSIsImNvdW50IiwiaW5kZXgiLCJvYmoiLCJjc3MiLCJtZWRpYSIsInNvdXJjZU1hcCIsInJlZmVyZW5jZXMiLCJ1cGRhdGVyIiwiYWRkU3R5bGUiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwibm9uY2UiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldEF0dHJpYnV0ZSIsImluc2VydCIsIkVycm9yIiwiYXBwZW5kQ2hpbGQiLCJ0ZXh0U3RvcmUiLCJyZXBsYWNlVGV4dCIsInJlcGxhY2VtZW50IiwiZmlsdGVyIiwiQm9vbGVhbiIsImFwcGx5VG9TaW5nbGV0b25UYWciLCJyZW1vdmUiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImNzc05vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImNoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGx5VG9UYWciLCJyZW1vdmVBdHRyaWJ1dGUiLCJmaXJzdENoaWxkIiwic2luZ2xldG9uIiwic2luZ2xldG9uQ291bnRlciIsInVwZGF0ZSIsInN0eWxlSW5kZXgiLCJiaW5kIiwicGFyZW50Tm9kZSIsInJlbW92ZVN0eWxlRWxlbWVudCIsIm5ld09iaiIsImFsbCIsImF0b2IiLCJsYXN0SWRlbnRpZmllcnMiLCJuZXdMaXN0IiwibmV3TGFzdElkZW50aWZpZXJzIiwiX2luZGV4Iiwic3BsaWNlIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImdldHRlciIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsImciLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJzY3JpcHRVcmwiLCJpbXBvcnRTY3JpcHRzIiwibG9jYXRpb24iLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicCIsIm5jIiwicGljdHVyZXNMaXN0IiwidGl0bGUiLCJ5ZWFyIiwicHJpY2UiLCJhdXRob3IiLCJicnVzaCIsImRlc2NyaXB0aW9uIiwiYW1vdW50IiwiY29sb3IiLCJvbnNhbGUiLCJzYWxlUHJpY2UiLCJ0b2dnbGUiLCJpdGVtVGl0bGUiLCJmYXZTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInByZXZWYWx1ZSIsInNwbGl0IiwiZWxlbWVudCIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnRFbGVtZW50IiwidGFyZ2V0VGl0bGUiLCJpbm5lckhUTUwiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaW5kZXhPZiIsImRhdGFzZXQiLCJmaWx0ZXJzIiwic2V0SXRlbSIsImRyYXciLCJjaGVja0ZhdiIsImFsbFByb2R1Y3RzIiwicXVlcnlTZWxlY3RvckFsbCIsImZpbHRlcmVkUHJvZHVjdHMiLCJmYXZvcml0ZXMiLCJwcm9kdWN0c1dyYXBwZXIiLCJjYXJkIiwicmVtb3ZlRmlsdGVyIiwiZmlsdGVyc0FyciIsInN0YXJ0c1dpdGgiLCJmaWx0ZXJUb1JlbW92ZSIsInJlZ0ZpbHRlciIsIlJlZ0V4cCIsImluZCIsInByZXNlbnRGaWx0ZXIiLCJmaWx0ZXJQcm9kdWN0cyIsImZpbHRlcnNTdHIiLCJmaWx0ZXJCeVByaWNlQW5kWWVhciIsImZpbHRlckJ5U2FsZUFuZEZhdm9yaXRlIiwiZmlsdGVyQnlQcm9wZXJ0eSIsImRyYXdQcm9kdWN0cyIsInByb2R1Y3QiLCJjdXJyZW50UHJvZHVjdHMiLCJyYW5nZUFyciIsImNsYXNzTmFtZSIsIm5ld0ZpbHRlcmVkIiwicmVkdWNlIiwiZmlsdGVyZWQiLCJpdGVtVmFsdWUiLCJwYXJzZUludCIsInNsaWRlcnMiLCJzbGlkZXJDb250YWluZXIiLCJzdGFydEZyb20iLCJlbmRXaXRoIiwiZmlsdGVyQ2xhc3MiLCJmaWx0ZXJDaGVja2JveCIsImNoZWNrZWQiLCJwcm9kdWN0UHJvcGVydGllcyIsImNoZWNrYm94RmlsdGVyIiwicHJvZHVjdFRpdGxlRUwiLCJwcm9kdWN0VGl0bGUiLCJpc0ZhdiIsImZhdkJ0biIsImVycm9yTWVzc2FnZSIsImNsYXNzTGlzdCIsImFkZCIsImNyZWF0ZVBvcHVwIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RUaXRsZUVsIiwicGljdHVyZSIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsInBvcHVwVGVtcCIsInBvcHVwQ2xvbmUiLCJjbG9uZU5vZGUiLCJwb3B1cFRpdGxlIiwidGV4dENvbnRlbnQiLCJwb3B1cEltZyIsInBvcHVwWWVhciIsInBvcHVwUHJpY2UiLCJhZnRlciIsInNhbGVQZXJjZW50IiwiTWF0aCIsInJvdW5kIiwicG9wdXBBdXRob3IiLCJwb3B1cENvbG9yIiwicG9wdXBCcnVzaCIsInBvcHVwRGVzY3JpcHRpb24iLCJjbG9zZUJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZVBvcHVwIiwicG9wdXAiLCJhcHBlbmQiLCJtYWluIiwiYm9keSIsIm92ZXJmbG93IiwibGFzdENoaWxkIiwibGFzdEVsZW1lbnRDaGlsZCIsInNvcnRQcm9kdWN0cyIsInNvcnQiLCJyZW1vdmVJdGVtIiwiZGlyZWN0aW9uIiwicHJvZHVjdHMiLCJiIiwibG9jYWxlQ29tcGFyZSIsInBhcnNlRmxvYXQiLCJvcHRpb24iLCJzZWxlY3RlZCIsInByb2R1Y3RDYXJkVGVtcCIsImNhcmRDbG9uZSIsImNhcmRJdGVtVGl0bGUiLCJjYXJkSXRlbUltZyIsImNhcmRJdGVtWWVhciIsImNhcmRJdGVtIiwiY2FyZEl0ZW1QcmljZSIsImJlZm9yZSIsImZhdkJ1dHRvbiIsIm1vcmVCdXR0b24iLCJzZWFyY2hQcm9kdWN0IiwidGV4dCIsInRyaW0iLCJyZW1vdmVTZWFyY2hUZXh0IiwidGVtcCIsInNldFJhbmdlRmlsdGVyIiwic2xpZGVyVHlwZSIsInNsaWRlckZpbHRlciIsImFkZFRvQ2FydCIsInJlbW92ZUJ0biIsImNhcnQiLCJhZGRCdXR0b24iLCJjYXJ0QW1vdW50IiwiY3Jvc3NCdXR0b24iLCJuZXdBbW91bnQiLCJyZW1vdmVGcm9tQ2FydCIsImFkZEJ0biIsInByaWNlU2xpZGVyIiwieWVhclNsaWRlciIsInNlYXJjaCIsInN0YXJ0Iiwic2VhcmNoSW5wdXQiLCJzZWFyY2hSZW1vdmVCdG4iLCJzb3J0TGlzdCIsInNlbGVjdGVkT3B0aW9uIiwiY2hlY2tib3giLCJmaWx0ZXJUeXBlIiwiY2hlY2tib3hQYXJlbnQiLCJmaWx0ZXJJbmQiLCJuZXdGaWx0ZXJWYWx1ZSIsInNhbGVSYWRpbyIsImZhdm9yaXRlUmFkaW8iLCJzbGlkZXIiLCJjb250YWlucyIsImJ1dHRvbiIsImJ1dHRvbkVsIiwiY2xlYXIiXSwic291cmNlUm9vdCI6IiJ9
