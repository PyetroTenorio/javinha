let idade = Number(prompt("Qual é sua idade?"));

if (idade > 17) {
    window.alert("Ok você é de maior. Pode passar");
    let planos = prompt("Qual plano você quer,Basico  o VIP ou o Pro?");
    let planis = planos.toUpperCase();
    
    switch (planis) {
 case " BASICO":
            window.alert("Bom, nele você ganha pobreza😁👍");
            break;

        case "VIP":
            window.alert("Bom, nele você ganha depressão e tristeza😁👍");
            break;
        case "PRO":
            window.alert("Bom, nele você ganha tristeza😁👍");
            break;
        default:
            window.alert("ESCOLHE UM DOS DOIS");
            break;
    }
} else {
    window.alert("Você é de menor, se você não sair em 5 segundos entrará um vírus no seu computador💀");
}
