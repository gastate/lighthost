var PREVWIDTH = null;
var CURRWIDTH = null;

var responder = (function() {
  var t = {};
  t.callbacks = {
    slider: null
  };
  t.setSpec = function() {
    PREVWIDTH = CURRWIDTH;
    CURRWIDTH = $(document).width();
    for(var i in t.callbacks) {
      if(t.callbacks[i]) {
        t.callbacks[i]();
      }
    }
  };
  t.init = function() {
    t.setSpec();
    $(window).resize(function() {
      t.setSpec();
    });
  };
  return t;
})();

var slider = (function() {
  var t = {};
  t.kids = null;
  t.container = null;
  t.currentIndex = 0;
  t.width = 0;
  t.goTo = function(index) {
    $('.slider-wrapper', t.container).css('left', '-'+(index*t.width)+'px');
    var height = t.kids.eq(index).height();
    t.container.css('height', height);
    t.currentIndex = index;
  };
  t.setupEvents = function() {
    //Get previous index
    t.container.on('click', 'a.prev', function(e) {
      e.preventDefault();
      var index = t.currentIndex;
      if(index == 0) {
        index = t.kids.length - 1;
      } else {
        index = index - 1;
      }
      t.goTo(index);
    });
    //Get next index
    t.container.on('click', 'a.next', function(e) {
      e.preventDefault();
      var index = t.currentIndex;
      if(index == (t.kids.length - 1)) {
        index = 0;
      } else {
        index = index + 1;
      }
      t.goTo(index);
    });
  };
  t.setupViews = function() {
    t.container.addClass('slider');
    t.container.wrapInner('<div class="slider-wrapper"></div>');
    responder.callbacks.slider = function() {
      //Remeasure slider width
      slider.width = slider.container.width();
      slider.kids.width(t.width);
      slider.container.height(slider.kids.eq(0).height());
      $('.slider-wrapper', t.container).css('left', '-'+(t.currentIndex*t.width)+'px');
    };
    setTimeout(function() {
      t.container.height(t.kids.eq(0).height());
    }, 1000);
    //Slider nav
    t.container.prepend('<a href="#" class="prev">Previous</a><a href="#" class="next">Next</a>');
  };
  t.init = function() {
    t.container = $('.media-wrapper');
    $('iframe', t.container).before('<img src="/sites/newsroom.gpc.edu/themes/newsroom/images/64x45.png" class="ratio" />');
    if(t.container.length > 0 && $('.field', t.container).not('.field-name-field-photo-caption, .field-name-field-photo-credit').length > 1) {
      t.kids = $('.field', t.container).not('.field-name-field-photo-caption, .field-name-field-photo-credit');
      //Slider Prep
      t.setupViews();
      t.setupEvents();
      responder.init();
    }
  };
  return t;
})();

var publications = (function() {
  var t = {};
  t.container = null;
  t.currentIndex = 0;
  t.kids = null;
  t.goTo = function(index) {
   t.kids.css('margin-left', '-'+(index * 100)+'%');
   t.currentIndex = index;
  };
  t.setupEvents = function() {
    t.container.on('click', 'a.next', function(e) {
      e.preventDefault();
      var index = t.currentIndex;
      if(index == (t.kids.length - 1)) {
        index = 0;
      } else {
        index = index + 1;
      }
      t.goTo(index);
    });
  };
  t.setupViews = function() {
    $('.node-block', t.container).append('<a href="#" class="next">Next</a>');
    var z = 0;
    t.kids.each(function() {
      if(z > 0) {
        $(this).css('left', (z*100)+'%');
      }
      z++;
    });
  };
  t.init = function() {
    t.container = $('.publications-slider');
    if(t.container.length > 0) {
      t.kids = $('.node-block div', t.container);
      t.setupViews();
      t.setupEvents();
    }
  };
  return t;
})();

var dropdown = (function() {
  var t = {};
  t.container = null;
  t.source = null;
  t.setupEvents = function() {
    $('#main-content').on('click', '.drop-filter h4', function() {
      $('.drop-filter ul').slideToggle();
    });
  };
  t.setupViews = function() {
    var title = '<h3>'+$('h2', t.source).text()+'</h3>';
    var links = $('.content a', t.source);
    var list = '<ul>';
    var active = null;
    links.each(function() {
      var klass = '';
      if($(this).attr('class')) {
        klass = $(this).attr('class');
      }
      if(klass == 'active') {
        active = $(this).text();
      }
      list += '<li><a href="'+$(this).attr('href')+'" class="'+klass+'">'+$(this).text()+'</a></li>';
    });
    list += '</ul>';
    if(!active) {
      active = 'View All';
    }

    var filter = '<div class="Cam">'
                    +title
                    +'<div class="selector">'
                      +'<h4>'+active+'</h4>'
                      +list
                    +'</div>'
                  +'</div>';
    $('#block-system-main').before(filter);
  };
  t.init = function() {
    t.source = $('#block-views-expert_topics_block-block, #block-views-archive_filter-block');
    if(t.source.length > 0) {
      t.setupViews();
      t.setupEvents();
    }
  };
  return t;
})();

$(document).ready(function() {
  slider.init();
  dropdown.init();
  publications.init();
  $('.region-header').addClass('sidebar-offcanvas');
  
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
  
  //gallery filter
  var select = $('select[name=field_gallery_filter_tid]');
  select.before('<span>View All</span>');
  var options = $('option:contains("Any")', select);
  options.text('View All');
});
