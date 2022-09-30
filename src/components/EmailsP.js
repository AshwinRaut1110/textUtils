import React from 'react'

export default function EmailsP(props) {

  const regExp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;

  const getEmails = () => {
    const emailstext = props.emailsText;
    let emails = ``, result = [...emailstext.matchAll(regExp)];
    result.forEach(email => {
      emails += `${email.toString().split(',')[0]}\n`;
    });
    return emails;
  }

  return (
    <p>{getEmails()}</p>
  )
}
