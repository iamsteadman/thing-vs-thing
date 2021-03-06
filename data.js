new Game(
    {
        name: "Policemen vs Pirates",
        xthing: 'Pirate',
        ything: 'Police',
        url: 'https://poddle.io/play/pvp/',
        seconds: 10,
        title: 'Do you know your<br /><span class="xthing">arr</span> from your' +
            '<br /><span class="ything">ello ello ello</span>?',
        rules: 'When you see an image, pick whether it&rsquo;s a pirate thing ' +
            'or a police thing. Earn points the faster you guess the image, ' +
            'and lose points when you run out of time.',
        goodbye: 'We\'re Poddle, and we made this game to celebrate ' +
            '<a href="https://poddle.io/battlegeekz/" target="_blank">Battle Geekz</a> ' +
            'joining our little podcast network. Check them out every week at ' +
            '<a href="http://battlegeekz.com/" target="_blank">battlegeekz.com</a>.',
        levels: [
            {
                intro: 'Is this',
                xthing: 'a policeman\'s helmet',
                ything: 'a seaman\'s trinket',
                buttons: {
                    xthing: 'Helmet',
                    ything: 'Trinket'
                },
                answer: 'xthing',
                image: 'assets/1.jpg'
            },
            {
                intro: 'Are this band',
                xthing: 'caught by the fuzz',
                ything: 'friggin\' in the riggin\'',
                buttons: {
                    xthing: 'Supergrass',
                    ything: 'Sex Pistols'
                },
                answer: 'xthing',
                image: 'assets/2.jpg'
            },
            {
                intro: 'Is this',
                xthing: 'Icobod Crane',
                ything: 'Captain Jack',
                buttons: {
                    xthing: 'Crane',
                    ything: 'Jack'
                },
                answer: 'ything',
                image: 'assets/3.jpg'
            },
            {
                intro: 'Is this from',
                xthing: 'Pirates of Penzance',
                ything: 'Trial by Jury',
                buttons: {
                    xthing: 'Pirates',
                    ything: 'Trial'
                },
                answer: 'ything',
                image: 'assets/4.jpg'
            },
            {
                intro: 'Is this',
                xthing: 'a glazed donut',
                ything: 'a pirate\'s booty',
                buttons: {
                    xthing: 'Donut',
                    ything: 'Booty'
                },
                answer: 'xthing',
                image: 'assets/5.jpg'
            },
            {
                intro: 'Is this',
                xthing: 'a set of knuckledusters',
                ything: 'a gold grill',
                buttons: {
                    xthing: 'Knuckleduster',
                    ything: 'Grill'
                },
                answer: 'ything',
                image: 'assets/6.jpg'
            },
            {
                intro: 'Are these a collection of',
                xthing: 'night sticks (trunctions to you)',
                ything: 'wooden legs',
                buttons: {
                    xthing: 'Night sticks',
                    ything: 'Legs'
                },
                answer: 'xthing',
                image: 'assets/7.jpg'
            },
            {
                intro: 'Is this a still from',
                xthing: 'Sharky and George',
                ything: 'Pirates of Darkwater',
                buttons: {
                    xthing: 'Sharky',
                    ything: 'Pirates'
                },
                answer: 'ything',
                image: 'assets/8.jpg'
            },
            {
                intro: 'Is this a still from',
                xthing: 'Sharky and George',
                ything: 'Pirates of Darkwater',
                buttons: {
                    xthing: 'Sharky',
                    ything: 'Pirates'
                },
                answer: 'xthing',
                image: 'assets/9.jpg'
            },
            {
                intro: 'Is this from',
                xthing: 'Pirates of Penzance',
                ything: 'Trial by Jury',
                buttons: {
                    xthing: 'Pirates',
                    ything: 'Trial'
                },
                answer: 'xthing',
                image: 'assets/10.jpg'
            },
            {
                intro: 'Is this',
                xthing: 'a glazed donut',
                ything: 'a pirate\'s booty',
                buttons: {
                    xthing: 'Donut',
                    ything: 'Booty'
                },
                answer: 'ything',
                image: 'assets/11.jpg'
            },
            {
                intro: 'Are this band',
                xthing: 'caught by the fuzz',
                ything: 'friggin\' in the riggin\'',
                buttons: {
                    xthing: 'Supergrass',
                    ything: 'Sex Pistols'
                },
                answer: 'ything',
                image: 'assets/12.jpg'
            }
        ],
        audio: {
            correct: 'right.mp3',
            incorrect: 'wrong.mp3',
            timeout: 'wrong.mp3',
            win: 'win.mp3',
            lose: 'lose.mp3',
            draw: 'draw.mp3',
            play: 'play.mp3'
        }
    }
).start();
