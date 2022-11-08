import KonyvekView from "../View/admin/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";
import KonyvekPublicView from "../View/public/KonyvekPublicView.js";

class KonyvController {
    constructor() {
        const token = $('meta[name="csrf-token"]').attr("content");
        const konyvmodel = new KonyvModel(token);
        this.vegpont = "konyvek"
        $("#admin").on("click", () => {
            konyvmodel.adatBe(this.vegpont, this.konyvAdatok);
        }) 
        $("#public").on("click", () => {
            konyvmodel.adatBe(this.vegpont, this.konyvPublicAdatok);
        }) 
        
        $(window).on("modosit", (event) => {
            konyvmodel.adatModosit(this.vegpont, event.detail);
        })
        $(window).on("torol", (event) => {
            konyvmodel.adatTorol(this.vegpont, event.detail);
        })
        $(window).on("veszem", (event) => {
            konyvmodel.konyvVesz(this.vegpont, event.detail)
        })
    }
    
    konyvAdatok(tomb) {
        new KonyvekView(tomb, $("main"));
    }
    konyvPublicAdatok(tomb) {
        new KonyvekPublicView(tomb, $("main"));
    }
}

export default KonyvController;