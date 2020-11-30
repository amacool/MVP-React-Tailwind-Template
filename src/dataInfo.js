import InboxIcon from './assets/images/icons/inbox.svg';
import DraftsIcon from './assets/images/icons/drafts.svg';
import EmailSentIcon from './assets/images/icons/send-mail.svg';
import PhotoIcon from './assets/images/icons/photo.svg';
import StarIcon from './assets/images/icons/star.svg';
import InboxWorkIcon from './assets/images/icons/inbox-work.svg';
import DraftsWorkIcon from './assets/images/icons/drafts-work.svg';

export const listData = {
    simpleListData: {
        listWithIcon: [
            {
                name: 'Inbox',
                icon: InboxIcon,
            }, {
                name: 'Drafts',
                icon: DraftsIcon,
            }
        ],
        listWithoutIcon: ['Trash', 'Spam'],
    },
    nestedListData: [
        {
            name: 'Sent Mail',
            icon: EmailSentIcon,
        }, {
            name: 'Drafts',
            icon: DraftsIcon,
        }, {
            name: 'Inbox',
            icon: InboxIcon,
            subList: [
                {
                    name: 'Starred',
                    icon: StarIcon,
                },
            ]
        },
    ],
    folderListData: [
        {
            name: 'Photos',
            icon: PhotoIcon,
            date: 'Jan 9, 2014',
        }, {
            name: 'Work',
            icon: InboxWorkIcon,
            date: 'Jan 7, 2014',
        }, {
            name: 'Vacation',
            icon: DraftsWorkIcon,
            date: 'July 20, 2014',
        },
    ],
}

export const radioGroupData = {
    groupName: "Gender",
    data: [
        {
            name: "Female",
            status: "enable",
            selected: true,
        },{
            name: "Male",
            status: "enable",
            selected: false,
        },{
            name: "Other",
            status: "enable",
            selected: false,
        },{
            name: "(Disabled Option)",
            status: "disable",
            selected: false,
        },
    ]
}

export const transferListData = {
    leftBlock: [
        {
            name: "Item 1",
            selected: false,
        },{
            name: "Item 2",
            selected: false,
        },{
            name: "Item 3",
            selected: false,
        },{
            name: "Item 4",
            selected: false,
        },
    ],
    rightBlock: [
        {
            name: "Item 5",
            selected: false,
        },{
            name: "Item 6",
            selected: false,
        },{
            name: "Item 7",
            selected: false,
        },{
            name: "Item 8",
            selected: false,
        },
    ]
}

export const bottomNavigation = [
    {
        name: "Recents",
        selected: true,
    },{
        name: "Favorites",
        selected: false,
    },{
        name: "Nearby",
        selected: false,
    },
];

export const bottomNavigationWithNoLabel = [
    {
        name: "Recents",
        selected: true,
    },{
        name: "Favorites",
        selected: false,
    },{
        name: "Nearby",
        selected: false,
    },{
        name: "Folder",
        selected: false,
    },
]
