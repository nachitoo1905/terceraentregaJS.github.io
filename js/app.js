document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    //HEADER
    function renderHeader() {
        const header = document.createElement('header');
        header.textContent = 'Bebidas IGM';
        app.appendChild(header);
    }

    // NAVEGADOR
    function renderNav() {
        const nav = document.createElement('nav');
     
        
        const navMenu = document.createElement('div');
        navMenu.className = 'nav-menu';
    
        const homeButton = document.createElement('button');
        homeButton.textContent = 'Productos';
        homeButton.addEventListener('click', renderHome);
    
        const cartButton = document.createElement('button');
        cartButton.textContent = 'Carrito';
        cartButton.addEventListener('click', renderCart);
    
        const aboutButton = document.createElement('button');
        aboutButton.textContent = 'Informacion nuestra';
        aboutButton.addEventListener('click', renderAbout);
    
        const contactButton = document.createElement('button');
        contactButton.textContent = 'Contacto';
        contactButton.addEventListener('click', renderContact);
    
        const themeSwitch = document.createElement('label');
        themeSwitch.className = 'switch';

        const sunIcon = '<span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>';
        const moonIcon = '<span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>';

        themeSwitch.innerHTML = `
            ${moonIcon}
            
            <input type="checkbox" class="input">
            <span class="slider"></span>
            
            ${sunIcon}
        `;

        const themeCheckbox = themeSwitch.querySelector('.input');

        themeCheckbox.addEventListener('change', function() {
            document.body.classList.toggle('dark-theme', this.checked);
            // Guardar el estado del tema en localStorage
            localStorage.setItem('theme', this.checked ? 'dark' : 'light');
        });

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeCheckbox.checked = true;
        }


    
        // BOTOMES MENU DE NAVEGACION
        navMenu.appendChild(homeButton);
        navMenu.appendChild(cartButton);
        navMenu.appendChild(aboutButton);
        navMenu.appendChild(contactButton);
        navMenu.appendChild(themeSwitch); 
    
        
        nav.appendChild(navMenu);
        app.appendChild(nav);
    }


// FOOTER
    function RenderFooter() {
    const footer = document.createElement('footer');
    footer.className = 'pie-pagina';

    const grupo1 = document.createElement('div');
    grupo1.className = 'grupo-1';

    const box1 = document.createElement('div');
    box1.className = 'box';
    const figure = document.createElement('figure');
    const aLogo = document.createElement('a');
    aLogo.href = '../index.html';
    const imgLogo = document.createElement('img');
    imgLogo.src = './img/logo.png';
    imgLogo.alt = 'logo de footer';
    aLogo.appendChild(imgLogo);
    figure.appendChild(aLogo);
    box1.appendChild(figure);
    grupo1.appendChild(box1);

    const box2 = document.createElement('div');
    box2.className = 'box';
    const h2SobreNosotros = document.createElement('h2');
    h2SobreNosotros.textContent = 'SOBRE NOSOTROS';
    const p1 = document.createElement('p');
    p1.textContent = 'soy Ignacio Machado y este es mi emprendimiento de bebidas !';
    box2.appendChild(h2SobreNosotros);
    box2.appendChild(p1);
    grupo1.appendChild(box2);

    const box3 = document.createElement('div');
    box3.className = 'box';
    const h2Seguime = document.createElement('h2');
    h2Seguime.textContent = 'Seguime';
    const redSocial = document.createElement('div');
    redSocial.className = 'red-social';
    
    const socialMedia = [
        {name:'whatsapp', URL:'https://web.whatsapp.com/'},
        {name:'facebook', URL:'https://www.facebook.com/SOYUNGILAS0'},
        {name:'twitter', URL:'https://x.com/Nachomachado07'},
        {name:'instagram', URL:'https://www.instagram.com/nachomachado7/'},

    ];
    socialMedia.forEach(media => {
        const a = document.createElement('a');
        a.href = `${media.URL}`;
        a.target="_blank"
        a.className = `fa fa-${media.name} `;
        redSocial.appendChild(a);
    });
    box3.appendChild(h2Seguime);
    box3.appendChild(redSocial);
    grupo1.appendChild(box3);

    footer.appendChild(grupo1);

    const grupo2 = document.createElement('div');
    grupo2.className = 'grupo-2';
    const small = document.createElement('small');
    const currentYear = new Date().getFullYear();
    small.innerHTML = `&copy; ${currentYear} <b>Bebidas IGM</b> Todos los derechos reservados`;
    grupo2.appendChild(small);

    footer.appendChild(grupo2);

    document.getElementById('footer').appendChild(footer);
    }






// ---------------------------------------------Separacion - views - cuerpo HTML -------------------------------------------------------------------------------------------------------










    // SECCION PRODUCTOS
    function renderHome() {
        clearContainer();
        const container = document.createElement('div');
        container.className = 'container';

        const bebidas = [
            { id: 1, name: 'Ciroc RED BERRY', price: 195000, image: 'https://www.gourmetencasa-tcm.com/15475-thickbox_default/ciroc-red-berry-1l.jpg' },
            { id: 2, name: 'Absolut', price: 28999, image: 'https://www.gourmetencasa-tcm.com/18882-thickbox_default/absolut-1l.jpg' },
            { id: 3, name: 'NUVO rosado', price: 300000, image: 'https://cavasdecaba.com/wp-content/uploads/00654.png' },
            { id: 4, name: 'Smirnoff', price: 7500, image: 'https://www.gourmetencasa-tcm.com/17678-large_default/smirnoff-red-label-70cl.jpg' },
            { id: 5, name: 'Grey Goose', price: 450000, image: 'https://www.gourmetencasa-tcm.com/14106-large_default/grey-goose-70cl.jpg' },
            { id: 6, name: 'Ciroc', price: 180000, image: 'https://www.gourmetencasa-tcm.com/13807-thickbox_default/ciroc-70cl.jpg' },
            { id: 7, name: 'Ciroc PEACH', price: 193000, image: 'https://www.gourmetencasa-tcm.com/14283-large_default/ciroc-peach-70cl.jpg' },
            { id: 8, name: 'Absolut Raspberri', price: 33000, image: 'https://www.gourmetencasa-tcm.com/21343-large_default/absolut-raspberri-1l.jpg' },
            { id: 9, name: 'Absolut Lime', price: 31999, image: 'https://www.gourmetencasa-tcm.com/14278-thickbox_default/absolut-lime-1l.jpg' },
            { id: 10, name: 'Skyy Vodka', price: 9999, image: 'https://www.gourmetencasa-tcm.com/15477-large_default/skyy-1l.jpg' },
            { id: 11, name: 'Absolut Mango', price: 32000, image: 'https://www.gourmetencasa-tcm.com/22622-thickbox_default/absolut-mango-1l.jpg' },
            { id: 12, name: 'Cerveza Quilmes', price: 3000, image: 'https://www.gourmetencasa-tcm.com/14035-thickbox_default/quilmes-34-cl.jpg' },
            { id: 13, name: 'Whiskey Jack Daniels', price: 35000, image: 'https://www.gourmetencasa-tcm.com/15452-large_default/jack-daniel-s-1l.jpg' },
            { id: 14, name: 'Whiskey Jameson', price: 18000, image: 'https://www.gourmetencasa-tcm.com/21057-large_default/jameson-70cl.jpg' },
            { id: 15, name: 'Campari', price: 4000, image: 'https://www.gourmetencasa-tcm.com/22857-large_default/campari-5cl.jpg' },
            { id: 16, name: 'Whiskey Johnnie Walker Black Label', price: 39000, image: 'https://www.gourmetencasa-tcm.com/17423-large_default/johnnie-walker-black-label-70cl.jpg' },
            { id: 17, name: 'Whiskey Johnnie Walker Red Label', price: 23000, image: 'https://www.gourmetencasa-tcm.com/17697-large_default/johnnie-walker-red-label-70cl.jpg' },
            { id: 18, name: 'Whiskey Johnnie Walker Blue Label', price: 225000, image: 'https://www.gourmetencasa-tcm.com/17574-thickbox_default/johnnie-walker-blue-label-1l.jpg' },
        
        ];

        bebidas.forEach(bebida => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${bebida.image}" alt="${bebida.name}">
                <h3 class="h3-card" >${bebida.name}</h3>
                <p class="p-card" >Precio: $${bebida.price}</p>

                <div class="boton-div">
                    <button data-id="${bebida.id}" class="btn btn-primary botonn"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/> </svg> Agregar al carrito</button>
                </div>
                
            `;
            card.querySelector('button').addEventListener('click', () => addToCart(bebida));
            container.appendChild(card);
        });

        app.appendChild(container);
    }



    // SECCION CARRITO
    function renderCart() {
        clearContainer();
        const container = document.createElement('div');
        container.className = 'container cart-container';
    
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length === 0) {
            const emptyCartMsg = document.createElement('p');
            emptyCartMsg.textContent = 'No hay bebidas en el carrito.';
            emptyCartMsg.className = 'empty-cart-msg';
            container.appendChild(emptyCartMsg);
        } else {
            let total = 0;
    
            const cartItemsContainer = document.createElement('div');
            cartItemsContainer.className = 'cart-items';
    
            cart.forEach(item => {
                total += item.price;
    
                const card = document.createElement('div');
                card.className = 'card cart-card';
    
                const image = document.createElement('img');
                image.src = item.image;
                image.alt = item.name;
                card.appendChild(image);
    
                const details = document.createElement('div');
                details.className = 'card-details';
    
                const itemName = document.createElement('h3');
                itemName.textContent = item.name;
    
                const itemPrice = document.createElement('p');
                itemPrice.textContent = `Precio: $${item.price}`;
    
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Eliminar del carrito';
                removeButton.className = 'btn-carrito btn-danger';
                removeButton.addEventListener('click', () => removeFromCart(item));
    
                // Creación del icono de eliminar (SVG)
                
                const trashIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                trashIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                trashIcon.setAttribute('width', '16');
                trashIcon.setAttribute('height', '16');
                trashIcon.setAttribute('fill', 'currentColor');
                trashIcon.setAttribute('class', 'bi bi-trash3');
                trashIcon.setAttribute('viewBox', '0 0 16 16');
                trashIcon.innerHTML = `<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>`;
    
                removeButton.appendChild(trashIcon);
    
                details.appendChild(itemName);
                details.appendChild(itemPrice);
                details.appendChild(removeButton);
    
                card.appendChild(details);
                cartItemsContainer.appendChild(card);
            });
    
            const totalContainer = document.createElement('div');
            totalContainer.className = 'cart-summary';
    
            const totalText = document.createElement('p');
            totalText.className = 'cart-p';
            totalText.textContent = `Total a pagar: $${total}`;
    
            const pagarButton = document.createElement('button');
            pagarButton.textContent = 'Pagar';
            pagarButton.className = 'btn-pagar btn-success';
            pagarButton.addEventListener('click', () => handlePagar(cart));
    
            totalContainer.appendChild(totalText);
            totalContainer.appendChild(pagarButton);
    
            container.appendChild(cartItemsContainer);
            container.appendChild(totalContainer);
        }
    
        app.appendChild(container);
    }
    function handlePagar(bebidas) {
        let title = `¡Estas seguro de comprar ${bebidas.length} bebida${bebidas.length > 1 ? 's' : ''}!`;
    
        Swal.fire({
            title: title,
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Comprar!",
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('cart');
    
                const bebidaNames = bebidas.map(bebida => bebida.name).join(", ");
                
    
                Swal.fire({
                    title: "¡Comprado!",
                    text: `Compraste ${bebidaNames} exitosamente`,
                    icon: "success"
                });
    
                renderCart();
            } else {
                Swal.fire({
                    title: "Pago cancelado",
                    text: "Tu compra fue cancelada.",
                    icon: "error"
                });
            }
        });
    }
    
    
    function addToCart(bebida) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(bebida);
        localStorage.setItem('cart', JSON.stringify(cart));
        Swal.fire({
            title: `${bebida.name} 
            se agrego al carrito!`,
            icon: 'success',
            confirmButtonText: 'Seguir comprando',
            footer: '<span class="rojo"> Chequea que el producto se haya agregado correctamente! </span>',
            timer: 13000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            
        });
     
    }
    




 // PARTE INFORMACION NUESTRA

     function renderAbout() {
        clearContainer();
        const container = document.createElement('div');
        container.className = 'container';
    
        container.innerHTML = `
            <section id="about-intro">
                <h3> Sobre nosotros</h3>
                <p> Mi nombre es Machado Ignacio, y este es mi pagina de bebidas, tenemos todo tipo de Vodkas, Licores, Cervezas, Whiskies y demas </p>
                <p> Proximamente estaremos agregando medios de pago </p>
            </section>
    
            <section id="why-choose-us">
                <h3> ¿ Porque comprar en mi negocio ? </h3>
                <ul>
                    <li>Variedad de bebidas.</li>
                    <li>Excelentes precios en el mercado.</li>
                    <li>Compromiso con el cliente.</li>
                    <li>Porque somos los mejores de Cordoba capital ;).</li>
                </ul>
            </section>
    
            
        `;
    
        app.appendChild(container);
    }





    // CONTACTO SECCION
    function renderContact() {
        clearContainer();
        
        const container2 = document.createElement('div');
        container2.className = 'container';
    
        const h1 = document.createElement('h1');
        h1.className = 'h1-contact';
        h1.innerHTML = 'Contactame por dudas !';
    
        const divPadre = document.createElement('div');
        divPadre.className = 'div-padre';
    
        const form = document.createElement('form');
        form.className = 'form-form';
        form.innerHTML = `
            <input type="text" id="name" placeholder="Nombre" required class="form-control">
            <input type="email" id="email" placeholder="Correo Electrónico" required class="form-control">
            <textarea id="message" placeholder="Mensaje" required class="form-control textarea"></textarea>
            <div class="div-btn-form">
                <button type="submit" class="btn-form btn-primary">Enviar</button>
            </div>
        `;
        form.addEventListener('submit', handleContactSubmit);
    
        divPadre.appendChild(h1);
        divPadre.appendChild(form);
        container2.appendChild(divPadre);
        app.appendChild(container2);
    }
    
    function clearForm() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }
    function handleContactSubmit(event) {
        
        const name = document.getElementById('name').value;
       

        event.preventDefault();
        Swal.fire({
            title: `${name} tu mensaje fue enviado!`,
            icon: 'success',
            confirmButtonText: 'Volver',
            footer: '<span class="rojo"> Te responderemos por mail! </span>',
            timer: 10000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            
        });

        clearForm();
    }
    function removeFromCart(bebida) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== bebida.id);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        
        Swal.fire({
            title: `${bebida.name} 
            se elimino al carrito!`,
            icon: 'error',
            confirmButtonText: 'Volver',
            footer: '<span class="rojo"> Puedes volver agregarlo !</span>',
            timer: 10000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            
        });
    }



    function clearContainer() {
        const container = document.querySelector('.container');
        if (container) {
            container.remove();
        }
    }


    renderHeader();
    renderNav();
    renderHome(); 
    RenderFooter()
});
