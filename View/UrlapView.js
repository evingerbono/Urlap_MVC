import TextUrlapElem from "./TextUrlapelem.js";
class UrlapView {
    #leiro = {};
    #urlapelemList = [];
    #valid= true;
    #urlapAdatok=[];
    constructor(szuloElem, leiro) {
        this.#leiro = leiro;
        this.szuloElem = szuloElem;
        this.szuloElem.html("<form>")
        this.formElem = this.szuloElem.children("form");
        console.log(this.formElem);
        this.#urlapLetrehoz();
        this.submitelem = $("#submit");
        this.submitelem.on("click", (event) => {
            event.preventDefault();
            this.#valid=true;
            this.#urlapelemList.forEach((elem)=>{
                this.#valid=this.#valid&& elem.valid;
                console.log(this.#valid);
            });
            if (this.#valid) {
                console.log("Valid az ürlap.");
                let ertek=elem.ertek;
                let kulcs = elem.key;
                this.#urlapAdatok[kulcs]=ertek;
                console.log(this.#urlapAdatok);
            } else {
                console.log("Nem valid az ürlap.");
            }
        });

    }

    #urlapLetrehoz() {

        for (const key in this.#leiro) {
            switch (this.#leiro[key].type) {
                case "text":
                    new TextUrlapElem(this.formElem, key, this.#leiro[key])
                    break;
                case "number":
                    this.#numberElem(key);
                    break;
                default:
            }
        }
        let txt = `<button type="submit" id="submit" class="btn btn-primary">Küldés</button> </form>`;
        this.formElem.append(txt);
    }

    #numberElem(key) {
        let txt = "";
        txt += `<div class="mb-3 mt-3">
            <label for="${key}" class="form-label">${this.#leiro[key].megj}</label>
            <input type="${this.#leiro[key].type}" class="form-control" id="${key}" placeholder="${this.#leiro[key].placeholder}"
                name="${key}" value="${this.#leiro[key].value}" min="${this.#leiro[key].regex.min}" max="${this.#leiro[key].regex.max}">
                <div class="valid lathatosag">Ok</div>
                <div class="invalid lathatosag">${this.#leiro[key].valid}</div>
            </div>`;
        this.formElem.append(txt);
    }
}
export default UrlapView;