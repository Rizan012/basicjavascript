function validaton()
{
    var name=document.getElementById('name').value;
    var address=document.getElementById('address').value;
    //alert(name+' '+address);
    if (name=='')
    {
        //alert('Name is required');
        document.getElementById('nameErr').innerHTML="Name is required";
        document.getElementById('name').focus();
    }
    if (address=='')
    {
       // alert('Address is required');
        document.getElementById('addressErr').innerHTML="address is required";
    }

}

document.getElementById("myform"),addEventListener("submit",validaton);