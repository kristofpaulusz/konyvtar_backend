{/* <div class="kDiv">
        <img src="" alt="placeholder">
        <div>CÍM</div>
        <div>SZERZŐ</div>
        <div>ÁR</div>
    </div> */}
    class KonyvPublicView {
    #elem;
    constructor(konyv, szuloElem) {
        this.#elem = konyv;
        szuloElem.append(`<div class="kDiv" id="k${konyv.id}">
        <div>${konyv.cim}</div>
        <div>${konyv.szerzo}</div>
        <div>${konyv.ar}</div>
        <button>Megveszem</button>
    </div>`)
    this.sajatDiv = szuloElem.children("div:last-child")
    this.gombElem = this.sajatDiv.children("button");
        this.gombElem.on("click", () => {
            this.kattintasTrigger("veszem");
        })
}
    kattintasTrigger(para) {
    const esemeny = new CustomEvent(para, { detail: this.#elem.id });
    window.dispatchEvent(esemeny);
  }
}
export default KonyvPublicView;