

const propiedadesVenta = [

    {
      nombre: 'Apartamento de lujo en zona exclusiva',
      src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
      descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
      ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
      habitaciones: 4,
      baños: 4,
      costo: 5000,
      smoke: false,
      pets: false
    },
    {
      nombre: 'Apartamento acogedor en la montaña',
      src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
      descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
      ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
      habitaciones: 2,
      costo: 1200,
      baños:2,
      smoke: true,
      pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 4500,
        baños:3,
        smoke: false,
        pets: true
      },
  ];
  
  const propiedadesAlquiler = [
    {
      nombre: 'Apartamento en el centro de la ciudad',
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
      descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      costo: 2000,
      baños: 2,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Apartamento luminoso con vista al mar',
      src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
      ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
      habitaciones: 3,
      costo: 2500,
      baños:3,
      smoke: true,
      pets: true
    },

    {
      nombre: 'Condominio moderno en zona residencial',
      src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
      ubicacion: ' 123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      costo: 2200,
      baños: 2,
      smoke: true,
      pets: true
    },
    
  ];

  const propertiesContainerVenta = document.querySelector(".propiedadesv")
  const propertiesContainerAlquiler = document.querySelector(".propiedadesalq")
  

  let html = `
  <h2>Propiedades en venta</h2>
  <div class="row">
  `
  
  for (let propiedadv of propiedadesVenta){
    let smokev = propiedadv.smoke
    let texto1 = ""
    let icon1 = ""
    let color1 = ""

    if (smokev == true){
        texto1 = "Permitido fumar"
        icon1 = "fas fa-smoking"
        color1 = "text-success"
    }
    else {
        texto1 = "No se permite fumar"
        icon1 = "fas fa-smoking-ban"
        color1 = "text-danger"
    }

    let petv = propiedadv.pets
    let texto2 = ""
    let icon2 = ""
    let color2 = ""

    if (petv == true){
        texto2 = "Mascotas permitidas"
        icon2 = "fas fa-paw"
        color2 = "text-success"
    }
    else {
        texto2 = "No se permite mascotas"
        icon2 = "fa-solid fa-ban"
        color2 = "text-danger"
    }

    html += `
    <div class="col-md-4 mb-4">
              <div class="card">
                <img
                  src=${propiedadv.src}
                  class="card-img-top"
                  alt="Imagen del departamento"
                />
                <div class="card-body">
                  <h5 class="card-title">
                  ${propiedadv.nombre}
                  </h5>
                  <p class="card-text">
                  ${propiedadv.descripcion}
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt"></i>
                  ${propiedadv.ubicacion}
                  </p>
                  <p>
                    <i class="fas fa-bed"></i> ${propiedadv.habitaciones}
                    <i class="fas fa-bath"></i> ${propiedadv.baños}
                  </p>
                  <p><i class="fas fa-dollar-sign"></i> ${propiedadv.costo}</p>
                  <p class="${color1}">
                    <i class= "${icon1}"></i> ${texto1}
                  </p>
                  <p class="${color2}">
                    <i class="${icon2}"></i> ${texto2}
                  </p>
                </div>
              </div>
            </div>
            
            `
  }
  html += "</div>"
  let html2 = `<h2>Propiedades en alquiler</h2>
  <div class="row">
  `
  

  for (let propiedadalq of propiedadesAlquiler){

    let smokev = propiedadalq.smoke
    let texto1 = ""
    let icon1 = ""
    let color1 = ""

    if (smokev == true){
        texto1 = "Permitido fumar"
        icon1 = "fas fa-smoking"
        color1 = "text-success"
    }
    else {
        texto1 = "No se permite fumar"
        icon1 = "fas fa-smoking-ban"
        color1 = "text-danger"
    }

    let petv = propiedadalq.pets
    let texto2 = ""
    let icon2 = ""
    let color2 = ""

    if (petv == true){
        texto2 = "Mascotas permitidas"
        icon2 = "fas fa-paw"
        color2 = "text-success"
    }
    else {
        texto2 = "No se permite mascotas"
        icon2 = "fa-solid fa-ban"
        color2 = "text-danger"
    }

  
    html2 += `
    <div class="col-md-4 mb-4">
    <div class="card">
      <img
        src=${propiedadalq.src}
        alt="Imagen del departamento"
      />
      <div class="card-body">
        <h5 class="card-title">
        ${propiedadalq.nombre}
        </h5>
        <p class="card-text">
        ${propiedadalq.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${propiedadalq.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${propiedadalq.habitaciones}
          <i class="fas fa-bath"></i> ${propiedadalq.baños}
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedadalq.costo}</p>
        <p class="${color1}" id= "smoke-message">
          <i  id="smoke-icon" class="${icon1}"></i> ${texto1}
        </p>
        <p class="${color2}">
          <i class="${icon2}"></i> ${texto2}
        </p>
      </div>
    </div>
  </div>

    `
  }
  html2 += "</div>"

  propertiesContainerVenta.innerHTML = html
  ;
  propertiesContainerAlquiler.innerHTML = html2
  ;


