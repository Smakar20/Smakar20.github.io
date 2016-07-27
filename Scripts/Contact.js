/* File-name: Contact.js
     Name: Sohini Makar 
 	 Description: Script for contact pages
*/
$(document).ready(function() {

    $('#someForm').on('submit', function(e) {
        e.preventDefault();
        
        //get the name field value
        var name = $('#ViewerName').val();
        //get the name field value
        var email = $('#ViewerEmail').val();
        //get the phone number
        var phone = $('#ViewerPh').val();
        //get the comments
        var comments = $('#ViewerComnt').val();
                    
        var flag = true; //form will be submitted only if this flag is true
        var message = "Please enter a valid\n";
        if(name !="" && email != "")
        {
            //name is checked for only characters
            if(!name.match(/^[\w\+]+[A-Za-z\s]+$/))
            {
                message += "Name\n"; 
            }
            //email validation
            if(!email.match(/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/))
            {
                message += "Email\n";
            }
            /*phone number validation to accept only numbers and '-', '+', '(' and ')' 
            if field is not blank. it's not a mandatory field.*/
            if(phone != "")
            {
                if(!phone.match(/^[0-9\-\s\+\(\)]+$/) || phone.length < 10)
                {
                    message += "Phone Number";
                }
            }

            if(message !== "Please enter a valid\n")
            {
                flag = false;
                alert(message);
            }
        }
        /*when required fields name or email is blank flag is set to false and the form
         is prevented from submission.*/
        else
        {
            flag = false;
            alert("Please enter Name and Email.");
        }
        //send to formspree
        if(flag)
        {
            $.ajax({
            url:'https://formspree.io/sohini.makar@gmail.com',
            method:'POST',
            data:{
                name:name,
                //_replyto:email,
                email:email,
                phone:phone,
                comments:comments,
                _subject:'Email from '+ name,
            },
            dataType:"json",
            success:function() {
                console.log('success'); 
                $('#formBlock').hide();
                $('#thankyouBlock').show();
                }   
            });
        }            
    });

});
