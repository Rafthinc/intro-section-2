import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay },
  }),
};

export default function ThoughtsIntroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* glowing background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-5xl px-4 py-8 space-y-16 md:space-y-20">
        {/* HERO */}
        <section className="space-y-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1 text-[11px] text-slate-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Aplicația 2 · Gânduri & emoții · CBT & REBT
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.05}
            className="text-2xl md:text-3xl font-semibold tracking-tight"
          >
            Gânduri raționale vs. gânduri iraționale
            <span className="block bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">
              cum învață mintea ta să exagereze și cum poți corecta asta
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.1}
            className="max-w-3xl text-sm md:text-base text-slate-300"
          >
            În CBT și REBT nu plecăm de la ideea că oamenii sunt „defecți”, ci
            că modul în care gândim poate fi uneori realist și flexibil sau
            rigid, exagerat și catastrofic. Scopul acestei pagini este să te
            ajute să recunoști când gândurile tale sunt exagerate sau false și
            să înveți să le pui sub semnul întrebării, în loc să le iei drept
            adevăr absolut.
          </motion.p>
        </section>

        {/* DECALOG – RAȚIONAL vs IRAȚIONAL */}
        <section className="grid gap-8 md:grid-cols-2 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            custom={0}
            className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/90 p-4 shadow-xl shadow-slate-950/70"
          >
            <h2 className="text-lg md:text-xl font-semibold text-emerald-300">
              Decalogul raționalității
            </h2>
            <p className="text-xs md:text-sm text-slate-300">
              Așa gândește o minte care te ajută să ai emoții sănătoase și
              comportamente adaptative:
            </p>
            <ul className="space-y-1 text-xs md:text-sm text-slate-200 list-decimal pl-4">
              <li>
                Ar fi preferabil să reușesc, dar dacă nu reușesc nu înseamnă că
                „nu am valoare”, ci că pot învăța și îmbunătăți.
              </li>
              <li>
                E rău, dar nu este un dezastru absolut. Există și alte resurse,
                oameni și oportunități.
              </li>
              <li>
                Pot suporta situații neplăcute. Nu îmi plac, dar le pot tolera
                și pot merge mai departe.
              </li>
              <li>
                Oamenii au dreptul să fie imperfecți. Comportamentele pot fi
                criticate, nu persoana în ansamblu.
              </li>
              <li>
                Viața nu este întotdeauna dreaptă, dar poate fi trăită cu sens
                și când nu e „cum mi-aș dori”.
              </li>
              <li>
                Valoarea mea nu se măsoară doar în reușite, bani sau note.
              </li>
              <li>
                Gândirea flexibilă, non-catastrofică duce la emoții suportabile
                (tristețe, îngrijorare, frustrare) în loc de disperare sau
                panică.
              </li>
              <li>
                Mă accept necondiționat ca persoană, dar lucrez activ la
                comportamentele mele.
              </li>
              <li>
                Îmi formulez dorințele ca preferințe, nu ca imperative: „Mi-ar
                plăcea foarte mult…”, nu „Trebuie neapărat…”.
              </li>
              <li>
                Singurul lucru care „trebuie” cu necesitate este că nimic nu
                trebuie. Restul sunt dorințe și valori importante, nu legi ale
                universului.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInRight}
            custom={0.1}
            className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/90 p-4 shadow-xl shadow-slate-950/70"
          >
            <h2 className="text-lg md:text-xl font-semibold text-rose-300">
              „Decalogul” iraționalității
            </h2>
            <p className="text-xs md:text-sm text-slate-300">
              Așa arată gândurile care îți amplifică suferința și problemele:
            </p>
            <ul className="space-y-1 text-xs md:text-sm text-slate-200 list-decimal pl-4">
              <li>Dacă nu reușesc perfect, sunt un ratat.</li>
              <li>
                Dacă se întâmplă ceva rău, este un dezastru total, de
                nesuportat.
              </li>
              <li>
                Orice disconfort trebuie evitat imediat; nu pot suporta nimic
                neplăcut.
              </li>
              <li>
                Oamenii trebuie să se poarte mereu corect cu mine; dacă nu, sunt
                „nenorociți”.
              </li>
              <li>Viața trebuie să fie dreaptă; dacă nu e, nu are sens.</li>
              <li>
                Valoarea mea depinde de rezultate, de părerea celorlalți sau de
                câți bani am.
              </li>
              <li>
                Emoțiile mele extreme dovedesc că gândul e 100% adevărat: „dacă
                simt așa, sigur e real”.
              </li>
              <li>
                Dacă nu fac ceva perfect, nu merită să fac deloc. „Ori iese
                impecabil, ori e degeaba.”
              </li>
              <li>
                Când greșesc, merit să fiu criticat și pedepsit, nu să învăț din
                greșeală.
              </li>
              <li>
                Lucrurile sunt ori bune, ori rele; nu există nuanțe, doar alb și
                negru.
              </li>
            </ul>
            <p className="text-[11px] text-slate-400 mt-2">
              Scopul acestui modul este să te ajute să recunoști când gândești
              mai aproape de acest decalog și să îți antrenezi mintea spre
              varianta rațională.
            </p>
          </motion.div>
        </section>

        {/* ====================== EROAREA 1 — GÂNDIREA „TOTUL SAU NIMIC” ====================== */}

        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-950/90 p-6 md:p-8 shadow-xl shadow-slate-950/70 space-y-6">
          {/* CONȚINUTUL TĂU ORIGINAL — NEMODIFICAT */}
          {/* EROAREA 1 – ALL OR NOTHING */}
          <section className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              custom={0}
              className="space-y-3"
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-emerald-400/10 text-emerald-300">
                Eroarea 1 · Gândirea „totul sau nimic”
              </div>
              <p className="text-sm text-slate-300">
                Gândirea „totul sau nimic” (all-or-nothing, alb-negru,
                dihotomică) înseamnă să vezi lumea în doar două categorii:
                perfect sau eșec total, bun sau rău, 100% reușită sau 0. Între
                ele nu mai există „a fost în mare parte bine”, „a fost ok, dar
                perfectibil”. Categoria „bun” devine foarte mică și greu de
                atins, iar categoria „eșec” devine uriașă și foarte ușor de
                activat.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] items-start">
              {/* text explicativ + exemple */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                custom={0.05}
                className="space-y-5 text-sm text-slate-300"
              >
                {/* Exemple din viața reală */}
                <div className="space-y-2">
                  <h3 className="text-sm md:text-base font-semibold text-emerald-300">
                    Cum arată în viața de zi cu zi?
                  </h3>
                  <ul className="space-y-2 list-disc pl-4">
                    <li>
                      <span className="font-semibold">
                        Alimentație / dietă:
                      </span>{" "}
                      mănânci un singur donut și gândul automat este „Am stricat
                      tot, dieta e compromisă, nu mai are rost”. Rezultatul:
                      mănânci toată cutia.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Performanță / școală:
                      </span>{" "}
                      iei un B în loc de A și concluzia devine „Dacă nu sunt cel
                      mai bun, sunt un eșec”.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Imagine de sine / atractivitate:
                      </span>{" "}
                      nu arăți ca un model de pe copertă și mintea spune „Dacă
                      nu sunt extraordinar de frumos/frumoasă, sunt urât(ă)”.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Vorbit în public / social:
                      </span>{" "}
                      te încurci o dată într-o prezentare și gândul este „A fost
                      un dezastru, toate prezentările mele vor fi un eșec”.
                    </li>
                    <li>
                      <span className="font-semibold">Relații de cuplu:</span>{" "}
                      „Ori accepți tot ce vreau eu, ori relația e distrusă.” Nu
                      mai vezi varianta „putem discuta, putem negocia, putem
                      ajusta”.
                    </li>
                  </ul>
                </div>

                {/* De ce e periculoasă */}
                <div className="space-y-2">
                  <h3 className="text-sm md:text-base font-semibold text-rose-300">
                    De ce este periculoasă această eroare?
                  </h3>
                  <ul className="space-y-1 list-disc pl-4">
                    <li>
                      alimentează perfecționismul: „dacă nu e perfect, nu e bun
                      de nimic”;
                    </li>
                    <li>
                      crește riscul de depresie: orice greșeală devine un
                      „dovadă că sunt ratat”;
                    </li>
                    <li>
                      intensifică anxietatea: standardele sunt imposibile, iar
                      frica de eșec devine uriașă;
                    </li>
                    <li>
                      sabotează învățarea: renunți la proiecte înainte să le dai
                      șansa să se îmbunătățească;
                    </li>
                    <li>
                      blochează compromisurile: nu mai există „mijloc” sau
                      soluții intermediare.
                    </li>
                  </ul>
                </div>

                {/* Cum o corectezi */}
                <div className="space-y-2">
                  <h3 className="text-sm md:text-base font-semibold text-cyan-300">
                    Cum poți începe să o corectezi
                  </h3>
                  <ul className="space-y-1 list-disc pl-4">
                    <li>
                      Gândește „ca un termometru”, nu ca un comutator.
                      Întreabă-te:
                      <br />
                      <span className="text-slate-200">
                        „Cât la sută eșec este ce s-a întâmplat?” „Cât la sută
                        reușită?”
                      </span>
                    </li>
                    <li>
                      Înlocuiește „ori… ori…” cu „și… și…”. Poți fi și un
                      părinte bine intenționat, și un părinte care mai greșește.
                    </li>
                    <li>
                      Fii atent la cuvintele de alarmă: „mereu”, „niciodată”,
                      „total”, „complet”, „nimic bun”. Reformulează în „uneori”,
                      „de multe ori”, „în mare parte”.
                    </li>
                    <li>
                      Pune-ți întrebări de auto-corecție:
                      <ul className="list-disc pl-4 mt-1 text-xs">
                        <li>Există dovezi că este 100% eșec?</li>
                        <li>Ce ar vedea un observator neutru?</li>
                        <li>
                          I-aș spune unui prieten că „nu e bun de nimic” pentru
                          aceeași greșeală?
                        </li>
                        <li>Ce alternative există între extremele mele?</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </section>
        </section>

        {/* ====================== EROAREA 2 — CATASTROFIZAREA ====================== */}

        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-950/90 p-6 md:p-8 shadow-xl shadow-slate-950/70 space-y-6">
          {/* Badge + titlu */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-emerald-400/10 text-emerald-300">
            Eroarea 2 · Catastrofizarea
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Catastrofizarea – când mintea transformă un eveniment mic într-un
            dezastru
          </h2>

          {/* Intro */}
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Catastrofizarea este o eroare de gândire în care anticipezi automat
            cele mai grave scenarii posibile, chiar dacă nu ai dovezi că se vor
            întâmpla. Mintea ta ia un eveniment mic și îl transformă într-un
            lanț de „dezastre”, fiecare mai grav decât cel anterior. Emoțiile
            care apar sunt intense: anxietate, panică, rușine, descurajare sau
            neputință.
          </p>

          {/* Cum arată */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-50">
              Cum arată catastrofizarea în viața de zi cu zi?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              De obicei, catastrofizarea combină două alte erori: ghicirea
              viitorului și exagerarea consecințelor. În loc să îți spui „e
              neplăcut, dar o să văd ce pot face”, mintea sare direct la „va fi
              un dezastru, nu o să fac față”.
            </p>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                <span className="font-semibold">Viața socială:</span> cineva te
                refuză la o întâlnire, iar gândul devine „Dacă m-a refuzat,
                înseamnă că nimeni nu o să mă placă vreodată, o să rămân singur
                toată viața”.
              </li>
              <li>
                <span className="font-semibold">Familie:</span> copilul întârzie
                10 minute, iar mintea sare direct la „Sigur a pățit ceva grav, a
                avut accident, nu o să-l mai văd niciodată”.
              </li>
              <li>
                <span className="font-semibold">Cuplu:</span> partenerul refuză
                o ieșire și imediat apare „Nu mai vrea să fie cu mine, o să ne
                despărțim, nu o să mai găsesc pe nimeni”.
              </li>
              <li>
                <span className="font-semibold">Job / școală:</span> faci o
                greșeală la serviciu sau la un examen, iar lanțul devine „O să
                fiu dat afară, nu o să mai găsesc job, o să ajung pe stradă”.
              </li>
            </ul>
          </div>

          {/* De ce e periculoasa */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-rose-300">
              De ce este atât de periculoasă catastrofizarea?
            </h3>
            <ul className="list-disc pl-4 space-y-1 text-sm text-slate-300">
              <li>Crește anxietatea până la nivel de panică.</li>
              <li>
                Te face să vezi situații gestionabile ca fiind „fără ieșire”.
              </li>
              <li>
                Blochează gândirea rațională și luarea deciziilor calme, pe
                pași.
              </li>
              <li>
                Duce la evitare: nu mai încerci, nu mai aplici, nu mai vorbești,
                nu mai ieși din casă.
              </li>
              <li>
                Întărește credința „nu fac față vieții” și poate întreține
                depresia.
              </li>
            </ul>
          </div>

          {/* Solutii */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-cyan-300">
              Cum poți corecta catastrofizarea (tehnici CBT/REBT)
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                <span className="font-semibold">
                  Scrie lanțul complet de gânduri.
                </span>{" "}
                De la evenimentul inițial până la „dezastrul final”. Doar faptul
                că îl vezi pe hârtie îl face să pară mai puțin credibil.
              </li>
              <li>
                <span className="font-semibold">Întreabă-te ce dovezi ai.</span>{" "}
                Ce dovezi ai că se va întâmpla chiar scenariul cel mai rău? Ce
                dovezi ai că nu se va întâmpla?
              </li>
              <li>
                <span className="font-semibold">
                  Calculează probabilitatea.
                </span>{" "}
                Este realist să spui că are 90–100% șanse să se întâmple? Sau
                mai degrabă 5– 10%? Ce ar spune un observator neutru?
              </li>
              <li>
                <span className="font-semibold">
                  Întreabă-te ce ai putea face dacă, totuși, s-ar întâmpla.
                </span>{" "}
                Oamenii sunt mult mai rezilienți decât cred. Ce pași concreți ai
                putea urma? Cu cine ai putea cere ajutor?
              </li>
              <li>
                <span className="font-semibold">Revino la prezent.</span>{" "}
                Întreabă-te: „Ce pot face azi, în următoarea oră, în loc să mă
                uit la scenariul horror din mintea mea?”
              </li>
              <li>
                <span className="font-semibold">
                  Folosește formulări mai echilibrate.
                </span>{" "}
                De exemplu: „Este posibil să fie greu, dar nu este un dezastru”,
                „Prefer să nu se întâmple, dar pot trece prin asta dacă va fi
                nevoie”.
              </li>
            </ul>
          </div>
        </section>

        {/* ====================== EROAREA 3 — DESCALIFICAREA POZITIVULUI ====================== */}

        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-950/90 p-6 md:p-8 shadow-xl shadow-slate-950/70 space-y-6">
          {/* Badge + titlu */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-emerald-400/10 text-emerald-300">
            Eroarea 3 · Descalificarea (discountarea) pozitivului
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-white">
            „Nu contează” – când mintea ta anulează complimentele, reușitele și
            lucrurile bune
          </h2>

          {/* Intro – definiție */}
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Descalificarea pozitivului este o eroare de gândire în care respingi
            sau minimizezi automat experiențele, calitățile și reușitele
            pozitive. Atunci când se întâmplă ceva bun, mintea spune imediat:
            „Nu contează”, „A fost doar noroc”, „Au fost doar drăguți”, „Dacă ar
            ști cum sunt eu de fapt, nu ar mai spune asta”.
            <br />
            <br />
            În loc ca lucrurile bune să devină dovezi împotriva credințelor
            negative despre tine, le „arunci la gunoi” și păstrezi doar ce
            confirmă ideea „sunt slab”, „sunt fără valoare”, „nimeni nu ține la
            mine”.
          </p>

          {/* Cum arată */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-50">
              Cum arată descalificarea pozitivului în viața de zi cu zi?
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                <span className="font-semibold">Complimente:</span> cineva îți
                spune „Ți-a ieșit foarte bine prezentarea”, iar gândul automat
                este „Doar încearcă să fie politicos, de fapt nu a fost mare
                lucru”.
              </li>
              <li>
                <span className="font-semibold">Reușite la muncă:</span>{" "}
                primești un feedback bun sau o promovare, dar îți spui „Au fost
                prea puțini candidați”, „A fost noroc”, „Oricine putea să facă
                asta”.
              </li>
              <li>
                <span className="font-semibold">Relații și afecțiune:</span>{" "}
                oamenii îți arată că țin la tine, dar mintea comentează „Dacă
                m-ar cunoaște cu adevărat, nu ar mai sta lângă mine”, „Le este
                doar milă de mine”.
              </li>
              <li>
                <span className="font-semibold">
                  Performanță academică / proiecte:
                </span>{" "}
                cineva îți laudă un proiect sau un eseu, iar tu gândești „Nu e
                chiar așa de bun, au exagerat”, „Sigur ceilalți au fost mai
                slabi, de-asta par eu bun”.
              </li>
              <li>
                <span className="font-semibold">Zi bună / stare bună:</span> ai
                o zi în care te simți mai bine și spui „E doar o întâmplare, o
                să revin la starea mea normală, proastă”.
              </li>
            </ul>
          </div>

          {/* Exemple mai profunde */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-emerald-300">
              Exemple tipice de descalificare a pozitivului
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                O persoană cu depresie spune: „Nimeni nu ține la mine”. Când îi
                sunt amintite persoane care o sună, o vizitează sau îi sunt
                alături, răspunsul este: „Nu contează, dacă m-ar vedea cum sunt
                eu cu adevărat, ar pleca”.
              </li>
              <li>
                O persoană cu anxietate socială îndrăznește să invite pe cineva
                la o întâlnire, iar seara decurge foarte bine. În loc să vadă
                curajul și calitățile sale sociale, concluzionează: „A fost
                plăcut doar pentru că el/ea e foarte drăguț(ă). Eu nu am avut
                niciun merit”.
              </li>
              <li>
                Un student primește comentarii pozitive și constructive la un
                eseu, dar alege să creadă doar critica, spunând: „Ceilalți au
                fost amabili, nu trebuie luați în serios, dar observațiile
                negative arată cât de slab sunt de fapt”.
              </li>
            </ul>
          </div>

          {/* De ce este periculoasă */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-rose-300">
              De ce este atât de nocivă descalificarea pozitivului?
            </h3>
            <ul className="list-disc pl-4 space-y-1 text-sm text-slate-300">
              <li>
                Îți menține credințele negative despre tine („sunt fără
                valoare”) chiar și atunci când realitatea îți arată contrariul.
              </li>
              <li>
                Îți fură bucuria din momentele pozitive – în loc să te simți
                mulțumit, rămâi cu senzația că „nu e mare lucru” sau că „nu
                meriți”.
              </li>
              <li>
                Te împinge să vezi viața ca fiind permanent „gri” sau „neagră”,
                chiar dacă există foarte multe nuanțe de bine în jurul tău.
              </li>
              <li>
                Poate întreține depresia și rușinea, pentru că orice dovadă
                pozitivă este anulată înainte să ajungă să conteze emoțional.
              </li>
              <li>
                Împiedică progresul în terapie: dacă fiecare pas bun este
                anulat, rămâne impresia că „nu se schimbă nimic”.
              </li>
            </ul>
          </div>

          {/* Soluții */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-cyan-300">
              Cum poți corecta descalificarea pozitivului
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                <span className="font-semibold">
                  Observă replica automată „nu contează”.
                </span>{" "}
                Noteaz-o în jurnal: când primești un compliment sau apare ceva
                bun, ce frază folosește mintea ca să-l anuleze?
              </li>
              <li>
                <span className="font-semibold">
                  Exersează un răspuns diferit la compliment.
                </span>{" "}
                În loc de „lasă, nu e mare lucru”, încearcă pur și simplu:
                „Mulțumesc”. Chiar dacă la început ți se pare forțat, este un
                exercițiu de a lăsa pozitivul să existe.
              </li>
              <li>
                <span className="font-semibold">
                  Scrie „dovezile pro și contra”.
                </span>{" "}
                Ia o credință negativă („Nu sunt un prieten bun”) și scrie sub
                ea: „Ce dovezi am că este adevărat?” și „Ce dovezi am că nu este
                chiar așa?”. Include fapte concrete: mesaje, ajutor oferit
                altora, momente de apropiere.
              </li>
              <li>
                <span className="font-semibold">
                  Dă-ți voie să conteze puțin.
                </span>{" "}
                Nu trebuie să treci de la „nu contează deloc” la „este
                extraordinar”. Poți începe cu: „Poate că este un lucru mic, dar
                totuși spune ceva bun despre mine”.
              </li>
              <li>
                <span className="font-semibold">
                  Gândește-te cum ai răspunde dacă ar fi vorba de un prieten.
                </span>{" "}
                Dacă un prieten ar avea aceeași reușită sau ar primi același
                compliment, i-ai spune și lui „nu contează, a fost doar noroc”?
                Sau i-ai recunoaște meritul?
              </li>
              <li>
                <span className="font-semibold">
                  Construiește un „jurnal al lucrurilor bune”.
                </span>{" "}
                În fiecare zi notează 1–3 lucruri pozitive (oricât de mici) și
                nu ai voie să le explici prin „noroc”, „milă” sau „nu contează”.
                Doar le lași să existe în pagină.
              </li>
            </ul>
          </div>
        </section>

        {/* ====================== EROAREA 4 — RAȚIONAMENTUL EMOȚIONAL ====================== */}

        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-950/90 p-6 md:p-8 shadow-xl shadow-slate-950/70 space-y-6">
          {/* Badge + titlu */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-violet-400/10 text-violet-300">
            Eroarea 4 · Raționamentul emoțional
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-white">
            „Simt că e adevărat…” – când îți iei emoțiile drept dovezi absolute
            ale realității
          </h2>

          {/* Intro – definiție */}
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Raționamentul emoțional este eroarea de gândire prin care tratezi
            emoțiile tale ca și cum ar fi dovezi că un gând este adevărat.
            Logica sună așa: „Mă simt un ratat, deci{" "}
            <span className="italic">sunt</span> un ratat”, „Mă simt vinovat,
            deci sigur am făcut ceva rău”, „Mă simt anxios, deci ceva groaznic
            urmează să se întâmple”.
            <br />
            <br />
            În loc să vezi emoția ca un semnal al felului în care{" "}
            <span className="italic">gândești</span> despre o situație, o
            transformi în „dovadă” că lumea chiar este periculoasă, că tu chiar
            ești „defect” sau că ceilalți chiar te judecă dur. Emoția devine
            criteriul de adevăr, iar gândurile alternative sunt ignorate sau
            descalificate.
          </p>

          {/* Cum arată în viața de zi cu zi */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-50">
              Cum arată raționamentul emoțional în viața de zi cu zi?
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                <span className="font-semibold">Anxietate:</span> „Mă simt
                foarte anxios când vorbesc cu oamenii, deci sigur par penibil și
                toți își dau seama cât sunt de stingher.”
              </li>
              <li>
                <span className="font-semibold">Vinovăție:</span> „Mă simt
                vinovat, deci trebuie să fi greșit cu ceva. Altfel nu m-aș simți
                așa.”
              </li>
              <li>
                <span className="font-semibold">Rușine / Inadecvare:</span> „Mă
                simt prost și inferior, deci înseamnă că chiar sunt mai slab
                decât ceilalți.”
              </li>
              <li>
                <span className="font-semibold">Furie:</span> „Sunt foarte
                furios, asta dovedește că tu ești nedrept și greșești complet în
                situația asta.”
              </li>
              <li>
                <span className="font-semibold">Disperare:</span> „Mă simt fără
                speranță, deci situația mea chiar este fără ieșire. Dacă ar
                exista o soluție, nu m-aș simți atât de rău.”
              </li>
              <li>
                <span className="font-semibold">Procrastinare:</span> „Simt o
                greutate imensă când mă gândesc să mă apuc de proiect, deci
                sigur va fi imposibil sau prea greu pentru mine – mai bine
                amân.”
              </li>
            </ul>
          </div>

          {/* Exemple mai profunde */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-violet-300">
              Exemple tipice de raționament emoțional
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                O persoană cu anxietate socială simte un val de teamă înainte de
                a vorbi în public și concluzionează: „Sunt atât de speriat, deci
                clar voi vorbi groaznic și se va vedea cât sunt de slab.” De
                fapt, teama este legată de gânduri catastrofice, nu este un
                indicator obiectiv al performanței.
              </li>
              <li>
                O persoană cu depresie se trezește dimineața cu o tristețe
                puternică și gândește: „Mă simt gol și epuizat, asta înseamnă că
                nu are rost să încerc nimic azi, oricum sunt un caz pierdut.”
              </li>
              <li>
                Cineva care se simte foarte vinovat după un conflict cu un
                prieten își spune: „Faptul că mă simt atât de vinovat dovedește
                că eu sunt problema, sigur sunt o persoană rea”, fără să
                analizeze faptele concrete din ambele părți.
              </li>
              <li>
                Un student bine pregătit pentru examen simte panică înainte de
                test și concluzionează: „Dacă îmi e atât de frică, sigur nu știu
                materia, mai bine nici nu merg la examen”, deși, când este
                întrebat, poate răspunde corect la majoritatea întrebărilor.
              </li>
            </ul>
          </div>

          {/* De ce este periculos */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-rose-300">
              De ce este atât de nociv raționamentul emoțional?
            </h3>
            <ul className="list-disc pl-4 space-y-1 text-sm text-slate-300">
              <li>
                Îți confundă{" "}
                <span className="font-semibold">starea emoțională</span> cu{" "}
                <span className="font-semibold">realitatea externă</span>: dacă
                te simți rău, „dovedește” că situația este rea, chiar și când
                faptele nu susțin asta.
              </li>
              <li>
                Îți amplifică celelalte distorsiuni cognitive – în loc să
                corectezi gândul automat negativ, îl „cimentezi” bazându-te pe
                emoție.
              </li>
              <li>
                Întreține depresia și anxietatea: cu cât te simți mai prost, cu
                atât găsești mai multe „dovezi” emoționale că nu ai valoare, că
                ești în pericol sau că nu există soluții.
              </li>
              <li>
                Te face să ignori informațiile care contrazic emoția (feedback
                pozitiv, rezultate bune, perspective alternative) și să cauți
                doar ceea ce confirmă cum te simți.
              </li>
              <li>
                Îți poate distorsiona comportamentul: eviți sarcini, relații sau
                oportunități doar pentru că te simți anxios sau nesigur, nu
                pentru că ele ar fi cu adevărat periculoase sau imposibile.
              </li>
            </ul>
          </div>

          {/* Soluții */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-cyan-300">
              Cum poți corecta raționamentul emoțional
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                <span className="font-semibold">
                  Observă propozițiile de tip „mă simt… deci înseamnă că…”.
                </span>{" "}
                Notează-ți în jurnal momentele în care faci trecerea directă de
                la emoție la „adevăr” („Mă simt… deci sigur…”).
              </li>
              <li>
                <span className="font-semibold">
                  Întreabă-te: „Ce dovezi obiective am?”.
                </span>{" "}
                Dacă ai fi un observator neutru, ce ai vedea în mod concret? Ce
                fapte susțin gândul tău și ce fapte îl contrazic?
              </li>
              <li>
                <span className="font-semibold">
                  Separă emoțiile de gânduri în cuvinte.
                </span>{" "}
                În loc de „Mă simt prost, deci sunt prost”, reformulează: „Mă
                simt trist și nesigur pentru că am gândul că sunt prost – nu
                pentru că acest gând este neapărat adevărat.”
              </li>
              <li>
                <span className="font-semibold">
                  Imaginează-ți cum ai vedea situația într-o stare emoțională
                  mai calmă.
                </span>{" "}
                Întreabă-te: „Dacă aș fi mai liniștit acum, cum aș interpreta
                lucrurile? Ce alte explicații ar exista?”
              </li>
              <li>
                <span className="font-semibold">
                  Amintește-ți că „sentimentele nu sunt fapte”.
                </span>{" "}
                Emoțiile sunt reale și importante, dar ele reflectă modul în
                care <span className="italic">interpretezi</span> o situație, nu
                sunt o fotografie obiectivă a realității.
              </li>
              <li>
                <span className="font-semibold">
                  Exersează să acționezi după valori, nu după starea de moment.
                </span>{" "}
                Chiar dacă te simți anxios sau nesigur, poți alege să mergi la
                examen, la întâlnire sau la prezentare, lăsând emoția să fie
                prezentă, dar fără să o transformi în „dovadă” că vei eșua.
              </li>
            </ul>
          </div>
        </section>

        {/* ====================== EROAREA 5 — SĂRITUL LA CONCLUZII ====================== */}

        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-950/90 p-6 md:p-8 shadow-xl shadow-slate-950/70 space-y-6">
          {/* Badge + titlu */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-amber-400/10 text-amber-300">
            Eroarea 5 · Săritul la concluzii (citirea gândurilor & prezicerea
            viitorului)
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-white">
            „Sunt sigur că știu ce gândește / ce se va întâmpla” – când mintea
            decide fără dovezi
          </h2>

          {/* Intro – definiție */}
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Săritul la concluzii este o eroare de gândire în care tragi rapid o
            concluzie negativă, fără dovezi reale sau pe baza unor informații
            foarte puține. Mintea „completează filmul” după scenariul cel mai
            negru și îl tratează ca pe un fapt.
            <br />
            <br />
            Are două forme foarte frecvente:
            <br />
            <span className="font-semibold">
              1. Citirea gândurilor (mind reading):
            </span>{" "}
            crezi că știi ce gândesc ceilalți despre tine, de obicei ceva
            negativ, fără să verifici.
            <br />
            <span className="font-semibold">
              2. Prezicerea viitorului (fortune telling):
            </span>{" "}
            ești convins că ceva va ieși rău („o să fie un dezastru”), ca și cum
            ai avea un glob de cristal, și te porți de parcă ai ști deja
            rezultatul.
          </p>

          {/* Cum arată în viața de zi cu zi – general */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-50">
              Cum arată „săritul la concluzii” în viața de zi cu zi?
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                Tragi concluzii despre ce cred alții, doar dintr-un gest, o
                privire sau un detaliu izolat.
              </li>
              <li>
                Ești convins că viitorul va fi negativ („sigur o să mă fac de
                râs”) și nici nu mai încerci să vezi ce se întâmplă în
                realitate.
              </li>
              <li>
                Reacționezi la scenariul din mintea ta (te retragi, ataci,
                eviți), nu la faptele obiective.
              </li>
              <li>
                Când apar informații care ar contrazice concluzia ta, le ignori
                sau le explici în așa fel încât să rămâi la aceeași viziune
                negativă.
              </li>
            </ul>
          </div>

          {/* Subsecțiune – Mind reading */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-amber-300">
              1. Citirea gândurilor – „Știu eu ce gândește despre mine”
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              În citirea gândurilor presupui că ceilalți te judecă negativ, fără
              să îi întrebi sau să verifici într-un mod realist. Te comporți de
              parcă ai putea citi mintea celuilalt, deși tot ce ai sunt
              presupunerile tale.
            </p>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                Ții o prezentare bună, dar vezi pe cineva că se uită în telefon
                sau cască. Gândul automat: „Se plictisesc toți, sigur cred că
                sunt un dezastru.”
              </li>
              <li>
                Treci pe stradă pe lângă un cunoscut care pare grăbit și îți
                răspunde scurt. Concluzia: „Nu mai suportă să mă vadă, sigur e
                supărat pe mine.”
              </li>
              <li>
                Șeful îți spune doar „Bine, mulțumesc” la un raport. Gândul:
                „Consideră că sunt incompetent, altfel m-ar fi lăudat mai mult.”
              </li>
              <li>
                La o întâlnire, cineva își întoarce privirea în altă parte.
                Interpretare: „Clar se plictisește cu mine, sunt în mod evident
                ciudat și neinteresant.”
              </li>
            </ul>
          </div>

          {/* Subsecțiune – Fortune telling */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-amber-300">
              2. Prezicerea viitorului – „Știu sigur că va ieși prost”
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              În prezicerea viitorului te porți ca și cum ai avea un glob de
              cristal care îți arată doar scenarii negative. Spui „o să fie
              groaznic”, „nu are cum să meargă bine”, deși nu ai cum să știi
              viitorul.
            </p>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                Înainte de un examen: „O să pic sigur, nu are rost să mai învăț,
                oricum nu sunt în stare.”
              </li>
              <li>
                Ești invitat la o petrecere, dar gândești: „Nu o să mă distrez
                deloc, nu o să am cu cine să vorbesc, mai bine nu merg.”
              </li>
              <li>
                Vrei să inviți pe cineva în oraș: „Dacă întreb, sigur mă refuză
                și o să fie penibil, mai bine renunț.”
              </li>
              <li>
                Te gândești să încerci un hobby nou: „O să fie un fiasco total,
                o să mă fac de râs, nu are rost să arunc banii.”
              </li>
            </ul>
          </div>

          {/* De ce este periculoasă eroarea */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-rose-300">
              De ce este atât de nociv săritul la concluzii?
            </h3>
            <ul className="list-disc pl-4 space-y-1 text-sm text-slate-300">
              <li>
                Îți strică relațiile – reacționezi la scenarii imaginare („sigur
                mă disprețuiește”), te retragi sau ataci, iar asta poate chiar
                deteriora relația.
              </li>
              <li>
                Îți scade motivația – dacă „știi” din start că vei eșua, nu mai
                investești efort și creezi o{" "}
                <span className="italic">
                  profetie care se împlinește singură
                </span>
                .
              </li>
              <li>
                Îți menține anxietatea și depresia – fiecare experiență devine
                „dovadă” că ceilalți te resping sau că viitorul e lipsit de
                speranță.
              </li>
              <li>
                Te împiedică să vezi alternative – nu mai cauți explicații mai
                simple sau mai realiste pentru comportamentul celorlalți.
              </li>
              <li>
                Blochează schimbarea – dacă „nu are rost să încerc”, nu mai
                testezi soluții noi, nu mai acumulezi experiențe pozitive care
                să contrazică gândurile negative.
              </li>
            </ul>
          </div>

          {/* Soluții */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-cyan-300">
              Cum poți corecta săritul la concluzii
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                <span className="font-semibold">
                  Prinde „saltul” în momentul în care apare.
                </span>{" "}
                Caută formulări de tipul: „Sigur crede că…”, „Sunt convins că o
                să…”, „Știu eu cum va fi…”.
              </li>
              <li>
                <span className="font-semibold">
                  Întreabă-te: „Ce dovezi concrete am?”.
                </span>{" "}
                Care sunt faptele observabile? Există și explicații alternative
                pentru comportamentul celuilalt sau pentru ce s-ar putea
                întâmpla?
              </li>
              <li>
                <span className="font-semibold">
                  Generează explicații alternative.
                </span>{" "}
                „Poate e doar obosit”, „Poate e preocupat de o problemă a lui”,
                „Poate petrecerea va avea și momente plăcute, nu doar incomode”.
              </li>
              <li>
                <span className="font-semibold">
                  Testează-ți predicțiile în realitate.
                </span>{" "}
                În loc să eviți, du-te la petrecere, invită persoana, mergi la
                examen. Apoi notează ce s-a întâmplat de fapt, nu ce ți-ai
                imaginat.
              </li>
              <li>
                <span className="font-semibold">
                  Pune-ți întrebări de tipul: „Am mai prezis greșit și altă
                  dată?”.
                </span>{" "}
                Adu-ți aminte de situații în care realitatea a fost mai bună
                decât scenariile din mintea ta.
              </li>
              <li>
                <span className="font-semibold">
                  Acționează după valori, nu după predicții catastrofice.
                </span>{" "}
                Chiar dacă mintea spune „nu are rost”, întreabă-te: „Ce fel de
                persoană vreau să fiu în situația asta? Ce mi-ar aduce mai multă
                creștere pe termen lung?”.
              </li>
            </ul>
          </div>
        </section>

        {/* ====================== EROAREA 6 — ETICHETAREA & SUPRA-ETICHETAREA ====================== */}

        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-950/90 p-6 md:p-8 shadow-xl shadow-slate-950/70 space-y-6">
          {/* Badge + titlu */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-red-400/10 text-red-300">
            Eroarea 6 · Etichetarea și supra-etichetarea (Labeling &
            Mislabeling)
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-white">
            „Sunt un ratat… un prost… o nulitate.” – când îți reduci întreaga
            identitate la o singură greșeală
          </h2>

          {/* Intro – definiție */}
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Etichetarea este o eroare cognitivă în care transformi o greșeală
            sau un comportament într-o etichetă globală despre tine („sunt un
            eșec”, „sunt incompetent”) sau despre alții („este un nesimțit”,
            „este inutil”). Este o formă extremă de suprageneralizare: în loc să
            spui „am greșit”, spui „sunt un ratat”.
            <br />
            <br />
            Mislabeling (supra-etichetarea) apare când descrii o situație
            folosind expresii intense, dramatice, pline de încărcătură
            emoțională („A fost oribil”, „Sunt dezgustător”). Aceste etichete nu
            descriu realitatea, ci o caricatură distorsionată de emoție.
          </p>

          {/* Cum arată în viața de zi cu zi */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-50">
              Cum arată etichetarea în viața de zi cu zi?
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                Ratezi un proiect sau faci o greșeală la muncă și imediat spui:
                „Sunt incompetent”, în loc de „Am greșit la acest proiect”.
              </li>
              <li>
                Ai un lapsus într-o conversație și concluzionezi: „Sunt un
                idiot, nu știu să vorbesc cu oamenii”.
              </li>
              <li>
                Cineva te întrerupe în trafic și etichetezi persoana: „Ăsta e un
                nesimțit”, fără să știi nimic despre el.
              </li>
              <li>
                Mănânci ceva care nu era în dietă și îți spui: „Sunt un porc”,
                în loc de „Mi-am pierdut controlul 5 minute”.
              </li>
              <li>
                Un prieten uită să răspundă la un mesaj și imediat gândești:
                „Nu-i pasă deloc de mine, e un om lipsit de empatie”.
              </li>
            </ul>
          </div>

          {/* Exemple profunde */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-red-300">
              Exemple tipice de etichetare și supra-etichetare
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                O persoană primește o evaluare neutru-pozitivă la muncă, dar
                vede doar un mic comentariu critic. Concluzia automată devine:
                „Sunt un eșec total”.
              </li>
              <li>
                Un student ia un B în loc de A la un examen și își spune: „Sunt
                un prost, nu sunt bun de nimic”, deși are rezultate foarte bune
                în general.
              </li>
              <li>
                O persoană cu anxietate socială se bâlbâie într-o conversație și
                apoi se etichetează: „Sunt un ciudat”, „Sunt defect”.
              </li>
              <li>
                O femeie aflată la dietă mănâncă o cupă de înghețată și își
                spune: „Sunt dezgustătoare”, ceea ce duce la mâncat compulsiv
                ulterior.
              </li>
              <li>
                Un șef nervos numește un angajat „incompetent”, deși reacția a
                fost determinată de o singură situație punctuală.
              </li>
            </ul>
          </div>

          {/* De ce este periculoasă eroarea */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-rose-300">
              De ce este atât de nocivă etichetarea?
            </h3>
            <ul className="list-disc pl-4 space-y-1 text-sm text-slate-300">
              <li>
                Îți dizolvă identitatea reală și complexă într-o singură
                propoziție negativă.
              </li>
              <li>
                Creează o profeție care se împlinește singură – dacă te numești
                „incapabil”, acționezi ca un om incapabil.
              </li>
              <li>
                Îți reduce motivația și speranța de schimbare – dacă „așa ești”,
                de ce să încerci?
              </li>
              <li>
                Îți crește rușinea, depresia, furia și sentimentul de neputință.
              </li>
              <li>
                Deteriorează relațiile – dacă vezi oamenii ca „buni” sau „răi”,
                nu mai poți comunica eficient.
              </li>
            </ul>
          </div>

          {/* Soluții */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-cyan-300">
              Cum poți corecta etichetarea și supra-etichetarea
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                <span className="font-semibold">
                  Separă comportamentul de identitate.
                </span>{" "}
                În loc de „Sunt un ratat”, reformulează: „Am avut un moment
                dificil”.
              </li>
              <li>
                <span className="font-semibold">
                  Descrie faptele, nu persoana.
                </span>{" "}
                Spune „A întârziat de 2 ori”, nu „Este iresponsabil”.
              </li>
              <li>
                <span className="font-semibold">
                  Gândește în termeni specifici, nu globali.
                </span>{" "}
                O greșeală nu definește un om întreg.
              </li>
              <li>
                <span className="font-semibold">
                  Acceptă complexitatea umană.
                </span>{" "}
                Nimeni nu este doar „bun” sau doar „rău”. Suntem un amestec de
                multe lucruri.
              </li>
              <li>
                <span className="font-semibold">
                  Evită cuvintele încărcate emoțional.
                </span>{" "}
                „Dezastruos”, „oribil”, „groaznic” sunt exagerări care
                distorsionează realitatea.
              </li>
              <li>
                <span className="font-semibold">
                  Întreabă-te: „Ce dovezi am pentru această etichetă?”
                </span>{" "}
                Vei observa că, de obicei, există doar un eveniment punctual
                care nu justifică eticheta globală.
              </li>
            </ul>
          </div>
        </section>

        {/* ====================== EROAREA 7 — TOLERANȚĂ SCĂZUTĂ LA FRUSTRARE ====================== */}

        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-950/90 p-6 md:p-8 shadow-xl shadow-slate-950/70 space-y-6">
          {/* Badge + titlu */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-lime-400/10 text-lime-300">
            Eroarea 7 · Toleranță scăzută la frustrare (Low frustration
            tolerance)
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-white">
            „Nu suport, e prea greu!” – când disconfortul devine „de nesuportat”
            și blochează schimbarea
          </h2>

          {/* Intro – definiție */}
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Toleranța scăzută la frustrare este eroarea de gândire prin care
            transformi orice lucru neplăcut, greu sau plictisitor în ceva
            „insuportabil”. Nu mai spui doar „este dificil” sau „nu-mi place”,
            ci „nu pot suporta asta”, „e prea mult pentru mine”.
            <br />
            <br />
            Când gândești așa, disconfortul este amplificat, iar capacitatea ta
            reală de a face față este subestimată. Ajungi să eviți exact acele
            situații care, dacă le-ai suporta puțin, te-ar ajuta să crești, să
            înveți sau să-ți reduci anxietatea.
          </p>

          {/* Cum arată în viața de zi cu zi */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-50">
              Cum arată toleranța scăzută la frustrare în viața de zi cu zi?
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                <span className="font-semibold">Amânare (procrastinare):</span>{" "}
                ai de făcut un proiect, dar te gândești „E prea mult, nu am chef
                acum, nu pot să mă apuc” și tot amâni până în ultimul moment.
              </li>
              <li>
                <span className="font-semibold">Evitarea fricii:</span> vrei
                să-ți înfrunți anxietatea (de călătorie, de vorbit în public
                etc.), dar în momentul în care crește disconfortul spui „E
                oribil, nu mai suport” și renunți, întărind frica.
              </li>
              <li>
                <span className="font-semibold">Renunțarea rapidă:</span> când
                ceva nu îți iese repede, concluzionezi „Nu pot, e prea greu
                pentru mine”, și abandonezi în loc să exersezi.
              </li>
              <li>
                <span className="font-semibold">
                  Căutarea confortului imediat:
                </span>{" "}
                alegi constant varianta ușoară (seriale, telefon, mâncare) în
                locul activităților care aduc beneficii mai mari pe termen lung.
              </li>
              <li>
                <span className="font-semibold">
                  Reacții intense la disconfort:
                </span>{" "}
                în fața plictiselii, frustrării sau anxietății spui des „nu
                suport”, „înnebunesc”, „e prea mult”, deși obiectiv nu e
                periculos.
              </li>
            </ul>
          </div>

          {/* Exemple concrete */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-lime-300">
              Exemple tipice de gânduri cu toleranță scăzută la frustrare
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                „Tema asta e atât de plictisitoare, nu pot să mă apuc de ea
                acum. O las pe mai târziu, când o să am chef.”
              </li>
              <li>
                „Să merg singur(ă) cu trenul așa de departe e îngrozitor, nu pot
                suporta sentimentul ăsta, mai bine mă întorc acasă.”
              </li>
              <li>
                „Să stau fără telefon o oră? Nu, nu rezist, o să o iau razna.”
              </li>
              <li>
                „E prea greu să țin dieta asta, nu pot trăi așa, mai bine
                renunț.”
              </li>
              <li>
                „Exercițiile astea de respirație sunt enervante, nu am răbdare
                pentru așa ceva.”
              </li>
            </ul>
          </div>

          {/* De ce este periculoasă eroarea */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-rose-300">
              De ce este atât de nocivă toleranța scăzută la frustrare?
            </h3>
            <ul className="list-disc pl-4 space-y-1 text-sm text-slate-300">
              <li>
                Îți amplifică disconfortul – de la „e greu” ajungi la „e de
                nesuportat”, deși corpul tău poate duce mai mult decât crezi.
              </li>
              <li>
                Îți blochează progresul – dacă renunți de fiecare dată când
                devine greu, nu prinzi niciodată beneficiile de termen lung
                (note mai bune, anxietate redusă, abilități noi).
              </li>
              <li>
                Întărește anxietatea – de fiecare dată când fugi dintr-o
                situație incomodă, mintea „învață” că nu ești capabil să
                reziști, iar frica crește.
              </li>
              <li>
                Hrănește procrastinarea – faci lucrurile doar când presiunea
                devine insuportabilă (deadline, consecințe), ceea ce crește
                stresul și scade calitatea rezultatelor.
              </li>
              <li>
                Îți reduce stima de sine – ajungi să te vezi ca „slab”, „fără
                voință”, deși problema reală este modul în care interpretezi
                disconfortul.
              </li>
            </ul>
          </div>

          {/* Soluții */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-cyan-300">
              Cum poți crește toleranța la frustrare
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                <span className="font-semibold">Schimbă limbajul intern.</span>{" "}
                În loc de „Nu suport asta”, spune-ți: „Este greu și neplăcut,
                dar pot să duc asta câteva minute în plus”.
              </li>
              <li>
                <span className="font-semibold">
                  Amintește-ți situații în care ai rezistat.
                </span>{" "}
                Gândește-te: „Am mai trecut prin senzații neplăcute și nu am
                cedat. Deci pot suporta și acum.”
              </li>
              <li>
                <span className="font-semibold">Antrenează-te gradual.</span>{" "}
                Stabilește mici „antrenamente de disconfort”: lucrezi 10–15
                minute la o sarcină plictisitoare, călătorești puțin mai departe
                decât de obicei, stai cu emoția fără să fugi.
              </li>
              <li>
                <span className="font-semibold">
                  Focalizează-te pe beneficiul de termen lung.
                </span>{" "}
                Întreabă-te: „Ce câștig dacă rezist încă puțin?” – note mai
                bune, anxietate mai mică, mai multă autonomie.
              </li>
              <li>
                <span className="font-semibold">
                  Normalizează disconfortul.
                </span>{" "}
                Disconfortul nu este un semn că „nu poți”, ci o parte naturală
                din procesul de schimbare și învățare.
              </li>
              <li>
                <span className="font-semibold">
                  Folosește auto-mesaje de tip: „Pot să duc asta”.
                </span>{" "}
                Repetă-ți calm: „Este greu, dar pot să-l duc”, „Nu-mi place, dar
                nu e de nesuportat”.
              </li>
            </ul>
          </div>
        </section>

        {/* ====================== EROAREA 8 — MAGNIFICAREA ȘI MINIMALIZAREA ====================== */}

        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-950/90 p-6 md:p-8 shadow-xl shadow-slate-950/70 space-y-6">
          {/* Badge + titlu */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-fuchsia-400/10 text-fuchsia-300">
            Eroarea 8 · Magnificarea și minimalizarea (Binocular Trick)
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-white">
            „Tot ce e rău devine uriaș… tot ce e bun devine minuscul.” – când
            mintea folosește o lupă distorsionată
          </h2>

          {/* Intro – definiție */}
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Magnificarea și minimalizarea sunt două fețe ale aceleiași erori de
            gândire. Atunci când magnifiezi, exagerezi importanța greșelilor,
            defectelor sau problemelor tale. Când minimalizezi, diminuezi
            realizările, calitățile și lucrurile bune care există în viața ta.
            <br />
            <br />
            Acest fenomen mai este numit și „trucul binoclului”: cu partea
            greșită, defectele tale par uriașe; cu cealaltă parte, calitățile
            îți apar mici și nesemnificative. Rezultatul este inevitabil: te
            simți inferior, insuficient, rușinat sau anxios, chiar dacă
            realitatea nu justifică aceste emoții intense.
          </p>

          {/* Cum arată în viața de zi cu zi */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-50">
              Cum arată această eroare în viața de zi cu zi?
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                Ai o mică greșeală la muncă și imediat te gândești: „Este
                groaznic, o să afle toată lumea, reputația mea e ruinată!”
              </li>
              <li>
                Primești 10 complimente și o singură observație critică — dar
                doar critica contează. Complimentele sunt automat „minimizate”.
              </li>
              <li>
                O reușită importantă este anulată cu gândul: „Nu e mare lucru,
                oricine putea face asta.”
              </li>
              <li>
                Un mic obstacol devine o catastrofă: „Dacă am greșit acum,
                înseamnă că nu sunt bun pentru jobul ăsta.”
              </li>
              <li>
                La un examen, observi două greșeli la final și uiți că restul
                lucrării a fost foarte bună.
              </li>
            </ul>
          </div>

          {/* Exemple concrete */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-fuchsia-300">
              Exemple tipice de magnificare și minimalizare
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                Un student livrează un eseu excelent, iar profesorul îl laudă.
                Studentul răspunde: „Nu, este groaznic. Uitați aici câteva
                greșeli. Mi-e rușine că vi l-am trimis.” Greșelile sunt
                magnificare; calitatea eseului, minimizată.
              </li>
              <li>
                Un angajat mănâncă o prăjitură deși ține dietă și spune: „Sunt
                un dezastru total, nu am nicio disciplină.”
              </li>
              <li>
                O persoană primește o promovare, dar își spune: „Sigur a fost
                noroc sau nu aveau pe altcineva, nu pentru că sunt bun.”
              </li>
              <li>
                La o prezentare, audiența zâmbește și reacționează bine, dar
                observi o singură persoană care nu se uită la tine și conchizi:
                „Am vorbit prost. S-au plictisit toți.”
              </li>
            </ul>
          </div>

          {/* De ce este periculoasă eroarea */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-rose-300">
              De ce este atât de nocivă magnificarea & minimalizarea?
            </h3>
            <ul className="list-disc pl-4 space-y-1 text-sm text-slate-300">
              <li>
                Distorsionează realitatea – micile imperfecțiuni devin
                „catastrofe”, iar lucrurile bune devin „insignifiante”.
              </li>
              <li>
                Creează un dezechilibru emoțional constant: frică, vinovăție,
                rușine, inferioritate.
              </li>
              <li>
                Întreține perfecționismul și autosabotajul, pentru că nimic nu
                ți se pare „destul de bun”.
              </li>
              <li>
                Te împiedică să te bucuri de propriile reușite sau să capeți
                încredere în tine.
              </li>
              <li>
                Îți reduce capacitatea de a vedea lucrurile în ansamblu, într-un
                mod realist și echilibrat.
              </li>
            </ul>
          </div>

          {/* Soluții */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-cyan-300">
              Cum poți corecta magnificarea și minimalizarea
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                <span className="font-semibold">
                  Observă „trucul binoclului”.
                </span>{" "}
                Întreabă-te: „Oare mă uit prin lentila care exagerează
                negativul?”
              </li>
              <li>
                <span className="font-semibold">Scrie faptele obiective.</span>{" "}
                Ce s-a întâmplat concret, fără interpretări emoționale?
              </li>
              <li>
                <span className="font-semibold">Echilibrează balanța.</span>{" "}
                Pentru fiecare minus pe care îl vezi, pune intenționat un plus
                real.
              </li>
              <li>
                <span className="font-semibold">
                  Nu mai compara greșelile cu perfecțiunea.
                </span>{" "}
                Compară-le cu progresul tău, nu cu un standard imposibil.
              </li>
              <li>
                <span className="font-semibold">
                  Amintește-ți că proporțiile contează.
                </span>{" "}
                Un eveniment mic nu definește întreaga ta valoare.
              </li>
              <li>
                <span className="font-semibold">
                  Exersează recunoașterea meritelor.
                </span>{" "}
                Îți permiți să spui: „Da, am făcut asta bine.”
              </li>
            </ul>
          </div>
        </section>

        {/* ====================== EROAREA 9 — FILTRUL MENTAL (SELECTIVE ABSTRACTION) ====================== */}

        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-950/90 p-6 md:p-8 shadow-xl shadow-slate-950/70 space-y-6">
          {/* Badge + titlu */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-sky-400/10 text-sky-300">
            Eroarea 9 · Filtrul mental (Mental filter / Selective abstraction)
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-white">
            „Dacă există un lucru rău, doar pe el îl văd.” – când un detaliu
            negativ îți colorează toată imaginea
          </h2>

          {/* Intro – definiție */}
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Filtrul mental este eroarea de gândire prin care te concentrezi
            obsesiv pe un singur aspect negativ al unei situații și ignori
            aproape complet restul informațiilor – inclusiv părțile pozitive sau
            neutre. E ca și cum ai pune o picătură de cerneală într-un pahar cu
            apă și apoi ai spune că „tot paharul este murdar”.
            <br />
            <br />
            Când funcționează acest filtru, nu mai vezi „imaginea de ansamblu”.
            O singură greșeală, un gest, un comentariu sau un simptom (voce care
            tremură, roșeață, bâlbâială) ajunge să definească întreaga ta
            evaluare asupra ta, asupra celorlalți sau asupra situației.
          </p>

          {/* Cum arată în viața de zi cu zi */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-50">
              Cum arată filtrul mental în viața de zi cu zi?
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                Primești 20 de comentarii pozitive la o prezentare și unul ușor
                critic. Zile întregi te gândești doar la acel comentariu critic.
              </li>
              <li>
                Ai o zi în care faci multe lucruri bine, dar îți scapă un
                detaliu. Concluzia: „A fost o zi ratată, nu am făcut nimic cum
                trebuie.”
              </li>
              <li>
                Într-o relație, apare un singur conflict serios și începi să
                gândești: „Înseamnă că totul e rău, relația asta nu are nicio
                șansă.”
              </li>
              <li>
                Ții o prelegere, vezi o singură persoană că cască și tragi
                concluzia: „Discursul meu este plictisitor și prost”, ignorând
                restul audienței atente.
              </li>
              <li>
                La un test, îți amintești doar întrebările la care ai ezitat și
                uiți complet răspunsurile bune și faptul că ai terminat în timp
                util.
              </li>
            </ul>
          </div>

          {/* Exemple concrete */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-sky-300">
              Exemple tipice de gânduri cu filtru mental activ
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                „Am luat o notă mai mică la un singur examen, asta arată că sunt
                un student slab” – deși ai avut multe rezultate bune anterior.
              </li>
              <li>
                „Prietenul meu a întârziat azi 15 minute, clar nu îi pasă de
                mine” – fără să ții cont că de obicei este punctual și atent.
              </li>
              <li>
                „La petrecere am vărsat un pahar – a fost un dezastru total,
                toată lumea m-a văzut ca pe un ridicol” – ignorând faptul că
                atmosfera a fost plăcută și oamenii s-au simțit bine.
              </li>
              <li>
                „Mi-a tremurat vocea la începutul prezentării, deci a fost un
                eșec complet” – deși ai transmis ideile clar și ai păstrat
                atenția publicului.
              </li>
            </ul>
          </div>

          {/* De ce este periculoasă eroarea */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-rose-300">
              De ce este atât de nociv filtrul mental?
            </h3>
            <ul className="list-disc pl-4 space-y-1 text-sm text-slate-300">
              <li>
                Îți distorsionează percepția – realitatea devine mult mai sumbră
                decât este în fapt.
              </li>
              <li>
                Întărește credințele negative despre tine („sunt un eșec”),
                despre ceilalți („oamenii sunt reci și răi”) sau despre lume
                („nimic nu merge bine”).
              </li>
              <li>
                Îți menține depresia și anxietatea, pentru că mintea „adună”
                doar dovezi care confirmă scenariul negativ.
              </li>
              <li>
                Îți scade motivația – dacă vezi doar ce nu a mers, pierzi din
                vedere progresele reale.
              </li>
              <li>
                Poate afecta relațiile, pentru că te fixezi pe defectele sau
                greșelile celuilalt și treci cu vederea gesturile de grijă și
                apropiere.
              </li>
            </ul>
          </div>

          {/* Soluții */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-cyan-300">
              Cum poți corecta filtrul mental
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                <span className="font-semibold">
                  Întreabă-te: „Văd imaginea completă sau doar un detaliu?”
                </span>{" "}
                Notează-ți în jurnal atât aspectele negative, cât și cele
                pozitive ale unei situații.
              </li>
              <li>
                <span className="font-semibold">
                  Numără faptele, nu impresiile.
                </span>{" "}
                Câte lucruri au mers bine? Câte au mers prost? Sunt cu adevărat
                doar eșecuri?
              </li>
              <li>
                <span className="font-semibold">
                  Mută-ți atenția intenționat și spre pozitiv.
                </span>{" "}
                La finalul zilei, scrie 3 lucruri care au mers decent sau bine,
                chiar dacă par mici.
              </li>
              <li>
                <span className="font-semibold">
                  Imaginează-ți că e vorba de un prieten.
                </span>{" "}
                Dacă un prieten ar fi în situația ta, ai spune că „totul a fost
                un dezastru” sau i-ai arăta și părțile bune?
              </li>
              <li>
                <span className="font-semibold">Întreabă-te ce nu vezi.</span>{" "}
                „Ce alte explicații există?”, „Ce dovezi contrazic ideea mea că
                <span className="italic">totul</span> a fost rău?”.
              </li>
              <li>
                <span className="font-semibold">
                  Leagă exercițiul de valorile tale.
                </span>{" "}
                Dacă vrei să fii mai echilibrat și mai corect cu tine, parte din
                acest lucru înseamnă să lași toate informațiile să intre, nu
                doar pe cele negative.
              </li>
            </ul>
          </div>
        </section>

        {/* ====================== EROAREA 10 — SUPRAGENERALIZAREA (OVERGENERALIZATION) ====================== */}

        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-950/90 p-6 md:p-8 shadow-xl shadow-slate-950/70 space-y-6">
          {/* Badge + titlu */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-orange-400/10 text-orange-300">
            Eroarea 10 · Suprageneralizarea (Overgeneralization)
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-white">
            „Mi-a ieșit rău o dată… deci așa va fi mereu.” – când transformi un
            incident într-un destin
          </h2>

          {/* Intro – definiție */}
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Suprageneralizarea este eroarea prin care tragi o concluzie globală,
            dură și definitivă pe baza unui singur eveniment sau a unei
            experiențe limitate. Folosești cuvinte precum „mereu”, „niciodată”,
            „toți”, „nicio șansă”, ca și cum o situație punctuală ar descrie
            întreaga ta viață.
            <br />
            <br />
            Este ca un truc mental: mintea ia un eșec, o respingere sau un
            moment neplăcut și îl multiplică, exact ca într-un set de cărți
            trucate — transformă o singură „carte” într-un pachet întreg.
          </p>

          {/* Cum arată în viața de zi cu zi */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-50">
              Cum arată suprageneralizarea în viața de zi cu zi?
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                O persoană te refuză politicos la o întâlnire și gândești:
                „Nimeni nu mă va accepta vreodată. Voi fi singur toată viața.”
              </li>
              <li>
                Greșești într-o prezentare și concluzionezi: „Nu pot vorbi în
                public. Mă voi face mereu de râs.”
              </li>
              <li>
                Ți se strică mașina într-o dimineață proastă și spui: „Asta e.
                Nimic nu merge niciodată bine pentru mine.”
              </li>
              <li>
                Ai un eșec la muncă și tragi concluzia: „Nu mă descurc în viața
                profesională. Sunt un ratat.”
              </li>
              <li>
                Ai o discuție tensionată cu partenerul și spui: „Relația asta e
                un dezastru total. Nu merge nimic.”
              </li>
            </ul>
          </div>

          {/* Exemple concrete */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-orange-300">
              Exemple tipice de suprageneralizare
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                Un tânăr își face curaj să invite pe cineva la o întâlnire.
                Persoana refuză din motive obiective. El gândește: „Gata, asta
                e. Nimeni nu o să vrea vreodată să iasă cu mine.”
              </li>
              <li>
                Un student a avut o experiență proastă la un examen oral. Când
                profesorul îi sugerează să participe la un seminar, răspunsul
                este: „Nu are rost, eu{" "}
                <span className="italic">întotdeauna</span> mă blochez.”
              </li>
              <li>
                O persoană cu anxietate socială rememorează un incident jenant
                și conchide: „De fiecare dată când intru într-un grup, o dau în
                bară.”
              </li>
              <li>
                O mamă obosită ridică vocea o dată și apoi gândește: „Sunt un
                părinte groaznic. Copilul meu va suferi din cauza mea.”
              </li>
              <li>
                Un angajat primește un feedback critic și spune: „Șeful are ceva
                cu mine. Toți șefii sunt nedrepți. Munca este oribilă peste
                tot.”
              </li>
            </ul>
          </div>

          {/* De ce este periculoasă eroarea */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-rose-300">
              De ce este atât de nocivă suprageneralizarea?
            </h3>
            <ul className="list-disc pl-4 space-y-1 text-sm text-slate-300">
              <li>
                O transformă într-o profeție care se împlinește singură: nu mai
                încerci, fiind convins că vei eșua, iar asta îți reduce
                experiențele pozitive.
              </li>
              <li>
                Întărește depresia și anxietatea: mintea generalizează
                experiențele neplăcute în timp ce ignoră complet exemplele
                pozitive.
              </li>
              <li>
                Te face să vezi lumea în termeni absoluti („tot”, „nimic”,
                „mereu”), pierzând complet nuanțele realității.
              </li>
              <li>
                Reduce stima de sine: câteva eșecuri devin „dovada” că „nu ești
                bun”, „nu vei reuși”.
              </li>
              <li>
                Te împiedică să vezi progresul sau schimbarea – pentru că te
                definești printr-un incident trecut, nu prin ceea ce faci în
                prezent.
              </li>
            </ul>
          </div>

          {/* Soluții */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-cyan-300">
              Cum poți corecta suprageneralizarea
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                <span className="font-semibold">Evita absolutizările.</span> Fii
                atent la cuvinte precum „mereu”, „niciodată”, „toți”, „nimeni”.
              </li>
              <li>
                <span className="font-semibold">Verifică faptele.</span> S-a
                întâmplat de câte ori crezi? O dată? De două ori? Sau „mereu” e
                doar o impresie?
              </li>
              <li>
                <span className="font-semibold">Fii specific, nu global.</span>{" "}
                În loc de „sunt un ratat”, spune „astăzi nu mi-a ieșit cum am
                vrut”.
              </li>
              <li>
                <span className="font-semibold">Amintește-ți excepțiile.</span>{" "}
                Chiar și o singură situație în care a mers bine contrazice ideea
                „mereu”.
              </li>
              <li>
                <span className="font-semibold">
                  Gândește în termeni de probabilitate, nu destin.
                </span>{" "}
                Faptul că ceva s-a întâmplat o dată nu înseamnă că se va repeta.
              </li>
              <li>
                <span className="font-semibold">
                  Întreabă-te: „Ce aș spune unui prieten în această situație?”
                </span>{" "}
                Ai trage aceleași concluzii definitive despre el?
              </li>
            </ul>
          </div>
        </section>

        {/* ====================== EROAREA 11 — PERSONALIZAREA ȘI ÎNVINUIREA ====================== */}

        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-950/90 p-6 md:p-8 shadow-xl shadow-slate-950/70 space-y-6">
          {/* Badge + titlu */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-rose-400/10 text-rose-300">
            Eroarea 11 · Personalizarea și învinuirea (Personalization & Blame)
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-white">
            „E vina mea… sau e vina lor.” – când îți pui în spate toată
            responsabilitatea sau o arunci complet pe ceilalți
          </h2>

          {/* Intro – definiție */}
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Personalizarea este eroarea de gândire prin care te faci responsabil
            pentru evenimente negative care nu depind (în totalitate) de tine.
            Ajungi să crezi că „dacă s-a întâmplat ceva rău, sigur e vina mea” –
            chiar și atunci când nu aveai cum să controlezi situația.
            <br />
            <br />
            Varianta opusă este învinuirea: pui aproape toată responsabilitatea
            pe ceilalți („soțul”, „șeful”, „sistemul”, „copilul”), fără să iei
            în calcul și contribuția ta. În ambele cazuri, presupoziția de
            fundal este că „trebuie să existe un vinovat”.
          </p>

          {/* Cum arată în viața de zi cu zi */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-50">
              Cum arată personalizarea în viața de zi cu zi?
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                Copilul are dificultăți la școală, iar tu concluzionezi imediat:
                „Sunt un părinte rău, am eșuat complet.”
              </li>
              <li>
                Un pacient nu face temele de terapie sau nu urmează
                recomandările și gândul tău este: „Sunt un terapeut incompetent,
                dacă aș fi fost bun, ar progresa.”
              </li>
              <li>
                Un prieten e trist sau retras și, pentru că nu îl poți „repara”,
                te învinovățești: „Dacă eram un prieten adevărat, l-aș fi putut
                ajuta. Clar l-am dezamăgit.”
              </li>
              <li>
                Întâlnești pe cineva pe stradă, salutul este grăbit, iar tu
                gândești: „Sigur e supărat pe mine, am făcut eu ceva greșit.”
              </li>
              <li>
                Partenerul are o zi proastă și vorbește scurt. Concluzie: „Nu
                sunt suficient de bun(ă), dacă aș fi altfel, ar fi fericit.”
              </li>
            </ul>
          </div>

          {/* Cum arată învinuirea (opusul) */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-rose-300">
              Cealaltă extremă: învinuirea celorlalți
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Uneori, în loc să te faci tu vinovat pentru tot, mintea merge în
              direcția opusă: „Nu eu sunt problema, ceilalți sunt.” Cauti un țap
              ispășitor pentru orice dificultate și ignori complet partea ta de
              responsabilitate.
            </p>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                „Căsnicia mea este un dezastru pentru că soțul/soția este
                complet nerezonabil(ă). Eu nu am nicio vină.”
              </li>
              <li>
                „Dacă copilul nu învață, e doar din cauza profesorilor. Eu nu am
                ce schimba.”
              </li>
              <li>
                „Dacă nu am succes, e doar din cauza șefilor / țării /
                sistemului. Eu sunt perfect, ceilalți sunt problema.”
              </li>
            </ul>
          </div>

          {/* De ce este periculoasă eroarea */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-amber-300">
              De ce este atât de nocivă personalizarea (și învinuirea)?
            </h3>
            <ul className="list-disc pl-4 space-y-1 text-sm text-slate-300">
              <li>
                Personalizarea generează{" "}
                <span className="font-semibold">vinovăție cronică</span> și
                rușine – simți că „nu ești destul” indiferent ce faci.
              </li>
              <li>
                Îți pune în spate o responsabilitate imposibilă: să controlezi
                emoțiile, deciziile și reacțiile celorlalți.
              </li>
              <li>
                Învinuirea celorlalți blochează schimbarea – dacă problema este
                doar „la ei”, tu nu mai ai nimic de ajustat.
              </li>
              <li>
                Deteriorează relațiile: fie te sacrifici excesiv („cară totul pe
                umeri”), fie ataci și acuzi, ceea ce stârnește defensivitate.
              </li>
              <li>
                Îți distorsionează analiza situațiilor – în loc să vezi factorii
                reali (context, resurse, limite, responsabilități împărțite),
                totul devine o hartă de vină.
              </li>
            </ul>
          </div>

          {/* Soluții */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-cyan-300">
              Cum poți corecta personalizarea și învinuirea
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                <span className="font-semibold">
                  Separă influența de control.
                </span>{" "}
                Poți influența oamenii, dar nu îi poți controla. Fiecare are
                propria responsabilitate.
              </li>
              <li>
                <span className="font-semibold">
                  Întreabă-te: „Ce alți factori mai joacă un rol?”
                </span>{" "}
                Situația ține doar de tine? Sau mai sunt implicați și alți
                oameni, circumstanțe, întâmplare, limite reale?
              </li>
              <li>
                <span className="font-semibold">
                  Reformulează gândurile de tip „E doar vina mea”.
                </span>{" "}
                De exemplu: „Am o parte de responsabilitate aici, dar nu sunt
                singurul factor.”
              </li>
              <li>
                <span className="font-semibold">
                  Evită extrema opusă: „E doar vina lor”.
                </span>{" "}
                Întreabă-te onest: „Eu ce am făcut / nu am făcut în situația
                asta? Ce pot ajusta eu?”
              </li>
              <li>
                <span className="font-semibold">
                  Gândește în termeni de învățare, nu de vină.
                </span>{" "}
                În loc de „Cine e vinovat?”, întreabă „Ce putem face diferit
                data viitoare?”.
              </li>
              <li>
                <span className="font-semibold">
                  Exersează explicații alternative pentru comportamentul
                  celorlalți.
                </span>{" "}
                Poate prietenul era obosit, grăbit sau preocupat – nu neapărat
                supărat pe tine.
              </li>
            </ul>
          </div>
        </section>

        {/* ====================== EROAREA 12 — „AR TREBUI” (SHOULD STATEMENTS) ====================== */}

        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-950/90 p-6 md:p-8 shadow-xl shadow-slate-950/70 space-y-6">
          {/* Badge + titlu */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-medium bg-yellow-400/10 text-yellow-300">
            Eroarea 12 · „Ar trebui”, „Trebuie”, „Nu am voie” (Should / Must
            Statements)
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-white">
            „Trebuie să fiu perfect.” – când viața devine o listă de obligații
            imposibile
          </h2>

          {/* Intro – definiție */}
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Eroarea „ar trebui” apare atunci când îți conduci viața după reguli
            rigide de tipul „trebuie”, „ar trebui”, „musai”, „nu am voie”, „se
            cade să…”, atât față de tine, cât și față de ceilalți. Nu mai spui
            „mi-ar plăcea să…”, ci „trebuie neapărat să…”. Când nu reușești să
            respecți aceste reguli imposibile, apar vinovăția, rușinea și
            sentimentul de eșec. Când ceilalți nu se conformează standardelor
            tale, apare furia și frustrarea.
          </p>

          {/* Cum arată în viața de zi cu zi */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-50">
              Cum arată gândurile de tip „ar trebui” în viața de zi cu zi?
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                „Ar trebui să fac totul perfect.” – orice mică greșeală devine
                „inacceptabilă”.
              </li>
              <li>
                „Nu am voie să fiu anxios în fața altora.” – emoțiile normale
                sunt considerate eșec personal.
              </li>
              <li>
                „Trebuie să am mereu ceva inteligent de spus.” – orice ezitare
                sau pauză devine dovadă că „nu ești bun”.
              </li>
              <li>
                „Oamenii ar trebui să fie mereu politicoși și atenți.” – orice
                comportament diferit stârnește revoltă și resentiment.
              </li>
              <li>
                „Nu am voie să-i dezamăgesc pe ceilalți.” – ajungi să te
                sacrifici constant și să ignori propriile nevoi.
              </li>
            </ul>
          </div>

          {/* Exemple concrete */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-yellow-300">
              Exemple tipice de „should statements”
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                O pianistă talentată cântă o piesă dificilă și greșește de
                câteva ori. Gândul automat: „Nu ar fi trebuit să fac atâtea
                greșeli, este groaznic!” Rușinea o face să nu mai exerseze
                câteva zile.
              </li>
              <li>
                O persoană cu anxietate socială intră într-un grup nou și își
                spune: „Trebuie să par relaxat și sigur pe mine. Nu am voie să
                se vadă că sunt anxios.”
              </li>
              <li>
                Un părinte gândește: „Trebuie să fiu mereu calm și înțelegător.
                Nu am voie să ridic tonul niciodată.” Când are un moment de
                iritare, se condamnă sever: „Sunt un părinte îngrozitor.”
              </li>
              <li>
                Despre ceilalți: „Partenerul meu nu ar trebui să mă critice
                niciodată”, „Șeful nu are voie să-mi ceară asta”, „Prietenii
                trebuie să fie mereu disponibili pentru mine.”
              </li>
            </ul>
          </div>

          {/* De ce este periculoasă eroarea */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-rose-300">
              De ce sunt atât de nocive gândurile de tip „trebuie” și „ar
              trebui”?
            </h3>
            <ul className="list-disc pl-4 space-y-1 text-sm text-slate-300">
              <li>
                Creează o presiune internă enormă și cronică – trăiești cu
                sentimentul că ești mereu „în restanță”.
              </li>
              <li>
                Întăresc perfecționismul și te fac să-ți percepi eșecurile ca
                fiind intolerabile, nu ca oportunități de învățare.
              </li>
              <li>
                Îți cresc vinovăția și rușinea atunci când nu te ridici la
                înălțimea acestor standarde imposibile.
              </li>
              <li>
                Când sunt îndreptate spre ceilalți, duc la furie, resentimente
                și conflicte: oamenii reali nu respectă niciodată toate regulile
                interne din capul tău.
              </li>
              <li>
                Paradoxal, duc la amânare și blocaj: cu cât îți spui „trebuie
                neapărat să fac asta perfect”, cu atât îți vine mai puțin să
                începi.
              </li>
            </ul>
          </div>

          {/* Soluții */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-cyan-300">
              Cum poți corecta gândurile de tip „ar trebui”
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300">
              <li>
                <span className="font-semibold">Observă limbajul rigid.</span>{" "}
                Fii atent la cuvintele „trebuie”, „musai”, „ar trebui”, „nu am
                voie”.
              </li>
              <li>
                <span className="font-semibold">
                  Transformă „trebuie” în „aș prefera”.
                </span>{" "}
                De exemplu: „Aș prefera să fac mai puține greșeli” în loc de „Nu
                am voie să greșesc”.
              </li>
              <li>
                <span className="font-semibold">
                  Întreabă-te: „Ce se întâmplă dacă nu iese perfect?”
                </span>{" "}
                E chiar o catastrofă sau doar un disconfort gestionabil?
              </li>
              <li>
                <span className="font-semibold">
                  Păstrează standardele, renunță la dogmă.
                </span>{" "}
                Poți avea valori înalte (onestitate, grijă, profesionalism) fără
                să le transformi în reguli absolutiste.
              </li>
              <li>
                <span className="font-semibold">
                  Exersează libertatea de alegere.
                </span>{" "}
                În loc de „Trebuie să fac asta”, spune-ți: „Aleg să fac asta
                pentru că…” și explică-ți motivele.
              </li>
              <li>
                <span className="font-semibold">
                  Aplică aceeași regulă și la ceilalți.
                </span>{" "}
                Oamenii au propriile lor reguli de viață. Poți prefera un anumit
                tip de comportament, dar nu îl poți impune tuturor.
              </li>
            </ul>
          </div>
        </section>

        {/* CTA spre aplicație / jurnal de gânduri */}
        <section className="pb-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            custom={0}
            className="rounded-3xl border border-slate-800 bg-slate-950/90 p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="space-y-2 text-sm text-slate-200 md:max-w-xl">
              <h3 className="text-base md:text-lg font-semibold text-emerald-300">
                Următorul pas: jurnalul gândurilor
              </h3>
              <p>
                În aplicația 2 vei nota situații reale, gândurile automate
                asociate și emoțiile rezultate. Acolo vei exersa exact ceea ce
                ai citit aici: să recunoști gândirea „totul sau nimic” și să o
                transformi în gânduri mai nuanțate și mai sănătoase.
              </p>
              <p className="text-xs text-slate-400">
                Recomandare: începe cu 1–3 situații din ultimele zile în care ai
                simțit rușine, furie, teamă sau descurajare puternică.
              </p>
            </div>

            <a
              href="https://ganduri-emotii-v1.vercel.app/" // schimbă ruta după cum vei numi aplicația 2
              className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 hover:brightness-110"
            >
              Deschide jurnalul gândurilor
            </a>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
