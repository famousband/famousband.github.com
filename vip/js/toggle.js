$(".toggle_body").hide();
$(".collapse").hide();

$(".toggle_head").click(function() {

    var $this = $(this);

    $this.next(".toggle_body").slideToggle(300, function() {
      $this.children('img').toggle();
    });

});