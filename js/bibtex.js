var link_clicked = 0;
var bibtexs = new Array(

// TODO: newest entries at bottom.
// journals
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

  new Array(
    "@ARTICLE{DKG_IJRR14,",
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

// conference papers
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

  new Array(
    "@InProceedings{DTZV_GNC11,",
    "Author = {Jonathan A. DeCastro and Liang Tang and Bin Zhang and George Vachtsevanos},",
    "Title = {A Safety Verification Approach to Fault-Tolerant Aircraft Supervisory Control},",
    "BookTitle = {Proceedings of the AIAA Guidance, Navigation, and Control Conference},",
    "year = {2011},",
    "month = {August},",
    "address = {Portland, OR}",
    "}"
    ),

  new Array(
    "@InProceedings{DTBC_JPC09,",
    "Author = {Jonathan A. DeCastro and Liang Tang and Carl S. Byington and Dennis E. Culley},",
    "Title = {Analysis of Fault-Tolerance and Decentralization Concepts for Distributed Engine Control},",
    "BookTitle = {Proceedings of the 45th AIAA Joint Propulsion Conference and Exhibit},",
    "year = {2009},",
    "month = {August},",
    "address = {Denver, CO}",
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