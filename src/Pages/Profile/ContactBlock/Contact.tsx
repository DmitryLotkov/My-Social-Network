import React from 'react';

import s from './Contacts.module.scss';

export type ContactsPropsType = {
  contactTitle: string;
  contactValue?: string | null;
};

export const Contact = ({ contactTitle, contactValue }: ContactsPropsType) => (
  <>
    <strong className={s.contact}>{contactTitle}:</strong> {contactValue}
  </>
);
