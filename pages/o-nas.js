

export default function ONas() {
  return (
    <>
      <a id="kdo-jsme" />
      kdo jsme

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <a id="gruntujeme" />
      gruntujeme

      <br />
      <br />
      <a id="kontakt" />
      <h1 class="text-center">Kontakty</h1>

      <section>
        <div class="container">
          <div class="row justify-content-around">
            <div class="col-sm-5 col-md-3">
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

            <div class="col-sm-5 col-md-3">
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
                </tbody>
              </table>
            </div>

            <div class="m-5">
              <div class="col-sm-5 col-md-3">
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
        </div>
      </section>

      <form name="contact" method="POST" data-netlify="true">
        <div class="container">
          <h2 id="napisteNam" class="text-center m-4">
            Chcete nám nechat vzkaz?
          </h2>
          <div class="row">
            <div class="mb-3 text-start">
              <label for="FormControlTextarea1" class="form-label">Zadejte prosím své jméno:</label>
              <input
                name="jmeno"
                type="text"
                class="form-control"
                id="FormControlInput1"
              />

              <div class="mb-3 text-start">
                <label for="FormControlInput1" class="form-label"
                  >Zadejte svůj email:
                </label>
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  id="FormControlInput2"
                  placeholder="jmeno@email.cz"
                  required
                />
              </div>
              <div class="mb-3 text-start">
                <label for="FormControlTextarea1" class="form-label">Napište nám svou zprávu:</label>
                <textarea
                  name="zprava"
                  class="form-control mb-3"
                  id="FormControlTextarea1"
                  rows="3"
                ></textarea>
                <div class="offset-1 col-12 text-start">
                  <button class="btn btn-secondary" type="submit">
                    Odeslat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <input type="hidden" name="form-name" value="contact"></input>
      </form>

    </>
  )
}
