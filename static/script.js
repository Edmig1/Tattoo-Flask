menu = document.getElementsByClassName('menu')[0]
botao = document.getElementsByClassName('botao')[0]
function abrirmenu(event) {
    event.preventDefault()
    menu.classList.remove('fechado')
    menu.classList.add('aberto')
    botao.style.visibility = 'hidden'
}
fm = document.getElementById('fm')
function fecharmenu() {
    menu.classList.add('fechado')
    menu.classList.remove('aberto')
    botao.style.visibility = 'visible'
}
function mudar() {
    select = document.getElementById('select').value
    p = document.getElementsByClassName('texto')[0]
    t = document.getElementsByClassName('titulo-art')[0]
    i = document.getElementsByClassName('img-art')[0]
    if (select == 't1') {
        i.src = '/static/jeff.png'
        i.classList.add('transition')
        p.innerHTML = 'Jeff é conhecido por sua abordagem minimalista e elegante para a arte da tatuagem. Ele acredita na beleza da simplicidade, cHenrydo designs que são marcantes em sua simplicidade. Suas tatuagens são um testemunho de que menos pode ser mais, deixando uma impressão duradoura com linhas limpas e um estilo distintamente elegante.'
        t.innerHTML = 'Jeff, o Mestre da Simplicidade Elegante'
        setTimeout(() => {
            i.classList.remove('transition')
        }, "500");
    }
    else if (select == 't2') {
        i.src = '/static/azzy.png'
        i.classList.add('transition')
        t.innerHTML = 'Azzy, a Mestra das Cores'
        p.innerHTML = 'Azzy é conhecida por sua habilidade excepcional em usar cores de forma vibrante e expressiva em suas tatuagens. Ela transforma a pele em uma tela em branco, onde as cores ganham vida, cHenrydo composições visuais surpreendentes. A paixão de Azzy pela arte das cores a torna uma tatuadora única e altamente requisitada.'
        setTimeout(() => {
            i.classList.remove('transition')
        }, "500");
    }
    else if (select == 't3') {
        i.src = '/static/jhonny.png'
        i.classList.add('transition')
        t.innerHTML = 'Jhonny, O Tatuador Criativo:'
        p.innerHTML = 'Jhonny é um tatuador que respira criatividade e arte. Seu talento excepcional e olhar inovador o destacam como um dos mais criativos do ramo. Cada tatuagem que ele cria é uma obra de arte única que conta a história e personalidade de seus clientes. Com anos de experiência, Jhonny é uma verdadeira referência no mundo das tatuagens.'
        setTimeout(() => {
            i.classList.remove('transition')
        }, "500");
    }
    else if (select == 't4') {
        i.src = '/static/rain.png'
        t.innerHTML = 'Henry, o Especialista em Realismo'
        i.classList.add('transition')
        p.innerHTML = 'Henry é um mestre na arte do realismo. Suas tatuagens são tão detalhadas e precisas que parecem saltar da pele. Cada traço é cuidadosamente executado para capturar a essência e os detalhes de cada imagem, tornando suas tatuagens verdadeiras obras-primas realistas'
        setTimeout(() => {
            i.classList.remove('transition')
        }, "500");
    }
    else {
        i.src = '/static/tattoos.png'
        i.classList.add('transition')
        t.innerHTML = 'Sobre Nossa Empresa'
        p.innerHTML = 'A Flash Tatto é uma renomada empresa fundada por Bruno Cardoso em 2005, que se destaca no mercado pela sua excelência no fornecimento de serviços relacionados à indústria de tatuagens temporárias e personalizadas. Com uma trajetória notável ao longo de quase duas décadas, a empresa consolidou sua posição como líder do setor, combinando criatividade, inovação e qualidade em todos os aspectos de seu empreendimento. Desde a sua fundação, a Flash Tatto tem se empenhado em atender às crescentes demandas dos clientes por tatuagens temporárias que sejam tanto esteticamente atraentes quanto seguras para a pele. A empresa investe continuamente em pesquisa e desenvolvimento.'
        setTimeout(() => {
            i.classList.remove('transition')
        }, "500");
    }
}
galeria = document.getElementsByClassName('galeria')[0]
imgs = document.getElementsByClassName('img-div')
img1 = document.getElementsByClassName('img-p-1')[0]
img2 = document.getElementsByClassName('img-p-2')[0]
img3 = document.getElementsByClassName('img-p-3')[0]
altura = document.getElementsByClassName('altura')[0]
tituloport = document.getElementsByClassName('titulo-port')[0]
function portifolio() {
    select2 = document.getElementById('select2').value
    if (select2 == 'p1') {
        galeria.classList.add('galeriaaberta')
        tituloport.innerHTML = 'Portifólio Jeff:'
        tituloport.style.display = 'flex'
        img1.src = '/static/jeff1.png'
        img2.src = '/static/jeff2.png'
        img3.src = '/static/jeff3.png'
        altura.style.minHeight = '50vh'
        for (var i = 0; i < 4; i++) {
            imgs[i].style.display = 'inline'
        }
    }
    else if (select2 == 'p2') {
        galeria.classList.add('galeriaaberta')
        tituloport.innerHTML = 'Portifólio Azzy:'
        tituloport.style.display = 'flex'
        altura.style.minHeight = '50vh'
        img1.src = '/static/azzy1.png'
        img2.src = '/static/azzy2.png'
        img3.src = '/static/azzy3.png'
        for (var i = 0; i < 4; i++) {
            imgs[i].style.display = 'inline'
        }
    }
    else if (select2 == 'p3') {
        galeria.classList.add('galeriaaberta')
        tituloport.innerHTML = 'Portifólio Jhonny:'
        tituloport.style.display = 'flex'
        img1.src = '/static/jhonny1.png'
        img2.src = '/static/jhonny2.png'
        img3.src = '/static/jhonny3.png'
        altura.style.minHeight = '50vh'
        for (var i = 0; i < 4; i++) {
            imgs[i].style.display = 'inline'
        }

    }
    else if (select2 == 'p4') {
        galeria.classList.add('galeriaaberta')
        tituloport.innerHTML = 'Portifólio Henry:'
        tituloport.style.display = 'flex'
        img1.src = '/static/henry1.png'
        img2.src = '/static/henry2.png'
        img3.src = '/static/henry3.png'
        altura.style.minHeight = '50vh'
        for (var i = 1; i < 4; i++) {
            imgs[i].style.display = 'inline'
        }
    }
    else {
        galeria.classList.remove('galeriaaberta')
        altura.style.minHeight = '0px'
        tituloport.style.display = 'none'
        for (var i = 0; i < 4; i++) {
            imgs[i].style.display = 'none'
        }
    }}
    redes = document.getElementsByClassName('redes')[0]
    btn = document.getElementsByClassName('btn-contato')[0]
    footer = document.getElementsByClassName('footer')[0]
function contato(){
    if (redes.style.right == '-20%'){
        redes.style.right = '2%'
        btn.innerHTML = 'Fechar contato'
        btn.style.right ='85%'
    }
    else if(redes.style.right == '2%'){
        redes.style.right = '-20%'
        btn.innerHTML = 'Entrar em contato'
        btn.style.right ='50%'

    }
}