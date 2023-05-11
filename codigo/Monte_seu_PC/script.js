
    let PlacaMae = {};
    PlacaMae = [
            { nome: "Placa Mãe MSI A520M-A PRO", preco: "439.99" },
            { nome: "Placa Mãe Gigabyte B550M AORUS ELITE", preco: "939.00" },
            { nome: "Placa Mãe Asus Rog Crosshair X670E Extreme", preco: "8.499.99" }
        ]
    
    let Processador = {};
    Processador = [
            { nome: "Intel PROCESSADOR CORE I5", preco: "729.00"},
            { nome: "Processador AMD Ryzen 5 5600G", preco: "959.00"},
            { nome: "Processador Intel Core i9-10900KF", preco: "1.999.99"}
        ]

    let MemoriaRam = {};
    MemoriaRam = [
            { nome: "Memória HyperX Fury de 8GB", preco: "197.00"},
            { nome: "Memória de 16GB DIMM DDR4", preco: "330.00"},
            { nome: "Memória Kingston Fury Beast, RGB, 32GB", preco: "759.99"}
        ]
    
    let PlacaDeVideo = {};
    PlacaDeVideo = [
            { nome: "PLACA DE VIDEO TGT GEFORCE GT610", preco: "299.99"},
            { nome: "Placa de Vídeo RTX 3050", preco: "1.739.99"},
            { nome: "Placa de Vídeo RTX 3060 Ti", preco: "3.399.99"}
        ]



var PrecoPM = 0.0; var PrecoP = 0.0; var PrecoMR = 0.0; var PrecoPV = 0.0;

const opcoes01 = document.getElementById("opcoes01");
const imagemPM = document.getElementById("imagemPM");


opcoes01.addEventListener("change", function() {
  if (opcoes01.value === "a1") {
    imagemPM.src = "Placa-Mae01.jpg";
    document.getElementById("Placa-Mae").innerHTML = "Nome: "+ PlacaMae[0].nome + " " + "Preço: R$" + PlacaMae[0].preco;
    PrecoPM = parseFloat(PlacaMae[0].preco);
  } else if (opcoes01.value === "b1") {
    imagemPM.src = "Placa-Mae02.jpg";
    document.getElementById("Placa-Mae").innerHTML = "Nome: "+ PlacaMae[1].nome + " " + "Preço: R$" + PlacaMae[1].preco;
    PrecoPM = parseFloat(PlacaMae[1].preco);
  } else if (opcoes01.value === "c1") {
    imagemPM.src = "Placa-Mae03.jpg";
    document.getElementById("Placa-Mae").innerHTML = "Nome: "+ PlacaMae[2].nome + " " + "Preço: R$" + PlacaMae[2].preco;
    PrecoPM = parseFloat(PlacaMae[2].preco);
  } else if (opcoes01.value === "") {
    imagemPM.src = "";
    document.getElementById("Placa-Mae").innerHTML = "";
    PrecoPM = 0;
  }
  document.getElementById("PrecoTotal").innerHTML = PrecoPM + PrecoP + PrecoMR + PrecoPV;
});

const opcoes02 = document.getElementById("opcoes02");
const imagemP = document.getElementById("imagemP");

opcoes02.addEventListener("change", function() {
    if (opcoes02.value === "a2") {
      imagemP.src = "Processador01.jpg";
      document.getElementById("Processador").innerHTML = "Nome: "+ Processador[0].nome + " " + "Preço: R$" + Processador[0].preco;
      PrecoP = parseFloat(Processador[0].preco);
    } else if (opcoes02.value === "b2") {
      imagemP.src = "Processador02.jpg";
      document.getElementById("Processador").innerHTML = "Nome: "+ Processador[1].nome + " " + "Preço: R$" + Processador[1].preco;
      PrecoP = parseFloat(Processador[1].preco);
    } else if (opcoes02.value === "c2") {
      imagemP.src = "Processador03.jpg";
      document.getElementById("Processador").innerHTML = "Nome: "+ Processador[2].nome + " " + "Preço: R$" + Processador[2].preco;
      PrecoP = parseFloat(Processador[2].preco);
    } else if (opcoes02.value === "") {
      imagemP.src = "";
      document.getElementById("Processador").innerHTML = "";
      PrecoP = 0;
    }
    document.getElementById("PrecoTotal").innerHTML = PrecoPM + PrecoP + PrecoMR + PrecoPV;
  });

const opcoes03 = document.getElementById("opcoes03");
const imagemMR = document.getElementById("imagemMR");

opcoes03.addEventListener("change", function() {
    if (opcoes03.value === "a3") {
      imagemMR.src = "MemoriaRam01.jpg";
      document.getElementById("MemoriaRam").innerHTML = "Nome: "+ MemoriaRam[0].nome + " " + "Preço: R$" + MemoriaRam[0].preco;
      PrecoMR = parseFloat(MemoriaRam[0].preco);
    } else if (opcoes03.value === "b3") {
      imagemMR.src = "MemoriaRam02.jpg";
      document.getElementById("MemoriaRam").innerHTML = "Nome: "+ MemoriaRam[1].nome + " " + "Preço: R$" + MemoriaRam[1].preco;
      PrecoMR = parseFloat(MemoriaRam[1].preco);
    } else if (opcoes03.value === "c3") {
      imagemMR.src = "MemoriaRam03.jpg";
      document.getElementById("MemoriaRam").innerHTML = "Nome: "+ MemoriaRam[2].nome + " " + "Preço: R$" + MemoriaRam[2].preco;
      PrecoMR = parseFloat(MemoriaRam[2].preco);
    } else if (opcoes03.value === "") {
      imagemMR.src = "";
      document.getElementById("MemoriaRam").innerHTML = "";
      PrecoMR = 0;
    }
    document.getElementById("PrecoTotal").innerHTML = PrecoPM + PrecoP + PrecoMR + PrecoPV;
  });

const opcoes04 = document.getElementById("opcoes04");
const imagemPV = document.getElementById("imagemPV");

opcoes04.addEventListener("change", function() {
    if (opcoes04.value === "a4") {
      imagemPV.src = "PlacaDeVideo01.jpg";
      document.getElementById("PlacaDeVideo").innerHTML = "Nome: "+ PlacaDeVideo[0].nome + " " + "Preço: R$" + PlacaDeVideo[0].preco;
      PrecoPV = parseFloat(PlacaDeVideo[0].preco);
    } else if (opcoes04.value === "b4") {
      imagemPV.src = "PlacaDeVideo02.jpg";
      document.getElementById("PlacaDeVideo").innerHTML = "Nome: "+ PlacaDeVideo[1].nome + " " + "Preço: R$" + PlacaDeVideo[1].preco;
      PrecoPV = parseFloat(PlacaDeVideo[1].preco);
    } else if (opcoes04.value === "c4") {
      imagemPV.src = "PlacaDeVideo03.jpg";
      document.getElementById("PlacaDeVideo").innerHTML = "Nome: "+ PlacaDeVideo[2].nome + " " + "Preço: R$" + PlacaDeVideo[2].preco;
      PrecoPV = parseFloat(PlacaDeVideo[2].preco);
    } else if (opcoes04.value === "") {
      imagemPV.src = "";
      document.getElementById("PlacaDeVideo").innerHTML = "";
      PrecoPV = 0;
    }
    document.getElementById("PrecoTotal").innerHTML = PrecoPM + PrecoP + PrecoMR + PrecoPV;
  });


  
