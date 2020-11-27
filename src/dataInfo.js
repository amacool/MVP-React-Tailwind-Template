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