var link_clicked = 0;
var bibtexs = new Array(

    // Add newest entries at the bottom.
    // 0
  new Array(
    "@ARTICLE{DKG_IJRR14,",
    "author = {Jonathan A.~DeCastro and Hadas Kress-Gazit},",
    "title = {Synthesis of Nonlinear Continuous Controllers for Verifiably-Correct High-Level, Reactive Behaviors},",
    "journal = {International Journal of Robotics Research},",
    "url = {http://ijr.sagepub.com/content/34/3/378},",
    "doi = {10.1177/0278364914557736},",
    "year = 2015,",
    "number = 3,",
    "month = {March},",
    "volume = 34,",
    "pages = {378--394}",
    "}"
    ),

    // 1
  new Array(
    "@ARTICLE{D_JPP07,",
    "author = {Jonathan A.~DeCastro},",
    "title = {Rate-Based Model Predictive Control of Turbofan Engine Clearance},",
    "journal = {Journal of Propulsion and Power},",
    "url = {http://arc.aiaa.org/doi/abs/10.2514/1.25846?journalCode=jpp},",
    "doi = {doi: 10.2514/1.25846},",
    "year = 2007,",
    "number = 4,",
    "month = {July},",
    "volume = 23,",
    "pages = {804-813}",
    "}"
    ),

    // 2
  new Array(
    "@INPROCEEDINGS{DRKG_ICRA15,",
    "author = {Jonathan A. DeCastro and Vasumathi Raman and Hadas Kress-Gazit},",
    "title = {Dynamics-Driven Adaptive Abstraction for Reactive High-Level Mission and Motion Planning},",
    "booktitle = {Proceedings of the IEEE International Conference on Robotics and Automation (ICRA 2015)},",
    "pages = {369-376},",
    "keywords = {Dynamics;Nonlinear dynamical systems;Planning;Robots;Trajectory},",
    "doi = {10.1109/ICRA.2015.7139025},",
    "year = {2015},",
    "month = {May},",
    "address = {Seattle, WA}",
    "}"
    ),

    // 3
  new Array(
    "@INPROCEEDINGS{DKG_IROS13,",
    "author = {Jonathan A. DeCastro and Hadas Kress-Gazit},",
    "title = {Guaranteeing Reactive High-Level Behaviors for Robots with Complex Dynamics},",
    "booktitle = {Proceedings of the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2013)},",
    "pages = {749-756},",
    "keywords = {mobile robots;path planning;robot dynamics;complex nonlinear dynamics;correct-by-construction planning techniques;formal methods;high-level mission planning;linear temporal logic;reactive high-level behaviors;sum-of-squares optimization;automata},",
    "doi = {10.1109/IROS.2013.6696435},",
    "year = {2013},",
    "month = {November},",
    "address = {Tokyo, Japan}",
    "}"
    ),

    // 4
  new Array(
    "@InProceedings{DTZV_GNC11,",
    "author = {Jonathan A. DeCastro and Liang Tang and Bin Zhang and George Vachtsevanos},",
    "title = {A Safety Verification Approach to Fault-Tolerant Aircraft Supervisory Control},",
    "booktitle = {Proceedings of the AIAA Guidance, Navigation, and Control Conference},",
    "year = {2011},",
    "month = {August},",
    "address = {Portland, OR}",
    "}"
    ),

    // 5
  new Array(
    "@InProceedings{DTBC_JPC09,",
    "author = {Jonathan A. DeCastro and Liang Tang and Carl S. Byington and Dennis E. Culley},",
    "title = {Analysis of Fault-Tolerance and Decentralization Concepts for Distributed Engine Control},",
    "booktitle = {Proceedings of the 45th AIAA Joint Propulsion Conference and Exhibit},",
    "year = {2009},",
    "month = {August},",
    "address = {Denver, CO}",
    "}"
    ),

    // 6
  new Array(
    "@InProceedings{DAMRRKG_ISRR15,",
    "Author = {Jonathan A. DeCastro and Javier Alonso-Mora and Vasu Raman and Daniela Rus and Hadas Kress-Gazit},",
    "Title = {Collision-Free Reactive Mission and Motion Planning for Multi-Robot Systems},",
    "BookTitle = {Proceedings of the International Symposium on Robotics Research (ISRR)},",
    "year = {2015},",
    "month = {September},",
    "address = {Sestri Levante, Italy}",
    "}"
  ),

    // 7
  new Array(
    "@InProceedings{DKG_HSCC16,",
    "Author = {Jonathan A. DeCastro and Hadas Kress-Gazit},",
    "Title = {Nonlinear Controller Synthesis and Automatic Workspace Partitioning for Reactive High-Level Behaviors},",
    "BookTitle = {Proceedings of the 19th ACM International Conference on Hybrid Systems: Computation and Control (HSCC)},",
    "doi = {10.1145/2883817.2883832},",
    "year = {2016},",
    "month = {April},",
    "address = {Vienna, Austria}",
    "}"
  ),

    // 8
  new Array(
      "@ARTICLE{DERBKG_JDEDS17,",
      "author = {DeCastro, Jonathan and Ehlers, Ruediger and Rungger, Matthias and Balkan, Ayca and Kress-Gazit, Hadas},",
      "title = {Automated generation of dynamics-based runtime certificates for high-level control},",
      "journal = {Discrete Event Dynamic Systems},",
      "year = {2017},",
      "month = {June},",
      "volume = {27},",
      "number = {2},",
      "pages = {371--405},",
      "issn = {1573-7594},",
      "doi = {10.1007/s10626-016-0232-7},",
      "url = {http://dx.doi.org/10.1007/s10626-016-0232-7}",
      "}"
  ),

    // 9
  new Array(
      "@Article{AMDRRKG_AURO2017,",
      "author= {Alonso-Mora, Javier and DeCastro, Jonathan A. and Raman, Vasumathi and Rus, Daniela and Kress-Gazit, Hadas},",
      "title={Reactive mission and motion planning with deadlock resolution avoiding dynamic obstacles},",
      "journal={Autonomous Robots},",
      "year={2017},",
      "month={August},",
      "issn={1573-7527},",
      "doi={10.1007/s10514-017-9665-6},",
      "url={https://doi.org/10.1007/s10514-017-9665-6}",
      "}"
  ),

    // 10
  new Array(
      "@InProceedings{LSVDAMKR_ISRR17,",
      "author = {Lucas Liebenwein and Wilko Schwarting and Cristian-Ioan Vasile and Jonathan DeCastro and Javier Alonso-Mora and Sertac Karaman and Daniela Rus},",
      "title = {Compositional and Contract-based Verification for Autonomous Driving on Road Networks},",
      "booktitle = {Proceedings of the International Symposium on Robotics Research (ISRR)},",
      "year = {2017},",
      "month = {December},",
      "address = {Puerto Varas, Chile}",
     "}"
  )
);

function OnBodyClick()
{
  if(link_clicked == 0)
    document.getElementById("bibtex_panel").style.visibility  = "hidden";
  else
    link_clicked = 0;
}

function OnBibtexPanelClick()
{
  link_clicked = 1;
}

function copy_position(source, target)
{
  var x=source.offsetLeft;
  var y=source.offsetTop;

  while (source = source.offsetParent) {
    x += source.offsetLeft;
    y += source.offsetTop;
  }

  //target.style.left= (x - 4) + "px";
  target.style.top = (y + 20) + "px";
}

function bibtex_display(link,bid)
{
  link_clicked = 1;
  copy_position(link,document.getElementById("bibtex_panel"));
  
  //document.getElementById("bibtex_box").innerText = bibtexs[bid];   
  document.getElementById("bibtex_panel").style.visibility  = "visible";
  
  Element = document.getElementById("bibtex_box");

  while(Element.firstChild)
    Element.removeChild(Element.firstChild);

  var text = bibtexs[bid];
  for(var i=0;i<text.length;i++)
  {
    if(i>0 && i<text.length-1)
      Element.appendChild(document.createTextNode(text[i]));
    else
      Element.appendChild(document.createTextNode(text[i]));
    Element.appendChild(document.createElement("br"));
  }
}
