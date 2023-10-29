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
      baños: 4,
      smoke: true,
      pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 3500,
        baños: 4,
        smoke: false,
        pets: true
      },

      {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 3000,
        smoke: false,
        pets: false
      },
      {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        costo: 2200,
        baños: 4,
        smoke: true,
        pets: true
      },

  ];

  const propertiesContainerVenta = document.querySelector(".propiedadesv")

  let html = `<div class="row">`
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
  html += "</div> "
  propertiesContainerVenta.innerHTML = html
  ;