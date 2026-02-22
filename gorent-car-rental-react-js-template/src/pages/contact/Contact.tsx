import React from 'react';
import Banner from '../../sections/common/Banner';
import ContactMain from '../../sections/contact/ContactMain';

const Contact: React.FC = () => {
    return (
        <>
            <Banner breadcrumb='Contact' />
            <ContactMain />
        </>
    );
};

export default Contact;