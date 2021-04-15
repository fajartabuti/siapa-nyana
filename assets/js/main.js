/**
* Template Name: Vesperr - v4.1.0
* Template URL: https://bootstrapmade.com/vesperr-free-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
  "use strict";

  let data =
  {
    coffin: [
      {
        title: "Perjamuan",
        desc: "Full Kaca",
        img: "assets/img/portfolio/peti/peti-1.png"
      },
      {
        title: "Segi Delapan",
        desc: "Ukir Perjamuan",
        img: "assets/img/portfolio/peti/peti-2.png"
      },
      {
        title: "Perjamuan",
        desc: "Setengah Kaca",
        img: "assets/img/portfolio/peti/peti-3.png"
      }, {
        title: "Silver Edition",
        desc: "Ukir Perjamuan",
        img: "assets/img/portfolio/peti/peti-4.png"
      },
      {
        title: "Marmer Edition",
        desc: "Ukir Perjamuan",
        img: "assets/img/portfolio/peti/peti-5.png"
      },
      {
        title: "Standar Perjamuan",
        desc: "Tempel",
        img: "assets/img/portfolio/peti/peti-6.png"
      }, {
        title: "Standar 8 Dewa",
        desc: "Tempel",
        img: "assets/img/portfolio/peti/peti-7.png"
      },
      {
        title: "Ukir Naga",
        desc: "Full Kayu Jati",
        img: "assets/img/portfolio/peti/peti-8.png"
      },
      {
        title: "Ukir 8 Dewa",
        desc: "Full Kayu Jati",
        img: "assets/img/portfolio/peti/peti-9.png"
      },
      {
        title: "Ukir Burung Hong",
        desc: "Model Eropa",
        img: "assets/img/portfolio/peti/peti-10.png"
      },
      {
        title: "Marmer Edition",
        desc: "Ukir Naga",
        img: "assets/img/portfolio/peti/peti-11.png"
      },
      {
        title: "Segi 8",
        desc: "Ukir Kembang",
        img: "assets/img/portfolio/peti/peti-12.png"
      }
    ],
    car: [
      {
        title: "Mobil Jenazah VVIP",
        desc: "",
        img: "assets/img/portfolio/car/car-1.png"
      },
      {
        title: "Mobil Jenazah VVIP",
        desc: "",
        img: "assets/img/portfolio/car/car-2.png"
      },
      {
        title: "Mobil Jenazah VIP",
        desc: "",
        img: "assets/img/portfolio/car/car-3.png"
      },
      {
        title: "Mobil Jenazah VIP",
        desc: "",
        img: "assets/img/portfolio/car/car-4.png"
      },
      {
        title: "Mobil Jenazah Standar",
        desc: "",
        img: "assets/img/portfolio/car/car-5.png"
      },
      {
        title: "Mobil Jenazah Standar",
        desc: "",
        img: "assets/img/portfolio/car/car-6.png"
      },
      {
        title: "Mobil Jenazah Standar",
        desc: "",
        img: "assets/img/portfolio/car/car-7.png"
      }
    ],
    grave: [
      {
        title: "",
        desc: "",
        img: "assets/img/portfolio/grave/grave-1.png"
      },
      {
        title: "",
        desc: "",
        img: "assets/img/portfolio/grave/grave-2.png"
      },
      {
        title: "",
        desc: "",
        img: "assets/img/portfolio/grave/grave-3.png"
      },
      {
        title: "",
        desc: "",
        img: "assets/img/portfolio/grave/grave-4.png"
      }
    ],
    funeral: [
      {
        title: "Nama Produk 1",
        desc: "Penjelasan Produk 1",
        img: "assets/img/portfolio/portfolio-4.jpg"
      },
      {
        title: "Nama Produk 2",
        desc: "Penjelasan Produk 2",
        img: "assets/img/portfolio/portfolio-5.jpg"
      },
      {
        title: "Nama Produk 3",
        desc: "Penjelasan Produk 3",
        img: "assets/img/portfolio/portfolio-6.jpg"
      }
    ]
  };

  if (typeof elem == "undefined") {
    var elem = function (tagName, attributes, children, isHTML) {

      let parent;

      if (typeof tagName == "string") {
        parent = document.createElement(tagName);
      } else if (tagName instanceof HTMLElement) {
        parent = tagName;
      }

      if (attributes) {
        for (let attribute in attributes) {
          if (attribute.startsWith("on")) {
            let callback = attributes[attribute];
            if (typeof callback == "string") {
              parent.setAttribute(attribute, callback);
            }
            else if (typeof callback == "function") {
              let eventMatch = attribute.match(/^on([a-zA-Z]+)/);
              if (eventMatch) {
                let event = eventMatch[1];
                // TODO: make sure it's a valid event?
                parent.addEventListener(event, callback);
                parent.eventListeners = parent.eventListeners || {};
                parent.eventListeners[event] = parent.eventListeners[event] || [];
                parent.eventListeners[event].push(callback);
              }
            }
          } else {
            parent.setAttribute(attribute, attributes[attribute]);
          }
        }
      }
      var isHTML = isHTML || null;
      if (children || children == 0) {
        elem.append(parent, children, isHTML);
      }
      return parent;
    };

    elem.append = function (parent, children, isHTML) {
      if (parent instanceof HTMLTextAreaElement || parent instanceof HTMLInputElement) {
        if (children instanceof Text || typeof children == "string" || typeof children == "number") {
          parent.value = children;
        }
        else if (children instanceof Array) {
          children.forEach(function (child) {
            elem.append(parent, child);
          });
        }
        else if (typeof children == "function") {
          elem.append(parent, children());
        }
      } else {
        if (children instanceof HTMLElement || children instanceof Text) {
          parent.appendChild(children);
        }
        else if (typeof children == "string" || typeof children == "number") {
          if (isHTML) {
            parent.innerHTML += children;
          } else {
            parent.appendChild(document.createTextNode(children));
          }
        }
        else if (children instanceof Array) {
          children.forEach(function (child) {
            elem.append(parent, child);
          });
        }
        else if (typeof children == "function") {
          elem.append(parent, children());
        }
      }
    };
  } else {
    if (typeof elem == "function" && typeof elem.hasOwnProperty("append")) {
      console.warn("elem() is already initialized.");
    } else {
      console.warn("elem name is already in use by some other script.");
    }
  }

  let html = "";
  let appendChildElement, parentElement;

  parentElement = document.getElementById('portfolio-container');

  Object.keys(data).forEach(val => {
    for (let i = 0, len = data[val].length; i < len; i++) {
      html = elem("div", { "class": "col-lg-4 col-md-6 portfolio-item filter-" + val }, [
        elem("div", { "class": "portfolio-wrap" }, [
          elem("img", { "src": data[val][i].img, "class": "img-fluid", "alt": data[val][i].title }),
          elem("div", { "class": "portfolio-info" }, [
            elem("h4", null, data[val][i].title),
            elem("p", null, data[val][i].desc),
            elem("div", { "class": "portfolio-links" }, [
              elem("a", { "href": data[val][i].img, "data-gallery": "portfolioGallery", "class": "portfolio-lightbox", "title": data[val][i].title }, [
                elem("i", { "class": "bx bx-fullscreen" }),
              ]),
              elem("a", { "href": "https://api.whatsapp.com/send?phone=6289696991074&text=Halo+Siapa+Nyana%2C+saya+mau+tau+lebih+lanjut+tentang+produk+" + data[val][i].title + "+" + data[val][i].desc, "title": "Kirim Pesan", "target": "_blank" }, [
                elem("i", { "class": "bx bxl-whatsapp" }),
              ]),
            ]),
          ]),
        ]),
      ]);
      appendChildElement = parentElement.appendChild(html);
      html = "";
    }
  });

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });


  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('#portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  window.onload = function () {
    document.getElementById("default-portofolio").click();
  };

})()