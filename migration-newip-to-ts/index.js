(() => {
  "use strict";
  var n = {
      363: (n, r, e) => {
        e.d(r, { Z: () => A });
        var t = e(15),
          o = e.n(t),
          i = e(645),
          a = e.n(i)()(o());
        a.push([
          n.id,
          ".categories {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    max-width: 90%;\r\n    margin: 0 auto;\r\n    overflow: auto;\r\n    align-items: center;\r\n    font: 300 1em 'Fira Sans', sans-serif;\r\n}\r\n\r\n.category__item {\r\n    background: #02394A;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.5em;\r\n    padding: 1em 2em;\r\n    color: white;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\r\n}\r\n\r\n.category__item:hover,\r\n.category__item:focus {\r\n    border-color: #F26DF9;\r\n    color: #F26DF9;\r\n    box-shadow: 0 0.5em 0.5em -0.4em #F26DF9;\r\n    transform: translateY(-0.25em);\r\n}\r\n\r\n.category__item:active {\r\n    transform: translateY(5px) scale(0.98);\r\n}\r\n\r\n.category__item-name {\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/components/view/categories/categories.css",
            ],
            names: [],
            mappings:
              "AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,cAAc;IACd,cAAc;IACd,cAAc;IACd,mBAAmB;IACnB,qCAAqC;AACzC;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,aAAa;IACb,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,4EAA4E;AAChF;;AAEA;;IAEI,qBAAqB;IACrB,cAAc;IACd,wCAAwC;IACxC,8BAA8B;AAClC;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB",
            sourcesContent: [
              ".categories {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    max-width: 90%;\r\n    margin: 0 auto;\r\n    overflow: auto;\r\n    align-items: center;\r\n    font: 300 1em 'Fira Sans', sans-serif;\r\n}\r\n\r\n.category__item {\r\n    background: #02394A;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.5em;\r\n    padding: 1em 2em;\r\n    color: white;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\r\n}\r\n\r\n.category__item:hover,\r\n.category__item:focus {\r\n    border-color: #F26DF9;\r\n    color: #F26DF9;\r\n    box-shadow: 0 0.5em 0.5em -0.4em #F26DF9;\r\n    transform: translateY(-0.25em);\r\n}\r\n\r\n.category__item:active {\r\n    transform: translateY(5px) scale(0.98);\r\n}\r\n\r\n.category__item-name {\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}",
            ],
            sourceRoot: "",
          },
        ]);
        const A = a;
      },
      669: (n, r, e) => {
        e.d(r, { Z: () => A });
        var t = e(15),
          o = e.n(t),
          i = e(645),
          a = e.n(i)()(o());
        a.push([
          n.id,
          ".news {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    column-gap: 1.5vw;\r\n    padding: 0 3vw;\r\n}\r\n\r\n\r\n.news__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 2.5vh auto;\r\n    margin-bottom: 1.6%;\r\n    background: #fff;\r\n    color: #333;\r\n    line-height: 1.4;\r\n    font-family: Arial, sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n    transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n    position: relative;\r\n    height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -120%;\r\n    margin: auto;\r\n    transition: left 0.2s;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    color: #fff;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n    padding: 1rem;\r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n    line-height: 1;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: #a2a2a2;\r\n    margin-top: 5px;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n    text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n    color: #5ad67d;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n    content: '→';\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    vertical-align: middle;\r\n    transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n    margin-left: 5px;\r\n    opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n    margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n    margin-top: 1.25rem;\r\n    position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 5px;\r\n    background: #5ad67d;\r\n    width: 35px;\r\n    top: -0.75rem;\r\n    border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n    left: 0%;\r\n}\r\n\r\n@media (max-width: 840px) {\r\n    .news {\r\n        grid-template-columns: repeat(1, 1fr);\r\n    }\r\n}\r\n\r\n@media (min-width: 640px) {\r\n    .news__item {\r\n        flex-direction: row;\r\n        max-width: 700px;\r\n    }\r\n\r\n    .news__item .news__meta {\r\n        flex-basis: 40%;\r\n        height: auto;\r\n    }\r\n\r\n    .news__item .news__description {\r\n        flex-basis: 60%;\r\n    }\r\n\r\n    .news__item .news__description:before {\r\n        -webkit-transform: skewX(-3deg);\r\n        transform: skewX(-3deg);\r\n        content: '';\r\n        background: #fff;\r\n        width: 30px;\r\n        position: absolute;\r\n        left: -10px;\r\n        top: 0;\r\n        bottom: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    .news__item.alt {\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .news__item.alt .news__description:before {\r\n        left: inherit;\r\n        right: -10px;\r\n        -webkit-transform: skew(3deg);\r\n        transform: skew(3deg);\r\n    }\r\n\r\n    .news__item.alt .news__meta-details {\r\n        padding-left: 25px;\r\n    }\r\n}\r\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/components/view/news/news.css"],
            names: [],
            mappings:
              "AAAA;IACI,aAAa;IACb,qCAAqC;IACrC,iBAAiB;IACjB,cAAc;AAClB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,gBAAgB;IAChB,8BAA8B;IAC9B,kBAAkB;IAClB,gBAAgB;IAChB,yFAAyF;AAC7F;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,sBAAsB;IACtB,2BAA2B;IAC3B,0BAA0B;AAC9B;;AAEA;;IAEI,YAAY;IACZ,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,8BAA8B;IAC9B,WAAW;IACX,aAAa;IACb,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,cAAc;IACd,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,yBAAyB;IACzB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,sBAAsB;IACtB,qCAAqC;AACzC;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI;QACI,qCAAqC;IACzC;AACJ;;AAEA;IACI;QACI,mBAAmB;QACnB,gBAAgB;IACpB;;IAEA;QACI,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,+BAA+B;QAC/B,uBAAuB;QACvB,WAAW;QACX,gBAAgB;QAChB,WAAW;QACX,kBAAkB;QAClB,WAAW;QACX,MAAM;QACN,SAAS;QACT,WAAW;IACf;;IAEA;QACI,2BAA2B;IAC/B;;IAEA;QACI,aAAa;QACb,YAAY;QACZ,6BAA6B;QAC7B,qBAAqB;IACzB;;IAEA;QACI,kBAAkB;IACtB;AACJ",
            sourcesContent: [
              ".news {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    column-gap: 1.5vw;\r\n    padding: 0 3vw;\r\n}\r\n\r\n\r\n.news__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 2.5vh auto;\r\n    margin-bottom: 1.6%;\r\n    background: #fff;\r\n    color: #333;\r\n    line-height: 1.4;\r\n    font-family: Arial, sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n    transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n    position: relative;\r\n    height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -120%;\r\n    margin: auto;\r\n    transition: left 0.2s;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    color: #fff;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n    padding: 1rem;\r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n    line-height: 1;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: #a2a2a2;\r\n    margin-top: 5px;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n    text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n    color: #5ad67d;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n    content: '→';\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    vertical-align: middle;\r\n    transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n    margin-left: 5px;\r\n    opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n    margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n    margin-top: 1.25rem;\r\n    position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 5px;\r\n    background: #5ad67d;\r\n    width: 35px;\r\n    top: -0.75rem;\r\n    border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n    left: 0%;\r\n}\r\n\r\n@media (max-width: 840px) {\r\n    .news {\r\n        grid-template-columns: repeat(1, 1fr);\r\n    }\r\n}\r\n\r\n@media (min-width: 640px) {\r\n    .news__item {\r\n        flex-direction: row;\r\n        max-width: 700px;\r\n    }\r\n\r\n    .news__item .news__meta {\r\n        flex-basis: 40%;\r\n        height: auto;\r\n    }\r\n\r\n    .news__item .news__description {\r\n        flex-basis: 60%;\r\n    }\r\n\r\n    .news__item .news__description:before {\r\n        -webkit-transform: skewX(-3deg);\r\n        transform: skewX(-3deg);\r\n        content: '';\r\n        background: #fff;\r\n        width: 30px;\r\n        position: absolute;\r\n        left: -10px;\r\n        top: 0;\r\n        bottom: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    .news__item.alt {\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .news__item.alt .news__description:before {\r\n        left: inherit;\r\n        right: -10px;\r\n        -webkit-transform: skew(3deg);\r\n        transform: skew(3deg);\r\n    }\r\n\r\n    .news__item.alt .news__meta-details {\r\n        padding-left: 25px;\r\n    }\r\n}\r\n",
            ],
            sourceRoot: "",
          },
        ]);
        const A = a;
      },
      501: (n, r, e) => {
        e.d(r, { Z: () => A });
        var t = e(15),
          o = e.n(t),
          i = e(645),
          a = e.n(i)()(o());
        a.push([
          n.id,
          ".sources {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    max-width: 90%;\r\n    margin: 0 auto;\r\n    max-height: 200px;\r\n    overflow: auto;\r\n    align-items: flex-start;\r\n    font: 300 1em 'Fira Sans', sans-serif;\r\n}\r\n\r\n.source__item {\r\n    background: none;\r\n    border: 2px solid #5158bb;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.3em;\r\n    padding: 0.5em 1em;\r\n    color: #5158bb;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus {\r\n    border-color: #eb4b98;\r\n    color: #eb4b98;\r\n    box-shadow: 0 0.5em 0.5em -0.4em #eb4b98;\r\n    transform: translateY(-0.25em);\r\n}\r\n\r\n.source__item:active {\r\n    transform: translateY(5px) scale(0.98);\r\n}\r\n\r\n.source__item-name {\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}\r\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/components/view/sources/sources.css"],
            names: [],
            mappings:
              "AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,cAAc;IACd,cAAc;IACd,iBAAiB;IACjB,cAAc;IACd,uBAAuB;IACvB,qCAAqC;AACzC;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,aAAa;IACb,cAAc;IACd,aAAa;IACb,kBAAkB;IAClB,cAAc;IACd,iBAAiB;IACjB,eAAe;IACf,4EAA4E;AAChF;;AAEA;;IAEI,qBAAqB;IACrB,cAAc;IACd,wCAAwC;IACxC,8BAA8B;AAClC;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB",
            sourcesContent: [
              ".sources {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    max-width: 90%;\r\n    margin: 0 auto;\r\n    max-height: 200px;\r\n    overflow: auto;\r\n    align-items: flex-start;\r\n    font: 300 1em 'Fira Sans', sans-serif;\r\n}\r\n\r\n.source__item {\r\n    background: none;\r\n    border: 2px solid #5158bb;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.3em;\r\n    padding: 0.5em 1em;\r\n    color: #5158bb;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus {\r\n    border-color: #eb4b98;\r\n    color: #eb4b98;\r\n    box-shadow: 0 0.5em 0.5em -0.4em #eb4b98;\r\n    transform: translateY(-0.25em);\r\n}\r\n\r\n.source__item:active {\r\n    transform: translateY(5px) scale(0.98);\r\n}\r\n\r\n.source__item-name {\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}\r\n",
            ],
            sourceRoot: "",
          },
        ]);
        const A = a;
      },
      767: (n, r, e) => {
        e.d(r, { Z: () => A });
        var t = e(15),
          o = e.n(t),
          i = e(645),
          a = e.n(i)()(o());
        a.push([
          n.id,
          "body {\r\n    color: #043565;\r\n    font-family: sans-serif;\r\n}\r\n\r\nheader {\r\n    max-width: 90%;\r\n    margin: 0 auto;\r\n}\r\n\r\nheader h1 {\r\n    font-size: 4rem;\r\n    font-weight: 800;\r\n    margin: 0.5em 0;\r\n    \r\n}\r\n\r\nfooter {\r\n    max-width: 90%;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 5px;\r\n    flex-wrap: wrap;\r\n    margin: 5vh auto;\r\n    font-size: 1rem;\r\n}\r\n\r\nfooter .copyright {\r\n    font-size: 0.8rem;\r\n    color: #043565;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\nfooter .copyright:before {\r\n    content: '©';\r\n}\r\n\r\n.footer a,\r\n.footer span {\r\n    display: block;\r\n    padding: 10px;\r\n    color: var(--green-color);\r\n}\r\n\r\n@media (max-width: 640px) {\r\n    header h1 {\r\n        font-size: 3rem;\r\n        margin: 0.2em 0;\r\n    }\r\n}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/global.css"],
            names: [],
            mappings:
              "AAAA;IACI,cAAc;IACd,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,eAAe;;AAEnB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,QAAQ;IACR,eAAe;IACf,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,cAAc;IACd,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI;QACI,eAAe;QACf,eAAe;IACnB;AACJ",
            sourcesContent: [
              "body {\r\n    color: #043565;\r\n    font-family: sans-serif;\r\n}\r\n\r\nheader {\r\n    max-width: 90%;\r\n    margin: 0 auto;\r\n}\r\n\r\nheader h1 {\r\n    font-size: 4rem;\r\n    font-weight: 800;\r\n    margin: 0.5em 0;\r\n    \r\n}\r\n\r\nfooter {\r\n    max-width: 90%;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 5px;\r\n    flex-wrap: wrap;\r\n    margin: 5vh auto;\r\n    font-size: 1rem;\r\n}\r\n\r\nfooter .copyright {\r\n    font-size: 0.8rem;\r\n    color: #043565;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\nfooter .copyright:before {\r\n    content: '©';\r\n}\r\n\r\n.footer a,\r\n.footer span {\r\n    display: block;\r\n    padding: 10px;\r\n    color: var(--green-color);\r\n}\r\n\r\n@media (max-width: 640px) {\r\n    header h1 {\r\n        font-size: 3rem;\r\n        margin: 0.2em 0;\r\n    }\r\n}",
            ],
            sourceRoot: "",
          },
        ]);
        const A = a;
      },
      645: (n) => {
        n.exports = function (n) {
          var r = [];
          return (
            (r.toString = function () {
              return this.map(function (r) {
                var e = n(r);
                return r[2] ? "@media ".concat(r[2], " {").concat(e, "}") : e;
              }).join("");
            }),
            (r.i = function (n, e, t) {
              "string" == typeof n && (n = [[null, n, ""]]);
              var o = {};
              if (t)
                for (var i = 0; i < this.length; i++) {
                  var a = this[i][0];
                  null != a && (o[a] = !0);
                }
              for (var A = 0; A < n.length; A++) {
                var s = [].concat(n[A]);
                (t && o[s[0]]) ||
                  (e &&
                    (s[2]
                      ? (s[2] = "".concat(e, " and ").concat(s[2]))
                      : (s[2] = e)),
                  r.push(s));
              }
            }),
            r
          );
        };
      },
      15: (n) => {
        function r(n, r) {
          (null == r || r > n.length) && (r = n.length);
          for (var e = 0, t = new Array(r); e < r; e++) t[e] = n[e];
          return t;
        }
        n.exports = function (n) {
          var e,
            t,
            o =
              ((t = 4),
              (function (n) {
                if (Array.isArray(n)) return n;
              })((e = n)) ||
                (function (n, r) {
                  var e =
                    n &&
                    (("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                      n["@@iterator"]);
                  if (null != e) {
                    var t,
                      o,
                      i = [],
                      a = !0,
                      A = !1;
                    try {
                      for (
                        e = e.call(n);
                        !(a = (t = e.next()).done) &&
                        (i.push(t.value), !r || i.length !== r);
                        a = !0
                      );
                    } catch (n) {
                      (A = !0), (o = n);
                    } finally {
                      try {
                        a || null == e.return || e.return();
                      } finally {
                        if (A) throw o;
                      }
                    }
                    return i;
                  }
                })(e, t) ||
                (function (n, e) {
                  if (n) {
                    if ("string" == typeof n) return r(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    return (
                      "Object" === t &&
                        n.constructor &&
                        (t = n.constructor.name),
                      "Map" === t || "Set" === t
                        ? Array.from(n)
                        : "Arguments" === t ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                        ? r(n, e)
                        : void 0
                    );
                  }
                })(e, t) ||
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
              l = a.sources.map(function (n) {
                return "/*# sourceURL="
                  .concat(a.sourceRoot || "")
                  .concat(n, " */");
              });
            return [i].concat(l).concat([c]).join("\n");
          }
          return [i].join("\n");
        };
      },
      379: (n, r, e) => {
        var t,
          o = (function () {
            var n = {};
            return function (r) {
              if (void 0 === n[r]) {
                var e = document.querySelector(r);
                if (
                  window.HTMLIFrameElement &&
                  e instanceof window.HTMLIFrameElement
                )
                  try {
                    e = e.contentDocument.head;
                  } catch (n) {
                    e = null;
                  }
                n[r] = e;
              }
              return n[r];
            };
          })(),
          i = [];
        function a(n) {
          for (var r = -1, e = 0; e < i.length; e++)
            if (i[e].identifier === n) {
              r = e;
              break;
            }
          return r;
        }
        function A(n, r) {
          for (var e = {}, t = [], o = 0; o < n.length; o++) {
            var A = n[o],
              s = r.base ? A[0] + r.base : A[0],
              c = e[s] || 0,
              l = "".concat(s, " ").concat(c);
            e[s] = c + 1;
            var u = a(l),
              p = { css: A[1], media: A[2], sourceMap: A[3] };
            -1 !== u
              ? (i[u].references++, i[u].updater(p))
              : i.push({ identifier: l, updater: f(p, r), references: 1 }),
              t.push(l);
          }
          return t;
        }
        function s(n) {
          var r = document.createElement("style"),
            t = n.attributes || {};
          if (void 0 === t.nonce) {
            var i = e.nc;
            i && (t.nonce = i);
          }
          if (
            (Object.keys(t).forEach(function (n) {
              r.setAttribute(n, t[n]);
            }),
            "function" == typeof n.insert)
          )
            n.insert(r);
          else {
            var a = o(n.insert || "head");
            if (!a)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            a.appendChild(r);
          }
          return r;
        }
        var c,
          l =
            ((c = []),
            function (n, r) {
              return (c[n] = r), c.filter(Boolean).join("\n");
            });
        function u(n, r, e, t) {
          var o = e
            ? ""
            : t.media
            ? "@media ".concat(t.media, " {").concat(t.css, "}")
            : t.css;
          if (n.styleSheet) n.styleSheet.cssText = l(r, o);
          else {
            var i = document.createTextNode(o),
              a = n.childNodes;
            a[r] && n.removeChild(a[r]),
              a.length ? n.insertBefore(i, a[r]) : n.appendChild(i);
          }
        }
        function p(n, r, e) {
          var t = e.css,
            o = e.media,
            i = e.sourceMap;
          if (
            (o ? n.setAttribute("media", o) : n.removeAttribute("media"),
            i &&
              "undefined" != typeof btoa &&
              (t += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                " */"
              )),
            n.styleSheet)
          )
            n.styleSheet.cssText = t;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(t));
          }
        }
        var d = null,
          m = 0;
        function f(n, r) {
          var e, t, o;
          if (r.singleton) {
            var i = m++;
            (e = d || (d = s(r))),
              (t = u.bind(null, e, i, !1)),
              (o = u.bind(null, e, i, !0));
          } else
            (e = s(r)),
              (t = p.bind(null, e, r)),
              (o = function () {
                !(function (n) {
                  if (null === n.parentNode) return !1;
                  n.parentNode.removeChild(n);
                })(e);
              });
          return (
            t(n),
            function (r) {
              if (r) {
                if (
                  r.css === n.css &&
                  r.media === n.media &&
                  r.sourceMap === n.sourceMap
                )
                  return;
                t((n = r));
              } else o();
            }
          );
        }
        n.exports = function (n, r) {
          (r = r || {}).singleton ||
            "boolean" == typeof r.singleton ||
            (r.singleton =
              (void 0 === t &&
                (t = Boolean(
                  window && document && document.all && !window.atob
                )),
              t));
          var e = A((n = n || []), r);
          return function (n) {
            if (
              ((n = n || []),
              "[object Array]" === Object.prototype.toString.call(n))
            ) {
              for (var t = 0; t < e.length; t++) {
                var o = a(e[t]);
                i[o].references--;
              }
              for (var s = A(n, r), c = 0; c < e.length; c++) {
                var l = a(e[c]);
                0 === i[l].references && (i[l].updater(), i.splice(l, 1));
              }
              e = s;
            }
          };
        };
      },
    },
    r = {};
  function e(t) {
    var o = r[t];
    if (void 0 !== o) return o.exports;
    var i = (r[t] = { id: t, exports: {} });
    return n[t](i, i.exports, e), i.exports;
  }
  (e.n = (n) => {
    var r = n && n.__esModule ? () => n.default : () => n;
    return e.d(r, { a: r }), r;
  }),
    (e.d = (n, r) => {
      for (var t in r)
        e.o(r, t) &&
          !e.o(n, t) &&
          Object.defineProperty(n, t, { enumerable: !0, get: r[t] });
    }),
    (e.o = (n, r) => Object.prototype.hasOwnProperty.call(n, r)),
    (() => {
      var n,
        r = function () {
          return (
            (r =
              Object.assign ||
              function (n) {
                for (var r, e = 1, t = arguments.length; e < t; e++)
                  for (var o in (r = arguments[e]))
                    Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
                return n;
              }),
            r.apply(this, arguments)
          );
        };
      !(function (n) {
        (n[(n.Unauthorized = 401)] = "Unauthorized"),
          (n[(n.NotFound = 404)] = "NotFound");
      })(n || (n = {}));
      var t,
        o = (function () {
          function e(n, r) {
            (this.baseLink = n), (this.options = r);
          }
          return (
            (e.prototype.getResp = function (n, r) {
              var e = n.endpoint,
                t = n.options,
                o = void 0 === t ? {} : t;
              void 0 === r &&
                (r = function () {
                  console.error("No callback for GET response");
                }),
                this.load("GET", e, r, o);
            }),
            (e.prototype.errorHandler = function (r) {
              if (!r.ok)
                throw (
                  ((r.status !== n.Unauthorized && r.status !== n.NotFound) ||
                    console.log(
                      "Sorry, but there is "
                        .concat(r.status, " error: ")
                        .concat(r.statusText)
                    ),
                  Error(r.statusText))
                );
              return r;
            }),
            (e.prototype.makeUrl = function (n, e) {
              var t = r(r({}, this.options), n),
                o = "".concat(this.baseLink).concat(e, "?");
              return (
                Object.keys(t).forEach(function (n) {
                  o += "".concat(n, "=").concat(t[n], "&");
                }),
                o.slice(0, -1)
              );
            }),
            (e.prototype.load = function (n, r, e, t) {
              void 0 === t && (t = {}),
                fetch(this.makeUrl(t, r), { method: n })
                  .then(this.errorHandler)
                  .then(function (n) {
                    return n.json();
                  })
                  .then(function (n) {
                    return e(n);
                  })
                  .catch(function (n) {
                    return console.error(n);
                  });
            }),
            e
          );
        })(),
        i =
          ((t = function (n, r) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (n, r) {
                    n.__proto__ = r;
                  }) ||
                function (n, r) {
                  for (var e in r)
                    Object.prototype.hasOwnProperty.call(r, e) && (n[e] = r[e]);
                }),
              t(n, r)
            );
          }),
          function (n, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null"
              );
            function e() {
              this.constructor = n;
            }
            t(n, r),
              (n.prototype =
                null === r
                  ? Object.create(r)
                  : ((e.prototype = r.prototype), new e()));
          });
      const a = (function (n) {
        function r() {
          return (
            n.call(this, "https://nodenews.herokuapp.com/", {
              apiKey: "2fb88c9945c34e05b203ee894e77347c",
            }) || this
          );
        }
        return i(r, n), r;
      })(o);
      var A = e(379),
        s = e.n(A),
        c = e(669);
      s()(c.Z, { insert: "head", singleton: !1 }), c.Z.locals;
      var l = (function () {
        function n() {}
        return (
          (n.prototype.draw = function (n) {
            var r =
                n.length >= 10
                  ? n.filter(function (n, r) {
                      return r < 10;
                    })
                  : n,
              e = document.createDocumentFragment(),
              t = document.querySelector("#newsItemTemp");
            r.forEach(function (n, r) {
              var o = t.content.cloneNode(!0),
                i = o.querySelector(".news__item");
              r % 2 && i.classList.add("alt"),
                (o.querySelector(
                  ".news__meta-photo"
                ).style.backgroundImage = "url(".concat(
                  n.urlToImage || "img/news_placeholder.jpg",
                  ")"
                )),
                (o.querySelector(".news__meta-author").textContent =
                  n.author || n.source.name),
                (o.querySelector(
                  ".news__meta-date"
                ).textContent = n.publishedAt
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("-")),
                (o.querySelector(".news__description-title").textContent =
                  n.title),
                (o.querySelector(".news__description-source").textContent =
                  n.source.name),
                (o.querySelector(".news__description-content").textContent =
                  n.description),
                o
                  .querySelector(".news__read-more a")
                  .setAttribute("href", n.url),
                e.append(o);
            });
            var o = document.querySelector(".news");
            (o.innerHTML = ""), o.appendChild(e);
          }),
          n
        );
      })();
      const u = l;
      var p = e(501);
      s()(p.Z, { insert: "head", singleton: !1 }), p.Z.locals;
      const d = (function () {
        function n() {}
        return (
          (n.prototype.draw = function (n) {
            var r = document.createDocumentFragment(),
              e = document.querySelector("#sourceItemTemp");
            n.forEach(function (n) {
              if (null != e) {
                var t = e.content.cloneNode(!0);
                null != t &&
                  ((t.querySelector(".source__item-name").textContent = n.name),
                  t
                    .querySelector(".source__item")
                    .setAttribute("data-source-id", n.id),
                  r.append(t),
                  document.querySelector(".sources").append(r));
              }
            });
          }),
          n
        );
      })();
      var m = e(363);
      s()(m.Z, { insert: "head", singleton: !1 }), m.Z.locals;
      const f = (function () {
        function n() {}
        return (
          (n.prototype.draw = function () {
            var n = document.createDocumentFragment(),
              r = document.querySelector("#categoryItemTemp");
            [
              "all",
              "business",
              "entertainment",
              "general",
              "health",
              "science",
              "sports",
              "technology",
            ].forEach(function (e) {
              if (null != r) {
                var t = r.content.cloneNode(!0);
                null != t &&
                  ((t.querySelector(".category__item-name").textContent = e),
                  t
                    .querySelector(".category__item")
                    .setAttribute("data-category", e),
                  n.append(t),
                  document.querySelector(".categories").append(n));
              }
            });
          }),
          n
        );
      })();
      var g = (function () {
          function n() {
            (this.news = new u()),
              (this.sources = new d()),
              (this.categories = new f());
          }
          return (
            (n.prototype.drawNews = function (n) {
              var r = (null == n ? void 0 : n.articles)
                ? null == n
                  ? void 0
                  : n.articles
                : [];
              this.news.draw(r);
            }),
            (n.prototype.drawSources = function (n) {
              var r = (null == n ? void 0 : n.sources)
                ? null == n
                  ? void 0
                  : n.sources
                : [];
              this.sources.draw(r);
            }),
            (n.prototype.drawCategories = function () {
              this.categories.draw();
            }),
            n
          );
        })(),
        C = (function () {
          var n = function (r, e) {
            return (
              (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (n, r) {
                    n.__proto__ = r;
                  }) ||
                function (n, r) {
                  for (var e in r)
                    Object.prototype.hasOwnProperty.call(r, e) && (n[e] = r[e]);
                }),
              n(r, e)
            );
          };
          return function (r, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Class extends value " +
                  String(e) +
                  " is not a constructor or null"
              );
            function t() {
              this.constructor = r;
            }
            n(r, e),
              (r.prototype =
                null === e
                  ? Object.create(e)
                  : ((t.prototype = e.prototype), new t()));
          };
        })();
      const _ = (function (n) {
          function r() {
            var r = n.call(this) || this;
            return (r.view = new g()), r;
          }
          return (
            C(r, n),
            (r.prototype.getSources = function (r) {
              n.prototype.getResp.call(this, { endpoint: "sources" }, r);
            }),
            (r.prototype.getSourcesByCategory = function (r, e) {
              for (var t = r.target, o = r.currentTarget; t !== o; )
                if (
                  t.classList.contains("category__item") ||
                  t.classList.contains("category__item-name")
                ) {
                  var i = t.getAttribute("data-category") || t.innerHTML;
                  return (
                    (document.querySelector(".sources").innerHTML = ""),
                    void ("all" === i
                      ? n.prototype.getResp.call(
                          this,
                          { endpoint: "sources" },
                          e
                        )
                      : n.prototype.getResp.call(
                          this,
                          { endpoint: "sources", options: { category: i } },
                          e
                        ))
                  );
                }
            }),
            (r.prototype.getNews = function (r, e) {
              for (var t = r.target, o = r.currentTarget; t !== o; ) {
                if (t.classList.contains("source__item")) {
                  var i = t.getAttribute("data-source-id");
                  return void (
                    o.getAttribute("data-source") !== i &&
                    (o.setAttribute("data-source", i),
                    n.prototype.getResp.call(
                      this,
                      { endpoint: "everything", options: { sources: i } },
                      e
                    ))
                  );
                }
                t = t.parentNode;
              }
            }),
            (r.prototype.chooseFirstCategory = function (r) {
              var e = document.querySelector(".sources"),
                t = document
                  .querySelector(".source__item")
                  .getAttribute("data-source-id");
              e.getAttribute("data-source") !== t &&
                (e.setAttribute("data-source", t),
                n.prototype.getResp.call(
                  this,
                  { endpoint: "everything", options: { sources: t } },
                  r
                ));
            }),
            r
          );
        })(a),
        w = (function () {
          function n() {
            (this.controller = new _()), (this.view = new g());
          }
          return (
            (n.prototype.start = function () {
              var n = this;
              document
                .querySelector(".sources")
                .addEventListener("click", function (r) {
                  return n.controller.getNews(r, function (r) {
                    return n.view.drawNews(r);
                  });
                }),
                document
                  .querySelector(".categories")
                  .addEventListener("click", function (r) {
                    n.controller.getSourcesByCategory(r, function (r) {
                      n.view.drawSources(r);
                    });
                  }),
                this.view.drawCategories(),
                this.controller.getSources(function (r) {
                  n.view.drawSources(r),
                    n.controller.chooseFirstCategory(function (r) {
                      return n.view.drawNews(r);
                    });
                });
            }),
            n
          );
        })();
      var h = e(767);
      s()(h.Z, { insert: "head", singleton: !1 }), h.Z.locals, new w().start();
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlCQUVkc0osYUFBYSxrQkFFeENHLEVBQWNILGFBQWEsaUJBQW1CSSxJQUM5Q0QsRUFBY3pILGFBQWEsY0FBZTBILEdBQzFDLFlBQU1wRSxRQUFPLFVBQ1QsQ0FDSUUsU0FBVSxhQUNWN0UsUUFBUyxDQUNMbkIsUUFBU2tLLElBR2pCbkUsS0FLaEIsRUFqR0EsQ0FBNEIsR0N3QjVCLEVBMUJBLFdBSUksYUFDSXhKLEtBQUs2TixXQUFhLElBQUksRUFDdEI3TixLQUFLK00sS0FBTyxJQUFJQyxFQWtCeEIsT0FmSSxZQUFBYyxNQUFBLHNCQUNvQjlKLFNBQVNDLGNBQWMsWUFDL0I4SixpQkFBaUIsU0FBUyxTQUFDekosR0FBYSxTQUFLdUosV0FBV0osUUFBUW5KLEdBQUcsU0FBQ2hCLEdBQVMsU0FBS3lKLEtBQUtMLFNBQVNwSixTQUNyRlUsU0FBU0MsY0FBYyxlQUMvQjhKLGlCQUFpQixTQUFTLFNBQUN6SixHQUNsQyxFQUFLdUosV0FBV1gscUJBQXFCNUksR0FBRyxTQUFDaEIsR0FDckMsRUFBS3lKLEtBQUtGLFlBQVl2SixTQUc5QnRELEtBQUsrTSxLQUFLRCxpQkFDVjlNLEtBQUs2TixXQUFXWixZQUFXLFNBQUMzSixHQUN4QixFQUFLeUosS0FBS0YsWUFBWXZKLEdBQ3RCLEVBQUt1SyxXQUFXRCxxQkFBb0IsU0FBQ3RLLEdBQVMsU0FBS3lKLEtBQUtMLFNBQVNwSixVQUc3RSxFQXhCQSxHLGFDS2EsSUFBSSxJQUxILENBRWQsT0FBaUIsT0FDakIsV0FBb0IsSUFNTCxZQ1RILElBQUksR0FDWndLLFMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvY29tcG9uZW50cy92aWV3L2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jc3MiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvdmlldy9uZXdzL25ld3MuY3NzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvc291cmNlcy9zb3VyY2VzLmNzcyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL05ld3NKUy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL05ld3NKUy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9OZXdzSlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmV3c0pTL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL05ld3NKUy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTmV3c0pTL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbGxlci9sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbGxlci9hcHBMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvdmlldy9uZXdzL25ld3MuY3NzP2UyMDYiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvdmlldy9uZXdzL25ld3MudHMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zb3VyY2VzL3NvdXJjZXMuY3NzPzUyYjEiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zb3VyY2VzL3NvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY3NzPzRiOTciLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMudHMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvdmlldy9hcHBWaWV3LnRzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsZXIvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLnRzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9nbG9iYWwuY3NzP2QzYmMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhdGVnb3JpZXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBtYXgtd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250OiAzMDAgMWVtICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlfX2l0ZW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDIzOTRBO1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgbWFyZ2luOiAwLjVlbTtcXHJcXG4gICAgcGFkZGluZzogMWVtIDJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggM3B4LCByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAxcHggMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlfX2l0ZW06aG92ZXIsXFxyXFxuLmNhdGVnb3J5X19pdGVtOmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjRjI2REY5O1xcclxcbiAgICBjb2xvcjogI0YyNkRGOTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwLjVlbSAwLjVlbSAtMC40ZW0gI0YyNkRGOTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlfX2l0ZW06YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCkgc2NhbGUoMC45OCk7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9faXRlbS1uYW1lIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsNEVBQTRFO0FBQ2hGOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsd0NBQXdDO0lBQ3hDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNhdGVnb3JpZXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBtYXgtd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250OiAzMDAgMWVtICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlfX2l0ZW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDIzOTRBO1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgbWFyZ2luOiAwLjVlbTtcXHJcXG4gICAgcGFkZGluZzogMWVtIDJlbTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggM3B4LCByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAxcHggMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlfX2l0ZW06aG92ZXIsXFxyXFxuLmNhdGVnb3J5X19pdGVtOmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjRjI2REY5O1xcclxcbiAgICBjb2xvcjogI0YyNkRGOTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwLjVlbSAwLjVlbSAtMC40ZW0gI0YyNkRGOTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlfX2l0ZW06YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCkgc2NhbGUoMC45OCk7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9faXRlbS1uYW1lIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5ld3Mge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxLjV2dztcXHJcXG4gICAgcGFkZGluZzogMCAzdnc7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5uZXdzX19pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luOiAyLjV2aCBhdXRvO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjYlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDZweCAxMnB4IC0ycHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggM3B4IDdweCAtM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbTpob3ZlciAubmV3c19fbWV0YS1waG90byB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKSByb3RhdGUoM2RlZyk7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19tZXRhIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1waG90byB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1kZXRhaWxzLFxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19tZXRhLWRldGFpbHMgdWwge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19tZXRhLWRldGFpbHMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAtMTIwJTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMnM7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gaDIge1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjb2xvcjogI2EyYTJhMjtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gLm5ld3NfX3JlYWQtbW9yZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gLm5ld3NfX3JlYWQtbW9yZSBhIHtcXHJcXG4gICAgY29sb3I6ICM1YWQ2N2Q7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiAubmV3c19fcmVhZC1tb3JlIGE6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAn4oaSJztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMC4zcywgb3BhY2l0eSAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gLm5ld3NfX3JlYWQtbW9yZSBhOmhvdmVyOmFmdGVyIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gcCB7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwIDA7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIHA6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gcDpmaXJzdC1vZi10eXBlOmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNWFkNjdkO1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgdG9wOiAtMC43NXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbTpob3ZlciAubmV3c19fbWV0YS1kZXRhaWxzIHtcXHJcXG4gICAgbGVmdDogMCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCkge1xcclxcbiAgICAubmV3cyB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcclxcbiAgICAubmV3c19faXRlbSB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmV3c19faXRlbSAubmV3c19fbWV0YSB7XFxyXFxuICAgICAgICBmbGV4LWJhc2lzOiA0MCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIGZsZXgtYmFzaXM6IDYwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb246YmVmb3JlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtM2RlZyk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKC0zZGVnKTtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgbGVmdDogLTEwcHg7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmV3c19faXRlbS5hbHQge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uZXdzX19pdGVtLmFsdCAubmV3c19fZGVzY3JpcHRpb246YmVmb3JlIHtcXHJcXG4gICAgICAgIGxlZnQ6IGluaGVyaXQ7XFxyXFxuICAgICAgICByaWdodDogLTEwcHg7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygzZGVnKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2tldygzZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmV3c19faXRlbS5hbHQgLm5ld3NfX21ldGEtZGV0YWlscyB7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9uZXdzL25ld3MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUZBQXlGO0FBQzdGOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0k7UUFDSSxxQ0FBcUM7SUFDekM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLCtCQUErQjtRQUMvQix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxNQUFNO1FBQ04sU0FBUztRQUNULFdBQVc7SUFDZjs7SUFFQTtRQUNJLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1osNkJBQTZCO1FBQzdCLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uZXdzIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgY29sdW1uLWdhcDogMS41dnc7XFxyXFxuICAgIHBhZGRpbmc6IDAgM3Z3O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubmV3c19faXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbjogMi41dmggYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS42JTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgY29sb3I6ICMzMzM7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCA2cHggMTJweCAtMnB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDNweCA3cHggLTNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW06aG92ZXIgLm5ld3NfX21ldGEtcGhvdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMykgcm90YXRlKDNkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEtcGhvdG8ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEtZGV0YWlscyxcXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1kZXRhaWxzIHVsIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1kZXRhaWxzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogLTEyMCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjJzO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIGgyIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgY29sb3I6ICNhMmEyYTI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIC5uZXdzX19yZWFkLW1vcmUge1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIC5uZXdzX19yZWFkLW1vcmUgYSB7XFxyXFxuICAgIGNvbG9yOiAjNWFkNjdkO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gLm5ld3NfX3JlYWQtbW9yZSBhOmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJ+KGkic7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuM3MsIG9wYWNpdHkgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIC5uZXdzX19yZWFkLW1vcmUgYTpob3ZlcjphZnRlciB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIHAge1xcclxcbiAgICBtYXJnaW46IDFyZW0gMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSBwOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIHA6Zmlyc3Qtb2YtdHlwZTpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzVhZDY3ZDtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIHRvcDogLTAuNzVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW06aG92ZXIgLm5ld3NfX21ldGEtZGV0YWlscyB7XFxyXFxuICAgIGxlZnQ6IDAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcXHJcXG4gICAgLm5ld3Mge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXHJcXG4gICAgLm5ld3NfX2l0ZW0ge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEge1xcclxcbiAgICAgICAgZmxleC1iYXNpczogNDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBmbGV4LWJhc2lzOiA2MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uOmJlZm9yZSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTNkZWcpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtM2RlZyk7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGxlZnQ6IC0xMHB4O1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgei1pbmRleDogLTE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld3NfX2l0ZW0uYWx0IHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmV3c19faXRlbS5hbHQgLm5ld3NfX2Rlc2NyaXB0aW9uOmJlZm9yZSB7XFxyXFxuICAgICAgICBsZWZ0OiBpbmhlcml0O1xcclxcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoM2RlZyk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoM2RlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld3NfX2l0ZW0uYWx0IC5uZXdzX19tZXRhLWRldGFpbHMge1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zb3VyY2VzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBmb250OiAzMDAgMWVtICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uc291cmNlX19pdGVtIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzUxNThiYjtcXHJcXG4gICAgZm9udDogaW5oZXJpdDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIG1hcmdpbjogMC4zZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gICAgY29sb3I6ICM1MTU4YmI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCAzcHgsIHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDFweCAycHg7XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VfX2l0ZW06aG92ZXIsXFxyXFxuLnNvdXJjZV9faXRlbTpmb2N1cyB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2ViNGI5ODtcXHJcXG4gICAgY29sb3I6ICNlYjRiOTg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMC41ZW0gMC41ZW0gLTAuNGVtICNlYjRiOTg7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNWVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvdXJjZV9faXRlbTphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KSBzY2FsZSgwLjk4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvdXJjZV9faXRlbS1uYW1lIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zb3VyY2VzL3NvdXJjZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw0RUFBNEU7QUFDaEY7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCx3Q0FBd0M7SUFDeEMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc291cmNlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIG1heC13aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgZm9udDogMzAwIDFlbSAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnNvdXJjZV9faXRlbSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1MTU4YmI7XFxyXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICBtYXJnaW46IDAuM2VtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XFxyXFxuICAgIGNvbG9yOiAjNTE1OGJiO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggM3B4LCByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAxcHggMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc291cmNlX19pdGVtOmhvdmVyLFxcclxcbi5zb3VyY2VfX2l0ZW06Zm9jdXMge1xcclxcbiAgICBib3JkZXItY29sb3I6ICNlYjRiOTg7XFxyXFxuICAgIGNvbG9yOiAjZWI0Yjk4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAuNWVtIDAuNWVtIC0wLjRlbSAjZWI0Yjk4O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVlbSk7XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VfX2l0ZW06YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCkgc2NhbGUoMC45OCk7XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VfX2l0ZW0tbmFtZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBjb2xvcjogIzA0MzU2NTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIG1heC13aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgICBtYXJnaW46IDAuNWVtIDA7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBtYXJnaW46IDV2aCBhdXRvO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuY29weXJpZ2h0IHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIGNvbG9yOiAjMDQzNTY1O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmNvcHlyaWdodDpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnwqknO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGEsXFxyXFxuLmZvb3RlciBzcGFuIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xcclxcbiAgICBoZWFkZXIgaDEge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICAgICAgbWFyZ2luOiAwLjJlbSAwO1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9nbG9iYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsUUFBUTtJQUNSLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksY0FBYztJQUNkLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICAgIGNvbG9yOiAjMDQzNTY1O1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEge1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIG1hcmdpbjogMC41ZW0gMDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIG1heC13aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIG1hcmdpbjogNXZoIGF1dG87XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb3B5cmlnaHQge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgY29sb3I6ICMwNDM1NjU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuY29weXJpZ2h0OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICfCqSc7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYSxcXHJcXG4uZm9vdGVyIHNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XFxyXFxuICAgIGhlYWRlciBoMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgICAgICBtYXJnaW46IDAuMmVtIDA7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgeyBBbGxOZXdzRGF0YSB9IGZyb20gJy4uL3ZpZXcvbmV3cy9uZXdzRGF0YS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTb3VyY2VzRGF0YSB9IGZyb20gJy4uL3ZpZXcvc291cmNlcy9zb3VyY2VEYXRhLmludGVyZmFjZSc7XHJcblxyXG5pbnRlcmZhY2UgT3B0aW9ucyB7XHJcbiAgICBbcHJvcDogc3RyaW5nXTogc3RyaW5nO1xyXG59XHJcblxyXG5lbnVtIFJlc3BvbnNlU3RhdHVzIHtcclxuICAgIFVuYXV0aG9yaXplZCA9IDQwMSxcclxuICAgIE5vdEZvdW5kID0gNDA0LFxyXG59XHJcblxyXG50eXBlIERhdGEgPSBTb3VyY2VzRGF0YSB8IEFsbE5ld3NEYXRhO1xyXG5cclxuY2xhc3MgTG9hZGVyIHtcclxuICAgIHByaXZhdGUgYmFzZUxpbms6IHN0cmluZztcclxuICAgIHByaXZhdGUgb3B0aW9uczogb2JqZWN0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGJhc2VMaW5rOiBzdHJpbmcsIG9wdGlvbnM6IE9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmJhc2VMaW5rID0gYmFzZUxpbms7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVzcChcclxuICAgICAgICB7IGVuZHBvaW50LCBvcHRpb25zID0ge30gfTogeyBlbmRwb2ludDogc3RyaW5nOyBvcHRpb25zPzogT3B0aW9ucyB9LFxyXG4gICAgICAgIGNhbGxiYWNrOiAoZGF0YTogRGF0YSkgPT4gdm9pZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gY2FsbGJhY2sgZm9yIEdFVCByZXNwb25zZScpO1xyXG4gICAgICAgIH1cclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9hZCgnR0VUJywgZW5kcG9pbnQsIGNhbGxiYWNrLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXJyb3JIYW5kbGVyKHJlczogUmVzcG9uc2UpOiBSZXNwb25zZSB7XHJcbiAgICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IFJlc3BvbnNlU3RhdHVzLlVuYXV0aG9yaXplZCB8fCByZXMuc3RhdHVzID09PSBSZXNwb25zZVN0YXR1cy5Ob3RGb3VuZClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTb3JyeSwgYnV0IHRoZXJlIGlzICR7cmVzLnN0YXR1c30gZXJyb3I6ICR7cmVzLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlcy5zdGF0dXNUZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1ha2VVcmwob3B0aW9uczogT3B0aW9ucywgZW5kcG9pbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgdXJsT3B0aW9uczogT3B0aW9ucyA9IHsgLi4udGhpcy5vcHRpb25zLCAuLi5vcHRpb25zIH07XHJcbiAgICAgICAgbGV0IHVybCA9IGAke3RoaXMuYmFzZUxpbmt9JHtlbmRwb2ludH0/YDtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXModXJsT3B0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHVybCArPSBgJHtrZXl9PSR7dXJsT3B0aW9uc1trZXldfSZgO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdXJsLnNsaWNlKDAsIC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZChcclxuICAgICAgICBtZXRob2Q6IHN0cmluZyxcclxuICAgICAgICBlbmRwb2ludDogc3RyaW5nLFxyXG4gICAgICAgIGNhbGxiYWNrOiAoZGF0YTogU291cmNlc0RhdGEgfCBBbGxOZXdzRGF0YSkgPT4gdm9pZCxcclxuICAgICAgICBvcHRpb25zOiBPcHRpb25zID0ge31cclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGZldGNoKHRoaXMubWFrZVVybChvcHRpb25zLCBlbmRwb2ludCksIHsgbWV0aG9kIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHRoaXMuZXJyb3JIYW5kbGVyKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gY2FsbGJhY2soZGF0YSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xyXG4iLCJpbXBvcnQgTG9hZGVyIGZyb20gJy4vbG9hZGVyJztcclxuXHJcbmNsYXNzIEFwcExvYWRlciBleHRlbmRzIExvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi8nLCB7XHJcbiAgICAgICAgICAgIGFwaUtleTogJzJmYjg4Yzk5NDVjMzRlMDViMjAzZWU4OTRlNzczNDdjJyxcclxuICAgICAgICAgICAgLy8gYXBpS2V5OiAnZWYwMzZlZTEwYTU2NDVjMTk5YmFhMDU4NDVmNTYzZWMnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMb2FkZXI7XHJcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmV3cy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgJy4vbmV3cy5jc3MnO1xyXG5pbXBvcnQgeyBOZXdzRGF0YSB9IGZyb20gJy4vbmV3c0RhdGEuaW50ZXJmYWNlJztcclxuXHJcbmNsYXNzIE5ld3Mge1xyXG4gICAgcHVibGljIGRyYXcoZGF0YTogTmV3c0RhdGFbXSkge1xyXG4gICAgICAgIGNvbnN0IG5ld3MgPSBkYXRhLmxlbmd0aCA+PSAxMCA/IGRhdGEuZmlsdGVyKChfaXRlbSwgaWR4KSA9PiBpZHggPCAxMCkgOiBkYXRhO1xyXG5cclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBjb25zdCBuZXdzSXRlbVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3c0l0ZW1UZW1wJykgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcclxuXHJcbiAgICAgICAgbmV3cy5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3c0Nsb25lID0gbmV3c0l0ZW1UZW1wLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3c0l0ZW0gPSBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX2l0ZW0nKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIGlmIChpZHggJSAyKSBuZXdzSXRlbS5jbGFzc0xpc3QuYWRkKCdhbHQnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld3NNZXRhUGhvdG8gPSBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX21ldGEtcGhvdG8nKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgbmV3c01ldGFQaG90by5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aXRlbS51cmxUb0ltYWdlIHx8ICdpbWcvbmV3c19wbGFjZWhvbGRlci5qcGcnfSlgO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3c01ldGFBdXRob3IgPSBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX21ldGEtYXV0aG9yJykgYXMgSFRNTExJRWxlbWVudDtcclxuICAgICAgICAgICAgbmV3c01ldGFBdXRob3IudGV4dENvbnRlbnQgPSBpdGVtLmF1dGhvciB8fCBpdGVtLnNvdXJjZS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3c01ldGFEYXRlID0gbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19tZXRhLWRhdGUnKSBhcyBIVE1MTElFbGVtZW50O1xyXG4gICAgICAgICAgICBuZXdzTWV0YURhdGUudGV4dENvbnRlbnQgPSBpdGVtLnB1Ymxpc2hlZEF0LnNsaWNlKDAsIDEwKS5zcGxpdCgnLScpLnJldmVyc2UoKS5qb2luKCctJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdzRGVzY3JpcHRpb25UaXRsZSA9IG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19fZGVzY3JpcHRpb24tdGl0bGUnKSBhcyBIVE1MVGl0bGVFbGVtZW50O1xyXG4gICAgICAgICAgICBuZXdzRGVzY3JpcHRpb25UaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdzRGVzY3JpcHRpb25Tb3VyY2UgPSBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX2Rlc2NyaXB0aW9uLXNvdXJjZScpIGFzIEhUTUxUaXRsZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIG5ld3NEZXNjcmlwdGlvblNvdXJjZS50ZXh0Q29udGVudCA9IGl0ZW0uc291cmNlLm5hbWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdzRGVzY3JpcHRpb25Db250ZW50ID0gbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAnLm5ld3NfX2Rlc2NyaXB0aW9uLWNvbnRlbnQnXHJcbiAgICAgICAgICAgICkgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIG5ld3NEZXNjcmlwdGlvbkNvbnRlbnQudGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3c1JlYWRNb3JlTGluayA9IG5ld3NDbG9uZS5xdWVyeVNlbGVjdG9yKCcubmV3c19fcmVhZC1tb3JlIGEnKSBhcyBIVE1MTGlua0VsZW1lbnQ7XHJcbiAgICAgICAgICAgIG5ld3NSZWFkTW9yZUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgaXRlbS51cmwpO1xyXG5cclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kKG5ld3NDbG9uZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIG5ld3NEaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgbmV3c0Rpdi5hcHBlbmRDaGlsZChmcmFnbWVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3M7XHJcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc291cmNlcy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgJy4vc291cmNlcy5jc3MnO1xyXG5pbXBvcnQgeyBTb3VyY2VEYXRhIH0gZnJvbSAnLi9zb3VyY2VEYXRhLmludGVyZmFjZSc7XHJcblxyXG5jbGFzcyBTb3VyY2VzIHtcclxuICAgIHB1YmxpYyBkcmF3KGRhdGE6IFNvdXJjZURhdGFbXSkge1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZUl0ZW1UZW1wOiBIVE1MVGVtcGxhdGVFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3VyY2VJdGVtVGVtcCcpO1xyXG5cclxuICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHNvdXJjZUl0ZW1UZW1wICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUNsb25lID0gc291cmNlSXRlbVRlbXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZUNsb25lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJdGVtTmFtZSA9IHNvdXJjZUNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5zb3VyY2VfX2l0ZW0tbmFtZScpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VJdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJdGVtID0gc291cmNlQ2xvbmUucXVlcnlTZWxlY3RvcignLnNvdXJjZV9faXRlbScpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZUl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLXNvdXJjZS1pZCcsIGl0ZW0uaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmQoc291cmNlQ2xvbmUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvdXJjZXMnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlcy5hcHBlbmQoZnJhZ21lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvdXJjZXM7XHJcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2F0ZWdvcmllcy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgJy4vY2F0ZWdvcmllcy5jc3MnO1xyXG5cclxuY2xhc3MgQ2F0ZWdvcmllcyB7XHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICB0eXBlIENhdGVnb3JpZXNMaXN0ID1cclxuICAgICAgICAgICAgfCAnYWxsJ1xyXG4gICAgICAgICAgICB8ICdidXNpbmVzcydcclxuICAgICAgICAgICAgfCAnZW50ZXJ0YWlubWVudCdcclxuICAgICAgICAgICAgfCAnZ2VuZXJhbCdcclxuICAgICAgICAgICAgfCAnaGVhbHRoJ1xyXG4gICAgICAgICAgICB8ICdzY2llbmNlJ1xyXG4gICAgICAgICAgICB8ICdzcG9ydHMnXHJcbiAgICAgICAgICAgIHwgJ3RlY2hub2xvZ3knO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXM6IFJlYWRvbmx5QXJyYXk8Q2F0ZWdvcmllc0xpc3Q+ID0gW1xyXG4gICAgICAgICAgICAnYWxsJyxcclxuICAgICAgICAgICAgJ2J1c2luZXNzJyxcclxuICAgICAgICAgICAgJ2VudGVydGFpbm1lbnQnLFxyXG4gICAgICAgICAgICAnZ2VuZXJhbCcsXHJcbiAgICAgICAgICAgICdoZWFsdGgnLFxyXG4gICAgICAgICAgICAnc2NpZW5jZScsXHJcbiAgICAgICAgICAgICdzcG9ydHMnLFxyXG4gICAgICAgICAgICAndGVjaG5vbG9neScsXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlJdGVtVGVtcDogSFRNTFRlbXBsYXRlRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0ZWdvcnlJdGVtVGVtcCcpO1xyXG5cclxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGNhdGVnb3J5SXRlbVRlbXAgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlDbG9uZSA9IGNhdGVnb3J5SXRlbVRlbXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5Q2xvbmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5SXRlbU5hbWUgPSBjYXRlZ29yeUNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeV9faXRlbS1uYW1lJykgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5SXRlbSA9IGNhdGVnb3J5Q2xvbmUucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5X19pdGVtJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1jYXRlZ29yeScsIGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmQoY2F0ZWdvcnlDbG9uZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcmllcycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMuYXBwZW5kKGZyYWdtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzO1xyXG4iLCJpbXBvcnQgTmV3cyBmcm9tICcuL25ld3MvbmV3cyc7XHJcbmltcG9ydCBTb3VyY2VzIGZyb20gJy4vc291cmNlcy9zb3VyY2VzJztcclxuaW1wb3J0IHsgU291cmNlc0RhdGEgfSBmcm9tICcuL3NvdXJjZXMvc291cmNlRGF0YS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBBbGxOZXdzRGF0YSB9IGZyb20gJy4vbmV3cy9uZXdzRGF0YS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tICcuL2NhdGVnb3JpZXMvY2F0ZWdvcmllcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwVmlldyB7XHJcbiAgICBuZXdzOiBOZXdzO1xyXG4gICAgc291cmNlczogU291cmNlcztcclxuICAgIGNhdGVnb3JpZXM6IENhdGVnb3JpZXM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdzID0gbmV3IE5ld3MoKTtcclxuICAgICAgICB0aGlzLnNvdXJjZXMgPSBuZXcgU291cmNlcygpO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IG5ldyBDYXRlZ29yaWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd05ld3MoZGF0YTogQWxsTmV3c0RhdGEpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBkYXRhPy5hcnRpY2xlcyA/IGRhdGE/LmFydGljbGVzIDogW107XHJcbiAgICAgICAgdGhpcy5uZXdzLmRyYXcodmFsdWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3U291cmNlcyhkYXRhOiBTb3VyY2VzRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGRhdGE/LnNvdXJjZXMgPyBkYXRhPy5zb3VyY2VzIDogW107XHJcbiAgICAgICAgdGhpcy5zb3VyY2VzLmRyYXcodmFsdWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3Q2F0ZWdvcmllcygpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMuZHJhdygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBWaWV3O1xyXG4iLCJpbXBvcnQgQXBwTG9hZGVyIGZyb20gJy4vYXBwTG9hZGVyJztcclxuaW1wb3J0IHsgU291cmNlc0RhdGEgfSBmcm9tICcuLi92aWV3L3NvdXJjZXMvc291cmNlRGF0YS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBBbGxOZXdzRGF0YSB9IGZyb20gJy4uL3ZpZXcvbmV3cy9uZXdzRGF0YS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBBcHBWaWV3IH0gZnJvbSAnLi4vdmlldy9hcHBWaWV3JztcclxuXHJcbmNsYXNzIEFwcENvbnRyb2xsZXIgZXh0ZW5kcyBBcHBMb2FkZXIge1xyXG4gICAgdmlldzogQXBwVmlldztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBBcHBWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNvdXJjZXMoY2FsbGJhY2s6IChkYXRhOiBTb3VyY2VzRGF0YSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmdldFJlc3AoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVuZHBvaW50OiAnc291cmNlcycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U291cmNlc0J5Q2F0ZWdvcnkoZTogRXZlbnQsIGNhbGxiYWNrOiAoZGF0YTogU291cmNlc0RhdGEpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeUNvbnRhaW5lciA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRhcmdldCAhPT0gY2F0ZWdvcnlDb250YWluZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhdGVnb3J5X19pdGVtJykgfHwgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2F0ZWdvcnlfX2l0ZW0tbmFtZScpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeU5hbWUgPSAodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jYXRlZ29yeScpIHx8IHRhcmdldC5pbm5lckhUTUwpIGFzIHN0cmluZztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvdXJjZXMnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBzb3VyY2VzLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeU5hbWUgPT09ICdhbGwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIuZ2V0UmVzcChcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6ICdzb3VyY2VzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdXBlci5nZXRSZXNwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDogJ3NvdXJjZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5ld3MoZTogRXZlbnQsIGNhbGxiYWNrOiAoZGF0YTogQWxsTmV3c0RhdGEpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgbmV3c0NvbnRhaW5lciA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRhcmdldCAhPT0gbmV3c0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc291cmNlX19pdGVtJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUlkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zb3VyY2UtaWQnKSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3c0NvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc291cmNlJykgIT09IHNvdXJjZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3c0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtc291cmNlJywgc291cmNlSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLmdldFJlc3AoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiAnZXZlcnl0aGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlczogc291cmNlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaG9vc2VGaXJzdENhdGVnb3J5KGNhbGxiYWNrOiAoZGF0YTogQWxsTmV3c0RhdGEpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBuZXdzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvdXJjZXMnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBjb25zdCBmaXJzdENhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvdXJjZV9faXRlbScpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgICBjb25zdCBzb3VyY2VJZCA9IGZpcnN0Q2F0ZWdvcnkuZ2V0QXR0cmlidXRlKCdkYXRhLXNvdXJjZS1pZCcpIGFzIHN0cmluZztcclxuXHJcbiAgICAgICAgaWYgKG5ld3NDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXNvdXJjZScpICE9PSBzb3VyY2VJZCkge1xyXG4gICAgICAgICAgICBuZXdzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1zb3VyY2UnLCBzb3VyY2VJZCk7XHJcbiAgICAgICAgICAgIHN1cGVyLmdldFJlc3AoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6ICdldmVyeXRoaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXM6IHNvdXJjZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBDb250cm9sbGVyO1xyXG4iLCJpbXBvcnQgQXBwQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVyL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBBcHBWaWV3IH0gZnJvbSAnLi4vdmlldy9hcHBWaWV3JztcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb250cm9sbGVyOiBBcHBDb250cm9sbGVyO1xyXG4gICAgdmlldzogQXBwVmlldztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgQXBwQ29udHJvbGxlcigpO1xyXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBBcHBWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc3Qgc291cmNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3VyY2VzJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgc291cmNlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBFdmVudCkgPT4gdGhpcy5jb250cm9sbGVyLmdldE5ld3MoZSwgKGRhdGEpID0+IHRoaXMudmlldy5kcmF3TmV3cyhkYXRhKSkpO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcmllcycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIGNhdGVnb3JpZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLmdldFNvdXJjZXNCeUNhdGVnb3J5KGUsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZHJhd1NvdXJjZXMoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudmlldy5kcmF3Q2F0ZWdvcmllcygpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5nZXRTb3VyY2VzKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5kcmF3U291cmNlcyhkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLmNob29zZUZpcnN0Q2F0ZWdvcnkoKGRhdGEpID0+IHRoaXMudmlldy5kcmF3TmV3cyhkYXRhKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcCc7XHJcbmltcG9ydCAnLi9nbG9iYWwuY3NzJztcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuYXBwLnN0YXJ0KCk7XHJcbiJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY29uY2F0Iiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImRlZHVwZSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJsZW5ndGgiLCJfaSIsIl9hcnJheUxpa2VUb0FycmF5IiwiYXJyIiwibGVuIiwiYXJyMiIsIkFycmF5IiwiX2l0ZW0iLCJpc0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJfcyIsIl9lIiwiX2FyciIsIl9uIiwiX2QiLCJjYWxsIiwibmV4dCIsImRvbmUiLCJ2YWx1ZSIsImVyciIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIm8iLCJtaW5MZW4iLCJuIiwiT2JqZWN0IiwicHJvdG90eXBlIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJmcm9tIiwidGVzdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIlR5cGVFcnJvciIsIl9ub25JdGVyYWJsZVJlc3QiLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwibWVtbyIsImdldFRhcmdldCIsInRhcmdldCIsInN0eWxlVGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSFRNTElGcmFtZUVsZW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJoZWFkIiwiZSIsInN0eWxlc0luRG9tIiwiZ2V0SW5kZXhCeUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicmVzdWx0IiwibW9kdWxlc1RvRG9tIiwib3B0aW9ucyIsImlkQ291bnRNYXAiLCJpZGVudGlmaWVycyIsImJhc2UiLCJjb3VudCIsImluZGV4Iiwib2JqIiwiY3NzIiwibWVkaWEiLCJzb3VyY2VNYXAiLCJyZWZlcmVuY2VzIiwidXBkYXRlciIsImFkZFN0eWxlIiwiaW5zZXJ0U3R5bGVFbGVtZW50Iiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwiYXR0cmlidXRlcyIsIm5vbmNlIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnQiLCJFcnJvciIsImFwcGVuZENoaWxkIiwidGV4dFN0b3JlIiwicmVwbGFjZVRleHQiLCJyZXBsYWNlbWVudCIsImZpbHRlciIsIkJvb2xlYW4iLCJhcHBseVRvU2luZ2xldG9uVGFnIiwicmVtb3ZlIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjc3NOb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJjaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBseVRvVGFnIiwicmVtb3ZlQXR0cmlidXRlIiwiZmlyc3RDaGlsZCIsInNpbmdsZXRvbiIsInNpbmdsZXRvbkNvdW50ZXIiLCJ1cGRhdGUiLCJzdHlsZUluZGV4IiwiYmluZCIsInBhcmVudE5vZGUiLCJyZW1vdmVTdHlsZUVsZW1lbnQiLCJuZXdPYmoiLCJhbGwiLCJhdG9iIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pbmRleCIsInNwbGljZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJkZWZpbml0aW9uIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwicHJvcCIsImhhc093blByb3BlcnR5IiwiUmVzcG9uc2VTdGF0dXMiLCJiYXNlTGluayIsImdldFJlc3AiLCJjYWxsYmFjayIsImVuZHBvaW50IiwiY29uc29sZSIsImVycm9yIiwibG9hZCIsImVycm9ySGFuZGxlciIsInJlcyIsIm9rIiwic3RhdHVzIiwiVW5hdXRob3JpemVkIiwiTm90Rm91bmQiLCJsb2ciLCJzdGF0dXNUZXh0IiwibWFrZVVybCIsInVybE9wdGlvbnMiLCJ1cmwiLCJtZXRob2QiLCJmZXRjaCIsInRoZW4iLCJqc29uIiwiY2F0Y2giLCJhcGlLZXkiLCJkcmF3IiwibmV3cyIsImlkeCIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsIm5ld3NJdGVtVGVtcCIsIm5ld3NDbG9uZSIsImNsb25lTm9kZSIsIm5ld3NJdGVtIiwiY2xhc3NMaXN0IiwiYWRkIiwiYmFja2dyb3VuZEltYWdlIiwidXJsVG9JbWFnZSIsInRleHRDb250ZW50IiwiYXV0aG9yIiwicHVibGlzaGVkQXQiLCJzcGxpdCIsInJldmVyc2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXBwZW5kIiwibmV3c0RpdiIsImlubmVySFRNTCIsInNvdXJjZUl0ZW1UZW1wIiwic291cmNlQ2xvbmUiLCJjYXRlZ29yeUl0ZW1UZW1wIiwiY2F0ZWdvcnlDbG9uZSIsImNhdGVnb3JpZXMiLCJkcmF3TmV3cyIsInZhbHVlcyIsImFydGljbGVzIiwiZHJhd1NvdXJjZXMiLCJkcmF3Q2F0ZWdvcmllcyIsInZpZXciLCJBcHBWaWV3IiwiZ2V0U291cmNlcyIsImdldFNvdXJjZXNCeUNhdGVnb3J5IiwiY2F0ZWdvcnlDb250YWluZXIiLCJjdXJyZW50VGFyZ2V0IiwiY29udGFpbnMiLCJjYXRlZ29yeU5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJjYXRlZ29yeSIsImdldE5ld3MiLCJuZXdzQ29udGFpbmVyIiwic291cmNlSWQiLCJjaG9vc2VGaXJzdENhdGVnb3J5IiwiY29udHJvbGxlciIsInN0YXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=
