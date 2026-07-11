 
  var etusivuHTML = `
    <div id="etusivu" class="container-fluid p-0 mb-4">
      <div class="bg-light text-center p-5 text-muted border mb-4" style="min-height: 400px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 class="display-4 font-weight-bold">Villa Leppäranta</h1>
        <p class="lead my-3">Luonnonrauhaa Parikkalassa</p>
        <a href="#"class="btn btn-primary btn-lg mt-3" onclick="SkrollaaOsioon('kalenteri'); return false;">Katso vapaat ajat</a>
      </div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 text-center">
            <h2 class="mb-3">Tervetuloa viihtymään Simpelejärven rannalle</h2>
            <p class="text-secondary">Villa Leppäranta tarjoaa täydelliset puitteet rentoutumiseen, lomailuun tai etätöihin luonnon keskellä.</p>
          </div>
        </div>
      </div>
    </div> 
    
    `;
  var varusteluHTML = `
    <div id="varustelu" class="container-fluid mb-4">

      <div class="text-center my-4">
        <h2>Mökin varustelu</h2>
        <p>Täältä löydät kaikki mukavuudet onnistunutta lomaa varten</p>
      </div>

      <div class="row no-gutters mb-4">
        <div class="col-6 p-1">
          <div class="bg-secondary text-white p-4 text-center">Kuva 1</div>
        </div>
        <div class="col-6 p-1">
          <div class="bg-secondary text-white p-4 text-center">Kuva 2</div>
        </div>
        <div class="col-6 p-1">
          <div class="bg-secondary text-white p-4 text-center">Kuva 3</div>
        </div>
        <div class="col-6 p-1">
          <div class="bg-secondary text-white p-4 text-center">Kuva 4</div>
        </div>
      </div>

      <div class="col-md-8 mx-auto">
        <h4 class="mb-3">Varustelu</h4>
        <ul>
          <li>Hyvin varusteltu keittiö</li>
          <li>Puulämmitteinen sauna</li>
          <li>Langaton wifi</li>
          <li>Soutuvene</li>
        </ul>
      </div>

    </div>
    `;
  var alueHTML = `
    <div id="alue" class="container-fluid mb-4">
      <div class="text-center my-4">
        <h2 class="font-weight-bold">Alue ja aktiviteetit</h2>
        <p class="text-secondary">Villa Leppäranta sijaitsee luonnon keskellä, mutta silti lähellä palveluja ja  itä-Suomen kaupunkeja</p>
      </div>

    <div class="row justify-content-center">
      <div class="col-md-8">
        <h4 class="mb-3 font-weight-bold">Etäisyydet lähikaupunkeihin</h4>
        <table class="table table-striped table-hover border text-secondary">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Kaupunki</th>
              <th scope="col">Etäisyys</th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <td><strong>Savonlinna</strong></td>
              <td>60 km</td>
            </tr>
            <tr>
              <td><strong>Lappeenranta</strong></td>
              <td>95 km</td>
            </tr>
            <tr>
              <td><strong>Joensuu</strong></td>
              <td>135</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="row justify-content-center">
    <div class="col-md-8 text-center">
      <h4 class="mb-3 font-weight-bold">Sijainti kartalla</h4>
      <div class="embed-responsive-item embed-responsive-16by9 border rounded shadow-sm"> 
        <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1872.2478546193755!2d29.4975735!3d61.5544444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469a45610ec25277%3A0x67db1a1d3557876a!2sParikkala!5e0!3m2!1sfi!2sfi!4v1710000000000!5m2!1sfi!2sfi" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>

    `;
      var yhteydenottoHTML = `
  <div id="yhteydenotto" class="container-fluid mb-4">
  <div class="text-center my-4">
    <h2 class="font-weight-bold">Ota yhteyttä</h2>
    <p class="text-secondary">Onko sinulla kysyttävää mökistä tai haluatko tehdä varauksen? Lähetä meille viesti!</p>
  </div>

  <div class="row justify-content-center">
    <div class="col-md-8">
      <form action="#" method="POST" onsubmit="alert('Kiitos viestistä, otamme yhteyttä mahdollisimman pian');return false;">
        <div class="form-group">
          <label for="nimi">Nimi</label>
          <input type="text" id="nimi" class="form-control" placeholder="Etunimi Sukunimi" required/>
        </div>
        <div class="form-group">
          <label for="email">Sähköposti</label>
          <input type="email" id="email" class="form-control" placeholder="Matti.Meikäläinen@esimerkki.fi" required/>
        </div>
        <div class="form-group">
          <label for="viesti">Viesti</label>
          <textarea id="viesti" class="form-control" rows="5" placeholder="Kirjoita viestisi tähän..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Lähetä viesti</button>
      </form>
    </div>
  </div>
</div>
    `;

   
      var kalenteriHTML = `
  <div id="kalenteri" class="container-fluid py-5 mt-5">
    <div class="col-md-8">
      <hr class="my-4" />
    </div>
  </div>
    <div class="text-center my-4">
      <h2 class="font-weight-bold">Varaustilanne</h2>
      <p class="text-secondary">Villa Leppärannan tulevien kuukausien varaustilanne</p>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-6">
        <h4 class="mb-3 font-weight-bold text-center">Kesä/ syksy 2026</h4>
          <ul class="list-group shadow-sm text-secondary">
            <li class="list-group-item d-flex justify-content-between align-items-center"><span><strong>Heinäkuu</strong></span><span class="badge badge-danger badge-pill p-2">Varattu</span></li>
            <li class="list-group-item d-flex justify-content-between align-items-center"><span><strong>Elokuu</strong></span><span class="badge badge-warning badge-pill p-2">Osittain vapaana</span></li>
            <li class="list-group-item d-flex justify-content-between align-items-center"><span><strong>Syyskuu</strong></span><span class="badge badge-success badge-pill p-2">Vapaa</span></li>
            
          </ul>
        </h4>
      </div>
    </div>
  </div>

    `;
      function LataaAloitusSisalto() {
        document.getElementById("kontentti").innerHTML = 
        etusivuHTML + 
        varusteluHTML + 
        alueHTML + 
        yhteydenottoHTML + 
        kalenteriHTML;
      }

      const sisallot = [etusivuHTML, varusteluHTML, alueHTML, yhteydenottoHTML, kalenteriHTML];

  

  function SkrollaaOsioon(id) {
    const valikko = document.getElementById("mainNavBar");
    let valikkoOliAuki = false;

    if (valikko && valikko.classList.contains("show")) {
      valikko.classList.remove("show");
      valikkoOliAuki = true;
   
    const painike = document.querySelector(".navbar-toggler");
    if (painike) {
      painike.classList.add("collapsed");
      painike.setAttribute("aria-expanded", "false");

       }
    }

      const elementti = document.getElementById(id);
      if (elementti) {
        if(valikkoOliAuki) {
          setTimeout(function() {
            SuoritaNatiiviSkrollaus(elementti);
          }, 250);
        } else {
          SuoritaNatiiviSkrollaus(elementti);
        }
      }
  }

    function SuoritaNatiiviSkrollaus(elementti) {
      const elementinSijainti = elementti.getBoundingClientRect().top + window.pageYOffset;
      const lopullinenKohta = elementinSijainti - 80;

      window.scrollTo({
        top: lopullinenKohta,
        behavior: 'smooth'
      });
    }
  

  
   
