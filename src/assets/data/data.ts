import { ContactDetails } from "../../app/interfaces/interfaces";

export const workexperience: any = [
    {   
        date: 'Jun 2022 - Jan 2023', pos: 'experience.title.4', 
        desc: ['experience.desc.4a', 'experience.desc.4b', 'experience.desc.4c', 'experience.desc.4d'], 
        shape: "success-standard", img: "../../assets/images/cra-logo.png" 
    },
    {   
        date: 'Dec 2021 - Jun 2022', pos: 'experience.title.3', 
        desc: ['experience.desc.3a', 'experience.desc.3b', 'experience.desc.3c', 'experience.desc.3d', 'experience.desc.3e'], 
        shape: "success-standard" 
    },
    {   
        date: 'Sep 2020 - Dec 2021', pos: 'experience.title.2', 
        desc: ['experience.desc.2a', 'experience.desc.2b', 'experience.desc.2c', 'experience.desc.2d', 'experience.desc.2e'], 
        shape: "success-standard"
    },
    {   
        date: 'Mar 2016 - Dec 2019', pos: 'experience.title.1', 
        desc: ['experience.desc.1a', 'experience.desc.1b', 'experience.desc.1c', 'experience.desc.1d', 'experience.desc.1e'], 
        shape: "success-standard", img: "../../assets/images/cineplex-logo.png" 
    },
];

export const eduDetials: any = [
    {   
        date: 'Sep 2018 - Apr 2022', pos: 'education.title.2', 
        desc: ['education.desc.2a', 'education.desc.2b', 'education.desc.2c', 'education.desc.2d', 'education.desc.2e', 'education.desc.2f', 'education.desc.2g'], 
        shape: "success-standard", img: "../../assets/images/Fanshawe-logo.png" 
    },
    {   
        date: 'Sep 2014 - Jun 2028', pos: 'education.title.1', 
        desc: ['education.desc.1a', 'education.desc.1b'], 
        shape: "success-standard", img: "../../assets/images/ucc-logo.png" 
    }
];

export const certDetails: any = [
    {   
        date: 'TBD', pos: 'certifications.title.2', 
        desc: ['certifications.desc.2a'], 
        shape: "spinner", img: "../../assets/images/google-logo.png" 
    },
    {   
        date: 'Jan 2023', pos: 'certifications.title.1', 
        desc: ['certifications.desc.1a'], 
        shape: "success-standard", img: "../../assets/images/web_age_solutions_logo.jpg" 
    }
];

export const aboutme: any = [
    { header: 'Who am I?', desc: 'about.me.who.am.i', img: "../../assets/images/logo.png", icon: "user" },
    { header: 'Work experience', desc: '', tree: workexperience, icon: "suitcase2" },
    { header: 'Education background', tree: eduDetials, icon: "book" },
    { header: 'Certifications', desc: '', tree: certDetails, icon: "certificate" }
];

export const contactmedetails: ContactDetails[] = [
    { link: 'https://www.linkedin.com/in/jordanwootton/', img: '../../assets/images/icons/linkedin.png', label_tag: '/jordanwootton' },
    { link: 'https://github.com/JWootts', img: '../../assets/images/icons/github.png', label_tag: '/jwootts' },
    { link: 'mailto:contact@jordanwootton.ca', img: '../../assets/images/icons/email.png', label_tag: '/contact' },
];

// ---------- UPDATE BELOW (CUSTOM FIELDS) ---------------------

// -- EmailJS (currently not in use, mailto: is being used)
export const public_key: string = '';
export const service_id: string = '';
export const template_id: string = '';

// -- Project Service lookup (per github user specified) with auth token
export const github_api_key: string = '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';
export const github_repos_url: string = 'https://api.github.com/users/JWootts/repos';

