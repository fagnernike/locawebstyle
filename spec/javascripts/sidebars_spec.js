 describe("Locastyle in general: ", function() {

  beforeEach(function() {
    loadFixtures('sidebars_fixture.html');
    locastyle.sidebars.init();
  });

  describe("Sidebar toggle", function() {
  	describe("when click on .ls-show-sidebar", function() {
  		it("should add the .ls-sidebar-visible css class on html tag", function() {
  			$(".ls-show-sidebar").trigger('click');
  			expect($('html').hasClass('ls-sidebar-visible')).toEqual(true);
  		});
  	});
  });

  describe("Notifications toggle", function() {
  	describe("when click on .ls-show-notifications", function() {
  		it("should add the .ls-notifications-visible css class on html tag", function() {
  			$('.ls-show-notifications').trigger('click');
  			expect($('html').hasClass('ls-notifications-visible')).toEqual(true);
  		});
  	});
  });

  describe("When .ls-sidebar has .ls-area-account", function() {
    it("should add the .ls-area-account-active css class on .ls-sidebar element", function() {
      expect($('.ls-sidebar').hasClass('ls-area-account-active')).toEqual(true);
    });
  });

  describe("When .ls-notifications has exist", function() {
    it("should add span on .ls-topbar", function() {
      expect($('.ls-topbar .ls-show-notifications').length).toEqual(1);
    });
  });

  describe("Unbind:", function() {
    describe("when unbind is called in module", function() {
      it("should unbind events handled by sidebar module", function() {
        locastyle.sidebars.unbind();
        expect($._data($(".ls-show-sidebar")[0], "events")).toEqual(undefined);
      });
      it("should unbind events handled by notifications module", function() {
        locastyle.sidebars.unbind();
        expect($._data($(".ls-show-notifications")[0], "events")).toEqual(undefined);
      });
    });
  });
});
