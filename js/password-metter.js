$.fn.WaktudiCEK = function(param){
  var param = param || '';

  var input = this;
  var help_block = $(input).parent().find(".help-block");
  var form_group = $(input).closest(".form-group");
  if(help_block.length < 1){
    $(input).parent().append( '<span class="help-block"></span>' );
    help_block = $(input).parent().find(".help-block");
  }

  this.comprobar = function(){
    // mengatur panjang len ( jika terdapat alphanumkeric ( a-z A-Z 0-9 )dan special karakter maka muncul messange success) jika karakter ada 8 huruf keatas )
    var kuat = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    // mengatur panjang len ( jika terdapat alphanumeric d( a-z A-Z 0-9 )atau salah satunya tidak diinput termasuk special karakter , maka muncul messange warning )
    var lumayan = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    // mengisi panjang len jika diisi huruf kecil saja / huruf besar saja / a-z A-Z
    var lemah = new RegExp("(?=.{6,}).*", "g");

    $(form_group).removeClass(function(index, css){
      return (css.match (/(^|\s)has-\S+/g) || []).join(' ');
    });

    if (false == lemah.test($(input).val())) {
      $(form_group).addClass("has-error");
      $(help_block).html('<i class="fa fa-remove"></i> Password kamu LEMAH !!! bro');
      // return false;
    }
    else if (kuat.test($(input).val())) {
      $(form_group).addClass("has-success");
      $(help_block).html('<i class="fa fa-check"></i> Password kamu KUAT !!! bro');
      // return true;
    }
    else if (lumayan.test($(input).val())) {
      $(form_group).addClass("has-warning");
      $(help_block).html('<i class="fa fa-circle-o"></i> Password kamu GAK ADA APA-APANYA');
      // return false;
    }
    else {
      $(form_group).addClass("has-error");
      $(help_block).html('<i class="fa fa-remove"></i> Password kamu TIDAK MEMENUHI SYARAT');
      // return false;
    }
    // return false;
  }// /comprobar

  $(input).keyup(function(e){
    input.comprobar();
  });// /keyup

}// /$.fn.WaktudiCEK

$(document).ready(function(){	
  	$("#form input[name=password]").WaktudiCEK();
});// /document ready