import React from 'react'
import './NajcescaPitanja.css'

const NajcescaPitanja = () => {
  return (
    <section id="najcesca-pitanja">
      <h1 className="najcesca-pitanja-naslov">NAJČEŠĆA PITANJA</h1>

      <div className="najcesca-pitanja-container">
        <div className="najcesca-pitanja-row">
          <div className="najcesce-pitanje" id="pitanje1">
            <div className="pitanje-link">
              <div className="pitanje-tekst">Ko se može prijaviti?</div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </div>
            <div className="odgovor">
              <p>
                Takmičenje je namenjeno učenicima srednjih škola iz Republike Srbije. Na takmičenju učestvuju timovi od tri ili četiri člana, sastavljeni isključivo od učenika srednjih škola. Učešće je besplatno i možete se prijaviti preko forme koja se može pronaći na sajtu pod nazivom „Prijava”.
              </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje2">
            <div className="pitanje-link">
              <div className="pitanje-tekst">
                Da li tim mogu činiti takmičari iz različitih srednjih škola?
              </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </div>
            <div className="odgovor">
              <p>
                Da, tim može biti sastavljen od učenika iz različitih srednjih škola.
              </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje3">
            <div className="pitanje-link">
              <div className="pitanje-tekst">
                Na osnovu čega se vrši selekcija timova?
              </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </div>
            <div className="odgovor">
              <p>
                Najpre se radi online test, nakon čega najbolji timovi dobijaju pravo da pohađaju radionice. Na kraju radionica se takmičarima zadaje projektni zadatak. Prvih 8 do 10 timova sa najbolje urađenim zadatkom se plasira na hakaton. Takođe se uzima u obzir anganžman tima i svakog člana ponaosob.
              </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje4">
            <div className="pitanje-link">
              <div className="pitanje-tekst">
                Da li takmičari dobijaju pomoć u toku takmičenja?
              </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </div>
            <div className="odgovor">
              <p>
                Da, svaki tim dobija po jednog stručnog mentora koji će u toku trajanja takmičenja biti uz tim i usmeravati ih kroz davanje korisnih saveta i sugestija kako bi se što bolje odgovorilo na zadatu temu.
              </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje5">
            <div className="pitanje-link">
              <div className="pitanje-tekst">
                Koje tehnologije su prihvatljive za izradu rešenja?
              </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </div>
            <div className="odgovor">
              <p>
                Takmičari mogu koristiti tehnologije po svom izboru. Dozvoljeno je korišćenje mobilnih telefona i interneta za traženje relevantnih informacija za takmičenje.
              </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje6">
            <div className="pitanje-link">
              <div className="pitanje-tekst">
                Kako izgleda finale?
              </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </div>
            <div className="odgovor">
              <p>
                Prilikom prezentovanja finalnih rešenja, takmičari imaju 10 minuta za predstavljanje svoje ideje i rešenja stručnom žiriju, nakon čega žiri ima 5 minuta za dodatna pitanja koja postavlja timu.
              </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje7">
            <div className="pitanje-link">
              <div className="pitanje-tekst">Da li se u finalu mogu naći dva tima iz iste srednje škole? </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </div>
            <div className="odgovor">
              <p>
                Ne, u finale se može plasirati samo jedan tim iz određene srednje škole. Ukoliko je tim sastavljen od takmičara iz različitih srednjih škola, u finale se mogu plasirati dva tima koja imaju člana iz iste srednje škole.
              </p>
            </div>
          </div>

          <div className="najcesce-pitanje" id="pitanje8">
            <div className="pitanje-link">
              <div className="pitanje-tekst">
                Kako će izgledati online održavanje takmičenja?
              </div>
              <div className="krug-zatvoreno-pitanje"></div>
              <div className="krug-otvoreno-pitanje"></div>
            </div>
            <div className="odgovor">
              <p>
              Svi delovi projekta su u online formatu. Timovi će biti blagovremeno obavešteni o načinu za pristup platformi na kojoj će se projekat održati. Za detaljnije informacije o načinu održavanja projekta posetite deo sajta „Pravilnik”.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NajcescaPitanja
