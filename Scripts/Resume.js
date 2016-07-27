/* File-name: Resume.js
     Name: Sohini Makar 
 	 Description:Script resume
*/
$(document).ready(function(){

    $("#CloseOra").click(function(){
     $("#OpenOra").hide();
    });

    $("#OraCertf").click(function(){
    	$("#OpenOra").show();
    });

    $("#CloseHtml").click(function(){
    	$("#OpenHtml").hide();
    });

    $("#HtmlCertf").click(function(){
    	$("#OpenHtml").show();
    });
    
 });