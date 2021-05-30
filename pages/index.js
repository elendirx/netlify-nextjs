// import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="images/bezuv-grunt-title-1.jpg"
              class="d-block w-100"
              alt="včelnice"
            />
            <div class="carousel-caption d-md-block">
              <h2 class="">
                Nabízíme
                <strong>ubytování na samotě v čisté přírodě.</strong>
                <br />Odpočiňte si u nás a načerpejte sílu.
              </h2>
              <h4>Pro jednotlivce, skupiny i rodiny s dětmi.</h4>
              <button type="button" class="btn btn-outline-warning">
                <a class="nav-link" href="mailto:28tbeza@gmail.com"
                  ><strong>REZERVOVAT</strong></a
                >
              </button>
              <button type="button" class="btn btn-light">
                <a class="nav-link" href="#coNabizime">CHCI VĚDĚT VÍC</a>
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="images/bezuv-grunt-title-2.jpg"
              class="d-block w-100"
              alt="chata Borůvka"
            />
          </div>
          <div class="carousel-item">
            <img
              src="images/bezuv-grunt-title-4.jpg"
              class="d-block w-100"
              alt="zvýšený záhon"
            />
            <div class="carousel-caption d-md-block">
              <h1 class="carousel__bylinar btn-warning">
                <div class="p-2">
                  Zahrajte si s námi poznávací hru o bylinkách.
                </div>
              </h1>
              {/* <style type="text/css">
                .carousel__bylinar {
                  background-color: #e9e93a;
                  text-align: center;
                  border-radius: 5px;
                }
              </style> */}
              <button type="button" class="btn btn-warning">
                <a class="nav-link" href="https://mariefardova.github.io/byliny/"
                  ><strong>HRÁT BYLINÁŘ</strong></a
                >
                {/* <style type="text/css">
                  .navlink {
                  color: #05171f;
                  }
                </style> */}
              </button>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <section>
        <div class="container">
          <h2 id="coNabizime" class="text-center m-4">Co nabízíme</h2>

          <div class="row text-center">
            <h3 id="ubytovani" class="text-center">Ubytování</h3>
            <div class="col-md-6 col-lg-7">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img src="" width="100" height="100" alt="Lorem" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <div class="p-2">
                    <h3>xxxxxxxxxxxxxxxxxxxx</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cum quae vel alias eum optio quasi iure provident
                      consequuntur nobis accusantium neque, qui perferendis quos
                      pariatur porro ratione quas nesciunt dicta?
                    </p>
                  </div>
                </div>
              </div>

              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img src="" width="100" height="100" alt="Lorem" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <div class="p-2">
                    <h3>xxxxxxxxxxxxxxxxxxxx</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum, repellendus velit saepe odit alias quo ad aperiam?
                      Eveniet quidem obcaecati ea doloribus, at cumque omnis,
                      fugiat, molestias possimus quasi architecto?
                    </p>
                  </div>
                </div>
              </div>

              <div class="d-flex align-items-center">
                <div class="">
                  <img src="images/.svg" width="100" height="100" alt="Lorem" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <div class="p-2">
                    <h3>xxxxxxxxxxxxxxxxxxxx</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nesciunt odit illum et ea magnam quia blanditiis eum
                      quibusdam officiis impedit quidem soluta, voluptatem officia
                      id iure ullam quos repellat aut.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <h2 id="cenik" class="text-center m-4">Ceník</h2>
        <div class="col">
          <table class="bg-white table table-bordered">
            <tbody>
              <tr>
                <td>Ubytování chata Borůvka (pro deset osob)</td>
                <td>
                  300&nbsp;Kč&nbsp;dítě, 600&nbsp;Kč&nbsp;dospělý&nbsp;/&nbsp;noc
                </td>
              </tr>
              <tr>
                <td>Ubytování chata Borůvka (CELÁ)</td>
                <td>5&nbsp;000&nbsp;Kč&nbsp;/&nbsp;noc</td>
              </tr>
              <tr>
                <td>Ubytování Včelnice (pro max. dvě osoby)</td>
                <td>200&nbsp;Kč&nbsp;/&nbsp;os.&nbsp;/&nbsp;noc</td>
              </tr>
              <tr>
                <td>Ubytování ve stanu (stan vlastní)</td>
                <td>50&nbsp;Kč&nbsp;/&nbsp;os.&nbsp;/&nbsp;noc</td>
                <td>50&nbsp;Kč&nbsp;/&nbsp;auto&nbsp;/&nbsp;noc</td>
              </tr>
              <tr>
                <td>
                  Objednání si tříchodové večeře z lokálních surovin s povídáním
                  <br />– po domluvě, dle náročnosti
                </td>
                <td>300&ndash;600&nbsp;Kč&nbsp;os.&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div class="container">
          <h2 id="personal" class="text-center m-4">Koho u nás potkáte</h2>

          <div class="row">
            <div class="col text-center">
              <img
                src="images/TomasBeza.jpg"
                class="img-fluid rounded-circle w-25"
                alt="Tomáš Béza"
              />
              <h3 class="text-center m-4">Tomáš Béza</h3>
              <p class="text-center">
                Jsem Tomáš Béza a stojím za celým projektem Bézova gruntu. Vidím
                smysl v hospodaření za účelem přiměřené, zejména potravinové,
                soběstačnosti a už pět let na tom aktivně a velmi fyzicky pracuji.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container bg-light">
          <h2 id="kalendar" class="text-center m-4">Kalendář akcí</h2>

          <div class="row">
            <div class="col text-center">
              <p class="text-center">
                Pořádáme akce jak pro ubytované, tak pro širší veřejnost. Najdete
                u nás i vybrané akce pořádané spřátelenými organizacemi. Pokud
                budete mít zájem o seminář se speciálním zaměřením, napište nám.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <h2 id="reference" class="text-center m-4">Řekli o nás</h2>
          <div class="row justify-content-center align-items-center">
            <div class="col-sm-12 col-md-5">
              <div class="m-2 p-3 border bg-light">
                Bézův grunt je smysluplný projekt, do kterého jsem se aktivně
                zapojil při budování chaty. Těším se, až tam pojedu i na
                dovolenou. Klid a příroda okolo jsou balzám na duši.<br />
                <em>&mdash; Marek Binar</em>
              </div>
            </div>

            <div class="col-md-5">
              <div class="m-2 p-3 border bg-light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Architecto dolor illum quos voluptates dolores accusantium
                voluptate sequi sunt accusamus obcaecati. At unde incidunt quod
                quisquam ipsa hic? Inventore, error voluptatibus.<br />
                <em>&mdash; Jana Vostrá</em>
              </div>
            </div>

            <div class="col-md-5">
              <div class="m-2 p-3 border bg-light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Architecto dolor illum quos voluptates dolores accusantium
                voluptate sequi sunt accusamus obcaecati. At unde incidunt quod
                quisquam ipsa hic? Inventore, error voluptatibus.<br />
                <em>&mdash; Jana Vostrá</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <h3 class="text-center m-4">Kontakty</h3>
          <div class="row justify-content-around">
            <div class="col-sm-6 col-md-4 m-4">
              <p>
                <strong
                  ><a href="mailto:28tbeza@gmail.com"
                    >Bézův grunt s. r. o.</a
                  ></strong
                >
              </p>
              <p>
                <strong>Telefonické objednávky:</strong>
                <br />
                +420 776 608 877
              </p>
            </div>

            <div class="text-center col-sm-6 col-md-4 m-4">
              <table>
                <tbody>
                  <tr>
                    <td><strong>Adresa:</strong></td>
                    <td>Úsobrno 92</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>679 39</td>
                  </tr>
                  <tr>
                    <td>IČO:</td>
                    <td>09784985</td>
                  </tr>
                  <tr>
                    <td>SCHRÁNKA:</td>
                    <td>3v6wrrq</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="col-sm-6 col-md-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d165773.5755387894!2d16.792225!3d49.518271!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d49.509431299999996!2d16.7705984!5e0!3m2!1sen!2scz!4v1620860353845!5m2!1sen!2scz"
                width="600"
                height="450"
                // style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <h3 class="text-center m-4">Chcete nám nechat vzkaz?</h3>
          <div class="row justify-content-around">
            <div class="col-sm-6 col-md-4">
              <form action="" method="get" class="form-zprava">
                <div class="form-zprava">
                  <label for="name">Zadejte své jméno: </label>
                  <input type="text" name="name" id="name" required />
                </div>
                <div class="form-zprava">
                  <label for="email">Zadejte svůj email:</label>
                  <input type="email" name="email" id="email" required />
                </div>
                <div class="form-zprava">
                  <label for="text">Napište nám svou zprávu: </label>
                  <input type="text" id="zprava" required />
                </div>
                <div class="form-zprava">
                  <input type="submit" value="Odeslat" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
