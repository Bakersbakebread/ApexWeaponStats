var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Bakersbakebread/ApexWeaponStats.git', // Update to point to your repository  
        user: {
            name: 'Bread', // update to use your name
            email: 'bread@lepain.dev' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)