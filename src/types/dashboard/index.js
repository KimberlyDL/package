// src\types\dashboard\index.js

/*Card types*/
const BlogCards = {
    avatar: '',
    coveravatar: '',
    read: '',
    title: '',
    link: '',
    category: '',
    name: '',
    view: '',
    comments: '',
    time: ''
};

/*Table Action*/
const tableAction = {
    icon: null,  // TablerIconComponent would be replaced with actual data later
    listtitle: ''
};

const ProductTable = {
    img: '',
    name: '',
    payment: '',
    paymentstatus: '',
    process: 0,
    processcolor: '',
    statuscolor: '',
    statustext: ''
};

const EarningReports = {
    icon: '',
    subtitle: '',
    title: '',
    color: '',
    statuscolor: '',
    statustext: ''
};

// In JavaScript, we don't need to export types, but you can export objects
export { EarningReports, BlogCards, tableAction, ProductTable };
