requirejs.config({
  paths: {
    jquery: "../bower_components/jquery/dist/jquery.min",
    mdlinkparser: "../lib/index"
  }
});

require(["jquery", "mdlinkparser"], function($) {
  $("#button").click(function() {
    $("#output").empty();
    var returnVal = mdlinkparser($("#text").val());
    if(returnVal.length > 0) {
      $.each(returnVal, function( index, value ) {
        var links = "<a href='" + value + "'>" + value + "</a>";
        $("#output").append("<li>" + links + "</li>");
      });
    }
  });
});
