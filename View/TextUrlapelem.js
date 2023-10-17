class TextUrlapElem{
    #key;
    #elemLeiro={};
    #valid=false;
    #ertek="";
    constructor(szuloelem,key,elemLeiro){
        this.#key=key;
        this.#elemLeiro=elemLeiro;
        this.forElem=szuloelem;
        this.#textElem();
        this.inputElem=$(`${this.#key}`);
        this.validElem=this.forElem.children("div:last-child").children(".valid");
        this.invalidElem=this.forElem.children("div:last-child").children(".invalid");
        this.inputElem.on("keyup",()=>{
            this.#ertek=this.inputElem.val();
            let reg=this.#elemLeiro.regex;
            let regReg= new RegExp(reg);
            console.log(regReg.test(this.#ertek));
            if (regReg.test(this.#ertek)) {
                this.#valid=true;
                this.validElem.removeClass("lathatosag");
                this.invalidElem.addClass("lathatosag");
            } else {
                this.ivalidElem.removeClass("lathatosag");
                this.validElem.addClass("lathatosag");
                this.#valid=false;
            }
        })
    }

    getKey(){
        return this.#key;
    }

    getValid(){
        return this.#valid;
    }

    getErtek(){
        return this.#ertek;
    }

    #textElem() {
        let txt = "";
        txt += `<div class="mb-3 mt-3">
            <label for="${this.#key}" class="form-label">${this.#elemLeiro.megj}</label>
            <input type="${this.#elemLeiro.type}" class="form-control" id="${this.#key}" placeholder="${this.#elemLeiro.placeholder}"
                name="${this.#key}" value="${this.#elemLeiro.value}">
                <div class="valid lathatosag">Ok</div>
                <div class="invalid lathatosag">${this.#elemLeiro.valid}</div>
            </div>`;
        this.forElem.append(txt);
    }
}
export default TextUrlapElem;