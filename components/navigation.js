import Link from 'next/link';

export function Navigation() {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        <Link href="/">
          <a class="navbar-brand">
            <img
              class="d-inline-block align-top logo__BG"
              src="images/Bezuv Grunt logo-small.png"
              width="100"
              height="50"
              alt="logo Bézova gruntu"
            />
          </a>
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item align-middle dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ubytování
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">– chata Borůvka</a>
                </li>

                <li>
                  <a class="dropdown-item" href="#">– včelnice</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#ubytovani">– stany</a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Ceník</a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Často kladené otázky</a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Tipy na výlet</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link href="/fotogalerie">
                <a class="nav-link">Fotogalerie</a>
              </Link>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                O nás
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link href="/o-nas#kdo-jsme">
                    <a class="dropdown-item">Kdo jsme</a>
                  </Link>
                </li>
                <li>
                  <Link href="/o-nas#gruntujeme">
                    <a class="dropdown-item">"Gruntujeme" – série videí o budování našeho gruntu</a>
                  </Link>
                </li>
                <li>
                  <Link href="/o-nas#kontakt">
                    <a class="dropdown-item">Kontakt</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Další nabídka
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#"
                    >Příprava jídla z lokálních bio surovin</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#">Naše výrobky</a>
                </li>

                <li>
                  <a class="dropdown-item" href="#">Brigáda</a>
                </li>
              </ul>
            </li>
            <a
              class="nav-link btn btn-warning ms-5"
              role="button"
              href="https://mariefardova.github.io/byliny/"
              ><strong>HRÁT Bylinář</strong></a
            >
          </ul>
        </div>
      </div>
    </nav>






  );
}