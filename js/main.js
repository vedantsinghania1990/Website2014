$(document).ready(function(){


			$(".wheel-button").wheelmenu({
        		trigger: "hover",
        		animation: "fly",
        		animationSpeed: "medium"
      		});
			$('#myTab a[href="#Education"]').click(function (e) {
  				e.preventDefault()
  				$(this).tab('show')
			});
			$('#myTab a[href="#Experience"]').click(function (e) {
  				e.preventDefault()
  				$(this).tab('show')
			});
			$('#myTab a[href="#Projects"]').click(function (e) {
  				e.preventDefault()
  				$(this).tab('show')
			});
			$('#myTab a[href="#Contact"]').click(function (e) {
  				e.preventDefault()
  				$(this).tab('show')
			});

			/*$('#myModal').modal({
  				keyboard: true
			});*/


		});


		