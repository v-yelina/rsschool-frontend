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
            '.products{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;margin-top:10px;padding:0 2%;transition:.3s}.card__item{display:flex;flex-direction:column;gap:10px;align-items:center;margin-bottom:5%;background-color:#fff;padding:2%;box-shadow:rgba(0,0,0,.15) 2.4px 2.4px 3.2px;border-radius:1rem;min-width:210px}@media(max-width: 920px){.card__item{min-width:275px}}@media(max-width: 850px){.card__item{min-width:260px}}@media(max-width: 820px){.card__item{flex-direction:row;width:80%;margin:0 auto 5%}}@media(max-width: 520px){.card__item{width:95%}}.card__item-description{display:flex;flex-direction:column;align-items:center;gap:10px}.card__item-description p{margin:0;text-align:center}@media(max-width: 650px){.card__item-description{width:80%;margin:0 auto 5%}}.card__item-title{color:#0b2545;font-weight:700;font-size:1.5rem;font-family:"Raleway",sans-serif}.card__item-price{font-weight:700}.card__item-price_sale{text-decoration:line-through;font-weight:400}.card__item_sale-price{font-weight:700;color:#780000;font-size:larger;margin-left:5px}.card__item_sale-percent{display:inline-block;background-color:#fca311;color:#fff;letter-spacing:1px;font-size:smaller;border-radius:5px;padding:3px;margin-left:5px}.card__item-img{max-width:15vw;transition:.3s}',
            "",
            {
              version: 3,
              sources: ["webpack://./src/components/view/card/card.scss"],
              names: [],
              mappings:
                "AAEA,UACI,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,sBAAA,CACA,cAAA,CACA,eAAA,CACA,YAAA,CACA,cAAA,CAGJ,YACI,YAAA,CACA,qBAAA,CACA,QAAA,CACA,kBAAA,CACA,gBAAA,CACA,qBAAA,CACA,UAAA,CACA,4CAAA,CACA,kBAAA,CACA,eAAA,CAEA,yBAZJ,YAaQ,eAAA,CAAA,CAGJ,yBAhBJ,YAiBQ,eAAA,CAAA,CAGJ,yBApBJ,YAqBQ,kBAAA,CACA,SAAA,CACA,gBAAA,CAAA,CAGJ,yBA1BJ,YA2BQ,SAAA,CAAA,CAIR,wBACI,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,QAAA,CAEA,0BACI,QAAA,CACA,iBAAA,CAGJ,yBAXJ,wBAYQ,SAAA,CACA,gBAAA,CAAA,CAIR,kBACI,aAAA,CACA,eAAA,CACA,gBAAA,CACA,gCAAA,CAGJ,kBACI,eAAA,CAGJ,uBACI,4BAAA,CACA,eAAA,CAGJ,uBACI,eAAA,CACA,aAAA,CACA,gBAAA,CACA,eAAA,CAGJ,yBACI,oBAAA,CACA,wBAAA,CACA,UAAA,CACA,kBAAA,CACA,iBAAA,CACA,iBAAA,CACA,WAAA,CACA,eAAA,CAGJ,gBACI,cAAA,CACA,cAAA",
              sourcesContent: [
                "@import url('https://fonts.googleapis.com/css2?family=Mingzat&family=Raleway:wght@400;700&display=swap');\r\n\r\n.products {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n    flex-wrap: wrap;\r\n    margin-top: 10px;\r\n    padding: 0 2%;\r\n    transition: 0.3s;\r\n}\r\n\r\n.card__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    align-items: center;\r\n    margin-bottom: 5%;\r\n    background-color: #fff;\r\n    padding: 2%;\r\n    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\r\n    border-radius: 1rem;\r\n    min-width: 210px;\r\n\r\n    @media (max-width: 920px) {\r\n        min-width: 275px;\r\n    }\r\n\r\n    @media (max-width: 850px) {\r\n        min-width: 260px;\r\n    }\r\n\r\n    @media (max-width: 820px) {\r\n        flex-direction: row;\r\n        width: 80%;\r\n        margin: 0 auto 5%;\r\n    }\r\n        \r\n    @media (max-width: 520px) {\r\n        width: 95%;\r\n    }\r\n}\r\n\r\n.card__item-description {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 10px;\r\n\r\n    p {\r\n        margin: 0;\r\n        text-align: center;\r\n    }\r\n\r\n    @media (max-width: 650px) {\r\n        width: 80%;\r\n        margin: 0 auto 5%;\r\n    }\r\n}\r\n\r\n.card__item-title {\r\n    color: #0b2545;\r\n    font-weight: 700;\r\n    font-size: 1.5rem;\r\n    font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.card__item-price {\r\n    font-weight: 700;\r\n}\r\n\r\n.card__item-price_sale {\r\n    text-decoration: line-through;\r\n    font-weight: 400;\r\n}\r\n\r\n.card__item_sale-price {\r\n    font-weight: 700;\r\n    color: #780000;\r\n    font-size: larger;\r\n    margin-left: 5px;\r\n}\r\n\r\n.card__item_sale-percent {\r\n    display: inline-block;\r\n    background-color: #fca311;\r\n    color: #ffffff;\r\n    letter-spacing: 1px;\r\n    font-size: smaller;\r\n    border-radius: 5px;\r\n    padding: 3px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.card__item-img {\r\n    max-width: 15vw;\r\n    transition: 0.3s;\r\n}\r\n",
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
              "AACI,WACI,qBAAA,CAKR,cACI,cAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,4BAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAIJ,yBACI,iBAAA,CACA,qBAAA,CACA,UAAA,CACA,iBAAA,CAEA,oCACI,OAAA,CACA,WAAA,CAIR,QACI,YAAA,CAGJ,wBACI,UAAA,CACA,iBAAA",
            sourcesContent: [
              ".cart {\r\n    span {\r\n        letter-spacing: normal;\r\n    }\r\n}\r\n\r\n\r\n.cart-warning {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background: rgba(41, 41, 41, 0.6);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n}\r\n\r\n.cart-warning__container {\r\n    position: relative;\r\n    background-color: #fff;\r\n    padding: 3%;\r\n    border-radius: 5px;\r\n\r\n    .btn-cross {\r\n        top: 5px;\r\n        right: -10px;\r\n    }\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.card__item-btn--remove {\r\n    padding: 5%;\r\n    font-size: smaller;\r\n}\r\n",
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
          ".fav-btn{background:none;border:none;width:35px}.fav-btn:hover{cursor:pointer;transform:scale(1.2)}.fav-btn img{width:100%}",
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
              ".fav-btn {\r\n    background: none;\r\n    border: none;\r\n    width: 35px;\r\n    \r\n    &:hover {\r\n        cursor: pointer;\r\n        transform: scale(1.2);\r\n    }\r\n\r\n    img{\r\n        width: 100%;\r\n    }\r\n}\r\n",
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
          ".popup__item{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(41,41,41,.6);display:flex;align-items:center;justify-content:center}.popup__item-container{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background-color:#fff;padding:2%;width:max-content}@media(max-width: 750px){.popup__item-container{flex-direction:column;max-height:100vh}}.popup__item-img{max-width:50%}@media(max-width: 750px){.popup__item-img{max-width:80%}}.popup__item-description{position:relative;background-color:#fff;min-width:30%;padding:2%}@media(max-width: 750px){.popup__item-description{width:90%}}.popup__item-title{font-size:2rem}.popup__item-header{font-weight:700}.popup__item-header span{font-weight:400}.popup__item-price{font-weight:700;font-size:larger}.btn-cross{align-self:flex-end;background:none;background-image:url(" +
            d +
            ");background-repeat:no-repeat;position:absolute;border:none;height:52px;width:52px;top:-3%;right:-10%;margin:auto}.btn-cross:hover{cursor:pointer}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/components/view/popup/popup.scss"],
            names: [],
            mappings:
              "AAAA,aACI,cAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,4BAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAGJ,uBACI,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,6BAAA,CACA,qBAAA,CACA,UAAA,CACA,iBAAA,CAEA,yBATJ,uBAUQ,qBAAA,CACA,gBAAA,CAAA,CAIR,iBACI,aAAA,CAEA,yBAHJ,iBAIQ,aAAA,CAAA,CAGR,yBACI,iBAAA,CACA,qBAAA,CACA,aAAA,CACA,UAAA,CAEA,yBANJ,yBAOQ,SAAA,CAAA,CAKR,mBACI,cAAA,CAGJ,oBACI,eAAA,CAEA,yBACI,eAAA,CAIR,mBACI,eAAA,CACA,gBAAA,CAGJ,WACI,mBAAA,CACA,eAAA,CACA,wDAAA,CACA,2BAAA,CACA,iBAAA,CACA,WAAA,CACA,WAAA,CACA,UAAA,CACA,OAAA,CACA,UAAA,CACA,WAAA,CAEA,iBACI,cAAA",
            sourcesContent: [
              '.popup__item {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background: rgba(41, 41, 41, 0.6);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.popup__item-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    background-color: #fff;\r\n    padding: 2%;\r\n    width: max-content;\r\n\r\n    @media (max-width: 750px) {\r\n        flex-direction: column;\r\n        max-height: 100vh;\r\n    }\r\n}\r\n\r\n.popup__item-img {\r\n    max-width: 50%;\r\n    \r\n    @media (max-width: 750px) {\r\n        max-width: 80%;\r\n    }\r\n}\r\n.popup__item-description {\r\n    position: relative;\r\n    background-color: #fff;\r\n    min-width: 30%;\r\n    padding: 2%;\r\n\r\n    @media (max-width: 750px) {\r\n        width: 90%;\r\n    }\r\n    \r\n}\r\n\r\n.popup__item-title {\r\n    font-size: 2rem;\r\n}\r\n\r\n.popup__item-header {\r\n    font-weight: 700;\r\n\r\n    span {\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n.popup__item-price {\r\n    font-weight: 700;\r\n    font-size: larger;\r\n}\r\n\r\n.btn-cross {\r\n    align-self: flex-end;\r\n    background: none;\r\n    background-image: url("../../../assets/svg/remove.svg");\r\n    background-repeat: no-repeat;\r\n    position: absolute;\r\n    border: none;\r\n    height: 52px;\r\n    width: 52px;\r\n    top: -3%;\r\n    right: -10%;\r\n    margin: auto;\r\n\r\n    &:hover {\r\n        cursor: pointer;\r\n    }\r\n}\r\n',
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
              "AAAA,QACI,YAAA,CACA,gBAAA,CACA,kBAAA,CACA,QAAA,CACA,eAAA,CACA,WAAA,CACA,qBAAA,CACA,kBAAA,CAEA,yBAVJ,QAWQ,eAAA,CAAA,CAGJ,YACI,cAAA,CAKR,cACI,WAAA,CACA,WAAA,CAEA,yBAJJ,cAKQ,eAAA,CAAA,CAGJ,oBACI,YAAA,CAKJ,qBACI,cAAA,CAIR,OACI,aAAA,CACA,iBAAA,CACA,gBAAA,CACA,cAAA",
            sourcesContent: [
              ".search {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    gap: 10px;\r\n    min-width: 300px;\r\n    padding: 5px;\r\n    border: 1px solid black;\r\n    border-radius: 10px;\r\n\r\n    @media (max-width: 750px) {\r\n        min-width: 250px;\r\n    }\r\n\r\n    img {\r\n        max-width: 24px;\r\n    }\r\n\r\n}\r\n\r\n.search-input {\r\n    border: none;\r\n    padding: 5px;\r\n\r\n    @media (max-width: 750px) {\r\n        max-width: 170px;\r\n    }\r\n\r\n    &:focus {\r\n        outline: none;\r\n    }\r\n}\r\n\r\n.search-remove {\r\n    &:hover {\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.error {\r\n    margin-top: 2%;\r\n    text-align: center;\r\n    line-height: 2rem;\r\n    font-size: 2rem;\r\n}\r\n",
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
              "AAAA,QACI,YAAA,CACA,qBAAA,CACA,iBAAA,CAEA,UACI,YAAA,CACA,6BAAA,CACA,kBAAA,CAIR,kBACI,uBAAA,CACA,eAAA,CACA,UAAA,CACA,UAAA,CACA,iBAAA,CACA,wBAAA,CACA,mBAAA,CAEA,wBACI,cAAA,CAIR,wCACI,kBAAA,CACA,uBAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,iBAAA,CACA,4BAAA,CACA,cAAA,CAGJ,oCACI,kBAAA,CACA,uBAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,iBAAA,CACA,4BAAA,CACA,cAAA,CAGJ,6BACI,kBAAA,CACA,uBAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,iBAAA,CACA,4BAAA,CACA,cAAA,CAGJ,8CACI,kBAAA,CAGJ,+CACI,gDAAA,CACA,wDAAA,CAGJ,qBACI,QAAA,CACA,SAAA",
            sourcesContent: [
              '.slider {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n    \r\n    p {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-self: stretch;\r\n    }\r\n}\r\n\r\ninput[type="range"] {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    height: 2px;\r\n    width: 100%;\r\n    position: absolute;\r\n    background-color: #C6C6C6;\r\n    pointer-events: none;\r\n\r\n    &:hover {\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\ninput[type="range"]::-webkit-slider-thumb {\r\n    pointer-events: all;\r\n    -webkit-appearance: none;\r\n    width: 24px;\r\n    height: 24px;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 0 1px #C6C6C6;\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type="range"]::-moz-range-thumb {\r\n    pointer-events: all;\r\n    -webkit-appearance: none;\r\n    width: 24px;\r\n    height: 24px;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 0 1px #C6C6C6;\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type="range"]::-ms-thumb {\r\n    pointer-events: all;\r\n    -webkit-appearance: none;\r\n    width: 24px;\r\n    height: 24px;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 0 1px #C6C6C6;\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-thumb:hover {\r\n    background: #f7f7f7;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-thumb:active {\r\n    box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;\r\n    -webkit-box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;\r\n}\r\n\r\n.slider__input-first {\r\n    height: 0;\r\n    z-index: 1;\r\n}\r\n',
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
            '*{box-sizing:border-box;line-height:1.5rem}body{font-family:"Mingzat",sans-serif;display:flex;flex-wrap:wrap;justify-content:center}header{display:flex;justify-content:space-between;align-items:center;background-color:#fff;color:#13315c;width:90%;margin:0 auto 5%;padding:2%;letter-spacing:4px;box-shadow:rgba(11,38,70,.4) 0px 5px,rgba(19,49,92,.3) 0px 10px,rgba(19,64,116,.2) 0px 15px,rgba(141,169,196,.3) 0px 20px,rgba(141,169,196,.1) 0px 25px}@media(max-width: 620px){header{flex-direction:column}}header .logo{display:flex;gap:20px;align-items:center;text-transform:uppercase}header .logo img{max-height:100px}@media(max-width: 750px){header .logo img{max-height:80px}}header .logo h1{line-height:2.5rem;max-width:fit-content}@media(max-width: 900px){header .logo h1{font-size:1.5rem;line-height:2rem}}@media(max-width: 750px){header .logo h1{max-width:fit-content}}.cart img{width:35px}aside{display:flex;flex-direction:column;width:20%;justify-self:flex-start}aside .btn{margin-bottom:10px}@media(max-width: 820px){aside{width:30%}}@media(max-width: 520px){aside{flex-direction:row;width:90%}}.btn{border-radius:.5rem;padding:5% 10%;width:max-content;color:#eef4ed;text-transform:uppercase;border:none;box-shadow:rgba(0,0,0,.1) 0px 0px 5px 0px,rgba(0,0,0,.1) 0px 0px 1px 0px;transition:.3s;background-color:#8da9c4}.btn:hover{cursor:pointer;background-color:#6b90b3}.btn:active{transform:translateY(4px)}.aside-button{background-color:#003049}.aside-button:hover{background-color:#000e16}.filter-label{margin-top:5%;font-size:1.2rem}main{display:flex;min-height:68vh;width:70%}@media(max-width: 820px){main{width:60%}}@media(max-width: 520px){main{width:90%}}footer{display:flex;align-items:center;justify-content:space-between;gap:5px;flex-wrap:wrap;width:90%;height:100px;margin:0 auto;font-size:1rem;background-color:#13315c;color:#e5e5e5;padding:1%}footer a{text-decoration:none;font-size:1.2rem;color:#e5e5e5}@media(max-width: 650px){footer{flex-direction:column;justify-content:center}}',
            "",
            {
              version: 3,
              sources: ["webpack://./src/scss/global.scss"],
              names: [],
              mappings:
                "AAEA,EACI,qBAAA,CACA,kBAAA,CAGJ,KACI,gCAAA,CACA,YAAA,CACA,cAAA,CACA,sBAAA,CAIJ,OACI,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,qBAAA,CACA,aAAA,CACA,SAAA,CACA,gBAAA,CACA,UAAA,CACA,kBAAA,CACA,uJAAA,CAEA,yBAZJ,OAaQ,qBAAA,CAAA,CAGJ,aACI,YAAA,CACA,QAAA,CACA,kBAAA,CACA,wBAAA,CAEA,iBACI,gBAAA,CAEA,yBAHJ,iBAIQ,eAAA,CAAA,CAIR,gBACI,kBAAA,CACA,qBAAA,CAEA,yBAJJ,gBAKQ,gBAAA,CACA,gBAAA,CAAA,CAGJ,yBATJ,gBAUQ,qBAAA,CAAA,CAQhB,UACI,UAAA,CAGJ,MACI,YAAA,CACA,qBAAA,CACA,SAAA,CACA,uBAAA,CAEA,WACI,kBAAA,CAGJ,yBAVJ,MAWQ,SAAA,CAAA,CAGJ,yBAdJ,MAeQ,kBAAA,CACA,SAAA,CAAA,CAIR,KACI,mBAAA,CACA,cAAA,CACA,iBAAA,CACA,aAAA,CACA,wBAAA,CACA,WAAA,CACA,wEAAA,CACA,cAAA,CACA,wBAAA,CAEA,WACI,cAAA,CACA,wBAAA,CAGJ,YACI,yBAAA,CAKR,cACI,wBAAA,CAEA,oBACI,wBAAA,CAIR,cACI,aAAA,CACA,gBAAA,CAGJ,KACI,YAAA,CACA,eAAA,CACA,SAAA,CAEA,yBALJ,KAMQ,SAAA,CAAA,CAGJ,yBATJ,KAUQ,SAAA,CAAA,CAMR,OACI,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,OAAA,CACA,cAAA,CACA,SAAA,CACA,YAAA,CACA,aAAA,CACA,cAAA,CACA,wBAAA,CACA,aAAA,CACA,UAAA,CAEA,SACI,oBAAA,CACA,gBAAA,CACA,aAAA,CAGJ,yBApBJ,OAqBQ,qBAAA,CACA,sBAAA,CAAA",
              sourcesContent: [
                "@import url('https://fonts.googleapis.com/css2?family=Mingzat&family=Raleway:wght@400;700&display=swap');\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    line-height: 1.5rem;\r\n}\r\n\r\nbody {\r\n    font-family: 'Mingzat', sans-serif;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    \r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background-color: #fff;\r\n    color: #13315c;\r\n    width: 90%;\r\n    margin: 0 auto 5%;\r\n    padding: 2%;\r\n    letter-spacing: 4px;\r\n    box-shadow: rgba(11, 38, 70, 0.4) 0px 5px, rgba(19, 49, 92, 0.3) 0px 10px, rgba(19, 64, 116, 0.2) 0px 15px, rgba(141, 169, 196,0.3) 0px 20px, rgba(141, 169, 196, 0.1) 0px 25px;\r\n\r\n    @media (max-width: 620px) {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .logo {\r\n        display: flex;\r\n        gap: 20px;\r\n        align-items: center;\r\n        text-transform: uppercase;\r\n\r\n        img {\r\n            max-height: 100px;\r\n\r\n            @media (max-width: 750px) {\r\n                max-height: 80px;\r\n            }\r\n        }\r\n\r\n        h1 {\r\n            line-height: 2.5rem;\r\n            max-width: fit-content;\r\n\r\n            @media (max-width: 900px) {\r\n                font-size: 1.5rem;\r\n                line-height: 2rem;\r\n            }\r\n\r\n            @media (max-width: 750px) {\r\n                max-width: fit-content;\r\n            }\r\n\r\n        }\r\n    }\r\n    \r\n}\r\n\r\n.cart img {\r\n    width: 35px;\r\n}\r\n\r\naside {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 20%;\r\n    justify-self: flex-start;\r\n\r\n    .btn {\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    @media (max-width: 820px) {\r\n        width: 30%;\r\n    }\r\n\r\n    @media (max-width: 520px) {\r\n        flex-direction: row;\r\n        width: 90%;\r\n    }\r\n}\r\n\r\n.btn {\r\n    border-radius: 0.5rem;\r\n    padding: 5% 10%;\r\n    width: max-content;\r\n    color: #eef4ed;\r\n    text-transform: uppercase;\r\n    border: none;\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;\r\n    transition: 0.3s;\r\n    background-color: #8da9c4;\r\n\r\n    &:hover {\r\n        cursor: pointer;\r\n        background-color: darken($color: #8da9c4, $amount: 10%);\r\n    }\r\n\r\n    &:active {\r\n        transform: translateY(4px);\r\n    }\r\n\r\n}\r\n\r\n.aside-button {\r\n    background-color: #003049;\r\n\r\n    &:hover {\r\n        background-color: darken($color: #003049, $amount: 10%);\r\n    }\r\n}\r\n\r\n.filter-label {\r\n    margin-top: 5%;\r\n    font-size: 1.2rem;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    min-height: 68vh;\r\n    width: 70%;\r\n    \r\n    @media (max-width: 820px) {\r\n        width: 60%;\r\n    }\r\n\r\n    @media (max-width: 520px) {\r\n        width: 90%;\r\n    }\r\n}\r\n\r\n\r\n\r\nfooter {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 5px;\r\n    flex-wrap: wrap;\r\n    width: 90%;\r\n    height: 100px;\r\n    margin: 0 auto;\r\n    font-size: 1rem;\r\n    background-color: #13315c;\r\n    color: #e5e5e5;\r\n    padding: 1%;\r\n\r\n    a {\r\n        text-decoration: none;\r\n        font-size: 1.2rem;\r\n        color:#e5e5e5 ;\r\n    }\r\n\r\n    @media (max-width: 650px) {\r\n        flex-direction: column;\r\n        justify-content: center;\r\n    }\r\n}\r\n",
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
                    var C = c.querySelector(".popup__item-color");
                    C && (C.innerHTML += a.color);
                    var g = c.querySelector(".popup__item-brush");
                    g && (g.innerHTML += a.brush);
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
                  var C = o.querySelector(".card__item-btn--more");
                  C &&
                    C.addEventListener("click", function (r) {
                      return e.popup.createPopup(r);
                    }),
                    n.append(o);
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
      var g = n(818);
      e()(g.Z, { insert: "head", singleton: !1 }), g.Z.locals;
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
          (this.priceSlider = new C(".price-slider")),
            (this.yearSlider = new C(".year-slider")),
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
                      ? (r.priceSlider.setRangeFilter(), r.priceSlider.draw())
                      : (r.yearSlider.setRangeFilter(), r.yearSlider.draw()),
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
      var B = n(483);
      e()(B.Z, { insert: "head", singleton: !1 }), B.Z.locals, new x().start();
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXJkL2NhcmQuc2NzcyIsIndlYnBhY2s6Ly9AcnNzY2hvb2wvb25saW5lc3RvcmUvLi9zcmMvY29tcG9uZW50cy92aWV3L2NhcnQvY2FydC5zY3NzIiwid2VicGFjazovL0Byc3NjaG9vbC9vbmxpbmVzdG9yZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvZmF2b3JpdGVzL2Zhdm9yaXRlcy5zY3NzIiwid2VicGFjazovL0Byc3NjaG9vbC9vbmxpbmVzdG9yZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvcG9wdXAvcG9wdXAuc2NzcyIsIndlYnBhY2s6Ly9AcnNzY2hvb2wvb25saW5lc3RvcmUvLi9zcmMvY29tcG9uZW50cy92aWV3L3NlYXJjaC9zZWFyY2guc2NzcyIsIndlYnBhY2s6Ly9AcnNzY2hvb2wvb25saW5lc3RvcmUvLi9zcmMvY29tcG9uZW50cy92aWV3L3NsaWRlci9zbGlkZXIuc2NzcyIsIndlYnBhY2s6Ly9AcnNzY2hvb2wvb25saW5lc3RvcmUvLi9zcmMvc2Nzcy9nbG9iYWwuc2NzcyIsIndlYnBhY2s6Ly9AcnNzY2hvb2wvb25saW5lc3RvcmUvLi9zcmMvc2Nzcy9ub3JtYWxpemUuc2NzcyIsIndlYnBhY2s6Ly9AcnNzY2hvb2wvb25saW5lc3RvcmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0Byc3NjaG9vbC9vbmxpbmVzdG9yZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL0Byc3NjaG9vbC9vbmxpbmVzdG9yZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vQHJzc2Nob29sL29ubGluZXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0Byc3NjaG9vbC9vbmxpbmVzdG9yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AcnNzY2hvb2wvb25saW5lc3RvcmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQHJzc2Nob29sL29ubGluZXN0b3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AcnNzY2hvb2wvb25saW5lc3RvcmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9AcnNzY2hvb2wvb25saW5lc3RvcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AcnNzY2hvb2wvb25saW5lc3RvcmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vQHJzc2Nob29sL29ubGluZXN0b3JlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9AcnNzY2hvb2wvb25saW5lc3RvcmUvLi9zcmMvY29tcG9uZW50cy92aWV3L2Zhdm9yaXRlcy9mYXZvcml0ZXMuc2Nzcz81Y2RjIiwid2VicGFjazovL0Byc3NjaG9vbC9vbmxpbmVzdG9yZS8uL3NyYy9waWN0dXJlcy1saXN0LnRzIiwid2VicGFjazovL0Byc3NjaG9vbC9vbmxpbmVzdG9yZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvZmF2b3JpdGVzL2Zhdm9yaXRlcy50cyIsIndlYnBhY2s6Ly9AcnNzY2hvb2wvb25saW5lc3RvcmUvLi9zcmMvY29tcG9uZW50cy92aWV3L2ZpbHRlci9maWx0ZXIudHMiLCJ3ZWJwYWNrOi8vQHJzc2Nob29sL29ubGluZXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvdmlldy9wb3B1cC9wb3B1cC5zY3NzP2Y5ZWMiLCJ3ZWJwYWNrOi8vQHJzc2Nob29sL29ubGluZXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvdmlldy9wb3B1cC9wb3B1cC50cyIsIndlYnBhY2s6Ly9AcnNzY2hvb2wvb25saW5lc3RvcmUvLi9zcmMvY29tcG9uZW50cy92aWV3L3NvcnQvc29ydC50cyIsIndlYnBhY2s6Ly9AcnNzY2hvb2wvb25saW5lc3RvcmUvLi9zcmMvY29tcG9uZW50cy92aWV3L2NhcmQvY2FyZC5zY3NzP2E2NTkiLCJ3ZWJwYWNrOi8vQHJzc2Nob29sL29ubGluZXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXJkL2NhcmQudHMiLCJ3ZWJwYWNrOi8vQHJzc2Nob29sL29ubGluZXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zZWFyY2gvc2VhcmNoLnNjc3M/NDQyNiIsIndlYnBhY2s6Ly9AcnNzY2hvb2wvb25saW5lc3RvcmUvLi9zcmMvY29tcG9uZW50cy92aWV3L3NlYXJjaC9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vQHJzc2Nob29sL29ubGluZXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zbGlkZXIvc2xpZGVyLnNjc3M/ZTlmYyIsIndlYnBhY2s6Ly9AcnNzY2hvb2wvb25saW5lc3RvcmUvLi9zcmMvY29tcG9uZW50cy92aWV3L3NsaWRlci9zbGlkZXIudHMiLCJ3ZWJwYWNrOi8vQHJzc2Nob29sL29ubGluZXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXJ0L2NhcnQuc2Nzcz9lNDU5Iiwid2VicGFjazovL0Byc3NjaG9vbC9vbmxpbmVzdG9yZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY2FydC9jYXJ0LnRzIiwid2VicGFjazovL0Byc3NjaG9vbC9vbmxpbmVzdG9yZS8uL3NyYy9jb21wb25lbnRzL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vQHJzc2Nob29sL29ubGluZXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvYXBwL2RvbmUudHMiLCJ3ZWJwYWNrOi8vQHJzc2Nob29sL29ubGluZXN0b3JlLy4vc3JjL3Njc3Mvbm9ybWFsaXplLnNjc3M/MjIyYiIsIndlYnBhY2s6Ly9AcnNzY2hvb2wvb25saW5lc3RvcmUvLi9zcmMvc2Nzcy9nbG9iYWwuc2Nzcz84ODA0Iiwid2VicGFjazovL0Byc3NjaG9vbC9vbmxpbmVzdG9yZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1pbmd6YXQmZmFtaWx5PVJhbGV3YXk6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9kdWN0c3tkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7ZmxleC13cmFwOndyYXA7bWFyZ2luLXRvcDoxMHB4O3BhZGRpbmc6MCAyJTt0cmFuc2l0aW9uOi4zc30uY2FyZF9faXRlbXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDoxMHB4O2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW4tYm90dG9tOjUlO2JhY2tncm91bmQtY29sb3I6I2ZmZjtwYWRkaW5nOjIlO2JveC1zaGFkb3c6cmdiYSgwLDAsMCwuMTUpIDIuNHB4IDIuNHB4IDMuMnB4O2JvcmRlci1yYWRpdXM6MXJlbTttaW4td2lkdGg6MjEwcHh9QG1lZGlhKG1heC13aWR0aDogOTIwcHgpey5jYXJkX19pdGVte21pbi13aWR0aDoyNzVweH19QG1lZGlhKG1heC13aWR0aDogODUwcHgpey5jYXJkX19pdGVte21pbi13aWR0aDoyNjBweH19QG1lZGlhKG1heC13aWR0aDogODIwcHgpey5jYXJkX19pdGVte2ZsZXgtZGlyZWN0aW9uOnJvdzt3aWR0aDo4MCU7bWFyZ2luOjAgYXV0byA1JX19QG1lZGlhKG1heC13aWR0aDogNTIwcHgpey5jYXJkX19pdGVte3dpZHRoOjk1JX19LmNhcmRfX2l0ZW0tZGVzY3JpcHRpb257ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjEwcHh9LmNhcmRfX2l0ZW0tZGVzY3JpcHRpb24gcHttYXJnaW46MDt0ZXh0LWFsaWduOmNlbnRlcn1AbWVkaWEobWF4LXdpZHRoOiA2NTBweCl7LmNhcmRfX2l0ZW0tZGVzY3JpcHRpb257d2lkdGg6ODAlO21hcmdpbjowIGF1dG8gNSV9fS5jYXJkX19pdGVtLXRpdGxle2NvbG9yOiMwYjI1NDU7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToxLjVyZW07Zm9udC1mYW1pbHk6XFxcIlJhbGV3YXlcXFwiLHNhbnMtc2VyaWZ9LmNhcmRfX2l0ZW0tcHJpY2V7Zm9udC13ZWlnaHQ6NzAwfS5jYXJkX19pdGVtLXByaWNlX3NhbGV7dGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtmb250LXdlaWdodDo0MDB9LmNhcmRfX2l0ZW1fc2FsZS1wcmljZXtmb250LXdlaWdodDo3MDA7Y29sb3I6Izc4MDAwMDtmb250LXNpemU6bGFyZ2VyO21hcmdpbi1sZWZ0OjVweH0uY2FyZF9faXRlbV9zYWxlLXBlcmNlbnR7ZGlzcGxheTppbmxpbmUtYmxvY2s7YmFja2dyb3VuZC1jb2xvcjojZmNhMzExO2NvbG9yOiNmZmY7bGV0dGVyLXNwYWNpbmc6MXB4O2ZvbnQtc2l6ZTpzbWFsbGVyO2JvcmRlci1yYWRpdXM6NXB4O3BhZGRpbmc6M3B4O21hcmdpbi1sZWZ0OjVweH0uY2FyZF9faXRlbS1pbWd7bWF4LXdpZHRoOjE1dnc7dHJhbnNpdGlvbjouM3N9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXJkL2NhcmQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxVQUNJLFlBQUEsQ0FDQSxrQkFBQSxDQUNBLDZCQUFBLENBQ0Esc0JBQUEsQ0FDQSxjQUFBLENBQ0EsZUFBQSxDQUNBLFlBQUEsQ0FDQSxjQUFBLENBR0osWUFDSSxZQUFBLENBQ0EscUJBQUEsQ0FDQSxRQUFBLENBQ0Esa0JBQUEsQ0FDQSxnQkFBQSxDQUNBLHFCQUFBLENBQ0EsVUFBQSxDQUNBLDRDQUFBLENBQ0Esa0JBQUEsQ0FDQSxlQUFBLENBRUEseUJBWkosWUFhUSxlQUFBLENBQUEsQ0FHSix5QkFoQkosWUFpQlEsZUFBQSxDQUFBLENBR0oseUJBcEJKLFlBcUJRLGtCQUFBLENBQ0EsU0FBQSxDQUNBLGdCQUFBLENBQUEsQ0FHSix5QkExQkosWUEyQlEsU0FBQSxDQUFBLENBSVIsd0JBQ0ksWUFBQSxDQUNBLHFCQUFBLENBQ0Esa0JBQUEsQ0FDQSxRQUFBLENBRUEsMEJBQ0ksUUFBQSxDQUNBLGlCQUFBLENBR0oseUJBWEosd0JBWVEsU0FBQSxDQUNBLGdCQUFBLENBQUEsQ0FJUixrQkFDSSxhQUFBLENBQ0EsZUFBQSxDQUNBLGdCQUFBLENBQ0EsZ0NBQUEsQ0FHSixrQkFDSSxlQUFBLENBR0osdUJBQ0ksNEJBQUEsQ0FDQSxlQUFBLENBR0osdUJBQ0ksZUFBQSxDQUNBLGFBQUEsQ0FDQSxnQkFBQSxDQUNBLGVBQUEsQ0FHSix5QkFDSSxvQkFBQSxDQUNBLHdCQUFBLENBQ0EsVUFBQSxDQUNBLGtCQUFBLENBQ0EsaUJBQUEsQ0FDQSxpQkFBQSxDQUNBLFdBQUEsQ0FDQSxlQUFBLENBR0osZ0JBQ0ksY0FBQSxDQUNBLGNBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWluZ3phdCZmYW1pbHk9UmFsZXdheTp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuLnByb2R1Y3RzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDIlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9faXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDIlO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDIuNHB4IDIuNHB4IDMuMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBtaW4td2lkdGg6IDIxMHB4O1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogMjc1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxyXFxuICAgICAgICBtaW4td2lkdGg6IDI2MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0byA1JTtcXHJcXG4gICAgfVxcclxcbiAgICAgICAgXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xcclxcbiAgICAgICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9faXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNSU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2l0ZW0tdGl0bGUge1xcclxcbiAgICBjb2xvcjogIzBiMjU0NTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkX19pdGVtLXByaWNlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2l0ZW0tcHJpY2Vfc2FsZSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9faXRlbV9zYWxlLXByaWNlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgY29sb3I6ICM3ODAwMDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9faXRlbV9zYWxlLXBlcmNlbnQge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2EzMTE7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcGFkZGluZzogM3B4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZF9faXRlbS1pbWcge1xcclxcbiAgICBtYXgtd2lkdGg6IDE1dnc7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJ0IHNwYW57bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5jYXJ0LXdhcm5pbmd7cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7YmFja2dyb3VuZDpyZ2JhKDQxLDQxLDQxLC42KTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmNhcnQtd2FybmluZ19fY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQtY29sb3I6I2ZmZjtwYWRkaW5nOjMlO2JvcmRlci1yYWRpdXM6NXB4fS5jYXJ0LXdhcm5pbmdfX2NvbnRhaW5lciAuYnRuLWNyb3Nze3RvcDo1cHg7cmlnaHQ6LTEwcHh9LmhpZGRlbntkaXNwbGF5Om5vbmV9LmNhcmRfX2l0ZW0tYnRuLS1yZW1vdmV7cGFkZGluZzo1JTtmb250LXNpemU6c21hbGxlcn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NhcnQvY2FydC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNJLFdBQ0kscUJBQUEsQ0FLUixjQUNJLGNBQUEsQ0FDQSxLQUFBLENBQ0EsT0FBQSxDQUNBLFFBQUEsQ0FDQSxNQUFBLENBQ0EsNEJBQUEsQ0FDQSxZQUFBLENBQ0Esa0JBQUEsQ0FDQSxzQkFBQSxDQUlKLHlCQUNJLGlCQUFBLENBQ0EscUJBQUEsQ0FDQSxVQUFBLENBQ0EsaUJBQUEsQ0FFQSxvQ0FDSSxPQUFBLENBQ0EsV0FBQSxDQUlSLFFBQ0ksWUFBQSxDQUdKLHdCQUNJLFVBQUEsQ0FDQSxpQkFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2FydCB7XFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY2FydC13YXJuaW5nIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDEsIDQxLCA0MSwgMC42KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jYXJ0LXdhcm5pbmdfX2NvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMyU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgLmJ0bi1jcm9zcyB7XFxyXFxuICAgICAgICB0b3A6IDVweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAtMTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX2l0ZW0tYnRuLS1yZW1vdmUge1xcclxcbiAgICBwYWRkaW5nOiA1JTtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZmF2LWJ0bntiYWNrZ3JvdW5kOm5vbmU7Ym9yZGVyOm5vbmU7d2lkdGg6MzVweH0uZmF2LWJ0bjpob3ZlcntjdXJzb3I6cG9pbnRlcjt0cmFuc2Zvcm06c2NhbGUoMS4yKX0uZmF2LWJ0biBpbWd7d2lkdGg6MTAwJX1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy92aWV3L2Zhdm9yaXRlcy9mYXZvcml0ZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxTQUNJLGVBQUEsQ0FDQSxXQUFBLENBQ0EsVUFBQSxDQUVBLGVBQ0ksY0FBQSxDQUNBLG9CQUFBLENBR0osYUFDSSxVQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mYXYtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGltZ3tcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9zdmcvcmVtb3ZlLnN2Z1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wb3B1cF9faXRlbXtwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtiYWNrZ3JvdW5kOnJnYmEoNDEsNDEsNDEsLjYpO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ucG9wdXBfX2l0ZW0tY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2JhY2tncm91bmQtY29sb3I6I2ZmZjtwYWRkaW5nOjIlO3dpZHRoOm1heC1jb250ZW50fUBtZWRpYShtYXgtd2lkdGg6IDc1MHB4KXsucG9wdXBfX2l0ZW0tY29udGFpbmVye2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXgtaGVpZ2h0OjEwMHZofX0ucG9wdXBfX2l0ZW0taW1ne21heC13aWR0aDo1MCV9QG1lZGlhKG1heC13aWR0aDogNzUwcHgpey5wb3B1cF9faXRlbS1pbWd7bWF4LXdpZHRoOjgwJX19LnBvcHVwX19pdGVtLWRlc2NyaXB0aW9ue3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQtY29sb3I6I2ZmZjttaW4td2lkdGg6MzAlO3BhZGRpbmc6MiV9QG1lZGlhKG1heC13aWR0aDogNzUwcHgpey5wb3B1cF9faXRlbS1kZXNjcmlwdGlvbnt3aWR0aDo5MCV9fS5wb3B1cF9faXRlbS10aXRsZXtmb250LXNpemU6MnJlbX0ucG9wdXBfX2l0ZW0taGVhZGVye2ZvbnQtd2VpZ2h0OjcwMH0ucG9wdXBfX2l0ZW0taGVhZGVyIHNwYW57Zm9udC13ZWlnaHQ6NDAwfS5wb3B1cF9faXRlbS1wcmljZXtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOmxhcmdlcn0uYnRuLWNyb3Nze2FsaWduLXNlbGY6ZmxleC1lbmQ7YmFja2dyb3VuZDpub25lO2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyOm5vbmU7aGVpZ2h0OjUycHg7d2lkdGg6NTJweDt0b3A6LTMlO3JpZ2h0Oi0xMCU7bWFyZ2luOmF1dG99LmJ0bi1jcm9zczpob3ZlcntjdXJzb3I6cG9pbnRlcn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy92aWV3L3BvcHVwL3BvcHVwLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsYUFDSSxjQUFBLENBQ0EsS0FBQSxDQUNBLE9BQUEsQ0FDQSxRQUFBLENBQ0EsTUFBQSxDQUNBLDRCQUFBLENBQ0EsWUFBQSxDQUNBLGtCQUFBLENBQ0Esc0JBQUEsQ0FHSix1QkFDSSxZQUFBLENBQ0Esa0JBQUEsQ0FDQSxrQkFBQSxDQUNBLDZCQUFBLENBQ0EscUJBQUEsQ0FDQSxVQUFBLENBQ0EsaUJBQUEsQ0FFQSx5QkFUSix1QkFVUSxxQkFBQSxDQUNBLGdCQUFBLENBQUEsQ0FJUixpQkFDSSxhQUFBLENBRUEseUJBSEosaUJBSVEsYUFBQSxDQUFBLENBR1IseUJBQ0ksaUJBQUEsQ0FDQSxxQkFBQSxDQUNBLGFBQUEsQ0FDQSxVQUFBLENBRUEseUJBTkoseUJBT1EsU0FBQSxDQUFBLENBS1IsbUJBQ0ksY0FBQSxDQUdKLG9CQUNJLGVBQUEsQ0FFQSx5QkFDSSxlQUFBLENBSVIsbUJBQ0ksZUFBQSxDQUNBLGdCQUFBLENBR0osV0FDSSxtQkFBQSxDQUNBLGVBQUEsQ0FDQSx3REFBQSxDQUNBLDJCQUFBLENBQ0EsaUJBQUEsQ0FDQSxXQUFBLENBQ0EsV0FBQSxDQUNBLFVBQUEsQ0FDQSxPQUFBLENBQ0EsVUFBQSxDQUNBLFdBQUEsQ0FFQSxpQkFDSSxjQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wb3B1cF9faXRlbSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQxLCA0MSwgNDEsIDAuNik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2l0ZW0tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAyJTtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2l0ZW0taW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxyXFxuICAgIFxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogODAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5wb3B1cF9faXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgbWluLXdpZHRoOiAzMCU7XFxyXFxuICAgIHBhZGRpbmc6IDIlO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9faXRlbS10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19pdGVtLWhlYWRlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2l0ZW0tcHJpY2Uge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jcm9zcyB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uLy4uLy4uL2Fzc2V0cy9zdmcvcmVtb3ZlLnN2Z1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiA1MnB4O1xcclxcbiAgICB3aWR0aDogNTJweDtcXHJcXG4gICAgdG9wOiAtMyU7XFxyXFxuICAgIHJpZ2h0OiAtMTAlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zZWFyY2h7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDpub3dyYXA7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMHB4O21pbi13aWR0aDozMDBweDtwYWRkaW5nOjVweDtib3JkZXI6MXB4IHNvbGlkICMwMDA7Ym9yZGVyLXJhZGl1czoxMHB4fUBtZWRpYShtYXgtd2lkdGg6IDc1MHB4KXsuc2VhcmNoe21pbi13aWR0aDoyNTBweH19LnNlYXJjaCBpbWd7bWF4LXdpZHRoOjI0cHh9LnNlYXJjaC1pbnB1dHtib3JkZXI6bm9uZTtwYWRkaW5nOjVweH1AbWVkaWEobWF4LXdpZHRoOiA3NTBweCl7LnNlYXJjaC1pbnB1dHttYXgtd2lkdGg6MTcwcHh9fS5zZWFyY2gtaW5wdXQ6Zm9jdXN7b3V0bGluZTpub25lfS5zZWFyY2gtcmVtb3ZlOmhvdmVye2N1cnNvcjpwb2ludGVyfS5lcnJvcnttYXJnaW4tdG9wOjIlO3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0OjJyZW07Zm9udC1zaXplOjJyZW19XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zZWFyY2gvc2VhcmNoLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsUUFDSSxZQUFBLENBQ0EsZ0JBQUEsQ0FDQSxrQkFBQSxDQUNBLFFBQUEsQ0FDQSxlQUFBLENBQ0EsV0FBQSxDQUNBLHFCQUFBLENBQ0Esa0JBQUEsQ0FFQSx5QkFWSixRQVdRLGVBQUEsQ0FBQSxDQUdKLFlBQ0ksY0FBQSxDQUtSLGNBQ0ksV0FBQSxDQUNBLFdBQUEsQ0FFQSx5QkFKSixjQUtRLGVBQUEsQ0FBQSxDQUdKLG9CQUNJLFlBQUEsQ0FLSixxQkFDSSxjQUFBLENBSVIsT0FDSSxhQUFBLENBQ0EsaUJBQUEsQ0FDQSxnQkFBQSxDQUNBLGNBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNlYXJjaCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcclxcbiAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAyNHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtaW5wdXQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDE3MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6Zm9jdXMge1xcclxcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlbW92ZSB7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5lcnJvciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zbGlkZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwb3NpdGlvbjpyZWxhdGl2ZX0uc2xpZGVyIHB7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLXNlbGY6c3RyZXRjaH1pbnB1dFt0eXBlPXJhbmdlXXstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7aGVpZ2h0OjJweDt3aWR0aDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQtY29sb3I6I2M2YzZjNjtwb2ludGVyLWV2ZW50czpub25lfWlucHV0W3R5cGU9cmFuZ2VdOmhvdmVye2N1cnNvcjpwb2ludGVyfWlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYntwb2ludGVyLWV2ZW50czphbGw7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNoYWRvdzowIDAgMCAxcHggI2M2YzZjNjtjdXJzb3I6cG9pbnRlcn1pbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10aHVtYntwb2ludGVyLWV2ZW50czphbGw7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNoYWRvdzowIDAgMCAxcHggI2M2YzZjNjtjdXJzb3I6cG9pbnRlcn1pbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRodW1ie3BvaW50ZXItZXZlbnRzOmFsbDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTt3aWR0aDoyNHB4O2hlaWdodDoyNHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjUwJTtib3gtc2hhZG93OjAgMCAwIDFweCAjYzZjNmM2O2N1cnNvcjpwb2ludGVyfWlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYjpob3ZlcntiYWNrZ3JvdW5kOiNmN2Y3Zjd9aW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iOmFjdGl2ZXtib3gtc2hhZG93Omluc2V0IDAgMCAzcHggIzM4N2JiZSwwIDAgOXB4ICMzODdiYmU7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMCAzcHggIzM4N2JiZSwwIDAgOXB4ICMzODdiYmV9LnNsaWRlcl9faW5wdXQtZmlyc3R7aGVpZ2h0OjA7ei1pbmRleDoxfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc2xpZGVyL3NsaWRlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFFBQ0ksWUFBQSxDQUNBLHFCQUFBLENBQ0EsaUJBQUEsQ0FFQSxVQUNJLFlBQUEsQ0FDQSw2QkFBQSxDQUNBLGtCQUFBLENBSVIsa0JBQ0ksdUJBQUEsQ0FDQSxlQUFBLENBQ0EsVUFBQSxDQUNBLFVBQUEsQ0FDQSxpQkFBQSxDQUNBLHdCQUFBLENBQ0EsbUJBQUEsQ0FFQSx3QkFDSSxjQUFBLENBSVIsd0NBQ0ksa0JBQUEsQ0FDQSx1QkFBQSxDQUNBLFVBQUEsQ0FDQSxXQUFBLENBQ0EscUJBQUEsQ0FDQSxpQkFBQSxDQUNBLDRCQUFBLENBQ0EsY0FBQSxDQUdKLG9DQUNJLGtCQUFBLENBQ0EsdUJBQUEsQ0FDQSxVQUFBLENBQ0EsV0FBQSxDQUNBLHFCQUFBLENBQ0EsaUJBQUEsQ0FDQSw0QkFBQSxDQUNBLGNBQUEsQ0FHSiw2QkFDSSxrQkFBQSxDQUNBLHVCQUFBLENBQ0EsVUFBQSxDQUNBLFdBQUEsQ0FDQSxxQkFBQSxDQUNBLGlCQUFBLENBQ0EsNEJBQUEsQ0FDQSxjQUFBLENBR0osOENBQ0ksa0JBQUEsQ0FHSiwrQ0FDSSxnREFBQSxDQUNBLHdEQUFBLENBR0oscUJBQ0ksUUFBQSxDQUNBLFNBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNsaWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgXFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDNkM2QzY7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI0M2QzZDNjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjQzZDNkM2O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi1tcy10aHVtYiB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI0M2QzZDNjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWI6YWN0aXZlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAjMzg3YmJlLCAwIDAgOXB4ICMzODdiYmU7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAjMzg3YmJlLCAwIDAgOXB4ICMzODdiYmU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXJfX2lucHV0LWZpcnN0IHtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NaW5nemF0JmZhbWlseT1SYWxld2F5OndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe2JveC1zaXppbmc6Ym9yZGVyLWJveDtsaW5lLWhlaWdodDoxLjVyZW19Ym9keXtmb250LWZhbWlseTpcXFwiTWluZ3phdFxcXCIsc2Fucy1zZXJpZjtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7anVzdGlmeS1jb250ZW50OmNlbnRlcn1oZWFkZXJ7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzEzMzE1Yzt3aWR0aDo5MCU7bWFyZ2luOjAgYXV0byA1JTtwYWRkaW5nOjIlO2xldHRlci1zcGFjaW5nOjRweDtib3gtc2hhZG93OnJnYmEoMTEsMzgsNzAsLjQpIDBweCA1cHgscmdiYSgxOSw0OSw5MiwuMykgMHB4IDEwcHgscmdiYSgxOSw2NCwxMTYsLjIpIDBweCAxNXB4LHJnYmEoMTQxLDE2OSwxOTYsLjMpIDBweCAyMHB4LHJnYmEoMTQxLDE2OSwxOTYsLjEpIDBweCAyNXB4fUBtZWRpYShtYXgtd2lkdGg6IDYyMHB4KXtoZWFkZXJ7ZmxleC1kaXJlY3Rpb246Y29sdW1ufX1oZWFkZXIgLmxvZ297ZGlzcGxheTpmbGV4O2dhcDoyMHB4O2FsaWduLWl0ZW1zOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9aGVhZGVyIC5sb2dvIGltZ3ttYXgtaGVpZ2h0OjEwMHB4fUBtZWRpYShtYXgtd2lkdGg6IDc1MHB4KXtoZWFkZXIgLmxvZ28gaW1ne21heC1oZWlnaHQ6ODBweH19aGVhZGVyIC5sb2dvIGgxe2xpbmUtaGVpZ2h0OjIuNXJlbTttYXgtd2lkdGg6Zml0LWNvbnRlbnR9QG1lZGlhKG1heC13aWR0aDogOTAwcHgpe2hlYWRlciAubG9nbyBoMXtmb250LXNpemU6MS41cmVtO2xpbmUtaGVpZ2h0OjJyZW19fUBtZWRpYShtYXgtd2lkdGg6IDc1MHB4KXtoZWFkZXIgLmxvZ28gaDF7bWF4LXdpZHRoOmZpdC1jb250ZW50fX0uY2FydCBpbWd7d2lkdGg6MzVweH1hc2lkZXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOjIwJTtqdXN0aWZ5LXNlbGY6ZmxleC1zdGFydH1hc2lkZSAuYnRue21hcmdpbi1ib3R0b206MTBweH1AbWVkaWEobWF4LXdpZHRoOiA4MjBweCl7YXNpZGV7d2lkdGg6MzAlfX1AbWVkaWEobWF4LXdpZHRoOiA1MjBweCl7YXNpZGV7ZmxleC1kaXJlY3Rpb246cm93O3dpZHRoOjkwJX19LmJ0bntib3JkZXItcmFkaXVzOi41cmVtO3BhZGRpbmc6NSUgMTAlO3dpZHRoOm1heC1jb250ZW50O2NvbG9yOiNlZWY0ZWQ7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2JvcmRlcjpub25lO2JveC1zaGFkb3c6cmdiYSgwLDAsMCwuMSkgMHB4IDBweCA1cHggMHB4LHJnYmEoMCwwLDAsLjEpIDBweCAwcHggMXB4IDBweDt0cmFuc2l0aW9uOi4zcztiYWNrZ3JvdW5kLWNvbG9yOiM4ZGE5YzR9LmJ0bjpob3ZlcntjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiM2YjkwYjN9LmJ0bjphY3RpdmV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNHB4KX0uYXNpZGUtYnV0dG9ue2JhY2tncm91bmQtY29sb3I6IzAwMzA0OX0uYXNpZGUtYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzAwMGUxNn0uZmlsdGVyLWxhYmVse21hcmdpbi10b3A6NSU7Zm9udC1zaXplOjEuMnJlbX1tYWlue2Rpc3BsYXk6ZmxleDttaW4taGVpZ2h0OjY4dmg7d2lkdGg6NzAlfUBtZWRpYShtYXgtd2lkdGg6IDgyMHB4KXttYWlue3dpZHRoOjYwJX19QG1lZGlhKG1heC13aWR0aDogNTIwcHgpe21haW57d2lkdGg6OTAlfX1mb290ZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtnYXA6NXB4O2ZsZXgtd3JhcDp3cmFwO3dpZHRoOjkwJTtoZWlnaHQ6MTAwcHg7bWFyZ2luOjAgYXV0bztmb250LXNpemU6MXJlbTtiYWNrZ3JvdW5kLWNvbG9yOiMxMzMxNWM7Y29sb3I6I2U1ZTVlNTtwYWRkaW5nOjElfWZvb3RlciBhe3RleHQtZGVjb3JhdGlvbjpub25lO2ZvbnQtc2l6ZToxLjJyZW07Y29sb3I6I2U1ZTVlNX1AbWVkaWEobWF4LXdpZHRoOiA2NTBweCl7Zm9vdGVye2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfX1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxFQUNJLHFCQUFBLENBQ0Esa0JBQUEsQ0FHSixLQUNJLGdDQUFBLENBQ0EsWUFBQSxDQUNBLGNBQUEsQ0FDQSxzQkFBQSxDQUlKLE9BQ0ksWUFBQSxDQUNBLDZCQUFBLENBQ0Esa0JBQUEsQ0FDQSxxQkFBQSxDQUNBLGFBQUEsQ0FDQSxTQUFBLENBQ0EsZ0JBQUEsQ0FDQSxVQUFBLENBQ0Esa0JBQUEsQ0FDQSx1SkFBQSxDQUVBLHlCQVpKLE9BYVEscUJBQUEsQ0FBQSxDQUdKLGFBQ0ksWUFBQSxDQUNBLFFBQUEsQ0FDQSxrQkFBQSxDQUNBLHdCQUFBLENBRUEsaUJBQ0ksZ0JBQUEsQ0FFQSx5QkFISixpQkFJUSxlQUFBLENBQUEsQ0FJUixnQkFDSSxrQkFBQSxDQUNBLHFCQUFBLENBRUEseUJBSkosZ0JBS1EsZ0JBQUEsQ0FDQSxnQkFBQSxDQUFBLENBR0oseUJBVEosZ0JBVVEscUJBQUEsQ0FBQSxDQVFoQixVQUNJLFVBQUEsQ0FHSixNQUNJLFlBQUEsQ0FDQSxxQkFBQSxDQUNBLFNBQUEsQ0FDQSx1QkFBQSxDQUVBLFdBQ0ksa0JBQUEsQ0FHSix5QkFWSixNQVdRLFNBQUEsQ0FBQSxDQUdKLHlCQWRKLE1BZVEsa0JBQUEsQ0FDQSxTQUFBLENBQUEsQ0FJUixLQUNJLG1CQUFBLENBQ0EsY0FBQSxDQUNBLGlCQUFBLENBQ0EsYUFBQSxDQUNBLHdCQUFBLENBQ0EsV0FBQSxDQUNBLHdFQUFBLENBQ0EsY0FBQSxDQUNBLHdCQUFBLENBRUEsV0FDSSxjQUFBLENBQ0Esd0JBQUEsQ0FHSixZQUNJLHlCQUFBLENBS1IsY0FDSSx3QkFBQSxDQUVBLG9CQUNJLHdCQUFBLENBSVIsY0FDSSxhQUFBLENBQ0EsZ0JBQUEsQ0FHSixLQUNJLFlBQUEsQ0FDQSxlQUFBLENBQ0EsU0FBQSxDQUVBLHlCQUxKLEtBTVEsU0FBQSxDQUFBLENBR0oseUJBVEosS0FVUSxTQUFBLENBQUEsQ0FNUixPQUNJLFlBQUEsQ0FDQSxrQkFBQSxDQUNBLDZCQUFBLENBQ0EsT0FBQSxDQUNBLGNBQUEsQ0FDQSxTQUFBLENBQ0EsWUFBQSxDQUNBLGFBQUEsQ0FDQSxjQUFBLENBQ0Esd0JBQUEsQ0FDQSxhQUFBLENBQ0EsVUFBQSxDQUVBLFNBQ0ksb0JBQUEsQ0FDQSxnQkFBQSxDQUNBLGFBQUEsQ0FHSix5QkFwQkosT0FxQlEscUJBQUEsQ0FDQSxzQkFBQSxDQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1pbmd6YXQmZmFtaWx5PVJhbGV3YXk6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNaW5nemF0Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6ICMxMzMxNWM7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvIDUlO1xcclxcbiAgICBwYWRkaW5nOiAyJTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgxMSwgMzgsIDcwLCAwLjQpIDBweCA1cHgsIHJnYmEoMTksIDQ5LCA5MiwgMC4zKSAwcHggMTBweCwgcmdiYSgxOSwgNjQsIDExNiwgMC4yKSAwcHggMTVweCwgcmdiYSgxNDEsIDE2OSwgMTk2LDAuMykgMHB4IDIwcHgsIHJnYmEoMTQxLCAxNjksIDE5NiwgMC4xKSAwcHggMjVweDtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KSB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sb2dvIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBnYXA6IDIwcHg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG5cXHJcXG4gICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxyXFxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaDEge1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXHJcXG5cXHJcXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jYXJ0IGltZyB7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5hc2lkZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXHJcXG5cXHJcXG4gICAgLmJ0biB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xcclxcbiAgICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDUlIDEwJTtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBjb2xvcjogI2VlZjRlZDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDBweCA1cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDBweCAxcHggMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGRhOWM0O1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3I6ICM4ZGE5YzQsICRhbW91bnQ6IDEwJSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmFzaWRlLWJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDMwNDk7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvcjogIzAwMzA0OSwgJGFtb3VudDogMTAlKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLWxhYmVsIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWluLWhlaWdodDogNjh2aDtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xcclxcbiAgICAgICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMzMTVjO1xcclxcbiAgICBjb2xvcjogI2U1ZTVlNTtcXHJcXG4gICAgcGFkZGluZzogMSU7XFxyXFxuXFxyXFxuICAgIGEge1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICBjb2xvcjojZTVlNWU1IDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovaHRtbHtsaW5lLWhlaWdodDoxLjE1Oy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlfWJvZHl7bWFyZ2luOjB9bWFpbntkaXNwbGF5OmJsb2NrfWgxe2ZvbnQtc2l6ZToyZW07bWFyZ2luOi42N2VtIDB9aHJ7Ym94LXNpemluZzpjb250ZW50LWJveDtoZWlnaHQ6MDtvdmVyZmxvdzp2aXNpYmxlfXByZXtmb250LWZhbWlseTptb25vc3BhY2UsbW9ub3NwYWNlO2ZvbnQtc2l6ZToxZW19YXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMCl9YWJiclt0aXRsZV17Ym9yZGVyLWJvdHRvbTpub25lO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSBkb3R0ZWR9YixzdHJvbmd7Zm9udC13ZWlnaHQ6Ym9sZGVyfWNvZGUsa2JkLHNhbXB7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLG1vbm9zcGFjZTtmb250LXNpemU6MWVtfXNtYWxse2ZvbnQtc2l6ZTo4MCV9c3ViLHN1cHtmb250LXNpemU6NzUlO2xpbmUtaGVpZ2h0OjA7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3Vie2JvdHRvbTotMC4yNWVtfXN1cHt0b3A6LTAuNWVtfWltZ3tib3JkZXItc3R5bGU6bm9uZX1idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjEwMCU7bGluZS1oZWlnaHQ6MS4xNTttYXJnaW46MH1idXR0b24saW5wdXR7b3ZlcmZsb3c6dmlzaWJsZX1idXR0b24sc2VsZWN0e3RleHQtdHJhbnNmb3JtOm5vbmV9YnV0dG9uLFt0eXBlPWJ1dHRvbl0sW3R5cGU9cmVzZXRdLFt0eXBlPXN1Ym1pdF17LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbn1idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1yZXNldF06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9c3VibWl0XTo6LW1vei1mb2N1cy1pbm5lcntib3JkZXItc3R5bGU6bm9uZTtwYWRkaW5nOjB9YnV0dG9uOi1tb3otZm9jdXNyaW5nLFt0eXBlPWJ1dHRvbl06LW1vei1mb2N1c3JpbmcsW3R5cGU9cmVzZXRdOi1tb3otZm9jdXNyaW5nLFt0eXBlPXN1Ym1pdF06LW1vei1mb2N1c3Jpbmd7b3V0bGluZToxcHggZG90dGVkIEJ1dHRvblRleHR9ZmllbGRzZXR7cGFkZGluZzouMzVlbSAuNzVlbSAuNjI1ZW19bGVnZW5ke2JveC1zaXppbmc6Ym9yZGVyLWJveDtjb2xvcjppbmhlcml0O2Rpc3BsYXk6dGFibGU7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzowO3doaXRlLXNwYWNlOm5vcm1hbH1wcm9ncmVzc3t2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX10ZXh0YXJlYXtvdmVyZmxvdzphdXRvfVt0eXBlPWNoZWNrYm94XSxbdHlwZT1yYWRpb117Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MH1bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99W3R5cGU9c2VhcmNoXXstd2Via2l0LWFwcGVhcmFuY2U6dGV4dGZpZWxkO291dGxpbmUtb2Zmc2V0Oi0ycHh9W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247Zm9udDppbmhlcml0fWRldGFpbHN7ZGlzcGxheTpibG9ja31zdW1tYXJ5e2Rpc3BsYXk6bGlzdC1pdGVtfXRlbXBsYXRle2Rpc3BsYXk6bm9uZX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3Mvbm9ybWFsaXplLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQUEsQ0FVQSxLQUNJLGdCQUFBLENBRUEsNkJBQUEsQ0FXSixLQUNJLFFBQUEsQ0FPSixLQUNJLGFBQUEsQ0FRSixHQUNJLGFBQUEsQ0FDQSxjQUFBLENBV0osR0FDSSxzQkFBQSxDQUVBLFFBQUEsQ0FFQSxnQkFBQSxDQVNKLElBQ0ksK0JBQUEsQ0FFQSxhQUFBLENBV0osRUFDSSw4QkFBQSxDQVFKLFlBQ0ksa0JBQUEsQ0FFQSx5QkFBQSxDQUVBLGdDQUFBLENBUUosU0FFSSxrQkFBQSxDQVFKLGNBR0ksK0JBQUEsQ0FFQSxhQUFBLENBUUosTUFDSSxhQUFBLENBUUosUUFFSSxhQUFBLENBQ0EsYUFBQSxDQUNBLGlCQUFBLENBQ0EsdUJBQUEsQ0FHSixJQUNJLGNBQUEsQ0FHSixJQUNJLFVBQUEsQ0FVSixJQUNJLGlCQUFBLENBV0osc0NBS0ksbUJBQUEsQ0FFQSxjQUFBLENBRUEsZ0JBQUEsQ0FFQSxRQUFBLENBU0osYUFHSSxnQkFBQSxDQVFKLGNBR0ksbUJBQUEsQ0FPSixnREFJSSx5QkFBQSxDQU9KLHdIQUlJLGlCQUFBLENBQ0EsU0FBQSxDQU9KLDRHQUlJLDZCQUFBLENBT0osU0FDSSwwQkFBQSxDQVVKLE9BQ0kscUJBQUEsQ0FFQSxhQUFBLENBRUEsYUFBQSxDQUVBLGNBQUEsQ0FFQSxTQUFBLENBRUEsa0JBQUEsQ0FRSixTQUNJLHVCQUFBLENBT0osU0FDSSxhQUFBLENBUUosNkJBRUkscUJBQUEsQ0FFQSxTQUFBLENBUUosa0ZBRUksV0FBQSxDQVFKLGNBQ0ksNEJBQUEsQ0FFQSxtQkFBQSxDQVFKLHlDQUNJLHVCQUFBLENBUUosNkJBQ0kseUJBQUEsQ0FFQSxZQUFBLENBV0osUUFDSSxhQUFBLENBT0osUUFDSSxpQkFBQSxDQVVKLFNBQ0ksWUFBQSxDQU9KLFNBQ0ksWUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxyXFxuXFxyXFxuLyogRG9jdW1lbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIFNlY3Rpb25zXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxyXFxuICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxyXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHcm91cGluZyBjb250ZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcclxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcclxcbiAqL1xcclxcblxcclxcbmhyIHtcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnByZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcclxcbiAqL1xcclxcblxcclxcbmEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXHJcXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmFiYnJbdGl0bGVdIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgLyogMiAqL1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5iLFxcclxcbnN0cm9uZyB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmNvZGUsXFxyXFxua2JkLFxcclxcbnNhbXAge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuc21hbGwge1xcclxcbiAgICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxyXFxuICogYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnN1YixcXHJcXG5zdXAge1xcclxcbiAgICBmb250LXNpemU6IDc1JTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcbiAgICBib3R0b206IC0wLjI1ZW07XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuICAgIHRvcDogLTAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbWJlZGRlZCBjb250ZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcclxcbiAqL1xcclxcblxcclxcbmltZyB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9ybXNcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXHJcXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCB7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcclxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcclxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcclxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcclxcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxyXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcclxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG4gICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIC8qIDMgKi9cXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gICAgLyogMSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcclxcbiAqL1xcclxcblxcclxcbnByb2dyZXNzIHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXHJcXG4gKi9cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXHJcXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxyXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcclxcbiAqL1xcclxcblxcclxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIEludGVyYWN0aXZlXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxyXFxuICovXFxyXFxuXFxyXFxuZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5zdW1tYXJ5IHtcXHJcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNaXNjXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxyXFxuICovXFxyXFxuXFxyXFxudGVtcGxhdGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5baGlkZGVuXSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zhdm9yaXRlcy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgUGljdHVyZSB9IGZyb20gJy4vcGljdHVyZS5pbnRlZmFjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgcGljdHVyZXNMaXN0OiBQaWN0dXJlW10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdCYW5hbmEnLFxyXG4gICAgICAgIHllYXI6IDIwMjIsXHJcbiAgICAgICAgcHJpY2U6IDEwMCxcclxuICAgICAgICBhdXRob3I6ICdWYXNpbGlzYScsXHJcbiAgICAgICAgYnJ1c2g6ICdvaWwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQmFuYW5hIHBhaW50ZWQgd2l0aCBvaWwgYnJ1c2gnLFxyXG4gICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICBjb2xvcjogJ3llbGxvdycsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL2JhbmFuYS1vaWwtYnJ1c2guanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0NhdCcsXHJcbiAgICAgICAgeWVhcjogMjAyMSxcclxuICAgICAgICBwcmljZTogMTA1LFxyXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcclxuICAgICAgICBicnVzaDogJ3BlbmNpbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdHcmV5IGNhdCBzbWlsZXMgeW91JyxcclxuICAgICAgICBhbW91bnQ6IDEwLFxyXG4gICAgICAgIGNvbG9yOiAnZ3JleScsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL2NhdC1wZW5jaWwuanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1RyaWFuZ2xlcycsXHJcbiAgICAgICAgeWVhcjogMjAyMSxcclxuICAgICAgICBwcmljZTogNzcsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFsaWFudHNpbmEnLFxyXG4gICAgICAgIGJydXNoOiAnd2F0ZXJjb2xvcicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdCbHVlIHRyaWFuZ2xlcyBmaWxsZWQgd2l0aCB3YXRlcmNvbG9yJyxcclxuICAgICAgICBhbW91bnQ6IDMsXHJcbiAgICAgICAgY29sb3I6ICdibHVlJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvdHJpYW5nbGVzLWJsdWUtd2F0ZXJjb2xvci5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQ2hyaXN0bWFzIHRyZWUnLFxyXG4gICAgICAgIHllYXI6IDIwMjMsXHJcbiAgICAgICAgcHJpY2U6IDcwLFxyXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcclxuICAgICAgICBicnVzaDogJ29pbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdIb2xpZGF5IGlzIGNvbWluZyEgQ2hyaXN0bWFzIHRyZWUgZm9yIHlvdSBITy1ITy1ITycsXHJcbiAgICAgICAgYW1vdW50OiAyLFxyXG4gICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9jaHJpc3RtYXMtdHJlZS1vaWwtYnJ1c2guanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Nsb3VkJyxcclxuICAgICAgICB5ZWFyOiAyMDIyLFxyXG4gICAgICAgIHByaWNlOiA1MCxcclxuICAgICAgICBzYWxlUHJpY2U6IDQwLFxyXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcclxuICAgICAgICBicnVzaDogJ3BlbmNpbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIGxpdHRsZSBjbG91ZCBmb3Igd2FybSBkYXlzJyxcclxuICAgICAgICBhbW91bnQ6IDE1LFxyXG4gICAgICAgIGNvbG9yOiAnYmx1ZScsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL2Nsb3VkLXBlbmNpbC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdGaXNoJyxcclxuICAgICAgICB5ZWFyOiAyMDE4LFxyXG4gICAgICAgIHByaWNlOiAxMCxcclxuICAgICAgICBhdXRob3I6ICdWYXNpbGlzYScsXHJcbiAgICAgICAgYnJ1c2g6ICdjcmF5b24nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGJlc3QgcXVpZXQgcGV0IG9yIGp1c3QgY29va2llLCBhcyB5b3Ugd2lzaCcsXHJcbiAgICAgICAgYW1vdW50OiAzLFxyXG4gICAgICAgIGNvbG9yOiAnb3JhbmdlJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvZmlzaC1jcmF5b24uanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Zsb3dlcicsXHJcbiAgICAgICAgeWVhcjogMjAxOCxcclxuICAgICAgICBwcmljZTogNSxcclxuICAgICAgICBhdXRob3I6ICdWYWxpYW50c2luYScsXHJcbiAgICAgICAgYnJ1c2g6ICdwZW5jaWwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnWW91ciB3aW50ZXIgYm91cXVldCcsXHJcbiAgICAgICAgYW1vdW50OiA5LFxyXG4gICAgICAgIGNvbG9yOiAnYmx1ZScsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL2Zsb3dlci1wZW5jaWwuanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0dyYXBlJyxcclxuICAgICAgICB5ZWFyOiAyMDE5LFxyXG4gICAgICAgIHByaWNlOiAyMDAsXHJcbiAgICAgICAgc2FsZVByaWNlOiAxMzAsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFzaWxpc2EnLFxyXG4gICAgICAgIGJydXNoOiAnd2F0ZXJjb2xvcicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdKdXN0IGRlbGljaW91cycsXHJcbiAgICAgICAgYW1vdW50OiAxLFxyXG4gICAgICAgIGNvbG9yOiAncHVycGxlJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvZ3JhcGUtd2F0ZXJjb2xvci1icnVzaC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdTdGFycycsXHJcbiAgICAgICAgeWVhcjogMjAxOCxcclxuICAgICAgICBwcmljZTogOTAsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFsaWFudHNpbmEnLFxyXG4gICAgICAgIGJydXNoOiAncGVuY2lsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1llbGxvdyBzdGFycycsXHJcbiAgICAgICAgYW1vdW50OiAzLFxyXG4gICAgICAgIGNvbG9yOiAneWVsbG93JyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvc3RhcnMteWVsbG93LXBlbmNpbC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnR3Jhc3MnLFxyXG4gICAgICAgIHllYXI6IDIwMjIsXHJcbiAgICAgICAgcHJpY2U6IDczLFxyXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcclxuICAgICAgICBicnVzaDogJ3BlbmNpbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdTbWVsbHMgbGlrZSBzdW1tZXInLFxyXG4gICAgICAgIGFtb3VudDogNCxcclxuICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvZ3Jhc3MtcGVuY2lsLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdIZWFydCcsXHJcbiAgICAgICAgeWVhcjogMjAyMCxcclxuICAgICAgICBwcmljZTogNzAsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFzaWxpc2EnLFxyXG4gICAgICAgIGJydXNoOiAnYWlyYnJ1c2gnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQWxsIHlvdSBuZWVkIGlzIGxvdmUnLFxyXG4gICAgICAgIGFtb3VudDogOCxcclxuICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL2hlYXJ0LWFpcmJydXNoLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdQZW50YWdvbicsXHJcbiAgICAgICAgeWVhcjogMjAxMCxcclxuICAgICAgICBwcmljZTogODAsXHJcbiAgICAgICAgYXV0aG9yOiAnVmFsaWFudHNpbmEnLFxyXG4gICAgICAgIGJydXNoOiAncGVuY2lsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0dyZWVuIHBlbnRhZ29uJyxcclxuICAgICAgICBhbW91bnQ6IDMsXHJcbiAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3BlbnRhZ29uLWdyZWVuLXBlbmNpbC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnT3JhbmdlJyxcclxuICAgICAgICB5ZWFyOiAyMDE5LFxyXG4gICAgICAgIHByaWNlOiA0NCxcclxuICAgICAgICBzYWxlUHJpY2U6IDQwLFxyXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcclxuICAgICAgICBicnVzaDogJ21hcmtlcicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdPcmFuZ2UgbGlrZSBvcmFuZ2UnLFxyXG4gICAgICAgIGFtb3VudDogOCxcclxuICAgICAgICBjb2xvcjogJ29yYW5nZScsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL29yYW5nZS1tYXJrZXIuanBnJyxcclxuICAgICAgICBvbnNhbGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUGlnJyxcclxuICAgICAgICB5ZWFyOiAyMDE2LFxyXG4gICAgICAgIHByaWNlOiAxMyxcclxuICAgICAgICBhdXRob3I6ICdWYXNpbGlzYScsXHJcbiAgICAgICAgYnJ1c2g6ICdtYXJrZXInLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnT2luayBvaW5rJyxcclxuICAgICAgICBhbW91bnQ6IDMsXHJcbiAgICAgICAgY29sb3I6ICdyb3NlJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvcGlnLW1hcmtlci5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUmFpbmJvdycsXHJcbiAgICAgICAgeWVhcjogMjAyMCxcclxuICAgICAgICBwcmljZTogMTgwLFxyXG4gICAgICAgIHNhbGVQcmljZTogMTAwLFxyXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcclxuICAgICAgICBicnVzaDogJ2NyYXlvbicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdST1lHQklWJyxcclxuICAgICAgICBhbW91bnQ6IDEsXHJcbiAgICAgICAgY29sb3I6ICdyYWluYm93JyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvcmFpbmJvdy1jcmF5b24uanBnJyxcclxuICAgICAgICBvbnNhbGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnU3RhcicsXHJcbiAgICAgICAgeWVhcjogMjAyMSxcclxuICAgICAgICBwcmljZTogMjksXHJcbiAgICAgICAgYXV0aG9yOiAnVmFzaWxpc2EnLFxyXG4gICAgICAgIGJydXNoOiAncGVuY2lsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1NoaW5lIGJyaWdodCcsXHJcbiAgICAgICAgYW1vdW50OiAxMyxcclxuICAgICAgICBjb2xvcjogJ3llbGxvdycsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3N0YXItcGVuY2lsLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdTdW4nLFxyXG4gICAgICAgIHllYXI6IDIwMTksXHJcbiAgICAgICAgcHJpY2U6IDMwLFxyXG4gICAgICAgIGF1dGhvcjogJ1ZhbGlhbnRzaW5hJyxcclxuICAgICAgICBicnVzaDogJ2NyYXlvbicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdGb3IgcmFpbnkgZGF5cycsXHJcbiAgICAgICAgYW1vdW50OiAzMCxcclxuICAgICAgICBjb2xvcjogJ3llbGxvdycsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3N1bi1jcmF5b24uanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1dhdGVybWVsb24nLFxyXG4gICAgICAgIHllYXI6IDIwMjIsXHJcbiAgICAgICAgcHJpY2U6IDkwLFxyXG4gICAgICAgIGF1dGhvcjogJ1Zhc2lsaXNhJyxcclxuICAgICAgICBicnVzaDogJ21hcmtlcicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiWW91IGNhbid0IGp1c3Qgc3RvcFwiLFxyXG4gICAgICAgIGFtb3VudDogMTIsXHJcbiAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy93YXRlcm1lbG9uLW1hcmtlci5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnRG9nJyxcclxuICAgICAgICB5ZWFyOiAyMDE1LFxyXG4gICAgICAgIHByaWNlOiAxMDAsXHJcbiAgICAgICAgc2FsZVByaWNlOiA5NSxcclxuICAgICAgICBhdXRob3I6ICdWZXJhbmlrYScsXHJcbiAgICAgICAgYnJ1c2g6ICd3YXRlcmNvbG9yJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdXIgYmVzdCBmcmllbmQnLFxyXG4gICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICBjb2xvcjogJ2dyZXknLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9kb2ctd2F0ZXJjb2xvci1icnVzaC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdSb2NrZXQnLFxyXG4gICAgICAgIHllYXI6IDIwMTYsXHJcbiAgICAgICAgcHJpY2U6IDIwMCxcclxuICAgICAgICBzYWxlUHJpY2U6IDE4MCxcclxuICAgICAgICBhdXRob3I6ICdWZXJhbmlrYScsXHJcbiAgICAgICAgYnJ1c2g6ICdicnVzaCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUbyB0aGUgbW9vbicsXHJcbiAgICAgICAgYW1vdW50OiAxNSxcclxuICAgICAgICBjb2xvcjogJ2dyZXknLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9yb2NrZXQtYnJ1c2guanBnJyxcclxuICAgICAgICBvbnNhbGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnU2F0dXJuJyxcclxuICAgICAgICB5ZWFyOiAyMDE2LFxyXG4gICAgICAgIHByaWNlOiAxMDAsXHJcbiAgICAgICAgYXV0aG9yOiAnVmVyYW5pa2EnLFxyXG4gICAgICAgIGJydXNoOiAnbWFya2VyJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0p1c3QgdG9vIGZhciBhd2F5JyxcclxuICAgICAgICBhbW91bnQ6IDUsXHJcbiAgICAgICAgY29sb3I6ICdicm93bicsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3NhdHVybi1tYXJrZXIuanBnJyxcclxuICAgICAgICBvbnNhbGU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1NuYWlsJyxcclxuICAgICAgICB5ZWFyOiAyMDE3LFxyXG4gICAgICAgIHByaWNlOiAxMDIsXHJcbiAgICAgICAgYXV0aG9yOiAnVmVyYW5pa2EnLFxyXG4gICAgICAgIGJydXNoOiAnb2lsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1Nsby1vLW8tby1vdycsXHJcbiAgICAgICAgYW1vdW50OiAxNSxcclxuICAgICAgICBjb2xvcjogJ2Jyb3duJyxcclxuICAgICAgICB1cmw6ICcuL2Fzc2V0cy9pbWcvc25haWwtb2lsLWJydXNoLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdPdmFsJyxcclxuICAgICAgICB5ZWFyOiAyMDEwLFxyXG4gICAgICAgIHByaWNlOiA4NCxcclxuICAgICAgICBhdXRob3I6ICdWYWxpYW50c2luYScsXHJcbiAgICAgICAgYnJ1c2g6ICdvaWwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUmVkIG92YWwnLFxyXG4gICAgICAgIGFtb3VudDogMyxcclxuICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL292YWwtcmVkLW9pbC5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnVHJlZScsXHJcbiAgICAgICAgeWVhcjogMjAxOCxcclxuICAgICAgICBwcmljZTogNTIsXHJcbiAgICAgICAgYXV0aG9yOiAnVmVyYW5pa2EnLFxyXG4gICAgICAgIGJydXNoOiAnY3JheW9uJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1BlcmZlY3Qgc2hhZG93IGFuZCBhaXInLFxyXG4gICAgICAgIGFtb3VudDogMTUsXHJcbiAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgdXJsOiAnLi9hc3NldHMvaW1nL3RyZWUtY3JheW9uLmpwZycsXHJcbiAgICAgICAgb25zYWxlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdTcXVhcmVzJyxcclxuICAgICAgICB5ZWFyOiAyMDEyLFxyXG4gICAgICAgIHByaWNlOiA0NSxcclxuICAgICAgICBhdXRob3I6ICdWYWxpYW50c2luYScsXHJcbiAgICAgICAgYnJ1c2g6ICdjcmF5b24nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQmxhY2sgc3F1YXJlcycsXHJcbiAgICAgICAgYW1vdW50OiAzLFxyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIHVybDogJy4vYXNzZXRzL2ltZy9zcXVhcmVzLWJsYWNrLWNyYXlvbi5qcGcnLFxyXG4gICAgICAgIG9uc2FsZTogZmFsc2UsXHJcbiAgICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgQ2FyZCBmcm9tICcuLi9jYXJkL2NhcmQnO1xyXG5pbXBvcnQgJy4vZmF2b3JpdGVzLnNjc3MnO1xyXG5pbXBvcnQgeyBwaWN0dXJlc0xpc3QgfSBmcm9tICcuLi8uLi8uLi9waWN0dXJlcy1saXN0JztcclxuXHJcbmNsYXNzIEZhdm9yaXRlcyB7XHJcbiAgICBwdWJsaWMgdG9nZ2xlKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgZmF2U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKTtcclxuICAgICAgICBjb25zdCBwcmV2VmFsdWU6IHN0cmluZ1tdID0gZmF2U3RvcmFnZSA/IGZhdlN0b3JhZ2Uuc3BsaXQoJy0nKSA6IFtdO1xyXG5cclxuICAgICAgICBsZXQgaXRlbVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0VGl0bGUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLXRpdGxlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVRpdGxlID0gdGFyZ2V0VGl0bGUuaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZWYWx1ZS5pbmNsdWRlcyhpdGVtVGl0bGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZWYWx1ZS5zcGxpY2UocHJldlZhbHVlLmluZGV4T2YoaXRlbVRpdGxlKSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5maWx0ZXJzPy5yZXBsYWNlKCctZmF2b3JpdGUnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldlZhbHVlLnB1c2goaXRlbVRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmZpbHRlcnMgKz0gJy1mYXZvcml0ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZvcml0ZXMnLCBwcmV2VmFsdWUuam9pbignLScpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0c1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgcHJvZHVjdHNXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoKTtcclxuICAgICAgICAgICAgY2FyZC5kcmF3KHBpY3R1cmVzTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGVja0Zhdih0aXRsZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgZmF2U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKTtcclxuICAgICAgICBjb25zdCBwcmV2VmFsdWU6IHN0cmluZ1tdID0gZmF2U3RvcmFnZSA/IGZhdlN0b3JhZ2Uuc3BsaXQoJy0nKSA6IFtdO1xyXG4gICAgICAgIGlmIChwcmV2VmFsdWUuaW5jbHVkZXModGl0bGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVzO1xyXG4iLCJpbXBvcnQgeyBwaWN0dXJlc0xpc3QgfSBmcm9tICcuLi8uLi8uLi9waWN0dXJlcy1saXN0JztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY2FyZC9jYXJkJztcclxuaW1wb3J0IEZhdm9yaXRlcyBmcm9tICcuLi9mYXZvcml0ZXMvZmF2b3JpdGVzJztcclxuXHJcbmNsYXNzIEZpbHRlciB7XHJcbiAgICByZWFkb25seSBhbGxQcm9kdWN0czogRWxlbWVudFtdO1xyXG4gICAgZmlsdGVyZWRQcm9kdWN0czogRWxlbWVudFtdO1xyXG4gICAgZmF2b3JpdGVzOiBGYXZvcml0ZXM7XHJcbiAgICBwcm9kdWN0c1dyYXBwZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY2FyZDogQ2FyZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFsbFByb2R1Y3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9faXRlbScpKTtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLmZhdm9yaXRlcyA9IG5ldyBGYXZvcml0ZXMoKTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0cycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY2FyZCA9IG5ldyBDYXJkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUZpbHRlcihmaWx0ZXI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlsdGVycycpO1xyXG5cclxuICAgICAgICBpZiAoZmlsdGVycykge1xyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJzQXJyID0gZmlsdGVycy5zcGxpdCgnLScpO1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyLnN0YXJ0c1dpdGgoJ2NvbG9yJykgfHwgZmlsdGVyLnN0YXJ0c1dpdGgoJ2JydXNoJykgfHwgZmlsdGVyLnN0YXJ0c1dpdGgoJ2F1dGhvcicpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJUb1JlbW92ZSA9IGZpbHRlci5zcGxpdCgnKicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVnRmlsdGVyID0gbmV3IFJlZ0V4cChgXiR7ZmlsdGVyVG9SZW1vdmVbMF19YCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGluZCBpbiBmaWx0ZXJzQXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ0ZpbHRlci50ZXN0KGZpbHRlcnNBcnJbaW5kXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlc2VudEZpbHRlciA9IGZpbHRlcnNBcnJbaW5kXS5zcGxpdCgnKicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJlc2VudEZpbHRlci5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZW50RmlsdGVyLnNwbGljZShwcmVzZW50RmlsdGVyLmluZGV4T2YoZmlsdGVyVG9SZW1vdmVbMV0pLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnNBcnJbaW5kXSA9IHByZXNlbnRGaWx0ZXIuam9pbignKicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyc0Fyci5zcGxpY2UoK2luZCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWdGaWx0ZXIgPSBuZXcgUmVnRXhwKGBeJHtmaWx0ZXJ9YCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGluZCBpbiBmaWx0ZXJzQXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ0ZpbHRlci50ZXN0KGZpbHRlcnNBcnJbaW5kXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyc0Fyci5zcGxpY2UoK2luZCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWx0ZXJzJywgZmlsdGVyc0Fyci5qb2luKCctJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmlsdGVyUHJvZHVjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyc1N0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWx0ZXJzJyk7XHJcbiAgICAgICAgbGV0IGZpbHRlcnNBcnI6IHN0cmluZ1tdO1xyXG4gICAgICAgIGlmIChmaWx0ZXJzU3RyKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnNBcnIgPSBmaWx0ZXJzU3RyLnNwbGl0KCctJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmlsdGVyc0Fyci5sZW5ndGggPT09IDAgfHwgZmlsdGVyc0FyclswXSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZC5kcmF3KHBpY3R1cmVzTGlzdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJzQXJyLmZvckVhY2goKGZpbHRlcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlci5zdGFydHNXaXRoKCdwcmljZScpIHx8IGZpbHRlci5zdGFydHNXaXRoKCd5ZWFyJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeVByaWNlQW5kWWVhcihmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLnN0YXJ0c1dpdGgoJ3NhbGUnKSB8fCBmaWx0ZXIuc3RhcnRzV2l0aCgnZmF2b3JpdGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckJ5U2FsZUFuZEZhdm9yaXRlKGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCeVByb3BlcnR5KGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kcmF3UHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZFByb2R1Y3RzID0gW107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0c1dyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiB0aGlzLmFsbFByb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzV3JhcHBlci5hcHBlbmRDaGlsZChwcm9kdWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbHRlckJ5UHJpY2VBbmRZZWFyKGZpbHRlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb2R1Y3RzID0gdGhpcy5maWx0ZXJlZFByb2R1Y3RzLmxlbmd0aCA+PSAxID8gWy4uLnRoaXMuZmlsdGVyZWRQcm9kdWN0c10gOiBbLi4udGhpcy5hbGxQcm9kdWN0c107XHJcbiAgICAgICAgY29uc3QgcmFuZ2VBcnIgPSBmaWx0ZXIuc3BsaXQoJyonKTtcclxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgLiR7cmFuZ2VBcnJbMF19LXNsaWRlcmA7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0ZpbHRlcmVkOiBFbGVtZW50W10gPSBjdXJyZW50UHJvZHVjdHMucmVkdWNlKChmaWx0ZXJlZDogRWxlbWVudFtdLCBpdGVtOiBFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihgLmNhcmRfX2l0ZW0tJHtyYW5nZUFyclswXX1gKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgaXRlbVZhbHVlICYmXHJcbiAgICAgICAgICAgICAgICBwYXJzZUludChpdGVtVmFsdWUuaW5uZXJIVE1MKSA+PSArcmFuZ2VBcnJbMV0gJiZcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGl0ZW1WYWx1ZS5pbm5lckhUTUwpIDw9ICtyYW5nZUFyclsyXVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSBbLi4ubmV3RmlsdGVyZWRdO1xyXG4gICAgICAgIGNvbnN0IHNsaWRlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NOYW1lKSkgYXMgSFRNTElucHV0RWxlbWVudFtdO1xyXG5cclxuICAgICAgICBpZiAoc2xpZGVycykge1xyXG4gICAgICAgICAgICBzbGlkZXJzWzBdLnZhbHVlID0gcmFuZ2VBcnJbMV07XHJcbiAgICAgICAgICAgIHNsaWRlcnNbMV0udmFsdWUgPSByYW5nZUFyclsyXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtjbGFzc05hbWV9X19jb250YWluZXJgKTtcclxuICAgICAgICBpZiAoc2xpZGVyQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0RnJvbSA9IHNsaWRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZnJvbScpO1xyXG4gICAgICAgICAgICBjb25zdCBlbmRXaXRoID0gc2xpZGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50bycpO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRGcm9tICYmIGVuZFdpdGgpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0RnJvbS5pbm5lckhUTUwgPSBzbGlkZXJzWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZW5kV2l0aC5pbm5lckhUTUwgPSBzbGlkZXJzWzFdLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmlsdGVyQnlTYWxlQW5kRmF2b3JpdGUoZmlsdGVyOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvZHVjdHMgPSB0aGlzLmZpbHRlcmVkUHJvZHVjdHMubGVuZ3RoID49IDEgPyBbLi4udGhpcy5maWx0ZXJlZFByb2R1Y3RzXSA6IFsuLi50aGlzLmFsbFByb2R1Y3RzXTtcclxuICAgICAgICBjb25zdCBuZXdGaWx0ZXJlZDogRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbHRlckNsYXNzID0gZmlsdGVyID09PSAnc2FsZScgPyAnLm9uc2FsZScgOiAnLmlzZmF2b3JpdGUnO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlckNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihmaWx0ZXJDbGFzcykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBpZiAoZmlsdGVyQ2hlY2tib3gpIGZpbHRlckNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgY3VycmVudFByb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RFbGVtZW50ID0gcHJvZHVjdCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdFByb3BlcnRpZXMgPSBwcm9kdWN0RWxlbWVudC5kYXRhc2V0LmZpbHRlcnM7XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJvZHVjdFByb3BlcnRpZXNBcnI6IHN0cmluZ1tdO1xyXG4gICAgICAgICAgICBpZiAocHJvZHVjdFByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RQcm9wZXJ0aWVzQXJyID0gcHJvZHVjdFByb3BlcnRpZXMuc3BsaXQoJy0nKTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0UHJvcGVydGllc0Fyci5pbmNsdWRlcyhmaWx0ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RmlsdGVyZWQucHVzaChwcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSBbLi4ubmV3RmlsdGVyZWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmlsdGVyQnlQcm9wZXJ0eShmaWx0ZXI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9kdWN0cyA9IHRoaXMuZmlsdGVyZWRQcm9kdWN0cy5sZW5ndGggPj0gMSA/IFsuLi50aGlzLmZpbHRlcmVkUHJvZHVjdHNdIDogWy4uLnRoaXMuYWxsUHJvZHVjdHNdO1xyXG4gICAgICAgIGNvbnN0IG5ld0ZpbHRlcmVkOiBFbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgZmlsdGVyQXJyID0gZmlsdGVyLnNwbGl0KCcqJyk7XHJcbiAgICAgICAgY29uc3QgZmlsdGVycyA9IGZpbHRlckFyci5zbGljZSgxKTtcclxuXHJcbiAgICAgICAgZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3hGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmaWx0ZXJ9YCkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKGNoZWNrYm94RmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2JveEZpbHRlci5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0IG9mIGN1cnJlbnRQcm9kdWN0cykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdEVsZW1lbnQgPSBwcm9kdWN0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFByb3BlcnRpZXMgPSBwcm9kdWN0RWxlbWVudC5kYXRhc2V0LmZpbHRlcnM7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHByb2R1Y3RQcm9wZXJ0aWVzQXJyOiBzdHJpbmdbXTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0UHJvcGVydGllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQcm9wZXJ0aWVzQXJyID0gcHJvZHVjdFByb3BlcnRpZXMuc3BsaXQoJy0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3RQcm9wZXJ0aWVzQXJyLmluY2x1ZGVzKGZpbHRlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RmlsdGVyZWQucHVzaChwcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkUHJvZHVjdHMgPSBbLi4ubmV3RmlsdGVyZWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhd1Byb2R1Y3RzKCkge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHNXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLmZpbHRlcmVkUHJvZHVjdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiB0aGlzLmZpbHRlcmVkUHJvZHVjdHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RUaXRsZUVMID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbS10aXRsZScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb2R1Y3RUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2R1Y3RUaXRsZUVMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlID0gcHJvZHVjdFRpdGxlRUwuaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzRmF2OiBib29sZWFuID0gdGhpcy5mYXZvcml0ZXMuY2hlY2tGYXYocHJvZHVjdFRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYXZCdG4gPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtYnRuIGltZycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNGYXYgJiYgZmF2QnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhdkJ0bi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi8uLi8uLi9hc3NldHMvc3ZnL2xpa2UtYmxhY2suc3ZnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQocHJvZHVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS5pbm5lckhUTUwgPSAnU29ycnksIG5vdGhpbmcgY291bGQgYmUgZm91bmQuIFlvdSBjYW4gdHJ5IGFub3RoZXIgc2VhcmNoIHJlcXVlc3QuJztcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcclxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHBpY3R1cmVzTGlzdCB9IGZyb20gJy4uLy4uLy4uL3BpY3R1cmVzLWxpc3QnO1xyXG5pbXBvcnQgJy4vcG9wdXAuc2Nzcyc7XHJcblxyXG5jbGFzcyBQb3B1cCB7XHJcbiAgICBwdWJsaWMgY3JlYXRlUG9wdXAgPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0QnRuID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RCdG4ucGFyZW50RWxlbWVudDtcclxuICAgICAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0VGl0bGVFbCA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLmNhcmRfX2l0ZW0tdGl0bGUnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwcm9kdWN0VGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgaWYgKHByb2R1Y3RUaXRsZUVsKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGUgPSBwcm9kdWN0VGl0bGVFbC5pbm5lckhUTUw7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcGljdHVyZSA9IHBpY3R1cmVzTGlzdC5maWx0ZXIoKHBpY3R1cmUpID0+IHBpY3R1cmUudGl0bGUgPT09IHByb2R1Y3RUaXRsZSlbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3B1cFRlbXA6IEhUTUxUZW1wbGF0ZUVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwVGVtcCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvcHVwVGVtcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwQ2xvbmUgPSBwb3B1cFRlbXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwQ2xvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXBUaXRsZSA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLnBvcHVwX19pdGVtLXRpdGxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3B1cFRpdGxlKSBwb3B1cFRpdGxlLnRleHRDb250ZW50ID0gcGljdHVyZS50aXRsZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwSW1nID0gcG9wdXBDbG9uZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2l0ZW0taW1nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3B1cEltZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBwaWN0dXJlLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cEltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIHBpY3R1cmUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwWWVhciA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLnBvcHVwX19pdGVtLXllYXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwWWVhcikgcG9wdXBZZWFyLnRleHRDb250ZW50ID0gcGljdHVyZS55ZWFyICsgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwUHJpY2UgPSBwb3B1cENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faXRlbS1wcmljZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXBQcmljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBQcmljZS50ZXh0Q29udGVudCA9IHBpY3R1cmUucHJpY2UgKyAnJCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBpY3R1cmUub25zYWxlICYmIHBpY3R1cmUuc2FsZVByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBQcmljZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19pdGVtLXByaWNlX3NhbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzYWxlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2l0ZW1fc2FsZS1wcmljZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZS5pbm5lckhUTUwgPSBgJHtwaWN0dXJlLnNhbGVQcmljZX0kYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cFByaWNlLmFmdGVyKHNhbGVQcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FsZVBlcmNlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQuY2xhc3NMaXN0LmFkZCgnY2FyZF9faXRlbV9zYWxlLXBlcmNlbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUGVyY2VudC5pbm5lckhUTUwgPSBgLSR7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwIC0gKHBpY3R1cmUuc2FsZVByaWNlICogMTAwKSAvIHBpY3R1cmUucHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSVgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZS5hZnRlcihzYWxlUGVyY2VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXBBdXRob3IgPSBwb3B1cENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faXRlbS1hdXRob3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwQXV0aG9yKSBwb3B1cEF1dGhvci5pbm5lckhUTUwgKz0gcGljdHVyZS5hdXRob3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwQ29sb3IgPSBwb3B1cENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faXRlbS1jb2xvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXBDb2xvcikgcG9wdXBDb2xvci5pbm5lckhUTUwgKz0gcGljdHVyZS5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXBCcnVzaCA9IHBvcHVwQ2xvbmUucXVlcnlTZWxlY3RvcignLnBvcHVwX19pdGVtLWJydXNoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3B1cEJydXNoKSBwb3B1cEJydXNoLmlubmVySFRNTCArPSBwaWN0dXJlLmJydXNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cERlc2NyaXB0aW9uID0gcG9wdXBDbG9uZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2l0ZW0tZGVzY3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcHVwRGVzY3JpcHRpb24pIHBvcHVwRGVzY3JpcHRpb24uaW5uZXJIVE1MICs9IHBpY3R1cmUuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlQnRuID0gcG9wdXBDbG9uZS5xdWVyeVNlbGVjdG9yKCcuYnRuLWNyb3NzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbG9zZUJ0bikgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlUG9wdXApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9wdXAgPSBwb3B1cENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faXRlbScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXApIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZVBvcHVwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZChwb3B1cENsb25lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kKGZyYWdtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGNsb3NlUG9wdXAgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICAgICAgICBpZiAobWFpbikge1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0Q2hpbGQgPSBtYWluLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICAgIGlmIChsYXN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobGFzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcHVwO1xyXG4iLCJ0eXBlIGZpbHRlciA9ICdwcmljZScgfCAndGl0bGUnIHwgJ3llYXInO1xyXG50eXBlIGRpcmVjdGlvbiA9ICdhc2NlbmRpbmcnIHwgJ2Rlc2NlbmRpbmcnO1xyXG5cclxuY2xhc3MgU29ydCB7XHJcbiAgICBwdWJsaWMgc29ydFByb2R1Y3RzKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNvcnRCeSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb3J0QnknKTtcclxuICAgICAgICBzd2l0Y2ggKHNvcnRCeSkge1xyXG4gICAgICAgICAgICBjYXNlICdwcmljZS1hc2NlbmRpbmcnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0KCdwcmljZScsICdhc2NlbmRpbmcnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2FzZSAncHJpY2UtZGVzY2VuZGluZyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQoJ3ByaWNlJywgJ2Rlc2NlbmRpbmcnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2FzZSAndGl0bGUtYXNjZW5kaW5nJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydCgndGl0bGUnLCAnYXNjZW5kaW5nJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgJ3RpdGxlLWRlc2NlbmRpbmcnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0KCd0aXRsZScsICdkZXNjZW5kaW5nJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgJ3llYXItYXNjZW5kaW5nJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydCgneWVhcicsICdhc2NlbmRpbmcnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2FzZSAneWVhci1kZXNjZW5kaW5nJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydCgneWVhcicsICdkZXNjZW5kaW5nJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc29ydEJ5Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc29ydChmaWx0ZXI6IGZpbHRlciwgZGlyZWN0aW9uOiBkaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2l0ZW0nKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbHRlckNsYXNzID1cclxuICAgICAgICAgICAgZmlsdGVyID09PSAncHJpY2UnID8gJy5jYXJkX19pdGVtLXByaWNlJyA6IGZpbHRlciA9PT0gJ3RpdGxlJyA/ICcuY2FyZF9faXRlbS10aXRsZScgOiAnLmNhcmRfX2l0ZW0teWVhcic7XHJcblxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdhc2NlbmRpbmcnICYmIGZpbHRlciA9PT0gJ3RpdGxlJykge1xyXG4gICAgICAgICAgICBwcm9kdWN0cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGEucXVlcnlTZWxlY3RvcihmaWx0ZXJDbGFzcyk/LmlubmVySFRNTCBhcyBzdHJpbmcpLmxvY2FsZUNvbXBhcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgYi5xdWVyeVNlbGVjdG9yKGZpbHRlckNsYXNzKT8uaW5uZXJIVE1MIGFzIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkZXNjZW5kaW5nJyAmJiBmaWx0ZXIgPT09ICd0aXRsZScpIHtcclxuICAgICAgICAgICAgcHJvZHVjdHMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChiLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyQ2xhc3MpPy5pbm5lckhUTUwgYXMgc3RyaW5nKS5sb2NhbGVDb21wYXJlKFxyXG4gICAgICAgICAgICAgICAgICAgIGEucXVlcnlTZWxlY3RvcihmaWx0ZXJDbGFzcyk/LmlubmVySFRNTCBhcyBzdHJpbmdcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnYXNjZW5kaW5nJykge1xyXG4gICAgICAgICAgICBwcm9kdWN0cy5zb3J0KFxyXG4gICAgICAgICAgICAgICAgKGEsIGIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChhLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyQ2xhc3MpPy5pbm5lckhUTUwgYXMgc3RyaW5nKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChiLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyQ2xhc3MpPy5pbm5lckhUTUwgYXMgc3RyaW5nKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZGVzY2VuZGluZycpIHtcclxuICAgICAgICAgICAgcHJvZHVjdHMuc29ydChcclxuICAgICAgICAgICAgICAgIChhLCBiKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoYi5xdWVyeVNlbGVjdG9yKGZpbHRlckNsYXNzKT8uaW5uZXJIVE1MIGFzIHN0cmluZykgLVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoYS5xdWVyeVNlbGVjdG9yKGZpbHRlckNsYXNzKT8uaW5uZXJIVE1MIGFzIHN0cmluZylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc29ydE9wdGlvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpKTtcclxuICAgICAgICBzb3J0T3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gYCR7ZmlsdGVyfS0ke2RpcmVjdGlvbn1gKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RzJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgcHJvZHVjdHNXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHByb2R1Y3RzV3JhcHBlci5hcHBlbmRDaGlsZChwcm9kdWN0KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvcnQ7XHJcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcmQuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IFBpY3R1cmUgfSBmcm9tICcuLi8uLi8uLi9waWN0dXJlLmludGVmYWNlJztcclxuaW1wb3J0IEZhdm9yaXRlcyBmcm9tICcuLi9mYXZvcml0ZXMvZmF2b3JpdGVzJztcclxuaW1wb3J0IEZpbHRlciBmcm9tICcuLi9maWx0ZXIvZmlsdGVyJztcclxuaW1wb3J0IFBvcHVwIGZyb20gJy4uL3BvcHVwL3BvcHVwJztcclxuaW1wb3J0IFNvcnQgZnJvbSAnLi4vc29ydC9zb3J0JztcclxuaW1wb3J0ICcuL2NhcmQuc2Nzcyc7XHJcblxyXG5jbGFzcyBDYXJkIHtcclxuICAgIGZhdm9yaXRlczogRmF2b3JpdGVzO1xyXG4gICAgcG9wdXA6IFBvcHVwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZmF2b3JpdGVzID0gbmV3IEZhdm9yaXRlcygpO1xyXG4gICAgICAgIHRoaXMucG9wdXAgPSBuZXcgUG9wdXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyhkYXRhOiBQaWN0dXJlW10pIHtcclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0Q2FyZFRlbXA6IEhUTUxUZW1wbGF0ZUVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2R1Y3RDYXJkVGVtcCcpO1xyXG5cclxuICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb2R1Y3RDYXJkVGVtcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZENsb25lID0gcHJvZHVjdENhcmRUZW1wLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYXJkQ2xvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkSXRlbVRpdGxlID0gY2FyZENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pdGVtLXRpdGxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNGYXY6IGJvb2xlYW4gPSB0aGlzLmZhdm9yaXRlcy5jaGVja0ZhdihpdGVtLnRpdGxlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhdkJ0biA9IGNhcmRDbG9uZS5xdWVyeVNlbGVjdG9yKCcuZmF2LWJ0biBpbWcnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNGYXYgJiYgZmF2QnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhdkJ0bi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi8uLi8uLi9hc3NldHMvc3ZnL2xpa2UtYmxhY2suc3ZnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkSXRlbVRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJdGVtVGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FyZEl0ZW1JbWcgPSBjYXJkQ2xvbmUucXVlcnlTZWxlY3RvcignLmNhcmRfX2l0ZW0taW1nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmRJdGVtSW1nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJdGVtSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaXRlbS51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSXRlbUltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGl0ZW0udGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkSXRlbVllYXIgPSBjYXJkQ2xvbmUucXVlcnlTZWxlY3RvcignLmNhcmRfX2l0ZW0teWVhcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkSXRlbVllYXIpIGNhcmRJdGVtWWVhci50ZXh0Q29udGVudCA9IGl0ZW0ueWVhciArICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkSXRlbSA9IGNhcmRDbG9uZS5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbScpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkSXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW0uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtZmlsdGVycycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtpdGVtLmJydXNofS0ke2l0ZW0uYXV0aG9yLnRvTG93ZXJDYXNlKCl9LSR7aXRlbS5jb2xvcn1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FyZEl0ZW1QcmljZSA9IGNhcmRDbG9uZS5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbS1wcmljZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkSXRlbVByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJdGVtUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlICsgJyQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5vbnNhbGUgJiYgaXRlbS5zYWxlUHJpY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJdGVtUHJpY2UuY2xhc3NMaXN0LmFkZCgnY2FyZF9faXRlbV9zYWxlLXByaWNlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzYWxlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2UuY2xhc3NMaXN0LmFkZCgnY2FyZF9faXRlbS1wcmljZV9zYWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2UuaW5uZXJIVE1MID0gYCR7aXRlbS5wcmljZX0kYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJdGVtUHJpY2UuaW5uZXJIVE1MID0gYCR7aXRlbS5zYWxlUHJpY2V9JGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkSXRlbVByaWNlLmJlZm9yZShzYWxlUHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FsZVBlcmNlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUGVyY2VudC5jbGFzc0xpc3QuYWRkKCdjYXJkX19pdGVtX3NhbGUtcGVyY2VudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQuaW5uZXJIVE1MID0gYC0ke01hdGgucm91bmQoMTAwIC0gKGl0ZW0uc2FsZVByaWNlICogMTAwKSAvIGl0ZW0ucHJpY2UpfSVgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlLmFmdGVyKHNhbGVQZXJjZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJdGVtLmRhdGFzZXQuZmlsdGVycyArPSAnLXNhbGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYXZCdXR0b24gPSBjYXJkQ2xvbmUucXVlcnlTZWxlY3RvcignLmZhdi1idG4nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmF2QnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhdkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mYXZvcml0ZXMudG9nZ2xlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gbmV3IEZpbHRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLmZpbHRlclByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3J0ID0gbmV3IFNvcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnQuc29ydFByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9yZUJ1dHRvbiA9IGNhcmRDbG9uZS5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbS1idG4tLW1vcmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9yZUJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpOiB2b2lkID0+IHRoaXMucG9wdXAuY3JlYXRlUG9wdXAoZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kKGNhcmRDbG9uZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3RzKSBwcm9kdWN0cy5hcHBlbmQoZnJhZ21lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgcGljdHVyZXNMaXN0IH0gZnJvbSAnLi4vLi4vLi4vcGljdHVyZXMtbGlzdCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NhcmQvY2FyZCc7XHJcbmltcG9ydCAnLi9zZWFyY2guc2Nzcyc7XHJcblxyXG5jbGFzcyBTZWFyY2gge1xyXG4gICAgcHVibGljIHNlYXJjaFByb2R1Y3QoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKCk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RzJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHNlYXJjaElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgICAgIGlmICghdGV4dCkge1xyXG4gICAgICAgICAgICBwcm9kdWN0c1dyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGNhcmQuZHJhdyhwaWN0dXJlc0xpc3QpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2l0ZW0nKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IEFycmF5LmZyb20ocHJvZHVjdHMpLmZpbHRlcigocHJvZHVjdCkgPT5cclxuICAgICAgICAgICAgcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbS10aXRsZScpPy5pbm5lckhUTUwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXh0KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXJlZFByb2R1Y3RzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBwcm9kdWN0c1dyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkUHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQocHJvZHVjdCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLmlubmVySFRNTCA9ICdTb3JyeSwgbm90aGluZyBjb3VsZCBiZSBmb3VuZC4gWW91IGNhbiB0cnkgYW5vdGhlciBzZWFyY2ggcmVxdWVzdC4nO1xyXG4gICAgICAgICAgICBwcm9kdWN0c1dyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzV3JhcHBlci5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlU2VhcmNoVGV4dCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoUHJvZHVjdCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaWRlci5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuLi9maWx0ZXIvZmlsdGVyJztcclxuaW1wb3J0ICcuL3NsaWRlci5zY3NzJztcclxuXHJcbmNsYXNzIFNsaWRlciB7XHJcbiAgICBjbGFzc05hbWU6IHN0cmluZztcclxuICAgIGZpbHRlcjogRmlsdGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNsYXNzTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBuZXcgRmlsdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoKSB7XHJcbiAgICAgICAgY29uc3Qgc2xpZGVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNsYXNzTmFtZSkpIGFzIEhUTUxJbnB1dEVsZW1lbnRbXTtcclxuXHJcbiAgICAgICAgaWYgKCtzbGlkZXJzWzBdLnZhbHVlID4gK3NsaWRlcnNbMV0udmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgdGVtcCA9IHNsaWRlcnNbMV0udmFsdWU7XHJcbiAgICAgICAgICAgIHNsaWRlcnNbMV0udmFsdWUgPSBzbGlkZXJzWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICBzbGlkZXJzWzBdLnZhbHVlID0gdGVtcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgrc2xpZGVyc1sxXS52YWx1ZSA8ICtzbGlkZXJzWzBdLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBzbGlkZXJzWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICBzbGlkZXJzWzBdLnZhbHVlID0gc2xpZGVyc1sxXS52YWx1ZTtcclxuICAgICAgICAgICAgc2xpZGVyc1sxXS52YWx1ZSA9IHRlbXA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRSYW5nZUZpbHRlcigpIHtcclxuICAgICAgICBjb25zdCBzbGlkZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY2xhc3NOYW1lKSkgYXMgSFRNTElucHV0RWxlbWVudFtdO1xyXG4gICAgICAgIGNvbnN0IHNsaWRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7dGhpcy5jbGFzc05hbWV9X19jb250YWluZXJgKTtcclxuICAgICAgICBpZiAoc2xpZGVyQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0RnJvbSA9IHNsaWRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZnJvbScpO1xyXG4gICAgICAgICAgICBjb25zdCBlbmRXaXRoID0gc2xpZGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50bycpO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRGcm9tICYmIGVuZFdpdGgpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0RnJvbS5pbm5lckhUTUwgPSBzbGlkZXJzWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZW5kV2l0aC5pbm5lckhUTUwgPSBzbGlkZXJzWzFdLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNsaWRlclR5cGUgPSB0aGlzLmNsYXNzTmFtZS5zcGxpdCgnLScpWzBdLnNsaWNlKDEpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyLnJlbW92ZUZpbHRlcihzbGlkZXJUeXBlKTtcclxuICAgICAgICBjb25zdCBzbGlkZXJGaWx0ZXIgPSBgJHtzbGlkZXJUeXBlfSoke3NsaWRlcnNbMF0udmFsdWV9KiR7c2xpZGVyc1sxXS52YWx1ZX1gO1xyXG5cclxuICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlsdGVycycpO1xyXG5cclxuICAgICAgICBpZiAocHJldlZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWx0ZXJzJywgcHJldlZhbHVlICsgJy0nICsgc2xpZGVyRmlsdGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlsdGVycycsIHNsaWRlckZpbHRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XHJcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcnQuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCAnLi9jYXJ0LnNjc3MnO1xyXG5cclxuY2xhc3MgQ2FydCB7XHJcbiAgICBwdWJsaWMgYWRkVG9DYXJ0KGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0Jyk7XHJcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IHByb2R1Y3Q7XHJcbiAgICAgICAgaWYgKGFkZEJ1dHRvbikgcHJvZHVjdCA9IGFkZEJ1dHRvbi5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGxldCByZW1vdmVCdG47XHJcbiAgICAgICAgaWYgKHByb2R1Y3QpIHJlbW92ZUJ0biA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLmNhcmRfX2l0ZW0tYnRuLS1yZW1vdmUnKTtcclxuXHJcbiAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIGlmIChyZW1vdmVCdG4pIHJlbW92ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgICAgaWYgKGNhcnQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2FydEFtb3VudCA9IGNhcnQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FydFdhcm5pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC13YXJuaW5nJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FydEFtb3VudCAmJiBjYXJ0V2FybmluZykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3Jvc3NCdXR0b24gPSBjYXJ0V2FybmluZy5xdWVyeVNlbGVjdG9yKCcuYnRuLWNyb3NzX3dhcm5pbmcnKTtcclxuICAgICAgICAgICAgICAgIGlmIChjcm9zc0J1dHRvbikgY3Jvc3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYXJ0V2FybmluZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBbW91bnQgPSArY2FydEFtb3VudC5pbm5lckhUTUwgKyAxO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChuZXdBbW91bnQgPiAyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcnRXYXJuaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0QW1vdW50LmlubmVySFRNTCA9IG5ld0Ftb3VudC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcnRXYXJuaW5nLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVGcm9tQ2FydChlOiBFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IGNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydCcpO1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgICBsZXQgcHJvZHVjdDtcclxuICAgICAgICBpZiAocmVtb3ZlQnRuKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3QgPSByZW1vdmVCdG4ucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGFkZEJ0bjtcclxuICAgICAgICBpZiAocHJvZHVjdCkgYWRkQnRuID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faXRlbS1idG4tLWNhcnQnKTtcclxuXHJcbiAgICAgICAgaWYgKGFkZEJ0bikgYWRkQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIGlmIChjYXJ0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcnRBbW91bnQgPSBjYXJ0LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuICAgICAgICAgICAgaWYgKGNhcnRBbW91bnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Ftb3VudCA9ICtjYXJ0QW1vdW50LmlubmVySFRNTCAtIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5ld0Ftb3VudCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcnRBbW91bnQuaW5uZXJIVE1MID0gbmV3QW1vdW50LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XHJcbiIsImltcG9ydCBDYXJkIGZyb20gJy4uL3ZpZXcvY2FyZC9jYXJkJztcclxuaW1wb3J0IHsgcGljdHVyZXNMaXN0IH0gZnJvbSAnLi4vLi4vcGljdHVyZXMtbGlzdCc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vdmlldy9zZWFyY2gvc2VhcmNoJztcclxuaW1wb3J0IFNvcnQgZnJvbSAnLi4vdmlldy9zb3J0L3NvcnQnO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uL3ZpZXcvZmlsdGVyL2ZpbHRlcic7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAnLi4vdmlldy9zbGlkZXIvc2xpZGVyJztcclxuaW1wb3J0IFBvcHVwIGZyb20gJy4uL3ZpZXcvcG9wdXAvcG9wdXAnO1xyXG5pbXBvcnQgRmF2b3JpdGVzIGZyb20gJy4uL3ZpZXcvZmF2b3JpdGVzL2Zhdm9yaXRlcyc7XHJcbmltcG9ydCBDYXJ0IGZyb20gJy4uL3ZpZXcvY2FydC9jYXJ0JztcclxuaW1wb3J0IGRvbmUgZnJvbSAnLi9kb25lJztcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBwcmljZVNsaWRlcjogU2xpZGVyO1xyXG4gICAgeWVhclNsaWRlcjogU2xpZGVyO1xyXG4gICAgY2FyZDogQ2FyZDtcclxuICAgIHNvcnQ6IFNvcnQ7XHJcbiAgICBwb3B1cDogUG9wdXA7XHJcbiAgICBzZWFyY2g6IFNlYXJjaDtcclxuICAgIGZhdm9yaXRlczogRmF2b3JpdGVzO1xyXG4gICAgY2FydDogQ2FydDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByaWNlU2xpZGVyID0gbmV3IFNsaWRlcignLnByaWNlLXNsaWRlcicpO1xyXG4gICAgICAgIHRoaXMueWVhclNsaWRlciA9IG5ldyBTbGlkZXIoJy55ZWFyLXNsaWRlcicpO1xyXG4gICAgICAgIHRoaXMuY2FyZCA9IG5ldyBDYXJkKCk7XHJcbiAgICAgICAgdGhpcy5zb3J0ID0gbmV3IFNvcnQoKTtcclxuICAgICAgICB0aGlzLnBvcHVwID0gbmV3IFBvcHVwKCk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBuZXcgU2VhcmNoKCk7XHJcbiAgICAgICAgdGhpcy5mYXZvcml0ZXMgPSBuZXcgRmF2b3JpdGVzKCk7XHJcbiAgICAgICAgdGhpcy5jYXJ0ID0gbmV3IENhcnQoKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuY2FyZC5kcmF3KHBpY3R1cmVzTGlzdCk7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0Jyk7XHJcbiAgICAgICAgaWYgKHNlYXJjaElucHV0KSB7XHJcbiAgICAgICAgICAgIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5zZWFyY2guc2VhcmNoUHJvZHVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNlYXJjaFJlbW92ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtcmVtb3ZlJyk7XHJcbiAgICAgICAgaWYgKHNlYXJjaFJlbW92ZUJ0bikge1xyXG4gICAgICAgICAgICBzZWFyY2hSZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNlYXJjaC5yZW1vdmVTZWFyY2hUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc29ydExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29ydCcpO1xyXG4gICAgICAgIGlmIChzb3J0TGlzdCkge1xyXG4gICAgICAgICAgICBzb3J0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gZS50YXJnZXQgYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NvcnRCeScsIHNlbGVjdGVkT3B0aW9uLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnQuc29ydFByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBuZXcgRmlsdGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbHRlckNoZWNrYm94ZXMgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcicpIGFzIHVua25vd24pIGFzIEhUTUxJbnB1dEVsZW1lbnRbXTtcclxuXHJcbiAgICAgICAgZmlsdGVyQ2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT5cclxuICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IGUudGFyZ2V0IGFzIEhUTUxPcHRpb25FbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3hQYXJlbnQgPSBzZWxlY3RlZE9wdGlvbi5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlclR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2JveFBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlclR5cGUgPSBjaGVja2JveFBhcmVudC5jbGFzc0xpc3QudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWx0ZXJzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcnNBcnIgPSBwcmV2VmFsdWUuc3BsaXQoJy0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVzZW50RmlsdGVyID0gZmlsdGVyc0Fyci5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc3RhcnRzV2l0aChmaWx0ZXJUeXBlKSlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVySW5kOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJlc2VudEZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckluZCA9IGZpbHRlcnNBcnIuaW5kZXhPZihwcmVzZW50RmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdGaWx0ZXJWYWx1ZSA9IGAke3ByZXNlbnRGaWx0ZXJ9KiR7c2VsZWN0ZWRPcHRpb24udmFsdWV9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzQXJyW2ZpbHRlckluZF0gPSBuZXdGaWx0ZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyc0Fyci5wdXNoKGAke2ZpbHRlclR5cGV9KiR7c2VsZWN0ZWRPcHRpb24udmFsdWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbHRlcnMnLCBmaWx0ZXJzQXJyLmpvaW4oJy0nKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlsdGVycycsIGAke2ZpbHRlclR5cGV9KiR7c2VsZWN0ZWRPcHRpb24udmFsdWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIucmVtb3ZlRmlsdGVyKGAke2ZpbHRlclR5cGV9KiR7c2VsZWN0ZWRPcHRpb24udmFsdWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmlsdGVyLmZpbHRlclByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQuc29ydFByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2FsZVJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uc2FsZScpO1xyXG4gICAgICAgIGlmIChzYWxlUmFkaW8pIHtcclxuICAgICAgICAgICAgc2FsZVJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNhbGVSYWRpb0VsZW1lbnQgPSBzYWxlUmFkaW8gYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGlmIChzYWxlUmFkaW9FbGVtZW50LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlsdGVycycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpbHRlcnMnLCBwcmV2VmFsdWUgKyAnLXNhbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlsdGVycycsICdzYWxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIucmVtb3ZlRmlsdGVyKCdzYWxlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZmlsdGVyLmZpbHRlclByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQuc29ydFByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZmF2b3JpdGVSYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pc2Zhdm9yaXRlJyk7XHJcbiAgICAgICAgaWYgKGZhdm9yaXRlUmFkaW8pIHtcclxuICAgICAgICAgICAgZmF2b3JpdGVSYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYXZvcml0ZVJhZGlvRWxlbWVudCA9IGZhdm9yaXRlUmFkaW8gYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGlmIChmYXZvcml0ZVJhZGlvRWxlbWVudC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldlZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpbHRlcnMnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldlZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWx0ZXJzJywgcHJldlZhbHVlICsgJy1mYXZvcml0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaWx0ZXJzJywgJ2Zhdm9yaXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIucmVtb3ZlRmlsdGVyKCdmYXZvcml0ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZpbHRlci5maWx0ZXJQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0LnNvcnRQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNsaWRlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJfX2lucHV0JykpIGFzIEhUTUxJbnB1dEVsZW1lbnRbXTtcclxuICAgICAgICBzbGlkZXJzLmZvckVhY2goKHNsaWRlcikgPT4ge1xyXG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3ByaWNlLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmljZVNsaWRlci5zZXRSYW5nZUZpbHRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpY2VTbGlkZXIuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXJTbGlkZXIuc2V0UmFuZ2VGaWx0ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXJTbGlkZXIuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZpbHRlci5maWx0ZXJQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0LnNvcnRQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgYXNpZGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFzaWRlLWJ1dHRvbicpO1xyXG4gICAgICAgIGFzaWRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uRWwgPSBidXR0b24gYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBidXR0b25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChidXR0b25FbC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZS1zZXR0aW5ncy1idXR0b24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChidXR0b25FbC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZS1maWx0ZXJzLWJ1dHRvbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2ZpbHRlcnMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIuZmlsdGVyUHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydC5zb3J0UHJvZHVjdHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhcnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2l0ZW0tYnRuLS1jYXJ0Jyk7XHJcbiAgICAgICAgY2FydEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5jYXJ0LmFkZFRvQ2FydChlKSkpO1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9faXRlbS1idG4tLXJlbW92ZScpO1xyXG4gICAgICAgIHJlbW92ZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogRXZlbnQpID0+IHRoaXMuY2FydC5yZW1vdmVGcm9tQ2FydChlKSkpO1xyXG5cclxuICAgICAgICBmaWx0ZXIuZmlsdGVyUHJvZHVjdHMoKTtcclxuICAgICAgICB0aGlzLnNvcnQuc29ydFByb2R1Y3RzKCk7XHJcbiAgICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImNvbnN0IGRvbmUgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnRG9uZTonKTtcclxuICAgIGNvbnNvbGUubG9nKCdfX19fX19fXycpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICcqINCT0LvQsNCy0L3QsNGPINGB0YLRgNCw0L3QuNGG0LAg0YHQvtC00LXRgNC20LjRgiDQstGB0LUg0YLQvtCy0LDRgNGLINC80LDQs9Cw0LfQuNC90LAg0LAg0YLQsNC60LbQtSDRhNC40LvRjNGC0YDRiywg0YHRgtGA0L7QutGDINC/0L7QuNGB0LrQsCwg0L/QvtC70LUg0LTQu9GPINGB0L7RgNGC0LjRgNC+0LLQutC4LiDQktGL0L/QvtC70L3Rj9GO0YLRgdGPINGC0YDQtdCx0L7QstCw0L3QuNGPINC6INCy0ZHRgNGB0YLQutC1ICsxMCdcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAnKiDQmtCw0YDRgtC+0YfQutCwINGC0L7QstCw0YDQsCDRgdC+0LTQtdGA0LbQuNGCINC10LPQviDQuNC30L7QsdGA0LDQttC10L3QuNC1LCDQvdCw0LfQstCw0L3QuNC1LCDQutC+0LvQuNGH0LXRgdGC0LLQviDQtNCw0L3QvdC+0LPQviDRgtC+0LLQsNGA0LAg0L3QsCDRgdC60LvQsNC00LUsINCz0L7QtCDQstGL0YXQvtC00LAg0L3QsCDRgNGL0L3QvtC6LCDRhtCy0LXRgiwg0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70Ywg0Lgg0YIu0LQuLCDQvdCw0YXQvtC00LjRgtGB0Y8g0LvQuCDRgtC+0LLQsNGAINCyINC60L7RgNC30LjQvdC1ICsxMCAo0YfQsNGB0YLRjCDQtNCw0L3QvdGL0YUg0YPQutCw0LfQsNC90LAg0L3QsCDRgdCw0LzQvtC5INC60LDRgNGC0L7Rh9C60LUsINGH0LDRgdGC0YwgLSDQsiDQv9C+0L/QsNC/0LUsINC60L7RgtC+0YDRi9C5INC+0YLQutGA0YvQstCw0LXRgtGB0Y8g0L/QviDQutC70LjQutGDINC90LAg0LrQvdC+0L/QutGDIG1vcmUgaW5mbywg0LXRgdC70Lgg0LLQvNC10YHRgtC+INC60L3QvtC/0LrQuCBhZGQgdG8gY2FydCDQv9C+0Y/QstC40LvQsNGB0Ywg0LrQvdC+0L/QutCwIFJlbW92ZSBmcm9tIGNhcnQsINGC0L4g0YLQvtCy0LDRgCDQsiDQutC+0YDQt9C40L3QtSknXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coJ19fX18nKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygn0JTQvtCx0LDQstC70LXQvdC40LUg0YLQvtCy0LDRgNC+0LIg0LIg0LrQvtGA0LfQuNC90YMgKzIwJyk7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAnKiDQutC70LjQutCw0Y8g0L/QviDQutCw0YDRgtC+0YfQutC1INGBINGC0L7QstCw0YDQvtC8INC40LvQuCDQv9C+INC60L3QvtC/0LrQtSDQvdCwINC90LXQvCwg0YLQvtCy0LDRgCDQvNC+0LbQvdC+INC00L7QsdCw0LLQu9GP0YLRjCDQsiDQutC+0YDQt9C40L3RgyDQuNC70Lgg0YPQtNCw0LvRj9GC0YwuINCa0LDRgNGC0L7Rh9C60Lgg0LTQvtCx0LDQstC70LXQvdC90YvRhSDQsiDQutC+0YDQt9C40L3RgyDRgtC+0LLQsNGA0L7QsiDQstC90LXRiNC90LUg0L7RgtC70LjRh9Cw0Y7RgtGB0Y8g0L7RgiDQvtGB0YLQsNC70YzQvdGL0YUgKNC10YHQu9C4INCy0LzQtdGB0YLQviDQutC90L7Qv9C60LggYWRkIHRvIGNhcnQg0L/QvtGP0LLQuNC70LDRgdGMINC60L3QvtC/0LrQsCBSZW1vdmUgZnJvbSBjYXJ0LCDRgtC+INGC0L7QstCw0YAg0LIg0LrQvtGA0LfQuNC90LUpICsxMCdcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAnKiDQvdCwINGB0YLRgNCw0L3QuNGG0LUg0L7RgtC+0LHRgNCw0LbQsNC10YLRgdGPINC60L7Qu9C40YfQtdGB0YLQstC+INC00L7QsdCw0LLQu9C10L3QvdGL0YUg0LIg0LrQvtGA0LfQuNC90YMg0YLQvtCy0LDRgNC+0LIuINCf0YDQuCDQv9C+0L/Ri9GC0LrQtSDQtNC+0LHQsNCy0LjRgtGMINCyINC60L7RgNC30LjQvdGDINCx0L7Qu9GM0YjQtSAyMCDRgtC+0LLQsNGA0L7Qsiwg0LLRi9Cy0L7QtNC40YLRgdGPINCy0YHQv9C70YvQstCw0Y7RidC10LUg0YPQstC10LTQvtC80LvQtdC90LjQtSDRgSDRgtC10LrRgdGC0L7QvCBcItCY0LfQstC40L3QuNGC0LUsINCy0YHQtSDRgdC70L7RgtGLINC30LDQv9C+0LvQvdC10L3Ri1wiICjQvdCwINCw0L3Qs9C70LjQudGB0LrQvtC8KSArMTAnXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coJ19fX18nKTtcclxuICAgIGNvbnNvbGUubG9nKCfQodC+0YDRgtC40YDQvtCy0LrQsCArMjAnKTtcclxuICAgIGNvbnNvbGUubG9nKCcqINGB0L7RgNGC0LjRgNC+0LLQutCwINGC0L7QstCw0YDQvtCyINC/0L4g0L3QsNC30LLQsNC90LjRjiDQsiDQstC+0LfRgNCw0YHRgtCw0Y7RidC10Lwg0Lgg0YPQsdGL0LLQsNGO0YnQtdC8INC/0L7RgNGP0LTQutC1ICsxMCcpO1xyXG4gICAgY29uc29sZS5sb2coJyog0YHQvtGA0YLQuNGA0L7QstC60LAg0YLQvtCy0LDRgNC+0LIg0L/QviDQs9C+0LTRgyDQuNGFINCy0YvRhdC+0LTQsCDQvdCwINGA0YvQvdC+0Log0LIg0LLQvtC30YDQsNGB0YLQsNGO0YnQtdC8INC4INGD0LHRi9Cy0LDRjtGJ0LXQvCDQv9C+0YDRj9C00LrQtSArMTAnKTtcclxuICAgIGNvbnNvbGUubG9nKCfQlNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QviDQtdGB0YLRjCDRgdC+0YDRgtC40YDQvtCy0LrQsCDQv9C+INGG0LXQvdC1Jyk7XHJcbiAgICBjb25zb2xlLmxvZygnX19fXycpO1xyXG4gICAgY29uc29sZS5sb2coJ9Ck0LjQu9GM0YLRgNGLINCyINGD0LrQsNC30LDQvdC90L7QvCDQtNC40LDQv9Cw0LfQvtC90LUg0L7RgiDQuCDQtNC+ICszMCcpO1xyXG4gICAgY29uc29sZS5sb2coJyog0YTQuNC70YzRgtGA0Ysg0L/QviDRhtC10L3QtSArMTAnKTtcclxuICAgIGNvbnNvbGUubG9nKCcqINGE0LjQu9GM0YLRgNGLINC/0L4g0LPQvtC00YMg0LLRi9C/0YPRgdC60LAg0L3QsCDRgNGL0L3QvtC6ICsxMCcpO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJyog0LTQu9GPINGE0LjQu9GM0YLRgNCw0YbQuNC4INCyINGD0LrQsNC30LDQvdC90L7QvCDQtNC40LDQv9Cw0LfQvtC90LUg0LjRgdC/0L7Qu9GM0LfRg9C10YLRgdGPIHJhbmdlIHNsaWRlciDRgSDQtNCy0YPQvNGPINC/0L7Qu9C30YPQvdC60LDQvNC4LiDQn9GA0Lgg0L/QtdGA0LXQvNC10YnQtdC90LjQuCDQv9C+0LvQt9GD0L3QutC+0LIg0L7RgtC+0LHRgNCw0LbQsNC10YLRgdGPINC40YUg0YLQtdC60YPRidC10LUg0LfQvdCw0YfQtdC90LjQtSArMTAnXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coJ19fX18nKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygn0KTQuNC70YzRgtGA0Ysg0L/QviDQt9C90LDRh9C10L3QuNGOICszMCcpO1xyXG4gICAgY29uc29sZS5sb2coJyog0YTQuNC70YzRgtGA0Ysg0L/QviDQsNCy0YLQvtGA0YMgKzUnKTtcclxuICAgIGNvbnNvbGUubG9nKCcqINGE0LjQu9GM0YLRgNGLINC/0L4g0YbQstC10YLRgyArNScpO1xyXG4gICAgY29uc29sZS5sb2coJyog0YTQuNC70YzRgtGA0Ysg0L/QviDQuNGB0L/QvtC70YzQt9C+0LLQsNC90L3QvtC5INC60LjRgdGC0LggKzUnKTtcclxuICAgIGNvbnNvbGUubG9nKCcqINC80L7QttC90L4g0L7RgtC+0LHRgNCw0LfQuNGC0Ywg0YLQvtC70YzQutC+INC40LfQsdGA0LDQvdC90YvQtSDRgtC+0LLQsNGA0Ysg0LjQu9C4INGC0L7Qu9GM0LrQviDRgtC+0LLQsNGA0Ysg0YHQviDRgdC60LjQtNC60L7QuSArNScpO1xyXG4gICAgY29uc29sZS5sb2coJyog0LzQvtC20L3QviDQvtGC0YTQuNC70YzRgtGA0L7QstCw0YLRjCDRgtC+0LLQsNGA0Ysg0L/QviDQvdC10YHQutC+0LvRjNC60LjQvCDRhNC40LvRjNGC0YDQsNC8INC+0LTQvdC+0LPQviDRgtC40L/QsCArMTAnKTtcclxuICAgIGNvbnNvbGUubG9nKCcqINCc0L7QttC90L4g0L7RgtGE0LjQu9GM0YLRgNC+0LLQsNGC0Ywg0YLQvtCy0LDRgNGLINC/0L4g0L3QtdGB0LrQvtC70YzQutC40Lwg0YTQuNC70YzRgtGA0LDQvCDRgNCw0LfQvdC+0LPQviDRgtC40L/QsCArMjAnKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnX19fXycpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCfQodCx0YDQvtGBINGE0LjQu9GM0YLRgNC+0LIgKzIwJyk7XHJcbiAgICBjb25zb2xlLmxvZygnKiDQtdGB0YLRjCDQutC90L7Qv9C60LAgcmVzZXQg0LTQu9GPINGB0LHRgNC+0YHQsCDRhNC40LvRjNGC0YDQvtCyICsxMCcpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdfX19fJyk7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAnKiDQv9GA0Lgg0YHQsdGA0L7RgdC1INGE0LjQu9GM0YLRgNC+0LIg0LrQvdC+0L/QutC+0LkgcmVzZXQsINC/0L7Qu9C30YPQvdC60LggcmFuZ2Ugc2xpZGVyINGB0LTQstC40LPQsNGO0YLRgdGPINC6INC60YDQsNGP0LwsINC30L3QsNGH0LXQvdC40Y8g0L/QvtC70LfRg9C90LrQvtCyINCy0L7Qt9Cy0YDQsNGJ0LDRjtGC0YHRjyDQuiDQv9C10YDQstC+0L3QsNGH0LDQu9GM0L3Ri9C8ICsxMCdcclxuICAgICk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ9Ch0L7RhdGA0LDQvdC10L3QuNC1INC90LDRgdGC0YDQvtC10Log0LIgbG9jYWwgc3RvcmFnZSArMzAnKTtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICfQstGL0LHRgNCw0L3QvdGL0LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lwg0YTQuNC70YzRgtGA0YssINC/0L7RgNGP0LTQvtC6INGB0L7RgNGC0LjRgNC+0LLQutC4LCDQtNC+0LHQsNCy0LvQtdC90L3Ri9C1INCyINC40LfQsdGA0LDQvdC90L7QtSDRgtC+0LLQsNGA0Ysg0YHQvtGF0YDQsNC90Y/RjtGC0YHRjyDQv9GA0Lgg0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC1INGB0YLRgNCw0L3QuNGG0YsuINCV0YHRgtGMINC60L3QvtC/0LrQsCDRgdCx0YDQvtGB0LAg0L3QsNGB0YLRgNC+0LXQuiwg0LrQvtGC0L7RgNCw0Y8g0L7Rh9C40YnQsNC10YIgbG9jYWwgc3RvcmFnZSArMTAnXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coJ19fX18nKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygn0J/QvtC40YHQuiArMzAnKTtcclxuICAgIGNvbnNvbGUubG9nKCcq0L/RgNC4INC+0YLQutGA0YvRgtC40Lgg0L/RgNC40LvQvtC20LXQvdC40Y8g0LrRg9GA0YHQvtGAINC90LDRhdC+0LTQuNGC0YHRjyDQsiDQv9C+0LvQtSDQv9C+0LjRgdC60LAgKzInKTtcclxuICAgIGNvbnNvbGUubG9nKCcqINCw0LLRgtC+0LfQsNC/0L7Qu9C90LXQvdC40LUg0L/QvtC70Y8g0L/QvtC40YHQutCwINC+0YLQutC70Y7Rh9C10L3QviAo0L3QtdGCINCy0YvQv9Cw0LTQsNGO0YnQtdCz0L4g0YHQv9C40YHQutCwINGBINC/0YDQtdC00YvQtNGD0YnQuNC80Lgg0LfQsNC/0YDQvtGB0LDQvNC4KSArMicpO1xyXG4gICAgY29uc29sZS5sb2coJyog0LXRgdGC0YwgcGxhY2Vob2xkZXIgKzInKTtcclxuICAgIGNvbnNvbGUubG9nKCcqINCyINC/0L7Qu9C1INC/0L7QuNGB0LrQsCDQtdGB0YLRjCDQutGA0LXRgdGC0LjQuiwg0L/QvtC30LLQvtC70Y/RjtGJ0LjQuSDQvtGH0LjRgdGC0LjRgtGMINC/0L7Qu9C1INC/0L7QuNGB0LrQsCArMicpO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJyog0LXRgdC70Lgg0L3QtdGCINGB0L7QstC/0LDQtNC10L3QuNGPINC/0L7RgdC70LXQtNC+0LLQsNGC0LXQu9GM0L3QvtGB0YLQuCDQsdGD0LrQsiDQsiDQv9C+0LjRgdC60L7QstC+0Lwg0LfQsNC/0YDQvtGB0LUg0YEg0L3QsNC30LLQsNC90LjQtdC8INGC0L7QstCw0YDQsCwg0LLRi9Cy0L7QtNC40YLRgdGPINGD0LLQtdC00L7QvNC70LXQvdC40LUg0LIg0YfQtdC70L7QstC10LrQvtGH0LjRgtCw0LXQvNC+0Lwg0YTQvtGA0LzQsNGC0LUsINC90LDQv9GA0LjQvNC10YAgXCLQmNC30LLQuNC90LjRgtC1LCDRgdC+0LLQv9Cw0LTQtdC90LjQuSDQvdC1INC+0LHQvdCw0YDRg9C20LXQvdC+XCIgKzInXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJyog0L/RgNC4INCy0LLQvtC00LUg0L/QvtC40YHQutC+0LLQvtCz0L4g0LfQsNC/0YDQvtGB0LAg0L3QsCDRgdGC0YDQsNC90LjRhtC1INC+0YHRgtCw0Y7RgtGB0Y8g0YLQvtC70YzQutC+INGC0LUg0YLQvtCy0LDRgNGLLCDQsiDQutC+0YLQvtGA0YvRhSDQtdGB0YLRjCDRg9C60LDQt9Cw0L3QvdGL0LUg0LIg0L/QvtC40YHQutC1INCx0YPQutCy0Ysg0LIg0YPQutCw0LfQsNC90L3QvtC8INC/0L7RgNGP0LTQutC1LiDQn9GA0Lgg0Y3RgtC+0Lwg0L3QtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+LCDRh9GC0L7QsdGLINCx0YPQutCy0Ysg0LHRi9C70Lgg0LIg0L3QsNGH0LDQu9C1INGB0LvQvtCy0LAuINCg0LXQs9C40YHRgtGAINGB0LjQvNCy0L7Qu9C+0LIg0L/RgNC4INC/0L7QuNGB0LrQtSDQvdC1INGD0YfQuNGC0YvQstCw0LXRgtGB0Y8gKzEwJ1xyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICcqINC10YHQu9C4INC+0YfQuNGB0YLQuNGC0Ywg0L/QvtC70LUg0L/QvtC40YHQutCwLCDQvdCwINGB0YLRgNCw0L3QuNGG0LUg0L7RgtC+0LHRgNCw0LbQsNGO0YLRgdGPINGC0L7QstCw0YDRiywg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQuNC1INCy0YHQtdC8INCy0YvQsdGA0LDQvdC90YvQvCDRhNC40LvRjNGC0YDQsNC8INC4INC90LDRgdGC0YDQvtC50LrQsNC8INGB0L7RgNGC0LjRgNC+0LLQutC4ICsxMCdcclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb25lO1xyXG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcCc7XHJcbmltcG9ydCAnLi9zY3NzL25vcm1hbGl6ZS5zY3NzJztcclxuaW1wb3J0ICcuL3Njc3MvZ2xvYmFsLnNjc3MnO1xyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xyXG5hcHAuc3RhcnQoKTtcclxuIl0sIm5hbWVzIjpbIl9fX0NTU19MT0FERVJfRVhQT1JUX19fIiwicHVzaCIsIm1vZHVsZSIsImlkIiwiX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY29uY2F0Iiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImRlZHVwZSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJsZW5ndGgiLCJfaSIsIl9hcnJheUxpa2VUb0FycmF5IiwiYXJyIiwibGVuIiwiYXJyMiIsIkFycmF5IiwiX2l0ZW0iLCJpc0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJfcyIsIl9lIiwiX2FyciIsIl9uIiwiX2QiLCJjYWxsIiwibmV4dCIsImRvbmUiLCJ2YWx1ZSIsImVyciIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIm8iLCJtaW5MZW4iLCJuIiwiT2JqZWN0IiwicHJvdG90eXBlIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJmcm9tIiwidGVzdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIlR5cGVFcnJvciIsIl9ub25JdGVyYWJsZVJlc3QiLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwidXJsIiwib3B0aW9ucyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiaGFzaCIsIm5lZWRRdW90ZXMiLCJyZXBsYWNlIiwibWVtbyIsImdldFRhcmdldCIsInRhcmdldCIsInN0eWxlVGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSFRNTElGcmFtZUVsZW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJoZWFkIiwiZSIsInN0eWxlc0luRG9tIiwiZ2V0SW5kZXhCeUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicmVzdWx0IiwibW9kdWxlc1RvRG9tIiwiaWRDb3VudE1hcCIsImlkZW50aWZpZXJzIiwiYmFzZSIsImNvdW50IiwiaW5kZXgiLCJvYmoiLCJjc3MiLCJtZWRpYSIsInNvdXJjZU1hcCIsInJlZmVyZW5jZXMiLCJ1cGRhdGVyIiwiYWRkU3R5bGUiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwibm9uY2UiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldEF0dHJpYnV0ZSIsImluc2VydCIsIkVycm9yIiwiYXBwZW5kQ2hpbGQiLCJ0ZXh0U3RvcmUiLCJyZXBsYWNlVGV4dCIsInJlcGxhY2VtZW50IiwiZmlsdGVyIiwiQm9vbGVhbiIsImFwcGx5VG9TaW5nbGV0b25UYWciLCJyZW1vdmUiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImNzc05vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImNoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGx5VG9UYWciLCJyZW1vdmVBdHRyaWJ1dGUiLCJmaXJzdENoaWxkIiwic2luZ2xldG9uIiwic2luZ2xldG9uQ291bnRlciIsInVwZGF0ZSIsInN0eWxlSW5kZXgiLCJiaW5kIiwicGFyZW50Tm9kZSIsInJlbW92ZVN0eWxlRWxlbWVudCIsIm5ld09iaiIsImFsbCIsImF0b2IiLCJsYXN0SWRlbnRpZmllcnMiLCJuZXdMaXN0IiwibmV3TGFzdElkZW50aWZpZXJzIiwiX2luZGV4Iiwic3BsaWNlIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImdldHRlciIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsImciLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJzY3JpcHRVcmwiLCJpbXBvcnRTY3JpcHRzIiwibG9jYXRpb24iLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicCIsIm5jIiwicGljdHVyZXNMaXN0IiwidGl0bGUiLCJ5ZWFyIiwicHJpY2UiLCJhdXRob3IiLCJicnVzaCIsImRlc2NyaXB0aW9uIiwiYW1vdW50IiwiY29sb3IiLCJvbnNhbGUiLCJzYWxlUHJpY2UiLCJ0b2dnbGUiLCJpdGVtVGl0bGUiLCJmYXZTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInByZXZWYWx1ZSIsInNwbGl0IiwiZWxlbWVudCIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnRFbGVtZW50IiwidGFyZ2V0VGl0bGUiLCJpbm5lckhUTUwiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaW5kZXhPZiIsImRhdGFzZXQiLCJmaWx0ZXJzIiwic2V0SXRlbSIsImRyYXciLCJjaGVja0ZhdiIsImFsbFByb2R1Y3RzIiwicXVlcnlTZWxlY3RvckFsbCIsImZpbHRlcmVkUHJvZHVjdHMiLCJmYXZvcml0ZXMiLCJwcm9kdWN0c1dyYXBwZXIiLCJjYXJkIiwicmVtb3ZlRmlsdGVyIiwiZmlsdGVyc0FyciIsInN0YXJ0c1dpdGgiLCJmaWx0ZXJUb1JlbW92ZSIsInJlZ0ZpbHRlciIsIlJlZ0V4cCIsImluZCIsInByZXNlbnRGaWx0ZXIiLCJmaWx0ZXJQcm9kdWN0cyIsImZpbHRlcnNTdHIiLCJmaWx0ZXJCeVByaWNlQW5kWWVhciIsImZpbHRlckJ5U2FsZUFuZEZhdm9yaXRlIiwiZmlsdGVyQnlQcm9wZXJ0eSIsImRyYXdQcm9kdWN0cyIsInByb2R1Y3QiLCJjdXJyZW50UHJvZHVjdHMiLCJyYW5nZUFyciIsImNsYXNzTmFtZSIsIm5ld0ZpbHRlcmVkIiwicmVkdWNlIiwiZmlsdGVyZWQiLCJpdGVtVmFsdWUiLCJwYXJzZUludCIsInNsaWRlcnMiLCJzbGlkZXJDb250YWluZXIiLCJzdGFydEZyb20iLCJlbmRXaXRoIiwiZmlsdGVyQ2xhc3MiLCJmaWx0ZXJDaGVja2JveCIsImNoZWNrZWQiLCJwcm9kdWN0UHJvcGVydGllcyIsImNoZWNrYm94RmlsdGVyIiwicHJvZHVjdFRpdGxlRUwiLCJwcm9kdWN0VGl0bGUiLCJpc0ZhdiIsImZhdkJ0biIsImVycm9yTWVzc2FnZSIsImNsYXNzTGlzdCIsImFkZCIsImNyZWF0ZVBvcHVwIiwicHJvZHVjdFRpdGxlRWwiLCJwaWN0dXJlIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwicG9wdXBUZW1wIiwicG9wdXBDbG9uZSIsImNsb25lTm9kZSIsInBvcHVwVGl0bGUiLCJ0ZXh0Q29udGVudCIsInBvcHVwSW1nIiwicG9wdXBZZWFyIiwicG9wdXBQcmljZSIsImFmdGVyIiwic2FsZVBlcmNlbnQiLCJNYXRoIiwicm91bmQiLCJwb3B1cEF1dGhvciIsInBvcHVwQ29sb3IiLCJwb3B1cEJydXNoIiwicG9wdXBEZXNjcmlwdGlvbiIsImNsb3NlQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlUG9wdXAiLCJwb3B1cCIsImFwcGVuZCIsIm1haW4iLCJib2R5Iiwib3ZlcmZsb3ciLCJsYXN0Q2hpbGQiLCJsYXN0RWxlbWVudENoaWxkIiwic29ydFByb2R1Y3RzIiwic29ydCIsInJlbW92ZUl0ZW0iLCJkaXJlY3Rpb24iLCJwcm9kdWN0cyIsImIiLCJsb2NhbGVDb21wYXJlIiwicGFyc2VGbG9hdCIsIm9wdGlvbiIsInNlbGVjdGVkIiwicHJvZHVjdENhcmRUZW1wIiwiY2FyZENsb25lIiwiY2FyZEl0ZW1UaXRsZSIsImNhcmRJdGVtSW1nIiwiY2FyZEl0ZW1ZZWFyIiwiY2FyZEl0ZW0iLCJjYXJkSXRlbVByaWNlIiwiYmVmb3JlIiwiZmF2QnV0dG9uIiwibW9yZUJ1dHRvbiIsInNlYXJjaFByb2R1Y3QiLCJ0ZXh0IiwidHJpbSIsInJlbW92ZVNlYXJjaFRleHQiLCJ0ZW1wIiwic2V0UmFuZ2VGaWx0ZXIiLCJzbGlkZXJUeXBlIiwic2xpZGVyRmlsdGVyIiwiYWRkVG9DYXJ0IiwicmVtb3ZlQnRuIiwiY2FydCIsImFkZEJ1dHRvbiIsImNhcnRBbW91bnQiLCJjcm9zc0J1dHRvbiIsIm5ld0Ftb3VudCIsInJlbW92ZUZyb21DYXJ0IiwiYWRkQnRuIiwicHJpY2VTbGlkZXIiLCJ5ZWFyU2xpZGVyIiwic2VhcmNoIiwic3RhcnQiLCJzZWFyY2hJbnB1dCIsInNlYXJjaFJlbW92ZUJ0biIsInNvcnRMaXN0Iiwic2VsZWN0ZWRPcHRpb24iLCJjaGVja2JveCIsImZpbHRlclR5cGUiLCJjaGVja2JveFBhcmVudCIsImZpbHRlckluZCIsIm5ld0ZpbHRlclZhbHVlIiwic2FsZVJhZGlvIiwiZmF2b3JpdGVSYWRpbyIsInNsaWRlciIsImNvbnRhaW5zIiwiYnV0dG9uIiwiYnV0dG9uRWwiLCJjbGVhciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9
