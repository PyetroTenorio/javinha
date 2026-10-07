let nome = prompt("Olá diga seu nome")
let escolha = Number(prompt(`
    ${nome} diga o numero do seu pedido: \n
   1 - Combo Bug (Hambúrguer + Refri) \n
   2 - Combo Deploy (Pizza + Suco) \n
   3 - Combo Sênior (Salada + Água) `))

   switch (escolha) {
    case 1:
    window.alert(`oi ${nome} voce escolheu \n 1 - Combo Bug (Hambúrguer + Refri) é 30R$`)
    
        break;

          case 2:
    window.alert(`oi ${nome} voce escolheu \n 2 - Combo Deploy (Pizza + Suco) é 20R$`)
    
        break;

                  case 3:
    window.alert(`oi ${nome} voce escolheu \n 3 - Combo Sênior (Salada + Água) é 10R$`)
    
        break;
   
    default:
         window.alert("ESCOLHE UM deles");
        break;
   }