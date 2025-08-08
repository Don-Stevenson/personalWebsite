import ContactPage from "../../pages/ContactPage"

export default function Contact() {
  const contact = { title: "Talk to Me." }

  return <ContactPage title={contact.title} />
}
