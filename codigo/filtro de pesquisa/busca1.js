var bancoDeDados = [
  { id: 'Monitor Gamer Ninja Sharingan', nome: 'Monitor Gamer Ninja Sharingan', tipo: 'Monitor', foto: 'img-res/monitor-gamer-ninja-sharingan-24-.jpg', descricao: 'Monitor Gamer Ninja Sharingan, 24 Pol, Curvo, Full HD, 1ms, 165Hz, HDMI/DP, MGN-003-24S', avaliacao: 5 },
  { id: 'Monitor Gamer SuperFrame Prisma', nome: 'Monitor Gamer SuperFrame Prisma', tipo: 'Monitor', foto: 'img-res/monitor-gamer-superframe-prisma-27-pol-qhd-1ms-165hz-freesync-hdmidp_169847.jpg', descricao: 'Monitor Gamer SuperFrame Prisma, 27 Pol, QHD, 1ms, 165Hz, FreeSync, HDMI/DP, SF2762QPA', avaliacao: 5 },
  { id: 'Monitor Gamer SuperFrame SFV2409SE', nome: 'Monitor Gamer SuperFrame SFV2409SE', tipo: 'Monitor', foto: 'img-res/monitor-gamer-superframe-sfv2409se-24-pol-full-hd-va-hdmivga_133747.jpg', descricao: 'Monitor Gamer SuperFrame SFV2409SE, 24 Pol, Full HD, VA, HDMI/VGA', avaliacao: 5  },
  { id: 'Water Cooler DeepCool', nome: 'Water Cooler DeepCool', tipo: 'Cooler', foto: 'img-res/water-cooler-deepcool-.webp', descricao: 'Water Cooler DeepCool LE500, LED 6 Cores 240mm, Intel-AMD, R-LE500-BKLNMC-G-1', avaliacao: 5 },
  { id: 'Water Cooler Rise Mode Frost', nome: 'Water Cooler Rise Mode Frost', tipo: 'Cooler', foto: 'img-res/water-cooler-rise-mode-frost-.jpg', descricao: 'Water Cooler Rise Mode Frost, 120mm, RGB, Intel-AMD, White, RM-WCZ-01-RGB', avaliacao: 5 },
  { id: 'Cooler para Processador Montech Air Cooler 210', nome: 'Cooler para Processador Montech Air Cooler 210', tipo: 'Cooler', foto: 'img-res/cooler-para-processador-montech-air-cooler-.webp', descricao: 'Cooler para Processador Montech Air Cooler 210, ARGB, 120mm, Intel-AMD, AIR COOLER 210', avaliacao: 5 },
  { id: 'Memória DDR4 Kingston Fury SuperFrame', nome: 'Memória DDR4 Kingston Fury SuperFrame', tipo: 'Memoria-Ram', foto: 'img-res/memoria-ddr4-kingston-fury-superframe-8gb.jpg', descricao: 'Memória DDR4 Kingston Fury SuperFrame, 8GB, 3200Mhz, Black, KF432C16BB/8CL', avaliacao: 5 },
  { id: 'Memória DDR4 Kingston Fury SuperFrame RGB', nome: 'Memória DDR4 Kingston Fury SuperFrame RGB', tipo: 'Memoria-Ram' ,foto: 'imag-res/memoria-ddr4-kingston-fury-superframe-rgb-.jpg', descricao: 'Memória DDR4 Kingston Fury SuperFrame RGB, 8GB, 3200Mhz, Black, KF432C16BBA/8CL', avaliacao: 0 },
  { id: 'Memória para Notebook DDR3 Kingston Valueram', nome: 'Memória para Notebook DDR3 Kingston Valueram', tipo: 'Memoria-Ram' ,foto: 'imag-res/memoria-ddr3-kingston-valueram-.jpg', descricao: 'Memória para Notebook DDR3 Kingston Valueram, 4GB, 1600Mhz, KVR16S11S8/4WP', avaliacao: 4 },
  { id: 'SSD Kingston A400, 480GB, Sata III', nome: 'SSD Kingston A400, 480GB, Sata III', tipo: 'SSD', foto: 'img-res/ssd-wd-green-480gb-m2-nvme-.jpg', descricao: 'SSD Kingston A400, 480GB, Sata III, Leitura 500MBs Gravação 450MBs, SA400S37/480G', avaliacao: 5 },
  { id: 'SSD WD Green SN350, 480GB, M.2 NVMe', nome: 'SSD WD Green SN350, 480GB, M.2 NVMe', tipo: 'SSD', foto: 'img-res/ssd-kingston-nv2-250gb-m2-nvme.jpg', descricao: 'SSD WD Green SN350, 480GB, M.2 NVMe, Leitura 2400MB/s e Gravação 1650MB/s, WDS480G2G0C', avaliacao: 5 },
  { id: 'SSD Kingston NV2, 250GB, M.2 NVMe', nome: 'SSD Kingston NV2, 250GB, M.2 NVMe', tipo: 'SSD', foto: 'img-res/ssd-adata-legend-840-1tb-m2-2280-nvme.jpg', descricao: 'SSD Kingston NV2, 250GB, M.2 NVMe, 2280, Leitura 3000MBs e Gravação 1300MBs, SNV2S/250G', avaliacao: 4 },
  { id: 'HD WD Blue 1TB, Sata III', nome: 'HD WD Blue 1TB, Sata III', tipo: 'Hard-Disk', foto: 'img-res/hd-western-digital-caviar-blue-.webp', descricao: 'HD WD Blue 1TB, Sata III, 7200RPM, 64MB, WD10EZEX', avaliacao: 5 },
  { id: 'HD WD Red, 4TB', nome: 'HD WD Red, 4TB', tipo: 'Hard-Disk', foto: 'img-res/hd-wester-digital-red-4tb-sata.webp', descricao: 'HD WD Red, 4TB, SATA, 5400RPM, NAS, 3.5, WD40EFAX', avaliacao: 5 },
  { id: 'HD WD Red, 2TB', nome: 'HD WD Red, 2TB', tipo: 'Hard-Disk', foto: 'img-res/hd-western-digital-red-2tb-.webp', descricao: 'HD WD Red, 2TB, SATA, 5400RPM, NAS, 3.5, WD20EFAX', avaliacao: 4.5 },
  { id: 'Placa Mãe Biostar A320MH', nome: 'Placa Mãe Biostar A320MH', tipo: 'Placa-Mãe', foto: 'img-res/placa-mae-biostar-a320mh.webp', descricao: 'Placa Mãe Biostar A320MH, Chipset A320, AMD AM4, mATX, DDR4', avaliacao: 5 },
  { id: 'Placa Mãe Biostar B550MX/E PRO', nome: 'Placa Mãe Biostar B550MX/E PRO', tipo: 'Placa-Mãe', foto: 'img-res/placa-mae-biostar-b550mxe-pro-.webp', descricao: 'Placa Mãe Biostar B550MX/E PRO, Chipset B550, AMD AM4, mATX, DDR4', avaliacao: 5 },
  { id: 'Placa Mãe Biostar A520MH', nome: 'Placa Mãe Biostar A520MH', tipo: 'Placa-Mãe', foto: 'img-res/placa-mae-biostar-a520mh-.webp', descricao: 'Placa Mãe Biostar A520MH, Chipset A520, AMD AM4, mATX, DDR4', avaliacao: 5 },
  { id: 'Placa de Vídeo Zotac Gaming GeForce RTX 3060 Twin', nome: 'Placa de Vídeo Zotac Gaming GeForce RTX 3060 Twin', tipo: 'Placa de video', foto: 'img-res/placa-de-video-zotac-gaming-geforce-rtx-3060.webp', descricao: 'Placa de Vídeo Zotac Gaming GeForce RTX 3060 Twin Edge OC, 12GB, GDDR6, DLSS, Ray Tracing, ZT-A30600H-10M', avaliacao: 5 },
  { id: 'Placa de Vídeo Gigabyte GeForce GTX 1650', nome: 'Placa de Vídeo Gigabyte GeForce GTX 1650', tipo: 'Placa de video', foto: 'img-res/placa-de-video-gigabyte-geforce-gtx-1650.webp', descricao: 'Placa de Vídeo Gigabyte GeForce GTX 1650 D6 OC, 4GB GDDR6, 128Bit, GV-N1656OC-4GD', avaliacao: 4 },
  { id: 'Placa De Video MSI NVIDIA GeForce RTX 4090', nome: 'Placa De Video MSI NVIDIA GeForce RTX 4090', tipo: 'Placa de video', foto: 'imag-res/placa-de-video-msi-nvidia-geforce-rtx-4090-.webp', descricao: 'Placa De Video MSI NVIDIA GeForce RTX 4090 SUPRIM LIQUID X, 24GB, GDDR6X, DLSS, Ray Tracing, 912-V510-007', avaliacao: 5 },
  { id: 'Processador Intel Core i5 10400F', nome: 'Processador Intel Core i5 10400F', tipo: 'Processador', foto: 'img-res/processador-intel-core-i5-10400f.jpg', descricao: 'Processador Intel Core i5 10400F 2.90GHz (4.30GHz Turbo), 10ª Geração, 6-Cores 12-Threads, LGA 1200, BX8070110400F', avaliacao: 5 },
  { id: 'Processador AMD Ryzen 5 5600X', nome: 'Processador AMD Ryzen 5 5600X', tipo: 'Processador', foto: 'img-res/processador-amd-ryzen-5-5600x.webp', descricao: 'Processador AMD Ryzen 5 5600X 3.7GHz (4.6GHz Turbo), 6-Cores 12-Threads, Cooler Wraith Stealth, AM4, 100-100000065BOX', avaliacao: 5 },
  { id: 'Processador Intel Core i9 12900', nome: 'Processador Intel Core i9 12900', tipo: 'Processador', foto: 'imag-res/processador-intel-core-i9.jpg', descricao: 'Processador Intel Core i9 12900 2.4GHz (5.1GHz Turbo), 12ª Geração, 16-Cores 24-Threads, LGA 1700, BX8071512900', avaliacao: 5 },
  { id: 'Fonte Gigabyte P550B 550W', nome: 'Fonte Gigabyte P550B 550W', tipo: 'Fonte', foto: 'img-res/fonte-gigabyte-p550b-550w.jpg', descricao: 'Fonte Gigabyte P550B 550W, 80 Plus Bronze, PFC Ativo, GP-P550B', preço: 'R$349,00', avaliacao: 5 },
  { id: 'Fonte Gigabyte P650B 650W', nome: 'Fonte Gigabyte P650B 650W', tipo: 'Fonte', foto: 'img-res/fonte-gigabyte-p650b.jpg', descricao: 'Fonte Gigabyte P650B 650W, 80 Plus Bronze, PFC Ativo, GP-P650B', avaliacao: 5 },
  { id: 'Fonte Redragon RGPS 500W', nome: 'Fonte Redragon RGPS 500W', tipo: 'Fonte', foto: 'img-res/fonte-redragon-rgps-500w.jpg', descricao: 'Fonte Redragon RGPS 500W, 80 Plus Bronze, PFC Ativo, GC-PS001', avaliacao: 4.5 },
  { id: 'Gabinete Gamer SuperFrame Strider', nome: 'Gabinete Gamer SuperFrame Strider', tipo: 'Gabinete', foto: 'img-res/gabinete-gamer-superframe-strider-mid-tower-argb.webp', descricao: 'Gabinete Gamer SuperFrame Strider, Mid Tower, ARGB, Vidro Temperado, ATX, Sem Fonte, Com 3 Fans', avaliacao: 5 },
  { id: 'Gabinete Gamer Montech Sky Two', nome: 'Gabinete Gamer Montech Sky Two', tipo: 'Gabinete', foto: 'img-res/gabinete-gamer-montech-sky-two-argb.jpg', descricao: 'Gabinete Gamer Montech Sky Two, ARGB, Mid Tower, Vidro Temperado, ATX, Black, Sem Fonte, Com 4 Fans', avaliacao: 5 },
  { id: 'Gabinete Gamer Lian Li O11 Dynamic Mini Redragon', nome: 'Gabinete Gamer Lian Li O11 Dynamic Mini Redragon', tipo: 'Gabinete', foto: 'img-res/gabinete-gamer-lian-li-o11-dynamic-mini-redragon-edition.webp', descricao: 'Gabinete Gamer Lian Li O11 Dynamic Mini Redragon Edition, Mid Tower, Vidro Temperado, mATX, Black, Sem Fonte, Sem Fan, O11DMINI-RD-X', avaliacao: 5 },
];
var fuse = new Fuse(bancoDeDados, {
  includeScore: true,
  keys: ['nome'],
});

function buscarRestaurante(nome, filtrosSelecionados) {
  var resultados = [];

  if (filtrosSelecionados.length === 0) {
    resultados = fuse.search(nome);
  } else {
    var filtroRestaurantes = bancoDeDados.filter(function(restaurante) {
      return filtrosSelecionados.includes(restaurante.tipo);
    });

    var fuseFiltrado = new Fuse(filtroRestaurantes, {
      includeScore: true,
      keys: ['nome'],
    });

    resultados = fuseFiltrado.search(nome);
  }

  var divRestaurantes = document.getElementById('restaurantes');
  divRestaurantes.innerHTML = '';

  for (var i = 0; i < resultados.length; i++) {
    var restaurante = resultados[i].item;

    var novoBloco = document.createElement('div');
    var fotoRestaurante = document.createElement('img');
    fotoRestaurante.src = 'img-res/' + restaurante.foto;
    fotoRestaurante.style.width = '200px';
    fotoRestaurante.style.height = '200px';
    novoBloco.appendChild(fotoRestaurante);

    var textContainer = document.createElement('div');
    textContainer.className = 'text-container';

    var nomeRestaurante = document.createElement('h3');
    nomeRestaurante.textContent = restaurante.nome;
    textContainer.appendChild(nomeRestaurante);

    var descricaoRestaurante = document.createElement('p');
    descricaoRestaurante.textContent = restaurante.descricao;
    textContainer.appendChild(descricaoRestaurante);

    var avaliacaoRestaurante = document.createElement('p');
    for (var j = 0; j < 5; j++) {
      avaliacaoRestaurante.innerHTML += j < restaurante.avaliacao ? '⭐' : '☆';
    }
    textContainer.appendChild(avaliacaoRestaurante);

    novoBloco.appendChild(textContainer);

    var linkRestaurante = document.createElement('a');
    linkRestaurante.href = '/menu/' + restaurante.id;
    linkRestaurante.appendChild(novoBloco);

    divRestaurantes.appendChild(linkRestaurante);
  }
}

document.getElementById('busca').addEventListener('input', function() {
  var valorDigitado = this.value.trim();
  var filtrosSelecionados = [];
  document.querySelectorAll('#filtros input[type="checkbox"]:checked').forEach(function(checkbox) {
    filtrosSelecionados.push(checkbox.id);
  });
  buscarRestaurante(valorDigitado, filtrosSelecionados);
});

document.querySelectorAll('#filtros input[type="checkbox"]').forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    var valorDigitado = document.getElementById('busca').value.trim();
    var filtrosSelecionados = [];
    document.querySelectorAll('#filtros input[type="checkbox"]:checked').forEach(function(checkbox) {
      filtrosSelecionados.push(checkbox.id);
    });
    buscarRestaurante(valorDigitado, filtrosSelecionados);
  });
});

