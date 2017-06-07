'use strict';

module.exports = {
    block : 'page',
    title : 'Maker',
    favicon: '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name: 'Single page template', content: '' }},
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts : [{ elem : 'js', url : 'index.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'head',
            content: [
                {
                    elem: 'logo',
                    content: 'logo goes here'
                },

                {
                    elem: 'menu',
                    content: 'menu button goes here'
                },

                {
                    elem: 'heading',
                    content: 'we build innovative companies'
                }
            ]
        },

        {
            block : 'mission',
            content : [
                {
                    elem: 'number',
                    content: '01'
                },

                {
                    elem: 'image',
                    content: ''
                },

                {
                    elem: 'text',
                    content: '...'
                }

            ]
        },

        {
            block : 'projects',
            content : [

            ]
        },

        {
            block : 'team',
            content : [

            ]
        },

        {
            block : 'event',
            content : [

            ]
        },

        {
            block : 'footer',
            content : [

            ]
        }
    ]
};
