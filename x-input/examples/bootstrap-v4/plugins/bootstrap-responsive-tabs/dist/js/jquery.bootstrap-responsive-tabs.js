/*
 * jQuery Bootstrap Responsive Tabs v2.0.1 | Valeriu Timbuc - vtimbuc.com
 * github.com/vtimbuc/bootstrap-responsive-tabs
 * @license WTFPL http://www.wtfpl.net/about/
 */

;(function($) {

  "use strict";

	var defaults = {
		accordionOn: ['xs'] // xs, sm, md, lg
	};

  function setParentTransition(obj, prop, delay, style, callback) {
    obj.css({'-webkit-transition' : prop + ' ' + delay + ' ' + style});
    obj.css({'-moz-transition' : prop + ' ' + delay + ' ' + style});
    obj.css({'-o-transition' : prop + ' ' + delay + ' ' + style});
    obj.css({'transition' : prop + ' ' + delay + ' ' + style});
    callback();
  }

  function callParentTransition(obj) {
    setParentTransition(obj, 'opacity', '0s', 'ease', function() {
      obj.addClass('fade in');
    });
    setTimeout(function() {
      setParentTransition(obj, 'opacity', '0.75s', 'ease', function() {
        obj.removeClass('fade in');
      });
    });
  }

	$.fn.responsiveTabs = function (options) {

		var config = $.extend({}, defaults, options),
        accordion = '';

		$.each(config.accordionOn, function (index, value) {
			accordion += ' accordion-' + value;
		});

    return this.each(function () {

      var $self = $(this),
          $navTabs = $self.find('> li > a'),
          $tabContent = $($navTabs.first().attr('href')).parent('.tab-content'),
          $tabs = $tabContent.children('.tab-pane');

      // Wrap the tabs
      $self.add($tabContent).wrapAll('<div class="responsive-tabs-container" />');

      var $container = $self.parent('.responsive-tabs-container');

      $container.addClass(accordion);

      // Duplicate links for accordion
      $navTabs.each(function (i) {
        var $this = $(this),
            id = $this.attr('href'),
            active = '',
            first = '',
            last = '';

        // Add active class
        if ($this.parent('li').hasClass('active')) {
          active = ' active';
        }

        // Add first class
        if (i === 0) {
          first = ' first';
        }

        // Add last class
        if (i === $navTabs.length - 1) {
          last = ' last';
        }

        $this.clone(false).addClass('accordion-link' + active + first + last).insertBefore(id);
      });

      var $accordionLinks = $tabContent.children('.accordion-link');

      // Tabs Click Event
      $navTabs.on('click', function (event) {
        event.preventDefault();

        var $this = $(this),
            $li = $this.parent('li'),
            $siblings = $li.siblings('li'),
            id = $this.attr('href'),
            $accordionLink = $tabContent.children('a[href="' + id + '"]');

        $(event.target).parents('ul').find('li > a').removeClass("active");
        $(event.target).addClass('active');

        callParentTransition($(id));

        if (!$li.hasClass('active')) {
          $li.addClass('active');
          $siblings.removeClass('active');

          $tabs.removeClass('active');
          $(id).addClass('active');

          $accordionLinks.removeClass('active');
          $accordionLink.addClass('active');

          $(id).fadeIn('fast');

        }

        if ($this.hasClass('ajax-tabs') && $this.attr("data-href")) {

          var url = $this.attr("data-href");
          var href = this.hash;
          $(href).load(url,function(result){
            $this.tab('show').removeClass('ajax-tabs').removeAttr('data-href');
          }).hide().fadeIn('fast');

        }

      });

      // Accordion Click Event
      $accordionLinks.on('click', function (event) {
        event.preventDefault();

        var $this = $(this),
            id = $this.attr('href'),
            $tabLink = $self.find('li > a[href="' + id + '"]').parent('li');

        callParentTransition($(id));

        if (!$this.hasClass('active')) {
          $accordionLinks.removeClass('active');
          $this.addClass('active');

          $tabs.removeClass('active');
          $(id).addClass('active');

          $navTabs.parent('li').removeClass('active');
          $tabLink.addClass('active');

          $(id).fadeIn('fast');

        }

        if ($this.hasClass('ajax-tabs') && $this.attr("data-href")) {

          var url = $this.attr("data-href");
          var href = this.hash;
          $(href).load(url,function(result){
            $this.tab('show').removeClass('ajax-tabs').removeAttr('data-href');
          }).hide().fadeIn('fast');

        }

      });

    });

	};

}(jQuery));
