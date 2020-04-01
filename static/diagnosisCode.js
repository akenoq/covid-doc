"use strict";

function getRisks(paramSumRED, paramSumGREEN) {
    const sumRED = parseInt(paramSumRED);
    const sumGREEN = parseInt(paramSumGREEN);
    if(sumRED >= 3 && sumGREEN >= 3)
        return "высокий риск осложнений, следует обратиться к врачу";
    else
        return "";
}

function getDiagnosis(paramSumRED, paramSumGREEN) {
    const sumRED = parseInt(paramSumRED);
    const sumGREEN = parseInt(paramSumGREEN);
    if(sumRED <= 5) return "лёгкое течение, беспокоиться не стоит, можно вызвать врача на дом";
    if(sumRED === 6) return "нужно вызвать врача или позвонить в скорую";
    if(sumRED > 6) return "срочно вызвать скорую помощь";
    return "";
}
