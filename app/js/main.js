/*
$(document).ready(function() {

// ���������\���������� ������ true\false.
var on1 = true;
var on2 = true;
var on3 = false;
// ���������\���������� ������ true\false.
    
	// ���� ����� 1.
	if (on1 == true) {
	 $(".on-1").click(function() {
                
				if ( $(".off-1").hasClass("box") ) {
                $(".off-1").removeClass('box box-on'); 
                $(".off-1").addClass('box-off');       
                }
				else {
				$(".off-1").removeClass('box-off box-on'); 
                $(".off-1").addClass('box'); 
				}
      });
	  }
	  else {
	     $(".off-1").removeClass('box box-off'); 
         $(".off-1").addClass('box-on'); 
	  }
	  // ���� ����� 1.
	  
	  // ���� ����� 2.
	  if (on2 == true) {
	  $(".on-2").click(function() {
                
				if ( $(".off-2").hasClass("box") ) {
                $(".off-2").removeClass('box box-on'); 
                $(".off-2").addClass('box-off');       
                }
				else {
				$(".off-2").removeClass('box-off box-on'); 
                $(".off-2").addClass('box'); 
				}
      });
	  }
	  else {
	     $(".off-2").removeClass('box box-off'); 
         $(".off-2").addClass('box-on'); 
	  }
	  // ���� ����� 2.
	  
	  // ���� ����� 3.
	  if (on3 == true) {
	  $(".on-3").click(function() {
                
				if ( $(".off-3").hasClass("box") ) {
                $(".off-3").removeClass('box box-on'); 
                $(".off-3").addClass('box-off');       
                }
				else {
				$(".off-3").removeClass('box-off box-on'); 
                $(".off-3").addClass('box'); 
				}
      });
	  }
	  else {
	     $(".off-3").removeClass('box box-off'); 
         $(".off-3").addClass('box-on'); 
	  }
	  // ���� ����� 3.
	  
//--------------------------------------------------------------------
//--------------------------------------------------------------------
	 
    // ��������� �� ���������.
    var width = $(window).width();
    if (width > 795) { // �������� ������ ��� ������� �������.	
	var height = $(window).height();
    var HeightBlock = $(".wrapper").height() - 20;	 
	var Margin = height - HeightBlock;
	Margin /= 2;
    MarginTop = parseFloat(Margin.toFixed());
	//alert(MarginTop);
    $(".wrapper").css("margin-top", MarginTop);
	}
	// ��������� �� ���������.
    
 });
 */