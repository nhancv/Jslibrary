/**
 * Created by nhancao on 3/8/16.
 */
function doFunc( sessionId ) {
  $.ajax({
    method: "POST",
    url: "getlogin.action",
    data: "sessionId=" + sessionId,
    success: function() {
      window.location.reload();
    },
    error: function( e ) {
      console.log(e);
      window.location.reload();
    }
  });
}