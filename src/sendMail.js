import emailjs from "@emailjs/browser";

const sendEmail = async (
  formData,
  setSuccessMessage,
  setErrorMessage,
  setFormData
) => {
  try {
    const templateParams = {
      to_name: "Silver Pyramids Customer Service",
      email_subject: formData.subject,
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone_number,
      message: formData.message,
    };

    await emailjs.send(
      "service_16n23qn",
      "template_lht6mfl",
      templateParams,
      "CUdzn1eZGHstZxadA"
    );

    setSuccessMessage("Your message has been sent successfully");
    setErrorMessage("");
    setFormData({
      name: "",
      phone_number: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    setSuccessMessage("");
    setErrorMessage(error);
  }
};

export default sendEmail;
