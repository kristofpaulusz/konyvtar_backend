import KonyvView from "./KonyvView.js";
const konyvek = []
class KonyvekView {
    constructor(tomb, szuloElem) {
        szuloElem.html(`<table>
        <thead>
            <tr>
        <th>ID</th>
        <th>Cím</th>
        <th>Szerző</th>
        <th>Ár</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
        </table>`);
        this.tabla = szuloElem.children("table:last-child");
        this.tbodyElem = this.tabla.children("tbody");
        tomb.forEach(konyv => {
            konyvek.push(new KonyvView(konyv, this.tbodyElem));
        });
    }
}

export default KonyvekView;