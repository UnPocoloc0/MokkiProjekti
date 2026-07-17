var etusivuHTML = `
<div id="etusivu" class="container-fluid p-0 mb-4">
  <div
    class="jumbotron jumbotron-fluid text-center text-white border-bottom shadow-sm"
    style="
      min-height: 500px;
      background:
        linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        url('Assets/Takapiha_hero.jpg') no-repeat center center;
      background-size: cover;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: -48px;
    "
  >
    <div class="container py-5">
      <!-- Lisätty .hero-title luokka suoraan tänne -->
      <h1 class="display-3 font-weight-bold hero-title drop-shadow">Villa Leppäranta</h1>
    
      
      <p class="lead my-3 font-weight-normal" style="text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8); font-size: 1.5rem">
        Luonnonrauhaa Simpelejärven rannalla Parikkalassa
      </p>
      
      <!-- Painike linkitetty rullaamaan kalenteriin oikein -->
      <a href="#" class="btn btn-primary btn-lg mt-4 px-4 py-3 font-weight-bold shadow" onclick="SkrollaaOsioon('kalenteri'); return false;">
        Katso vapaat ajat
      </a>
    </div>
  </div>

  <div class="container my-5 py-3">
    <div class="row justify-content-center">
      <div class="col-md-8 text-center">
        <h2 class="mb-4 font-weight-bold text-dark">Tervetuloa viihtymään luonnon keskelle</h2>
        <p class="text-secondary" style="font-size: 1.15rem; line-height: 1.8">
          Villa Leppäranta tarjoaa täydelliset puitteet rentoutumiseen, perhelomailuun tai rauhalliseen etätyöskentelyyn. Nauti omasta
          rauhasta, puulämmitteisen saunan löylyistä ja puhtaasta järviluonnosta kaikkine mukavuuksineen.
        </p>
      </div>
    </div>
  </div>

</div>
`;

/* TÄHÄN PÄIVITETYT OMINAISUUDET*/ 

// 1. Luodaan muuttuja, joka sisältää kaikki toistuvat attribuutit
var klikattavaKuva = `cursor: pointer;" data-toggle="modal" data-target="#imageModal" onclick="document.getElementById('modalTargetImage').src=this.src; document.getElementById('modalTargetImage').alt=this.alt;"`;

var varusteluHTML = `
<div id="varustelu" class="container-fluid mb-4">
  <div class="text-center my-4">
    <div>
      <h2 class="font-weight-bold">Mökin varustelu ja mukavuudet</h2>
      <p class="text-secondary">Villa Leppäranta tarjoaa kattavat puitteet rentoutumiseen ja viihtymiseen Simpelejärvellä</p>
    </div>
  </div>

  <div class="row no-gutters mb-5 shadow-sm rounded overflow-hidden bg-white p-2">
  <div class="col-6 col-md-3 p-1">
  <img src="Assets/Julkisivu.jpg" alt="Mökki pihalta katsottuna" class="img-fluid w-100" style="height: 160px; object-fit: cover; ${klikattavaKuva}>
</div>
    <div class="col-6 col-md-3 p-1">
      <img src="Assets/Etusivu_klikattava_s.jpg" alt="Mökki ulkoa päin" class="img-fluid w-100" style="height: 160px; object-fit: cover; ${klikattavaKuva}>
    </div>
    <div class="col-6 col-md-3 p-1">
      <img src="Assets/Terassi.jpg" alt="Mökin terassi ja riippukeinu" class="img-fluid w-100" style="height: 160px; object-fit: cover; ${klikattavaKuva}>
    </div>
    <div class="col-6 col-md-3 p-1">
      <img src="Assets/Etupiha.jpg" alt="Näkymä järvelle kesällä" class="img-fluid w-100" style="height: 160px; object-fit: cover; ${klikattavaKuva}>
    </div>
    <div class="col-6 col-md-3 p-1">
      <img src="Assets/Keittio_m.jpg" alt="Keittiönurkkaus" class="img-fluid w-100" style="height: 160px; object-fit: cover; ${klikattavaKuva}>
    </div>
    <div class="col-6 col-md-3 p-1">
      <img src="Assets/Ruokailutila_s.jpg" alt="Ruokailutila" class="img-fluid w-100" style="height: 160px; object-fit: cover; ${klikattavaKuva}>
    </div>
    <div class="col-6 col-md-3 p-1">
      <img src="Assets/Ruokapoyta_s.jpg" alt="Ruokapöytä" class="img-fluid w-100" style="height: 160px; object-fit: cover; ${klikattavaKuva}>
    </div>
    <div class="col-6 col-md-3 p-1">
      <img src="Assets/WC_m.jpg" alt="Sisä WC" class="img-fluid w-100" style="height: 160px; object-fit: cover; ${klikattavaKuva}>
    </div>
    <div class="col-6 col-md-3 p-1">
      <img src="Assets/WC2.jpg" alt="Käsienpesupaikka" class="img-fluid w-100" style="height: 160px; object-fit: cover; ${klikattavaKuva}>
    </div>
    <div class="col-6 col-md-3 p-1">
      <img src="Assets/Pesutila_s.jpg" alt="Pesutilat" class="img-fluid w-100" style="height: 160px; object-fit: cover;${klikattavaKuva}>
    </div>
    <div class="col-6 col-md-3 p-1">
      <img src="Assets/Suihku_s.jpg" alt="Suihkutilat" class="img-fluid w-100" style="height: 160px; object-fit: cover; ${klikattavaKuva}>
    </div>
    <div class="col-6 col-md-3 p-1">
      <img src="Assets/Sauna_m.jpg" alt="Pieni tunnelmallinen sauna" class="img-fluid w-100" style="height: 160px; object-fit: cover; ${klikattavaKuva}>
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <ul class="list-unstyled pl-3">
        <li class="mb-2">🛋️ Kaksi tukevaa sänkyä & vuodesohva</li>
        <li class="mb-2">🍳 Hyvin varusteltu keittiö & jääkaappi-pakastin</li>
        <li class="mb-2">🧼 WC, suihku & pesukone</li>
        <li class="mb-2">🔥 Puulämmitteinen sauna</li>
        <li class="mb-2">📺 TV & langaton Wifi</li>
        <li class="mb-2">🧺 Runsaasti kaappitilaa</li>
        <li class="mb-2">💧 Hyvälaatuinen juomavesi omasta lähteestä</li>
      </ul>
    </div>

    <div class="col-md-6">
      <ul class="list-unstyled pl-3">
        <li class="mb-2">🎹 Sähköpiano ja nuotteja</li>
        <li class="mb-2">📚 Runsaasti luettavaa lepopäiviin</li>
        <li class="mb-2">🏖️ Oma uimaranta & avara piha</li>
        <li class="mb-2">🛶 Soutuvene vesillelähtöön</li>
        <li class="mb-2">🏡 Pihakeinu & rentouttava riippukeinu</li>
      </ul>
    </div>
  </div>
</div>
`;

var alueHTML = `
<div id="alue" class="container-fluid mb-4">
  <div class="text-center my-4">
    <h2 class="font-weight-bold">Alue ja aktiviteetit</h2>
    <p class="text-secondary">Villa Leppäranta sijaitsee luonnon keskellä, mutta silti lähellä palveluja ja Itä-Suomen kaupunkeja</p>
  </div>

  <div class="row justify-content-center mb-5">
    <div class="col-md-8">
      <h4 class="mb-3 font-weight-bold">Etäisyydet lähikaupunkeihin</h4>
      <table class="table table-striped table-hover border text-secondary">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Kaupunki</th>
            <th scope="col">Etäisyys</th>
            <th scope="col">Tutustu kohteeseen</>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Savonlinna</strong></td>
            <td>60 km</td>
            <td>
                <a href="https://visitsavonlinna.fi" target="_blank" rel="noopener" class="city-link"> 
                    <img src="Assets/logo-savonlinna.jpg" alt="Visit Savonlinna" class="city-thumb">
                </a>
            </td>
          </tr>
          <tr>
            <td><strong>Lappeenranta</strong></td>
            <td>95 km</td>
            <td>
                <a href="https://visitlappeenranta.fi" target="_blank" rel="noopener" class="city-link">
                    <img src="Assets/logo-lappeenranta.jpg" alt="Visit Lappeenranta" class="city-thumb">
                </a>
            </td>
          </tr>
          <tr>
            <td><strong>Joensuu</strong></td>
            <td>135 km</td>
            <td>
                <a href="https://visitjoensuu.fi" target="_blank" rel="noopener" class="city-link">
                    <img src="Assets/logo-joensuu.jpg" alt="Visit Joensuu" class="city-thumb">
                </a>
            </td>
          </tr>  
        </tbody>
      </table>
    </div>
  </div>

  <div class="row justify-content-center">
    <div class="col-md-8 text-center">
      <h4 class="mb-3 font-weight-bold">Sijainti kartalla</h4>
      <div class="embed-responsive w-100 embed-responsive-16by9 border rounded shadow-sm">
        <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1872.2478546193755!2d29.4975735!3d61.5544444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469a45610ec25277%3A0x67db1a1d3557876a!2sParikkala!5e0!3m2!1sfi!2sfi!4v1710000000000!5m2!1sfi!2sfi" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
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
  <div class="row justify-content-center">
    <div class="col-md-8">
      <hr class="my-4" />
    </div>
  </div>

  <div class="text-center my-4">
    <h2 class="font-weight-bold">Varaustilanne</h2>
    <p class="text-secondary">Villa Leppärannan tulevien kuukausien varaustilanne</p>
  </div>

  <div class="row justify-content-center">
    <div class="col-md-8">
      <h4 class="mb-3 font-weight-bold text-center">Kesä/ syksy 2026</h4>
      <ul class="list-group shadow-sm text-secondary">
        <li class="list-group-item d-flex justify-content-between align-items-center"><span><strong>Heinäkuu</strong></span><span class="badge badge-danger badge-pill p-2">Varattu</span></li>
        <li class="list-group-item d-flex justify-content-between align-items-center"><span><strong>Elokuu</strong></span><span class="badge badge-warning badge-pill p-2">Osittain vapaana</span></li>
        <li class="list-group-item d-flex justify-content-between align-items-center"><span><strong>Syyskuu</strong></span><span class="badge badge-success badge-pill p-2">Vapaa</span></li>      
      </ul>
    </div>
  </div>
</div>
`;

function LataaAloitusSisalto() {
  document.getElementById("kontentti").innerHTML =
    etusivuHTML + varusteluHTML + alueHTML + yhteydenottoHTML + kalenteriHTML;
}

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
    if (valikkoOliAuki) {
      setTimeout(function () {
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
    behavior: "smooth",
  });

/* UUSI OMINAISUUS */
// Kun varustelualueen kuvaa klikataan
// Käytetään "delegointia" eli kuunnellaan koko dokumenttia, jotta lennosta luodut kuvat tunnistetaan varmasti
// Kuunnellaan KAIKKIA kuvia, joissa on attribuutti data-target="#imageModal"
$(document).on('click', 'img[data-target="#imageModal"]', function(e) {
  // attr('src') ottaa polun juuri sellaisena kuin se on kirjoitettu HTML:ään
  var src = $(this).attr('src'); 
  var alt = $(this).attr('alt');
  
  // Päivitetään modaliin
  $('#modalTargetImage').attr('src', src);
  $('#modalTargetImage').attr('alt', alt);
});
}
