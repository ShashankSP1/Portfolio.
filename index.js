function sendMail() {
    var params = {
        name: document.getElementById('floatingname').value,
        email: document.getElementById('floatingInput').value,
        message: document.getElementById("floatingTextarea2").value,
    };

    const ServiceID = "service_sb8tlvu";
    const TemplateID = "template_nsfyyq6";

    emailjs.send(ServiceID, TemplateID, params)
        .then(
            res => {
                document.getElementById("floatingname").value = "";
                document.getElementById("floatingInput").value = "";
                document.getElementById("floatingTextarea2").value = "";
                console.log(res);
                alert("Your message was sent successfully");
            }
        )
        .catch(err => console.log(err));
}

