export interface IArticle {
    image: string
    author: string
    title: string
    content: string
}

export const articles: IArticle[] = [
    {
        image: '/images/image-currency.jpg',
        author: 'Claire Robinson',
        title: 'Receive money in any currency with no fees',
        content:
            'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single … ',
    },
    {
        image: '/images/image-restaurant.jpg',
        author: 'Wilson Hutton',
        title: 'Treat yourself without worrying about money',
        content:
            'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
    },
    {
        image: '/images/image-plane.jpg',
        author: 'Wilson Hutton',
        title: 'Take your easybak card whenever you go',
        content:
            'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
    },
    {
        image: '/images/image-confetti.jpg',
        author: 'Claire Robinson',
        title: 'Our invite-only Beta accounts are now live',
        content:
            'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..',
    },
]
