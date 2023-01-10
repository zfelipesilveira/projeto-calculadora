class CalcController {

    constructor(){
        
        //corrigir

        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl= document.querySelector('#hora');

        
        this._currentDate;
        this.initialize();
    }

    initialize(){

        

        this._dateEl.innerHTML = "01/05/2020";
        this._timeEl.innerHTML = "123"
        


    }

    get displayCalc(){

        return this._displayCalc;


    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;

    }

    set currentDate(valor){
        this._currentDate = valor;


    }

}