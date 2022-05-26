<template>
    <div id="app">
        <div class="container">
              <div class="row">
                    <div class="col-md-12 internalPadding">
                        <div class="blueBar" @click="isShow['Diehardone'] = !isShow['Diehardone']" :class="{'red': isShow['Diehardone']}">
                            <div class="d-flex">
                                <h2><i class="fas fa-sleigh"></i>&nbsp; &nbsp;Conditions générales </h2>
                                <div class="ml-auto">
                                      <i class="fas fa-plus ml-auto"></i>
                                </div>
                            </div>
                        </div><!-- End BlueBar -->
                    </div><!-- End col -->
              </div><!-- End Row -->
              <transition name="slide">
              <div class="row content internalPadding" v-if="isShow['Diehardone']">
                <div class="col-12">
                  <div class="cardPageFormation">
                      <div class="proj">
                        <div class="proj__card">
                          <div class="proj__card__firstTitle" @click="isShowingGle ^= true"><p>Nos formations diplomantes :</p><p>SESHSW(Master)</p><p>SESHSW-NSW(Doctorat)</p></div>
                            <div class="proj__card__show" v-show="isShowingGle"> 
                              <div class="proj__card__show__frame">
                                <div class="proj__card__show__cercle">1</div>
                                  <div class="proj__card__show__title"  @click="isShowingOne ^= true">Motivation et finalité</div>
                                    <div class="proj__card__show__content" v-show="isShowingOne">
                                          <p>L’Institut Kemetmaat Cheikh Anta Diop est un département de l’Association Kemetmaat ouvert depuis 2012. L’association est affiliée à l’organisation communautaire Afrocentricity International ; laquelle est présente dans une cinquantaine de pays du continent et de la diaspora.</p>
                                          <p>Dans le cadre du courant de la renaissance africaine qui monte en puissance, l’IKCAD s’est donné pour vocation de former les futurs cadres et acteurs de cette révolution culturelle.
                                                  Aussi l’IKCAD propose aux jeunes africains et africaines un programme d’enseignement et de recherche de seshw et Seshw Nsw de kamitologie en ligne.</p><p>
                                                  Le Seshw est un grade d’enseignement supérieur de l’IKCAD acquis au terme d’un parcours de 4 semestres académiques d’études. Il est l’équivalent du Master dans le système éducatif officiel.
                                                  Le Seshw Nsw est un grade d’enseignement supérieur de l’IKCAD acquis au terme d’un parcours de 4 semestres académiques d’études et de recherche après l’obtention du Seshw. Il est l’équivalent du Doctorat dans le système éducatif officiel.</p>
                                          <p>Le seba est un certificat délivré dans le cadre du programme aux personnes ayant validées 1 cours semestriel d’un volume horaire de 24 heures.</p>
                                          <p>La kamitologie est le domaine des études africaines conduites dans une perspective africaine. Il s’agit de l’application de la théorie de l’afrocentricité, fondée par le professeur Kete Asante, dans le champ épistémologique. Le professeur Ama Mazama grande figure de l’école de l’afrocentricité est la conceptrice de ce programme académique de kamitologie de haut niveau dont la mise en œuvre est assurée, sous sa direction, par une équipe pédagogique qualifiée.</p>
                                          <p>L’enjeu de ce programme est de contribuer à la renaissance culturelle des peuples négro-africains telle que la définie le savant Cheikh Anta Diop :</p>
                                          <p>« Les nouvelles humanités africaines devront reposer sur les fondements de la culture égypto-nubienne de même que les humanités occidentales s’appuient sur la culture gréco - latine antique. Sans référence systématique à l’Egypte dans tous les domaines de la culture, il ne sera pas possible de bâtir un corps de sciences humaines ... il s’agit de la redécouverte d’un soi culturel et non d’une imitation servile ».</p>
                                          <p>CHEIKH ANTA DIOP (Alerte sous les tropiques, présence africaine, Edition 1990).</p>
                                          <p>La création de ce programme est une expression concrète de la volonté des africains conscients de s’affranchir du carcan institutionnel de l’eurocentrisme et de créer un cadre afrocentrique d’enseignement et de recherche supérieur. Il s’agit de rompre avec toutes les formes de tutelles intellectuelles et académiques étrangères héritées de la période des déportations et de la colonisation et d’affirmer la présence et la vitalité de la pensée, des sciences, des techniques et des arts négro-africains (kamit) dans le monde d’aujourd’hui. Les diplômes de l’IKCAD sont donc des diplômes libres.</p>
                                    </div>
                              </div>
                            </div>
                            <div class="proj__card__show" v-show="isShowingGle"> 
                              <div class="proj__card__show__frame">
                                <div class="proj__card__show__cercle">2</div>
                                  <div class="proj__card__show__title"  @click="isShowingTwo ^= true"> Finalité </div>
                                    <div class="proj__card__show__content" v-show="isShowingTwo">
                                          <p>Il s’agit techniquement de doter l’étudiant d’un important bagage intellectuel par une formation de base pluridisciplinaire qui associe principalement les domaines des langues, de l’histoire, des lettres, de la philosophie, de la cosmologie, de la sociologie, de l’art dans un paradigme autoréférencé africain.</p>
                                          <p>Grace à l’étude de ces grandes disciplines dans une approche afrocentrique, l’apprenant acquiert de solides méthodes de travail, une grande culture générale, une claire conscience historique, un amour pour le service à l’Afrique, un grand sens critique et un sens créatif très important.</p>
                                    </div>
                              </div>
                             </div>
                             <div class="proj__card__show" v-show="isShowingGle"> 
                              <div class="proj__card__show__frame">
                                  <div class="proj__card__show__cercle">3</div>
                                  <div class="proj__card__show__title"  @click="isShowingTree ^= true"> Public cible </div>
                                  <div class="proj__card__show__content" v-show="isShowingTree">
                                          <p>Le programme s’adresse, en formation initiale, à des étudiants de niveau licence du système officiel d’enseignement désireux d’acquérir une spécialité professionnelle ou recherche dans une perspective afrocentrique.</p>
                                          <p>Il s’agit pour eux de poursuivre leurs études supérieures tout en se reconvertissant au paradigme pédagogique afrocentrique.</p>
                                          <p>En formation continue, le programme de kamitologie offre l’opportunité à des professionnels et à des chercheurs de se reconvertir dans la nouvelle économie de la renaissance africaine.</p>
                                  </div>
                              </div>
                              </div>
                              <div class="proj__card__show" v-show="isShowingGle"> 
                                  <div class="proj__card__show__frame">
                                    <div class="proj__card__show__cercle">4</div>
                                    <div class="proj__card__show__title"  @click="isShowingFor ^= true">Les diplômes et perspective d’emploie</div>
                                    <div class="proj__card__show__content" v-show="isShowingFor">
                                              <p>Dans quelques années l’Afrique sera la première puissance démographique mondiale. Cette montée en puissance s’accompagnera d’une montée de la conscience positive de l’Afrique. Ce phénomène déjà palpable suscitera des demandes qu’il faut pouvoir anticiper et auxquelles on doit se préparer à répondre. Par exemple dans le domaine éducatif il faudra des enseignants équipés de solides connaissances de l’histoire et de la culture et des langues de notre continent. Tous les domaines de l’existence sont concernés ; la politique, l’économie, l’architecture, les arts créatifs etc. Les débouchés des formations de l’IKCAD sont celles offertes par ces prometteuses perspectives.</p>
                                              <p>Les diplômes de l’IKCAD sont par conséquent novateurs et uniques au monde car ils anticipent sur la société panafricaine de demain.</p>
                                              <p>Les diplômes de l’IKCAD sont par conséquent novateurs et uniques au monde car ils anticipent sur la société panafricaine de demain.
                                                  Les débouchés sont fonctions des spécialités du Seshsw et du Seshw Nsw : créateurs d’écoles afrocentriques, enseignants et formateurs, formateurs de formateurs, Ingénieur de formation, responsable du dispositif de formation, créateurs d’entreprises ou d’activités économiques afrocentrées, leaders d’associations civiles ou politiques, philosophes, théologien kamit, chercheur en afrologie, historien de l’art, historien, conférencier, communication, sociologue, journaliste, géostratège, consultant et conseillé specialisé.</p>
                                    </div>
                                  </div>
                                </div>
                              <div class="proj__card__show" v-show="isShowingGle"> 
                                  <div class="proj__card__show__frame">
                                      <div class="proj__card__show__cercle">5</div>
                                      <div class="proj__card__show__title"  @click="isShowingFive ^= true"> Le dispositif de formation ouverte à distance</div>
                                      <div class="proj__card__show__content" v-show="isShowingFive">
                                                  <p>Les cours sont proposés sur un format en ligne strict. Toutes les conférences sont électroniques et sont accessibles par ordinateur.</p>
                                                  <p>La plate-forme numérique de l’IKCAD utilise 4 outils principaux :</p>
                                                  <p>- Une application de formation en ligne où sont disponibles la vidéo, le manuel et les exercices classés par séquence pédagogique.</p>
                                                  <p>- Une application pour les séances de webconférences en live</p>
                                                  <p>- Un groupe WhatsApp qui regroupe les étudiants d’une même classe et leurs formateurs.</p>
                                                  <p>- Une boite Gmail pour les correspondances entre formateurs et auditeurs.</p>
                                                  <p>Les cours exigent une lecture intensive et les étudiants doivent être prêts à écrire ou à discuter après avoir lu les textes requis. Les enseignants attribueront normalement des lectures et celles-ci seront discutées, débattues, critiquées de manière constructive et évaluées dans le contexte afrocentrique.</p>
                                      </div>
                                  </div> 
                              </div> 
                            <div class="proj__card__show" v-show="isShowingGle"> 
                                  <div class="proj__card__show__frame">
                                    <div class="proj__card__show__cercle">6</div>
                                    <div class="proj__card__show__title" @click="isShowingSix ^= true"> La direction du programme</div>
                                            <div class="proj__card__show__content" v-show="isShowingSix">
                                                <p>Le programme d’études supérieures en études africaines Seshw et Seshw Nsw est dirigé par le professeur Ama Mazama ; « Imy r Sebayt » (directrice de l’enseignement) à l’IKCAD. A ce titre elle siège à tous les comités de thèse de l’IKCAD.</p>
                                                <p>Elle est docteure en linguistique à l’Université de la Sorbonne Nouvelle. Elle est professeure d’Etudes Africaines aux USA. Elle a publié de nombreux ouvrages et articles en français et en anglais sur l’Afrocentricité. Elle a notamment coédité l’Encyclopédie des études noires et l’Encyclopédie de la religion africaine.</p>
                                                <p>Elle possède une grande expérience dans la direction des doctorats en études africaines -américaines. Ses étudiants ont été cités pour leur érudition et leur leadership dans le domaine des études Africaines par des revues et des institutions depuis plus de deux décennies.</p>
                                                <p>L’Imy r Sebayt conduit une équipe d’enseignants et de chercheurs tous compétents en kamitologie dans leur spécialité respective.</p>
                                            </div>
                                  </div>
                              </div>
                              <div class="proj__card__show" v-show="isShowingGle"> 
                                  <div class="proj__card__show__frame">
                                    <div class="proj__card__show__cercle">7</div>
                                    <div class="proj__card__show__title "  @click="isShowingSeven ^= true"> Organisation et contenu de la formation</div>
                                            <div class="proj__card__show__content" v-show="isShowingSeven">
                                                <p>Le programme se déroule sur 8 semestres répartis en deux cycles. Chaque fin de cycle est sanctionnée parun diplôme.</p>
                                                <p>Premier cycle de kamitologie</p>
                                                <p> Au terme des 4 premiers semestres (cycle 1), l\’étudiant doit avoir une bonne connaissance des théories et méthodes afrocentriques, de l’histoire et la civilisation africaine, de la langue classique africaine (mdw ntr), de la linguistique historique africaine, de la philosophie africaine.
                                                      La fin du cycle 1 est sanctionné par le titre de Sesh (Master).</p>
                                                <p>Deuxième cycle de kamitologie</p>
                                                <p>Le cycle 2 comprend 4 semestres. Il est centré sur la formation et la pratique à la recherche dans la spécialité choisie par l’étudiant.</p>
                                                <p>Le Seshw Nsw (doctorat) est délivré à l’issue de la présentation de la thèse de fin d’études. Le cycle 2 est sanctionné par le titre de Sesh Nsw (Docteur).</p>
                                            </div>
                                  </div>
                              </div>
                              <div class="proj__card__show" v-show="isShowingGle"> 
                                  <div class="proj__card__show__frame">
                                      <div class="proj__card__show__cercle">8</div>
                                      <div class="proj__card__show__title"  @click="isShowingHeigth ^= true"> Programme</div>
                                      <div class="proj__card__show__content" v-show="isShowingHeigth">
                                              <p>PROGRAMME DE SESH NSW (DOCTORAT) EN KAMITOLOGIE 2022-2025</p>
                                              <p>Cycle 1 SESHW (MASTER)</p>
                                              <table>
                                                  <tr>
                                                    <td rowspan="3" class="semestre">Semestre 1</td>
                                                    <td class="titre">KMT 7007 Théorie et méthodologie de l’afrocentricité</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="titre">KMT 7017 Historiographie diopienne</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="titre">KMT 7027 Initiation à la langue des Mdw Ntr: Écriture et Grammaire</td>
                                                  </tr>
                                                  <tr>
                                                    <td rowspan="3" class="semestrePaire">Semestre 2</td>
                                                    <td class="titre">KMT 7037 Les grands mouvements de la pensée africaine</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="titre">KMT 7047 Préhistoire et Histoire ancienne de l’Afrique</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="titre">KTM 7057 Initiation à la langue des Mdw Ntr: Ecriture et Grammaire</td>
                                                  </tr>

                                                  <tr>
                                                    <td rowspan="3" class="semestre">Semestre 3</td>
                                                    <td class="titre">KMT 7067 Spiritualité et renais- sance africaines</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="titre">KMT 7077 Histoire et civilisations de l’époque impériale</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="titre">KMT 7087 Initiation à la Langue des Mdw Ntr : Ateliers de Lecture et Traduction de Textes</td>
                                                  </tr>
                                                  <tr>
                                                    <td rowspan="3" class="semestrePaire">Semestre 4</td>
                                                    <td class="titre">KMT 7097 Histoire et culture de la diaspora africaine</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="titre">KMT 7107 Les grandes invasions de l’Afrique</td>
                                                  </tr>
                                                  <tr>
                                                    <td class="titre">KMT 7117 Langue Pan-Africaine Moderne: Le Kiswahili</td>
                                                  </tr>
                                              </table>
                                              <div>
                                                  <p>Cycle 2 SESHW_NSW (MASTER)</p>
                                              </div>
                                              <table>
                                                      <tr>
                                                        <td rowspan="3" class="semestre">Semestre 5</td>
                                                        <td class="titre">KMT 7127 Séminaire de Recherche en Kamitologie</td>
                                                      </tr>
                                                      <tr>
                                                        <td class="titre">KMT 7137 Littérature Africaine et Diasporique</td>
                                                      </tr>
                                                      <tr>
                                                        <td class="titre">KMT 7147 Rekh Necher et la Tradition Scientifique Africaine</td>
                                                      </tr>

                                                      <tr>
                                                        <td class="semestrePaire">Semestre 6</td>
                                                        <td class="titre">KMT 7157 Elaboration & Soutenance du Mémoire de Pré- Thèse en Kamitologie</td>
                                                      </tr>
                                                      <tr>
                                                        <td class="semestre">Semestre 7</td>
                                                        <td class="titre">KMT 7167 Elaboration de la Thèse en Kamitologie</td>
                                                      </tr>
                                                      <tr>
                                                        <td class="semestrePaire">Semestre 8</td>
                                                        <td class="titre">KMT 7177 Soutenance de Thèse en Kamitologie</td>
                                                      </tr>
                                              </table>
                                      </div>
                                    </div>
                                </div> 
                                <div class="proj__card__show" v-show="isShowingGle"> 
                                  <div class="proj__card__show__frame">
                                      <div class="proj__card__show__cercle">9</div>
                                      <div class="proj__card__show__title"  @click="isShowingNine ^= true"> Autres activités académiques</div>
                                                <div class="proj__card__show__content" v-show="isShowingNine">
                                                      <p>Conférence annuelle.</p>
                                                      <p>Les doctorants doivent participer au symposium annuel de l’IKCAD sur les études africaines. Il s’agit d’un symposium d’une journée où les doctorants discutent de leurs recherches avec le public.</p>
                                                      <p>Immersion dans les communautés villageoises.</p>
                                                      <p>Les étudiants sont tenus de suivre une immersion culturelle intensive dans un village africain. La certification de cette exigence doit être présentée avant que l’étudiant n’ait obtenu son diplôme de Sesh.</p>
                                                      <p>Thèse de Seshw Nsw.</p>
                                                      <p>La thèse est une étude afrocentrique originale qui démontre la connaissance des méthodes de recherche et une maîtrise de son domaine d’intérêt principal. Il s’agit d’un travail qui a fait l’objet d’une enquête rigoureuse sous la supervision directe d’un enseignant.</p>
                                                      <p>La plupart des mémoires feront entre 175 et 225 pages. Toutes les thèses retenues seront publiées par l’IKCAD.</p>
                                                </div>
                                  </div>
                        </div>
                        <div class="proj__card__show" v-show="isShowingGle"> 
                            <div class="proj__card__show__frame">
                                  <div class="proj__card__show__cercle">10</div>
                                  <div class="proj__card__show__title"  @click="isShowingTen ^= true"> Déroulement des cours</div>
                                      <div class="proj__card__show__content" v-show="isShowingTen">
                                          <p>Chaque séance de cours sera d’une durée 2 heures. Les étudiants inscrits prendront 3 cours par semestre. En d’autres termes ceci équivaut à un volume horaire de 72 heures d’enseignement par semestre. La période entre les deux semestres est réservée aux travaux personnels, conférences et autres activités académiques.</p>
                                      </div>
                            </div>
                        </div>
                      <div class="proj__card__show" v-show="isShowingGle"> 
                          <div class="proj__card__show__frame">
                                  <div class="proj__card__show__cercle">11</div>
                                  <div class="proj__card__show__title"  @click="isShowingEleven ^= true">Les formalités d’admissions aux cycles du programme</div>
                                  <div class="proj__card__show__content" v-show="isShowingEleven">
                                    <p>Les étudiants sont admis deux fois par an. La date limite de présentation des demandes pour le premier semestre 2022 est le 31 décembre 2021 pour une rentrée qui se fera fin janvier. La date limite de présentation des demandes pour le deuxième semestre 2022 est le 30 juin 2022 pour une rentrée qui se fera début Juillet 2022.</p>
                                    <p>L’étudiant doit justifier un niveau de formation universitaire équivalent à la licence.
                                                        Cependant l’admission peut se faire à la suite d’un entretien d’évaluation et sur la base d’un dossier à fournir.</p>
                                    <p>Les étudiants titulaires des certificats afrologiques de l’IKCAD peuvent être dispensé de certains enseignements.</p>
                                    <p>Tous les renseignements sur l’inscription peuvent être obtenus auprès du coordinateur de l’IKCAD ou de son secrétariat.</p>
                                  </div>
                          </div>
                        </div>
                        <div class="proj__card__show" v-show="isShowingGle"> 
                          <div class="proj__card__show__frame">
                                  <div class="proj__card__show__cercle">12</div>
                                  <div class="proj__card__show__title"  @click="isShowingTwelve ^= true"> Le planning</div>
                                  <div class="proj__card__show__content" v-show="isShowingTwelve">
                                      <p>Le planning du premier semestre 2022 est disponible auprès du secrétariat.</p>
                                  </div>
                          </div>
                        </div>
                        </div> 
                      </div>
            <form @submit="postData" method="post">
              <p> 
                <span>     
                  <input 
                          type="checkbox" 
                          v-model="posts.acceptOne" 
                          id="acceptOne" 
                          class="form-check-input"
                  >
                </span> 
                <label class="form-check-label" for="acceptOne"> - Lu et approuvé sans aucune restriction.
                </label>
              </p>
               <p v-if="errors.length">
                        <b>Merci de corriger les erreurs suivantes : </b>
                    <ul>
                        <li v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
                    </p>
                  <button class=" group__header__body__btn"> Validez </button>
            </form>
              </div>
              </div><!-- End Col -->
              <!-- End Col -->
              </div><!-- End Row -->
              </transition>
                    <div class="row">
                    <div class="col-md-12 internalPadding">
                        <div class="blueBar" @click="isShow['Diehardtwo'] = !isShow['Diehardtwo']" :class="{'red': isShow['Diehardtwo']}">
                            <div class="d-flex">
                                <h2><i class="fas fa-sleigh"></i>&nbsp; &nbsp;Conditions particulieres </h2>
                                <div class="ml-auto">
                                      <i class="fas fa-plus ml-auto"></i>
                                </div>
                            </div>
                        </div><!-- End BlueBar -->
                    </div><!-- End col -->
              </div><!-- End Row -->
              <transition name="slide">
              <div class="row content internalPadding" v-if="isShow['Diehardtwo']">
              <div class="col-12">
                      <div class="conditions">
                          <div class="conditions__titleMain">
                          INSTITUT KEMETMAAT-CHEIKH ANTA DIOP 
                          ASSOCIATION KEMETMAAT 
                          kemetmaatabidjan@gmail.com
                          </div>
                          <div class="conditions__title">
                          <p>ACCORD SUR LES CONDITIONS PARTICULIERES DE VOTRE INSCRIPTION A L’IKCAD</p>
                          </div>
                          <div class="conditions__title__first">
                          <p><span>1</span> - Les cours sont proposés sous un format numérique principalement en ligne. Tous les cours sont accessibles par ordinateur. En conséquence pour bien suivre ces cours l’étudiant doit obligatoirement:</p>
                          </div>
                          <div class="conditions__title__content">
                          <p>- Avoir une connexion internet stable et de haut débit.
                          - Avoir un ordinateur portable ou de bureau et éventuellement un smartphone de qualité avec de l’espace mémoire suffisant sur ces appareils.
                          - Avoir un niveau de base pour utiliser un ordinateur à savoir naviguer dans l’explorateur de Windows ou dans le Finder sur mac. 
                          - Être capable d’installer une application sur son smartphone, un logiciel sur son ordinateur et être capable de retrouver un fichier télécharger sur smartphone et sur son ordinateur.
                          - Savoir utiliser les applications bureautiques (Word, Excel.) et l’application Classroom
                          </p>
                          </div>
                          <div class="conditions__title__first">
                          <p><span>2</span> - La plate-forme numérique de l’IKCAD utilise 4 outils principaux : </p>
                          </div>
                          <div class="conditions__title__content">
                          <p>- Une application de formation en ligne où sont disponibles la vidéo, le manuel et les exercices classés par séquence pédagogique.
                          - Une application pour les séances de webconférences en live 
                          - des  groupes Telegram qui regroupent les étudiants d’une même classe et leurs formateurs.
                          - Une boite Gmail pour les correspondances entre formateurs et entrepreneurs
                          </p>
                          </div>
                          <div class="conditions__title__first">
                          <p><span>3</span> – L’étudiant doit obligatoirement posséder un boite Gmail. L’adresse mail doit être composée uniquement de son nom et de ses prénoms à l’Etat civil. 
                          </p></div>
                          <div class="conditions__title__first">
                          <p><span>4</span> – L’étudiant doit utiliser son nom et ses prénoms à l’Etat civil dans ses relations avec l’administration, sur les supports pédagogiques et l’inscription aux groupes. En effet les noms et prénoms à l’Etat civil figureront uniquement sur les parchemins. 
                          </p>
                          </div>
                          <div class="conditions__title__first">
                          <p> <span>5 </span>– Les droits et frais d’inscriptions sont payables d’avance et ne sont pas remboursables sauf en cas de non-exécution des formations par l’IKCAD. Les frais d’expédition ou de transfert des règlements sont à la charge exclusive de l’étudiant.
                          </p>
                          </div>
                          <div class="conditions__title__first">
                          <p>
                          <span>6</span> – L’inscription est effective et valide quand l’étudiant s’est entièrement acquitté des droits et frais d’inscription.   
                          </p>
                          </div>
                          <div class="conditions__title__first">
                          <p>
                          <span>7</span> – Pour marquer votre accord cochez ci-dessous la case "Lu et approuvé".
                          </p>
                          </div>
                          <form @submit="postData" method="post">
                            <p v-if="errors.length">
                                    <b>Merci de corriger les erreurs suivantes : </b>
                                <ul>
                                    <li v-for="error in errors" :key="error">{{ error }}</li>
                                </ul>
                                </p>
                          <p>
                            <span>
                              <input
                                      type="checkbox"
                                      v-model="posts.acceptTwo"
                                      id="acceptTwo"
                                      class="form-check-input"
                              >
                            </span> 
                            <label class="form-check-label" for="acceptTwo"> - Lu et approuvé sans aucune restriction.
                            </label>
                          </p>
                              <button class=" group__header__body__btn"> Validez </button>
                        </form>
                      </div>
              </div><!-- End Col -->
              <!-- End Col -->
              </div><!-- End Row -->
              </transition>
        </div><!-- End Col -->
    </div><!-- End Container -->
</template>
<script>
 import Vue from "vue";
 import VueAxios from "vue-axios";
 import axios from "axios";
  Vue.use(VueAxios, axios)
export default{
    name: 'ConditionComponent',
    data(){
        return{
          errors: [],
        posts: {
         acceptOne: false,
         acceptTwo: false,
        },
        isShowingGle: false,
        isShowingOne: false,
        isShowingTwo: false,
        isShowingTree: false,
        isShowingFor: false,
        isShowingFive: false,
        isShowingSix: false,
        isShowingSeven: false,
        isShowingHeigth: false,
        isShowingNine: false,
        isShowingTen: false,
        isShowingEleven: false,
        isShowingTwelve: false,
        isShowingFinale: false,
                  accept: true,
                 title: "Hello",
      isShow: {
        'Diehardone': false,
        'Diehardtwo': false,

        }
    }
},
    created() {
      let objMySession = localStorage.getItem("obj")
      let myStorageToken = JSON.parse(objMySession)
      let token = myStorageToken.myToken;
      axios
        .get('https://212.227.142.69:3000/api/users/me/', {
          headers: {
            'Authorization': token
          }
        })
        .then(response => {
          this.profile = response.data
          // this.testUser = this.profile.testUser
          // this.$store.dispatch("beforeLogged")
      // if(this.testUser == 'testOk'){
      //  this.$store.dispatch("beforeLogged")
      // }
        })
        .catch(error => {
           this.$store.dispatch("beforeLogged")
                    this.$router.push({path: '/login'});
                    return console.log(error())
        })
    },
     methods: {
      myFunction: function () {	
        this.posts.seba = JSON.stringify(this.checkedFormations)
        },
      postData(e) {
        let objMySession = localStorage.getItem("obj")
        let myStorageToken = JSON.parse(objMySession)
        let token = myStorageToken.myToken;

        this.axios.put('https://212.227.142.69:3000/api/users/me/', this.posts, {
          headers: {
            'Authorization': token
          }
        })
          .then(response => {
            this.profile.biographie= response.data.biographie
            this.profile.lastname= response.data.lastname
            this.profile.usernameTradition= response.data.usernameTradition
            this.profile.lastnameTradition= response.data.lastnameTradition
            this.profile.dateBirthday= response.data.dateBirthday
            this.profile.townBirthday= response.data.townBirthday
            this.profile.sexe= response.data.sexe
            this.profile.nationalite= response.data.nationalite
            this.profile.adresseResid= response.data.adresseResid
            this.profile.villeResid= response.data.villeResid
            this.profile.paysResid= response.data.paysResid
            this.profile.tel1= response.data.tel1
            this.profile.tel2= response.data.tel2
            this.profile.tel3= response.data.tel3
            this.profile.picked= response.data.picked
            this.profile.seshsw= response.data.seshsw
            this.profile.seba= response.data.seba
            this.profile.profession= response.data.profession
            this.profile.activite= response.data.activite
            this.profile.acceptOne= response.data.acceptOne
            this.profile.acceptTwo= response.data.acceptTwo
          })
          .catch(error => console.log(error()))

        e.preventDefault();
      }
     
    }
}
</script>

<style>
 
</style>