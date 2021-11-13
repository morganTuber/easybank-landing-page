export interface IFeature {
    icon: string
    title: string
    description: string
}
export const features: IFeature[] = [
    {
        icon: '/images/icon-online.svg',
        title: 'Online Banking',
        description:
            'Our modern web and mobile applications allow you to keep track of your finances whenever you are in the world.',
    },
    {
        icon: '/images/icon-budgeting.svg',
        title: 'Simple Budgeting',
        description:
            "See exactly where your money goes each month.Receive notifications when you're close to hitting your limits.",
    },
    {
        icon: '/images/icon-onboarding.svg',
        title: 'Fast Onboarding',
        description:
            "We don't do branches.Open your account in minutes online and start taking control of your finances right away",
    },
    {
        icon: '/images/icon-api.svg',
        title: 'Open API',
        description:
            'Manage your savings, investments, pension, and much more from one account.Tracking your money has never been easier.',
    },
]
