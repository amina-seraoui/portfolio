import { useState } from 'react'
import {FormattedMessage} from 'react-intl'

const ContactForm = ({ createAlert }) => {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [msg, setMsg] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        createAlert('info', 'Sending...')
        const data = {name, mail, msg, timestamp: new Date().getTime().toString()}
        fetch('/api/msg', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                createAlert('success', 'Message successfully sent !')
                setName('')
                setMail('')
                setMsg('')
            })
            .catch(err => {
                console.error(err)
                createAlert('error', 'An error occured. Please verify all the fields or retry later.')
            })
    }

    return <form method="POST" onSubmit={handleSubmit}>
        <div className="field">
            <label htmlFor="name"><FormattedMessage id="contact.form.name" defaultMessage="Your name" /> :</label>
            <input id="name" type="text" placeholder="Jane Doe" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="field">
            <label htmlFor="mail"><FormattedMessage id="contact.form.mail" defaultMessage="Your e-mail" /> :</label>
            <input id="mail" type="email" placeholder="jane.doe@example.com" value={mail} onChange={e => setMail(e.target.value)} required />
        </div>
        <div className="field">
            <label htmlFor="message"><FormattedMessage id="contact.form.message" defaultMessage="Your message" /> :</label>
            <textarea id="message" placeholder="Hello, ..." value={msg} onChange={e => setMsg(e.target.value)} required />
        </div>
        <button className="btn primary" type="submit"><FormattedMessage id="contact.form.send" defaultMessage="Send" /></button>
    </form>
}

export default ContactForm