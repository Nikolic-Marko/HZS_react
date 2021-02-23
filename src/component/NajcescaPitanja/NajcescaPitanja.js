import React from 'react'
import './NajcescaPitanja.css'

const NajcescaPitanja = () => {
  return (
    <section id="najcesca-pitanja">
      <h1 className="najcesca-pitanja-naslov">NAJČEŠĆA PITANJA</h1>

      <div className="najcesca-pitanja-container">
        <div className="najcesca-pitanja-row">
          <div className="najcesce-pitanje" id="pitanje1">
            <a href="#pitanje1" className="pitanje-link">
              <div className="pitanje-tekst">Ko se može prijaviti?</div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </a>
            <div className="odgovor">
              <p>
              Pravo na učešće imaju isključivo učenici srednjih škola iz Republike Srbije. Prijavljivanje 
              nije individualno, već se zainteresovani prijavljuju kao tim od troje ili četvoro. Sama 
              prijava i učešće su besplatni, a forma za prijavu se može naći na sajtu pod nazivom ,,Prijava’’.
              </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje2">
            <a href="#pitanje2" className="pitanje-link">
              <div className="pitanje-tekst">
                Da li takmičari dobijaju neku pomoć u toku takmičenja?
              </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </a>
            <div className="odgovor">
              <p>
              Da, svaki od timova dobija po jednog mentora, koji će u toku trajanja
              hakatona sve vreme biti uz njih i usmeravati ih, davati im korisne 
              komentare i sugestije kako bi tim što bolje odgovorio na zadatak.
              </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje3">
            <a href="#pitanje3" className="pitanje-link">
              <div className="pitanje-tekst">
                Na osnovu čega se vrši selekcija timova?
              </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </a>
            <div className="odgovor">
              <p>
              Najpre se radi online test, od kojih samo najboljih 16 timova ostvaruju 
              pravo da pristustvuju radionicama. Na kraju radionicama se takmičarima 
              zadaje projektni zadatak. Prvih 8 timova sa najbolje urađenim zadatkom se 
              plasira na hakaton. Takođe se uzima u obzir anganžman tima i svakog člana ponaosob.
              </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje4">
            <a href="#pitanje4" className="pitanje-link">
              <div className="pitanje-tekst">
                Koje tehnologije su prihvatljive za korišćenje na hakatonu?
              </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </a>
            <div className="odgovor">
              <p>
              Takmičari će imati priliku da koriste tehnologije po svom izboru.
              Dozvoljeno je korišćenje interneta u svrhu učenja i traženja informacija
              koje su relevantne za takmičenje.
              </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje5">
            <a href="#pitanje5" className="pitanje-link">
              <div className="pitanje-tekst">
                Da li se mogu naći u finalu dva tima iz iste srednje škole?
              </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </a>
            <div className="odgovor">
              <p>
              Ne, u finale se može plasirati samo jedan tim iz određene srednje škole.
              </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje6">
            <a href="#pitanje6" className="pitanje-link">
              <div className="pitanje-tekst">
                Da li je potrebno da takmičari nose svoju opremu?
              </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </a>
            <div className="odgovor">
              <p>
              Nije neophodno da takmičari nose svoju opremu. Moguće je raditi na 
              računarima obezbeđenim od strane organizatora, ali nije dozvoljena 
              instalacija dodatnog softvera. Organizator je takođe u mogućnosti da
              obezbedi dodatne miševe, tastature i sl.
              </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje7">
            <a href="#pitanje7" className="pitanje-link">
              <div className="pitanje-tekst">Kako izgleda finale?</div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </a>
            <div className="odgovor">
              <p>
              Prilikom prezentovanja finalnih rešenja, takmičari imaju 10 minuta
               za prezentovanje svog rešenja stručnom žiriju, nakon čega žiri ima
              5 minuta za dodatna pitanja koja postavlja timu
              </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje8">
            <a href="#pitanje8" className="pitanje-link">
              <div className="pitanje-tekst">
                Da li je potrebno nositi hranu i piće?
              </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </a>
            <div className="odgovor">
              <p>
              Nije neophodno. Hrana i piće su obezbeđeni od strane organizatora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NajcescaPitanja
