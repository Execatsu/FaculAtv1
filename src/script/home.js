let sections = [];


sections.push({titulo: "Primeira geração (1946 – 1954)", descricao: "A primeira geração dos computadores, que ocorreu entre 1946 e 1954, foi caracterizada pela presença de máquinas massivas principalmente projetadas para cálculos numéricos. Entre essas máquinas estava o ENIAC (Electronic Numerical Integrator and Computer), o primeiro computador digital em grande escala. Originalmente criado durante a Segunda Guerra Mundial para calcular trajetórias táticas que exigiam conhecimento matemático substancial, o ENIAC só se tornou operacional no final da guerra. Ele ostentava uma capacidade de processamento de cinco mil operações por segundo e era composto por 17.478 tubos de vácuo. Enorme em tamanho, o ENIAC ocupava uma área de 18 metros quadrados, consumia impressionantes 200.000 Watts de energia e pesava aproximadamente 30 toneladas. Esta geração marcou o estágio inicial do desenvolvimento de computadores, enfatizando os começos rudimentares, porém inovadores, da tecnologia computacional.", caminhoImagem: "https://miro.medium.com/v2/resize:fit:1400/0*Rne1OdgDnwzCU8Ng.jpg"});
sections.push({titulo: "Segunda geração (1955 – 1964)", descricao: "A segunda geração de computadores surgiu com uma mudança significativa em sua tecnologia, inicialmente empregada como sistemas de controle em usinas nucleares. Esta nova fase abandonou as válvulas em favor dos transistores, componentes baseados em materiais sólidos, como o silício, que continua sendo essencial na produção de placas e dispositivos eletrônicos atualmente. Os transistores apresentavam diversas vantagens em relação às válvulas, especialmente em termos de tamanho. Sendo consideravelmente menores, os computadores da segunda geração eram até 100 vezes mais compactos que seus predecessores. Além disso, eram mais eficientes tanto no consumo de energia quanto nos custos de peças, tornando-os economicamente mais viáveis. Essa transição marcou um avanço significativo na evolução dos computadores, permitindo sua aplicação em novos contextos e impulsionando ainda mais o desenvolvimento da tecnologia da informação.", caminhoImagem: "http://computerstory.weebly.com/uploads/2/4/4/7/24470703/8471603.jpg"});
sections.push({titulo: "Terceira geração (1964 – 1977)", descricao: "Possui como principal característica a utilização de circuitos integrados, também feitos de silício, que foram conhecidos como microchips. Foi também na terceira geração que surgiram os teclados para digitação de comandos, monitores também permitiam a visualização de sistemas operacionais ainda muito primitivos, totalmente diferentes dos S.Os conhecidos nos dias de hoje.", caminhoImagem: "https://grupocdd.files.wordpress.com/2010/10/osborne.jpg"})
sections.push({titulo: "Quarta geração (1977 – 1991)", descricao: "Começo da era dos Computadores Pessoais, juntamente com a Unidade Central de Processamento — CPU e os Sistemas Operacionais MS-DOS, UNIX, Apple Macintosh. Os computadores eram mais confiáveis, mais rápidos, menores e com maior capacidade de armazenamento.", caminhoImagem: "https://static.todamateria.com.br/upload/co/mp/computadorquartageracao.jpg"})
sections.push({titulo: "Quinta geração (1991 - Atual)", descricao: "Os computadores da quinta geração usam processadores com milhões de transistores. Nesta geração surgiram as arquiteturas de 64 bits, os processadores que utilizam tecnologias RISC e CISC, discos rígidos com capacidade superior a 600GB, pen-drives com mais de 1GB de memória e utilização de disco ótico com mais de 50GB de armazenamento.", caminhoImagem: "https://agronomiaunimontes120175g.files.wordpress.com/2017/05/lenovo-s200-759.jpg"})






function adicionarItens() {
    for(let i = 0; i < sections.length; i++) {

        let _section = document.createElement("section");
        _section.classList.add("section-item");

        let _div1 = document.createElement("div");
        _div1.classList.add("section-item-imgBox");

        let _img = document.createElement("img");
        _img.classList.add("section-item-img");
        _img.src = sections[i].caminhoImagem;

        let _div2 = document.createElement("div");
        _div2.classList.add("section-item-container");

        let _h2 = document.createElement("h2");
        _h2.classList.add("section-item-title");
        _h2.innerText = sections[i].titulo;

        let _span = document.createElement("span");
        _span.classList.add("section-item-span");
        _span.innerText = sections[i].descricao;

        _div1.appendChild(_img);
        _div2.appendChild(_h2);
        _div2.appendChild(_span);

        _section.appendChild(_div1);
        _section.appendChild(_div2);

        if(i == 4) {
            _section.classList.add("rgb")
        }

        document.getElementById("sections").appendChild(_section);
    }
}
adicionarItens();

/*
<section class="section-item">
    <div class="section-item-imgBox">
        <img src="" class="section-item-img">
    </div>
    <div class="section-item-container">
        <h2 class="section-item-title">Titulo</h2>
        <span class="section-item-span">Texto</span>
    </div>
</section>*/